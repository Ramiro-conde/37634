


function convertir(){
 
  let DolarOficial= "139"
  let DolarBlue="283"
  let euro="135"
  let resultado="0"
  let valor =parseInt(document.getElementById("valor").value)

  if(document.getElementById("uno").checked){
    resultado= valor/DolarOficial;
    alert("El cambio de pesos a dolar es:" + resultado)

  }else if(document.getElementById("dos").checked){
    resultado= valor /DolarBlue;
    alert("El cambio de pesos a dolar blue es:" + resultado)
}else if (document.getElementById("tres").checked) {
 resultado= valor/euro;
 alert("El cambio de pesos a euros es:" + resultado)

} else {alert("No se ingreso ningun dato")}
}