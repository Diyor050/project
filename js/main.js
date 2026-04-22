document.querySelectorAll('.process__item').forEach((item) => {
  const button = item.querySelector('.process__header');
  const toggle = item.querySelector('.process__toggle');

  button.addEventListener('click', () => {
    const open = item.classList.contains('is-open');

    document.querySelectorAll('.process__item').forEach((other) => {
      other.classList.remove('is-open');
      const otherToggle = other.querySelector('.process__toggle');
      if (otherToggle) otherToggle.textContent = '+';
    });

    if (!open) {
      item.classList.add('is-open');
      toggle.textContent = '−';
    }
  });
});