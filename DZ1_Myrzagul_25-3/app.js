// //1
const gmailInput = document.querySelector("#gmailInput")
const gmailCheck = document.querySelector("#gmailCheck")
const gmailResult = document.querySelector(".gmailResult")
const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'good'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'not good'
        gmailResult.style.color = 'red'
    }
}
//2

let counter = 0
const mini = document.querySelector(".mini_block")
const recursive =()=>{
    if(counter<=450) {
        setTimeout(() => {
            mini.style.left = `${counter}px`
            counter += 1
            recursive()
        }, 1)
    }

}
recursive()
