document.addEventListener("DOMContentLoaded", function () {
    // Show a message when script runs
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.innerText = "Script loaded and running!";
    
    const runButton = document.getElementById("runButton");
    const output = document.getElementById("output");
    const userInput = document.getElementById("userInput");

    runButton.addEventListener("click", function () {
      try {
        const result = eval(userInput.value);  // ⚠️ Only for demo purposes
        output.innerText = result;
      } catch (error) {
        output.innerText = "Error: " + error.message;
      }
    });
  });
