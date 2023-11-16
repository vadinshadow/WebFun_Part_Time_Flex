console.log("page loaded...");

function edit() {
    var element= document.querySelector(".profile-name")
    element.innerText= prompt("new name","Jane Doe")
}


function accept(id) {
    var element = document.querySelector(id)
    element.remove()
}

function deny(id) {
    var element = document.querySelector(id)
    element.remove()
}

