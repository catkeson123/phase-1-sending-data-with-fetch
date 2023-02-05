// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((object) => {
      const id = document.createElement("h1");
      id.innerText = object.id;
      document.body.appendChild(id);
    })
    .catch((error) => {
      const message = document.createElement("h1");
      message.innerText = error.message;
      document.body.appendChild(message);
    });
}
