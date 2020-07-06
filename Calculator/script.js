const screen = document.querySelector('.screen');

const buttons = document.querySelectorAll('.calc_button');

buttons.forEach(button => {
    button.addEventListener('click', (
            eventHandler));
});

function eventHandler(event) {
    let button_text = event.target.innerText;
    let screen_text = screen.innerText;
    
    if (button_text === 'AC') {
        screen.innerText = '0';
        return;
    }
    
    if (button_text === '<') {
        screen.innerText = screen_text.slice(0, screen_text.length - 1);
        if (screen_text.length === 1) {
            screen.innerText = 0;
        }
        return;
    }
    if (button_text === '=') {
        try {
            screen.innerText = eval(screen_text);
            return;
        } catch (err) {
            screen.innerText = 'Error';
            return;
        }
    }
    
    
    if (screen_text.length > 10 || (
            screen_text.includes('.') || screen_text === 'Error') && button_text === '.') {
        return;
    }
    
    if ((
            screen_text === '0' || screen_text === 'Error') && button_text !== '.') {
        screen.innerText = button_text;
        
    }
    
    else {
        screen.innerText += button_text;
    }
    
}



