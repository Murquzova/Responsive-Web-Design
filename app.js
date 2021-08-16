// const fotovverx = document.getElementById("forovverx");
const header = document.getElementById("header");
const twopage = document.getElementById("twopage");
const minifoto2 = document.querySelector(".minifoto2");
const weekly = document.querySelector(".weekly");

window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st > 60) {
    minifoto2.classList.add("sticky");
  }
  if (st > 600) {
    weekly.classList.add("sticky");
  }
});


// $('.slider12').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// });


$(".slider12").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1030, 
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 770, 
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});
















// const boxPerPage = 3;
// const boxes = document.getElementsByClassName("box");
// const pagination = document.getElementById("pagination");
// const totalPage = Math.ceil(boxes.length / boxPerPage);
// function deleteBoxes(a) {
//   for (let i = a; i < boxes.length; i++) {
//     boxes[i].classList.add("hide");
//   }
// }
// deleteBoxes(3);
// for (let i = 0; i < totalPage; i++) {
//   pagination.innerHTML += `<li onclick="goToPage(${i})"></li>`;
// }
// function goToPage(page) {
//   pagination
//     .querySelectorAll("li")
//     .forEach((a) => a.classList.remove("active"));
//   pagination.querySelectorAll("li")[page].classList.add("active");
//   deleteBoxes(0);
//   for (
//     let i = page * boxPerPage;
//     i < page * boxPerPage + boxPerPage && i < boxes.length;
//     i++
//   ) {
//     boxes[i].classList.remove("hide");
//   }
// }
// window.addEventListener("resize", function (e) {
// if(e.target.outerWidth<=425){
  
// }
// });

// const boxPerPage = 3;
// const boxes = document.getElementsByClassName("box");
// const pagination = document.getElementById("pagination");
// const totalPage = Math.ceil(boxes.length / boxPerPage);

// document.addEventListener("resize", init);
// function init() {
//   let query = window.matchMedia("(max-width:1024px)");
//   if (query.matches) {
//     function deleteBoxes(a) {
//       for (let i = a; i < boxes.length; i++) {
//         boxes[i].classList.add("hide");
//       }
//     }
//     deleteBoxes(3);
//     for (let i = 0; i < totalPage; i++) {
//       pagination.innerHTML += `<li onclick="goToPage(${i})"></li>`;
//     }
//     function goToPage(page) {
//       pagination
//         .querySelectorAll("li")
//         .forEach((a) => a.classList.remove("active"));
//       pagination.querySelectorAll("li")[page].classList.add("active");
//       deleteBoxes(0);
//       for (
//         let i = page * boxPerPage;
//         i < page * boxPerPage + boxPerPage && i < boxes.length;
//         i++
//       ) {
//         boxes[i].classList.remove("hide");
//       }
//     }
//   }
// }
const clickI = document.getElementById('clickI')
clickI.addEventListener('click', function () {
  document.getElementById("iframe").classList.add("hello")
  document.getElementById("footer").classList.add("footerNew")

 })
