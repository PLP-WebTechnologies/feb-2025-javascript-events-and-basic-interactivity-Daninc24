// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  document.getElementById('hoverBox').addEventListener('mouseover', () => {
    document.getElementById('hoverBox').style.backgroundColor = 'lightgreen';
  });
  
  document.addEventListener('keydown', (e) => {
    document.getElementById('keyInfo').textContent = `You pressed: ${e.key}`;
  });
  
  document.getElementById('clickBtn').addEventListener('dblclick', () => {
    alert('Secret double-click unlocked!');
  });
  
  // Interactive Elements
  document.getElementById('colorToggleBtn').addEventListener('click', () => {
    const btn = document.getElementById('colorToggleBtn');
    btn.style.backgroundColor = btn.style.backgroundColor === 'tomato' ? 'cornflowerblue' : 'tomato';
  });
  
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
      document.getElementById(target).classList.remove('hidden');
    });
  });
  
  // Form Validation
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('formMessage');
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      message.textContent = 'Invalid email format.';
      message.style.color = 'red';
    } else if (password.length < 8) {
      message.textContent = 'Password must be at least 8 characters.';
      message.style.color = 'red';
    } else {
      message.textContent = 'Form submitted successfully!';
      message.style.color = 'green';
    }
  });
  
  // Bonus: Real-time feedback
  document.getElementById('password').addEventListener('input', (e) => {
    const password = e.target.value;
    e.target.style.borderColor = password.length >= 8 ? 'green' : 'red';
  });
  