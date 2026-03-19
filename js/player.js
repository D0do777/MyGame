const player = {
    x: 200,
    y: 500 - 32, // Commence juste au-dessus de la plateforme
    width: 32,
    height: 32,
    vx: 0,
    vy: 0,
    speed: 4,
    jump: 12,
    gravity: 0.6,
    gravityDir: 1,
    onGround: false,
    coins: 0
};

function updatePlayer() {
    player.onGround = false;

    if (keys["d"] || keys["arrowright"]) player.vx = player.speed;
    else if (keys["q"] || keys["arrowleft"]) player.vx = -player.speed;
    else player.vx = 0;

    player.vy += player.gravity * player.gravityDir;

    player.x += player.vx;
    player.y += player.vy;

    for (let p of platforms) {
        if (collision(player, p)) {
            if (player.gravityDir === 1) {
                player.y = p.y - player.height;
                player.vy = 0;
                player.onGround = true;
            } else {
                player.y = p.y + p.height;
                player.vy = 0;
                player.onGround = true;
            }
        }
    }
}
