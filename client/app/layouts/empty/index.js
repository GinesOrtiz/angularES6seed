import template from './empty.html';
import './empty.scss';

export const emptyLayoutDirective = ()=> {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope: {}
    };
};
