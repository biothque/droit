function openLink(url) {
  window.location.href = url;
}

function pushToHistory(url) {
  window.history.pushState({ page: url }, '', url);
}

window.onpopstate = function(event) {
  if (event.state) {
    console.log("Retour à :", event.state.page);
  }
};
