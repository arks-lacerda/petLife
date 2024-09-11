const arrowDowns = document.querySelectorAll('.duvida');

arrowDowns.forEach(function (duvida) {
  duvida.addEventListener('click', () => {
    duvida.classList.toggle('ativa');
  });
});

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
