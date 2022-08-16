async function newItemHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[id="title"]').value.trim();
    const content = document.querySelector('#content').value.trim();

    const response = await fetch('/api/items', {
        method: "POST",
        body: JSON.stringify({
            title,
            content
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