// Form elements
const clearBtn = document.getElementById('clear-btn');
const calculateBtn = document.getElementById('calculate-btn');
const inputs = mortgageForm.querySelectorAll('input');

// Add event listener to clear button
clearBtn.addEventListener('click', () => {
    mortgageForm.reset();
    console.log('Form cleared');
});

// Add event listener to calculate button 
calculateBtn.addEventListener('click', () => {
    console.log('Calculate button clicked');
});

// Add event listeners to all inputs
inputs.forEach(input => {
    input.addEventListener('input', () => {
        console.log(`${input.name} input changed`);
    });
    input.addEventListener('focus', () => {
        console.log(`${input.name} focused`);
    });
});
