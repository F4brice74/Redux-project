
const Card = ({published_date, title, abstract, url, section, img}) => {

    return (
        <div className="card d-flex flex-row justify-content-between">
        <div className="d-flex">
          <img
            className="mr-4 rounded"
            src={img}
            alt="placeholder"
            width="170"
            height="170"
          />
          <div className="d-flex flex-column" style={{ width: "75%" }}>
            <p>
              <small>
                <strong>{published_date}</strong>
              </small>
            </p>
            <h5>
              <a href={url} target="_blank" style={{ color: "#2980b9" }}>
                {title}
              </a>
            </h5>
            <i>{abstract}</i>
          </div>
        </div>
        <p className="d-flex text-right" style={{ color: "#2980b9" }}>
          <strong>{section}</strong>
        </p>
      </div>
    )

}

export default Card