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
    var minSize = 10
    var maxSize = 50

    // list of fonts that can be randomized
    const fonts = ["Arial", "Helvetica", "Verdana", "Calibri", "Noto", "Lucida Sans", "Gill Sans", "Century Gothic", "Candara", "Futara", "Franklin Gothic Medium", "Trebuchet MS", "Geneva", "Segoe UI", "Optima", "Avanta Garde", "Comic Sans"];

    // grabbing the object called "fancyText" from HTML
    const fancyText = document.getElementById("fancyText");

    // math formulas for randomizing the size and font
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize + "px"; // the range of randomized sizes is 10 to 50 pixels.
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)]; // there are 17 possible fonts that can be randomized.

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
    //i know its a for loop but idk how the hell to use that evil thing

    var firstResult = document.getElementById('firstField').value;
    var secondResult = document.getElementById('secondField').value;
    var thirdResult = document.getElementById('thirdField').value;

    const outputFirst = document.getElementById('firstResult');
    const outputSecond = document.getElementById('secondResult');
    const outputThird = document.getElementById('thirdResult');

    if (firstResult == ""){
        outputFirst.textContent = 'There was no response from user';
        outputSecond.textContent = secondResult;
        outputThird.textContent = thirdResult;
    }
    else{
        outputFirst.textContent = firstResult;
        outputSecond.textContent = secondResult;
        outputThird.textContent = thirdResult;
    }
}

function countTheStuff(){
    const paragraphCount = document.querySelectorAll('p').length;
    const countOfP = document.getElementById('countOfP');
    countOfP.textContent = paragraphCount;

    const header2Count = document.querySelectorAll('h2').length;
    const countOfH2 = document.getElementById('countOfH2');
    countOfH2.textContent = header2Count;

    const tdCount = document.querySelectorAll('td').length;
    const countOfTD = document.getElementById('countOfTD');
    countOfTD.textContent = tdCount
}

function addNewRow(){
    const table = document.getElementById("addRowsTable");
    const row = table.insertRow();
    const thisTableRowCount = table.querySelectorAll('tr').length;

    row.textContent = thisTableRowCount - 1

}

function yourBonusChallenge(){
    // Make a clock that works and doesn't refresh the page.
}