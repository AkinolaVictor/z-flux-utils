export function build_extend_animation(animation:any, which:string, negator?:any){
    const obj = typeof(animation)=="object"?
                animation:
                {};
    
    const input_obj = Object.entries(obj).map((each)=>{
        const [key, val] = each;
        return {key, val};
    });
    
    const all:any = {};

    for(let i=0; i<input_obj.length; i++){
        const key:any = input_obj[i].key;
        const val:any = input_obj[i].val;
        const which_val = which=="from"?val[0]:
                        which=="to"?val[1]:
                        "";
        if(which_val !== null){
            all[key] = (
                negator[key]?
                `-${which_val}`:
                which_val
            );
        }
    };
    
    return all;
}