let text = "How many roses did I get for Valentine's?";
let i=0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#question").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type()



//Access to Input and Button
const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

//Make ENTER a confirmation button
input.addEventListener("keypress", function(e){
    if (e.keyCode === 13)
    play();
})
button.addEventListener("click", play);

//1.Access to user's number
//2.Limit input values to 1-20
//3. Limit input to digits
function play(){
const userNumber = document.querySelector("#guess").value;
if (userNumber <1 || userNumber > 20){
    Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: 'It can only be roses, between 1 and 20',
        
    })
    }


else if (isNaN(userNumber)) {
    Swal.fire({
        icon: 'error',
        title: 'Sorry...',
        text: 'Try to guess a number',

    })
}

else {
    if (userNumber > answer) {
        Swal.fire('Too many roses', 'My Valentine is too generous!')
    }
            
    else if (userNumber < answer) {
        Swal.fire('Not enough roses', 'My Valentine is too greedy!')
    }
    else {
        Swal.fire({
            title: 'Your guess is right!',
            imageUrl: 'https://images.unsplash.com/photo-1585768750637-ada36319a484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
        })
    }
}
    }