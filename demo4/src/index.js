
function getComponent() {
  return import('loadsh').then(_ =>{
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','word'],' ');
    return element;
  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})