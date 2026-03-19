const keys = {};

document.addEventListener("keydown", e => {
    keys[e.key.toLowerCase()] = true;

    if (e.code === "Space") {
        player.gravityDir *= -1;
    }
});

document.addEventListener("keyup", e => {
    keys[e.key.toLowerCase()] = false;
});
