function extractRegion(locale)  {
  switch (locale.split('.')[0].split('_')[1]) {
    case 'US': return 'Howdy!';
    case 'GB': return 'Salute!';
    case 'KR': return 'Salute!';
  }
  }
  
  console.log(extractRegion('en_US.UTF-8'));  // 'US'
  console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
  console.log(extractRegion('ko_KR.UTF-16')); // 'KR'