function imc(weight, height){
  return new Promise((resolve, reject)=>{
    if(typeof weight !== 'number' || typeof height !== 'number'){
      reject('Arguments must be of type number')
    }else {
      const calc = (weight / (height * height)).toFixed(1)
      resolve(calc)
    }
  })
}
function showImc(weight, height){
  imc(weight,height).then((result)=>{
      console.log(`O resultado do IMC é ${result}`) 
      if(result < 18.5) console.log('Situação : Magreza')
      else if(result < 24.9) console.log('Situação : Normal')
      else if(result < 29.9) console.log('Situação: Sobrepeso')
      else if(result < 39.9) console.log('Situação : Obesidade')
      else console.log('Situação: Obediade grave')
  }).catch((err)=>{
    console.log(`Erro : ${err}`)
  }) 
  console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

showImc(50, 'texto')


setTimeout(()=>{
  showImc(150, 1.60)
})










// imc().then((result)=>{
//   console.log(`O resultado é ${result}`)
// }).catch((err)=>{
//   console.log(`A promise rejeitada foi ${err}`)
// })