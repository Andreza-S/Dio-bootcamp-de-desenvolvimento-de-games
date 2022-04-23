function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const nums = [2,4,6,8,10];

console.log('Esse array contem os produtos -> ', mapSemThis( nums));

console.log('Esse array é o origem, não contem modificações -> ', nums);