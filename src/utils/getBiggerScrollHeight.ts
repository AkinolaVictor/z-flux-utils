
export function getBiggerScrollHeight({ref, ref_2, which, setHeight}:any){
    function getTotalWidth(){
        const el = ref.current
        const el_2 = ref_2.current
        if(!(el && el_2)) return

        const children = el.children
        const first = children[0].getBoundingClientRect()[which]
        let each1 = 0
        let total = 0
        for(let i=0; i<children.length; i++){
            const eachChild = children[i]
            const val1 = eachChild.getBoundingClientRect()[which]
            each1 = Math.max(each1, val1)
            total=total+val1
        }
        const con1 = total - first
        
        
        
        const children2 = el_2.children
        const first2 = children2[0].getBoundingClientRect()[which]
        let each2 = 0
        let total2 = 0
        for(let i=0; i<children2.length; i++){
            const eachChild = children2[i]
            const val2 = eachChild.getBoundingClientRect()[which]
            each2 = Math.max(each2, val2)
            total2=total2+val2
        }

        const con2 = total2 - first2
        const max = Math.max(con1, con2)

        return {max, con1, con2, each1, each2}
    }

    const totalWidth = getTotalWidth()
    if(totalWidth) setHeight(totalWidth)
}