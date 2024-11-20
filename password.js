let pass = document.getElementById("pass")

let show = document.getElementById("show")

let btn = document.getElementById("sub")

btn.addEventListener("click", showPassword)


let actulPass = 1234

function showPassword () {

    let promise = new Promise((res, rej)=> {

        if(actulPass == pass.value) {
            res("success")
        }
        else {
            rej("failed login")
        }
    })

    promise.then((res)=> {

        show.innerText = "Success Login"
    })
    .catch((rej)=> {

        show.innerText = "failed login"
    })
}

