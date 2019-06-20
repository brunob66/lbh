window.addEventListener('load', loadCustomer);

// Load Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'standings.xml', true);
  xhr.onload = function () {
    if (this.status === 200) {
      myFunction(this);
    }
  }
  xhr.send();
}

function myFunction(xml) {
  let i;
  let xmlDoc = xml.responseXML;
  var table = "<tr><th>P</th><th>Team</th><th>Wins</th></tr>";
  let x = xmlDoc.getElementsByTagName("team");
  console.log(x);

  for (i = 0; i < x.length; i++) {
    table +=
      `<tr>
      <td> ${i + 1} </td>
      <td>${x[i].childNodes[1].childNodes[1].attributes[0].nodeValue} ${x[i].childNodes[1].childNodes[1].attributes[1].nodeValue}</td>
      <td>${x[i].childNodes[3].childNodes[1].attributes[3].nodeValue} </td>
      </tr>`
  }
  document.getElementById('customer').innerHTML = table;
}

