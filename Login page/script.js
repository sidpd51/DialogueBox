(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            if (!form.checkValidity()) {
                event.stopPropagation()
            }
            submitForm();
            form.classList.add('was-validated')
        }, false)
    })
})()

const submitForm = () => {
    console.log("Sign In successfully")
    window.location.href = 'home-page.html';
}
