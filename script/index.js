const validateUser = async (email) => {
  try {
    const result = await fetch(`https://mp-wallet-app-api.herokuapp.com/users?email=${email}`)
    const user = await result.json()
    return user
  } catch (error) {
    return {error}
  }
}

const onClickLogin = () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("email invalido. minimo de 5 letras e 1 @")
    return;
  } 

  localStorage.setItem("@walletApp:email", email);
  window.open("home.html", "_self");
}