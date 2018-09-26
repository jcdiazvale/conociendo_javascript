// ++ Incrementa la variable
// ++ Disminuye la variable


// var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
// var numerodias = dias.length-1;
// var i=0;

// function saludo(nombre){
    // document.write ("Hola "+nombre);
// }

// saludo("Juan Carlos Díaz");


// var suma = function (numero1, numero2){
   //  var numero1 = numero1;
   //  var numero2 = numero2;
  //   return numero1+numero2;
// }
// document.write (suma(13,40));
// document.write ("<br>");
// document.write (suma(50,40));


var max = function numeromaximo (valor1, valor2){
    var valor1 = valor1;
    var valor2 = valor2;
    if (valor1>valor2){
    return valor1;
    } else {
    return valor2;        
    }
}
document.write (max(13,40));
document.write ("<br>");
document.write (max(50,40));
