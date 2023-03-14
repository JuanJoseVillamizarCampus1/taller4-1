/*
1. A través del siguiente taller, construir un menú en una función
alert que gestione las siguientes opciones de menú referentes al
manejo de los arrays, objetos, funciones y otras operaciones en
JavaScript entre dichos temas.
*/
function menu() {
    let seleccion;
    let edad;
    let name;
    const datos={};
    const comidas=[];
    const lista1=[];
    let nameobjeto;
    let nameobjeto1;
    let propiedad1;
    let propiedad2;
    let value1;
    let value2;
    do {
      seleccion = parseInt(prompt(`-------------MENU--------------
      1.  Lectura de Datos
      2.  Crear Objeto
      3.  Mostrar Objeto
      4.  Crear Array
      5.  Mostrar Array
      6.  Eliminar primer elemento del Array
      7.  Eliminar ultimo elemento del Array
      8.  Eliminar cualquier elemento del Array
      9.  Agregar elemento al comienzo del Array
      10. Agregar elemento al final del Array
      11. Crear Array con objetos
      12. Iterar Array con FOR
      13. Iterar Array con objetos ForEacH
      14. Iterar Array con objetos Map y crear copia
      15. Proceso personal
      0.  Salir`));
  
      switch (seleccion) {
        case 1:
          alert("Seleccionaste la opcion 1. Lectura de Datos")   
          name= prompt("Dime tu nombre");
          edad = Number(prompt("Dime tu edad"));
          alert(`Tu nombre es ${name} y tu edad es ${edad}`);
          console.log(`Tu nombre es ${name} y tu edad es ${edad}`);
          break;
        case 2:
          alert("Seleccionaste la opcion 2. Crear objeto");
          datos.nombre=prompt("Dime tu nombre");
          datos.edad=parseInt(prompt("Dime tu edad"));
          datos.numero=parseInt(prompt("Dime tu numero de telefono"));
          datos.correo=prompt("Dime tu correo")
          alert(`gracias ${datos.nombre} tu objeto a sido creado`);
          console.log(`gracias ${datos.nombre} tu objeto a sido creado`);
           
          break;
        case 3:
          alert("Seleccionaste la opcion 3. Mostrar objeto");
          alert(datos);
          console.log(datos);
          break;
        case 4:
          alert("Seleccionaste la opcion 4. Crear array");
          for (let i = 0; i < 5; i++) {
            let comida=prompt("Dime 5 comidas que te gusten")
            comidas.push(comida);
          }
          alert("Hemos creado un array con tus comidas favoritas")
          break;
        case 5:
          alert("Seleccionaste la opcion 5. Mostrar array");
          alert(comidas);
          console.log(comidas);
          break;
        case 6:
          alert("Seleccionaste la opcion 6. Eliminar primer elemento del array");
          comidas.shift();
          console.log(comidas);
          alert(comidas)
          break;
        case 7:
          alert("Seleccionaste la opcion 7. Eliminar último elemento del array");
          console.log("Seleccionaste la opcion 7. Eliminar último elemento del array");
          comidas.pop();
          console.log(comidas);
          alert(comidas);
          break;
        case 8:
          alert("Seleccionaste la opcion 8. Eliminar cualquier elemento del array");
          console.log("Seleccionaste la opcion 8. Eliminar cualquier elemento del array");
          comidas.splice(1,1);
          alert(comidas)
          console.log(comidas);
          break;
        case 9:
          alert("Seleccionaste la opcion 9. Agregar elemento al comienzo del array");
          console.log("Seleccionaste la opcion 9. Agregar elemento al comienzo del array");
          let nuevoElemento= prompt("Dime que comida deseas agregar")
          comidas.unshift(nuevoElemento);
          alert(comidas);
          console.log(comidas);
          break;
          
        case 10:
          alert("Seleccionaste la opcion 10. Agregar elemento al final del array");
          console.log("Seleccionaste la opcion 10. Agregar elemento al final del array");
          let nuevoElemento1= prompt("Dime que comida deseas agregar al final")
          comidas.push(nuevoElemento1);
          alert(comidas);
          console.log(comidas);
          break;
  
  
        case 11:
        const objeto={}
          alert("Seleccionaste la opcion 11 .Crear array con objetos");
          console.log("Seleccionaste la opcion 11 .Crear array con objetos");
          nameobjeto=prompt("ingrese el nombre de su objeto")
  
          for (let index = 0; index < 2; index++) {
            propiedad1=prompt(`Ingrese la propiedad ${index+1}  de su objeto ${nameobjeto}`);
            value1=prompt(`Ingrese el valor de la propiedad ${propiedad1}`);
            objeto[propiedad1]=value1;
        }
        const objeto1={}
          nameobjeto1 = prompt("ingrese el nombre de su objeto2")
  
          for (let index = 0; index < 2; index++) {
            propiedad2=prompt(`Ingrese la propiedad  de su objeto ${nameobjeto1}`);
            value2=prompt(`Ingrese el valor de la propiedad ${propiedad2}`);
            objeto1[propiedad2]=value2;
        }
        lista1.push(objeto,objeto1);
          console.log(lista1);
          alert(lista1);
          break;
        case 12:
          console.log("Seleccionaste la opcion 12 .Iterar array con FOR");
          for(let j =0; j<lista1.length; j++){
            console.log(`Los elementos  de los objeto${j+1} del array son:`);
            for (let propiedad3 in lista1[j]) {
              console.log(`${propiedad3}: ${lista1[j][propiedad3]} `)
                
              }
            }
          
          a=lista1.length;
          console.log(a);
          break;
        case 13:
          console.log("Seleccionaste la opcion 13 .Iterar array con objetos ForEacH");
          lista1.forEach((iterandoObjeto) => {
            for (let propiedad in iterandoObjeto) {
              console.log(`Iterando con ForEach - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
            }
          });
          // En este código , intente iterar sobre las propiedades "propiedad1" y "value1" de cada objeto del array lista1 utilizando el método forEach. Sin embargo, el método forEach se usa para iterar sobre los elementos de un array y no sobre las propiedades de un objeto.A menos que sepa el nombre de su propiedad.
          // Cuando se usa lista1.forEach((arr) => {console.log(Iterando con ForEach${arr.propiedad1}-${arr.value1});}), la variable arr es un objeto dentro del array lista1. En este objeto, las propiedades propiedad1 y value1 no existen, por lo que obtenia como resultado "undefined".
          // En cambio, si uso for...in, puedo iterar sobre las propiedades de cada objeto dentro del array. Al hacer esto, puedo acceder a cada valor de propiedad y valor en el objeto.
  
          // lista1.forEach((arr) => {console.log(`Iterando con ForEach${arr.propiedad1}-${arr.value1}`);});
          // lista1.forEach((arr) => {console.log(`Iterando con ForEach${arr.propiedad2}-${arr.value2}`);});
        
          break;
        case 14:
          alert("Seleccionaste la opcion 14  .Iterar array con objetos Map y crear copia");
          lista1.map((iterandoObjeto) => {
            for (let propiedad in iterandoObjeto) {
              console.log(`Iterando con map - propiedad: ${propiedad} - valor: ${iterandoObjeto[propiedad]}`);
            }
          });
          const cloneArray = items =>
            items.map(item =>
              Array.isArray(item)
                ? cloneArray(item)
                : item
              )
          const copiaLista1=cloneArray(lista1);
          console.log(copiaLista1);
          // lista1.map((arr) => {console.log(`Iterando con Map${arr.propiedad1}-${arr.value1}`);});
          // lista1.map((arr) => {console.log(`Iterando con ForEach${arr.propiedad2}-${arr.value2}`);});
          break;
        case 15:
           alert("Seleccionaste la opcion 15  .Calculadora");
          const suma = (num1,num2)=>{
              return Number(num1)+Number(num2);
          }
            const resta = (num1,num2)=>{
              return Number(num1)-Number(num2);
          }
            const multi = (num1,num2)=>{
              return Number(num1)*Number(num2);  
          }
              const div = (num1,num2)=>{
              return Number(num1)/Number(num2);  
          }
          alert("¿Que operacion deseas realizar?");
        let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4:division");
        if (operacion == 1) {
          let numero1 = prompt("pimer numero para sumar");
          let numero2 = prompt("segundo numero para sumar");
          resultado = suma(numero1,numero2);
          alert(`tu resultado es ${resultado}`);
          console.log(`tu resultado es ${resultado}`);
        }
  
  
        else if (operacion == 2) {
          let numero1 = prompt("pimer numero para restar");
          let numero2 = prompt("segundo numero para restar");
          resultado = resta(numero1,numero2);
          alert(`tu resultado es ${resultado}`);
          console.log(`tu resultado es ${resultado}`);
        }
        else if (operacion == 3) {
          let numero1 = prompt("pimer numero para multiplicar");
          let numero2 = prompt("segundo numero para multiplicar");
          resultado = multi(numero1,numero2);
          alert(`tu resultado es ${resultado}`);
          console.log(`tu resultado es ${resultado}`);
        }
        else if (operacion == 4) {
          let numero1 = prompt("pimer numero para dividir");
          let numero2 = prompt("segundo numero para dividir");
          resultado = div(numero1,numero2);
          alert(`tu resultado es ${resultado}`);
          console.log(`tu resultado es ${resultado}`);
        }
        else{
          alert("operacion no encontrada")
        }
          break;
        case 0:
          alert("No te vayas :(, mira que esto se compone");
          break;
        default:
          alert("Seleccione una opción válida de 0 a 15.");
          break;
      }
    } while (seleccion !== 0);
  }
  
  menu();
  
  
  
  