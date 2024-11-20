const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// Set the maximum distance for the shadow effect
const walk = 500; // 500px

const applyShadowEffect = e => {
    // Get the width and height of the hero element
    const { offsetWidth: width, offsetHeight: height } = hero;
    // Get the cursor's offset within the hero element
    let { offsetX: x, offsetY: y } = e;
    // Adjust for when the event target is not the hero itself (e.g., a child element)
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // Calculate the shadow movement (x and y offsets)
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    // Apply a multi-colored text-shadow effect to the text
    // blue shadow -> white shadow (opposite X) -> red shadow (opposite Y) -> yellow shadow
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 #35A7FF,
        ${xWalk * -1}px ${yWalk}px 0 #FFFFFF,
        ${yWalk}px ${xWalk * -1}px 0 #FF5964,
        ${yWalk * -1}px ${xWalk}px 0 #FFE74C
    `;
};

hero.addEventListener('mousemove', applyShadowEffect);
