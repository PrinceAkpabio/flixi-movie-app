import React from 'react';
import Rows from "../../components/rows/rows.component";
import requests from '../../Async/requests'
import Banner from '../../components/banner/banner.component';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import './home-page.styles.scss'


const HomePage = () => {
  return (
  
  <div className='netflix-homePage'>
   <Header />
  
   <Banner fetchUrl={requests.fetchNetflixOriginals} />

   <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

   <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
   <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
   <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
   <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   <Rows title="Comedy Movies" fetchUrl={requests.fetchComdeyMovies} />
   <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
   <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

   <Footer />
  </div>
);
}

export default HomePage;