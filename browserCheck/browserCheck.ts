export const browserCheck = (): string | void => {
  const agent = navigator.userAgent.toLowerCase();
  const BrowserIs = (name: string) => agent.indexOf(name) !== -1;

  if (BrowserIs("chrome")) {
    if (BrowserIs("edg")) return "Edge";
    return "Chrome";
  }
  if (BrowserIs("opera")) return "Opera";
  if (BrowserIs("staroffice")) return "Star Office";
  if (BrowserIs("webtv")) return "WebTV";
  if (BrowserIs("beonex")) return "Beonex";
  if (BrowserIs("chimera")) return "Chimera";
  if (BrowserIs("netpositive")) return "NetPositive";
  if (BrowserIs("phoenix")) return "Phoenix";
  if (BrowserIs("firefox")) return "Firefox";
  if (BrowserIs("safari")) return "Safari";
  if (BrowserIs("skipstone")) return "SkipStone";
  if (BrowserIs("netscape")) return "Netscape";
  if (BrowserIs("mozilla/5.0")) return "Mozilla";
  if (BrowserIs("msie")) {
    let rv = -1;
    if (navigator.appName === "Microsoft Internet Explorer") {
      const ua = navigator.userAgent;
      // eslint-disable-next-line prefer-regex-literals
      const re = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
      if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
    }
    return `Internet Explorer ${rv}`;
  }
  return "-";
};

console.log(browserCheck());
