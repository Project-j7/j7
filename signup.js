document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous error messages

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        errorMessage.style.color = 'red';
        return;
    }

    try {
        const response = await fetch('https://jewellerys-projects-j7.vercel.app/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = 'login.html'; // Redirect to login page after successful signup
        } else {
            errorMessage.textContent = data.message || 'Failed to sign up. Please check your details and try again.';
            errorMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = 'An unexpected error occurred. Please try again later.';
        errorMessage.style.color = 'red';
    }
});
