

const input = document.querySelector('input');

input.addEventListener('keyup', (e) => {

  if (e.key == 'Enter') {
    let ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
    input.value = '';
  }


});








