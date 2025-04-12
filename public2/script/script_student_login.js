window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('myform');
    const loginErrorMessage = document.getElementById('login-error-message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(loginForm);
        const data = {
            no: formData.get('no'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('/api/students/loginStudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status === 401) {
                const errorData = await response.json();
                loginErrorMessage.textContent = errorData.message;
            } else if (response.ok) {
                // Successful login, redirect to the main page
                window.location.href = '/api/students/studentMainPage'; 
            } else {
                loginErrorMessage.textContent = 'Login failed. Please try again.';
                console.error('Login failed:', response.status);
            }

        } catch (error) {
            loginErrorMessage.textContent = 'Network error. Please try again.';
            console.error('Login error:', error);
        }
    });
});