let me = document.getElementById("to-me")
me.addEventListener("click", () => {
    location.href = "../doxik3888/index.html"
})


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
    document.querySelector("#picture1").src = "./imgs/visage.png"
    document.querySelector("#picture2").src = "./imgs/meepo.png"
    document.querySelector("#picture3").src = "./imgs/dragonknight.png"
    document.querySelector('#heronametext').textContent  = 'Герой'
    document.querySelector('#abtherotext').textContent = 'Выберите героя'
    btn_mid.style.backgroundColor = "rgba(100, 100, 100, 1)"
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    hero1_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Visage'
        document.querySelector('#abtherotext').textContent = 'Разведывая смертоносными гаргульями поле боя, Visage покрывает себя бронёй и ищет битвы. Оказавшись рядом со схваткой, он обращает страдания тех, кто получает урон, в мощные заряды энергии и сокрушает ими врагов.'
    })
    hero2_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Meepo'
        document.querySelector('#abtherotext').textContent = 'Призвав до пяти своих полноценных копий, Meepo способен сражаться на всех фронтах одновременно. Он распределяет своих клонов по полю боя и, заметив врага, приковывает его к земле, со взрывом телепортирует к себе остальные копии и добивает истощённую жертву.'
    })
    hero3_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'Страх сковывает любого, кто видит Dragon Knight в его ужасающем драконьем облике. Выносливый и готовый к чему угодно, он ведёт своих союзников к победе, оглушая и сжигая всех врагов на пути.'
    })
})
btn_carry.addEventListener("click", function(){
    document.querySelector("#picture1").src = "./imgs/phantomassasin.png";
    document.querySelector("#picture2").src = "./imgs/drowranger.png";
    document.querySelector("#picture3").src = "./imgs/dragonknight.png";
    document.querySelector('#heronametext').textContent  = 'Герой'
    document.querySelector('#abtherotext').textContent = 'Выберите героя'
    btn_carry.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    hero1_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Phantom Assasin'
        document.querySelector('#abtherotext').textContent = 'Phantom Assassin идёт в наступление, едва завидев свою жертву. Мгновенно сблизившись с ней, Мортред легко уклоняется от атак и обрушивает на врага удар за ударом, любой из которых может оказаться роковым.'
    })
    hero2_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Drow Ranger'
        document.querySelector('#abtherotext').textContent = 'Немногим удаётся спастись от Drow Ranger. Обезмолвив врагов морозной волной, она накрывает их градом замедляющих ледяных стрел, после которого мало кто способен выжить.'
    })
    hero3_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'Страх сковывает любого, кто видит Dragon Knight в его ужасающем драконьем облике. Выносливый и готовый к чему угодно, он ведёт своих союзников к победе, оглушая и сжигая всех врагов на пути.'
    })
})
btn_hard.addEventListener("click", function(){
    document.querySelector("#picture1").src = "./imgs/pudge.png";
    document.querySelector("#picture2").src = "./imgs/axe.png";
    document.querySelector("#picture3").src = "./imgs/dragonknight.png";
    document.querySelector('#heronametext').textContent  = 'Герой'
    document.querySelector('#abtherotext').textContent = 'Выберите героя'
    btn_hard.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    hero1_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Pudge'
        document.querySelector('#abtherotext').textContent = 'Каждый точный бросок знаменитого крюка вселяет страх во врагов Pudge, ведь, притянув жертву, он расчленяет её своим тесаком. С каждым убийством его здоровье и урон увеличиваются, и вскоре погибель от его рук становится неизбежной.s'
    })
    hero2_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Axe'
        document.querySelector('#abtherotext').textContent = 'Axe рубит одного врага за другим, неизменно ступая впереди своей команды. Он вынуждает противников вступить в бой, а затем отвечает на их удары смертоносными взмахами топора. Нещадно круша ослабленных врагов, он всегда несётся вперёд.'
    })
    hero3_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        document.querySelector('#heronametext').textContent  = 'Dragon Knight'
        document.querySelector('#abtherotext').textContent = 'Страх сковывает любого, кто видит Dragon Knight в его ужасающем драконьем облике. Выносливый и готовый к чему угодно, он ведёт своих союзников к победе, оглушая и сжигая всех врагов на пути.'
    })
})
btn_supp.addEventListener("click", function(){
    document.querySelector("#picture1").src = "./imgs/abaddon.png";
    document.querySelector("#picture2").src = "./imgs/lich.png";
    document.querySelector("#picture3").src = "./imgs/witchdoctor.png";
    document.querySelector('#heronametext').textContent  = 'Герой'
    document.querySelector('#abtherotext').textContent = 'Выберите героя'
    btn_supp.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    hero1_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Abaddon'
        document.querySelector('#abtherotext').textContent = 'Род Аверно питает купель — разлом в земной тверди, который испускает загадочную энергию на протяжении поколений. Каждого новорождённого семьи окунают в этот тёмный туман, даруя тем самым связь с их землёй и её загадочной силой. Дети растут с непреклонной верой в защиту семейных ценностей и традиций земли, но на самом деле они охраняют саму купель, истинные намерения которой неизвестны.'
    })
    hero2_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        document.querySelector('#heronametext').textContent  = 'Lich'
        document.querySelector('#abtherotext').textContent = 'Паря над полем битвы, Lich подпитывает свои силы союзными крипами и помогает союзникам своим замедляющим холодом. Если противники по глупости сбились в кучу, то он расправится сразу со всеми своим отскакивающим ультом.'
    })
    hero3_btn.addEventListener("click", function(){
        hero1_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero2_btn.style.backgroundColor = "rgba(100, 100, 100, .5)";
        hero3_btn.style.backgroundColor = "rgba(100, 100, 100, 1)";
        document.querySelector('#heronametext').textContent  = 'Witch Doctor'
        document.querySelector('#abtherotext').textContent = 'Witch Doctor идеально дополняет любую команду. Мало кто сравнится с ним по универсальности: он может постепенно излечивать товарищей, оглушать и насмерть проклинать врагов, а также уничтожать их своим мощным ультом.'
    })
})
