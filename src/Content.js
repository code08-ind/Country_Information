const Content = (props) => {
    return (
        <div className="container">
            <div className="info">
                <div className="image">
                    <img src={props.imgsrc} alt="My Pic" />
                </div>
                <div className="cardInfo">
                    <h2>{props.name}</h2>
                    <h5>Population - {props.population}</h5>
                    <a href={props.link} target="_blank" rel="noreferrer">
                        <button >See More</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Content;