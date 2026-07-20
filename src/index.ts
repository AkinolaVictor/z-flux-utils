import {utils} from "./utils"

export function justSayHello({name}: {name: string}){
    console.log("Hey!!! Hello ", name, ". Package is updated!!!")
}

export const {
    findScrollingElement,
} = utils
