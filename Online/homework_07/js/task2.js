while (true) {
    let game = true,
        attempt = 3,
        total_win = 0,
        prize = 10,
        random_number = 0,
        user_number = 0,
        min = 0,
        max = 5;
    game = confirm('Do you want to play?');
    if (game) {
        random_number = Math.floor(Math.random() * (max - min)) + min;
    } else {
        console.log('You did not become a millionaire!');
        break;
    }
    while (attempt > 0) {
        user_number = +prompt('Enter a number from 0 to ' + max + '\nAttempts left: ' + attempt + '\nTotal prise: ' + total_win + '\nPossible prize on current attempt ' + prize);
        if (user_number !== random_number) {
            prize = Math.floor(prize / 2);
			attempt--;
            continue;
        }
        game = confirm('You win! Do you want to continue a game?');
        if (!game) {
			total_win += prize;
            break;
        }
		total_win += prize;
		attempt = 3;
		max *= 2;
		prize *= 3;
        random_number = Math.floor(Math.random() * (max - min)) + min;
    }
    console.log('Thank you for your game. Your prize is ' + total_win); 
}