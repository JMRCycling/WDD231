import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

populateHero(parkData);
populateMain(parkData);
populateFooter(parkData);

function populateHero(parkData) {

  const disclaimerLink = document.querySelector(".disclaimer a");
  disclaimerLink.textContent = parkData.fullName;
  disclaimerLink.href = parkData.url;


  document.title = `${parkData.fullName} (U.S. National Park Service)`;


  const img = document.querySelector(".hero-banner img");
  img.src = parkData.images[0].url;
  img.alt = parkData.images[0].altText;

  const title = document.querySelector(".hero-banner__title");
  title.textContent = parkData.name;
  title.href = parkData.url;

  const [designationEl, statesEl] = document.querySelectorAll(
    ".hero-banner__subtitle span"
  );
  designationEl.textContent = parkData.designation;
  statesEl.textContent = parkData.states;
}

function populateMain(parkData) {
  const main = document.getElementById("main");
  main.innerHTML = `
    <section class="park-description">
      <h2>About ${parkData.name}</h2>
      <p>${parkData.description}</p>
    </section>
    <section class="park-weather">
      <h2>Weather</h2>
      <p>${parkData.weatherInfo}</p>
    </section>
  `;
}

function populateFooter(parkData) {
  const phone = parkData.contacts.phoneNumbers.find((p) => p.type === "Voice");
  const email = parkData.contacts.emailAddresses[0];
  const address = parkData.addresses.find((a) => a.type === "Physical");

  document.getElementById("park-footer").innerHTML = `
    <div class="footer-contact">
      <h2>${parkData.fullName}</h2>
      <address>
        ${address.line1}<br>
        ${address.line2 ? address.line2 + "<br>" : ""}
        ${address.city}, ${address.stateCode} ${address.postalCode}
      </address>
      <p>Phone: <a href="tel:${phone.phoneNumber}">${phone.phoneNumber}</a></p>
      <p>Email: <a href="mailto:${email.emailAddress}">${email.emailAddress}</a></p>
    </div>
    <div class="footer-directions">
      <h2>Directions</h2>
      <p>${parkData.directionsInfo}</p>
      <a href="${parkData.directionsUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
    </div>
  `;
}
