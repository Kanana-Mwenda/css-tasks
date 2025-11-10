  const toggle = document.getElementById('toggle');
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.keypad button');

  toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent;

      if (val === 'RESET') {
        display.textContent = '0';
      } else if (val === 'DEL') {
        display.textContent = display.textContent.slice(0, -1) || '0';
      } else if (val === '=') {
        try {
          display.textContent = eval(display.textContent.replace(/[^-()\d/*+.]/g, ''));
        } catch {
          display.textContent = 'Error';
        }
      } else {
        display.textContent = display.textContent === '0' ? val : display.textContent + val;
      }
    });
  });

