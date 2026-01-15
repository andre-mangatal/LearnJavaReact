let count = 0; // initialise count to 0

function increaseCount() {

    count++; // increment count by 1
    
    displayCount(); // display the count

    checkCountValue(); //check count value and display messages
}

function checkCountValue () {

    if (count === 10) {
        alert("your instagram post gained 10 follower! contrats");
    } else if (count === 20 ) {
        alert("your instagram post gain 20 follower! keep it up!");
    }
}


function displayCount() {

    document.getElementById('countDisplay').innerHTML=count; // display the count in the html
}