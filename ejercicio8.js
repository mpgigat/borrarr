// En una fábrica de computadoras se planea ofrecer a los clientes un descuento 
// que dependerá del número de computadoras que compre. Si las computadoras 
// son menos de cinco se les dará un 10% de descuento sobre el total de la 
// compra; si el número de computadoras es mayor o igual a cinco pero menos de
//  diez se le otorga un 20% de descuento; y si son 10 o más se les da un 40% 
//  de descuento. El precio de cada computadora es de $11,000
let acuTotal=0
while (true) {
    const numeroComputadores=parseInt(prompt("Digite numero de computadoras"))
    if(numeroComputadores==0) break
    let descuento=0
    const totalBruto=numeroComputadores*11000
    if(numeroComputadores<5){
        descuento=totalBruto*10/100;
    }else if(numeroComputadores<10){
        descuento=totalBruto*20/100
    }else{
        descuento=totalBruto*40/100
    }
    const totalPagar=totalBruto-descuento
    acuTotal+=totalPagar
    console.log(`Total a pagar ${totalPagar}`);
}
 console.log(`Total Recolectado ${acuTotal}`);