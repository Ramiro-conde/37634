const cargarCombo = (select, array) => {
    if (array.length >0) {
      array.forEach(elemento => {
        select.innerHTML +=`<option value="${elemento.factor}">${elemento.tipo}</option>`
      });


    }

}
cargarCombo(moneda, datos)

const datosCompletos =()=>{
     if (parseInt(convertor.value) && parseInt(convertor.value)>0){
      return true
        }else{
            return false
        }
}
   const realizarCotizacion  =() =>{
     if(datosCompletos()){
const seguro = new Cotizador (convertor.value, datos.value)
console.log(seguro.cotizar())
importe.innerText =seguro.cotizar()

     }else{
        alert("completa todos los datos")
     }

   }


