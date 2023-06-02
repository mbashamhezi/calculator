        const screen = document.querySelector('.screen');
        const buttons = document.querySelectorAll('.btn');
        const equalBtn = document.querySelector('.btn-equal');
        const clearBtn = document.querySelector('.btn-clear');

        // Add event listeners to each button
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const num = e.target.getAttribute('data-num');
                screen.value += num;
            });
        });

        // Calculate the result when the equal button is clicked
        equalBtn.addEventListener('click', () => {
            if (screen.value === '') {
                return;
            }
            try {
                const result = eval(screen.value);
                screen.value = result;
            } catch (error) {
                screen.value = 'Error';
            }
        });

        // Clear the screen when the clear button is clicked
        clearBtn.addEventListener('click', () => {
            screen.value = '';
        });