export default function alike(tipos_padrao, tipos_comparar){

    let t1 = []
    tipos_padrao.forEach(element => {
        t1.push(element.type.name)
    });

    let t2 = []
    tipos_comparar.forEach(element => {
        t2.push(element.type.name)
    });

    let count = 0
    for (let i = 0; i < t1.length; i++) {
        
        for (let j = 0; j < t2.length; j++) {
            
            if(t1[i] == t2[i]){
                count++
            }
            
        }
        
    }

    if(count>0){
        return true
    } else {
        return false
    }

}

import gen from "./genDef.js";

export function alikeGen(id1,id2){

    let generation1 = gen(id1)
    let generation2 = gen(id2)

    if(generation1 == generation2){
        return true
    } else {
        return false
    }

}