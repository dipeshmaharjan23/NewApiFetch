import React from 'react'

const NewsItems = ({ imgUrl, title, description, url, author, date, source }) => {
    return (
        <>
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0"
                    }}>
                        <span class="badge bg-danger">{source}</span>
                    </div>
                    <img className="card-img-top" src={!imgUrl ? "https://cdn.cnn.com/cnnnext/dam/assets/220630044413-11-xi-jinping-in-hong-kong-restricted-super-tease.jpg" : imgUrl} alt={title} />
                    <div className="card-body">
                        <h5 className="card-title ">{title}</h5>
                        <p className="card-text ">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">READ MORE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItems