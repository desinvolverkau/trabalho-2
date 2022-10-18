
//entradas

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


  //saida para mostrar o celular vendido em cada mes:
  console.log(`Os celulares vendidas no mes de ${mes} são:`)

  for (let iphone = 0; celularesVendidos[NumeroMes][iphone] !== undefined; iphone++)
    console.log(`${celularesVendidos[NumeroMes][iphone]}`)
}


//etrutura para contabilizar os celulares vendidos em cada mes :
//entrada
let celularesPM = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//INICIALIZANDO O CONTADOR EM ZERO


//contadores por mes ultilizando a propiedade length:
 let TcelularesPM = [
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


console.log(TcelularesPM.join(" - "))

//estrutura para informa quantos foram vendidos sobre  a marca de celular 
let totalMSaidas = document.getElementById("totalMSaidas");

let Ncell = 0


for (let NumeroMes = 0; NumeroMes < 12; NumeroMes++) {


  for (let iCelulares = 0; celularesVendidos[NumeroMes][iCelulares] !== undefined; iCelulares++)
    if (celularesVendidos[NumeroMes][iCelulares] === totalMSaidas) Ncell++


}
console.log(`O total  Dde celulares do tipo é: ${totalMSaidas} é: ${Ncell}`)


