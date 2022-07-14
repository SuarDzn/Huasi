<?php
/* Diseñar la siguiente aplicación que permita calcular el sueldo neto a
base de días trabajados, horas por día y costo por hora en un proceso secuencial, teniendo un impuesto a la renta del 10% del
total */
error_reporting(0);
if (isset($_POST['btnCalcular'])) {

    //declarar variables
    $n1 = $_POST[n1];
    $n2 = $_POST[n2];
    $s = $_POST['s'];

    //proceso secuencial
    $suma = $n1 + $n2;
    $resta = $n1 - $n2;
    $multi = $n1 * $n2;
    if ($n2>0){
        $divi = $n1 / $n2;
    } else{
        echo "<h2>El dividendo no puede ser cero</h2>";
    } 

    //formato
    $divi = number_format($divi, 2, ".", ",");

    //salida
    switch ($s) {
        case "+":
            echo "<h2>Resultado: $suma</h2>";
            break;
        case "-":
            echo "<h2>Resultado: $resta</h2>";
            break;
        case "*":
            echo "<h2>Resultado: $multi</h2>";
            break;
        case "/":
            echo "<h2>Resultado: $divi</h2>";
            break;
        default:
            echo "<h2>Ingrese uno de estos simbolos (+,-,,/)</h2>";
    }
}
?>