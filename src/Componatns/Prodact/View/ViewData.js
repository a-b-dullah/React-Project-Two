import { Link } from "react-router-dom";

export default function ViewData(props) {
  let { state } = props;
  return (
    <div>
      <div className="card p-3 text-center ">
        <img
          style={{ width: "300px",margin:"auto" }}
          src={state.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{state.title}</h5>
          <p className="card-text">{state.description}</p>
          <Link href="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}
