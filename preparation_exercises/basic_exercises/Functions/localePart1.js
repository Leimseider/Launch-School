function extractLanguage(isoCode) {
    switch (isoCode) {
        case 'en_US.UTF-8' :
            console.log('en');
            break;
        case 'en_GB.UTF-8':
            console.log('en');
            break;
        case'ko_KR.UTF-16':
            console.log('ko');
    }
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'