const onLoadUserInfo = () => {
  const email = localStorage.getItem("@walletApp:userEmail")
  const name = localStorage.getItem("@WalletApp:userName")

  const navBarUserInfo = document.getElementById("navbar-user-container")
  const navBarUserAvatar = document.getElementById("navbar-user-avatar")

  //add user email
  const emailElement = document.createElement("p")
  const emailText = document.createTextNode(email)
  emailElement.appendChild(emailText)
  navBarUserInfo.appendChild(emailElement)

  //add logout link (a)
  const logoutElement = document.createElement("a")
  const logoutText = document.createTextNode("sair")
  logoutElement.appendChild(logoutText)
  navBarUserInfo.appendChild(logoutElement)

  // add user first letter name
  const nameElement = document.createElement("h3")
  const nameText = document.createTextNode(name.charAt(0))
  nameElement.appendChild(nameText)
  navBarUserAvatar.appendChild(nameElement)
}
  





window.onload = () => {
  onLoadUserInfo()
}