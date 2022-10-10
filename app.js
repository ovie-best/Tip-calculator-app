'use strict';

const bill_input = document.querySelector('#bill_amount');
const tip_percentage_btn = document.querySelector('.tip_select_percent');
const tip_percentage_btns_values = document.querySelectorAll('.tip_select_percent');
const custom_tip_percentage_input = document.querySelector('#custom_tip');
const people_number_input = document.querySelector('#people_number');
const tip_amount_result = document.querySelector('.tip_amount_result');
const total_amount_result = document.querySelector('.total_amount_result');
const reset_button = document.querySelector('input[type="reset"]');
const error_msg = document.querySelector('.error_msg');


////////////////////// RESET FUNCTION ////////////////////////////
reset_button.addEventListener('click', function() {
    tip_amount_result.innerHTML = '$0.00';
    total_amount_result.innerHTML = '$0.00';
    reset_button.classList.add('reset_button_color');
    reset_button.classList.remove('normal_color');
});

const resetButtonColor = () => {
    reset_button.classList.add('normal_color');
    reset_button.classList.remove('reset_button_color');
}

bill_input.addEventListener('input', resetButtonColor);
custom_tip_percentage_input.addEventListener('input', resetButtonColor);
people_number_input.addEventListener('input', resetButtonColor);

////////////////////// ERROR FUNCTION ////////////////////////////
people_number_input.addEventListener('input', () => {
    if(people_number_input.value <= 0) {
        people_number.classList.add('error');
        error_msg.classList.remove('hide');
    } else {
        people_number.classList.remove('error');
        error_msg.classList.add('hide');
    }
});

////////////////////// CALCULATE TIP FUNCTION ////////////////////////////
bill_input.value = "0.0";
people_number_input.value = "1";

let billValue = 0.0;
let peopleNumberValue = 1;
let tipPercentageValue = 0.15;

function billInput() {
    billValue = parseFloat(bill_input.value);
    calculateTip();
}

function peopleNumberInput() {
    peopleNumberValue = parseFloat(people_number_input.value);
    calculateTip();
}

function customInput() {
    tipPercentageValue = parseFloat(custom_tip_percentage_input.value/100);
    calculateTip();
}

function handleClick(event) {
    tip_percentage_btns_values.forEach(function (btn) {
        btn.classList.remove('active');
        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('active');
            // covert the NAN value of buttons due to the '%' on it to real number values.
            let tipPercentageRawValue = btn.innerHTML;
            let tipPercentageConvertedValue = tipPercentageRawValue.replace('%', '');
            tipPercentageValue = parseFloat(tipPercentageConvertedValue / 100);
        }
    })
    calculateTip();
}

function calculateTip() {
    // this function should work only when the billValue and peopleNumberValue are positive 
    if(peopleNumberValue >= 1 && billValue >= 1) {
        let tip_amount =  (tipPercentageValue * billValue ) / peopleNumberValue;
        let total_tip_amount = (billValue / peopleNumberValue) + tip_amount;
        tip_amount_result.innerHTML = '$' + tip_amount.toFixed(2);
        total_amount_result.innerHTML = '$' + total_tip_amount.toFixed(2);
    }
}

////// attach event Listeners and functions to the interactive elements //////
bill_input.addEventListener('input', billInput);
people_number_input.addEventListener('input', peopleNumberInput);
custom_tip_percentage_input.addEventListener('input', customInput);
tip_percentage_btns_values.forEach(function (btn) {
    btn.addEventListener('click', handleClick);
});