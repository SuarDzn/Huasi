/* Ejercicio 1: Haga una pagina que pregunte al usuario el nombre y la 
usuario el nombre y luego lo
incluya en un saludo dentro del
cuerpo de la pagina*/
function Datos(){
    //metodos de entrada de datos
    nombre=prompt("Ingrese su nombre")
    document.getElementById("nombre").innerHTML=("Bienvenido: "+nombre+ "al sistema");
}
/* Funcion: metodo entrada y salida */

function Ejercicio1(){
nom=prompt("Ingrese su nombre");
//metodo de salida
alert("Bienvenido: "+nom+" al sistema");
/* Ejuercicio2: Escriba una pagina web que muestre los numeros del 1
al 10 usando JavaScript */
}
function Ejercicio2(){
    //var, let, const
    acum="";
    for(let i=1; i<=10; i++){
        if(i>=10){
        acum=acum+i+"";
    }else{
        acum=acum+i+" - ";
    }
        document.getElementById("num").innerHTML=acum;
    }
}
/* Ejuercicio3: Haga una pagina que genere una piramide del 1 al 9
1
22
333
4444
55555
666666
.
.
.
999999999*/

function Ejercicio3(){
    //estructura anidad
    for(i=1;i<=9;i++){
		for(let j=1;j<=9;j++){
			 document.write(i);
            }
document.write("<br>"); 
	}

}
/* ***********Otra forma *************/
function piramide(){
    cant=document.getElementById("piramide").value;//3
    cad=cant.repeat(cant)+ "\n";

    for(let i=cant-1; i>=1; i--){
        cad=(i+"").reapeat(i)+"\n"+cad;
    }
    //mostrar
    document.getElementById("figura").innerHTML=cad;

}
