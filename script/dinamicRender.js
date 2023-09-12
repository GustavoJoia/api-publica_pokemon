let container1 = document.querySelector('#semelhante_tipo')
let container2 = document.querySelector('#semelhante_geracao')
import { typeFormat } from "./dataFormat.js"
import generation from './genDef.js'

export default function dinamic(pokemon){

    let card = document.createElement('div')
    card.classList.add('card_semelhante')
    addChild(container1,card)

    let img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    let nome = document.createElement('p')
    nome.classList.add('info')
    nome.textContent = pokemon.name
    addChild(card,img)
    addChild(card,nome)
    let tipo = []
    pokemon.types.forEach(e => {
        tipo.push(e.type.name)
        let new_type = document.createElement('p')
        new_type.classList.add('info')
        new_type.textContent = typeFormat(e.type.name)
        addChild(card,new_type)
    });
}

export function dinamicGen(pokemon){
    let card = document.createElement('div')
    card.classList.add('card_semelhante')
    addChild(container2,card)

    let img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    let nome = document.createElement('p')
    nome.classList.add('info')
    nome.textContent = pokemon.name
    addChild(card,img)
    addChild(card,nome)
    let gen = document.createElement('p')
    gen.classList.add('info')
    gen.textContent = generation(pokemon.id)
    addChild(card,gen)
}

function addChild(parent,child){
    parent.appendChild(child)
}