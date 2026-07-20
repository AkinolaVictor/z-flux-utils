export function findScrollingElement(elem, direct){
    let parent = direct?elem:document.querySelector(elem)
    
    while(parent) {
        const {overflowY} = getComputedStyle(parent)
        if((overflowY === "auto" || overflowY === "scroll") && (parent.scrollHeight > parent.clientHeight)){
            return parent
        }
        parent = parent.parentElement
    }

    return document.scrollingElement
}