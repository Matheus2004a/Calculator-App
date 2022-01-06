const moneyPerson = document.querySelector("#value-bill")
const numPeoples = document.querySelector("#numbers-peoples")
const percentTip = document.querySelectorAll(".section-tips-percentage button")

const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

let costTotalBill = moneyPerson.value / numPeoples.value
function calcBill() {
    if (numPeoples.value === 0 || numPeoples == null) {
        alert("O nº de pessoas tem de ser maior que 0")
    } else {
        dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
    }
}

function clearDataPerson() {
    dataPerson.forEach(element => {
        element.innerHTML = "$0.00"
    })
    moneyPerson.value = ""
    numPeoples.value = ""
    moneyPerson.focus()
}

percentTip.forEach(valuesTip => {
    valuesTip.addEventListener("click", () => {
        console.log(valuesTip.nodeValue)
        let valueTip = costTotalBill * valuesTip.value / 100
    })
})

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    calcBill()
})

const dataPerson = document.querySelectorAll(".rows-data span")