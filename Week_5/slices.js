function slices(string) {
    for (let i = 0; i < string.length; i++) {
      const part1 = string.slice(0, i);
      const part2 = string.slice(i);
      console.log(part1 + '_' + part2);
    }
  }
  
  const string = prompt("Enter String: ");
  slices(string);
  