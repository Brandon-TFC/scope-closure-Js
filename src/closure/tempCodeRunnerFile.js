function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log('MoneyBox: $', saveCoins)
    }
    return countCoins;
}

function moneyBoxAna(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log('MoneyBox: $', saveCoins)
    }
    return countCoins;
}

const myMoneyBox = moneyBox()
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);


const moneyBoxAna = moneyBoxAna();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);