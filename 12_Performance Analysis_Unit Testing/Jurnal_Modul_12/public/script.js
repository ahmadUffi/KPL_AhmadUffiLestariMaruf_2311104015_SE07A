function cekPangkat() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);

  fetch(`/pangkat/${a}/${b}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("resultLabel").innerText = data.result;
    })
    .catch(err => console.error(err));
}
