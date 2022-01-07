const moneyPerson = document.querySelector("#value-bill")
const numPeoples = document.querySelector("#numbers-peoples")
const percentTip = document.querySelectorAll(".section-tips-percentage button")
const percentTipCustom = document.querySelector("#btn-custom")

const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

let messageError = document.createElement("span")

function calcBill() {
    let costTotalBill = moneyPerson.value / numPeoples.value
    if (numPeoples.value == 0) {
        messageError.innerHTML = "Can't be zero"
        document.querySelectorAll(".description")[2].appendChild(messageError)
        numPeoples.classList.add("error")
    } else {
        messageError.innerHTML = ""
        dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
        numPeoples.classList.remove("error")
    }
}

for (const key in percentTip) {
    percentTip[key].addEventListener("click", () => {
        alert("Hello")
    })
}

function clearDataPerson() {
    dataPerson.forEach(element => {
        element.innerHTML = "$0.00"
    })
    moneyPerson.value = ""
    numPeoples.value = ""
    moneyPerson.focus()
}

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    calcBill()
})

const dataPerson = document.querySelectorAll(".rows-data span")