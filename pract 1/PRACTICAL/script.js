// External script: attach handlers and use console methods
console.log('External script loaded');
console.warn('This demonstrates console.warn');

function inlineAlert(){
  alert('This was called from an inline onclick attribute');
}
// Safe handler attachment for optional elements
const showBtn = document.getElementById('showBtn');
if(showBtn){
  showBtn.addEventListener('click', function(){
    const name = document.getElementById('name').value || 'Guest';
    const greet = `Welcome, ${name}! Glad to see you.`; // template literal
    const gEl = document.getElementById('greet');
    if(gEl) gEl.textContent = greet;
    console.log('Greet displayed for', name);
  });
}

// Handle student form submit button
const submitStudent = document.getElementById('submitStudent');
if(submitStudent){
  submitStudent.addEventListener('click', function(){
    const name = document.getElementById('name').value || '';
    const age = document.getElementById('age').value || '';
    const prn = document.getElementById('prn').value || '';
    const contact = document.getElementById('contact').value || '';
    const email = document.getElementById('email').value || '';
    const address = document.getElementById('address').value || '';
    console.log('Student submitted:', {name,age,prn,contact,email,address});
    alert('Submitted: ' + (name || 'No name')); 
  });
}
