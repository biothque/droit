// --- Configuration Backendless ---
const APP_ID = "B4A3DE5F-5247-43FC-8831-C87303139B55";
const API_KEY = "0D40C30E-CC67-4C67-B532-1BF5BB94BCC4";
const TABLE  = "utilisateurs";

// Initialisation Backendless
Backendless.initApp(APP_ID, API_KEY);

/**
 * Vérifie si la session stockée dans localStorage existe encore dans Backendless
 */
async function checkSession() {
  const sessionStr = localStorage.getItem("userSession");
  if (!sessionStr) {
    redirectToLogin();
    return;
  }

  const session = JSON.parse(sessionStr);
  if (!session.matricule) {
    redirectToLogin();
    return;
  }

  try {
    // Requête Backendless pour vérifier le matricule
    const whereClause = `matricule = '${session.matricule}'`;
    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);

    const result = await Backendless.Data.of(TABLE).find(queryBuilder);

    if (!result || result.length === 0) {
      // Matricule supprimé ou inexistant -> déconnecter l'utilisateur
      redirectToLogin("Votre session a été fermée ou votre compte supprimé.");
    }

  } catch (err) {
    console.error("Erreur lors de la vérification de session:", err);
    redirectToLogin();
  }
}

/**
 * Supprime la session et redirige vers login
 * @param {string} message Optionnel, message d'alerte
 */
function redirectToLogin(message) {
  localStorage.removeItem("userSession");
  if (message) alert(message);
  window.location.href = "/login.html";
}

// Vérification automatique
window.addEventListener("load", checkSession);      // au chargement de page
document.addEventListener("click", checkSession);   // à chaque clic utilisateur
