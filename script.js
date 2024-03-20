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

const pesoTotale = zucchine.reduce((totale, zucchine) => {
  console.log('totale=',totale)
  return totale + zucchine.peso 
  
  

},0);
 console.log(pesoTotale);
 
 


 //creo due costanti e gli metto il filter per creare 2 array 
 const short = zucchine.filter(zucchina => zucchina.lunghezza < 15);
 const long  = zucchine.filter(zucchina => zucchina.lunghezza > 15); 

 console.log(long);
 console.log(short);

 //adesso vado A sommare tuute le zucchine short e quelle long
 //riprendo la formula di prima che devo ancora capire (chiedi al prof)

 const totalShort = short.reduce((totale, zucchine) => totale + zucchine.peso, 0);

 //creo totale short e utilizzo il reduce 

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
 function createNum(){
  const alfanum = []
  
  const limit = Math.min(numeri.length, lettere.length)
  console.log(limit);
  
  for(let i=0; i<limit;i++){
    alfanum.push(numeri[i],lettere[i])
    console.log(alfanum);
  }
  
  alfanum.push(...numeri.slice(limit),...lettere.slice(limit))
  console.log(alfanum);
  return alfanum
}