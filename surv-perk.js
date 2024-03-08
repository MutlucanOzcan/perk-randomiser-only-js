survPerkGetir = document.getElementById("sur-perk");
survPerkGetir.addEventListener("click", survivorPerkleriGetir);
survDiv = document.getElementById("surv");

function survivorPerkleriGetir(e) {
  e.preventDefault();

  fetch("https://dbd-proxy.vercel.app/api/randomPerks?role=survivor")
    .then((response) => response.json())
    .then((sonuc) => ekranaYazdir(sonuc));
}

function ekranaYazdir(data) {
  let cikti = "";
  data.body.forEach((perk) => {
    cikti += `<div class="column">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">${perk.name}</p>
          </div>
        </div>

        <div class="content">
        ${perk.description}
          <br />
        </div>
      </div>
    </div>
  </div>`;
  });
  survDiv.innerHTML = cikti;
}
