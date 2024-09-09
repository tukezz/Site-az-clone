const dropdown = document.querySelector(".dropdown")
const dropitem = document.querySelector(".dropitem")
const dropitems = document.querySelectorAll(".dropitem")
const burgerMenu = document.querySelector('.burger-menu')

function activatecolor(element) {
    const dropitems = document.querySelectorAll(".dropitem")
    dropitems.forEach(item => item.classList.remove("purple"))
    element.classList.add("purple")
}

function openCurrencyDrop() {
    const burgermenu = document.querySelector(".burger-menu")
    const dropdown = document.querySelector('.money .dropdown')
    dropdown.classList.toggle('block')  
}

function openLanguageDrop() {
    const dropdown = document.querySelector('.bayraq .dropdown')
    dropdown.classList.toggle('block')
}

function openBurger() {
    burgerMenu.style.display = 'block'
}
function closeBurger() {
    burgerMenu.style.display = 'none';
}

let data = [
    [
        {
            id: 1,
            name: 'Bloq',
            price: 200

        },
        {
            id: 2,
            name: 'Responsive',
            price: 100

        },
        {
            id: 3,
            name: 'Mesajlaşma',
            price: 50

        },
        {
            id: 4,
            name: 'Qalereya',
            price: 100

        },
        {
            id: 5,
            name: 'Saytda Axtarış',
            price: 100

        },
        {
            id: 6,
            name: 'Rezervasyon',
            price: 400

        },
        {
            id: 7,
            name: 'Analitika / İzləmə',
            price: 50

        },
        {
            id: 8,
            name: 'Üzv girişi /‍‍‍ Profillər',
            price: 400

        },
        {
            id: 9,
            name: 'Forum',
            price: 400

        },
        {
            id: 10,
            name: 'Canlı Söhbət',
            price: 50

        },
        {
            id: 11,
            name: 'Əlaqə Forması',
            price: 100

        },
        {
            id: 12,
            name: 'Xəritə Məlumatı / Geolocation',
            price: 100

        },
        {
            id: 13,
            name: 'Sosial Media inteqrasiyası',
            price: 50

        },
        {
            id: 14,
            name: 'Admin Panel',
            price: 300

        },
    ],
    [
        {
            id: 21,
            name: 'Başlıqlar & Meta',
            price: 200
        },
        {
            id: 22,
            name: 'Açar söz',
            price: 300
        },
        {
            id: 23,
            name: '+20 Qabaqcıl Texnika',
            price: 300
        },
        {
            id: 24,
            name: 'Başlıq Teqləri',
            price: 100
        },
        {
            id: 25,
            name: 'Sitemap',
            price: 100
        },
    ],
    [
        {
            id: 15,
            name: 'Ödəniş',
            price: 200
        },
        {
            id: 16,
            name: 'Səbət',
            price: 500
        },
        {
            id: 17,
            name: 'Məhsullar',
            price: 300
        },
        {
            id: 18,
            name: 'Bəyəndiklərim',
            price: 300
        },
        {
            id: 19,
            name: 'Filtr',
            price: 300
        },
        {
            id: 20,
            name: 'Məhsul Haqqında',
            price: 200
        },
    ]
]
data.map(item => {
    item.map(item => {
        item.flag = true
    })
})

const elavexerc = document.querySelector("#elavexerc")
const ticaretxerc = document.querySelector("#ticaretxerc")
const axtarisxerc = document.querySelector("#axtarisxerc")
const elavecem = document.querySelector("#elavecem")
const seocem = document.querySelector("#seocem")
const ticaretcem = document.querySelector("#ticaretcem")
const umumicem = document.querySelector("#umumicem")

elavexerc.innerHTML = '0 ₼'
ticaretxerc.innerHTML = '0 ₼'
axtarisxerc.innerHTML = '0 ₼'
elavecem.innerHTML = '0 ₼'
seocem.innerHTML = '0 ₼'
ticaretcem.innerHTML = '0 ₼'
umumicem.innerHTML = '0 ₼'

