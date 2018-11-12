import _ from 'lodash';
import printMe from  './print.js'
function component() {
  var divBox = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = '点击';
  btn.onclick = printMe();

  divBox.appendChild(btn);
  divBox.innerHTML = _.join(["hello","word"],"");
  return divBox;
}
document.body.appendChild(component());