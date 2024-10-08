import seriesData from '../api/seriesAPI.json'
import SeriesCard from './SeriesCard'


const OTTSeries = ()=>{

     return (
      <ul>

        { seriesData.map(  (curElem)=>{

          return (

          <SeriesCard key={curElem.id} data={curElem} />

          // there are 2 props here - key & curElem

          )

        })}

      </ul>
     )

  }

export default OTTSeries


export const Footer = ()=>{
  return `Created by Sundararajan`

}