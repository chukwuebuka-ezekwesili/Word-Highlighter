// hide result value
document.getElementById("result").style.display = "none"

// clicking the button highlight`s the occuring word
document.getElementById("highlight").onclick = function() { 
    // getting the input1 and input2 t0 work with javascript functionalities
    let inputText = document.getElementById("inputText").value;
    let inputWord = document.getElementById("inputWord").value;

    // finding all the occurrence of inputWord in inputText
    let regex = new RegExp(inputWord, "g");
    let occurrence = inputText.match(regex);

    // if statement that takes care of instances when the occurrence is a null set and when its greater than two.
    if(occurrence === null) {
        window.alert("Cannot highlight word in sentence");
    } else if(occurrence.length > 2) {
        window.alert("Too many occurrences to be highlighted")
    } else {

        // string concatenation for printing out the sentence with the highlighted occurring word  
        inputText = inputText.replace(inputWord, "<span id='highlighted'>"+inputWord.toUpperCase()+"</span>");
        document.getElementById("result").style.display = "block";
        document.getElementById("finalresult").innerHTML = inputText;
    }

};