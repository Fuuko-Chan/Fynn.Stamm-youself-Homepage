async function login() {
const korrekterHash = "13b5c3873ee2e2be1b95f16efc058dd23656b21c6c3490a2c3eb0c6aded8ef14";

const eingabePassword = document.getElementById("password").value.trim();
const meldung = document.getElementById("meldung");

const msgUint8 = new TextEncoder().encode(eingabePassword);
const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
const hashArray = Array.from(new Uint8Array(hashBuffer));
const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

if (hashHex === korrekterHash) {
    meldung.innerHTML = "Login erfolgreich";
    window.location.href = "Home.html";
} else {
    meldung.innerHTML = "Login fehlgeschlagen";
}
}