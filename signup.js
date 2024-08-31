// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }

        try {
            const response = await fetch('https://your-vercel-deployment-url.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Sign up successful');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error('Error signing up:', err);
            alert('An error occurred. Please try again.');
        }
    });
});
