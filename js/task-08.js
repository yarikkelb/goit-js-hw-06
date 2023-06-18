const form = document.querySelector('.login-form');
console.dir(form);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  

  if (!email.value.trim() || !password.value.trim()) {
    return alert('Please fill in all the fields!');
  }
  
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    event.currentTarget.reset();
  }

