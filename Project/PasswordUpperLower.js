function PasswordGenUpperLower(userInfo, upper){
    alert("Upper lower")
    var RandomPassword = [];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;
    if (num2 % 2 == 0 || num2 == 9) {
        if (num2 == 9){
            alert("In")
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random()* 25) + 1);
            RandomPassword.push(upper[random].toLowerCase());

            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random].toLowerCase());
        }
        else if (num2 == 7){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(upper[random].toLowerCase());
            RandomPassword.push(upper[random]);
        }
        while (RandomPasswordLength < num2){
            
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random].toLowerCase());
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random].toLowerCase());
            random = Math.floor((Math.random() * 25) + 1)
            RandomPassword.push(upper[random].toLowerCase()); 
            
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}