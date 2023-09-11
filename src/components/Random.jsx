const Random = ({min, max}) => {
    /* console.log("min", min, "max", max) */
    let number = Math.floor(Math.random() * (max - min) + min);
    return ( 
        <>
            <h3>Random value between {min} and {max} => {number}</h3>
        </>
     );
}
 
export default Random;