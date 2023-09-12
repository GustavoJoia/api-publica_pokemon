let divs = document.querySelectorAll('.informacao')
let container = divs[1]
import { typeFormat } from "./dataFormat.js"
import generation from './genDef.js'

export default function dinamic(pokemon){

    let card = document.createElement('div')
    card.classList.add('card_semelhante')
    addChild(container,card)

    let img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    let nome = pokemon.name
    let tipo = []
    pokemon.types.forEach(e => {
        tipo.push(e.type.name)
        let new_type = document.createElement('p')
        new_type.classList.add('info')
        new_type.textContent = typeFormat(e.type.name)
        addChild(card,new_type)
    });
    let gen = document.createElement('p')
    gen.classList.add('info')
    gen.textContent = generation(pokemon.id)
    addChild(card,gen)
}

function addChild(parent,child){
    parent.appendChild(child)
}