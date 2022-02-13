/*
// answeres total module


function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
*/


// update checkout area with shared function when + btn clicked
function checkOut(param1){
    const subTotal = document.getElementById("sub-total");
    const subTotalText = parseInt(subTotal.innerText);
    // for increase amount
    let additionOfAmount = param1 + subTotalText;
    subTotal.innerText = additionOfAmount;
    // console.log(typeof subTotalText + " and value is " + subTotalText);

    // // for decrease amount
    // let substOfAmount =  subTotalText - param1;
    // subTotal.innerText = substOfAmount;
    // console.log(substOfAmount);
}



// handle phone product number value + 1
document.getElementById("phone-plus").addEventListener("click", function (){
    const phoneNumber = document.getElementById("phone-number");
    const phoneNumberValue = parseInt(phoneNumber.value);
    phoneNumber.value = phoneNumberValue + 1;

    // get and update price
    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = parseInt(phonePrice.innerText);
    phonePrice.innerText = phonePriceText + 1219;

    // update the amount value and store it
    let updateAmount = phonePriceText + 1219;
    // console.log("type is " + typeof updateAmount + " and " + updateAmount);
    checkOut(updateAmount);
})



// handle phone product number value - 1
document.getElementById("phone-minus").addEventListener("click", function (){
    const phoneNumber = document.getElementById("phone-number");
    const phoneNumberValue = parseInt(phoneNumber.value);
    if (phoneNumberValue > 0){
      phoneNumber.value = phoneNumberValue - 1;
    }
    // console.log(phoneNumberValue);

    // get and update price
    const phonePrice = document.getElementById('phone-price');
    let phonePriceText = phonePrice.innerText;
    if (phonePriceText > 0){
      phonePrice.innerText = parseInt(phonePriceText) - 1219;
    }
    // checkOut(updateAmount);

})



// handle case product  case + 1
document.getElementById("case-plus").addEventListener("click", function (){
    
    // increasing case number value +1
    const caseNumber = document.getElementById("case-number");
    const caseNumberValue = parseInt(caseNumber.value);
    caseNumber.value =caseNumberValue + 1;
    // console.log(caseNumberValue);

    // get and update price
    const casePrice = document.getElementById('case-price');
    const casePriceText = parseInt(casePrice.innerText);
    casePrice.innerText = casePriceText + 59;
    // console.log(casePriceText);

    // update the amount value and store it
    let updateAmount = casePriceText + 59;
    // console.log("type is " + typeof updateAmount + " and " + updateAmount);
    checkOut(updateAmount);
})


// handle case product  case minus button
document.getElementById("case-minus").addEventListener("click", function (){
    const caseNumber = document.getElementById("case-number");
    const caseNumberValue = caseNumber.value;
    if (caseNumberValue > 0){
        caseNumber.value = parseInt(caseNumberValue) - 1;
      }
    // console.log(caseNumberValue);

    // get and update price
    const casePrice = document.getElementById('case-price');
    let casePriceText = casePrice.innerText;
    if (casePriceText > 0){
      casePrice.innerText = parseInt(casePriceText) - 59;
    }
})
