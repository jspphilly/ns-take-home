import { cyrptoHash } from "../data/cryptoList";
/**
 * More efficient way of validating whether a search string was a coin or not
 * but requires PRO version of the API
 * 
 * @deprecated
 * @param {*} coinArr 
 * @returns 
 */
export function transformAllValidCoinsToHash(coinArr){
    if(!Array.isArray(coinArr)) { throw new Error('Array Expected')}

    const retObj = {};

    coinArr.forEach(coin => {
        retObj[coin.id] = {
            name: coin.name
        }
    })

    return retObj;
}   


export function transformApiCoinToCoinObj(apiData){
    return {
        price: parseFloat(apiData.amount),
        name: cyrptoHash[apiData.base],
        symbolName: apiData.base,
        increasedPrice: null
    }
}

export function updatePriceOnAllcoins(coinList, apiData){
    return coinList.map( (coin, index) => {
        const apiCoin = apiData[index].data;
        if(apiCoin){
            if(apiCoin.base === coin.symbolName){
                let diff = coin.price - apiData[index].data.amount;
                coin.price = apiData[index].data.amount;
                coin.increasedPrice = diff < 0 ? true : false; 
            }
        }
        return coin;
    })
}



