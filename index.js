let input = 'Hi, Human'.toUpperCase();
const vowels = ['A','E','I','O','U','Y'];
let resultArray = [];

//  e , u doubles 


for(let i = 0; i < input.length ; i++){
    for(let vowel = 0; vowel < vowels.length; vowel ++){
        if(input[i] === vowels[vowel]){  
            if(vowels[vowel] === 'E'){
                resultArray.push('E' + 'E');
            }
            else if(vowels[vowel] === 'U'){
                resultArray.push('U' + 'U');
            }
            else {
                resultArray.push(vowels[vowel]);
            }
        }
    }
}

console.log(resultArray.join(''));