alert("Test CSP");
document.addEventListener("DOMContentLoaded", function () {
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
