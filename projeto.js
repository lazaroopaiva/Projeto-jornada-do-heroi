console.log('Elon Musk é um jovem que sonha ser um empresário de sucesso e tirar sua família da pobreza. Para isso ele terá que achar o produto ideal para vender, se tornar uma referência no seu ramo, cuidar bem das finanças da empresa, fazer um bom marketing e dominar o mercado')



const prompt = require("prompt-sync")();

console.log()

let pergunta1 = prompt('Você achou o produto ideal? ')

console.log()

console.log(pergunta1)

console.log()

let pergunta2 = prompt('Você conseguiu se tornar uma referência do ramo? ')

console.log()

console.log(pergunta2)

console.log()

let pergunta3 = prompt('Você cuidou bem das finanças da empresa? ')

console.log()

console.log(pergunta3)

console.log()

let pergunta4 = prompt('Você fez um bom marketing? ')

console.log()

console.log(pergunta4)
console.log()

let pergunta5 = prompt('Você dominou o mercado? ')
 console.log()

console.log(pergunta5)

console.log()

  let variavelRespostas = 0;

if(pergunta1 == 'Sim'){ variavelRespostas ++
  
}
if(pergunta2 == 'Sim'){ variavelRespostas ++


                       
  
}
if(pergunta3 == 'Sim'){ variavelRespostas ++

  
}
if(pergunta4 == 'Sim'){ variavelRespostas ++

  
}
if(pergunta5 == 'Sim'){ variavelRespostas ++

  
} 

// VERIFICAÇÃO //

if(variavelRespostas== 0) { console.log('Você continuou estagnado na pobreza! ')

  
} else if(variavelRespostas== 1||variavelRespostas==2) { console.log('Você não se tornou um empresário de sucesso, mas tirou sua família da pobreza.')

  
} else if(variavelRespostas== 3) { console.log('Você se tornou um micro-empresário e tem uma vida confortável.')

  
} else if(variavelRespostas== 4) { console.log('Você se tornou empresário e tem muitos funcionários.')

  
} else if(variavelRespostas== 5) { console.log('Você se tornou o maior empresário do estado e tem uma grande fortuna.')

  
}
