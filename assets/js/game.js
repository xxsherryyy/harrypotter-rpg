$(document).ready(function() {
    
    var characterChosen;
    var enemyChosen;
    var defeated;

    var select = false;
    var cselected = false;
    var eselected = false;

   
    var harry = {
        hp: 1000,
        ap: 50,
        ca: 50,
    };

    var hermione = {
        hp: 800,
        ap: 60,
        ca: 70,
    };

    var ron = {
        hp: 1200,
        ap: 50,
        ca: 70,
    };
    
    // $(".harry").click(function() {
    //     alert("You've chosen Harry");
    //     harryCounter ++;
        
    // })
    
     

    $("#harry").click(function(){
    if (cselected === false) {
        $("#harry").appendTo("#character");
        characterChosen = harry;
        cselected = true;
        display();
    }
    else if (eselected === false) {
        $("#harry").appendTo("#enemy");
        enemyChosen = harry;
        eselected = true;
        display();}
    });

    $("#ron").click(function(){
    if  (cselected === false) {
        $("#ron").appendTo("#character");
        characterChosen = ron;
        cselected = true;
        display();
    }
    else if (eselected === false) {
        $("#ron").appendTo("#enemy");
        enemyChosen = ron;
        eselected = true;
        display();}
    });

    $("#hermione").click(function(){
    if (cselected === false){
        $("#hermione").appendTo("#character");
        characterChosen = hermione;
        cselected = true;
        display();
    }
    else if (eselected === false){
        $("#hermione").appendTo("#enemy");
        enemyChosen = hermione;
        eselected = true;
        display();}
    });


   
    
    function display() {
      
        $('#harstats').html("<div>" + "health: " + harry.hp + "</div>" + "<div>" + "attack: " + harry.ap + "</div>" + "<div>" + "counter: " + harry.ca + "</div>");
        
        $('#herstats').html("<div>" + "health: " + hermione.hp + "</div>" + "<div>" + "attack: " + hermione.ap + "</div>" + "<div>" + "counter: " + hermione.ca + "</div>");
        
        $('#ronstats').html("<div>" + "health: " + ron.hp + "</div>" + "<div>" + "attack: " + ron.ap + "</div>" + "<div>" + "counter: " + ron.ca + "</div>");
    };
    
    display();
    
    $(".attack").click(function(){
        display();
        console.log(characterChosen.hp = (characterChosen.hp - enemyChosen.ca));
        console.log(characterChosen.ap = (characterChosen.ap + 5));
        console.log(enemyChosen.hp = (enemyChosen.hp - characterChosen.ca));
        console.log(enemyChosen.ap = (enemyChosen.ap + 5));
        display();
        if (characterChosen.hp <= 0) {
            alert("Game over!")
        }
        else if (enemyChosen.hp <= 0) {
             alert("YOU WON!");
             enemyChosen = false;
             console.log(enemyChosen);
        };
         
    });
    });