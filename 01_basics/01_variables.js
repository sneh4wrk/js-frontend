const accountId = 12345
let account_email = "ab@cd.com";
var account_Password = "112233"
accountCity = "Gujarat"
let accountState;

// accountId = 2 //not allowed

account_email = "xy@z.com"
account_Password = "111222333"
accountCity = "jaipur"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, account_Password, account_email, accountCity, accountState]);
