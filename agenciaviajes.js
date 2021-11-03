let contactos = new Array()
function subs()
{  
    let nombre = document.getElementById("nombre").value
    let email =document.getElementById("email").value
    let precioMax =document.getElementById("max").value
    let destino =document.getElementById("destino").value
    let comentarios =document.getElementById("comentarios").value

    let json= { "nombre": nombre, "email": email, "PrecioMax":precioMax, 
                "destino":destino, "comentarios":comentarios}

    contactos.push(json);              
    alert(JSON.stringify(json));
              
}



function filtrar()
{
let email =document.getElementById("email").value
let destino =document.getElementById("destino").value

    if (destino=="Gran Canaria"|| destino=="Galicia" || destino =="Madrid"
    || destino == "Malaga")
    {
        alert("Pronto le enviaremos a su email la información para viajar a "+ destino)
    }
    else if (destino == "Internacional")
    {
        alert("Pronto tendremos destinos internacionales")
    }
    else ( "Todavia no tenemos presupuesto para ese destino")
}