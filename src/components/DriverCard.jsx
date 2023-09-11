import Rating from "./Rating";

const DriverCard = ({name, rating, img, car,}) => {
     console.log("props", name, rating, img, car) 
    return ( 
        <>
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            {/* 
            <h3>{img}</h3>*/}
            <img className="driver-card-img" src={img}  alt="img"/>
            <h3>{car.model}</h3> 
            <h3>{car.licensePlate}</h3> 
        </>
     );
}
 
export default DriverCard;