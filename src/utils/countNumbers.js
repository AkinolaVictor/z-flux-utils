export function countNumbers(arg){
    let data = []
    if(typeof(arg)=="number"){
        for(let i=0; i<arg; i++){
            data.push(i)
        }
    } else {
        data = [...arg]
    }
    return data
}