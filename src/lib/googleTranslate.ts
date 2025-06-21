export function googleTranslateUrl(targetLang: string, url: string) {
  return `https://translate.google.com/translate?hl=${targetLang}&sl=auto&u=${encodeURIComponent(
    url
  )}`;
}
