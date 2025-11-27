// Início da seleção de elementos
const convertButton = document.querySelector(".convert-button");
const currencySelect1 = document.querySelector(".currency-select1");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const enterTheValue = parseFloat(document.querySelector(".enter-the-value").value) || 0;
  const currencyConvert = document.querySelector(".currency-convert");
  const currencyValue = document.querySelector(".currency-value");

  const rates = {
    "real-catch": { code: "BRL", locale: "pt-BR", rate: 1 },
    "dolar-catch": { code: "USD", locale: "en-US", rate: 5.2 },
    "euro-catch": { code: "EUR", locale: "de-DE", rate: 6.2 }
  };

  const realToday = 4.86; // Usado para conversão direta

  // Função para formatar moeda
  function formatCurrency(value, locale, code) { 
    return new Intl.NumberFormat(locale, { 
      style: "currency",
      currency: code,
    }).format(value);
  }

  // Seleciona as moedas de origem e destino
  const from = currencySelect1.value;
  const to = currencySelect.value;

  // Mostra o valor original na moeda de origem
  if (rates[from]) {
    currencyConvert.innerHTML = formatCurrency(enterTheValue, rates[from].locale, rates[from].code);
  } else {
    currencyConvert.innerHTML = "";
  }

  // Matriz de conversão entre moedas
  const conversionMatrix = {
    "real-catch": {
      "real": v => v,  // A seta =>: Significa "transforma em" ou "retorna".
      "dolar": v => v / rates["dolar-catch"].rate, 
      "euro": v => v / rates["euro-catch"].rate
    },
    "dolar-catch": {
      "real": v => v / realToday, 
      "dolar": v => v,
      "euro": v => v / rates["euro-catch"].rate
    },
    "euro-catch": {
      "real": v => v / realToday, 
      "dolar": v => v / rates["dolar-catch"].rate,
      "euro": v => v
    }
  };

  // Formatadores para cada moeda de destino
  const formatters = { 
    "real": (v) => formatCurrency(v, "pt-BR", "BRL"),
    "dolar": (v) => formatCurrency(v, "en-US", "USD"),
    "euro": (v) => formatCurrency(v, "de-DE", "EUR")
  };

  if (conversionMatrix[from]?.[to] && formatters[to]) { // Verifica se a conversão é possível
    const converted = conversionMatrix[from][to](enterTheValue); // Converte o valor
    currencyValue.innerHTML = formatters[to](converted); // Formata e exibe o valor convertido
  } else {
    currencyValue.innerHTML = ""; // Se a conversão não for possível, limpa o campo
  }
}
// Fim da função de comparação -> &&

function changeCurrency() { // Função para mudar a moeda 
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
