function PasswordGenNoNum(userInfo, special, upper, lower){
    alert("No Num func")
    var RandomPassword = [];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;

    if (num2 % 4 == 0 || num2 == 9 || num2 == 6) {
        if (num2 == 9){
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
        }
        else if (num2 == 6){
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(upper[random]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
        }
        else if (num2 == 7){
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(upper[random]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]); 
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}