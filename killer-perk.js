killPerkGetir = document.getElementById("killer-perk");
killPerkGetir.addEventListener("click", killerPerkleriGetir);
killDiv = document.getElementById("kill");
function killerPerkleriGetir(e) {
  e.preventDefault();

  fetch("https://dbd-proxy.vercel.app/api/randomPerks?role=killer")
    .then((response) => response.json())
    .then((sonuc) => ekranaPrint(sonuc));
}

function ekranaPrint(data) {
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
  killDiv.innerHTML = cikti;
}
