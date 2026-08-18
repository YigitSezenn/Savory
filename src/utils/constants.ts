const OAUTH = {
  GOOGLE_OAUTH: "oauth_google",
  OAUTH_GITHUB: "oauth_github",
  OAUTH_APPLE: "oauth_apple",
};

// Telefon "localhost"u kendi üzerinde arar, PC'yi değil.
// Bu yüzden burada PC'nin ağdaki (Wi-Fi) IP adresi sabitlenmiştir.
// PC'nin IP'si değişirse (farklı Wi-Fi, router restart vb.) burayı güncelle.
const BASE_URL = "http://192.168.1.6:3001/api";

export { OAUTH, BASE_URL };
