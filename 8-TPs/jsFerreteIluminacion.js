/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var flag =0;

function CalcularPrecio () 
{
     const precio =35;
     let cantidad;
     let marca;
     let descuento = 0;
     let precioConDescuento;
     let IIBB =0;
    
     cantidad = parseInt(document.getElementById('Cantidad').value);
     marca = document.getElementById('Marca').value;

    switch(cantidad){
        case 5:
            if(marca == 'ArgentinaLuz'){
                descuento = 0.4; console.log(descuento);
                
            }else{
                descuento = 0.3;console.log(descuento);
            }
            break;
        case 4:
            if(marca == 'ArgentinaLuz' || marca == 'FelipeLamparas'){
                descuento = 0.25;console.log(descuento);
            }else{
                descuento = 0.2;console.log(descuento);
            }
            break;
        case 3:
            if(marca == 'ArgentinaLuz'){
                descuento = 0.15;console.log(descuento);
            }else if (marca == 'FelipeLamparas'){
                descuento = 0.1;console.log(descuento);
            }else{
                descuento = 0.05;console.log(descuento);
            }
            break;
        case 2:
            break;
        case 1:
            break;
        default: descuento = 0.5;console.log(descuento);

    }

    precioConDescuento = cantidad * precio - (cantidad * precio * descuento);
    IIBB = calculaIIBB(precioConDescuento);
    precioConDescuento += IIBB;
    document.getElementById('precioDescuento').value = precioConDescuento + ' ' + IIBB + ' ' + flag;
    if(flag==1){
        alert('Usted pagó ' + IIBB + '$ en concepto de IIBB');
    }
}

function calculaIIBB(valor){
    if(valor > 120){
        flag = 1;
        return valor * 0.1;


    }else{
        return 0;
    }
}