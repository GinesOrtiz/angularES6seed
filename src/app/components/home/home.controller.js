class homeController {
    constructor($interval) {
        this.rand = Math.random().toFixed(4);
        this.text = 'AngularJS & ES6 Rocks!';

        $interval(()=> {
            this.rand = Math.random().toFixed(4);
        }, 500);
    }
}

homeController.$inject = ['$interval'];

export {homeController};
