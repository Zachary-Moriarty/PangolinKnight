class Slime{
    constructor(info, player){
        this.tag = "enemy";
        this.home = info.position;
        this.transform = new Transform(new Vec2(info.position[0] * 16 + 8, info.position[1] * 16 + 8), 1, new Vec2(0,0));
        this.health = new Health(3, 3);
        this.invincible = new Invincible(0.05);
        this.collider = new Collider(new Circle(this.transform.pos, 8), true, true, false);
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slime_enemy.png");
        this.move_speed = 20;
        this.direction = randomInt(4);
        this.move_time = 3;
        this.delay_time = 3;
        this.player = player;
        this.animation = new Animator(this.spritesheet, 0, 0, 16, 16, 4, 0.33, true);;
        this.updatable = false;
        this.overlap_damage = true;
    }
    

    update(){


        if(this.invincible.active){
            invulnerability_active(this);  
        }
        
        if (this.knockback != undefined){
            if(gameEngine.timer.gameTime >= this.knockback.knockback_end_time){
                this.knockback = undefined;
            }
        }
        else{
            // Reset velocity
            this.transform.velocity.x = 0;
            this.transform.velocity.y = 0;
            if(this.move_time > 0){
                
                switch(this.direction){
                    case 0:
                        this.transform.velocity.x += this.move_speed;
                        this.move_time -= gameEngine.clockTick;
                        break;
                    case 1:
                        this.transform.velocity.x -= this.move_speed;
                        this.move_time -= gameEngine.clockTick;
                        break;
                    case 2:
                        this.transform.velocity.y += this.move_speed;
                        this.move_time -= gameEngine.clockTick;
                        break;
                    case 3:
                        this.transform.velocity.y -= this.move_speed;
                        this.move_time -= gameEngine.clockTick;
                        break;
                }
            }
            else if(this.delay_time <= 0){
                this.move_time = Math.random() * 3;
                this.delay_time = Math.random() * 3;
                this.direction = randomInt(4);
            }
            else{
                this.delay_time-=gameEngine.clockTick;
            }
        }
        


        // Figure out the direction for animation
        if(this.transform.velocity.x > 0){
            this.facing = 0;
        }
        else if(this.transform.velocity.x < 0){
            this.facing = 1;
        }
        if(this.transform.velocity.y < 0){
            this.facing = 2;
            }
        else if(this.transform.velocity.y > 0){
            this.facing = 3;
        }

         // Adjust position from velocity
    }

    reset(){
        this.transform.velocity.x = 0;
        this.transform.velocity.y = 0;
        this.transform.pos.x = this.home[0] * 16 + 8;
        this.transform.pos.y = this.home[1] * 16 + 8;
        this.health.current = this.health.max;
        this.invincible.active = false;
        if(this.removeFromWorld){
            this.removeFromWorld = false;
            gameEngine.addEntity(this);
        }
    }

    draw(ctx){
        this.animation.drawFrame(gameEngine.clockTick, ctx, this.transform.pos.x, this.transform.pos.y, 16, 16, this.invincible.inverted);
    }

    die(){
        let explosion = new Explosion(this);
        if(gameEngine.gravity){
            gameEngine.addEntity(explosion);
        }else{
            gameEngine.camera.rooms[Math.floor(explosion.transform.pos.x/roomWidth)][Math.floor(explosion.transform.pos.y/roomHeight)].addEntity(explosion);
        }
        this.removeFromWorld = true;
        for(let i = 0; i < 4; i++){
            let random_modifier_x = (Math.random() * 16) - 8;
            let random_modifier_y = (Math.random() * 16) - 8;
            let slime_child = new SlimeChild(new Vec2(this.transform.pos.x + random_modifier_x, this.transform.pos.y + random_modifier_y), this.player);
            if(gameEngine.gravity){
                gameEngine.addEntity(slime_child);
            }else{
                gameEngine.camera.rooms[Math.floor(slime_child.transform.pos.x/roomWidth)][Math.floor(slime_child.transform.pos.y/roomHeight)].addEntity(slime_child);
            }
        }
    }
}

