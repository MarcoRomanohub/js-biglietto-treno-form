
// INPUT
// FIXME: Potevo direttamente salvare così: const passengerId = document.querySelector('.input1').value; ma all'interno della funzione "click", e avevo finito
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.getElementById('eta');

// BUTTONS
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

// DATI
const codeCp = Math.ceil(Math.random() * 99999)
const carriageNumber = Math.ceil(Math.random() * 8)
let passengerId
let km;
const priceXKm = 0.21;
let ticketPrice = km * priceXKm;
let discount;
let tipoBiglietto;


btn1.addEventListener('click',function(event){
  event.preventDefault();
  // const km = parseInt(document.querySelector('.input2').value)
  km = input2.value;
  passengerId = input1.value
  ticketPrice = km * priceXKm;

  if(input3.value == 3){
    discount = ticketPrice * 0.4;
    tipoBiglietto = 'Sconto Senior'
  }else if(input3.value == 1){
    discount = ticketPrice * 0.2;
    tipoBiglietto = 'Sconto Minorenne'
  }else{
    tipoBiglietto = 'Biglietto Standard'
  }

  if(input3.value != 2){
    ticketPrice = ticketPrice - discount;
  }
  console.log(ticketPrice);

  output.classList.remove('d-none')

  document.getElementById('idPassenger').innerHTML = passengerId;
  document.getElementById('tipoBiglietto').innerHTML = tipoBiglietto;
  document.getElementById('randomCarriage').innerHTML = carriageNumber;
  document.getElementById('randomCp').innerHTML = codeCp;
  document.getElementById('outputPrice').innerHTML = ticketPrice.toFixed(2) + '€';
})

btn2.addEventListener('click',function(){
  output.classList.add('d-none');
})






