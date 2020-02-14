const headMain = document.querySelector('main');

headMain.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = 'Colleen is the champion'
document.body.appendChild(newHeader);
