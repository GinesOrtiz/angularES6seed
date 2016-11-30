class homeController {
  constructor(SharedFactory) {
    this.SharedFactory = SharedFactory;
    this.getImage = SharedFactory.getImage;
    this.page = 1;
  }

  paginar() {
    this.SharedFactory.getDiscover(++this.page)
      .then((data)=> {
        data.results.forEach((movie)=>{
          this.movies.push(movie);
        });
      });
  }
}

homeController.$inject = ['SharedFactory'];

export {homeController};