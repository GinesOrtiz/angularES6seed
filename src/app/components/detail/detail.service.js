const DetailService = ($http) => {
  'use strict';

  const getBeer = (id) => {
    return $http.get('http://devbeers.ga/beer/' + id)
      .then((res)=> {
        return res.data;
      });
  };

  return {
    getBeer
  };
};

DetailService.$inject = ['$http'];
export {DetailService};