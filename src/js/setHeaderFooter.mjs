import { parkInfoTemplate, parkFooterTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.textContent = data.fullName;

  document.querySelector("head > title").textContent = data.fullName;

  const img = document.querySelector(".hero-banner > img");
  img.src = data.images[0].url;
  img.alt = data.images[0].altText;

  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

function setFooter(data) {
  document.getElementById("footer").innerHTML = parkFooterTemplate(data);
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setFooter(data);
}
