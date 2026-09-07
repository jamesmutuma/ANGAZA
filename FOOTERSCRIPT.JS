fetch("FOOTER.HTML")
    .then(response => {
        if (!response.ok) {
            throw new error("Could not load FOOTER.HTML");
        }

        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading footer:", error.data);
    });