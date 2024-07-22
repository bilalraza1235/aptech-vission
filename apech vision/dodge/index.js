let color = document.querySelector(".color");
let car = document.querySelector(".car");
// let block = document.querySelector(".block");

// for (let i = 0; i < block.clientHeight; i++) {
//     block[i].addeventlistener("click", () => {
//         let colorblock = window.getComputedStyle(block[i]).backgroundcolor;
//         car.computedStyleMap.background = colorblaock;
//         car.computedStyleMap.animation = "none";
//     })
// }

color.addEventListener("input", () => {
    car.computedStyleMap.background = colorvalue;
    // car.computedStyleMap.animation = "none";
})
