const budget = 20000;
const prixCahier = 1500;
const quantiteCahiers = 4;
const prixStylo = 500;
const quantiteStylos = 3;

const montantCahiers = prixCahier * quantiteCahiers;
const montantStylo = prixStylo * quantiteStylos;
const total = montantCahiers + montantStylo;

console.log("=====CAISSE=====");
console.log("Cahiers :", montantCahiers, "FCFA");
console.log("Stylos :", montantStylo, "FCFA");
console.log("Total :", total, "FCFA");
console.log("Budget :", budget, "FCFA");
