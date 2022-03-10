"use strict"

function createBakery() {

    fetch("http://localhost:8080/create", { 
        method: 'post',
        headers: {
            "Content-type": "application/json" 
        },
        body: JSON.stringify( 
            {
                "name": bakeryName.value,
                "dietary": dietary.value,
                "product": product.value
            }
        )
    })
        .then(res => res.json())
        .then((data) => console.log(`Request succeeded with JSON response ${data}`))
        .catch((error) => console.log(`Request failed ${error}`))
}

  function editBakery() {
     let id = document.getElementById("editID").value 
    fetch("http://localhost:8080/replace/"  + id, {
        method: 'put',
        headers: {
            "Accept" : "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                "name": editName.value,
                "dietary": editdietary.value,
                "product": editproduct.value
            }
        )
    })
        .then(res => res.json())
        .then((data) => console.log(`Request succeeded with JSON response ${data}`))
        .catch((error) => console.log(`Request failed ${error}`))
};
let allBakeryTable = "";
function Read() {
  let RA = fetch(`http://localhost:8080/getAll`);
  RA.then(function (response) {
    let RAA = response.json();
    RAA.then(function (data) {
        allBakeryTable = document.createElement("table");
        allBakeryTable.style = "width:50%";
        allBakeryTable.border = 2;

      for (let i = 0; i < data.length; i++) {
        showRecord(data[i].id, data[i].name, data[i].dietary, data[i].product);
      }
    });
  });
}

  function DeletebyID() {

    let deleteByID = document.getElementById("deleteByID").value;
    fetch("http://localhost:8080/remove/" + deleteByID, {
        method: 'delete'
    })
        .then((data) => {
            console.log(`Request succeeded with JSON response ${data}`);
        })
        .catch((error) => {
            
        });
}


function showRecord(id, name, isvegan, product) {
    
        let refRow = document.createElement("tr")
        let baker1 = document.createElement("td")
        let bakery2 = document.createElement("td")
        let bakery3 = document.createElement("td")
        let bakery4 = document.createElement("td")
          
        baker1.innerHTML = id
        bakery2.innerHTML = name  
        bakery3.innerHTML = isvegan
        bakery4.innerHTML = product
          
        refRow.appendChild(baker1)
        refRow.appendChild(bakery2)
        refRow.appendChild(bakery3)
        refRow.appendChild(bakery4)
          
        allBakeryTable.appendChild(refRow) 

        document.body.appendChild(allBakeryTable)
          
          }     
          


