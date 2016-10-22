import loaderImage from './loader.gif';

class loaderController {
  constructor($scope) {
    this.loaderImage = loaderImage;
    this.$scope = $scope;

    this.$scope.$on('loaderStatus', (event, data)=> {
      this.loaderVisible = data.status;
      this.loaderInfo = data.info;
    });

  }
}

loaderController.$inject = ['$scope'];

export {loaderController};