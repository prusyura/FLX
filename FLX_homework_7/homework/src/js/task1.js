
    let user = prompt("Plese enter your Login");
    if(user.length < 4) {
        (alert("I don't know any users having name length less than 4 symbols"));
    }else if(user === ""){
        (alert("Canceled"));
    }else if(!user === "User"|| !user === "Admin"){
        (alert("I don’t know you"));
    }else if(user === "User"|| user === "Admin"){
        let password = prompt("Plese enter your Password");
        if(password === ""){
            (alert("Canceled"));
        }else if(user === "User" && password === "UserPass"|| user === "Admin" && password === "RootPass"){
            let localTime = new Date().getHours();
            if(user === "User"){
                if(localTime < 20){
                    (alert("Good day, dear User!"));
                }else{
                    (alert("Good evening, dear User!"));
                }
            }else{
                if(localTime < 20){
                    (alert("Good day, dear Admin!"));
                }else{
                    (alert("Good evening, dear Admin!"));
                }
            }
        }else{
            alert("Wrong password");
        }
    }

