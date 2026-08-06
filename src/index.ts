import { animations } from "./animations"
import {utils} from "./utils"

export function justSayHello({name}: {name: string}){
    console.log("Hey!!! Hello ", name, ". Package is updated!!!")
}

export const {
    findScrollingElement,
    delayer,
    delayer_react,
    build_extend_animation,
    getProgressionData,
    countNumbers,
    getLayerWidth,
    randomizeArray,
    getScrollHeight,
    value_negator,
    getBiggerScrollHeight
} = utils


export const {
    z_text_animations,
    overlay_text_animations,
    vertical_scroll_animations,
    dualScrollStyleDepencies,
    dual_scroll_animations
} = animations

// export * as build_extend_animation from "./utils/build_extend_animation"
