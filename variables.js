const accountId = 144553
let accountEmail = "shukla@gmail.com"
var accountPassword = "12345"
accountCity = "Lakhimpur"

// accountId = 2 //not allowed

accountEmail = "as@gmail.com"
accountPassword = "1111"
accountCity = "Noida"
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//prefer not to use var beacuse of issue in block scope and functional scope