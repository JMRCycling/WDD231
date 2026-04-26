import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `<a href="${info.url}" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// 1. Update the disclaimer link text and URL
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

// 2. Update the page title
document.querySelector("head > title").textContent = parkData.fullName;

// 3. Use the first image in the data for the hero image
const img = document.querySelector(".hero-banner > img");
img.src = parkData.images[0].url;
img.alt = parkData.images[0].altText;

// 4. Update the park name, designation, and states in the hero
document.querySelector(".hero-banner__content").innerHTML =
  parkInfoTemplate(parkData);

populateMain(parkData);
populateFooter(parkData);

function populateMain(parkData) {
  document.getElementById("main").innerHTML = `
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

  document.getElementById("footer").innerHTML = `
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
