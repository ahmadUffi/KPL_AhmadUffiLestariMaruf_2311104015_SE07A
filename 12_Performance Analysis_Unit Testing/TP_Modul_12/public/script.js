function checkNumber() {
  const input = parseInt(document.getElementById("inputNumber").value);
  fetch(`/check/${input}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("resultLabel").innerText = data.result;
    })
    .catch(err => {
      console.error(err);
    });
}
