
let nombresdediscos = []; /*para guardar info de los discos, lo veo mas adelante*/ 
let bandasdiscos =[];
let codigosdiscos =[];

    function nombre(){
        
        var nombrededisco = prompt("ingrese el nombre del disco");

        do{
            
            var nombredediscovalido = true;
     x
            if(!isNaN(nombrededisco)){
                alert("solo texto");
                nombredediscovalido = false;
            }
    
          }while(nombredediscovalido == true);
    
        /*nombresdediscos.push(nombrededisco);*/
        return nombrededisco;
    }

    function banda(){
        let bandadisco = prompt("ingrese la banda o el autor del disco");
        bandasdiscos.push(bandadisco);
    }
    
    function codigo(){
        let codigodisco= prompt("ingrese el codigo numerico del disco");



        do {
            var validarcodigodisco = true;
            if(isNaN(codigodisco)){
                 validarcodigodisco = false
                 alert ("Solo codigo numerico");
               
            }
        }while(validarcodigodisco == true);
        return codigodisco
        /* codigosdiscos.push (codigodisco);*/
     }

            /*
            function validarnombre(msg){
                
                let nombrededisco;

                do{
                    nombrededisco = toLowerCase(prompt(msg));
                    var nombredediscovalido = true;

                    if(NaN(nombrededisco)){
                        alert("solo texto");
                        nombredediscovalido = false;
                    }

                }while(nombredediscovalido == False);
                return nombrededisco
            
            }

            function validarcodigo(){
                
                let codigodisco;

                do {
                    codigodisco= parseInt(prompt(msg));
                    var validarcodigodisco = true;
                    if(isNaN(codigodisco)){
                        alert ("Solo codigo numerico");
                        validarcodigodisco = false
                    }
                }while(validarcodigodisco == false);
                return codigodisco
            }
            */

function mostrar(){
alert(`el disco es ${nombrededisco} ${bandadisco} ${codigodisco} `);
   
}