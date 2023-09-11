const IdCard = (props) => {
    /* console.log("props", props) */
    return ( 
        <>

        <div className="id-container">
            <div className="id-each-card">
            <img src={props.picture} alt="facePicture" />
                <div>
                <h4>First Name:{props.firstName}</h4>
                <h4>Last Name:{props.lastName}</h4>
                <h4>Gender:{props.gender}</h4>
                <h4>Height:{props.height}</h4>
                </div>
            </div>
  
        </div>
        </>

        
     );
}
 
export default IdCard;