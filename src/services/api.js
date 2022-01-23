
const apiBase = {
    coinbase: "https://api.coinbase.com/v2/"
}

export function getCoinPrice(coin){
    const url = `${apiBase.coinbase}prices/${coin}-USD/spot`
    return fetch(url);
}

export function listOfValidCoins(){
    const url = `${apiBase.coinbase}currencies`;
    return fetch(url);
}

export function getUpdateOnAllCoins(coinArr){
    
    const promiseArr = [];

    coinArr.forEach((coin) => {
        promiseArr.push(getCoinPrice(coin));
    })

    return Promise.all(promiseArr);
}