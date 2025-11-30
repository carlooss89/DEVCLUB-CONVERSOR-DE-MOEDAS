// Início da seleção de elementos
const convertButton = document.querySelector(".convert-button");
const currencySelect1 = document.querySelector(".currency-select1");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".enter-the-value").value) || 0;
  const currencyValueConvert = document.querySelector(".currency-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const currencyForm = changecurrencySelect1.value;
  const currencyTo = currencySelect.value;

  if (currencyForm === currencyTo) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyTo,
    }).format(inputCurrencyValue);
    return;
  }

  const url = `https://economia.awesomeapi.com.br/last/${currencyFrom}-${currencyTo}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // A API devolve um objeto estranho tipo: { BRLUSD: { bid: "0.20" } }
   // Precisa criar essa chave "BRLUSD" dinamicamente
    const key = currencyFrom + currencyTo;
    const exchangeRate = data[key].bid; // 'bid' é o valor de compra atual

    const result = inputCurrencyValue * exchangeRate; // Converte o valor

    currencyValueConverted.inerHTML = new Intl.NumberFormat(undefined, { // Formata o valor convertido
      style: "currency",
      currency: currencyTo,
    }).format(result); // Mostra o valor convertido

    currencyValueConvert.innerHTML = new Intl.NumberFormat(undefined, { 
      style: "currency",
      currency: currencyFrom,
    }).format(inputCurrencyValue); // Mostra o valor original

  } catch (error) {
    console.error("Erro ao buscar a taxa de câmbio:", error);
    alert("Não foi possível obter a taxa de câmbio no momento. Por favor, tente novamente mais tarde.");
    }
}
  
convertButton.addEventListener("click", convertValues);

  