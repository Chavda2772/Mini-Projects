const res = document.querySelector(".res p");

document.getElementById("local").addEventListener("click", getLocalText);
document.getElementById("json").addEventListener("click", getLocalJSON);
document.getElementById("api").addEventListener("click", getJsonApi);

function getLocalText() {
  fetch("data/data.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (response) {
      res.innerHTML = response;
    })
    .catch(function (error) {
      res.innerHTML = `REQUEST ERROR : ${error}`;
    });
}

function getLocalJSON() {
  fetch("data/jsonData.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //replace(/blue/g, "red");
      res.innerHTML = JSON.stringify(data).replace(/},/g, "},<br />");
    })
    .catch(function (error) {
      res.innerHTML = `REQUEST ERROR : ${error}`;
    });
}

function getJsonApi() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //replace(/blue/g, "red");
      res.innerHTML = JSON.stringify(data).replace(/'},'/g, "red");
    })
    .catch(function (error) {
      res.innerHTML = `REQUEST ERROR : ${error}`;
    });
}
