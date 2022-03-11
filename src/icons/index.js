import SvgIcon from "@/components/SvgIcon";

const req = require.context("./svg", false, /\.svg$/);

const requireAll = (requireContent) =>
  requireContent.keys().map(requireContent);
requireAll(req);

export default (app) => {
  app.component("svg-icon", SvgIcon);
};
