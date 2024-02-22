
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
let ticketPrice = km * priceXKm;
let discount;


btn1.addEventListener('click',function(event){
  event.preventDefault();
  km = input2.value;
  ticketPrice = km * priceXKm;

  if(input3.value == 3){
    discount = ticketPrice * 0.4;
  }else if(input3.value == 1){
    discount = ticketPrice * 0.2;
  }

  if(input3.value != 2){
    ticketPrice = ticketPrice - discount;
  }
  console.log(ticketPrice);

  output.classList.remove('d-none')

  document.getElementById('outputPrice').innerHTML = ticketPrice.toFixed(2) + '€';
})






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