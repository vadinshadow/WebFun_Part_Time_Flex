function hook(card){
    var button = card.querySelector(".like")
    var count = card.querySelector(".likes span")
    button.onclick = onclick
    function onclick(){
        count.innerText= +count.innerText +1
    }
}
var card1 = document.querySelector("#card-1")
hook(card1)
card1 = document.querySelector("#card-2")
hook(card1)
card1 = document.querySelector("#card-3")
hook(card1)