class SlimeChild{
    constructor(pos, player){
        this.tag = "enemy";
        this.transform = new Transform(pos.clone(), 1, new Vec2(0,0));
        this.health = new Health(1, 1);
        this.invincible = new Invincible(0.1);
        this.invincible.active = true;
        this.in_air = new In_Air(90, 100, 70, 26);
        this.collider = new Collider(new Circle(this.transform.pos, 6), true, true, false);
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/slime_child_enemy.png");
        this.move_speed = randomRange(15, 25);
        this.move_time = 3;
        this.delay_time = 3;
        this.jumping = 0;
        this.player = player;
        this.player_distance_threshhold = 32;
        this.animations = [];
        this.loadAnimations();
        this.updatable = true;
        this.direction;
        this.overlap_damage = true;
        this.shadow = new Shadow(gameEngine, this.transform.pos, 12);
        this.shadow.active = false;
        gameEngine.addEntity(this.shadow);
    }

    loadAnimations(){
        for (let i = 0; i < 2; i++){
            this.animations.push([]);
        }

        // moving
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 12, 12, 2, 0.33, true);

        // Jumping
        this.animations[1] = new Animator(this.spritesheet, 0, 0, 12, 12, 5, 0.33, true);
    }
    

    update(){
        if(this.invincible.active){
            invulnerability_active(this);  
        }
        //console.log(this.transform.pos.compute_distance(this.player.transform.pos));
        if(this.transform.pos.compute_distance(this.player.transform.pos) < this.player_distance_threshhold && !this.jumping && !this.invincible.active){
            //console.log("close");
            this.jumping = true;
            this.shadow.active = true;
            if(Math.abs( this.player.transform.pos.x - this.transform.pos.x) > Math.abs(this.player.transform.pos.y - this.transform.pos.y)){// X is closer
                if( this.player.transform.pos.x > this.transform.pos.x){
                    this.direction = 0;
                }
                else if( this.player.transform.pos.x < this.transform.pos.x){
                    this.direction = 1;
                }
            }
            else{
                if( this.player.transform.pos.y < this.transform.pos.y){
                    this.direction = 2;
                }
                else if( this.player.transform.pos.y > this.transform.pos.y){
                    this.direction = 3;
                }
            }
        }
        // Reset velocity
        if(this.jumping){
            if (this.in_air.distance_remaining <= 0){
                this.in_air.distance_remaining = this.in_air.air_distance * this.in_air.starting_percentage;
                this.jumping = false;
                this.shadow.active = false;
            }
            else{
                in_air_jump(this, this.direction);
            }
            
        }
        else{
            this.transform.velocity.x = 0;
            this.transform.velocity.y = 0;
            if (this.transform.pos.x < this.player.transform.pos.x && this.move_time > 0){
                this.transform.velocity.x += this.move_speed;
                this.move_time -= gameEngine.clockTick;
            }
            else if (this.transform.pos.x > this.player.transform.pos.x && this.move_time > 0){
                this.transform.velocity.x -= this.move_speed;
                this.move_time -= gameEngine.clockTick;
            }
            if (this.transform.pos.y < this.player.transform.pos.y && this.move_time > 0){
                this.transform.velocity.y += this.move_speed;
                this.move_time -= gameEngine.clockTick;
            }
            else if (this.transform.pos.y > this.player.transform.pos.y && this.move_time > 0){
                this.transform.velocity.y -= this.move_speed;
                this.move_time -= gameEngine.clockTick;
            }
            else if(this.delay_time <= 0){
                this.move_time = randomRange(1, 3);
                this.delay_time = randomFloatRange(0.1, 1);
            }
            else{
                this.delay_time-=gameEngine.clockTick;
            }
        }
        
    }

    draw(ctx){
        this.animations[this.jumping ? 1 : 0].drawFrame(gameEngine.clockTick, ctx, this.transform.pos.x, this.transform.pos.y - this.in_air.z, 12, 12, this.invincible.inverted);
    }

    die(drop = true){
        let explosion = new Explosion(this);
        this.shadow.active = false;
        gameEngine.addEntity(explosion);
        this.removeFromWorld = true;
        if(drop){
            create_item(item_enum.small_heart, this.transform.pos, 1, 0.2);
            create_item(item_enum.scale, this.transform.pos, 1, 0.15);
        }
    }

    reset(){
        this.die(false);
    }
}