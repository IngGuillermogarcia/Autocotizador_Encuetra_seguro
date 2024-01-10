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
   const base = 4250;

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
            cantidad = base * 1.5;
            break;
    case '5':
                cantidad = base * 1.5;
                break;
    case '6':
                cantidad = base * 1.7;
                break;
    case '7':
                cantidad = base * 1.6;
                break;
    case '8':
        cantidad = base * 1.5;
        break;
    case '9':
        cantidad = base * 1.9;  
        break;  
    case '10':
        cantidad = base * 1.9;
        break;
    case '11':
        cantidad = base * 2.0;
        break; 
    case '12':
        cantidad = base * 1.9;
        break; 
    case '13':
        cantidad = base * 2.1;
        break; 
    case '14':
        cantidad = base * 2.1;
        break; 
    case '15':
        cantidad = base * 2.5;
         break; 
    case '16':
        cantidad = base * 2.8;
         break; 
    case '17':
        cantidad = base * 3.1;
         break;
    case '18':
        cantidad = base * 3.0;
         break;
    case '19':
        cantidad = base * 2.9;
             break;   
    case '20':
                cantidad = base * 2.9;
                 break; 
    case '21':
                cantidad = base * 3.2;
                 break;
    case '22':
                cantidad = base * 3.3;
                 break;
    case '23':
                cantidad = base * 3.5;
                 break; 
    case '24':
                cantidad = base * 3.6;
                 break;
    case '25':
                cantidad = base * 3.7;
                 break; 
    case '26':
                    cantidad = base * 2.5;
                     break; 
    case '27':
                    cantidad = base * 2.7;
                     break;
    case '28':
                    cantidad = base * 2.9;
                     break;
    case '29':
                        cantidad = base * 3.2;
                         break;
    case '30':
                    cantidad = base * 3.3;
                         break;
    case '31':
                        cantidad = base * 3.5;
                         break; 
    case '32':
                        cantidad = base * 3.6;
                         break;
    case '33':
                        cantidad = base * 3.7;
                         break; 
    case '34':
                            cantidad = base * 2.5;
                             break; 
    case '35':
                            cantidad = base * 2.7;
                             break;
    case '36':
                                cantidad = base * 1.7;
                                break;
    case '37':
                                cantidad = base * 1.8;
                                break;
    case '38':
                                cantidad = base * 1.6;
                                break;
    case '39':
                                cantidad = base * 1.5;
                                break;
    case '40':
                                    cantidad = base * 1.5;
                                    break;
    case '41':
                                    cantidad = base * 1.7;
                                    break;
    case '42':
                                    cantidad = base * 1.6;
                                    break;
    case '43':
                        cantidad = base * 1.5;
                        break;
    case '44':
                            cantidad = base * 1.9;  
                            break;  
    case '45':
                            cantidad = base * 1.9;
                            break;
    case '46':
        cantidad = base * 2.2;
        break;
    case '47':
        cantidad = base * 2.8;
    case '48':
        cantidad = base * 2.0;
    case '49':
        cantidad = base * 3.1;
    case '50':
        cantidad = base * 3.3;
    case '51':
        cantidad = base * 3.6;
    case '52':
        cantidad = base * 3.8;
    case '53':
        cantidad = base * 3.9;
    case '54':
        cantidad = base * 3.8;
    case '55':
        cantidad = base * 3.9;
    case '56':
            cantidad = base * 4.2;
    case '57':
            cantidad = base * 1.8 ;
            break;
    case '58':
            cantidad = base * 2.0 ;
            break;
    case '59':
            cantidad = base * 2.2 ;
    case '60':
            cantidad = base * 2.3 ;
    case '61':
            cantidad = base * 2.5 ;
    case '62':
            cantidad = base * 1.7 ;
    case '63':
            cantidad = base * 1.8;
    case '64':
            cantidad = base * 1.9;
    case '65':
            cantidad = base * 2.1;
    case '66':
            cantidad = base * 2.2;
    case '67':
            cantidad = base * 2.3;
    case '68':
            cantidad = base * 2.4;
    case '69':
            cantidad = base * 1.8;
            break;
    case '70':
            cantidad = base * 1.9;
    case '71':
            cantidad = base * 2.1 ;
    case '72':
            cantidad = base * 2.3;
    case '73':
            cantidad = base * 2.9;
    case '74':
            cantidad = base * 3.4;
    case '75':
            cantidad = base * 3.1;
        break;
    case '76':
            cantidad = base * 3.2;
    case '77':
            cantidad = base * 3.4;
    case '78':
            cantidad = base * 3.8 ;
    case '79':
            cantidad = base * 3.1;
    case '80':
            cantidad = base * 3.4;
    case '81':
            cantidad = base * 3.5;
    case '82':
            cantidad = base * 3.6;
    case '83':
            cantidad = base * 3.3;
    case '84':
            cantidad = base * 3.5;
    case '85':
            cantidad = base * 3.7;
    case '86':
            cantidad = base * 3.9;
    case '87':
            cantidad = base * 3.9;
    case '88':
            cantidad = base * 4.2;
    case '89':
            cantidad = base * 3.9;
    case '90':
            cantidad = base * 4.3;
    case '91':
            cantidad = base * 4.4;
    case '92':
            cantidad = base * 4.5;
    case '93':
            cantidad = base * 4.6;
    case '94':
            cantidad = base * 4.7;
    case '95':
            cantidad = base * 4.5;
    case '96':
            cantidad = base * 4.6;
    case '97':
            cantidad = base * 4.4;
    case '98':
            cantidad = base * 4.5;
    case '99':
            cantidad = base * 4.8;
    case '100':
            cantidad = base * 4.5;
    case '101':
            cantidad = base * 4.7;
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
       cantidad += 1500;
   }else{
        cantidad += 2500;
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
    <p class='header'> Tus opciones de cotizacion </p>
    <p><center><img src="/img/logo-GNP.jpeg"  width="90" height="90" align="middle"><center></p>
    <p class='font-bold'> Costo aproximado: <span class='font-normal'> $${350+total}</span> </p>
    <p><img src="/img/Logo-Qualitas.png"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Costo aproximado: <span class='font-normal'> $${550+total}</span> </p>
    <p><img src="/img/axa.jpg"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Costo aproximado: <span class='font-normal'> $${500+total}</span> </p>
    <p><img src="/img/Logo-ElPotosi.png"  width="90" height="90" align="middle"></p>
    <p class='font-bold'> Costo aproximado: <span class='font-normal'> $${450+total}</span> </p>
    <p class='font-bold'>Contactanos en Sierra de Álvarez #222, lomas 4ta sección San Luis Potosí,SLP o manda Wattsapp. </p>
    <p class='font-bold'> <a href="https://wa.me/4442427810/?text=%20¡Hola!%20quisiera%20mas%20informes.%20" target="_blank">Escribenos en wattsapp aqui</p>
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