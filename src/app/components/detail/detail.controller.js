class detailController {
  constructor() {

  }

  getImage(type, path) {
    let size = type === 'backdrop' ? 'w600' : 'w300';
    return 'https://image.tmdb.org/t/p/' + size + path;
  }
}

detailController.$inject = [];

export {detailController};