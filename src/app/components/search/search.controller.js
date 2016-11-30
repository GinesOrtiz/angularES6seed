class searchComponent {
  constructor(SharedFactory, $stateParams) {
    this.SharedFactory = SharedFactory;
    this.$stateParams = $stateParams;
    this.getImage = SharedFactory.getImage;
    this.page = $stateParams.page || 1;
  }

  paginar() {
    this.SharedFactory.searchMovies(this.$stateParams.q, ++this.page)
      .then((data)=> {
        data.results.forEach((movie)=> {
          this.movies.push(movie);
        });
      });
  }
}

searchComponent.$inject = [
  'SharedFactory',
  '$stateParams'
];

export {searchComponent};