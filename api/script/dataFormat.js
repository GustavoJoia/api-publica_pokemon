export default function dataFormat(data){
    let format = data.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return format
}

export function typeFormat(text){
    let format = (text.charAt(0).toUpperCase()) + text.slice(1)
    return(format)
}