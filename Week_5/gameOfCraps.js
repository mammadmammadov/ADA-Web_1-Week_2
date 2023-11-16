function roll() {
    
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
  
    return die1 + die2;
  }
  
  function playCraps() {
  
    const comeOutRoll = roll();
  
    if (comeOutRoll === 7 || comeOutRoll === 11) {
      return true;
    }
  
    if (comeOutRoll === 2 || comeOutRoll === 3 || comeOutRoll === 12) {
      return false;
    }
  
  
    const point = comeOutRoll;
  
    
    while (true) {
      const roll = roll();
      if (roll === 7) {
        return false;
      }
      if (roll === point) {
        return true;
      }
    }
  }
  
  
  
  const numRounds = parseInt(prompt("Enter the number of rounds to play: "));
  
  let wins = 0;
  let losses = 0;
  for (let i = 0; i < numRounds; i++) {
  const result = playCraps();
  if (result) {
      wins++;
      } else {
        losses++;
      }
  }
  
    
  console.log("Wins:", wins);
  console.log("Losses:", losses);
  