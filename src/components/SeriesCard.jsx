
import React from 'react'

const SeriesCard = ( props ) => {

    // 1st approach - taking the 'curElem' prop out of the 2 props recvd from OTTSeries
    
    // 2nd approach - 1st + destructuring props
    let {id, name, img_url, cast, genre, rating, description, watch_url} = props.data


       return(
  
            <li key={id}>

            <h3>{name}</h3>

            <div> <img src={img_url} height="80"/>  </div>

            <div> {genre} </div>

            <span> {rating} </span>

            <h5>
            {description}
            </h5>

            <br/>

            <a href={watch_url} target='_blank'> WATCH NOW! </a>

            </li>

            )

}

export default SeriesCard