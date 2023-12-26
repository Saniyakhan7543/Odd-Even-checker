

    function num(){
        let a=Number(document.getElementById("first").value);
        //check if the number is even
            if(a % 2 == 0) {
                document.getElementById("number").innerHTML= "even";
            }

        // if the number is odd
            else {
                document.getElementById("number").innerHTML= "odd";
            }
        
        }