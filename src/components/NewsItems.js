import React from 'react'

const NewsItems = ({title,description,imgUrl,newsUrl}) => {
  return (
    <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
             <img src={imgUrl} alt={title}/>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItems