var modal = document.getElementById("AcceptOrRefuse");
var btnTry = document.getElementById("just-for-try");
var span = document.getElementsByClassName("close")[0];

btnTry.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
