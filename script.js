let object = [
    {
        "img": "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
        "nomi": "Kungfu panda 4",
        "type": "multfilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://daxshat.net/uploads/posts/2022-03/1648622369_s23a6sqq.jpg",
        "nomi": "Men qizarib ketyapman",
        "type": "multfilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://frekino.net/uploads/posts/2023-05/1684601280_1684601195660.jpeg",
        "nomi": "Tubsizlik maxluqi MEG 2",
        "type": "kinofilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://lh3.googleusercontent.com/proxy/VP6-29T_XRGHvlAtxn2woROpuI4TOJ2tRPDZg-43UoTD3sNSksujT0uxXgCRUlLpM3uY5SGAmKNd35dNEWkcv7CH9nQ3LUXEosFddiMg4YA0GugzgjKLQp17",
        "nomi": "Uch bahodir va katta poyga",
        "type": "multfilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://uzmoov.org/uploads/posts/2024-03/1709386434_1709386107-155809129-dolina-volkov-gladio-kinochilar-com.jpg",
        "nomi": "Qashqirlar Makoni",
        "type": "kinofilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://asilmedia.org/uploads/mini/schema/ea/350da2347dc1231f3de4e68e28936b.jpg",
        "nomi": "o'rgimchak odam",
        "type": "kinofilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://aslmedia.uz/uploads/posts/2022-06/1656435816_1650003099-1871266800-1.jpg",
        "nomi": "Muzlik davri 6 HD",
        "type": "multfilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://kinolar.net/uploads/posts/2022-11/thumbs/1668113941_image_7.jpg",
        "nomi": "Vaxshiy ayol HD",
        "type": "kinofilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://m.media-amazon.com/images/I/81G832ATJSL._AC_UF894,1000_QL80_.jpg",
        "nomi": "Boyka 4 HD",
        "type": "kinofilm",
        "button": "Tomosha qilish"
    },

    {
        "img": "https://mohidub.uz/assets/images/movies/element.jpg",
        "nomi": "Elementlar",
        "type": "multfilm",
        "button": "Tomosha qilish"
    }
]

let cards = document.getElementById("cards")
let background = document.querySelector('.background')
let open_btn = document.getElementById("open")
let close_btn = document.getElementById('close')

open_btn.addEventListener('click', function() {
    background.style.display = "block"
})

close_btn.addEventListener('click', function() {
    background.style.display = "none"
})

object.forEach(objects => {
    console.log(objects);
    let card = document.createElement("div")
    card.innerHTML = `
            <img src="${objects.img}" alt="">
            <h5>${objects.nomi}</h5>
            <p>${objects.type}</p>
            <button>${objects.button}</button>
    `

    cards.append(card)
    card.classList.add('card')
});