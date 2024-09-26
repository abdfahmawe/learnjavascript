var product = [];
var names = document.querySelector("#name");
var description = document.querySelector("#description");
var price = document.querySelector("#price");

document.querySelector(".register").onsubmit = function (e) {
  e.preventDefault();
  var user = {
    nameProduct: names.value,
    namePrice: price.value,
    namedescription: description.value,
  };
  product.push(user);
  console.log(product);
  printData();
};

function printData() {
  let data = ``;
  for (let i = 0; i < product.length; i++) {
    data += `
    <tr>
    <td>${product[i].nameProduct}</td>
    <td>${product[i].namedescription}</td>
    <td>${product[i].namePrice}</td>
    </tr>
    `;
    document.querySelector("tbody").innerHTML = data;
  }
}
