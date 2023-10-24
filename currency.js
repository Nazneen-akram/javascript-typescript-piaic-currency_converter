import inquirer from 'inquirer';

const conversionRates = {
  USD: 276.0,
  CAD: 210.0,
  EUR: 320.0,
};

const currencyConversion = async () => {
  const { currency } = await inquirer.prompt({
    type: 'list',
    name: 'currency',
    message: 'Select the source currency:',
    choices: ['USD - United States Dollar', 'CAD - Canadian Dollar', 'EUR - Euro'],
  });

  const selectedCurrency = currency.split(' - ')[0];

  const amountAnswer = await inquirer.prompt({
    type: 'input',
    name: 'amount',
    message: 'Enter the amount to convert:',
  });

  const amount = parseFloat(amountAnswer.amount);
  const convertedAmount = amount * conversionRates[selectedCurrency];

  console.log(`Converted amount: ${amount} ${selectedCurrency} is ${convertedAmount} PKR`);
};

currencyConversion();
