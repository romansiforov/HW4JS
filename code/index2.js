document.write(`Перепишіть функцію, використовуючи оператор '?' або '||'.
Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить запитання confirm і повертає його результат.
1	function checkAge(age) {
2	if (age > 18) {
3	return true;
4	} else {
5	return confirm('Родители разрешили?');
6	} }<br>`);

let age = 18;

function checkAge(age) {
    if (age > 18) {
        return true;

    } else {
        return confirm('Родители разрешили?');

    }
}


document.write(`Function with tern oper <br>`);

function checkAgeUpdatedWithTernOperator(age) {
   return age > 18 ? true : confirm('Родители разрешили?');
}

document.write(`${checkAgeUpdatedWithTernOperator(age)}<br>`);

age=19

document.write(`${checkAgeUpdatedWithTernOperator(age)}<br>`);

document.write(`Function with OR <br>`);

function checkAgeUpdatedWithOr(age) {
    if (age < 18 || age == 18) {
        return confirm('Родители разрешили?');

    } else {
        return true;
    }
}

age = 18;

document.write(`${checkAgeUpdatedWithOr(age)}<br>`);

age=17;

document.write(`${checkAgeUpdatedWithOr(age)}<br>`);

age=19;

document.write(`${checkAgeUpdatedWithOr(age)}<br>`);