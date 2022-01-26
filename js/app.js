
function getRandomWord(array){
    return array[Math.floor(Math.random()*array.length)];

}


function onChurchButton(){
    //lists of words
    var firstList = window.myData.firstList;
    var lastList = window.myData.lastList;


    //combining the words
    // var firstWord = firstList.shift();
    // var lastWord = lastList.pop();
    // var fullName = firstWord + ' ' + lastWord;

    //trying a random generator 
    var firstWord = getRandomWord(firstList);
    var lastWord = getRandomWord(lastList);
    var fullName = firstWord + ' ' + lastWord;

    var element = document.querySelector('#example-element');
    element.innerHTML = fullName;

  }