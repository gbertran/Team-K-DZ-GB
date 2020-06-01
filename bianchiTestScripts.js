alert('Refreshed!')


//listen for a click on a certain element of the HTML
document.getElementById("hwButton").onclick = function() {hwFunction()};

//an action that can happen inside the HTML
function hwFunction() {
    document.getElementById("hwParagraph").innerHTML = "Hello World";
  }

//listen for a click on a certain element of the HTML
document.getElementById("gimmeButton").onclick = function() {gimmeFunction()};


//Pulling data from a JSON file
function gimmeFunction() {

    var numEntries = 0;

    console.log("Fetching a JSON!");
    var filePath = "Bertran.json";


    fetch(filePath).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {

        //working with the data from the JSON
        console.log(data);
        document.getElementById("transcriptData").src = data;

        for (var i = 0; i < data.length; i++) {
            var transcriptEntry = data[i];
    
            numEntries++;
            document.getElementById("gimmeParagraph").innerHTML = transcriptEntry.Table;
        }    
    
        alert(numEntries);


    });


    
}