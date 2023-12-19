// Constructores

function Seguro(marca, year, tipo , auto){
    this.auto = auto;
    this.marca = marca;
    this.year =  year;
    this.tipo = tipo;
}
// realiza cotización
Seguro.prototype.cotizarSeguro =  function(){
  
   let cantidad;
   const base = 4000;

   switch(this.marca){
    case '1':
            cantidad = base * 1.7;
            break;
    case '2':
            cantidad = base * 1.8;
            break;
    case '3':
            cantidad = base * 1.6;
            break;
    case '4':
            cantidad = base * 2.5;
            break;
    default:
        break;
   }
   //marca del veihculo
    // leer año
    const diferencia = new Date().getFullYear() - this.year;
    // cada año que la diferencia es mayor se reduce el costo del seguro
    cantidad -= ((diferencia * 3) * cantidad)/100;
    /*
    Si el seguro es básico se multiplica por un 30% mas.
    Si el seguro es completo se multiplica por un 50% mas.
    */
   if(this.tipo === 'basico'){
       cantidad += 2500;
   }else{
        cantidad += 3000;
   }

   return cantidad;
}

function UI(){  }

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
          min = max -20;
    
    const selectYear = document.querySelector('#year');

    for(let i = max; i>min; i--){
        let option =  document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// mueatra alertas

UI.prototype.mostrarMensaje = (mensaje,tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }
    
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    // insertar en html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 2000);
}

UI.prototype.mostrarResultado = (total,seguro) =>{

    const {marca, year, tipo , auto} = seguro;
    let txtauto;
    let txtMarca;
    switch(marca){
        case '1':
            txtMarca = 'Automovil';
            break;
        case '2':
            txtMarca = 'SUV';
            break;   
        case '3':
            txtMarca = 'Motocicleta';
            break;
        default:
            break;
    }
    

    // crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class='header'> Tu cotizacion </p>
    <p><img src="/img/logo-GNP.jpeg"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Total aproximado: <span class='font-normal'> $${total}</span> </p>
    <p><img src="/img/Logo-Qualitas.png"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Total aproximado: <span class='font-normal'> $${1400+total}</span> </p>
    <p><img src="/img/axa.jpg"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Total aproximado: <span class='font-normal'> $${1550+total}</span> </p>
    <p><img src="/img/Logo-ElPotosi.png"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Total aproximado: <span class='font-normal'> $${1450+total}</span> </p>
    <p class='font-bold'>Direccion: Sierra de Álvarez #222, lomas 4ta sección San Luis Potosí,SLP </p>
        `;
    const resultadoDiv = document.querySelector('#resultado');
    

    // mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        // se borra el spinner y se muestra el resultado
        resultadoDiv.appendChild(div);
    }, 2000);

}
// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones();
});

eventListeners();

function eventListeners(){
    
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // leer marca seleccionada
    const marca = document.querySelector('#marca').value;
    // leer año seleccionado
    const year = document.querySelector('#year').value;
    // leer tipo cobertura
    const tipo = document.querySelector('input[name=tipo]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');
    // ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }
    // instanciar seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();
    // use prototype que va a cotizar
    ui.mostrarResultado(total, seguro);


}