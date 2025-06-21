
function openModal(url) {
  document.getElementById('modal-frame').src = url;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal-frame').src = '';
}
