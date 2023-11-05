function liked(likes) {
    alert('Ninja was liked')
    var num=+likes.innerText.split(" ")[0]
    num++
    likes.innerText=""+num+" likes"
}

function login(logout) {
    if(logout.innerText=="Login"){
        logout.innerText="Logout"
    }
    else {
        logout.innerText="Login"
    }
}

function definition(remove) {
    remove.remove();
}