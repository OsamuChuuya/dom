let imya = prompt("Укажи имя");
let familya = prompt("Фамилия");
let vozrast = prompt("Возраст");
let vap = prompt("Ismingiz harf tanlang \n 1) Katta \n 2) Kichik");
    if(vap==="1"){
        imya=imya.toUpperCase()
        familya = familya.toUpperCase();
    }
    else{
        imya=imya.toLowerCase()
    }
    if(vap>"2"){
        alert(`выбери один вариант`)
        let vap = prompt("Ismingiz harf tanlang \n 1) Katta \n 2) Kichik");
    }



let bye = document.createElement("ol")
let li1 = document.createElement("li")
li1.textContent=`ism:${imya} `
let li2 = document.createElement("li")
li2.textContent=`Familya:${familya} `
let li3 = document.createElement("li")
li3.textContent=`Yosh:${vozrast} `
bye.appendChild(li1)
bye.appendChild(li2)
bye.appendChild(li3)
li1.style.marginTop='10px'
li2.style.marginTop='10px'
li3.style.marginTop='10px'
document.body.appendChild(bye)
bye.style.color= 'white'
bye.style.backgroundColor='black'
bye.style.width= '250px'
bye.style.height= '150px'
bye.style.padding='15px'
bye.style.paddingLeft='15px'



