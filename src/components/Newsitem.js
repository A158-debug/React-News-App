import React from 'react'

export default function Newsitem(props) {

    return (
            <div className="card">
                <span className="badge rounded-pill bg-danger"> {props.source} </span>
                <img src={props.imageURL ? props.imageURL : "https://www.investors.com/wp-content/uploads/2020/04/Stock-BigWavePipe-08-adobe.jpg"} className="card-img-top" alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">{props.title}
                    </h5>
                    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <p className="card-text">{props.description}</p>
                    <a href={props.newsURL} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
                </div>
            </div>
    )
}
