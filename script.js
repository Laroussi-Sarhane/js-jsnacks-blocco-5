const zucchine = [
  {
    type: 'zucchineNere',
    peso: 200,
    lunghezza: 33
  },
  {
    type: 'zucchinaDue',
    peso: 150,
    lunghezza: 30
  },
  {
    type: 'zucchinaTre',
    peso: 180,
    lunghezza: 27
  },
  {
    type: 'zucchinaQuattro',
    peso: 300,
    lunghezza: 20
  },
  {
    type: 'zucchinaCinque',
    peso: 190,
    lunghezza: 26
  },
  {
    type: 'zucchinaSei',
    peso: 100,
    lunghezza: 12
  },
  {
    type: 'zucchinaSette',
    peso: 400,
    lunghezza: 19
  },
  {
    type: 'zucchinaOtto',
    peso: 230,
    lunghezza: 14
  },
  {
    type: 'zucchinaNove',
    peso: 290,
    lunghezza: 40
  },
  {
    type: 'zucchinaDieci',
    peso: 50,
    lunghezza: 7
  },
]

const pesoTotale = zucchine.reduce((totale, zucchine) => totale + zucchine.peso, 0);
 console.log(pesoTotale);

 const short = zucchine.filter(zucchina => zucchina.lunghezza < 15);
 const long  = zucchine.filter(zucchina => zucchina.lunghezza > 15); 

 console.log(long);
 console.log(short);

 //adesso vado A sommare tuute le zucchine short e quelle long

 const totalShort = short.reduce((totale, zucchine) => totale + zucchine.peso, 0);

 const totalLong = long.reduce((totale, zucchine) => totale + zucchine.peso, 0);

 console.log(totalShort);
 console.log(totalLong);


 const parola = 'ciclamino'
 const parolaGirata = giraParola(parola);

 console.log(parolaGirata);

 function giraParola(parola){
  return parola.split('').reverse().join('');
 }

 const alfabeto = [ 'a', 'ab', 'ac', 'ad', 'ae'];

 const numeri = ['1','2','3','4','5','6','7','8'];

 const mix = createMix();


 function createMix(){
  const mix = []

  for(let i=0; i<8; i++){
    mix.push(numeri[i], alfabeto[i])
    console.log(mix);
  }
 }