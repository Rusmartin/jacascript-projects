// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var lie =  document.createElement("li");
    lie.className = ("liste");
    
    var date0 = document.createElement("SPAN");
    var date2 = document.createTextNode(document.getElementById("date").value);
    date0.className = ("km0");
    date0.appendChild(date2);
    lie.appendChild(date0);
    
    var km0 = document.createElement("SPAN");
    var km2 = document.createTextNode(document.getElementById("km").value);
    km0.className = ("km0");
    km0.appendChild(km2);
    lie.appendChild(km0);
    
    var litre0 = document.createElement("SPAN");
    var litre1 = document.createTextNode(document.getElementById("litre").value);
    litre0.className = ("km0");
    litre0.appendChild(litre1);
    lie.appendChild(litre0);
    
    var average0 = document.createElement("SPAN");
    var average2 = document.getElementById("litre").value / document.getElementById("km").value * 100;
    var average1 = document.createTextNode(average2.toFixed(2));
    average0.className = ("km0");
    average0.appendChild(average1);
    lie.appendChild(average0);
  
    document.getElementById("myUl").appendChild(lie);
    document.getElementById("km").value = "";
    document.getElementById("litre").value = "";
    document.getElementById("date").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  lie.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
 }


