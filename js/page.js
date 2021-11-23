function initialPick() {
  var initial = "svg/mystery.svg";
  document.getElementById('oppResult').src = initial;
}



function genPick() {
    var pick = "svg/mystery.svg";
    if(Math.floor(Math.random() * 3) == 2) {
      var pick = "svg/rock.svg"
    } else if (Math.floor(Math.random() * 3) == 1) {
      var pick = "svg/paper.svg"
    } else {
      var pick = "svg/scissors.svg"
    }
    document.getElementById('oppResult').src = pick
    return pick;
}

comp_score = 0;
user_score = 0;

function rockPick() {
    pick = genPick();
    if(pick == "svg/rock.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    }  else if (pick == "svg/paper.svg") {
      document.getElementById('result').innerHTML = "You Lose";
      comp_score = comp_score + 1;
    } else {
      document.getElementById('result').innerHTML= "You Win!";
      user_score = user_score + 1;
    }
}

function paperPick() {
    pick = genPick();
    if(pick == "svg/paper.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    }  else if (pick == "svg/scissors.svg") {
      document.getElementById('result').innerHTML = "You Lose";
    } else {
      document.getElementById('result').innerHTML= "You Win!";
    }

}
function scissorsPick() {
    pick = genPick();
    if(pick == "svg/scissors.svg") {
      document.getElementById('result').innerHTML = "It's a Tie";
    }  else if (pick == "svg/rock.svg") {
      document.getElementById('result').innerHTML = "You Lose";
    } else {
      document.getElementById('result').innerHTML= "You Win!";
    }
}

sessionStorage.setItem("",);
sessionStorage.getItem("");
