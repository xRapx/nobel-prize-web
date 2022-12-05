var postAPI = "../data.json";
fetch(postAPI)
  .then(function (response) {
    // console.log(response);
    return response.json(); //return về 1 mảng chứa Object và javacript types
  })
  .then((data) => {
  //  console.log(data)
    // ------------------------Nav menu --------------------------
    document.getElementById("chem").onclick = function () {
      var table = "";
      let getChemistry = data.filter((data) => {
        if (data.nganh === "Chemistry") {
          table += `<td style="display: inline-block;">
          <figure class="snip1354 green">
          <img style="width:250px;" src="${data.image}" />
          <img src="${data.image}"/>
          <figcaption>
            <h3>${data.name}<span>${data.nganh}</span></h3>
            <p>${data.year} ${data.data}</p>
          </figcaption><a href="#"></a>
          </figure>
          </td><br>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("lit").onclick = function () {
      var table = "";
      let getLiterature = data.filter((data) => {
        if (data.nganh === "Literature") {
          table += `<td style="display: inline-block;">
          <figure class="snip1354 green">
          <img style="width:250px;" src="${data.image}" />
          <img src="${data.image}"/>
          <figcaption>
            <h3>${data.name}<span>${data.nganh}</span></h3>
            <p>${data.year} ${data.data}</p>
          </figcaption><a href="#"></a>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("medi").onclick = function () {
      var table = "";
      let getMedicine = data.filter((data) => {
        if (data.nganh === "Medicine") {
          table += `<td  style="display: inline-block;">
          <figure class="snip1354 green">
          <img style="width:250px;" src="${data.image}" />
          <img src="${data.image}"/>
          <figcaption>
            <h3>${data.name}<span>${data.nganh}</span></h3>
            <p>${data.year} ${data.data}</p>
          </figcaption><a href="#"></a>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("pea").onclick = function () {
      var table = "";
      let getPeace = data.filter((data) => {
        if (data.nganh === "Peace") {
          table += `<td style="display: inline-block;">
          <figure class="snip1354 green">
          <img style="width:250px;" src="${data.image}" />
          <img src="${data.image}"/>
          <figcaption>
            <h3>${data.name}<span>${data.nganh}</span></h3>
            <p>${data.year} ${data.data}</p>
          </figcaption><a href="#"></a>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("phy").onclick = function () {
      var table = "";
      let getPhysic = data.filter((data) => {
        if (data.nganh === "Physic") {
          table += `<td style="display: inline-block;">
          <figure class="snip1354 green">
          <img style="width:250px;" src="${data.image}" />
          <img src="${data.image}"/>
          <figcaption>
            <h3>${data.name}<span>${data.nganh}</span></h3>
            <p>${data.year} ${data.data}</p>
          </figcaption><a href="#"></a>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

  // -----------------------Select Year-----------------------
    document.getElementById("all").onclick = function () {
      var table = "";
      let getAll = data.filter((data) => {
        table += `<td style="display: inline-block;">
        <figure class="snip1376">
          <img style="width: 183px;" src="${data.image}" />
        <figcaption>
          <h2>${data.name}</h2>
          <p>${data.nganh} ${data.prize} ${data.year} ${data.data}</p>
          <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
          <a href="#"> <i class="ion-social-twitter-outline"></i></a>
          <a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
        </figcaption>
        </figure></td>`
        document.getElementById("myTable").innerHTML = table
      })
    };
    document.getElementById("2021").onclick = function () {
      var table = "";
      let getYear2021 = data.filter((data) => {
        if (data.year === 2021) {
          table += `<td style="display: inline-block;">
          <figure class="snip1376">
            <img style="width: 183px;" src="${data.image}" />
          <figcaption>
            <h2>${data.name}</h2>
            <p>${data.nganh} ${data.prize} ${data.year} ${data.data}</p>
            <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
            <a href="#"> <i class="ion-social-twitter-outline"></i></a>
            <a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
          </figcaption>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2020").onclick = function () {
      var table = "";
      let getYear2020 = data.filter((data) => {
        if (data.year === 2020) {
          table += `<td style="display: inline-block;">
          <figure class="snip1376">
            <img style="width: 183px;" src="${data.image}" />
          <figcaption>
            <h2>${data.name}</h2>
            <p>${data.nganh} ${data.prize} ${data.year} ${data.data}</p>
            <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
            <a href="#"> <i class="ion-social-twitter-outline"></i></a>
            <a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
          </figcaption>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2019").onclick = function () {
      var table = "";
      let getYear2019 = data.filter((data) => {
        if (data.year === 2019) {
          table += `<td style="display: inline-block;">
          <figure class="snip1376">
            <img style="width: 183px;" src="${data.image}" />
          <figcaption>
            <h2>${data.name}</h2>
            <p>${data.nganh} ${data.prize} ${data.year} ${data.data}</p>
            <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
            <a href="#"> <i class="ion-social-twitter-outline"></i></a>
            <a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
          </figcaption>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };

    document.getElementById("2018").onclick = function () {
      var table = "";
      let getYear2018 = data.filter((data) => {
        if (data.year === 2018) {
          table += `<td style="display: inline-block;">
          <figure class="snip1376">
            <img style="width: 183px;" src="${data.image}" />
          <figcaption>
            <h2>${data.name}</h2>
            <p>${data.nganh} ${data.prize} ${data.year} ${data.data}</p>
            <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
            <a href="#"> <i class="ion-social-twitter-outline"></i></a>
            <a href="#"> <i class="ion-social-vimeo-outline"></i></a></div>
          </figcaption>
          </figure></td>`
        }
        document.getElementById("myTable").innerHTML = table
      })
    };
  });
  
  