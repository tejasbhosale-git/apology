// Apology message toggle
function showApology() {
    const apologyMessage = document.getElementById("apology-message");
    apologyMessage.style.display = apologyMessage.style.display === "none" ? "block" : "none";
  }
  
  // Show the maybe message
  function showMaybeMessage() {
    const maybeMessage = document.getElementById("maybe-message");
    maybeMessage.style.display = "block"; // Display the message
    document.getElementById("maybe-button").disabled = true; // Disable the Maybe button after click
  }
  
  // Redirect to the plan page after Yes button is clicked
  function redirectToPlan() {
    window.location.href = "plan.html"; // Redirect to the Plan Page
  }
  