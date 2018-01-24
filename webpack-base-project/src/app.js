import './app.stylus';
// import $ from 'jquery';
import Hello from './Hello';
import dragon from './assets/dragon.jpg';

const addElements = () => {
  let body = document.body;
  let helloJarek = new Hello('Jarek');
  let heading = document.createElement('h1');
  let image = document.createElement('img');
  helloJarek.say();
  heading.innerHTML = "with Webpack";
  body.appendChild(heading);
  image.setAttribute('src', `${dragon}`)
  body.appendChild(image);
}

window.onload = addElements();