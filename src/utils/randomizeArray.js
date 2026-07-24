export function randomizeArray (arr){
    for(let i=arr.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1))
        let a = arr[i], b = arr[j]
        arr[i] = b
        arr[j] = a
    }
    return arr
}