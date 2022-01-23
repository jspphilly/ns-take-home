import "./CryptoCard.css";
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { IconContext } from "react-icons/lib";

export const CryptoCard = ({data, id}) => {
    return (
        <div className="cr-card">
            {/* <div class="cr-card-id">
                {id}
            </div> */}
            <div>
                {/* Shamelessly pilfered from https://cryptologos.cc/ */}
                <div className="cr-img-wrapper">
                    <img className="cr-card-img" 
                        src={`https://cryptologos.cc/logos/thumbs/${data.name.toLowerCase()}.png`}
                        onError={
                            () => this.img.src = '/assets/imgs/default.png'
                        }>
                    </img>
                </div>
                <div className="cr-card-name">
                    <div className="cr-card-symbol-name">{data.symbolName}</div>
                    <div>{data.name}</div>
                </div>
            </div>
            
            <div className="cr-card-price">
                <PriceChange price={data.price} increasedPrice={data.increasedPrice}></PriceChange>
            </div>
        </div>
    );
}


const PriceChange = ({price, increasedPrice})=> {

    let style = {
        color: "inherit",
        fontWeight: "700",
        display: 'flex',
        alignItems: 'center'
    };
    if(increasedPrice != null){
        style.color = increasedPrice ? 'green' : 'red';
    }

    return (
        <>
            
            <div style={style}>
                <IconContext.Provider value={style}>
                    <Icon increasedPrice={increasedPrice}></Icon>
                </IconContext.Provider>
                ${price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
            </div>
        </>
    )

    function Icon({increasedPrice}){

        let icon = "";
        if(null !== increasedPrice){
            icon = <AiFillCaretDown></AiFillCaretDown>; 
            if(increasedPrice){
                icon = <AiFillCaretUp></AiFillCaretUp>
            }
        }

        return (
            icon
        )
    }
 }

export default CryptoCard;