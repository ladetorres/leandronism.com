
const personae = {
  aristocratView: true,
  groundskeeperView: false,
  rangerView: false,
  missionaryView: false,
  maitreView: false,
  magistrateView: false,
  columnistView: false,
};
const oneView = {
  one: true,
  two: false,
  three: false,
  four: false,
  five: false,
};
let zeroString = '0000';
let oneString = '0000';
let threeString = '0000';

const fourBlock = {
  coal: 3,
  piston: 3,
  valve: 3,
  o: 3,
  co: 3,
};
const blockHeights = {
  1: 80,
  2: 60,
  3: 40,
  4: 24,
  5: 0,
};

const fiveStates = {
  0: 'closed',
  1: 'open',
  2: 'open, matched'
};
// const fiveClick = {
//   0: 'null',
//   1: 'one open',
//   2: 'two open',
// };
let fiveClick = 0;

const fiveList = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let fiveOpen = {
  one: null,
  two: null,
  oneString: null,
  twoString: null,
  oneVal: null,
  twoVal: null,
};

const objects = {
  cross: false,
  saw: false,
  wheel: false,
  lantern: false,
  crossbow: false,
  binoculars: false,
  grapes: false,
  garlic: false,
  quiver: false,
  chest: false,
};

let sixActive = 'pointer';

function openCard(a, b, c, d) {
  // ten, 10, four, 4
  if (fiveList[b] === 0 && fiveOpen.oneString !== a && fiveOpen.twoString !== a) {
    // open card
    document.getElementById(a.concat('-270')).src = `/assets/mystery/${c}-270.png`;

    if (fiveClick === 0) {
      fiveClick = 1;
      fiveOpen.one = b;
      fiveOpen.oneString = a;
      fiveOpen.oneVal = d;
    } else if (fiveClick === 1) {
      fiveClick = 2;
      fiveOpen.two = b;
      fiveOpen.twoString = a;
      fiveOpen.twoVal = d;
      if (fiveOpen.oneVal === fiveOpen.twoVal) {
        // mark as closed
        document.getElementById(fiveOpen.oneString.concat('-270')).src = `/assets/mystery/correct-270.png`;
        document.getElementById(fiveOpen.twoString.concat('-270')).src = `/assets/mystery/correct-270.png`;
        fiveList[fiveOpen.one] = 2;
        fiveList[fiveOpen.two] = 2;
        fiveOpen = {
          one: null,
          two: null,
          oneString: null,
          twoString: null,
          oneVal: null,
          twoVal: null,
        };
        fiveClick = 0;
      }
    } else {
      fiveClick = 1;
      document.getElementById(fiveOpen.oneString.concat('-270')).src = `/assets/mystery/zero-270.png`;
      document.getElementById(fiveOpen.twoString.concat('-270')).src = `/assets/mystery/zero-270.png`;
      fiveOpen = {
        one: b,
        two: null,
        oneString: a,
        twoString: null,
        oneVal: d,
        twoVal: null,
      };
    }

  }
  if (fiveList.filter(i => i === 2).length === 20) {
    document.getElementById('hideSix').style.display = 'none';
    setTimeout(function() {
      alert("You solved the puzzle for Chapter V !");
    },10)
  }

}

Object.keys(personae).forEach(i => {
  if (personae[i] === true) {
    try {
      document.getElementById(i).style.display += 'block';
    } catch (e) {}
  } else {
    try {
      document.getElementById(i).style.display += 'hidden';
    } catch (e) {}
  }
});

