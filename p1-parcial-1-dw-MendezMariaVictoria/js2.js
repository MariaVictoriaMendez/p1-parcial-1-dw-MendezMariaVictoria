var nombrededisco= "";
var bandadisco="";
var codigodisco ="";
var duraciondisco ="";
var canciondisco ="";
var duracioncacion ="";
var mostrarnombrededisco =[];
var mostrarbandadisco = [];
var mostrarcodigodisco = [];
var mostrarcanciondisco =[];
var mostrarduracioncacion = [];
var mostrarduraciondisco = [];


    function nombre (){
    /* validar que nombre no sea numero, ni este vacio*/
        do{
            nombrededisco = prompt("ingrese el nombre del disco");
            var nombredediscovalido = true;
            mostrarnombrededisco.push(nombrededisco);

            if(!isNaN(nombrededisco)){
                 nombredediscovalido = false;
                 alert("solo texto");
            }
            validarvacio;
        }while(!nombredediscovalido);

    }

    function banda (){
   /* validar que banda no sea numero, ni este vacio*/

        do{
            
            bandadisco = prompt("ingrese la banda o el autor del disco");
            var bandadiscovalido =true;
            mostrarbandadisco.push(bandadisco);
            

            if (!isNaN(bandadisco)){
                nombredediscovalido= false;
                alert("ingrese solo texto");

            }
            validarvacio;
        }while(!bandadiscovalido);
}

function canciones (){
    do{
            canciondisco =prompt("ingrese la cancion del disco ");
       
            mostrarcanciondisco.push(canciondisco);
            validarvacio; 
            let x;
             x = confirm (' ¿desea seguir sumando canciones? ');
        

            do{
                duracioncacion = prompt("ingrese la duracion de la cancion del disco");
                var duracioncacionvalido =true;
                mostrarduracioncacion.push(duracioncacion)
                if (isNaN(duracioncacion)){
                    duracioncacionvalido= false;
                    alert("ingrese solo numeros");

                }
                validarvacio;


                duraciondisco = 0;
                for(let i in duracioncacion){
                duraciondisco += duracioncacion;
                mostrarduraciondisco = duraciondisco;
                }return(mostrarduraciondisco.push(duraciondisco));
            }while(!duracioncacionvalido);
    }while(x== true);
  }  

    function codigo(){
    /*validar que codigo no este vacio, que este en el rango de 1 a 999, y que no este repetido */
        do {
            codigodisco= prompt("ingrese el codigo numerico del disco");
            var validarcodigodisco = true;
            mostrarcodigodisco.push(codigodisco);


            if(isNaN(codigodisco)){
                validarcodigodisco = false;
                alert ("Solo codigo numerico");
            
            }else if(codigodisco < 1 ||codigodisco > 999){
                validarcodigodisco = false;
                alert("ingrese datos del 1 a 999");

            }
            else{
           
              if (codigodisco == mostrarcodigodisco) {
                validarcodigodisco = false;
                alert("El codigo del disco ya esta cargado");
                 }
           }
             validarvacio;

        }while(!validarcodigodisco);

    }



    function mostrar (){
    
        /* Mostrar datos de los discos cargados, duracion del disco, en rojo los discos que dures mas de 180 seguntos. Ademas ayudar al usuario mostrando con alert cada error qu puede llegar a tener*/

        for (let i in mostrarnombrededisco){
        alert(`el disco que se cargo es ${mostrarnombrededisco[i]} 
        la banda es ${mostrarbandadisco[i]} 
        las canciones son ${mostrarcanciondisco}  
         su codigo es  ${mostrarcodigodisco[i]} 
         y la duracion del disco completo es ${mostrarduraciondisco}`); 
        }
    }





    function validarvacio(){
        if(nombrededisco === "" || bandadisco === "" || codigodisco === "" || canciondisco === "" || duracioncacion === ""){
            alert("todos los campos deben estar completos");
        }

    }