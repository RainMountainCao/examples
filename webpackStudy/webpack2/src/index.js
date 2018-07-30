import _ from 'lodash'
import  './style.css'
import icon from './7.jpg'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hellfsd00o', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

var img = new Image();
img.src = icon;
document.body.appendChild(icon);

if(module.hot) {
	console.log('Updating print.js...')
}
