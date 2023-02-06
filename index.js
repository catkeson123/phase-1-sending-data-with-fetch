// Add your code here

function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  return fetch("http://lolhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => {
      const id = document.createElement("h1");
      id.innerText = object.id;
      document.body.append(id);
    })
    .catch((error) => {
      const message = document.createElement("h1");
      message.innerText = error.message;
      document.body.append(message);
    });
}
