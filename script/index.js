const validateUser = async (email) => {
  try {
    const result = await fetch(`https://mp-wallet-app-api.herokuapp.com/users?email=${email}`)
    const user = await result.json()
    return user
  } catch (error) {
    return {error}
  }
}

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("email invalido. minimo de 5 letras e 1 @")
    return;
  } 
  const result = await validateUser(email)
  console.log(result)
  if (result.error) {
    alert("Falha ao validar e-mail.")
    return
  }
  
  localStorage.setItem("@walletApp:userEmail", result.email);
  localStorage.setItem("@WalletApp:userName", result.name)
  localStorage.setItem("@walletApp:userId", result.id)
  window.open("home.html", "_self");
}