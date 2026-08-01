export function value_negator(obj:any, key:string){
    const this_value = obj[key]
    if(this_value) {
        let str = String(this_value)
        const strArr = str.split("")
        if(strArr[0]==="-") {
            strArr.splice(0, 1)
            str = strArr.join("")
        } else {
            str = `-${str}`
        }
        return str
    }
    return this_value
}
