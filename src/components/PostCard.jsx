import { Link } from "react-router-dom";

export default function PostCard({ id, title, image, author, date }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `url("${image}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          borderTopLeftRadius: "2px",
          borderTopRightRadius: "2px",
        }}
      ></div>
      <div className="card-info">
        <div className="card-title">
          <Link to={`/${id}`}>
            <p>{title}</p>
          </Link>
        </div>
        <div className="card-author-section">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
