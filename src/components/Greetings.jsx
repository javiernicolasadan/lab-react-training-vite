const Greetings = ({lang, children}) => {
    /* console.log("props", lang, children) */
    let greetings = ""
    if (lang === "de") {
         greetings = "Hallo"
    } else {
         greetings = "Bonjour"
    }

    return ( 
        <>
            <div className="greetings-container">
                <p>{greetings} {children} </p>
            </div>
        </>
     );
}
 
export default Greetings;