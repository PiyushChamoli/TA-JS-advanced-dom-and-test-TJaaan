const {fullName,isPalindrome,getCircumference,getArea} = require('./index');

test("firstName plus lastName to equal fullName", () => {
    expect(fullName('Piyush','Chamoli')).toBe('Piyush Chamoli');
})

test("firstName plus lastName to equal fullName", () => {
    expect(fullName('Piyush','Chamoli')).not.toBe('PiyushChamoli');
})

test("string to be palindrome", () => {
    expect(isPalindrome('dad')).toBe(true);
})

test("string to be palindrome", () => {
    expect(isPalindrome('mom')).not.toBe(false);
})

