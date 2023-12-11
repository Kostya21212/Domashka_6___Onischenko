debugger
const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let maxNumber = numbers[0]
for( let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
         maxNumber = numbers[i]
    }
}
console.log('Максимальний елемент:', maxNumber)
positivElemSum = 0
positivElem = 0
for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]>0){
        positivElem++
     positivElemSum += numbers[i];
    }
}


negativeElemSum = 0
negativeElem = 0
for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]<0){
        negativeElem++
     negativeElemSum += numbers[i];
    }
}
negativeElementsSum = 0
elements = 0
for( let i = 0; i < numbers.length; i++){
    if(numbers[i]>0 && numbers[i] % 2 !==0){
        elements++
        negativeElementsSum += numbers[i]
    }
}
positivElementsSum = 0
positivElements = 0
for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i]>0 && numbers[i] % 2 === 0){
        positivElements++
        positivElementsSum += numbers[i]
    }
}
positivElementsAllMult = 1
for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]>0){
       
     positivElementsAllMult = positivElementsSum * negativeElementsSum ;
    }
}
alert(`Максимальний елемент: ${maxNumber},
      Кількість позитивних елементів:  ${positivElem},
      Cума позитивних елементів: ${positivElemSum},
      Кількість негативних елементів:${negativeElem},
      Сума негативних елементів: ${negativeElemSum},
      Кількість непарних позитивних елементів: ${elements},
      Кількість парних позитивних елементів: ${positivElements},
      Cума парних позитивних елементів: ${positivElementsSum},
      Сума непарних позитивних елементів: ${negativeElementsSum}
      Добуток позитивних елементів: ${positivElementsAllMult}`)