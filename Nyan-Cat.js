// On click
var button = document.getElementById('Nyan');
button.addEventListener('click', startOfTimer); // create a timer function that runs all the other functions for 10 seconds.


// start timer
function startOfTimer() {

 setTimeout(function () {console.log ('tick,tock') }, 10);

 var counter = 0;
 var setIntervalId = setInterval(function () {
   counter += 1;
    addImageToBody();
    if (counter === 5) {
      console.log('clearing');
      clearInterval(setIntervalId);
    }
  }, 2000);

}

// add image to the body and making it drop 45
function addImageToBody(){
  var imageNyan = document.createElement('img');
  imageNyan.src = 'meow.png';
  document.body.appendChild(imageNyan);

  imageNyan.style.position = 'fixed';
  imageNyan.style.left = '0';
  imageNyan.style.top = '0';
  imageNyan.style.transition = '2s';



  // humanly wait for the cat to be moved.
  setTimeout( function () {

  imageNyan.style.left = '100vw';
  imageNyan.style.top = '100vh';
  imageNyan.style.transform.rotate = '1000deg';
}, 10);



// when can hits top 100 left 100, remove image.

// set a function that intervals/times out and waits for 1.5 seconds. "setinterval"
// make the cat reapear on random positions. "if" image is on body "return"
}
