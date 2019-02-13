import _ from 'lodash';
import printMe from './print';
import './styles.css';

if(porcess.env.NODE_ENV !== 'production'){
  console.log('looks like we ')
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack','--alex'], ' ');

  btn.innerHTML = 'BTN CLICK ME';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// 修改后重新获取最新渲染
let element = component();
document.body.appendChild(element);


if(module.hot){
  module.hot.accept('./print.js',function () {
    console.log('Accepting the updata');
    // printMe();
    // 页面重新渲染后 进行绑定事件更新
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);

  })
}