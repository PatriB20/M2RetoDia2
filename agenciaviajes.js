console.log("hola")    
    // let nombre =document.getElementById("nombre")
    // let email =document.getElementById("email")
    // let precioMax =document.getElementById("max")
    // let destino =document.getElementById("destino")
    // let comentarios =document.getElementById("comentarios")
    

function subs()
{
let nombre = document.getElementById("name")
let email =document.getElementById("email")
let precioMax =document.getElementById("max")
let destino =document.getElementById("destino")
let comentarios =document.getElementById("comentarios")
    
    let json= { "name": nombre, "email": email, "PrecioMax":precioMax, 
                "destino":destino, "comentarios":comentarios}
    // alert(JSON.stringify(json));
    console.log(nombre)    
}
function filtrar()
{
    if (destino=="Gran Canaria"|| destino=="Galicia" || destino =="Madrid"
    || destino == "Malaga")
    {
        alert("Pronto le enviaremos a su "+ email + " la informacion para viajar a "
                + destino)
    }
    else if (destino == "Internacional")
    {
        alert("Pronto tendremos destinos internacionales")
    }
    else ( "Todavia no tenemos presupuesto para ese destino")
}