import template from './secured.html';
import './secured.scss';

export const securedLayoutDirective = ()=> {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope: {}
    };
};
