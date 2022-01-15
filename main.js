const moneyPerson = document.querySelector("#value-bill")
const numPeoples = document.querySelector("#numbers-peoples")
const buttonsPercentTip = document.querySelectorAll(".container-tips-percentage button")
const percentTipCustom = document.querySelector("#btn-custom")
const resetValues = document.querySelector(".btn-reset-data-person")
resetValues.addEventListener("click", clearDataPerson)

resetValues.disabled = true
resetValues.classList.add("disabled")

numPeoples.addEventListener("keyup", () => {
    calculateBill()
})

let costTotalBill = 0
let resultTip = 0

buttonsPercentTip.forEach(valueTip => {
    valueTip.addEventListener("click", () => {
        valueTip.classList.add("check-tip")
        resultTip = +moneyPerson.value * +valueTip.value / 100
    })
})

let messageError = document.createElement("span")

function calculateBill() {
    if (numPeoples.value <= 0) {
        messageError.innerHTML = "Can't be zero or less"
        document.querySelectorAll("legend")[2].appendChild(messageError)
        numPeoples.classList.add("error")
    }
    else if (percentTipCustom.value != "") {
        resultTip = moneyPerson.value * percentTipCustom.value / 100
        checkNumberTipCustom(percentTipCustom.value)
        showCalculateBill()
    } else {
        showCalculateBill()
        enabledButtonReset()
    }
}

function showCalculateBill() {
    resultTip /= numPeoples.value
    costTotalBill = +moneyPerson.value / +numPeoples.value
    costTotalBill += resultTip
    dataPerson[0].innerHTML = `$${resultTip.toFixed(2)}`
    dataPerson[1].innerHTML = `$${costTotalBill.toFixed(2)}`
    numPeoples.classList.remove("error")
    messageError.innerHTML = ""
    enabledButtonReset()
}

function enabledButtonReset() {
    resetValues.classList.remove("disabled")
    resetValues.disabled = false
}

function checkNumberTipCustom(valueTipCustom) {
    let ruleValue = /^[0-9]+$/
    let messageError = document.createElement("p")

    if (valueTipCustom.match(ruleValue)) {
        messageError.innerHTML = ""
    } else {
        messageError.innerHTML = "Type only positive integer number!"
        messageError.classList.add("error")
        document.querySelector(".container-tips-percentage").appendChild(messageError)
    }
}

function clearDataPerson() {
    document.location.reload()
}

const dataPerson = document.querySelectorAll(".rows-data span")