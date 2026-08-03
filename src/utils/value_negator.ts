// export function value_negator(obj:any, key:string){
//     const this_value = obj[key]
//     if(this_value) {
//         let str = String(this_value)
//         const strArr = str.split("")
//         if(strArr[0]==="-") {
//             strArr.splice(0, 1)
//             str = strArr.join("")
//         } else {
//             str = `-${str}`
//         }
//         return str
//     }
//     return this_value
// }


export function value_negator(obj:any, key:string) {
    
    // null / undefined
    const value = obj[key]
    if (value == null) return value;

    // Numbers
    if (typeof value === "number") {
        return -value;
    }

    // Non-strings (boolean, object, array, etc.)
    if (typeof value !== "string") {
        return value;
    }

    const str = value.trim();
    
    const match = str.match(/^([+-]?\d*\.?\d+)(.*)$/);

    if (!match) return value;

    const [, numberPart, unit] = match;

    const number = parseFloat(numberPart);

    if (Number.isNaN(number)) {
        return value;
    }

    return `${-number}${unit}`;
}

