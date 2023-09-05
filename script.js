document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const contactTable = document.getElementById('contact-table').getElementsByTagName('tbody')[0];

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name.trim() === '' || phone.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const newRow = contactTable.insertRow();
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        nameInput.value = '';
        phoneInput.value = '';
    });
});
