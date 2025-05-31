document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let objectData = {};
    formData.forEach((value, key) => objectData[key] = value);

    fetch("https://script.google.com/macros/s/AKfycbzBHZunzvp35vZMVKzPJf7PQchyV9RCz7SjHuM17wnMyjUmy64Z_9d8jkynT1xQumlBag/exec", { // Replace with your Web App URL
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