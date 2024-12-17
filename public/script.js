 document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.button-container');
    const buttons = Array.from(container.querySelectorAll('button')); 

    const today = new Date();
    const currentDay = today.getDate(); 

    buttons.forEach(button => {
        const day = parseInt(button.dataset.day); 
        if (day <= currentDay) {
            button.disabled = false; 
        } else {
            button.disabled = true; 
        }
    });
    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]]; 
    }

    buttons.forEach(button => container.appendChild(button));
});