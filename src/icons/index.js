import SvgIcon from "@/components/SvgIcon";

const req = require.context("./svg", false, /\.svg$/);

req.keys().forEach((svgIcon) => req(svgIcon));

export default (app) => {
  app.component("svg-icon", SvgIcon);
};
