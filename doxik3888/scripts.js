AOS.init();

let btn_roles_cor = document.querySelector(".btn-roles-cor")
let btn_roles_mid = document.querySelector(".btn-roles-mid")
let btn_roles_hard = document.querySelector(".btn-roles-hard")
let btn_roles_sup = document.querySelector(".btn-roles-sup")

btn_roles_cor.addEventListener("mouseover", function(){
    anime({
        targets: '.btn-roles-cor',
        scale: 1.15,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_cor.addEventListener("mouseout", function(){
    anime({
        targets: '.btn-roles-cor',
        scale: 1,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})

btn_roles_mid.addEventListener("mouseover", function(){
    anime({
        targets: '.btn-roles-mid',
        scale: 1.15,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_mid.addEventListener("mouseout", function(){
    anime({
        targets: '.btn-roles-mid',
        scale: 1,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_hard.addEventListener("mouseover", function(){
    anime({
        targets: '.btn-roles-hard',
        scale: 1.15,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_hard.addEventListener("mouseout", function(){
    anime({
        targets: '.btn-roles-hard',
        scale: 1,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_sup.addEventListener("mouseover", function(){
    anime({
        targets: '.btn-roles-sup',
        scale: 1.15,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})
btn_roles_sup.addEventListener("mouseout", function(){
    anime({
        targets: '.btn-roles-sup',
        scale: 1,
        loop: false,
        duration: 200,
        easing: 'easeInOutQuad'
      });
})


btn_roles_mid.addEventListener("click", function(){
    document.getElementById("text").textContent = "На второй позиции чаще всего находится герой, наносящий преимущественно магический урон. Примеры — Lina, Necrophos, Puck. Вторая позиция стоит на миду (центральной линии) соло, чтобы быстро получить 6 уровень, прокачать ультимейт, начать гангать (приходить на другие линии с целью помочь команде сделать килл или снести вражескую вышку) и доминировать на карте. Шестой уровень мидер получает, как правило, на 5-7 минуте. После он либо сразу, либо под активную руну идет делать ганги или фармить лес (в зависимости от того, проиграл он мид или выиграл). Руна появляется через шесть минут после начала игры и далее каждые две минуты около центральной линии."
    btn_roles_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_roles_cor.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_hard.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_sup.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
})
btn_roles_cor.addEventListener("click", function(){
    document.getElementById("text").textContent = "Герои Керри, как правило, очень слабы на ранних этапах игры, однако в хороших руках эти персонажи становятся самыми сильными на поздних этапах. Из-за того, что их способности напрямую зависят от приобретенных предметов, они как никто другой нуждаются в золоте. Обычно идут на лёгкую линию вместе с героем полной поддержки (5 позиция). В идеале герой керри должен пользоваться любой возможностью убить не только крипов, но и вражеских героев."
    btn_roles_mid.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_cor.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_roles_hard.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_sup.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
})
btn_roles_hard.addEventListener("click", function(){
    document.getElementById("text").textContent = "В большинстве случаев это герой, которого тяжело убить, например Axe, Legion Commander, Tidehunter. Третья позиция стоит на линии вместе с четвертой и старается мешать вражескому керри (первая позиция) фармить артефакты. После лайнинга третья позиция обычно занимается одним из трех действий: навязывает вражеской команде драки, в которых враги заведомо проигрывают; фармит слоты (обычно намного меньше, чем керри и мидер); делает так, чтобы враги не мешали фармить (то есть спейсят) керри из его команды. Вывод: задачи третьей позиции — впитывать урон, инициировать драки, создавать спейс своему керри."
    btn_roles_mid.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_cor.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_roles_sup.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
})
btn_roles_sup.addEventListener("click", function(){
    document.getElementById("text").textContent = "Саппорт - позиция, которая должна; обеспечивать комфортныое стоянии на линии, собирать предметы на команду; пока игрок позиции керри добывает золото на предметы помогать герою позиции мид мешать добывать золото противникам. Так же Игроки позиции сапорт должны покупать варды(предмет дающий обзор на 5 минут в определённой области карты), предлагать своим сокомандникам поучавствовать в драке за какой-нибудь объект"
    btn_roles_mid.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_cor.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_hard.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
    btn_roles_sup.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
})