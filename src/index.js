require("@fortawesome/fontawesome-free/js/all");

import "normalize.css";
import "./style.scss";

const $ = require("jquery");

$(window).on("load", () => {
  $("html").removeAttr("style");
  $("body").addClass("loaded");
});
