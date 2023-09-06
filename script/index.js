import dataFormat from "./dataFormat.js"
import render from "./table.js"

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
    })

}