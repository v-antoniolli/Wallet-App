const onClickLogin = () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("email invalido. minimo de 5 letras e 1 @")
    return;
  } 

  localStorage.setItem("@walletApp:email", email);
  window.open("home.html", "_self");
}