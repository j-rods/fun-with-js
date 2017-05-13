//Demo functions
function jqShowMe(elems) {
  elems.css('background', 'green');
  console.log(elems);
}

function jsShowMe(elem) {
  elem.style.background = 'green';
  console.log(elem);
}

function jssShowMe(elems) {
  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.background = 'green';
    console.log(elem);
  }
}
//jQuery Selection
var jqTag = $('div'),
  jqId = $('div#div');
  jqClass = $('div.div'),
  jqAttr = $('div[data-tag="div"]');
// jqShowMe(jqTag);
// jqShowMe(jqId);
// jqShowMe(jqClass);
// jqShowMe(jqAttr);


//Older Native Selection
var jsTag = document.getElementsByTagName('div');
    jsId = document.getElementById('div');
    jsClass = document.getElementsByClassName('div');

// jssShowMe( jsClass );

//Newer Native Selection
var qsTag   = document.querySelector('div'),
    qsId    = document.querySelector('div#div');
    qsClass = document.querySelector('div.div'),
    qsAttr  = document.querySelector('div[data-tag="div"]');

// jsShowMe(qsTag);
// jsShowMe(qsId);
// jsShowMe(qsClass);
// jsShowMe(qsAttr);

var qsaTag = document.querySelectorAll('div'),
  qsaId = document.querySelectorAll('div#div');
  qsaClass = document.querySelectorAll('div.div'),
  qsaAttr = document.querySelectorAll('div[data-tag="div"]');

// jssShowMe(qsaTag);
// jssShowMe(qsaId);
// jssShowMe(qsaClass);
jssShowMe(qsaAttr);
