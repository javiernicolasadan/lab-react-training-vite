import starEmpty from "/src/assets/images/emptyStar.webp"
import starFilled from "/src/assets/images/filledStar.png"

const Rating = (props) => {
    
    let starsArr = [];
  let solidNumber = Math.round(props.children);
  let solidStarImg = <img className="stars" src={starFilled} alt="stars" />;
  let emptyStarImg = <img className="stars" src={starEmpty} alt="stars" />;

  for (let i = 0; i < 5; i++) {
    if (solidNumber > 0) {
      starsArr.push(solidStarImg);
      solidNumber--; 
    } else {
      starsArr.push(emptyStarImg);
    }
  }
  return (
    <div>
      <div>
        <div className="stars-div">
          {starsArr.map((elem, i) => (
            <section key={i}>{elem}</section>
          ))}
        </div>
      </div>
    </div>
  );
}

 
export default Rating;