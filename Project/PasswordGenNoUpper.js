function PasswordGenNoUpper(userInfo, special, num, lower){
    alert("Hello")
    var RandomPassword = [];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;

    if (num2 % 4 == 0 || num2 == 9 || num2 == 6) {
        if (num2 == 9){
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
        }
        else if (num2 == 6){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            RandomPassword.push(num[Math.floor((Math.random() * 9) + 1)]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[Math.floor((Math.random() * 9) + 1)]);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[Math.floor((Math.random() * 9) + 1)]);
        }
        else if (num2 == 7){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(num[Math.floor((Math.random() * 9) + 1)]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[Math.floor((Math.random() * 25) + 1)]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[Math.floor((Math.random() * 9) + 1)]);
            
            RandomPassword.push(special[Math.floor((Math.random() * 6) + 1)]); 
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}