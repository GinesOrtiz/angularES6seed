const HomeService = ($http) => {
  'use strict';

  const getAllBeers = () => {
    return $http.get('http://devbeers.ga/beer')
      .then((res)=> {
        return res.data;
      });
  };

  return {
    getAllBeers
  };
};

HomeService.$inject = ['$http'];
export {HomeService};