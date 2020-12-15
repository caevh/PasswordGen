function PasswordGenUpperLower(userInfo, upper){
    var RandomPassword = [];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;
    if (num2 % 2 == 0 || num2 == 9) {
        if (num2 == 9){

            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
        }
        while (RandomPasswordLength < num2){
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());
            StringPassword = RandomPassword.join('');
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());
        }
        else if (num2 == 7){
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
        }
        while (RandomPasswordLength < num2){           
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)].toLowerCase());         
            StringPassword = RandomPassword.join('');
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}