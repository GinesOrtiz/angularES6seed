const SharedFactory = ($http) => {
  'use strict';

  const API_URL = 'http://api.seriedb.com';
  const genres = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie'
  };

  const getDiscover = (page = 1) => {
    return $http
      .get(API_URL + '/discover/en/' + page + '/all.js')
      .then((res)=> {
        return res.data;
      });
  };

  const getDetail = (id) => {
    return $http
      .get(API_URL + '/movie/info/' + id + '/en/all.js')
      .then((res)=> {
        return res.data;
      });
  };

  const getGenres = (genresArray) => {
    let result = [];
    genresArray.forEach((genre)=>{
      result.push(genres[genre]);
    });

    return result;
  };

  return {
    getDiscover,
    getDetail
  };

};

SharedFactory.$inject = ['$http'];

export {SharedFactory};