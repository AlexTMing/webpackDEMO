import _ from 'lodash';
import printMe from  './print.js'
import styles from './styles.css'
function component() {
  var divBox = document.createElement('div');
  var btn = document.createElement('button');

  divBox.innerHTML = _.join(["hello01","word"],"");
  btn.innerHTML = '点击';
  btn.onclick = printMe;
  divBox.appendChild(btn);
  return divBox;
}
// document.body.appendChild(component());

let element = component();
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}