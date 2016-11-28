class homeController {
  constructor(SharedFactory) {
    this.getImage = SharedFactory.getImage;
  }
}

homeController.$inject = ['SharedFactory'];

export {homeController};