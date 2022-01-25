function fullName (fn,ln) {
    return `${fn} ${ln}`;
}

function isPalindrome (str) {
    let revStr = str.split('');
    return revStr.reverse().join('') == str;
}

function getCircumference (r) {
    return `The circumference of circle is ${2*3.14*r}`;
}

function getArea (r) {
    return `Area of the circle is ${3.14*r*r}`;
}

module.exports = {
    fullName,
    isPalindrome,
    getCircumference,
    getArea,
};