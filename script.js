let billEl = document.getElementById('bill');
let peopleEl = document.getElementById('people');
let tipPercentEl = document.querySelectorAll('.tip-percent');
let tipEl = document.getElementById('tip');
let totalEl = document.getElementById('total');
let tipInputEl = document.getElementById('tip-input');
const resetBtn = document.getElementById('reset');

let billElValue = 0;
let tipPercentElValue = 0;
let peopleElValue = 1;
let tip = 0;

billEl.addEventListener('input', () => {
    billElValue = billEl.value;
    totalEl.innerHTML = billElValue/peopleElValue;
    console.log('bill', billElValue)
})


peopleEl.addEventListener('input', () => {
    peopleElValue = peopleEl.value;
    console.log('people', peopleElValue)
})


function calculateTip() {
    console.log('billElValue', billElValue)
    console.log('tipPercentElValue', tipPercentElValue)
    console.log('peopleElValue', peopleElValue)
    tip = (billElValue * tipPercentElValue) / peopleElValue;
    tipEl.innerHTML = tip;
    console.log('tip', tip)
    addTip();
}

function addTip() {
    totalEl.innerHTML = Number(billElValue) + Number(tip);
}

tipPercentEl.forEach(button => {
    button.addEventListener('click', () => {
        tipPercentElValue = button.value;
        calculateTip();
    })
});

tipInputEl.addEventListener('input', () => {
    tipPercentElValue = tipInputEl.value / 100;
    console.log('tip input', tipPercentElValue);
    calculateTip();
})

resetBtn.addEventListener('click', () => {
    billElValue = 0;
    tipPercentElValue = 0;
    peopleElValue = 1;
    tip = 0;
    billEl.value = '';
    peopleEl.value = '';
    calculateTip();
})

