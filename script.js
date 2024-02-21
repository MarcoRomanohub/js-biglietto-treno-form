
// INPUT
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.getElementById('eta');

// BUTTONS
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// DATI
let km;
const priceXKm = 0.21;
let prezzoBiglietto = km * priceXKm;
let scontoMinorenni;
let scontoSenior;

// if(input3 option.value === '3'){
//   sconto = prezzoBiglietto * 0.4;
// }else if(input3.value === '1'){
//   sconto = prezzoBiglietto * 0.2;
// }

btn1.addEventListener('click',function(event){
  // all'interno delle graffe li compie l'azione
  event.preventDefault();
  km = input2.value;
  prezzoBiglietto = km * priceXKm;
  scontoMinorenni = prezzoBiglietto * 0.2;
  scontoSenior = prezzoBiglietto * 0.4;
  // console.log(prezzoBiglietto);
  // console.log(scontoMinorenni);
  // console.log(scontoSenior);

  if(input3.value == 1){
    prezzoBiglietto = prezzoBiglietto - scontoMinorenni;
    // console.log(prezzoBiglietto);
  }else if (input3.value == 3){
    prezzoBiglietto = prezzoBiglietto - scontoSenior;
  }
  console.log(prezzoBiglietto);
})


// DATI



// //1
// let km = input2.value;
// console.log(km);
// //2
// let etaPasseggero = input3.value
// console.log (etaPasseggero);
// //3
// let prezzoBiglietto = km * 0.21;
// let sconto = '';


// if(etaPasseggero < 18){
//   message = 'I passeggeri minorenni hanno diritto ad uno sconto del 20%, il tuo biglietto ha un costo di: €'
//   sconto = prezzoBiglietto * 0.2;
// } else if(etaPasseggero > 65){
//   message = 'I passeggeri over 65 hanno diritto ad uno sconto del 40%, il tuo biglietto ha un costo di: €'
//   sconto = prezzoBiglietto * 0.4;
// } else{
//   message = 'Il tuo biglietto ha un costo di: €'
// }
// prezzoBiglietto = prezzoBiglietto - sconto ;
// console.log(prezzoBiglietto);

// document.getElementById('output').innerHTML = message + prezzoBiglietto.toFixed(2);