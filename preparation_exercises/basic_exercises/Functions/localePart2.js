function extractRegion(locale) {
   locale.split('')
   console.log(locale[3] + locale[4])
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR;