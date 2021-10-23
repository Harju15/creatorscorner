/**
 * Bubbly - Bootstrap 5 Dashboard & CMS Theme v. 1.2.0
 * Homepage:
 * Copyright 2021, Bootstrapious - https://bootstrapious.com
 */

"use strict";

Chart.defaults.global.defaultFontFamily =
  "Poppins, system-ui, -apple-system, Roboto, Arial, system-ui, -apple-system, sans-serif";
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.backgroundColor = "rgba(0, 0, 0, 0.7)";
Chart.defaults.scale.ticks.fontColor = "rgba(0, 0, 0, 0.4)";

window.colors = {
  primary: "#7c83fd",
  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  pinkLighter: "#7dedff",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#35b653",
  teal: "#20c997",
  cyan: "#17a2b8",
  white: "#fff",
  twitter: "#32e0c4",
};

var canvasContext = document.createElement("canvas").getContext("2d");

var whiteBlue = canvasContext.createLinearGradient(0, 0, 300, 300);
whiteBlue.addColorStop(0, "#eeeeee");
whiteBlue.addColorStop(1, "#1db9c3");

var pinkBlue = canvasContext.createLinearGradient(140, 0, 150, 300.0);
pinkBlue.addColorStop(0, "rgba(63,94,251,.85)");
pinkBlue.addColorStop(1, "#7c83fd");

var primaryWhite = canvasContext.createLinearGradient(0, 0, 0, 200);
primaryWhite.addColorStop(0, window.colors.primary);
primaryWhite.addColorStop(1, window.colors.white);

window.gradients = {
  whiteBlue: whiteBlue,
  pinkBlue: pinkBlue,
  primaryWhite: primaryWhite,
};
