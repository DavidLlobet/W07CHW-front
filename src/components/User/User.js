const User = ({ name, age, bio, image }) => {
  return (
    <article className="card shadow-sm">
      <h2 className="fw-light text-center display-5">{name}</h2>
      <img
        src={image}
        alt="user"
        width="300"
        height="300"
        className="bd-placeholder-img card-img-top"
      ></img>
      <p>Edad: {age}</p>
      <p>Biografía: {bio}</p>
      <button className="button">UPDATE</button>
      <button className="button">DELETE</button>
    </article>
  );
};

export default User;
