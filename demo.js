function addRow(){

	alert("Adding a New Row")

  var fname = document.getElementById("fname").value;
  var eid = document.getElementById("eid").value;
  var ecountry = document.getElementById("ecountry").value;
 

  var table = document.getElementsByTagName('table')[0];
  var row = table.insertRow(5);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = fname;
  cell2.innerHTML = eid;
  cell3.innerHTML = ecountry;
}