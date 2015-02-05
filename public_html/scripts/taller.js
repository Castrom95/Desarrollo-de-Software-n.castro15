/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcular() {
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
 
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                else
                {
                    var rta = parseInt(x) + parseInt(y);
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }

function concatenar(){
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
 
                
                    var rta = x + y;
                    alert("La respuesta es: " + rta);
}

function ordenar(){
    var x, y, z, arr;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z = document.getElementById("valor3").value;
                arr = [];
                arr[0] = x;
                arr[1] = y;
                arr[2] = z;
                arr.sort();
                var rta = arr[0] + ' - ' + arr[1] + ' - ' + arr[2];
                document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                           
               
}
