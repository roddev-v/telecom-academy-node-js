const numbers = [1, 3, 5, 10, 100, 244, 533, 999, 56];

// [{value: 1, even: false}, ..., {value: 10, even: true}]

function checkNumbers(nums) {
    const results = [];

    for(let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        const isEven = current % 2 === 0;
        const res = {value: current, even: isEven};
        results.push(res);
    }

    console.log(results);
}

checkNumbers(numbers);