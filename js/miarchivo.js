


function convertir(){
 
  const precios= [140, 290, 135]
  precios.push (30)
  
  let resultado="0"
  let valor =parseInt(document.getElementById("valor").value)

  if(document.getElementById("uno").checked){
    resultado= valor/precios[0];
    alert("El cambio de pesos a dolar es:" + resultado)

  }else if(document.getElementById("dos").checked){
    resultado= valor /precios[1];
    alert("El cambio de pesos a dolar blue es:" + resultado)
}else if (document.getElementById("tres").checked) {
 resultado= valor/precios[2];
 alert("El cambio de pesos a euros es:" + resultado)
 
}  else if (document.getElementById("cuatro").checked) {
  resultado= valor/precios[3];
  alert("El cambio de pesos a real es:" + resultado)
  
} else (alert("No se ingreso ningun dato"))
}