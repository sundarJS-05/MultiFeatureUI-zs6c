
import React from 'react'

const SeriesCard = ( props ) => {

    // 1st approach - taking the 'curElem' prop out of the 2 props recvd from OTTSeries
    
    // 2nd approach - 1st + destructuring props
    let {id, name, img_url, cast, genre, rating, description, watch_url} = props.data


       return(
  
            <li key={id}  className='card'>

                <div>  <img src={img_url}  />   </div>

                <div className='flex-col flex gap-3'>

            <h3>{name}</h3>


            <div> {genre} </div>

            <span> {rating} </span>

            <h5 className='text-sm font-semilight italic px-2 mx-2'>
            {description}
            </h5>

            <br/>

            <a href={watch_url} target='_blank'> WATCH NOW! </a>

            </div>

            </li>

            )

}

export default SeriesCard