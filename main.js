const moneyPerson = document.querySelector("#value-bill")
const numPeoples = document.querySelector("#numbers-peoples")
const percentTip = document.querySelectorAll(".container-tips-percentage button")
const percentTipCustom = document.querySelector("#btn-custom")
const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
    calcBill()
})

let messageError = document.createElement("span")

function calcBill() {
    let costTotalBill = moneyPerson.value / numPeoples.value
    if (numPeoples.value <= 0) {
        messageError.innerHTML = "Can't be zero or less"
        document.querySelectorAll("legend")[2].appendChild(messageError)
        numPeoples.classList.add("error")
    } else {
        messageError.innerHTML = ""
        dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
        numPeoples.classList.remove("error")
        calcTip()
    }

    function calcTip() {
        percentTip.forEach(valueTip => {
            valueTip.addEventListener("click", () => {
                let resultTip = costTotalBill * valueTip.value / 100
                costTotalBill += resultTip
                dataPerson[0].innerHTML = `$${resultTip.toFixed(2)}`
                dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
            })
        })
    }
}

function checkNumberTipCustom(valueCustom) {
    let ruleValue = /^[0-9]+$/
    let messageError = document.createElement("p")

    if (valueCustom.match(ruleValue)) {
        messageError.innerHTML = ""
    } else {
        messageError.innerHTML = "Type only positive integer number!"
        messageError.classList.add("error")
        document.querySelector(".container-tips-percentage").appendChild(messageError)
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

const dataPerson = document.querySelectorAll(".rows-data span")