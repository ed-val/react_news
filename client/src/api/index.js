import Helpers from './helpers';

import { BASE_API, NEWS_TOKEN, PROXY_URL } from './config';

class Api {

  async getNewsByKeyword(keyword = '', page = 1) {
    let result = null;
    try {
      const url = `${BASE_API}/v2/everything?qInTitle=${keyword}&from=${Helpers.dateToday()}&to=${Helpers.dateToday()}&sortBy=popularity&page=${page}`;
      let res = await fetch(PROXY_URL + url,
        {
          method: 'GET',
          headers: {
            Authorization: NEWS_TOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );


      if (res.statusText === 'Upgrade Required') {
        result = { error: true, errorMsg: "You've reached te max amount of headlines you can read for the demo. Update to premium to see unlimited headlines and news" }
        return result;
      }
      
      const dataString = await res.text();
      const data = JSON.parse(dataString);
      if (data.totalResults === 0) {
        result = { error: true, errorMsg: `I found no results with the keyword: "${keyword}". Try something different or check for typos in your search.` }
        return result;
      } 

      if (data.status === 'ok') {
        result = {
          news: data.articles,
          totalResults: data.totalResults,
          paginatorValues: Helpers.getPaginationValues(
            page, 
            Helpers.getNumberOfPages(data.totalResults)
          ),
          error: false,
        }
      }

      } catch (e) {
        console.log(e);
        if (e.message.match(/Network request failed/)) {
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        } else {
          // por ahora tratar todos los errores con un mensaje generico
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        }
      }

    return result;
  }

  async getNewsfeed(page = 1) {
    let result = null;
    try {
      const url = `${BASE_API}/v2/top-headlines?country=us&page=${page}`;
      let res = await fetch(PROXY_URL + url,
        {
          method: 'GET',
          headers: {
            Authorization: NEWS_TOKEN,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      
      const dataString = await res.text();
      const data = JSON.parse(dataString);
      if (data.status === 'ok') {
        result = {
          news: data.articles,
          totalResults: data.totalResults,
          paginatorValues: Helpers.getPaginationValues(
            page, 
            Helpers.getNumberOfPages(data.totalResults)
          ),
          error: false,
        }
      }
        
      } catch (e) {
        console.log(e);
        if (e.message.match(/Network request failed/)) {
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        } else {
          // por ahora tratar todos los errores con un mensaje generico
          result = { error: true, errorMsg: 'Error al conectarse con el servidor.' };
        }
      }

    return result;
  }

}

export default new Api();
