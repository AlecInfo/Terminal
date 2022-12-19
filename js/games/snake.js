function play_snake() {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      // Initialize variables
        const ctx = canvas.getContext('2d');
        let snake = [{x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}];
        let dx = 10;
        let dy = 0;
        let food = {x: 300, y: 300};
    
        // Draw the snake on the canvas
        function drawSnake() {
        snake.forEach(drawSnakePart);
        }
    
        // Draw a single part of the snake on the canvas
        function drawSnakePart(snakePart) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokestyle = 'darkgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        }
    
        // Draw the food on the canvas
        function drawFood() {
        ctx.fillStyle = 'red';
        ctx.strokestyle = 'darkred';
        ctx.fillRect(food.x, food.y, 10, 10);
        ctx.strokeRect(food.x, food.y, 10, 10);
        }
    
        // Advance the snake in the current direction
        function advanceSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const didEatFood = snake[0].x === food.x && snake[0].y === food.y;
        if (didEatFood) {
            // Generate new food location
            food = {x: getRandomInt(0, canvas.width - 10), y: getRandomInt(0, canvas.height - 10)};
        } else {
            snake.pop();
        }
        }
    
        // Generate a random integer between min and max (inclusive)
        function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        // Change the direction of the snake based on the user's input
        document.addEventListener('keydown', changeDirection);
    
        function changeDirection(event) {
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;
    
        const keyPressed = event.keyCode;
        const goingUp = dy === -10;
        const goingDown = dy === 10;
        const goingRight = dx === 10;
        const goingLeft = dx === -10;
    
        if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -10;
            dy = 0;
        }
        if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;
            dy = -10;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 10;
            dy = 0;
        }
        if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;
            dy = 10;
        }
        }
    
        // Check if the snake has collided with a wall or itself
        function didGameEnd() {
        for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
        const hitLeftWall = snake[0].x < 0;
        const hitRightWall = snake[0].x > canvas.width - 10;
        const hitToptWall = snake[0].y < 0;
        const hitBottomWall = snake[0].y > canvas.height - 10;
        return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
        }
    
        // Main game loop
        function main() {
        if (didGameEnd()) return;
        setTimeout(function onTick() {
            advanceSnake();
            draw();
            main();
        }, 100);
        }
    
        // Draw everything on the canvas
        function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFood();
        drawSnake();
        }
    
        // Start the game
        main();
    } else {
      // L'élément canvas n'existe pas, affichez un message d'erreur ou faites quelque chose d'autre
      console.error('L\'élément canvas avec l\'ID "canvas" n\'existe pas');
    }
  }

  
// Associez la fonction play_snake à l'événement "click" du lien "Snake"
//document.getElementById('play_snake').addEventListener('click', play_snake);





