import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";

const News = () => {
  const [info, setInfo] = useState([]);
  const BASE_URL = `https://newsapi.org/v2/top-headlines?country=au&apiKey=830d42bd889249a3bf03cb2bf690b5df&page=1`;

  const fetchData = async () => {
    await axios.get(BASE_URL).then((res) => {
      console.log(res.data.articles);
      setInfo(res.data.articles);
    });
  };

  useEffect(() => {
   fetchData()
  },[]);

  const handlePreiousClick =async()=>{
    console.log('previous')
    // await axios.get(BASE_URL)

  }
  const handleNextClick =()=>{
    console.log('next')
  }

  return (
    <div className="container my-3">
      <h2>NEWS-Top Headlines</h2>
      <div className="row">
        {info.map((element) => {
          return (
            <div className="col-md-4 " key={element.url}>
              <NewsItems
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-primary" onClick={handlePreiousClick}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
