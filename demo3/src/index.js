import _ from 'lodash';

function component() {
  var divBox = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = '点击';

  divBox.appendChild(btn);
  divBox.innerHTML = _.join(["hello","word"],"");
  return divBox;
}
document.body.appendChild(component());