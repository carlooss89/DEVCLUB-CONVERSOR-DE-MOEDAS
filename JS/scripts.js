const convertButton = document.querySelector(".convert-button");
// Adicionado o -> currencySelect1
const currencySelect1 = document.querySelector(".currency-select1");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const enterTheValue = document.querySelector(".enter-the-value").value;
  const currencyConvert = document.querySelector(".currency-convert"); // Valor em Real e Outras moedas
  const currencyValue = document.querySelector(".currency-value"); // Valor em Dólar e Outras moedas

  const dolarToday = 5.2;
  const euroToday = 6.2;
  // Adicionado o valor -> realToday
  const realToday = 4.86;

  if (currencySelect1.value == "real-catch") {
    // Adicionado -> Se o select1 estiver selecionado o valor do real-catch, entre aqui
    currencyConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(enterTheValue);
  }

  if (currencySelect1.value == "dolar-catch") {
    // Adicionado -> Se o select1 estiver selecionado o valor do dolar-catch, entre aqui
    currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(enterTheValue);
  }

  if (currencySelect1.value == "euro-catch") {
    // Adicionado -> Se o select1 estiver selecionado o valor do euro-catch, entre aqui
    currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(enterTheValue);
  }

  // Início da função de comparação -> && - REAL
  if (currencySelect1.value == "real-catch" && currencySelect.value == "real") {
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(enterTheValue);
  }

  if (
    currencySelect1.value == "real-catch" &&
    currencySelect.value == "dolar"
  ) {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(enterTheValue / dolarToday);
  }

  if (currencySelect1.value == "real-catch" && currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(enterTheValue / euroToday);
  }

  // Início da função de comparação -> && - DOLAR
  if (
    currencySelect1.value == "dolar-catch" &&
    currencySelect.value == "dolar"
  ) {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(enterTheValue);
  }

  if (
    currencySelect1.value == "dolar-catch" &&
    currencySelect.value == "euro"
  ) {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(enterTheValue / euroToday);
  }

  if (
    currencySelect1.value == "dolar-catch" &&
    currencySelect.value == "real"
  ) {
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(enterTheValue / realToday);
  }

  // Início da função de comparação -> && - EURO
  if (currencySelect1.value == "euro-catch" && currencySelect.value == "euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(enterTheValue);
  }

  if (currencySelect1.value == "euro-catch" && currencySelect.value == "real") {
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(enterTheValue / realToday);
  }

  if (
    currencySelect1.value == "euro-catch" &&
    currencySelect.value == "dolar"
  ) {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(enterTheValue / dolarToday);
  }
}
// Fim da função de comparação -> &&

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  // Adicionado a -> img real
  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/real.png";
  }

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  convertValues();
}

// Adicionado a função -> changecurrencySelect1
function changecurrencySelect1() {
  // Adicionado o value -> const currency
  const currency = document.querySelector(".currency");
  const convertImage = document.querySelector(".convert-image");

  if (currencySelect1.value == "real-catch") {
    currency.innerHTML = "Real Brasileiro";
    convertImage.src = "./assets/real.png";
  }

  if (currencySelect1.value == "dolar-catch") {
    currency.innerHTML = "Dólar americano";
    convertImage.src = "./assets/dolar.png";
  }

  if (currencySelect1.value == "euro-catch") {
    currency.innerHTML = "Euro";
    convertImage.src = "./assets/euro.png";
  }
  // Adicionado a função -> convertValues()
  convertValues();
}

// Adicionado o valor -> changecurrencySelect1
currencySelect1.addEventListener("change", changecurrencySelect1);

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
