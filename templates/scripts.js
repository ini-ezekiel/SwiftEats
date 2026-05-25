const form = document.getElementById('signinForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (form.checkValidity()) {
        form.reportValidity();
        return;
    }

    window.location.href = 'dashboard.html';
  });