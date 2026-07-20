export function delayer({working, timeout, time, func}){

    if(working){
        clearTimeout(timeout)
        working = false
    }
    
    working = true
    
    timeout = setTimeout(() => {
        if(func) func()
        working = false
    }, time||500);
}