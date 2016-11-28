class detailController {
  constructor(SharedFactory) {
    this.movieLimit = 4;
    this.getImage = SharedFactory.getImage;
  }
}

detailController.$inject = ['SharedFactory'];

export {detailController};