import star from '../../assets/star.png';

class detailController {
  constructor(SharedFactory, $localStorage) {
    this.$localStorage = $localStorage;
    this.canLoadMore = true;
    this.movieLimit = 4;
    this.getImage = SharedFactory.getImage;
    this.average = Math.round(this.movie.vote_average * 5 / 10);
    this.star = star;
    this.status = $localStorage[this.movie.id];
  }

  loadMore() {
    this.movieLimit = this.movieLimit + 4;
    this.canLoadMore = this.movieLimit === this.similar.length;
  }

  markAs(status) {
    switch (status) {
      case 0:
        this.$localStorage[this.movie.id] = 'info';
        this.status = 'info';
        break;
      case 1:
        this.$localStorage[this.movie.id] = 'warning';
        this.status = 'warning';
        break;
      case 2:
        delete this.$localStorage[this.movie.id];
        delete this.status;
        break;
    }
  }
}

detailController.$inject = [
  'SharedFactory',
  '$localStorage'
];

export {detailController};