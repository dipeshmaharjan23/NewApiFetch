import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const News = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=830d42bd889249a3bf03cb2bf690b5df"
      )
      .then((result) => {
        const response = result.data;
        setData(response);
      });
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-3">
      <h2>NEWS-Top Headlines</h2>
      <div className="row">
        {data.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
