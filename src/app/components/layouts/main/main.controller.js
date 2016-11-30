class mainController {
  constructor(SharedFactory, $stateParams, $state) {
    this.SharedFactory = SharedFactory;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.query = null;
  }

  search() {
    this.$state.go('search', {
      q: this.query,
      page: this.$stateParams.page || 1
    });
  }
}

mainController.$inject = [
  'SharedFactory',
  '$stateParams',
  '$state'
];

export {mainController};