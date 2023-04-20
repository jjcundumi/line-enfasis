
function ready() {
  
    document.getElementById("chillers").style.display="none"
   
    
    
    
}

function servicio() {
  var servicio= parseFloat (document.getElementById("servicio").value)
    if ( servicio >= 1 && servicio <=3 )  {
      
    // alert("el valor ingresado es: " +servicio)
     
    } else {
     alert("ingresse un valor entre 1 y 3")
     ready() 
    }
    
    return servicio 
}

function caudal(){
    // alert(servicio)
    var  caudal = parseFloat( document.getElementById("caudal").value)
    if (isNaN(caudal)) {
      alert("ingrese un valor numerico");
      ready ()
    }else {
     // alert("El valor ingresado es : "+caudal);
     
      
      }  
      return caudal  
} 

function entrada(){
    // alert(caudal)
    
      var entrada = parseFloat( document.getElementById("entrada").value)
    if (isNaN(entrada)) {
    alert("ingrese un valor numerico");
    ready ()
    } else {
   // alert("El valor ingresado es: " + entrada);
    
    
    }
    return entrada
  }
  
  function salida() {
    // alert(servicio)
    var  salida = parseFloat( document.getElementById("salida").value)
    if (isNaN(salida)) {
      alert("ingrese un valor numerico");
      ready ()
      
      } else {
        var  consta1 = 1000
        var consta2 = 0.0003069
        var total=parseInt(caudal()*(entrada() - salida)*servicio()*consta1*consta2)
    
        document.getElementById("chillers").style.display="block"
     // alert("El valor ingresado es: " + entrada);
     alert("el tamaño del dt es: " +total)
     
      }
      
      return total
      
    }
      
          
  
 
  
 // para chillers
function c5() {
    var c500 =  parseInt(document.getElementById("c500 ").value)
    if (isNaN(c500)) {
      alert("ingrese un valor numerico");
        ready(c5())
      } else {}
      
    return c500
    }
      
    
function c7(){
    var c750=  parseInt(document.getElementById("c750").value)
    if (isNaN(c750)) {
      alert("ingrese un valor numerico");
      ready ()
      } else {} 
    
      return c750
    }

function c1(){
      
     var  c1000 =  parseInt(document.getElementById("c1000").value)
     if (isNaN(c1000)) {
      alert("ingrese un valor numerico");
      ready ()
      } else {}
     
      return c1000
    }

function a5(){
    var a500=  parseInt(document.getElementById("a500").value)
    if (isNaN(a500)) {
      alert("ingrese un valor numerico"); 
      ready () 
      } else {}
      
      return a500
    }

function a7(){
    var a750=  parseInt(document.getElementById("a750").value) //si no pones .value no se vera reflejado el valor de la variable
    if (isNaN(a750)) {
      alert("ingrese un valor numerico");  
      ready ()
      } else {}
      
      return a750
    }

function a1(){
    var a1000=  parseInt(document.getElementById("a1000").value)
    if (isNaN(a1000)) {
      alert("ingrese un valor numerico")  
      ready ()
      } else  {}
      
      
    var totala= (500*c5())+(750*c7())+(1000*c1())
    var totalc= (500*a5())+(750*a7())+(1000*a1000)
    var totales = totala + totalc
     let tm=salida()
    console.log("tm",tm)
    console.log("sali", salida())
    
    var  tmax =  (tm*0.5)+tm
    console.log("tmax",tmax )
    centrifugo ( totalc,totala ) 
      if(totales <=salida()){
        alert (" Las tecnologias seleccionadas no suministran el tamano del DT ")
        ready ()
      }
      else if (totales >= tmax){
      alert(" Las tecnologias seleccionadas superan el tope del DT")
      ready ()
    }
     else{}

    //alert ( "El tamaño del distrito termico es: "  +  totales ) 
       
    }
    


    //Se comprueba el tamano maximo de T
   
      
  

function  centrifugo ( totalc,totala) {
      rp= Number(totalc*0.3190995427365);
      g= Number(totalc*511.13199046407)/1000;	
      c= Number(totalc*0.0035174111853)*(1925000/0.88);	
      o= Number(c*0.03);	    	
      capex= Number(totalc*0.0035174111853);	
      ft= Number(capex*1000000);	
      e= Number(capex*1700000);	
      b=Number(capex*2000000);
      //tabla
      document.getElementById("rp").innerHTML=rp
      document.getElementById("capex").innerHTML=capex
      document.getElementById("g").innerHTML=g
      document.getElementById("c").innerHTML=c
      document.getElementById("o").innerHTML=o
      document.getElementById("ft").innerHTML=ft
      document.getElementById("e").innerHTML=e
      document.getElementById("b").innerHTML=b
      document.getElementById("totalc").innerHTML=totalc

  
      g1 = Number( ( totala * 511.13199046407 ) / 1000 ) ;		
      ac = Number( ( totala  *  0.0035174111853 ) * ( 1925000 / 0.88 ) ) ;		
      o1 = Number( c * 0.03 ) ;	
      capex1 = Number ( totala * 0.0035174111853 ) ;		
      aft1 =  Number( ( capex1 * 1000000 ) * 1.015 ) ;		
      b1 =  Number( capex1 * 2000000 ) ;

 // Mostramos los valores en la tabla
      document.getElementById ("g1").innerHTML=g1 
      document.getElementById ("ac").innerHTMLL=ac
      document.getElementById ("o1").innerHTML=o1 
      document.getElementById ("capex1").innerHTML=capex1 
 //document.getElementById("fta").innerHTML = fta;
      document.getElementById ("b1").innerHTML=b1 
      document.getElementById ("totala") . innerHTML=totala 
//
 }




