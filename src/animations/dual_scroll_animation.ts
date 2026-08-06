export const dual_scroll_animations = {
    Row: {
        currentStyle: "row",
        animateStyle: ({})=>{}
    },
    Row_2: {
        currentStyle: "row_2",
        animateStyle: ({})=>{}
    },
    Columns: {
        currentStyle: "col",
        animateStyle: ({})=>{}
    },
    Columns_2: {
        currentStyle: "col_2",
        animateStyle: ({})=>{}
    },
    Stack: {
        currentStyle: "stack",
        animateStyle: ({})=>{}
    },
    Stack_2: {
        currentStyle: "stack_2",
        animateStyle: ({})=>{}
    },
    Stack_3: {
        currentStyle: "stack_3",
        animateStyle: ({})=>{}
    },
    Layer: {
        currentStyle: "layer",
        animateStyle: ({value, eachHeight, eachWidth}:any)=>{
            return {
                section1: {
                    y: [0, value]
                },
                section2: {
                    y: [0, value]
                }
            }
        }
    },
    Layer2: {
        currentStyle: "layer",
        animateStyle: ({value}:any)=>{
            return {
                section1: {
                    scale: [null, 0],
                    transformOrigin: [null, "top right"],
                },
                section2: {
                    scale: [1, 0],
                    transformOrigin: [null, "top left"],
                }
            }
        }
    },
    Rotate: {
        currentStyle: "layer",
        animateStyle: ({value}:any)=>{
            return {
                section1: {
                    // opacity: [null, 0],
                    rotate: [null, 120],
                    transformOrigin: [null, "top right"],
                },
                section2: {
                    // opacity: [null, 0],
                    rotate: [null, -120],
                    transformOrigin: [null, "top left"],
                }
            }
        }
    },

}