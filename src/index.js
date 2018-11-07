import _ from 'lodash';
function component() {
  let element = document.createElement('div');
  element.innerHTML  = _.join(['hello','webpack'],' ');
  return element;
}

// appendChild() 方法在指定元素节点的最后一个子节点之后添加节点。
document.body.appendChild(component());