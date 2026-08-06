
export const dualScrollStyleDepencies = (animationDirection:string) => {
    return {
        col: {
            main: {},
            eachCon: {flexDirection: animationDirection=="reverse"?"column-reverse":"column"},
            eachCon_2: {flexDirection:  animationDirection=="reverse"?"column":"column-reverse"},
            each: {},
            each_2: {},
        },
        row: {
            main: {},
            eachCon: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"row":"row-reverse", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            each: {},
            each_2: {},
        },
        col_2: {
            main: {flexDirection: "column"},
            eachCon: {flexDirection: animationDirection=="reverse"?"column-reverse":"column", height: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"column":"column-reverse", height: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            each: {},
            each_2: {},
        },
        row_2: {
            main: {flexDirection: "column"},
            eachCon: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", height: "50%",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"row":"row-reverse", height: "50%",},
            each: {},
            each_2: {},
        },
        stack: {
            main: {flexDirection: "column"},
            eachCon: {flexDirection: animationDirection=="reverse"?"column-reverse":"column", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"column-reverse":"column", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            each: {position:"sticky", [animationDirection=="reverse"?"bottom":"top"]: 0},
            each_2: {position:"sticky", [animationDirection=="reverse"?"bottom":"top"]: 0},
        },
        stack_2: {
            main: {flexDirection: "row"},
            eachCon: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            each: {position:"sticky", [animationDirection=="reverse"?"right":"left"]: 0},
            each_2: {position:"sticky", [animationDirection=="reverse"?"right":"left"]: 0},
        },
        stack_3: {
            main: {flexDirection: "row"},
            eachCon: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"row":"row-reverse", width: "50%", overflow: "hidden", scrollbarWidth: "none", msOverflowStyle: "none",},
            each: {position:"sticky", [animationDirection=="reverse"?"right":"left"]: 0},
            each_2: {position:"sticky", [animationDirection=="reverse"?"left":"right"]: 0},
        },
        layer: {
            main: {flexDirection: animationDirection=="reverse"?"column":"row"},
            eachCon: {flexDirection: animationDirection=="reverse"?"row-reverse":"row", [animationDirection=="reverse"?"height":"width"]: "50%", position: "relative"},
            eachCon_2: {flexDirection: animationDirection=="reverse"?"row":"row-reverse", [animationDirection=="reverse"?"height":"width"]: "50%", position: "relative"},
            each: {left: 0, position: "absolute"},
            each_2: {right: 0, position: "absolute"},
        },
    }
}