const pass = document.querySelector('#pass');
const cfPass = document.querySelector('#cf-pass');
const pAlert = document.querySelector('form p');
const btnRegister = document.querySelector('button');
const btnShow = document.querySelector('label i');

function check() {
  let check = (pass.value.length < 2);
  console.log(check);
  btnRegister.disabled = check;
  cfPass.disabled = check;
  cfPass.value = '';
  pAlert.className = 'alert';
}
check();
pass.addEventListener('keyup', check);

btnRegister.addEventListener('click', (e) => {
  e.preventDefault();
  let txtErr = "Error! Confirm Passwprd Dont Match";
  let txtSuccess = "Ok ! Confirm Password Matched";
  let result = (pass.value === cfPass.value);
  console.log(result);
  pAlert.textContent = result ? txtSuccess : txtErr;
  pAlert.className = result ? 'alert success' : 'alert danger';
})