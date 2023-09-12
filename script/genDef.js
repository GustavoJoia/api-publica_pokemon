export default function gen(pokeId){
    let gen
    if(pokeId<=151){
        gen = 'I'
    } else if(pokeId>151 && pokeId <= 251){
        gen = 'II'
    } else if(pokeId>251 && pokeId <= 386){
        gen = 'III'
    } else if(pokeId>386 && pokeId <= 493){
        gen = 'IV'
    } else if(pokeId>493 && pokeId <= 649){
        gen = 'V'
    } else if(pokeId>649 && pokeId <= 721){
        gen = 'VI'
    } else if(pokeId>721 && pokeId <= 809){
        gen = 'VII'
    } else if(pokeId>809 && pokeId <= 905){
        gen = 'VIII'
    }

    return gen
}