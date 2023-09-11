import { useState } from "react";

const LikeButton = () => {
    const [likes, setLikes] = useState(0)
    return ( 
    <>
        <button type="button" onClick={() => setLikes(prevLike => prevLike +1)} style={{backgroundColor: "red"}}>{likes} Likes</button>
    </> 
    );
}
 
export default LikeButton;