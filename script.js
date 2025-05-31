document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let objectData = {};
    formData.forEach((value, key) => objectData[key] = value);

    fetch("https://script.google.com/macros/s/AKfycbzYr7MrwK43i82mQKkIQDGGuiTbJBNP-ehLM0oF8lHyFJe0d5xFtSZLcFwJCCNZ4Ack4w/exec", { // Replace with your Web App URL
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(objectData).toString()
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerHTML = `<p style="color: green;">✔ Data successfully saved to Google Sheets!</p>`;
    })
    .catch(error => {
        document.getElementById("message").innerHTML = `<p style="color: red;">❌ Error saving data!</p>`;
    });
});