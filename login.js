// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('https://your-vercel-deployment-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login successful');
                window.location.href = 'index.html'; // Redirect to homepage or dashboard
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error('Error logging in:', err);
            alert('An error occurred. Please try again.');
        }
    });
});
