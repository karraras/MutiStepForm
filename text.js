let btns = document.querySelectorAll(".btn");
divs = document.querySelectorAll(".content > div");
document.querySelector(".one").classList.add("checked");

btns.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    divs.forEach((el) => {
      el.classList.remove("nex1");
      el.classList.remove("nex2");
      el.classList.remove("nex3");
      el.classList.remove("pre1");
      el.classList.remove("pre2");
      el.classList.remove("pre3");
    });
    divs.forEach((el) => {
      el.classList.add(e.target.dataset.btn);
    });
    if (e.target.dataset.btn == "pre2" || e.target.dataset.btn == "nex1") {
      document.querySelector(".two").classList.add("checked");
      document.querySelector(".three").classList.remove("checked");
    } else if (
      e.target.dataset.btn == "pre3" ||
      e.target.dataset.btn == "nex2"
    ) {
      document.querySelector(".three").classList.add("checked");
      document.querySelector(".four").classList.remove("checked");
    } else if (e.target.dataset.btn == "nex3") {
      document.querySelector(".four").classList.add("checked");
    } else if (e.target.dataset.btn == "pre1") {
      document.querySelector(".two").classList.remove("checked");
    }
  });
});

// if (e.target.dataset.btn == "pre2" || e.target.dataset.btn == "nex1") {
//   document.querySelector(".two").children[2].children[0].style.display =
//     "block";

//   document.querySelector(".three").children[2].children[0].style.display =
//     "none";
//   document.querySelector(".two").children[0].style.color = "#e91e63";
//   document.querySelector(".three").children[0].style.color = "black";
// } else if (
//   e.target.dataset.btn == "pre3" ||
//   e.target.dataset.btn == "nex2"
// ) {
//   document.querySelector(".three").children[2].children[0].style.display =
//     "block";
//   document.querySelector(".four").children[2].children[0].style.display =
//     "none";
//   document.querySelector(".three").children[0].style.color = "#e91e63";
//   document.querySelector(".four").children[0].style.color = "black";
// } else if (e.target.dataset.btn == "nex3") {
//   document.querySelector(".four").children[2].children[0].style.display =
//     "block";
//   document.querySelector(".four").children[0].style.color = "#e91e63";
// } else if (e.target.dataset.btn == "pre1") {
//   document.querySelector(".two").children[2].children[0].style.display =
//     "none";
//   document.querySelector(".two").children[0].style.color = "black";
// }
