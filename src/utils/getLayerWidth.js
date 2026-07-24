export function getLayerWidth(parent, count){
    if(!parent.current) return {lastWidth:"100%", eachWidth:"100%"}
    if(count==1) return {lastWidth:"100%", eachWidth:"100%"}

    const parentWidth = parent.current.getBoundingClientRect().width
    const eachWidth = Math.floor(parentWidth/count)
    const allOtherWidth = eachWidth * (count-1)
    const lastWidth = parentWidth - allOtherWidth

    return {lastWidth, eachWidth}
}