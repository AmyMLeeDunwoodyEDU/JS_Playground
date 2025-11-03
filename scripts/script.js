// before going into this, open the console for challenge completion verification.

console.log("Script loaded!");

function moveTheThing(){

    // declaration of variables

    const theThing = document.getElementById("theThing"); // cake
    const leftBlock = document.getElementById("leftBlock"); // left block
    const rightBlock = document.getElementById("rightBlock"); // right block

    // the if and else if statements check for the cake's location.
    
    if (leftBlock.contains(theThing)){
            rightBlock.prepend(theThing); // move cake to the right
            console.log("The Cake has been moved to the right."); // verification that this works
        }
    
    else if (rightBlock.contains(theThing)){
            leftBlock.prepend(theThing); // move cake to the left
            console.log("The Cake has been moved to the left."); // verification that this works
        }
    }

function styleTheText(){
    
    // most of this is declaration of variables lmfaoooooooo...

    // when the button is clicked, change the font of the text.

    // using the hexadecimal system to create randomized colors by the length of string and the hashtag is concatenated later.
    var hexadecimals = '0123456789ABCDEF';
    var color = '#';

    // creating a range of potential text sizes from small to large
    var minSize = 30;
    var maxSize = 50;

    // list of fonts that can be randomized
    const fonts = ["Arial", "Helvetica", "Verdana", "Calibri", "Noto", "Lucida Sans", "Gill Sans", "Century Gothic", "Candara", "Futara", "Franklin Gothic Medium", "Trebuchet MS", "Geneva", "Segoe UI", "Optima", "Avanta Garde", "Bank Gothic", "Garamond", "Times New Roman", "Brush Script MT", "Courier New", "Tahoma", "Georgia", "Aldrich", "Akronim", "DejaVu Sans"];

    // grabbing the object called "fancyText" from HTML
    const fancyText = document.getElementById("fancyText");

    // math formulas for randomizing the size and font
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize + "px"; // the range of randomized sizes is 10 to 50 pixels.
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)]; // there are 26 possible fonts that can be randomized.

    for (var i = 0; i < 6; i++){
        randomColor = color += hexadecimals[Math.floor(Math.random() * 16)];
        // there are 16 values in the hexadecimal system. 
        // thus each of these 16 hexadecimals will be randomized.
        // these values will always randomized 6 times here.
        // the hashtag is concatenated here with the randomized hexadecimals.
    }

    // after all of that was done, we can change the original text's styling.
    fancyText.style.fontSize = randomSize;
    fancyText.style.fontFamily = randomFont;
    fancyText.style.color = randomColor;

    // verification that this works.
    console.log("Your text fonts have been randomized.");
}

function getFormValues(){

    //i don't remember how i could do this more efficiently lmfao
    //i know its a for loop but idk how the hell to use that evil thing yet in this context
    //if it works it works, dont let perfection be the enemy of good
    //yada-yada

    var firstResult = document.getElementById('firstField').value;
    var secondResult = document.getElementById('secondField').value;
    var thirdResult = document.getElementById('thirdField').checked;

    const outputFirst = document.getElementById('firstResult');
    const outputSecond = document.getElementById('secondResult');
    const outputThird = document.getElementById('thirdResult');

    if (firstResult == ""){
        outputFirst.textContent = 'There was no response from user.';
        outputSecond.textContent = secondResult;
        outputThird.textContent = thirdResult;
    }
    else if (secondResult == "#000000"){
        outputFirst.textContent = firstResult;
        outputSecond.textContent = secondResult + ', there was PROBABLY no response from the user.';
        outputThird.textContent = thirdResult;
    }
    else{
        outputFirst.textContent = firstResult;
        outputSecond.textContent = secondResult;
        outputThird.textContent = thirdResult;
    }
}

function countTheStuff(){
    const paragraphCount = document.querySelectorAll('p').length; // counts all paragraphs in html
    const countOfP = document.getElementById('countOfP'); // finds where to display this information
    countOfP.textContent = paragraphCount; // displays this information in the selected table

    const header2Count = document.querySelectorAll('h2').length; // counts all header2s in html
    const countOfH2 = document.getElementById('countOfH2');
    countOfH2.textContent = header2Count;

    const tdCount = document.querySelectorAll('td').length; // counts all table data cells in html
    const countOfTD = document.getElementById('countOfTD');
    countOfTD.textContent = tdCount;
}

function addNewRow(){
    const table = document.getElementById("addRowsTable"); // gets table id
    const row = table.insertRow(); // makes a new row for this table
    const td = row.insertCell(); // makes a new data cell for this row
    const thisTableRowCount = table.querySelectorAll('tr').length; // gets how many rows are in this table

    td.textContent = thisTableRowCount - 1 // displays how many rows have been created.

}

function yourBonusChallenge(){
    // Make a clock that works and doesn't refresh the page.

    // get the time and date of today
    var time = new Date().toLocaleTimeString();
    var today = new Date().toLocaleDateString();
    
    // get the time zones and offsets
    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var shortenTZ = new Date().toLocaleDateString('en-US', {timeZoneName: 'short'}).split(' ').pop();
    var offset = new Date().getTimezoneOffset();
    var properOffset = -offset / 60;

    // give a format on how it is gonna be displayed onto the website.
    var display = 'Today is: ' + today;
    var display2 = 'The time is: ' + time;
    var display3 = 'Your timezone is: ' + timezone;

    //find the rows of the table and put the brand new text content into the rows of the table.
    const dateTable = document.getElementById("date");
    dateTable.textContent = display;
    
    const timeTable = document.getElementById("time");
    timeTable.textContent = display2;
    
    const zoneTable = document.getElementById("zone");
    zoneTable.textContent = display3 + ', ' +  shortenTZ + ', or UTC' + properOffset;

    // how many times this function will refresh in milliseconds
    setTimeout(yourBonusChallenge, 1000);
}