export default function build_extend_animation(animation, which){
    const obj = typeof(animation)=="object"?
                animation:
                {};
    
    const input_obj = Object.entries(obj).map((each)=>{
        const [key, val] = each;
        return {key, val};
    });

    const all = {};

    for(let i=0; i<input_obj.length; i++){
        const key = input_obj[i].key;
        const val = input_obj[i].val;
        const which_val = which=="from"?val[0]:
                        which=="to"?val[1]:
                        "";
        if(which_val !== null){
            all[key] = which_val;
        }
    };
    
    return all;
}