
function ready() {
    document.getElementById("chillers").style.display="none"
    document.getElementById("tablas").style.display="none"
}


function caudal() {
    var servicio= parseFloat (document.getElementById("servicio").value)
    // alert(servicio)
    var  caudal = parseFloat( document.getElementById("caudal").value)
   // alert(caudal)
     var entrada = parseFloat( document.getElementById("entrada").value)
   // alert(entrada)
     var salida = parseFloat (document.getElementById("salida").value)
   // alert(salida)
   // var suma=(caudal+entrada+salida+servicio)
    let  consta1 = 1000
    let consta2 = 0.0003069
    let  total = caudal*(entrada - salida)
    let tamañodt =parseInt((total*servicio)*consta1*consta2)
   // (caudal*(entrada - salida)*servicio*consta1*consta2)
    alert ("el tamaño del DT es de: " +tamañodt)
    document.getElementById("chillers").style.display="block"
} 

 // para chillers
function centri() {
    var c500 =  parseInt(document.getElementById("c500 "))
  //  alert(chil1)
    var c750=  parseInt(document.getElementById("c750").value)
  //  alert(chil2)
     var  c1000 =  parseInt(document.getElementById("c1000").value)
  //  alert(chil3)
    var a500=  parseInt(document.getElementById("a500").value)
  //  alert(chil4)
    var a750=  parseInt(document.getElementById("a750").value) //si no pones .value no se vera reflejado el valor de la variable
  //  alert(chil5)
    var a1000=  parseInt(document.getElementById("a1000").value)
   // alert(chil6)
    var totala= (500*c500)+(750*c750)+(1000*c1000)
    var totalc= (500*a500)+(750*a750)+(1000*a1000)
    var totales = totala + totalc
    
    alert ( "El tamaño del distrito termico es: "  +  totales ) ;
    
    document.getElementById("tablas").style.display="none"
    centrifugo ( totalc,totala )
}
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
      c1 = Number( ( totala  *  0.0035174111853 ) * ( 1925000 / 0.88 ) ) ;		
      o1 = Number( c * 0.03 ) ;	
      capex1 = Number ( totala * 0.0035174111853 ) ;		
      aft1 =  Number( ( capex1 * 1000000 ) * 1.015 ) ;		
      b1 =  Number( capex1 * 2000000 ) ;

 // Mostramos los valores en la tabla
      document.getElementById ("g1").innerHTML=g1 
      document.getElementById ("c1").innerHTMLL=c1
      document.getElementById ("o1").innerHTML=o1 
      document.getElementById ("capex1").innerHTML=capex1 
 //document.getElementById("fta").innerHTML = fta;
      document.getElementById ("b1").innerHTML=b1 
      document.getElementById ("totala") . innerHTML=totala 
//
 }




