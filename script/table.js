let container = document.querySelector('tbody')
import { typeFormat } from "./dataFormat.js"

let id = document.createElement('td')
let nome = document.createElement('td')
let tipo = document.createElement('td')
let hab = document.createElement('td')
let sprite = document.createElement('img')

export default function render(data){

    id.textContent = data.id

    nome.textContent = typeFormat(data.name)

    let txt_tipo = ''
    data.types.forEach(element=>{
        txt_tipo += typeFormat(element.type.name)+'/'
    })
    tipo.textContent = txt_tipo

    let txt_hab = ''
    data.abilities.forEach(element=>{
        txt_hab += typeFormat(element.ability.name)+'/'
    })
    hab.textContent = txt_hab

    sprite.src = data.sprites.front_default

    let cols = [id,nome,tipo,hab,sprite]
    cols.forEach(element=>{
        addChild(container,element)
    })

}

function addChild(parent,child){
    parent.appendChild(child)
}