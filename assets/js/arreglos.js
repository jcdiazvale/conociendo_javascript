// Elementos->   0         1          2         3         4
var amigos = ["Bernet","Manrique","Joselyn","Ernesto","Diosels","Olga"];
document.write (amigos[2]);
amigos[0] = "Juan"; // Cambia el dato de de la posicion 0 por "Juan"
//document.write (amigos[0]);
//document.write("Tienes "+amigos.length+" amigos"); // Indica cuantos elementos tiene el arreglo
amigos[amigos.length]="Fernando"; // agrega uno más al final
//document.write("Tienes "+amigos.length+" amigos"); // Indica cuantos elementos tiene el arreglo
amigos.push("Pedro","Miguel"); // agrega uno o más al final
//document.write("Tienes "+amigos.length+" amigos"); // Indica cuantos elementos tiene el arreglo
amigos.pop () // Elima el último elemento del arreglo
//document.write("Tienes "+amigos.length+" amigos"); // Indica cuantos elementos tiene el arreglo
var amigos2 = ["luis","Romikka","Cesar","Antonio","Maritina","Lola"]; // creamos otro arreglo
var amigos3 = amigos.concat(amigos2);//  Agrega segundo arreglo a primer arreglo
//document.write(amigos3); 
amigos.join(" : "); //  Agrega la separacion con ":" entre los elementos
//document.write(amigos.join(" : ")); 
var ordenados=amigos.sort(); // Ordena el arrglo alfabeticamente
document.write(amigos.join(" : ")); 
