let btn_mid = document.querySelector('.btn-mid')
let btn_carry = document.querySelector('.btn-carry')
let btn_hard = document.querySelector('.btn-hard')
let btn_supp = document.querySelector('.btn-supp')
let btn_hard_supp = document.querySelector('.btn-hard_supp')


btn_mid.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/lycan.png"
    document.querySelector("#picture2").src = "/main/imgs/invoker.png"
    document.querySelector("#picture3").src = "/main/imgs/lina.png"
    btn_mid.style.backgroundColor = "rgba(100, 100, 100, 1)"
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    btn_hard_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
})
btn_carry.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/invoker.png";
    document.querySelector("#picture2").src = "/main/imgs/lina.png";
    document.querySelector("#picture3").src = "/main/imgs/lycan.png";
    btn_carry.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
})
btn_hard.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/invoker.png";
    document.querySelector("#picture2").src = "/main/imgs/lina.png";
    document.querySelector("#picture3").src = "/main/imgs/lycan.png";
    btn_hard.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
})
btn_supp.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/invoker.png";
    document.querySelector("#picture2").src = "/main/imgs/lina.png";
    document.querySelector("#picture3").src = "/main/imgs/lycan.png";
    btn_supp.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
})
btn_hard_supp.addEventListener("click", function(){
    document.querySelector("#picture1").src = "/main/imgs/invoker.png";
    document.querySelector("#picture2").src = "/main/imgs/lina.png";
    document.querySelector("#picture3").src = "/main/imgs/lycan.png";
    btn_hard_supp.style.backgroundColor = "rgba(100, 100, 100, 1)";
    btn_carry.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_hard.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_supp.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    btn_mid.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
})