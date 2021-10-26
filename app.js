// COMANDO MAP

/*const numbers = [1, 2, 3]

const doubleNumber = numbers.map(item => item * 2)

console.log(doubleNumber)

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(salePrices)*/

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProduts = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 } // garantir que vai criar um array novo sem alterar o array antigo
  }
  return product
})

//console.log(saleProduts)

// COMANDO FILTER

/*const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)*/

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUser = users.filter(user => user.premium)

//console.log(premiumUser)

// COMANDO REDUCE

/* const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult) */

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    accumulator += phaseScore.score
  }
  return accumulator
}, 0)

//console.log(rogerScore)

//  EXECICIOS

/*
  01
  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const numerosImpares = randomNumbers.filter(
  randomNumber => randomNumber % 2 === 1
)

console.log(numerosImpares)

/*
  02
  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersLessThan501 = crazyNumbers.reduce((accumulator, crazyNumber) => {
  if (crazyNumber < 501) {
    accumulator++
  }
  return accumulator
}, 0)

console.log(numbersLessThan501)

/*
  03
  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

const numbers = [5, 7, 3]

const quadradoNumber = numbers.map(item => item * item)

console.log(quadradoNumber)

/*
  04
  - Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
  - Exiba o novo array no console.
*/

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const filter2000 = tarantinoMovies.filter(
  tarantinoMovie => tarantinoMovie.release < 2000
)

console.log(filter2000)

/*
  05
  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: "The Handmaid's Tale", releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const nameTvShows = tvShows.map(tvShow => tvShow.name)

console.log(nameTvShows)

/*
  06
  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.9 },
  { name: 'Death Stranding', price: 149.99 }
]

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

const productList = cart.reduce(
  (accumulator, { name }) => `${accumulator}- ${name}\n`,
  ''
)

console.log(productList)
