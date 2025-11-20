const mortgageForm = document.getElementById('mortgage-form');
const clearBtn = document.getElementById('clear-btn');
const calculateBtn = document.getElementById('calculate-btn');
const inputs = mortgageForm.querySelectorAll('input');

// Clear button
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mortgageForm.reset();
    console.log('Form cleared');
});

// Calculate button
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Calculate button clicked');
});

// Input events
inputs.forEach(input => {
    input.addEventListener('input', () => {
        console.log(`${input.name} input changed`);
    });
    input.addEventListener('focus', () => {
        console.log(`${input.name} focused`);
    });
});

// ----- Modal Functionality -----
const modal = document.getElementById("mortgageModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Open modal
openBtn.addEventListener('click', () => {
    modal.style.display = "grid";
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
