const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor,color}) => {
    return ( 
        <div className="all-credit-cards">
        <div className="credit-card" style={{backgroundColor: `${bgColor}`}}>
            <div>
            <p>{type}</p>
            </div>

            <div>
            <p>{number}</p>
            </div>

            <div>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            </div>
 
        </div>
        </div>
     );
}
 
export default CreditCard;