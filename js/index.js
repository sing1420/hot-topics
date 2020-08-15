const container = document.querySelector('.main-content');
const links = document.querySelectorAll('header a');
let url = 'partials/home.html';

function loadContent(url){
fetch(url).then(function (rsp) {
    return rsp.text();
  }).then(function (data) {
    container.innerHTML = data;
  });
}
loadContent(url);

function selectContent(ev){
    ev.preventDefault();
    let element = ev.target.href;
    loadContent(element);
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", selectContent);
}