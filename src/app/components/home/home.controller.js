class homeController {
  constructor(SharedFactory) {
    SharedFactory.getDiscover()
      .then((mv)=> {
        this.movies = mv.results;
      });
  }

  getImage(type, path) {
    let size = type === 'backdrop' ? 'w600' : 'w300';
    return 'https://image.tmdb.org/t/p/' + size + path;
  }
}

homeController.$inject = ['SharedFactory'];

export {homeController};