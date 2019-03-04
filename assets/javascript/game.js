 $(document).ready(function(){
    var Random=Math.floor(Math.random()*102+19)
    $("#scoreToMatch").text(Random);

    var num1=Math.floor(Math.random()*12+1)
    var num2=Math.floor(Math.random()*12+1)
    var num3=Math.floor(Math.random()*12+1)
    var num4=Math.floor(Math.random()*12+1)

    var total=0;
    var wins= 0;
    var losses =0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    function reset(){
    Random=Math.floor(Math.random()*102+19);
    console.log(Random)
    $("#scoreToMatch").text(Random);
    num1=Math.floor(Math.random()*12+1);
    num2=Math.floor(Math.random()*12+1);
    num3=Math.floor(Math.random()*12+1);
    num4=Math.floor(Math.random()*12+1);
    total= 0;
    $("#totalScore").text(total);
    }

    function winner(){
        alert("Congratulations, you won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function loser(){
        alert("Sorry, you lose!");
        losses ++;
        $("#losses").text(losses);
        reset()
    }

    $(".purple").on("click",function(){
        total=total + num1;
        console.log("New total=" +total);
        $("#totalScore").text(total);
        if(total == Random){
            winner();
        }
        else if(total>Random){
            loser();
        }
    })

    $(".blue").on("click", function(){
        total=total + num2;
        console.log("New total=" + total);
        $("#totalScore").text(total);
        if(total == Random){
            winner();
        }
        else if(total>Random){
            loser();
        }
    })

    $(".green").on("click", function(){
        total=total + num3;
        console.log("New total=" + total);
        $("#totalScore").text(total);
        if(total == Random){
            winner();
        }
        else if(total>Random){
            loser();
        }
    })

    $(".water").on("click", function(){
        total=total + num4;
        console.log("New total=" + total);
        $("#totalScore").text(total);
        if(total == Random){
            winner();
        }
        else if(total>Random){
            loser();
        }
    });





    

});