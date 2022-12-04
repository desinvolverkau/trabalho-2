 
//entradas
let botao = document.querySelector("#botao")
 
//saidas
let saida1 = document.getElementById("saida1")
let saida2 = document.getElementById("saida2")
let saida3 = document.getElementById("saida3")
let saida4 = document.getElementById("saida4")
 



botao.addEventListener("click", (e) => {
 
  let celularesVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]
  let mes
  for (let NumeroMes = 0; NumeroMes < 12; NumeroMes++) {
    while (true) {
      let phone = prompt(`Digite os celulares vendido ao mes ${NumeroMes + 1}.Digite 'fim' para pular para o proximo mes : `)
 
      if (phone.toUpperCase() === 'FIM') {
        break
      } else celularesVendidos[NumeroMes].push(phone)
    }
    switch (NumeroMes) {
      case 0: mes = 'Janeiro'; break
      case 1: mes = 'Fevereiro'; break
      case 2: mes = 'Março'; break
      case 3: mes = 'Abril'; break
      case 4: mes = 'Maio'; break
      case 5: mes = 'Junho'; break
      case 6: mes = 'Julho'; break
      case 7: mes = 'Agosto'; break
      case 8: mes = 'Setembro'; break
      case 9: mes = 'Outubro'; break
      case 10: mes = 'Novembro'; break
      case 11: mes = 'Dezembro'; break
    }
 
    //Impressão dos celulares
    saida1.innerHTML = `Os celulares são:` + "<br>"
    //Laço de repetição para mostrar todos os  celulares vendidos
    for (const mes of celularesVendidos[0]) {
      saida1.innerText += `${mes}, `
    }
 
    //Impressão dos pokemon da região de Kanto
    saida2.innerHTML = `Os celulares são:` + "<br>"
    //Laço de repetição para mostrar todos os celulares vendidos
    for (const iphone of celularesVendidos) {
      saida2.innerHTML += `${iphone}<br> `
    }
 
    //etrutura para contabilizar os celulares vendidos em cada mes :
    //entrada
    let celularesPM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//INICIALIZANDO O CONTADOR EM ZERO
 
 
    //}contadores por mes ultilizando a propiedade length:
    celularesPM = [
      celularesVendidos[0].length,
      celularesVendidos[1].length,
      celularesVendidos[2].length,
      celularesVendidos[3].length,
      celularesVendidos[4].length,
      celularesVendidos[5].length,
      celularesVendidos[6].length,
      celularesVendidos[7].length,
      celularesVendidos[8].length,
      celularesVendidos[9].length,
      celularesVendidos[10].length,
      celularesVendidos[11].length
 
    ]
 
    //Impressão da quantidade de Celulares Vendidos
    saida3.innerHTML = `A Quantidade de celular que saiu em cada Mês:` + "<br>"
    //Quantos Celulare Foram Vendidos Por Mês
    for (const qtCelulares of celularesPM) {
      saida3.innerHTML+= `${qtCelulares}, <br>`
    }
 
    for (const iphone of celularesVendidos) {
      saida2.innerHTML += `${iphone}<br> `
    }
 
    //estrutura para informa quantos foram vendidos sobre  a marca de celular
    let totalMSaidas = prompt("digite  a marca do Celular  para Saber a quantidade que  foi vendida ")
 
    let Ncell = 0
 
 
    for (let NumeroMes = 0; NumeroMes < 12; NumeroMes++) {
 
 
      for (let iCelulares = 0; celularesVendidos[NumeroMes][iCelulares] !== undefined; iCelulares++)
        if (celularesVendidos[NumeroMes][iCelulares] === totalMSaidas) Ncell++
 
 
    }
 
    //Impressão dos celulares saidos da loja 
    saida4.innerHTML = `Os celulares vendidos no total são :` + "<br>"
    //saida para mostrar o total de celulares vendidos 
    for (const Ncell of totalMSaidas ) {
      saida4.innerText += ` é: ${totalMSaidas} é:${ Ncell } `
    }
 
  }
})
 


