// 判断是否为外部资源
export function isExternal(path) {
  return /\^(https?:|mailto:|tel:)/.test(path);
}

// 登陆用户名验证
export function validUsername(str) {
  const valid_map = ["admin", "editor"];
  return valid_map.indexOf(str.trim()) >= 0;
}

export function isIE() {
  const bw = window.navigator.userAgent;
  const compare = (s) => bw.indexOf(s) >= 0;
  const ie11 = (() => "ActiveXObject" in window)();
  return compare("MSIE") || ie11;
}
