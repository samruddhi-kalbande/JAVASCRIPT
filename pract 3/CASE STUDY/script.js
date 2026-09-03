// Password strength and registration logic for Pract 3
const pwd = document.getElementById('password');
const confirmPwd = document.getElementById('confirm');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const registerBtn = document.getElementById('register');

function scorePassword(s){
  let score = 0;
  if(!s) return 0;
  if(s.length >= 8) score += 1;
  if(/[A-Z]/.test(s)) score += 1;
  if(/[a-z]/.test(s)) score += 1;
  if(/[0-9]/.test(s)) score += 1;
  if(/[@$!%*?&,]/.test(s)) score += 1;
  return score; // 0-5
}

function updateStrength(){
  const s = pwd.value;
  const sc = scorePassword(s);
  const pct = (sc/5)*100;
  strengthBar.style.setProperty('--pct', pct + '%');
  strengthBar.style.background = '#ffe6f0';
  strengthBar.innerHTML = '<div style="height:100%;width:'+pct+'%;background:#ff6090;border-radius:6px"></div>';
  if(sc <= 2) strengthText.textContent = 'Too Weak';
  else if(sc === 3) strengthText.textContent = 'Weak';
  else if(sc === 4) strengthText.textContent = 'Good';
  else strengthText.textContent = 'Strong';
}

pwd.addEventListener('input', updateStrength);

registerBtn.addEventListener('click', function(){
  const p = pwd.value;
  const c = confirmPwd.value;
  if(p !== c){ alert('Passwords do not match'); return; }
  const sc = scorePassword(p);
  if(sc < 3){ alert('Password is too weak'); return; }
  alert('User registered successfully');
});