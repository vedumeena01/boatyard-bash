// Annapolis Boatyard Bash Interactivity
function openRSVPModal() {
  const modal = document.getElementById('rsvp-modal');
  if (modal) modal.style.display = 'flex';
}

function closeRSVPModal() {
  const modal = document.getElementById('rsvp-modal');
  if (modal) modal.style.display = 'none';
}

function closeModalOnBackdrop(e) {
  if (e.target.id === 'rsvp-modal') {
    closeRSVPModal();
  }
}

function handleRSVPSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rsvp-name').value;
  const guests = document.getElementById('rsvp-guests').value;

  closeRSVPModal();

  // Show Toast
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  if (toast && toastText) {
    toastText.textContent = `Welcome aboard, ${name}! Your party of ${guests} is confirmed for Oct 23! ⚓`;
    toast.style.display = 'flex';

    setTimeout(() => {
      toast.style.display = 'none';
    }, 4500);
  }

  // Reset form
  document.getElementById('rsvp-form').reset();
}

function toggleFAQ(element) {
  const isActive = element.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if (!isActive) {
    element.classList.add('active');
    element.querySelector('.faq-question span:last-child').textContent = '−';
  } else {
    element.querySelector('.faq-question span:last-child').textContent = '+';
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRSVPModal();
  }
});
