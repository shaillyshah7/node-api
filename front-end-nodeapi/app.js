//const submit = document.querySelector("#submit");
const view = document.querySelector("#view");
const productForm = document.querySelector("#pf");

function getAllProducts() {
    fetch('http://localhost:3002/api/v1/product', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    }
  }).then(
    res => {
        res.json().then(
          data => {
            console.log(data);
            if (data.body.length > 0) {
    
              var temp = "";
                data.body.forEach((itemData) => {
                temp += `<tr>
                <td>${itemData.id}</td>
                <td>${itemData.name}</td>
                <td>${itemData.brand}</td>
                <td>${itemData.price}</td>
                <td><button type="button" id="edit" class="btn btn-default">Edit</button></td></tr>`;
              });
              document.getElementById('data').innerHTML = temp;
            }
          }
        )
      })}//.then(res => res.json()).then(data => console.log(data))

function postProduct(e) {
    e.preventDefault();
    console.log("form", productForm.value)
    // fetch('http://localhost:3002/api/v1/product', {
    // method: 'POST',
    // headers: {
    // 'Content-Type': 'application/json',
    // },
}

function updateProduct(){
  fetch('http://localhost:3002/api/v1/product/:id', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    }
  }).then(
    res => {
      
    }
  )
}

view.addEventListener('click', getAllProducts);
//postProduct();
//getAllProducts();

