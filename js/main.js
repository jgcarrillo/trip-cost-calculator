"use strict";

window.addEventListener("load", function(){

    /*** TOTALES ***/
    var total_hotel = document.querySelector("#total_hotel"); // Resultados totales al final de la página
    var total_coche = document.querySelector("#total_coche");
    var total_avion = document.querySelector("#total_avion");
    
    /*** CALCULO HOTEL ***/    
    var noches_hotel = document.querySelector("#noches_hotel"); // Selecciono las noches introducidas
    var calcular_hotel = document.querySelector("#calcular_hotel"); // Selecciono el botón de calcular
    var resultado_hotel = document.querySelector("#resultado_hotel"); // Selecciono el resultado
    
    calcular_hotel.addEventListener("click", function(){
        var n_resultado_hotel = parseFloat(noches_hotel.value * 140); // Capturo el valor de las noches, lo transformo y lo multiplico
        resultado_hotel.value = n_resultado_hotel.toFixed(2); // Igualo el valor del total a el resultado anterior
        total_hotel.value = n_resultado_hotel.toFixed(2); // Muestro el valor en los totales del final de la página
        
        // Control de errores
        if(isNaN(noches_hotel.value)){
            alert("Por favor, introduce caractéres numéricos");
            resultado_hotel.value = " ";
            total_hotel.value = " ";
            return;
        }
    });
    
    /*** CALCULO AVIÓN ***/
    var noches_avion = document.querySelector("#noches_avion");
    
    var s_oviedo = document.querySelector("#oviedo");
    var s_tokyo = document.querySelector("#tokyo");
    var s_madrid = document.querySelector("#madrid");
    var s_barcelona = document.querySelector("#barcelona");
    
    var calcular_avion = document.querySelector("#calcular_avion");
    var resultado_avion = document.querySelector("#resultado_avion");
    
    calcular_avion.addEventListener("click", function(){
        if(s_oviedo.selected === true){ 
            var oviedo = resultado_avion.value = parseFloat(15);
            total_avion.value = oviedo.toFixed(2);
        } else if(s_tokyo.selected === true){
            var tokyo = resultado_avion.value = parseFloat(700);
            total_avion.value = tokyo.toFixed(2);
        } else if(s_madrid.selected === true){
            var madrid = resultado_avion.value = parseFloat(90);
            total_avion.value = madrid.toFixed(2);
        } else if(s_barcelona.selected === true){
            var barcelona = resultado_avion.value = parseFloat(90);
            total_avion.value = barcelona.toFixed(2);
        }
    });
    
    /*** CALCULO COCHE ***/
    var dias_coche_total = document.querySelector("#dias_coche");
    var calcular_coche = document.querySelector("#calcular_dias_coche");
    var resultado_coche = document.querySelector("#resultado_coche");
    
    calcular_coche.addEventListener("click", function(){
        if (dias_coche_total.value >= 0 && dias_coche_total.value <= 2){
            var n_resultado_coche = parseFloat(dias_coche_total.value * 40);
            resultado_coche.value = n_resultado_coche.toFixed(2);
            total_coche.value = n_resultado_coche.toFixed(2);
        } else if(dias_coche_total.value >= 3 && dias_coche_total.value <=6){
            var n_resultado_coche = parseFloat(dias_coche_total.value * 40 * 0.8)
            resultado_coche.value = n_resultado_coche.toFixed(2);
            total_coche.value = n_resultado_coche.toFixed(2);
            alert("Enhorabuena, tienes un descuento del 20% al seleccionar de 3 a 6 noches");
        } else if(dias_coche_total.value >= 7){
            var n_resultado_coche = parseFloat((dias_coche_total.value * 40) - 50);
            resultado_coche.value = n_resultado_coche.toFixed(2);
            total_coche.value = n_resultado_coche.toFixed(2);
            alert("Enhorabuena, tienes un descuento de 50€ al seleccionar 7 noches o más");
        }
    });    
});