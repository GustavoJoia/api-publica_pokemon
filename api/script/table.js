let container = document.querySelector('.container-info')
import { typeFormat } from "./dataFormat.js"

let nome = document.querySelector('#nome')
let tipo = document.querySelector('#tipo')
let hab = document.querySelector('#habilidade')
let img = document.querySelector('#aparencia')
let sprite = document.createElement('img')

export default function render(data){

    nome.textContent = typeFormat(data.name)

    let txt_tipo = ''
    data.types.forEach(element=>{
        txt_tipo += typeFormat(element.type.name)+' '
    })
    tipo.textContent = txt_tipo

    let txt_hab = ''
    data.abilities.forEach(element=>{
        txt_hab += typeFormat(element.ability.name)+' '
    })
    hab.textContent = txt_hab

    sprite.src = data.sprites.front_default

    addChild(img, sprite)

}

function addChild(parent,child){
    parent.appendChild(child)
}