function openPersonae(c) {
  Object.keys(personae).forEach(i => {
    if (i === c) {
      personae[i] = true;
      try {
        document.getElementById(i).style.display = 'block';
      } catch (e) {}
    } else {
      personae[i] = false;
      try {
        document.getElementById(i).style.display = 'none';
      } catch (e) {}
    }

  })
}
function oneZeroKey(c) {
  zeroString = zeroString.concat(c).slice(1, 5);
  document.getElementById('zeroString').textContent = zeroString;
  if (zeroString === '2444') {
    zeroString = '0000';
    document.getElementById('zeroString').textContent = zeroString;
    setTimeout(function() {
      alert("You solved the puzzle for Chapter 0 !");
    },10)
  }
}
function oneEnterKey(c) {
  oneString = oneString.concat(c).slice(1, 5);
  document.getElementById('oneString').textContent = oneString;
  if (oneString === '9257') {
    oneString = '0000';
    document.getElementById('oneString').textContent = oneString;
    setTimeout(function() {
      alert("You solved the puzzle for Chapter I !");
    },10)
  }
}
function threeEnterKey(c) {
  threeString = threeString.concat(c).slice(1, 5);
  document.getElementById('threeString').textContent = threeString;
  if (threeString === '3074') {
    threeString = '0000';
    document.getElementById('threeString').textContent = threeString;
    setTimeout(function() {
      alert("You solved the puzzle for Chapter II !");
    },10)
  }
}

function twoCheckAnswer() {
  if (
    document.getElementById('doctor-date').options[document.getElementById('doctor-date').selectedIndex].value === 't'
    && document.getElementById('doctor-room').options[document.getElementById('doctor-room').selectedIndex].value === '107'
    && document.getElementById('doctor-request').options[document.getElementById('doctor-request').selectedIndex].value === 'extend'
    && document.getElementById('prof-date').options[document.getElementById('prof-date').selectedIndex].value === 'm'
    && document.getElementById('prof-room').options[document.getElementById('prof-room').selectedIndex].value === '119'
    && document.getElementById('prof-request').options[document.getElementById('prof-request').selectedIndex].value === 'breakfast'
    && document.getElementById('banker-date').options[document.getElementById('banker-date').selectedIndex].value === 'f'
    && document.getElementById('banker-room').options[document.getElementById('banker-room').selectedIndex].value === '104'
    && document.getElementById('banker-request').options[document.getElementById('banker-request').selectedIndex].value === 'call'
  ) {
    document.getElementById('hideTwoAnswer').style.display = 'none';
    setTimeout(function() {
      alert("You solved the puzzle for Chapter II !");
    },10)
  }
}

Object.keys(oneView).forEach(i => {
  if (oneView[i] === true) {
    try {
      document.getElementById(i).style.display += 'block';
    } catch (e) {}
  } else {
    try {
      document.getElementById(i).style.display += 'hidden';
    } catch (e) {}
  }
});
function openOneView(c) {
  Object.keys(oneView).forEach(i => {
    if (i === c) {
      oneView[i] = true;
      document.getElementById(i).style.display = 'block';
    } else {
      oneView[i] = false;
      document.getElementById(i).style.display = 'none';
    }

  })
}

function adjustBlock(a, b) {
  // const block = fourBlock[a];
  if (b === '-') {
    fourBlock[a] = Math.max(1, fourBlock[a] - 1)
  } else {
    fourBlock[a] = Math.min(5, fourBlock[a] + 1)
  }
  document.getElementById(a.concat('-cover')).style.height = blockHeights[fourBlock[a]].toString().concat('px');
  document.getElementById(a.concat('-value')).textContent = fourBlock[a];
  if (['25325', '23134', '45145', '23145', '45134'].includes(Object.values(fourBlock).join(''))) {
    document.getElementById('hideFour').style.display = 'none';
    setTimeout(function() {
      alert("You solved the puzzle for Chapter IV !");
    },10)
  }
}


function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.id = 'glass-id';
  glass.setAttribute("class", "img-magnifier-glass");

  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('/assets/mystery/hidden-clean-two.png')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  // glass.addEventListener('touchstart', moveMagnifier, {passive: true});
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
function onGlass() {
  if (sixActive !== 'glass') {
    magnify("myimage", 2);
    sixActive = 'glass';
  }
}
function offGlass() {
  if (sixActive !== 'pointer') {
    var div = document.getElementById('glass-id');
    div.parentNode.removeChild(div);
    sixActive = 'pointer';
  }
}

function findHidden(i) {
  objects[i] = true;
  document.getElementById('six-'.concat(i)).style.color = 'gray';
  // console.log(objects)
  if (Object.values(objects).filter(i => !!(i)).length === 10) {
    setTimeout(function() {
      alert("You solved the puzzle for Chapter VI !");
    },10)
  }
}
