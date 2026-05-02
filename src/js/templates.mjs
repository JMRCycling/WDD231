export function parkInfoTemplate(info) {
  return `<a href="${info.url}" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function parkIntroTemplate(data) {
  return `
    <section class="park-description">
      <h2>${data.name} National Park</h2>
      <p>${data.description}</p>
    </section>
    <section class="park-weather">
      <h2>Weather</h2>
      <p>${data.weatherInfo}</p>
    </section>
  `;
}

export function mediaCardTemplate(info) {
  return `<div class="media-card">
            <a href="${info.link}" class="media-card__image-link">
              <img src="${info.image}" alt="${info.name}" class="media-card__image">
            </a>
            <div class="media-card__content">
              <h3 class="media-card__title">
                <a href="${info.link}">${info.name}</a>
              </h3>
              <p class="media-card__description">${info.description}</p>
            </div>
          </div>`;
}

export function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

export function getVoicePhone(phoneNumbers) {
  const match = phoneNumbers.find((phone) => phone.type === "Voice");
  return match.phoneNumber;
}

export function parkFooterTemplate(data) {
  const mailing = getMailingAddress(data.addresses);
  const voice = getVoicePhone(data.contacts.phoneNumbers);
  return `
    <section class="contact">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>
    <section class="directions">
      <h3>Directions</h3>
      <p>${data.directionsInfo}</p>
      <a href="${data.directionsUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
    </section>
  `;
}
