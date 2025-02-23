let btn_mid = document.getElementById('btnmid')
let btn_carry = document.getElementById('btncarry')
let btn_hard = document.getElementById('btnhard')
let btn_supp = document.getElementById('btnsupp')
let hero1_btn = document.getElementById('hero1')
let hero2_btn = document.getElementById('hero2')
let hero3_btn = document.getElementById('hero3')
let heroinfo = document.getElementById('abtherotext')
let heroname = document.getElementById('heronametext')

btn_mid.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/visage.png"
    document.querySelector("#picture2").src = "/main/imgs/meepo.png"
    document.querySelector("#picture3").src = "/main/imgs/dragonknight.png"
    btn_mid.style.backgroundColor = "rgba(100, 100, 100, 1)"
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    hero1_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Visage'
        document.querySelector('#abtherotext').textContent = 'Разведывая смертоносными гаргульями поле боя, Visage покрывает себя бронёй и ищет битвы. Оказавшись рядом со схваткой, он обращает страдания тех, кто получает урон, в мощные заряды энергии и сокрушает ими врагов.'
    })
    hero2_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Meepo'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
    hero3_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'Страх сковывает любого, кто видит Dragon Knight в его ужасающем драконьем облике. Выносливый и готовый к чему угодно, он ведёт своих союзников к победе, оглушая и сжигая всех врагов на пути.n\ Сильный герой на всех 3 ролях за счет большого фарм потенциала, кол-ва брони, хп и огромного урона. Отлично играется с аспектом Fire Dragon.'
    })
})
btn_carry.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/phantomassasin.png";
    document.querySelector("#picture2").src = "/main/imgs/drowranger.png";
    document.querySelector("#picture3").src = "/main/imgs/dragonknight.png";
    btn_carry.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    hero1_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Phantom Assasin'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
    hero2_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Drow Ranger'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
    hero3_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
})
btn_hard.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/pudge.png";
    document.querySelector("#picture2").src = "/main/imgs/axe.png";
    document.querySelector("#picture3").src = "/main/imgs/dragonknight.png";
    btn_hard.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    hero1_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Pudge'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
    hero2_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Axe'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
    hero3_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
})
btn_supp.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/abaddon.png";
    document.querySelector("#picture2").src = "/main/imgs/lich.png";
    document.querySelector("#picture3").src = "/main/imgs/witchdoctor.png";
    btn_supp.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    hero1_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Abaddon'
        document.querySelector('#abtherotext').textContent = 'qwee'
    })
    hero2_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Lich'
        document.querySelector('#abtherotext').textContent = 'qweee'
    })
    hero3_btn.addEventListener("click", function(){
        document.querySelector('#heronametext').textContent  = 'Witch Doctor'
        document.querySelector('#abtherotext').textContent = 'qwe'
    })
})
