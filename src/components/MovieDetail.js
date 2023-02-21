function MovieDetail({ title, cover, rating, genres, des, lan, runtime }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={cover} />
      <p>Rating:{rating}</p>
      <p>
        Genres :{" "}
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </p>
      <p>description : {des}</p>
      <p>language : {lan}</p>
      <p>Running time : {runtime} mins</p>
    </div>
  );
}

export default MovieDetail;
