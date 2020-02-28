var character = ["Player 1", "Player 2"];

function match() {
  var that = this;
  this.characters = [];
  this.checkWinner = true;
  for (var i = 0; i < character.length; i++) {
    this.characters.push(new player(character[i], that));
  }
  this.winnerMessage = document.createElement("div");
  this.buttonEle = document.createElement("div");
  this.buttonEle.innerHTML = "Reset";
  this.buttonEle.style.backgroundColor="green";
  this.buttonEle.style.width="300px";
  this.buttonEle.style.color="white";
   this.buttonEle.style.display="flex";
  this.buttonEle.style.justifyContent="center";
 this.buttonEle.addEventListener("click", function() {
 that.buttonEle.innerHTML= window.location.reload();
   that.buttonEle.style.color="green";
  });
  document.body.appendChild(this.winnerMessage);
  document.body.appendChild(this.buttonEle);
}
function player(ply, parent) {
  var that = this;
  this.ply = ply;
  this.nbm = 0;

  this.characterEle = document.createElement("div");
 this.plyEle = document.createElement("div");
  this.nbmEle = document.createElement("div");

  this.plyEle.innerHTML = this.ply;
  this.nbmEle.innerHTML = "Clicks: " + this.nbm;

  this.characterEle.appendChild(this.plyEle);
  this.characterEle.appendChild(this.nbmEle);
  

  this.characterEle.addEventListener("click", function() {
    if (parent.checkWinner) {
      that.nbm = that.nbm + 1;
      that.nbmEle.innerHTML = "Clicks: " + that.nbm;

      if (that.nbm == 5) {
        parent.winnerMessage.innerHTML = "The winner is " + that.ply;
        parent.checkWinner = false;
      }
      

  }
  });
  
 
 
  document.body.appendChild(this.characterEle);
}

var match1 = new match();