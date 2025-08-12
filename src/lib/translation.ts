// Translation utility functions for pasta content

// Google Translate API for pasta content (external service)
export function translatePastaContent(
  text: string,
  targetLang: string
): string {
  const googleTranslateUrl = `https://translate.google.com/translate?sl=en&tl=${targetLang}&u=${encodeURIComponent(
    text
  )}`;
  return googleTranslateUrl;
}

export function openPastaTranslation(pastaUrl: string, targetLang: string) {
  if (targetLang === "en") return pastaUrl;

  const googleTranslateUrl = `https://translate.google.com/translate?sl=en&tl=${targetLang}&u=${encodeURIComponent(
    pastaUrl
  )}`;
  window.open(googleTranslateUrl, "_blank");
}
