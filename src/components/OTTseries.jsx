import seriesData from '../api/seriesAPI.json'


const OTTSeries = ()=>{

    // let age = 46
  
    return (

      <ul>

              {seriesData.map(  (curElem)=>{

                return(
                
              <li key={curElem.id}>

              <h3>{curElem.name}</h3>

              <div> <img src={curElem.img_url} height="80"/>  </div>

              <div> {curElem.genre} </div>

              <span> {curElem.rating} </span>

              <h5>
              {curElem.description}
              </h5>

              <br/>

              <a href={curElem.watch_url} target='_blank'> WATCH NOW! </a>

            </li>

           )
        }
        
      )}
   
    </ul>

    )
  }

export default OTTSeries


export const Footer = ()=>{
  return `Created by Sundararajan`

}