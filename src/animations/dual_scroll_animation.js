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
        animateStyle: ({value, eachHeight, eachWidth, reverse})=>{
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
        animateStyle: ({value, reverse})=>{
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
        animateStyle: ({value, reverse})=>{
            return {
                section1: {
                    // opacity: [null, 0],
                    rotate: [null, reverse?-120:120],
                    transformOrigin: [null, reverse?"bottom left":"top right"],
                },
                section2: {
                    // opacity: [null, 0],
                    rotate: [null, reverse?120:-120],
                    transformOrigin: [null, reverse?"top left":"top left"],
                }
            }
        }
    },
    FoldAway: {
        currentStyle: "layer",
        animateStyle: ({ value, reverse }) => ({
            section1: {
                y: [null, value],
                rotate: [null, reverse?-90:90],
                scale: [null, 0.85],
                opacity: [null, 0],
                transformOrigin: [null, reverse?"top left":"top center"],
            },
            section2: {
                y: [null, value],
                rotate: [null, reverse?-90:90],
                scale: [null, 0.85],
                opacity: [null, 0],
                transformOrigin: [null, reverse?"bottom right":"bottom center"],
            }
        })
    },

    DoorClose: {
        currentStyle: "layer",
        distance: "width",
        animateStyle: ({reverse}) => ({
            section1: {
                [reverse?"rotateX":"rotateY"]: [0, -90],
                transformPerspective: [null, 3500],
                transformOrigin: [null, reverse?"top center":"left center"],
            },
            section2: {
                [reverse?"rotateX":"rotateY"]: [0, 90],
                transformPerspective: [null, 3500],
                transformOrigin: [null, reverse?"bottom center":"right center"],
            }
        })
    },

    CardCollapse: {
        currentStyle: "layer",
        animateStyle: ({ value }) => ({
            section1: {
                y: [null, value],
                scale: [null, .6],
                rotate: [null, -12],
                opacity: [null, .2],
            },
            section2: {
                y: [null, value],
                scale: [null, .6],
                rotate: [null, 12],
                opacity: [null, .2],
            }
        })
    },

    BlurFade: {
        currentStyle: "layer",
        animateStyle: ({ value }) => ({
            section1: {
                y: [null, value],
                filter: ["blur(0px)", "blur(16px) brightness(.6)"],
                scale: [null, .9],
                opacity: [null, 0]
            },
            section2: {
                y: [null, value],
                filter: ["blur(0px)", "blur(16px) brightness(.6)"],
                scale: [null, .9],
                opacity: [null, 0]
            }
        })
    },

    CornerShrink: {
        currentStyle: "layer",
        animateStyle: ({}) => ({
            section1: {
                scale: [1, 0],
                xPercent: [0, -40],
                yPercent: [0, -40],
                transformOrigin: [null, "top left"],
            },
            section2: {
                scale: [1, 0],
                xPercent: [0, 40],
                yPercent: [0, -40],
                transformOrigin: [null, "top right"],
            }
        })
    },

    GlassDisappear: {
        currentStyle: "layer",
        animateStyle: ({ value }) => ({
            section1: {
                y: [null, value],
                opacity: [1, 0],
                filter: [
                    "blur(0px) saturate(1)",
                    "blur(18px) saturate(2)"
                ]
            },
            section2: {
                y: [null, value],
                opacity: [1, 0],
                filter: [
                    "blur(0px) saturate(1)",
                    "blur(18px) saturate(2)"
                ]
            }
        })
    },

    TunnelZoom: {
        currentStyle: "layer",
        animateStyle: ({ value }) => ({
            section1: {
                z: [0,-1000],
                scale: [1,0.2],
                opacity:[1,0],
                y:[null,value]
            },
            section2: {
                z: [0,-1000],
                scale:[1,0.2],
                opacity:[1,0],
                y:[null,value]
            }
        })
    },

    SkewDrop: {
        currentStyle:"layer",
        animateStyle:({value, reverse})=>({
            section1:{
                y:[null,value],
                skewX:[0,-25],
                rotate:[0,-8],
                opacity:[1,0]
            },
            section2:{
                y:[null,value],
                skewX:[0, reverse?25:-25],
                rotate:[0, reverse?8:-8],
                opacity:[1,0]
            }
        })
    },

    WaveShrink:{
        currentStyle:"layer",
        animateStyle:({value, eachWidth, reverse})=>({
            section1:{
                [reverse?"x":"y"]:[null, reverse?eachWidth:value],
                scaleZ:[null,.3],
                // opacity:[null,0],
            },
            section2:{
                [reverse?"x":"y"]:[null, reverse?eachWidth:value],
                scaleZ:[null,.3],
                // opacity:[null,0],
            }
        })
    },

    Fade:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                opacity:[null , 0],
                // filter: [null, "blur(20px)"]
            },
            section2:{
                opacity:[null , 0],
                // filter: [null, "blur(20px)"]
            }
        })
    },

    CircleWave:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    null,
                    "circle(100%)"
                ],
                opacity:[null ,0],
            },
            section2:{
                clipPath:[
                    null,
                    "circle(100%)"
                ],
                opacity:[null ,0],
            }
        })
    },

    SmallCircleWave:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    null,
                    "circle(50%)"
                ],
                opacity:[null ,0],
            },
            section2:{
                clipPath:[
                    null,
                    "circle(50%)"
                ],
                opacity:[null ,0],
            }
        })
    },

    ShapeShifter:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    null,
                    "circle(100%)"
                ],
                scale:[null ,0],
                // opacity:[null ,0],
            },
            section2:{
                clipPath:[
                    null,
                    "circle(100%)"
                ],
                scale:[null ,0],
                // opacity:[null ,0],
            }
        })
    },

    PolygonCollapse:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    // "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
                ],
                scale:[1,.2],
                opacity:[1,0]
            },
            section2:{
                clipPath:[
                    "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
                    // "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                ],
                scale:[1,.2],
                opacity:[1,0]
            }
        })
    },

    DiamondCollapse:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
                ],
                scale:[null, .2],
                opacity:[null, 0],
            },
            section2:{
                clipPath:[
                    "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
                    "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
                ],
                scale:[null, .2],
                opacity:[null, 0],
            }
        })
    },

    RoundedFold:{
        currentStyle:"layer",
        animateStyle:({value})=>({
            section1:{
                y:[null,value],
                borderRadius:[null,"100px"],
                scale:[null, .7],
                rotate:[null, -20],
                opacity:[null, 0]
            },
            section2:{
                y:[null,value],
                borderRadius:[null,"100px"],
                scale:[null, .7],
                rotate:[null, 20],
                opacity:[null, 0]
            }
        })
    },

    RoundedEgde:{
        currentStyle:"layer",
        distance: "width",
        animateStyle:({value, eachWidth, reverse})=>({
            section1:{
                y:[null,reverse?eachWidth:value],
                borderRadius:[null,"100%"],
                scale:[null, .4],
                // rotate:[null, -20],
                opacity:[null, 0]
            },
            section2:{
                y:[null,reverse?eachWidth:value],
                borderRadius:[null,"100%"],
                scale:[null, .4],
                // rotate:[null, 20],
                opacity:[null, 0]
            }
        })
    },

    ZoomOut:{
        currentStyle:"layer",
        animateStyle:({value})=>({
            section1:{
                // y:[null,value],
                // rotate:[0,270],
                scale:[1,5],
                opacity:[1,0]
            },
            section2:{
                // y:[null,value],
                // rotate:[0,-270],
                scale:[1,5],
                opacity:[1,0]
            }
        })
    },

    BloomOut:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                scale:[null, 2.5],
                opacity:[null, 0],
                filter:[null, "blur(12px)"]
            },
            section2:{
                scale:[null, 2.5],
                opacity:[null, 0],
                filter:[null, "blur(12px)"]
            }
        })
    },

    DeepFade:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                z:[0,-1500],
                rotateX:[0,25],
                opacity:[1,0]
            },
            section2:{
                z:[0,-1500],
                rotateX:[0,-25],
                opacity:[1,0]
            }
        })
    },

    FloatAway:{
        currentStyle:"layer",
        animateStyle:({value})=>({
            section1:{
                y:[null, value-150],
                x:[null, -120],
                opacity:[null, 0],
                scale:[null, .8]
            },
            section2:{
                y:[null,value-150],
                x:[null, 120],
                opacity:[null, 0],
                scale:[null, .8]
            }
        })
    },

    PerspectiveSwing:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotateY:[null,-70],
                rotateX:[null,20],
                transformPerspective:[null,1200],
                opacity:[null,0]
            },
            section2:{
                rotateY:[null,70],
                rotateX:[null,-20],
                transformPerspective:[null,1200],
                opacity:[null,0]
            }
        })
    },

    HorizontalSqueeze:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                scaleX:[1,0],
                opacity:[1,0]
            },
            section2:{
                scaleX:[1,0],
                opacity:[1,0]
            }
        })
    },

    SlideCorner:{
        currentStyle:"layer",
        animateStyle:({eachWidth,eachHeight})=>({
            section1:{
                x:[0,-eachWidth],
                y:[0,-eachHeight],
                opacity:[1,0]
            },
            section2:{
                x:[0,eachWidth],
                y:[0,eachHeight],
                opacity:[1,0]
            }
        })
    }, 

    PinWheel:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotate:[0,720],
                scale:[1,0],
                opacity:[1,0]
            },
            section2:{
                rotate:[0,-720],
                scale:[1,0],
                opacity:[1,0]
            }
        })
    },

    CollapseCenter:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                xPercent:[0,-50],
                scale:[1,0],
                opacity:[1,0]
            },
            section2:{
                xPercent:[0,50],
                scale:[1,0],
                opacity:[1,0]
            }
        })
    },

    SliceLeft:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    "inset(0% 0% 0% 0%)",
                    "inset(0% 100% 0% 0%)"
                ]
            },
            section2:{
                clipPath:[
                    "inset(0% 0% 0% 0%)",
                    "inset(0% 0% 0% 100%)"
                ]
            }
        })
    },

    SliceTop:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                clipPath:[
                    "inset(0% 0% 0% 0%)",
                    "inset(100% 0% 0% 0%)"
                ]
            },
            section2:{
                clipPath:[
                    "inset(0% 0% 0% 0%)",
                    "inset(0% 0% 100% 0%)"
                ]
            }
        })
    },

    PaperFold:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotateX:[0,90],
                skewX:[0,-15],
                transformOrigin:[null,"top"]
            },
            section2:{
                rotateX:[0,-90],
                skewX:[0,15],
                transformOrigin:[null,"bottom"]
            }
        })
    },

    FallOff:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotateX:[0,-90],
                transformOrigin:[null, "bottom left"],
                opacity:[1,0]
            },
            section2:{
                rotateX:[0,90],
                transformOrigin:[null, "bottom right"],
                opacity:[1,0]
            }
        })
    },

    FanOpen:{
        currentStyle:"layer",
        animateStyle:({reverse})=>({
            section1:{
                rotate:[null, -90],
                rotateX:[null, -90],
                transformOrigin:[null, reverse?"bottom left":"bottom left"],
                opacity:[null, 0]
            },
            section2:{
                rotate:[null, reverse?-90:90],
                rotateX:[null ,90],
                transformOrigin:[null, reverse?"bottom right":"bottom right"],
                opacity:[null, 0]
            }
        })
    },

    CubeTurn:{
        currentStyle:"layer",
        animateStyle:({reverse, value})=>({
            section1:{
                [reverse?"rotateX":"rotateY"]: [null, -90],
                [reverse?"yPercent":"xPercent"]: [null, -50],
                transformPerspective: [null,1000],
                opacity: [null, 0]
            },
            section2:{
                [reverse?"rotateX":"rotateY"]: [null, 90],
                [reverse?"yPercent":"xPercent"]: [null, 50],
                transformPerspective: [null,1000],
                opacity: [null, 0]
            }
        })
    },

    Helix:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotateY:[null,-180],
                scale:[null,.4],
                opacity: [null, 0]
            },
            section2:{
                rotateY:[null,180],
                scale:[null,.4],
                opacity: [null, 0]
            }
        })
    }, 

    EggShrink:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                scale:[null,.1],
                borderRadius:[null,"100%"],
                opacity:[null,0]
            },
            section2:{
                scale:[null,.1],
                borderRadius:[null,"100%"],
                opacity:[null,0]
            }
        })
    },

    RippleShrink:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                scale:[null,.1],
                borderRadius:[null,"999px"],
                opacity:[null,0]
            },
            section2:{
                scale:[null,.1],
                borderRadius:[null,"999px"],
                opacity:[null,0]
            }
        })
    },
    BookInvert:{
        currentStyle:"layer",
        animateStyle:()=>({
            section1:{
                rotateY:[0,-180],
                transformOrigin:[null,"right center"],
                transformPerspective:[1600,1600],
                boxShadow:[
                    "0px 0px 0px rgba(0,0,0,0)",
                    "-50px 0px 80px rgba(0,0,0,.45)"
                ]
            },
            section2:{
                rotateY:[0,180],
                transformOrigin:[null,"left center"],
                transformPerspective:[1600,1600],
                boxShadow:[
                    "0px 0px 0px rgba(0,0,0,0)",
                    "50px 0px 80px rgba(0,0,0,.45)"
                ]
            }
        })
    }
}