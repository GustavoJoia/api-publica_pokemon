let container = document.querySelector('.container-info')
import { typeFormat } from "./dataFormat.js"

let id = document.querySelector('#id')
let nome = document.querySelector('#nome')
let tipo_container = document.querySelector('#container-tipo')
let tipo_title = tipo_container.children[0]
let hab_container = document.querySelector('#container-habilidade')
let hab_title = hab_container.children[0]
let img = document.querySelector('#aparencia')
let sprite = document.createElement('img')
let st_hp = document.querySelector('#status-hp')
let st_attack = document.querySelector('#status-attack')
let st_defense = document.querySelector('#status-defense')
let st_spatt = document.querySelector('#status-spatt')
let st_spdef = document.querySelector('#status-spdef')
let st_speed = document.querySelector('#status-speed')
let st_total = document.querySelector('#status-total')
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let exp = document.querySelector('#base-exp')

export default function render(data){

    nome.textContent = typeFormat(data.name)

    id.textContent = '#'+data.id
    tipo_container.innerHTML = ''
    addChild(tipo_container,tipo_title)
    data.types.forEach(element=>{
        let new_type = document.createElement('p')
        new_type.id = 'tipo'
        new_type.classList.add('info')
        new_type.textContent = typeFormat(element.type.name)
        addChild(tipo_container,new_type)
    })

    hab_container.innerHTML = ''
    addChild(hab_container,hab_title)
    data.abilities.forEach(element=>{
        let new_hab = document.createElement('p')
        new_hab.id = 'hab'
        new_hab.classList.add('info')
        new_hab.textContent = typeFormat(element.ability.name)
        addChild(hab_container,new_hab)
    })

    sprite.src = data.sprites.front_default

    st_hp.textContent = data.stats[0].base_stat
    st_attack.textContent = data.stats[1].base_stat
    st_defense.textContent = data.stats[2].base_stat
    st_spatt.textContent = data.stats[3].base_stat
    st_spdef.textContent = data.stats[4].base_stat
    st_speed.textContent = data.stats[5].base_stat
    st_total.textContent = (data.stats[0].base_stat+data.stats[1].base_stat+data.stats[2].base_stat+data.stats[3].base_stat+data.stats[4].base_stat+data.stats[5].base_stat)
    altura.textContent = data.height/10 +'m'
    peso.textContent = data.weight/10+'kg'
    exp.textContent = data.base_experience

    addChild(img, sprite)

}

function addChild(parent,child){
    parent.appendChild(child)
}