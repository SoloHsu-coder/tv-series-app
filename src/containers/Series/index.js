import {useState} from 'react';
import SeriesList from '../../components/SeriesList/index';
import Loader from '../../components/Loader';
const Series =()=>{
    const [series,setSeries]=useState("");
    const [seriesName,setName]= useState("");
    const [isFetch ,setFetch] = useState(false);
   
const onSeriesInputChange = e => {
  setName(e.target.value);
  console.log(setFetch(true))
  
  fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)    //api request dynamic ဖြစ်အောင် ``ထဲထည့် 
    .then(response =>response.json())// response ကို json ပြောင်း
    .then(json => {setSeries(json),setFetch(false)}); 
  //console.log(e)
  //console.log(e.target.value)
  
} 

    return (
    <div>
        <div>
          <input 
          value = {seriesName}
          type = "text" 
          onChange = {onSeriesInputChange}/>
        </div>
        {
          !isFetch && series.length === 0 && seriesName.trim() === '' &&
          <p>Please enter series name into box</p>
        }
        {
          !isFetch && series.length === 0 && seriesName.trim() !== '' &&
          <p>No TV series have been found ...</p>
        }
        
         { isFetch &&  
            <p>Loading .... </p>
         }
        { !isFetch && <SeriesList list ={series}/>}
      </div>
    );
}

export default Series;





/* useEffect(() => {
     fetch('https://api.tvmaze.com/search/shows?q=Vikings')    //api request
    .then(response =>response.json())                           // response ကို json ပြောင်း
    .then(json => setSeries(json)) 
                           // result ကို series assign လုပ်
},[]
) //componentDidMount အစား useEffect/ after 2sec component re-render */
    