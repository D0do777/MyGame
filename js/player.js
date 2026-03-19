let isInitialized = false;

function updatePlayer() {
    if (!isInitialized) {
        // Si c’est la première frame, on pose le joueur sur la plateforme et on stoppe la chute
        player.y = 500 - player.height;
        player.vy = 0;
        isInitialized = true;
    }

    player.onGround = false;

    if (keys["d"] || keys["arrowright"]) {
        player.vx = player.speed;
    } else if (keys["q"] || keys["arrowleft"]) {
        player.vx = -player.speed;
    } else {
        player.vx = 0;
    }

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
