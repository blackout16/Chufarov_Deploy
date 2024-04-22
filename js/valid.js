document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const dob = document.getElementById('dob').value.trim();

        if (!validateName(firstName)) {
            alert('Введите корректное имя');
            return;
        }

        if (!validateName(lastName)) {
            alert('Введите корректную фамилию');
            return;
        }

        if (phoneNumber === '' || !phoneNumber.match(/^\d{11}$/)) {
            alert('Введите корректный номер телефона (11 цифр без пробелов и разделителей)');
            return;
        }

        if (email === '' || !validateEmail(email)) {
            alert('Введите корректный email');
            return;
        }

        if (password === '') {
            alert('Введите пароль');
            return;
        }

        if (dob === '') {
            alert('Введите дату рождения');
            return;
        }

        registrationForm.submit();
    });

    function validateName(name) {
        const re = /^[A-Za-zА-Яа-яЁё]+$/;
        return re.test(name);
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Изменение цвета текста в блоках "blocks" на синий
    const blocks = document.querySelectorAll('.blocks');
    blocks.forEach(function(block) {
        block.style.color = 'blue';
    });

    // Изменение текста в элементе "offer__text" курсивным
    const offerText = document.querySelector('.offer__text');
    offerText.style.fontStyle = 'italic';
});
