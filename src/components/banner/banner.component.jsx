import React, {useState, useEffect} from 'react';
import axios from '../../Async/axios';
import './banner.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const base_url = 'https://image.tmdb.org/t/p/original/';


const Banner = ({fetchUrl}) => {
 const [movie, setMovie] = useState([]);

 useEffect(() => {
  const fetchData = async() => {
   const request = await axios.get(fetchUrl);
    
   setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);

   return request;
  }
  
  fetchData();
 }, [fetchUrl]);
 
 // console.log(movie);
 
 function truncate(str, n) {
  return str?.length > n ? str.substring(0, n-1) + "..." : str;
 }

 return (
  <header className='banner_header' style={{backgroundImage: `url(${base_url}${movie?.backdrop_path || movie?.poster_path})`}}  >
   
   <div className='banner_contents'>
    <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
    <div className='banner_buttons'>
     <CustomButton>Play</CustomButton>
     <CustomButton>My List</CustomButton>
    </div>
    <summary className='banner_overview'>{truncate(movie?.overview, 150)}</summary>
   </div>
   
  </header>
 )
};

export default Banner;