async function getData() {
  let respose = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=pizza`
  );
  let data = await respose.json();
  return data.recipes;
}

function printData(array) {
  let products = ``;
  for (let i = 0; i < array.length; i++) {
    products += `<div class = "item">
    <h2>${array[i].title}</h2>
    <img src="${array[i].image_url}">
    </div>
    `;
  }
  document.querySelector(".products").innerHTML = products;
}

async function control() {
  let data = await getData();
  printData(data);
}
control();
