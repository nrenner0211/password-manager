async function newItemHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[id="input-title"]').value.trim();
    const content = document.querySelector('#input-content').value.trim();

    const response = await fetch('/api/items', {
        method: "POST",
        // ALTERED
        body: JSON.stringify({

            title,
            content,

        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("dashboard");
    } else {
        alert(response.statusText);
    }
}

document
  .querySelector(".new-item-form")
  .addEventListener("submit", newItemHandler);