import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem';
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles, setArticls] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f49d2db348554c5cb9203b65aa552662&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticls(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f49d2db348554c5cb9203b65aa552662&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticls(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    return (
        <>
            <h2 className="text-center heading " style={{ fontFamily: 'Times New Roman' }}><i className="fas fa-info"></i>-Top Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults} //aur data fetch kre ya aage ya nhi
                loading={<Spinner />}>
                <div className="container">
                    <div className="row my-3">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}

News.defaultProps = {
    country: "in",
    category: "general"
}