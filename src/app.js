console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarBugun=9.1
}

console.log(dolarBugun)

const euroDun=11.2
//euroDun=11 //!! Hata:const tanımlanan bir değişken değiştirilemez

console.log(euroDun)

//Array tanımlama
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi","Kamu Konut Kredisi" ,"Özel Konut Kredisi"]

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++)
{
    console.log("<li>"+konutKredileri[i]+"</li>")
}

console.log("</ul>")

console.log(konutKredileri)
