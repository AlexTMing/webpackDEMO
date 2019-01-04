import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';

function component() {
  var divBox = document.createElement('div');
  divBox.innerHTML = _.join(["hello","word"],"");
  // classList 属性返回元素的类名，作为 DOMTokenList 对象。
  // 该属性用于在元素中添加，移除及切换 CSS 类。
  // classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。
  divBox.classList.add("hello");

  var myIcon = new Image();
  myIcon.src = Icon;
  divBox.appendChild(myIcon);

  console.log(Data)
  return divBox;
}

// appendChild() 方法在指定元素节点的最后一个子节点之后添加节点。
document.body.appendChild(component());