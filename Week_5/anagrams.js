function anagram(string_1, string_2) {
    if(string_1.length!=string_2.length){
        return false;
    }

    else if(string_1.split('').sort().join('')===string_2.split('').sort().join('')){
        return true;
    }
    return false;
}

const string1 = prompt("Enter string 1: ");
const string2 = prompt("Enter string 2: ");

console.log(anagram(string1, string2)); 