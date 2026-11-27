// The only JavaScript on the site: the "Save as PDF" button.
// The button starts hidden in the HTML. If JavaScript is off it stays hidden,
// so nobody sees a button that does nothing ("progressive enhancement").
const printButton = document.getElementById('print-btn');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());   // opens the browser's print dialog → "Save as PDF"
}
