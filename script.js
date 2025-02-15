function calculateTotal() {
  let total = 0;

  // Loop through all input fields and sum their values
  document.querySelectorAll(".salmon-avo-input").forEach((input) => {
    total += parseFloat(input.value) || 0; // Convert to number, default to 0 if empty
  });

  // Set the total field
  document.getElementById("salmon-avo-total").value = total;
}

// Attach event listener to both number inputs
document.querySelectorAll(".salmon-avo-input").forEach((input) => {
  input.addEventListener("input", calculateTotal);
});
