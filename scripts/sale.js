function getCardValue(cardId) {
    const priceField = document.getElementById(cardId);
    const priceFieldText = priceField.innerText;
    const value = parseFloat(priceFieldText);
    return value;

}

function setTotalPrice(totalPrice, price) {
    const totalPriceValue = document.getElementById(totalPrice);
    totalPriceValue.innerText = price;

}

// apply btn
document.getElementById('apply-cupon').addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text === 'SELL200') {
        document.getElementById('apply-btn').removeAttribute('disabled');
        // for discount
        document.getElementById('apply-btn').addEventListener('click', function () {
            const previousTotalValue = getCardValue('total-price');
            if (previousTotalValue >= 200) {
                const discount = (previousTotalValue * 0.2).toFixed(2);
                const newTotalPrice = (previousTotalValue - discount).toFixed(2);
                const setDiscount = setTotalPrice('discount', discount);
                const total = setTotalPrice('total', newTotalPrice);
                const cuponInputField = document.getElementById('apply-cupon');
                const cuponInputFieldValue = cuponInputField.value;
                cuponInputField.value = '';
            }

        })
    }
    else {
        document.getElementById('apply-btn').setAttribute('disabled', true);
    }

});

// purchase btn
function purchaseBtn() {
    const totalPrice = document.getElementById('total-price').innerText;
    if (totalPrice > 0) {
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('purchase-btn').setAttribute('disabled', true);
    }

}

// add card entry
function addCardEntry(cardType) {
    const addEntry = document.getElementById('selected-itmes');
    const count = addEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-4', 'text-xl', 'font-medium');
    p.innerHTML = `${count + 1}. ${cardType}`;
    addEntry.appendChild(p);

}

// modal go home btn
function modalBtn() {
    let price = '00.00'
    setTotalPrice('total-price', price);
    setTotalPrice('discount', price);
    setTotalPrice('total', price);
    document.getElementById('selected-itmes').innerText = '';

}


function firstCardValue() {
    const cardPrice = getCardValue('card1-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('K. Accessories');


}
function secondCardValue() {
    const cardPrice = getCardValue('card2-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('K. Accessories');



}
function thirdCardValue() {
    const cardPrice = getCardValue('card3-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Home Cooker');



}
function fourthCardValue() {
    const cardPrice = getCardValue('card4-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Sports Back Cap');


}
function fifthCardValue() {
    const cardPrice = getCardValue('card5-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Full Jersey Set');


}
function sixthCardValue() {
    const cardPrice = getCardValue('card6-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Sports cates');


}
function seventhCardValue() {
    const cardPrice = getCardValue('card7-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Single Relax Chair');


}
function eighthCardValue() {
    const cardPrice = getCardValue('card8-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Children play');


}
function ninethCardValue() {
    const cardPrice = getCardValue('card9-price');
    const previousTotalValue = getCardValue('total-price');
    const previousTotal = getCardValue('total');
    const totalCartPrice = (previousTotalValue + cardPrice).toFixed(2);
    const totalPrice = setTotalPrice('total-price', totalCartPrice);
    const total = setTotalPrice('total', totalCartPrice);
    addCardEntry('Flexible Sofa');


}

