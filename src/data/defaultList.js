export function getInitialListData(){
/**
 * interface ListObj {
 *      name: string,
 *      symbolName: string,
 *      price: string,
 *      increasedPrice: boolean | null,
 *      img: string,
 * }
 */
    
    return [
        {
            name: "Bitcoin",
            symbolName: 'BTC',
            price: 66369.22,
            increasedPrice: null,
        },
        {
            name: "Ethereum",
            symbolName: 'ETH',
            price: 4106.87,
            increasedPrice: null,
        }
    ]
}


export function getCoinSymbolList(){

    return [
        'BTC',
        'ETH',
        'BNB'
    ]
}