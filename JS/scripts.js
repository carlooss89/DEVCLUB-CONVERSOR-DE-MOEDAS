const convertButton = document.querySelector(".convert-button");
// Adicionado o -> currencySelect1
const currencySelect1 = document.querySelector(".currency-select1");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const enterTheValue = document.querySelector(".enter-the-value").value;
  const currencyConvert = document.querySelector(".currency-convert"); // Valor em Real
  const currencyValue = document.querySelector(".currency-value"); // Dólar, Euro e Outras moedas

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

  // Continuar com a solução -------------------------------

  if (currencySelect.value == "real") {
    // Adicionado -> Se o select estiver selecionado o valor de real, entre aqui
    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(enterTheValue);
  }

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(enterTheValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(enterTheValue / euroToday);
  }
}
// Fim da função -> function convertValues()

// Início da função de comparação -> && - DOLAR
if (currencySelect1.value == "dolar-catch" && currencySelect.value == "dolar") {
  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(enterTheValue);
}

if (currencySelect1.value == "dolar-catch" && currencySelect.value == "real") {
  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(enterTheValue / dolarToday);
}

if (currencySelect1.value == "dolar-catch" && currencySelect.value == "euro") {
  currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(enterTheValue / dolarToday);
}

// Início da função de comparação -> && - EURO
if (currencySelect1.value == "euro-catch" && currencySelect.value == "dolar") {
  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(enterTheValue / euroToday);
}

if (currencySelect1.value == "euro-catch" && currencySelect.value == "real") {
  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(enterTheValue / euroToday);
}

if (currencySelect1.value == "euro-catch" && currencySelect.value == "euro") {
  currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(enterTheValue / euroToday);
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
