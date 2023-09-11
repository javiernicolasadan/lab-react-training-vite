import { useState } from "react";

//version 1
/* const ClickablePicture = ({img, imgClicked}) => {
      console.log(img, imgClicked)  
    const [image, setImage] = useState(img);
    
     let handleClick = (prevImg) => {
        if(prevImg === img) {
          setImage(imgClicked)
        } else  {
          setImage(img)
        }
     }

    return ( 
        <>
      <button style={{backgroundColor: "red"}} onClick={() => handleClick(image)}>
        <img src={image} alt="some profile"/>
      </button>
        </>
     );
}
export default ClickablePicture; */

//version 2
const ClickablePicture = ({img, imgClicked}) => {
  const [image, setImage] = useState(img);
  const handleClick = () => {
    setImage((prevImg) => {
      return prevImg === img? prevImg = imgClicked : prevImg = img
    })
  }
  return ( 
    <>
    <img src={image} alt="profile" onClick={handleClick}/>

    </>
   );
}
 
export default ClickablePicture;