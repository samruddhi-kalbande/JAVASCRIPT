// Vehicle registration validator for Pract 4
const regInput = document.getElementById('reg');
const validateBtn = document.getElementById('validate');

function validateRegistration(code){
  if(!code) return {ok:false,msg:'Empty'};
  if(code.length !== 10) return {ok:false,msg:'Length must be 10'};
  const re = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
  if(re.test(code)) return {ok:true,msg:'Valid'};
  return {ok:false,msg:'Invalid format'};
}

validateBtn.addEventListener('click', function(){
  const code = (regInput.value || '').trim().toUpperCase();
  const res = validateRegistration(code);
  if(res.ok) alert('Registration is valid');
  else alert('Invalid registration: ' + res.msg);
});
