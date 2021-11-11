function cambiarBandera(){
    
    obj = document.getElementById("bandera").querySelector("img");

    if(obj.alt == "espanol"){
        obj.src = "/Imagenes/bandera-portugal.jpg";
        obj.alt = "portugues";
        alert("Cristiano Ronaldo--Toallas baratas");
    }else{
        obj.src = "/Imagenes/bandera-espana.jpg";
        obj.alt = "espanol";
        alert("El Valle de los caido para ser franco");
    }

}

function iniciar(){
    document.getElementById("bandera").addEventListener("click", cambiarBandera,false);
}

window.onload = iniciar;