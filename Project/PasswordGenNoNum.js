function PasswordGenNoNum(userInfo, special, upper, lower){
    var RandomPassword = [];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;

    if (num2 % 4 == 0 || num2 == 9 || num2 == 6) {
        if (num2 == 9){
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
        }
        else if (num2 == 6){
            
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
        }
        while (RandomPasswordLength < num2){
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            StringPassword = RandomPassword.join('');
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
        }
        else if (num2 == 7){
            
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
        }
        while (RandomPasswordLength < num2){

            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(upper[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]); 
            StringPassword = RandomPassword.join('');
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}