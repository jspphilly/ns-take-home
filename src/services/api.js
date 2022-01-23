
const apiBase = {
    coinbase: "https://api.coinbase.com/v2/"
}

/**
 * Simple call to API for current price on coin
 * @param {String} coin 
 * @returns promise
 */
export function getCoinPrice(coin){
    if(typeof coin != "string") { throw new Error('expects string') };

    const url = `${apiBase.coinbase}prices/${coin}-USD/buy`
    return fetch(url);
}

/**
 * Not useful at the moment, only returns FIAT
 * 
 * NOTE: could be useful with pro version
 * @deprecated
 * @returns promise
 */
export function listOfValidCoins(){
    const url = `${apiBase.coinbase}currencies`;
    return fetch(url);
}

/**
 * 
 * @param {*} coinArr 
 * @returns promise
 */
export async function getUpdateOnAllCoins(coinArr){
    if(!Array.isArray(coinArr)) { throw new Error('expects array') };
    try {
        const coinInfoArr = await Promise.all(
            coinArr.map((coin) => {
                return getCoinPrice(coin.symbolName)
                .then(r => r.json())
                .catch(error => ({error, coin}))
            })
        );
        return coinInfoArr.map(updatedCoinObj => {
            return updatedCoinObj.data;
        });
    } catch(error){
        throw new Error('something bad happened')
    }
}