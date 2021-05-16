let prog = document.getElementById('progress');

let body = document.body,
  html = document.documentElement;

let formSent = false;

const windowLocation = window.location.href;
const isFeatures = !!windowLocation.includes('features');
const isHome = !isFeatures;

if (isFeatures) {
  const nav = document.getElementById('nav-features');
  nav.className += ' default-link-active';
}
if (isHome) {
  const nav = document.getElementById('nav-home');
  nav.className += ' default-link-active';
}

const setProgress = () => {
  var winScroll = body.scrollTop || html.scrollTop;
  var height = html.scrollHeight - html.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled > 8) {
    prog.style.width = scrolled + "%";
  } else {
    prog.style.width = 0 + "%";
  }
}

window.addEventListener('scroll', setProgress);

setProgress();

function replaceText( el, str ) {
  document.getElementById(el).textContent = str;
  // el.textContent ? el.textContent = str : el.innerText = str;
  // let ele = document.getElementById(el);
  //
  // let node = document.createTextNode (str);
  // ele.appendChild(node);
}

function isValidForm() {
  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const subject = document.getElementById('formSubject').value;
  const message = document.getElementById('formMessage').value;
  return !!(name && email && subject && message);
}

function consoleLog() {
  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const subject = document.getElementById('formSubject').value;
  const message = document.getElementById('formMessage').value;

  replaceText('nameError', name ? ' ' : 'Gotta introduce yourself!');
  if (name) {
    replaceText('emailError', email ? ' ' : 'I might need to reply to you...');
  }
  if (name && email) {
    replaceText('subjectError', subject ? ' ' : 'What might this be about?');
  }
  if (name && email && subject) {
    replaceText('messageError', message ? ' ' : 'Nothing to say? Just say hi!');
  }
  if (name && email && subject && message) {
    const Http = new XMLHttpRequest();
    const url = 'https://script.google.com/macros/s/AKfycbxdOCL1-lX8JZqv7Vov2nshvu24LUC9_fAkx5P60Npd3LqAgmzrR6cJo7p2pmMebdlmrw/exec';
    Http.open("POST", url);
    Http.send(JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    }));
    formSent = true;
    document.getElementById('submitButton').style.display += 'none';
    document.getElementById('messageSent').style.display += 'block';
  }
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    // delta = this.period;
    delta = 1000;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
