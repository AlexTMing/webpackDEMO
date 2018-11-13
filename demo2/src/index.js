import _ from 'lodash';
import printMe from  './print.js'
function component() {
  var divBox = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = '点击';
  btn.onclick = printMe();

  divBox.appendChild(btn);
  divBox.innerHTML = _.join(["hello01","word"],"");
  return divBox;
}
document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module');
    printMe();
  })
}