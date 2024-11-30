document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let one = document.querySelector("#one");
  let two = document.querySelector("#two");
  let three = document.querySelector("#three");
  let all = document.querySelector("#all");
  let add = document.querySelector("#add");

  let search = document.querySelector("#search");
  (async function () {
    try {
      let response = await fetch("https://fakestoreapi.in/api/products");
      let products = await response.json();
      let name = await products.products;
      console.log(name);
      console.log(response.status);
      console.log(products);

      if (!response.ok) throw new Error("Xatolik");

      name.forEach((product) => {
        let card = document.createElement("div");

        card.innerHTML = `
        
        <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 80px 50px 25px 20px ">
    <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Id:${product.id}</li>
          <li class="list-group-item">Model:${product.model}</li>
       
           <li class="list-group-item">Color:${product.color}</li>
    </ul>
    <div class="card-body">
   <h4>${product.model}</h4>
     <button class="bg-primary" id="btn">delete</button>
    </div>
  </div>
        
        `;
        container.append(card);

        let btn = card.querySelector("#btn");
        btn.addEventListener("click", () => {
          fetch(`https://fakestoreapi.in/api/products/${product.id}`, {
            method: "DELETE",
          }).then((response) => {
            if (response.ok) {
              card.remove();
              console.log(response);
            } else {
              throw new Error("Xatolik");
            }
          });
        });
        /////////////////////////////////////////////////////////////////////////
      });
    } catch (err) {
      console.log("xatolik", err);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    try {
      let datas = await fetch("https://fakestoreapi.in/api/products?limit=5");
      let data = await datas.json();
      let name5 = await data.products;
      one.addEventListener("click", () => {
        container.innerHTML = "";
        name5.forEach((product) => {
          let card = document.createElement("div");
          card.innerHTML = `
      
        <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
    <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Id:${product.id}</li>
          <li class="list-group-item">Model:${product.model}</li>
       
           <li class="list-group-item">Color:${product.color}</li>
    </ul>
    <div class="card-body">
   <h4>${product.model}</h4>
    </div>
  </div>
        
        `;

          container.append(card);
        });
      });
    } catch (err) {
      console.log("xatolik", err);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////

    try {
      let two2 = await fetch("https://fakestoreapi.in/api/products?limit=7");
      let datatwo = await two2.json();
      let name7 = await datatwo.products;
      two.addEventListener("click", () => {
        container.innerHTML = "";
        name7.forEach((product) => {
          let card = document.createElement("div");

          card.innerHTML = `
      
      <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
  <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Id:${product.id}</li>
        <li class="list-group-item">Model:${product.model}</li>
     
         <li class="list-group-item">Color:${product.color}</li>
  </ul>
  <div class="card-body">
 <h4>${product.model}</h4>
  </div>
</div>
      
      `;
          container.append(card);
        });
      });
    } catch (error) {
      console.log("xatolik", error);
    }
    ///////////////////////////////////////////////////////////////////////////////////////

    try {
      let sri = await fetch("https://fakestoreapi.in/api/products?limit=9");
      let datasri = await sri.json();
      let name9 = await datasri.products;
      three.addEventListener("click", () => {
        container.innerHTML = "";
        name9.forEach((product) => {
          let card = document.createElement("div");

          card.innerHTML = `
      
        <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
    <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Id:${product.id}</li>
          <li class="list-group-item">Model:${product.model}</li>
       
           <li class="list-group-item">Color:${product.color}</li>
    </ul>
    <div class="card-body">
   <h4>${product.model}</h4>
    </div>
  </div>
        
        `;
          container.append(card);
        });

        //location.replace("product.html");//bu ham mumkin
      });
    } catch (error) {
      console.log("xatolik", error);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    try {
      let alll = await fetch("https://fakestoreapi.in/api/products");
      let dataall = await alll.json();
      let nameall = await dataall.products;
      all.addEventListener("click", () => {
        container.innerHTML = "";
        nameall.forEach((product) => {
          let card = document.createElement("div");

          card.innerHTML = `
      
        <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
    <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Id:${product.id}</li>
          <li class="list-group-item">Model:${product.model}</li>
       
           <li class="list-group-item">Color:${product.color}</li>
    </ul>
    <div class="card-body">
   <h4>${product.model}</h4>
    </div>
  </div>
        
        `;

          container.append(card);
        });
      });
    } catch (error) {
      console.log("xatolik", error);
    }

    //////////////////////////////////////////////////

    search.addEventListener("keydown", async function (e) {
      console.log(e.key === "Enter");
      let searchText = search.value;
      try {
        container.innerHTML = "";
        let response = await fetch("https://fakestoreapi.in/api/products");
        let data = await response.json();
        let datas = await data.products;
        let filter = datas.filter(
          (val) => val.title.toLowerCase().includes(searchText.toLowerCase())
          // val.title.toLowerCase().includes(searchText.toLowerCase()) ||
          // val.description.toLowerCase().includes(searchText.toLowerCase())
        );

        filter.forEach((product) => {
          let card = document.createElement("div");

          card.innerHTML = `
 <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
    <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.description}</p>
    </div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item">Id:${product.id}</li>
          <li class="list-group-item">Model:${product.model}</li>

           <li class="list-group-item">Color:${product.color}</li>
    </ul>
    <div class="card-body">
   <h4>${product.model}</h4>
 
    </div>
  </div>

            `;
          container.append(card);
        });
      } catch (error) {
        console.log("xatolik", error);
      }
    });

    // add.addEventListener("click", function () {
    //   // let title = prompt("title");
    //   // let brand = prompt("brand");
    //   // let model = prompt("model");
    //   // let color = prompt("color");
    //   //////////////////////////////////
    //   // let category = prompt("category");
    //   // let price = prompt("price");
    //   // let description = prompt("description");
    //   // let image = prompt("image");
    //   // let rating = prompt("rating");

    //   fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       title: "Apple Vision Pro",
    //       brand: "Apple",
    //       model: "Apple vision pro First Gen",
    //       color: "Black",
    //       category: "appliances",
    //       discount: 1,
    //     }),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((product) => {
    //       console.log(product);
    //       let card = document.createElement("div");
    //       card.innerHTML = `
    //       <div class="card" style=" width: 23rem; height:1100px;display: grid;grid-template-rows:250px 675px 100px 50px 25px ">
    //          <img style="height:250px" src="" class="card-img-top" alt="...">
    //          <div class="card-body">
    //            <h5 class="card-title">${product.status}</h5>
    //            <p class="card-text">${product.description}</p>
    //          </div>
    //          <ul class="list-group list-group-flush">
    //           <li class="list-group-item">Id:${product.id}</li>
    //                <li class="list-group-item">Model:${product.model}</li>

    //                 <li class="list-group-item">Color:${product.color}</li>
    //          </ul>
    //          <div class="card-body">
    //         <h4>${product.model}</h4>

    //          </div>
    //        </div>

    //                  `;
    //       container.append(card);
    //     })

    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
  })();

  // let one = document.querySelector("#one");

  // one.addEventListener("click", async function () {
  //   container.innerHTML = "";
  //   let response = await fetch("https://fakestoreapi.com/products?limit=5");
  //   let data = await response.json();
  //   data.forEach((product) => {
  //     console.log(product);
  //     let card1 = document.createElement("div");
  //     console.log(data);
  //     card1.innerHTML = `

  //     <div class="card" style=" width: 21rem; height:1025px;display: grid;grid-template-rows:250px 600px 100px ">
  // <img style="height:250px" src="${product.image}" class="card-img-top" alt="...">
  // <div class="card-body">
  //   <h5 class="card-title">${product.title}</h5>
  //   <p class="card-text">${product.description}</p>
  // </div>
  // <ul class="list-group list-group-flush">
  //   <li class="list-group-item">Rate:${product.rating.rate}</li>
  //   <li class="list-group-item">Count:${product.rating.count}</li>
  //   <li class="list-group-item">Price:${product.price}</li>
  // </ul>
  // <div class="card-body">
  // <h2>${product.category}</h2>
  // </div>
  // </div>

  //     `;
  //     container.append(card1);
  //   });
  // });
});
