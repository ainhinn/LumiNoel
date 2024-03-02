var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<200 && blockLeft>-30 && characterTop >= 50){
        block.style.animation = "none";
        alert("Sau " +Math.floor(counter/100) +" lần thì Noelle đã chạm được vào Lumine rồi nè <3");
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);