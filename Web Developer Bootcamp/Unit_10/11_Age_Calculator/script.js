var age = prompt('How old are you?');

var ageDays = age * 365;

var leapYears = age / 4;

var leapDays = leapYears + ageDays;

alert(age + ' years is roughly ' + leapDays + ' days.');
