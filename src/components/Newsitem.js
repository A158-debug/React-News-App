import React from 'react'

export default function Newsitem(props) {
    // let {title,imageURL,author,newsURL,description} = props;
    return (
            <div className="card">
                <span className="badge rounded-pill bg-danger"> {props.source} </span>
                <img src={props.imageURL ? props.imageURL : "https://www.investors.com/wp-content/uploads/2020/04/Stock-BigWavePipe-08-adobe.jpg"} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}
                    </h5>
                    <p className="card-text"><small class="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <p class="card-text">{props.description}</p>
                    <a href={props.newsURL} target="_blank" class="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
                </div>
            </div>
    )
}
