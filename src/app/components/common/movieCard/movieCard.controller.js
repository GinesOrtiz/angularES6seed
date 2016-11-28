class movieCardController {
  constructor(SharedFactory) {
    this.getImage = SharedFactory.getImage;
  }
}

movieCardController.$inject = ['SharedFactory'];

export {movieCardController};