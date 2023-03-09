const onCallRegister = async (email, name) => {
  try {
    const data = {
      email,
      name
    }
  
    const response = await fetch('https://mp-wallet-app-api.herokuapp.com/users', {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const user = await response.json()
    return user
  } catch (error) {
    return {error}
  }
}


const onRegister = async() => {
  const email = document.getElementById("i-email").value
  const name = document.getElementById("i-nome").value

  if (name.length < 3) {
    alert("Nome deve ter mais de 3 caracteres")
    return;
  }
  if (email.length < 5 || !email.includes("@")) {
    alert("E-mail invalido")
    return;
  }
  const result = await onCallRegister(email, name)
  if (result.error) {
    alert("Falha ao validar")
    return
  }
  localStorage.setItem("@walletApp:userEmail", result.email);
  localStorage.setItem("@WalletApp:userName", result.name)
  localStorage.setItem("@walletApp:userId", result.id)
  window.open("home.html", "_self");

}



window.onload = () => {
  const form = document.getElementById("form-register")
  form.onsubmit = (event) => {
    event.preventDefault()
    onRegister();
  }
}