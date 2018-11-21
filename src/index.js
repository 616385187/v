function compent() {
    var element =document.createElement('div');
    element.innerHTML = _.join(['hello','webpack'],'');
    return element;
}
document.body.appendChild(compent())