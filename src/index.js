import _ from 'lodash';

function compent() {
    var element =document.createElement('div');
    // +   // Lodash, now imported by this script
    element.innerHTML = _.join(['hello','webpack'],'');
    return element;
}
document.body.appendChild(compent())