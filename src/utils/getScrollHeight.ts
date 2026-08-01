import React from "react"

export function getScrollHeight(containerRef:React.RefObject<any>, setHeight: React.Dispatch<React.SetStateAction<number>>){
    function getTotalWidth(){
        const el = containerRef.current
        if(!el) return

        const children = el.children
        const first = children[0].getBoundingClientRect().width
        let total = 0

        for(let i=0; i<children.length; i++){
            const eachChild = children[i]
            const width = eachChild.getBoundingClientRect().width
            total=total+width
        }

        return total - first
    }

    const totalWidth = getTotalWidth()
    if(totalWidth) setHeight(totalWidth)
}