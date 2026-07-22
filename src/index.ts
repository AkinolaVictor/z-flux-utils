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
    animation_list
} = utils

// export * as build_extend_animation from "./utils/build_extend_animation"
