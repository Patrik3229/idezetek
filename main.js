import quotes from './quotes.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

document.addEventListener('DOMContentLoaded', () => {
  
  ////////////////
  // 1. feladat //
  ////////////////

  document.getElementById('btnElsoFeladat').addEventListener('click', () => {
    let idezetek1 = Array.from(quotes.quotes);
  idezetek1.sort((a, b) => {
    let nameA = a.author.toLowerCase();
    let nameB = b.author.toLowerCase();
    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    return 0
  })
  
  let elsoFeladatErtekek = idezetek1.map((item) => {
    return {
      Szerzo: item.author,
      Idezet: item.quote
    }
  });
  console.log(elsoFeladatErtekek);

  elsoFeladatErtekek.forEach(element => {
    let listaelem = document.createElement('li');
    listaelem.textContent = `Szerző: ${element.Szerzo}, Idézet: ${element.Idezet}`;
    document.getElementById('listElsoFeladat').appendChild(listaelem);
  });
  })

  ////////////////
  // 2. feladat //
  ////////////////

  document.getElementById('btnMasodikFeladat').addEventListener('click', () => {
    let idezetek2 = Array.from(quotes.quotes);
    let masodikFeladatErtekek = idezetek2.map(x => {
      return{
        Idezet: x.quote.replace('the', '<strong>the</strong>').replace('The', '<strong>The</strong>')
      }
    });
  
    masodikFeladatErtekek.forEach(element => {
      let listaelem = document.createElement('li');
      listaelem.innerHTML = `Idézet: ${element.Idezet}`;
      document.getElementById('listMasodikFeladat').appendChild(listaelem);
    });
  })
  
  ////////////////
  // 3. feladat //
  ////////////////

  document.getElementById('btnHarmadikFeladat').addEventListener('click', () => {
    let idezetek3 = Array.from(quotes.quotes);
    let idezetekHosszai = [];
    console.log(idezetekHosszai);
    idezetek3.forEach(element => {
      idezetekHosszai.push(` ${element.quote.length}`);
      idezetekHosszai.join(`,`);
      console.log(element.quote.length);
    });

    console.log(idezetekHosszai);
    document.getElementById('divHarmadikFeladat').textContent = idezetekHosszai;
  })
  

  ////////////////
  // 4. feladat //
  ////////////////
  let idezetek4 = Array.from(quotes.quotes);
  let input = document.getElementById('textInput');
  let output = document.getElementById('numberOutput');
  let pontosEgyezes = document.getElementById('checkboxReszlegesVagyPontos');
  let egyezesekSzama = 0;
  input.addEventListener('input', () => {
    egyezesekSzama = 0;
    if (!pontosEgyezes.checked) {
      idezetek4.forEach(element => {
        if (element.author.includes(input.value)){
          egyezesekSzama++;
        }
      });
      output.value = egyezesekSzama;
      console.log('nem');
    }
    else {
      idezetek4.forEach(element => {
        if (input.value == element.author){
          egyezesekSzama++;
        }
      });
      output.value = egyezesekSzama;
      console.log('igen');
    }
  });
});