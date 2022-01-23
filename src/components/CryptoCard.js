import "./CryptoCard.css";


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
                ${data.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
            </div>
        </div>
    );
}

export default CryptoCard;