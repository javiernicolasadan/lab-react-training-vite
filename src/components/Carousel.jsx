import { useState } from "react";

const Carousel = ({images}) => {
     
    const [index, setIndex] = useState(1);
    const handleLeft = () => {
        index > 0?  setIndex(index - 1): setIndex(0)
    }
    const handleRight = () => {
        index < 3?  setIndex(index + 1): setIndex(3)
    }
    
    return ( 
        <>
           <button type="button" onClick={handleLeft}>Left</button>
           <img src={images[index]} alt="something"/>
           <button type="button" onClick={handleRight}>Right</button>
        </>
     );
}
 
export default Carousel;