function secim(z) {
    data.forEach(itemArray => {
        itemArray.forEach(item => {
            if (item.id == z) {
                if (item.flag) {
                    if (item.id >= 1 && item.id <= 14) elavexerc.innerHTML = (Number(elavexerc.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    if (item.id >= 15 && item.id <= 20) ticaretxerc.innerHTML = (Number(ticaretxerc.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    if (item.id >= 21) axtarisxerc.innerHTML = (Number(axtarisxerc.innerHTML.replace(' ₼', '')) + item.price) + ' ₼'
                    item.flag = false
                } else {
                    if (item.id >= 1 && item.id <= 14) elavexerc.innerHTML = (Number(elavexerc.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    if (item.id >= 15 && item.id <= 20) ticaretxerc.innerHTML = (Number(ticaretxerc.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    if (item.id >= 21) axtarisxerc.innerHTML = (Number(axtarisxerc.innerHTML.replace(' ₼', '')) - item.price) + ' ₼'
                    item.flag = true
                }
            }
        })
    })

    elavecem.innerHTML = elavexerc.innerHTML
    seocem.innerHTML = axtarisxerc.innerHTML
    ticaretcem.innerHTML = ticaretxerc.innerHTML

    sum()
}

const page = document.querySelector(".page")
const sehifeqiymeti = document.querySelector(".sehifeqiymeti")
const sehiferange = document.querySelector(".sehiferange")
const dizaynrange = document.querySelector(".dizaynrange")
const statikcem = document.getElementById("statikcem")
const logocem = document.getElementById("logocem")

function sehifehesab() {
    let currenValue = sehiferange.value
    page.innerHTML = currenValue       
    sehifeqiymeti.innerHTML = currenValue*100*dizaynrange.value 
    statikcem.innerHTML = sehifeqiymeti.innerHTML
    sum() 
}
const logorange = document.querySelector(".logorange")
const logodizayncem = document.getElementById("logodizayncem")
function logoDizayn() {
    logodizayncem.innerHTML = parseInt(logorange.value) * 100 -100
    logocem.innerHTML = logodizayncem.innerHTML
    sum()
}

function sum() {
    const ticaret = Number(ticaretcem.innerHTML.replace(' ₼', ''))
    const seo = Number(seocem.innerHTML.replace(' ₼', ''))
    const elave = Number(elavecem.innerHTML.replace(' ₼', ''))
    const logo = Number(logocem.innerHTML.replace(' ₼', '')) || 0 
    const statiks = Number(statikcem.innerHTML.replace(' ₼', '')) || 0 
    umumicem.innerHTML = (ticaret + seo + elave +  logo + statiks ) + ' ₼'
}

const bgBlur = document.querySelector(".bgBlur")
function openmodal(){
    bgBlur.style.display =  "grid" 
}
function closemodal(){
    bgBlur.style.display =  "none" 
}

function toggleDropdown(selectedLi) {
    document.querySelectorAll('.dropdesk').forEach(menu => {
        if (menu !== selectedLi.querySelector('.dropdesk')) {
            menu.style.display = 'none'
        }
    });
    const dropdesk = selectedLi.querySelector('.dropdesk')
    dropdesk.style.display = dropdesk.style.display === 'block' ? 'none' : 'block'
}
document.addEventListener('click', function (e) {
    if (!e.target.closest('.desktopnav')) {
        document.querySelectorAll('.dropdesk').forEach(menu => {
            menu.style.display = 'none'
        })
    }
})


function toggleDropdownmob(selectedLi) {
    document.querySelectorAll('.dropmob').forEach(menu => {
        if (menu !== selectedLi.querySelector('.dropmob')) {
            menu.style.display = 'none'
        }
    });
    const dropmob = selectedLi.querySelector('.dropmob')
    dropmob.style.display = dropmob.style.display === 'block' ? 'none' : 'block'
}
document.addEventListener('click', function (e) {
    if (!e.target.closest('.burgernav')) {
        document.querySelectorAll('.dropmob').forEach(menu => {
            menu.style.display = 'none'
        })
    }
})