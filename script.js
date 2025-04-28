function showMessage() {
  document.getElementById('message-box').classList.remove('hidden');
}

function showYesResponse() {
  document.getElementById('yes-response').classList.remove('hidden');
  document.getElementById('loader').classList.remove('hidden');
  setTimeout(function() {
    redirectToPlan();
  }, 5000);
}

function showMaybeResponse() {
  document.getElementById('maybe-response').classList.remove('hidden');
}

function redirectToPlan() {
  window.location.href = "nextpage.html";
}