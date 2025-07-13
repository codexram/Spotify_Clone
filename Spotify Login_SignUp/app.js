// Toggle between sign-in and sign-up forms with animation
const signinSignup = document.querySelector('.signin-signup');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToSignin = document.getElementById('switch-to-signin');

if (switchToSignup && switchToSignin && signinSignup) {
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signinSignup.classList.add('show-signup');
    clearMessages();
  });
  switchToSignin.addEventListener('click', (e) => {
    e.preventDefault();
    signinSignup.classList.remove('show-signup');
    clearMessages();
  });
}

// Helper: Show error/success messages
function showMessage(form, msg, isError = true) {
  let msgDiv = form.querySelector('.form-message');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.className = 'form-message';
    form.insertBefore(msgDiv, form.firstChild);
  }
  msgDiv.textContent = msg;
  msgDiv.style.color = isError ? '#ff4d4f' : '#1db954';
  msgDiv.style.marginBottom = '1rem';
  msgDiv.style.textAlign = 'center';
}
function clearMessages() {
  document.querySelectorAll('.form-message').forEach(el => el.remove());
}

// Signup logic
const signupForm = document.querySelector('.sign-up-form');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearMessages();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    if (!username || !email || !password) {
      showMessage(signupForm, 'All fields are required.');
      return;
    }
    let users = JSON.parse(localStorage.getItem('spotifyUsers') || '[]');
    if (users.find(u => u.username === username || u.email === email)) {
      showMessage(signupForm, 'User with this username or email already exists.');
      return;
    }
    users.push({ username, email, password });
    localStorage.setItem('spotifyUsers', JSON.stringify(users));
    showMessage(signupForm, 'Signup successful! Please sign in.', false);
    setTimeout(() => {
      signinSignup.classList.remove('show-signup');
      clearMessages();
    }, 1200);
    signupForm.reset();
  });
}

// Login logic
const signinForm = document.querySelector('.sign-in-form');
if (signinForm) {
  signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearMessages();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    let users = JSON.parse(localStorage.getItem('spotifyUsers') || '[]');
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
    if (!user) {
      showMessage(signinForm, 'Invalid username/email or password.');
      return;
    }
    localStorage.setItem('spotifyIsLoggedIn', 'true');
    localStorage.setItem('spotifyCurrentUser', JSON.stringify(user));
    showMessage(signinForm, 'Login successful! Redirecting...', false);
    setTimeout(() => {
      window.location.href = '../index.html'; // Change to your web player page
    }, 1200);
    signinForm.reset();
  });
}

// Optional: Logout function (call this on your web player page to log out)
// function logout() {
//   localStorage.removeItem('spotifyIsLoggedIn');
//   localStorage.removeItem('spotifyCurrentUser');
//   window.location.href = 'Spotify Login_SignUp/login.html';
// }
