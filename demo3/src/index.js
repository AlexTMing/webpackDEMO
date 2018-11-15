// import _ from 'lodash';
import {cude} from './math.js';

function component() {
  // var divBox = document.createElement('div');
  // var btn = document.createElement('button');
  //
  // btn.innerHTML = '点击';
  //
  // divBox.appendChild(btn);
  // divBox.innerHTML = _.join(["hello","word"],"");


  var divBox = document.createElement('pre');
  divBox.innerHTML=[
    'hello webpack',
    '5 cubed is equal to'+ cube(5)
  ].join('\n\n');

  return divBox;
}
document.body.appendChild(component());