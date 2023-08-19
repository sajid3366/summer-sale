function getCardValue(cardId){
    const priceField = document.getElementById(cardId);
    const priceFieldText = priceField.innerText;
    const value = parseFloat(priceFieldText);
    return value;

}

function setTotalPrice(totalPrice, price){
    const totalPriceValue = document.getElementById(totalPrice);
    totalPriceValue.innerText = price;

}



function cardValue(){
    const card_1_price = getCardValue('card1-price');
    console.log(card_1_price);
    const previousTotalValue = getCardValue('total-price');
    console.log(previousTotalValue);
    const previousTotal = getCardValue('total');
    const totalCart1Price = (previousTotalValue + card_1_price).toFixed(2);

     
    const totalPrice = setTotalPrice('total-price', totalCart1Price);
    const total = setTotalPrice('total', totalCart1Price);

    
}

