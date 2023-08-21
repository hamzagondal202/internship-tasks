const ShowRecipe = ({ recipee, onClose }) => {
  const { name, recipe, pic, categ, video } = recipee;
  return (
    <>
      <div className="overlay">
        <div className="header-recep">
          <h3>{name}</h3>
          <div className="categ">
            <span id="categ">{categ}</span>
          </div>
          <h3>Instructions:</h3>
        </div>
        <button className="close-button fa fa-close" onClick={onClose}></button>
        <div className="recipe-cont">{recipe}</div>
        <div className="small-icon">
          <img src={pic} alt="" id="image" />
        </div>
        <div className="vidlink">
          <a id="vidlink" href={video}>
            Watch Video
          </a>
        </div>
      </div>
    </>
  );
};

export default ShowRecipe;
