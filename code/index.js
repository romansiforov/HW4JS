document.write(`Task 1 <br> Напиши функцію map(fn, array), яка приймає на вхід функцію і масив [1,3,4,5,6,7,23,12,345], 
і обробляє кожен елемент масиву цією функцією, повертаючи новий масив з взведеним у квардат кожним елементом масву.
<br>`);


let array =  [1,3,4,5,6,7,23,12,345];

function map (fn, array) {
    return array = fn(array);
}


function fn(array) {
    for( let i = 0; i < array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}

document.write(`Old array ${array} <br>`);

array = map(fn, array);

document.write(`New array ${array} <br><br><br>`);