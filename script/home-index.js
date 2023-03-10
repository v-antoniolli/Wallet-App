const renderFinanceElements = (data) => {
  const totalItems = data.length
  const receitaRevenues = data.filter((item) => Number(item.value) > 0).reduce((acc, item) => acc + Number(item.value), 0)
  const expenses = data.filter((item) => Number(item.value) < 0).reduce((acc, item) => acc + Number(item.value), 0)
  const totalValue = receitaRevenues + expenses

  //render total items
  const financeCard1 = document.getElementById("finance-card-1");
  const totalText = document.createTextNode(totalItems)
  const totalElement = document.createElement("h2")
  totalElement.appendChild(totalText)
  financeCard1.appendChild(totalElement)


  //render total revenue
  const financeCard2 = document.getElementById("finance-card-2");
  const revenueText = document.createTextNode(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(receitaRevenues))
  const revenueTextElement = document.createElement("h2")
  revenueTextElement.appendChild(revenueText)
  financeCard2.appendChild(revenueTextElement)

  //render total expenses
  const financeCard3 = document.getElementById("finance-card-3");
  const expensesText = document.createTextNode(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(expenses))
  const expensesElement = document.createElement("h2")
  expensesElement.appendChild(expensesText)
  financeCard3.appendChild(expensesElement)

  //render total totalValue
  const financeCard4 = document.getElementById("finance-card-4");
  const totalValueText = document.createTextNode(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue))
  const totalValueElement = document.createElement("h2")
  totalValueElement.style.color = '#5936CD'
  totalValueElement.appendChild(totalValueText)
  financeCard4.appendChild(totalValueElement)
}






const onloadFinancesData = async () => {
  try {
    const date = '2022-12-15'
    const email = localStorage.getItem("@walletApp:userEmail")
    const result = await fetch(`https://mp-wallet-app-api.herokuapp.com/finances?date=${date}`, {
      method: "GET",
      headers: {
        email: email,
      },
    })
    const data = await result.json()
    console.log(data)
    renderFinanceElements(data)
    return data
  } catch (error) {
    return {error}
  }
}


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
  const nameElement = document.createElement("h4")
  const nameText = document.createTextNode(name.charAt(0))
  nameElement.appendChild(nameText)
  navBarUserAvatar.appendChild(nameElement)
}

window.onload = () => {
  onLoadUserInfo()
  onloadFinancesData()
}