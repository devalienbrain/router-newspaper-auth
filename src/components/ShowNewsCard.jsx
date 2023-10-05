const ShowNewsCard = ({ aNews }) => {
  const { title, image_url, details } = aNews;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
      <figure>
        <img src={image_url} alt="News image" />
      </figure>
      <div className="card-body">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ShowNewsCard;
