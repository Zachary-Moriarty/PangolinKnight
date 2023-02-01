var levels = {
    1 : {
        mapSprite: './sprites/map.png',
        pots : [{position : [1,1]},{position : [2,1]},{position : [1,6]},{position : [2,6]},{position : [11,1]},{position : [11,6]},{position : [18,1]},{position : [18,6]},{position : [24,3]},{position : [25,3]},{position : [24,4]},{position : [25,4]},{position : [23,14]},{position : [24,14]},{position : [25,14]},{position : [26,14]}],
        blocks : [{position : [7,3]},/*{position : [7,4]},*/{position : [8,2]},{position : [8,5]},{position : [17,9]}],
        chests : [{position : [18,9]}],
        //doors : [{position : [10,11], state : 0},{position : [10,12],state :0}],
        crystals : [{position : [13,3]},{position : [16,3]},{position : [12,13]}],
        statues : [{position : [3,12]},{position : [6,12]},{position : [22,2]},{position : [27,2]},{position : [22,5]},{position : [27,5]},{position : [22,10]},{position : [27,10]},{position : [22,13]},{position : [27,13]}],
        frogs : [{position : [5,6]}],
        stairs : [{position : [1,9]}],
        rooms : [{position : [0,0], doors : {up : {state : 4}, down : {state : 4}, left : {state : 4}, right : {state : 5}}},
        {position : [0,1], doors : {up : {state : 4}, down : {state : 4}, left : {state : 4}, right : {state : 5}}},
        {position : [0,2], doors : {up : {state : 4}, down : {state : 4}, left : {state : 4}, right : {state : 4}}},
        {position : [1,0], doors : {up : {state : 4}, down : {state : 5}, left : {state : 5}, right : {state : 5}}},
        {position : [1,1], doors : {up : {state : 5}, down : {state : 4}, left : {state : 0}, right : {state : 4}}},
        {position : [1,2], doors : {up : {state : 4}, down : {state : 4}, left : {state : 4}, right : {state : 4}}},
        {position : [2,0], doors : {up : {state : 4}, down : {state : 5}, left : {state : 5}, right : {state : 4}}},
        {position : [2,1], doors : {up : {state : 5}, down : {state : 4}, left : {state : 4}, right : {state : 4}}},
        {position : [2,2], doors : {up : {state : 4}, down : {state : 4}, left : {state : 4}, right : {state : 4}}}]
    },
    2 : {
        mapSprite: './sprites/map.png',
        pots : [],
        blocks : [],
        chests : [],
        doors : [],
        crystals : [],
        statues : [],
        frogs : [],
        stairs : [],
        rooms : []
    },
    3 : {
        mapSprite: './sprites/Level1map.png',
        start : [59,63],
        blocks : [{position : [60, 53], state : 0},{position : [60, 54], state : 0},{position : [60, 55], state : 0},{position : [60, 56], state : 0},{position : [60, 57], state : 0},{position : [60, 58], state : 0},{position : [60, 60], state : 0},{position : [60, 59], state : 0},{position : [60, 61], state : 0},{position : [60, 62], state : 0},{position : [60, 63], state : 0},{position : [58, 53], state : 0},{position : [58, 54], state : 0},{position : [58, 55], state : 0},{position : [58, 56], state : 0},{position : [58, 57], state : 0},{position : [58, 58], state : 0},{position : [58, 60], state : 0},{position : [58, 59], state : 0},{position : [58, 61], state : 0},{position : [58, 62], state : 0},{position : [58, 63], state : 0},{position : [42, 7], state : 0},{position : [41, 6], state : 0},{position : [42, 5], state : 0},{position : [43, 6], state : 0},{position : [27, 11], state : 0},{position : [27, 10], state : 0},{position : [27, 9], state : 0},{position : [26, 9], state : 0},{position : [25, 9], state : 0},{position : [24, 9], state : 0},{position : [23, 9], state : 0},{position : [23, 10], state : 0},{position : [23, 10], state : 0},{position : [23, 11], state : 0},{position : [15, 5], state : 0},{position : [14, 6], state : 0},{position : [15, 7], state : 0},{position : [14, 8], state : 0},{position : [14, 4], state : 0},{position : [15, 3], state : 0},{position : [15, 9], state : 0},{position : [13, 9], state : 0},{position : [13, 7], state : 0},{position : [13, 5], state : 0},{position : [13, 3], state : 0},{position : [12, 10], state : 0},{position : [11, 10], state : 0},{position : [10, 10], state : 0},{position : [8, 10], state : 0},{position : [9, 10], state : 0},{position : [7, 10], state : 0},{position : [6, 10], state : 0},{position : [5, 10], state : 0},{position : [4, 10], state : 0},{position : [3, 10], state : 0},{position : [2, 10], state : 0},{position : [2, 9], state : 0},{position : [2, 8], state : 0},{position : [2, 7], state : 0},{position : [2, 6], state : 0},{position : [2, 5], state : 0},{position : [2, 4], state : 0},{position : [2, 3], state : 0},{position : [2, 2], state : 0},{position : [3, 2], state : 0},{position : [4, 2], state : 0},{position : [5, 2], state : 0},{position : [6, 2], state : 0},{position : [7, 2], state : 0},{position : [8, 2], state : 0},{position : [9, 2], state : 0},{position : [10, 2], state : 0},{position : [11, 2], state : 0},{position : [12, 2], state : 0},{position : [12, 18], state : 0},{position : [12, 19], state : 0},{position : [12, 20], state : 0},{position : [4, 18], state : 0},{position : [4, 20], state : 0},{position : [4, 19], state : 0},{position : [32, 19], state : 0},{position : [31, 19], state : 0},{position : [29, 19], state : 0},{position : [30, 19], state : 0},{position : [28, 19], state : 0},{position : [27, 19], state : 0},{position : [26, 19], state : 0},{position : [25, 19], state : 0},{position : [24, 19], state : 0},{position : [23, 19], state : 0},{position : [22, 19], state : 0},{position : [21, 19], state : 0},{position : [20, 19], state : 0},{position : [19, 19], state : 0},{position : [18, 19], state : 0}],
        statues : [{position : [62, 54], state : 0},{position : [64, 54], state : 0},{position : [66, 54], state : 0},{position : [66, 56], state : 0},{position : [64, 56], state : 0},{position : [62, 56], state : 0},{position : [62, 58], state : 0},{position : [64, 58], state : 0},{position : [66, 58], state : 0},{position : [66, 60], state : 0},{position : [64, 60], state : 0},{position : [62, 60], state : 0},{position : [62, 62], state : 0},{position : [64, 62], state : 0},{position : [66, 62], state : 0},{position : [52, 54], state : 0},{position : [54, 54], state : 0},{position : [56, 54], state : 0},{position : [56, 56], state : 0},{position : [54, 56], state : 0},{position : [52, 56], state : 0},{position : [52, 58], state : 0},{position : [54, 58], state : 0},{position : [56, 58], state : 0},{position : [56, 60], state : 0},{position : [54, 60], state : 0},{position : [52, 60], state : 0},{position : [52, 62], state : 0},{position : [54, 62], state : 0},{position : [56, 62], state : 0},{position : [74, 30], state : 0},{position : [74, 34], state : 0},{position : [78, 34], state : 0},{position : [78, 30], state : 0},{position : [70, 28], state : 0},{position : [70, 36], state : 0},{position : [82, 36], state : 0},{position : [82, 28], state : 0},{position : [19, 41], state : 0},{position : [31, 41], state : 0},{position : [31, 49], state : 0},{position : [19, 49], state : 0},{position : [23, 43], state : 0},{position : [27, 43], state : 0},{position : [27, 47], state : 0},{position : [23, 47], state : 0}],
        pots : [{position : [54, 40], state : 0},{position : [53, 40], state : 0},{position : [52, 40], state : 0},{position : [52, 41], state : 0},{position : [54, 41], state : 0},{position : [53, 41], state : 0},{position : [54, 42], state : 0},{position : [53, 42], state : 0},{position : [52, 42], state : 0},{position : [52, 43], state : 0},{position : [54, 43], state : 0},{position : [53, 43], state : 0},{position : [54, 44], state : 0},{position : [53, 44], state : 0},{position : [52, 44], state : 0},{position : [52, 45], state : 0},{position : [54, 45], state : 0},{position : [53, 45], state : 0},{position : [54, 46], state : 0},{position : [53, 46], state : 0},{position : [52, 46], state : 0},{position : [52, 47], state : 0},{position : [54, 47], state : 0},{position : [53, 47], state : 0},{position : [54, 48], state : 0},{position : [53, 48], state : 0},{position : [52, 48], state : 0},{position : [52, 49], state : 0},{position : [54, 49], state : 0},{position : [53, 49], state : 0},{position : [52, 50], state : 0},{position : [54, 50], state : 0},{position : [53, 50], state : 0},{position : [66, 40], state : 0},{position : [65, 40], state : 0},{position : [64, 40], state : 0},{position : [64, 41], state : 0},{position : [66, 41], state : 0},{position : [65, 41], state : 0},{position : [66, 42], state : 0},{position : [65, 42], state : 0},{position : [64, 42], state : 0},{position : [64, 43], state : 0},{position : [66, 43], state : 0},{position : [65, 43], state : 0},{position : [66, 44], state : 0},{position : [65, 44], state : 0},{position : [64, 44], state : 0},{position : [64, 45], state : 0},{position : [66, 45], state : 0},{position : [65, 45], state : 0},{position : [66, 46], state : 0},{position : [65, 46], state : 0},{position : [64, 46], state : 0},{position : [64, 47], state : 0},{position : [66, 47], state : 0},{position : [65, 47], state : 0},{position : [66, 48], state : 0},{position : [65, 48], state : 0},{position : [64, 48], state : 0},{position : [64, 49], state : 0},{position : [66, 49], state : 0},{position : [65, 49], state : 0},{position : [64, 50], state : 0},{position : [66, 50], state : 0},{position : [65, 50], state : 0},{position : [49, 36], state : 0},{position : [49, 37], state : 0},{position : [48, 37], state : 0},{position : [49, 28], state : 0},{position : [49, 27], state : 0},{position : [48, 27], state : 0},{position : [36, 27], state : 0},{position : [35, 27], state : 0},{position : [35, 28], state : 0},{position : [35, 36], state : 0},{position : [35, 37], state : 0},{position : [36, 37], state : 0},{position : [49, 23], state : 0},{position : [49, 24], state : 0},{position : [48, 24], state : 0},{position : [36, 24], state : 0},{position : [35, 24], state : 0},{position : [35, 23], state : 0},{position : [9, 24], state : 0},{position : [7, 24], state : 0},{position : [7, 14], state : 0},{position : [9, 14], state : 0},{position : [9, 27], state : 0},{position : [9, 28], state : 0},{position : [9, 29], state : 0},{position : [9, 30], state : 0},{position : [14, 31], state : 0},{position : [15, 31], state : 0},{position : [12, 31], state : 0},{position : [13, 31], state : 0},{position : [11, 31], state : 0},{position : [10, 31], state : 0},{position : [9, 31], state : 0},{position : [15, 33], state : 0},{position : [14, 33], state : 0},{position : [13, 33], state : 0},{position : [12, 33], state : 0},{position : [11, 33], state : 0},{position : [10, 33], state : 0},{position : [9, 33], state : 0},{position : [8, 33], state : 0},{position : [7, 33], state : 0},{position : [7, 32], state : 0},{position : [7, 31], state : 0},{position : [7, 30], state : 0},{position : [7, 29], state : 0},{position : [7, 28], state : 0},{position : [7, 27], state : 0},{position : [32, 14], state : 0},{position : [32, 24], state : 0},{position : [18, 24], state : 0}],
        crystals : [{position : [61, 30], state : 0},{position : [57, 30], state : 0},{position : [57, 34], state : 0},{position : [61, 34], state : 0},{position : [42, 8], state : 0},{position : [42, 9], state : 0},{position : [42, 4], state : 0},{position : [42, 3], state : 0},{position : [40, 6], state : 0},{position : [39, 6], state : 0},{position : [44, 6], state : 0},{position : [45, 6], state : 0},{position : [43, 5], state : 0},{position : [44, 4], state : 0},{position : [41, 5], state : 0},{position : [40, 4], state : 0},{position : [40, 8], state : 0},{position : [44, 8], state : 0},{position : [45, 9], state : 0},{position : [39, 9], state : 0},{position : [39, 3], state : 0},{position : [45, 3], state : 0},{position : [46, 6], state : 0},{position : [38, 6], state : 0},{position : [42, 2], state : 0},{position : [28, 6], state : 0},{position : [22, 6], state : 0}],
        pits : [{position : [46, 14], state : 0},{position : [38, 14], state : 0},{position : [46, 24], state : 2},{position : [38, 24], state : 2},{position : [46, 23], state : 1},{position : [46, 22], state : 1},{position : [46, 21], state : 1},{position : [46, 20], state : 1},{position : [46, 19], state : 1},{position : [46, 18], state : 1},{position : [46, 17], state : 1},{position : [46, 16], state : 1},{position : [46, 15], state : 1},{position : [38, 15], state : 1},{position : [38, 16], state : 1},{position : [38, 17], state : 1},{position : [38, 18], state : 1},{position : [38, 19], state : 1},{position : [38, 20], state : 1},{position : [38, 21], state : 1},{position : [38, 22], state : 1},{position : [38, 23], state : 1},{position : [15, 18], state : 0},{position : [14, 18], state : 0},{position : [13, 18], state : 0},{position : [3, 18], state : 0},{position : [2, 18], state : 0},{position : [1, 18], state : 0},{position : [1, 20], state : 2},{position : [2, 20], state : 2},{position : [3, 20], state : 2},{position : [13, 20], state : 2},{position : [14, 20], state : 2},{position : [15, 20], state : 2},{position : [15, 19], state : 1},{position : [14, 19], state : 1},{position : [13, 19], state : 1},{position : [3, 19], state : 1},{position : [2, 19], state : 1},{position : [1, 19], state : 1}],
        chests : [{position : [49, 14], state : 0},{position : [35, 14], state : 0},{position : [42, 6], state : 0},{position : [18, 14], state : 0}],
        doors : [{position : [76, 25], state : 0},{position : [42, 26], state : 0},{position : [42, 13], state : 0},{position : [17, 45], state : 0},{position : [17, 6], state : 0},{position : [16, 32], state : 0},{position : [59, 64], state : 0}],
        stairs : [{position : [1, 45], state : 0}],
        frogs : [{position : [58, 45], state : 0}],
        rooms : []}
}