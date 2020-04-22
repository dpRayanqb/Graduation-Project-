$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var token = firebase.auth().currentUser.uid;
            quaryDatabase(token);
        } else {
          // No user is signed in.
          window.location = "new.html";
        }
      });
});

function quaryDatabase(token){
    firebase.database().ref('/Documents/').once('value').then(function(snapshot) {
        var PostObject = snapshot.val();
        var keys = Object.keys(PostObject);
        var currentRow;
        for (var i = 0; i< keys.length; i++){
            var currenObject = PostObject[keys[i]];
            console.log(keys[i])
            if(i % 3 == 0){
              currentRow = document.createElement("div");
              $("contentHolder").append(currentRow);
            }
            var col = document.createElement("div");
            var p = document.createElement("p");
            $(p).html(currenObject.name);
            document.getElementById("NameOfFile").innerHTML=(currenObject.name);
            console.log(currenObject.name);
            console.log(currenObject.url);
            $(col).append(p);
            $(currentRow).append(col);
        }
        
       
        // ...
      });
}
function Database(token){
  firebase.database().ref('/Documents/').once('value').then(function(snapshot) {
    var PostObject = snapshot.val();
    var keys = Object.keys(PostObject);
    for (var i = 0; i< keys.length; i++){
      var currenObject = PostObject[keys[i]];
      window.location = currenObject.url;
    }
       
    // ...
  });
}
function hide(){
  $("#hide").hide();
}