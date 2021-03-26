function carregar() {
var date = new Date()
var hour = date.getHours()
var info = document.querySelector("p.info")
info.innerText = `Agora são ${hour} horas.`


if (hour >=00 && hour < 12) {
    document.body.style.background = '#fff441'
    document.getElementById('image').src = 'images/manha.jpg'
} else if (hour >=12 && hour < 18) {
    document.body.style.background = '#f99f60'
    document.getElementById('image').src = 'images/tarde.jpg'
} else {
    document.body.style.background = '#212f4d'
    document.getElementById('image').src = 'images/noite.jpg'
    document.querySelector("h1.title").style.color = 'white'
}

}