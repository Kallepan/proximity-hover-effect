const anchor = document.getElementById('eyes');
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${100 + angleDeg}deg)`
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx); // range (-PI, PI]
    const deg = rad * 180 / Math.PI; // rads to degs, range (-180, 180]

    return deg;
}