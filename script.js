// seleciona os botões de WhatsApp e Instagram
const btnWhatsapp = document.querySelector('button:first-of-type');
const btnInstagram = document.querySelector('button:last-of-type');

// adiciona eventos de clique aos botões
btnWhatsapp.addEventListener('click', function() {
  window.location.href = 'https://wa.me/5551983212599';
});

btnInstagram.addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/fernanda_terapeutafloral/';
});
