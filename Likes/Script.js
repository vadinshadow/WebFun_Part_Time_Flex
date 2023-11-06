var card1 = document.querySelector("#card-1")
function hook(card){
    var button = card.querySelector(".like")
    var count = card.querySelector(".likes span")
    button.onclick = onclick
    function onclick(){
        count.innerText= +count.innerText +1
    }
}
hook(card1)