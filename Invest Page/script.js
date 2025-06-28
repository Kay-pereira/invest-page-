//function toggleDropdown() {
    document.querySelector('.Drop-down-button-content').classList.toggle('show');
  //}

 // window.onclick = function(event) {
  //  if (!event.target.matches('.Drop-down-button')) {
    //  const dropdowns = document.querySelectorAll(".Drop-down-button-selector");
  //    dropdowns.forEach(dd => dd.classList.remove('show'));
   // }
 // }

  const yearsToGrow = document.getElementById('years-to-grow');
  const yearsToGrowValue = document.getElementById('years-to-grow-value');

  yearsToGrow.addEventListener('input', (event) => {
    yearsToGrowValue.textContent = ` ${event.target.value} Years`;
  });

  const calculateButton = document.getElementById('Calculate-button');
  calculateButton.addEventListener('click', function() {
    // Get input values
    const initialDeposit = parseFloat(document.getElementById('Initial-deposit').value) || 0;
    const contributions = parseFloat(document.getElementById('Contributions').value) || 0;
    const years = parseInt(document.getElementById('years-to-grow').value) || 0;
    const annualInterest = parseFloat(document.getElementById('annual-interest').value) || 0;

    // Get selected contribution frequency
    const freqRadios = document.getElementsByName('contribution-frequency');
    let frequency = 'Annual';
    for (const radio of freqRadios) {
      if (radio.checked) {
        frequency = radio.parentElement.textContent.trim();
        break;
      }
    }

    // Calculate compound interest (simple example)
    let n;// compounding periods per year
    switch (frequency.toLowerCase()) {
      case 'monthly': n = 12; break;
      case 'weekly': n = 52; break;
      case 'daily': n = 365; break;
      default: n = 1;
    }
    const r = annualInterest / 100;
    let futureValue = initialDeposit * Math.pow(1 + r / n, n * years);

    // Add contributions (future value of a series)
    if (contributions > 0) {
      futureValue += contributions * ((Math.pow(1 + r / n, n * years) - 1) / (r / n));
    }

    // Display output in the #future-value h1
    const futureValueElem = document.getElementById('future-value');
    futureValueElem.textContent = `$${futureValue.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
  });
