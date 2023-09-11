import data from "/src/data/berlin.json"

const FaceBook = () => {
    console.log(data)
  
    return ( 
        <>
            <div >
                <div >
                    {data.map((eachOne, i) => (
                        <div key={i} className="id-each-card">
                            <img src={eachOne.img} alt="eachImage"/>
                            <h4>First name:{eachOne.firstName} </h4>
                            <h4>Last name:{eachOne.firstName} </h4>
                            <h4>Country:{eachOne.country} </h4>
                            {eachOne.isStudent? <h4>Type: Student</h4> : <h4> Type: Teacher</h4>}
                        </div>
                    ))}
               </div>
            </div>
        </>
     );
}
 
export default FaceBook;