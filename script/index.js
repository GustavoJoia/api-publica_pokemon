import dataFormat from "./dataFormat.js"
import render from "./table.js"
import alike, {alikeGen} from "./alike.js"
import dinamic, {dinamicGen} from "./dinamicRender.js"

let btn = document.querySelector('#search-btn')

btn.addEventListener('click', buscar)

function buscar(){

    let entry = document.querySelector('#id-name').value
    let data = dataFormat(entry)
    let url = `https://pokeapi.co/api/v2/pokemon/${data}/`


    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
        render(response)
        let tipos = response.types
        let pokeid = response.id
        
        search_alike(tipos,pokeid)

    })

    //search_alike()

}

function search_alike(tipos, dexId){

    for (let i = 1; i <= 905 ; i++) {
        
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            
            let tipos_comp = response.types
            if(alike(tipos, tipos_comp) == true ){
                dinamic(response)
            } else if(alikeGen(dexId, response.id) == true){
                dinamicGen(response)
            }

        })
        
    }
    
}