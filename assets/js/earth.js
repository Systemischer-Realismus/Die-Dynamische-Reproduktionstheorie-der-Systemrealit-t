document.addEventListener("DOMContentLoaded", () => {
  // Prüfen, ob eine Erde vorhanden ist
  const earth = document.querySelector(".earth");
  if (!earth) return;

  // Prüfen, ob pageIndex existiert
  if (typeof pageIndex === "undefined") return;

  // Gesamtzahl der Kapitel-Schritte (Kapitel_00 bis Kapitel_113)
  const totalSteps = 113;

  // Berechnung der Rotations- und Kippwinkel
  //const rotation = pageIndex * (360 / totalSteps);
  const tilt = 180 - pageIndex * (180 / totalSteps);
  const rotation = 0;
  // Transformation anwenden
  earth.style.transform = ` rotateX(${tilt}deg)`;//rotateZ(${rotation}deg)
  });