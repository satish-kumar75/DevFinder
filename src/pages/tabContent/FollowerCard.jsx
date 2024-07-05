/* eslint-disable react/prop-types */
const FollowerCard = ({ imgSrc, username }) => {
  return (
    <article className="card follower-card">
      <figure className="avatar-circle img-holder">
        <img
          className="img-cover"
          src={imgSrc}
          width={56}
          height={56}
          loading="lazy"
          alt={username}
        />
      </figure>
      <h3 className="card-title">{username}</h3>
      <button className="icon-btn" aria-label={`Go to ${username} profile`}>
        <span className="material-symbols-rounded" aria-hidden="true">
          link
        </span>
      </button>
    </article>
  );
};

export default FollowerCard;
