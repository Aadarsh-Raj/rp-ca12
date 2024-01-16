import "./Style/card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-upper">{props.cardDetails}</div>
        <div className="card-lower">
          <div className="card-logo">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
          </div>
          <div className="card-title">
            <h2>Gladis Lennon</h2>
            <p>Head of SEO</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;