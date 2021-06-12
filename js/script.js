let radios = document.querySelectorAll('.btn-check');
radios.forEach(function(item, index){
  item.addEventListener('click', function(){
    let target = this.dataset.target;
    let collapse = document.querySelector(target);
    let siblings = collapse.parentNode.querySelectorAll('.custom-collapse:not('+target+')');
    siblings.forEach(function(sibling, index){
      sibling.classList.remove('show');
    });
    collapse.classList.add('show');
  });
});
document.body.onload = function() {
  // Desabilita o pre-loader
  document.getElementById('pre-loader').classList.add('hide');

  // Carrega as informações do servidor
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.minetools.eu/ping/anarquia.xyz", true);
  xhttp.send();
  xhttp.onload = function(r) {
    let data = JSON.parse(xhttp.responseText);
    if(data.error){
      return false;
    } else {
      document.getElementById("server_img").setAttribute('src', data.favicon);
      document.getElementById("server_info").innerHTML = `
          <b>Anarquia</b> <br/>
            anarquia.xyz <br/>
          <b> ${data.players.online} / ${data.players.max} </b> players
      `;
    }   
  }
}
/* CRIA A IMAGEM APENAS QUANDO MUDAR O SLIDE ATIVO */
document.getElementById('gallery').addEventListener('slide.bs.carousel', function (e) {
  let item = e.relatedTarget
  let img = item.querySelector('img');
  if(!img)
    item.innerHTML = `<img src="${item.getAttribute("data-bg")}" />`; 
})