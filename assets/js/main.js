function loadXMLDoc() {
  fetch("https://www.nationstates.net/cgi-bin/api.cgi?region=united_alliances")
  .then(response => response.text())
  .then(data => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");

    console.log(xml);
  
    document.querySelector('.numnations').innerHTML = xml.documentElement.childNodes[5].innerHTML;

  })
  .catch(console.error);
  }