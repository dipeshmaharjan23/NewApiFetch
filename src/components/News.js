import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
// import {spinner} from 'react-loader-spinner'


const News = ({ api_Key,country,category,pageSize ,setProgress}) => {
    const [resp, setResp] = useState([]);
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const [loading,setLoading] =useState(true)

    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_Key}&page=${page}&pageSize=${pageSize}`;

    const capFirstLetter =(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1)
    }


    const fetchData = async () => {
        setLoading(true)
        setProgress(10)
        await axios.get(URL)
        .then((res) => {
                // console.log(res.data)
                setResp(res.data.articles)
                setTotalResults(res.data.totalResults)
                setProgress(100)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line 
    }, [])

    const fetchMoreData = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_Key}&page=${page+1}&pageSize=${pageSize}`;
        setPage(page + 1);
        await axios.get(URL)
            .then((res) => {
                setResp(resp.concat(res.data.articles))
                setTotalResults(res.data.totalResults)
            })

    }


    return (
        <>
            <h1 style ={{marginTop : '100px'}}>NEWS TODAY - TOP {capFirstLetter(category)} Headlines </h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={resp.length}
                // height={3}
                next={fetchMoreData}
                hasMore={resp.length !== totalResults}
                loader={<Spinner/>}
            >
                <div className='container my-4'>

                    <div className="row my-4">
                        {resp.map((res,index) => {
                            return (
                                <div className='col-sm' key={res.url}>
                                    <NewsItems imgUrl={res.urlToImage} title={res.title} url={res.url} description={res.description} author ={res.author} date={res.publishedAt} source={res.source.name}/>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}



export default News