debugger
const numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let maxNumber = numbers[0]
let  maxNumberIndex = 0
for( let i = 1; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
         maxNumber = numbers[i]
         maxNumberIndex = i
    }
}
console.log('Максимальний елемент:', maxNumber)
let positivElemSum = 0
let positivElem = 0

for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]>0){
        positivElem++
     positivElemSum += numbers[i];
     
    }
}


let unpairedNegativeElemSum = 0
let unpairedNegativeElem = 0
for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]<0){
        unpairedNegativeElem++
        unpairedNegativeElemSum += numbers[i];
    }
}
let unpairedPositivSum = 0

let unpairedPositivElements = 0
for( let i = 0; i < numbers.length; i++){
    if(numbers[i]>0 && numbers[i] % 2 !==0){
        
        unpairedPositivElements++
        unpairedPositivSum += numbers[i]
    }
}
let evenPositivSum = 0
let evenPositivElements = 0
for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i]>0 && numbers[i] % 2 === 0){
        evenPositivElements++
        evenPositivSum += numbers[i]
    }
}
let positivElementsAllMult = 1
for( let i= 0;  i < numbers.length; i++){
    if(numbers[i]>0){

     positivElementsAllMult *= numbers[i] ;
    }
}
alert(`Максимальний елемент: ${maxNumber}, 
      Індекс максимального числа ${maxNumberIndex},
      Кількість позитивних елементів:  ${positivElem},
      Cума позитивних елементів: ${positivElemSum},
      Кількість негативних елементів:${unpairedNegativeElem},
      Кількість непарних позитивних елементів: ${unpairedPositivElements},
      Кількість парних позитивних елементів: ${evenPositivElements},
      Cума парних позитивних елементів: ${evenPositivSum},
      Сума непарних позитивних елементів: ${unpairedPositivSum}
      Добуток позитивних елементів: ${positivElementsAllMult}`)