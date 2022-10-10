function extractRegion(locale) {
   locale.split('')
   return locale[3] + locale[4];
   }

function extractLanguage(isoCode) {
    switch (isoCode) {
        case 'en_US.UTF-8':
            return 'en';
        case 'en_GB.UTF-8':
            return 'en';
        case 'en_AU.UTF-8':
            return 'en';
        case 'ko_KR.UTF-16':
            return 'ko';
        case 'fr_FR.UTF-8':
            return 'fr';
    }
}

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet(locale) {
    let region = extractRegion(locale)
    let language = extractLanguage(locale)
    switch (region) {
        case 'US' : return 'Hey!.';
        case 'GB' : return 'Hello!';
        case 'AU' : return 'Howdy!'
        default: return greet(language)
    }
}
console.log(localGreet('fr_FR.UTF-8'));
