
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDYuROPGZhuJ1kRC2KBghTxGKYZ-u4_nD8",
    authDomain: "form-c5ed7.firebaseapp.com",
    databaseURL: "https://form-c5ed7.firebaseio.com",
    projectId: "form-c5ed7",
    storageBucket: "form-c5ed7.appspot.com",
    messagingSenderId: "770233709185",
    appId: "1:770233709185:web:1343e9d048cf3f7b9f5380"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  const auth = firebase.auth();


  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Sign Up");
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    if(promise.catch){
      promise.catch(e => alert(e.message));
    }
      
  }

  function signOut(){
      auth.signOut();
      alert(" Signed Out");
      window.location = "new.html";
  }
  const selectedFile = document.getElementById('file');
  selectedFile.on("change", function(event){
    selectedFile = event.target.file[0];
  });


  function uploadFile(){
    var filename = selectedFile;
    var storageRef = firebase.storage().ref('/Documents/' + filename);
    var uploadTask = storageRef.put(selectedFile);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
    
      });
  }
  
