function getPlatformAndUdid() {
    var platform = process.argv[2];
    const udid = process.argv[3];

    if (platform === undefined)[platform = 'android']
  
    if (platform === 'ios' && !udid) {
        console.error('Please specify the udid for iOS');
        process.exit(1);
      } 
  
    return { platform, udid };
  }
  
  module.exports = getPlatformAndUdid;
  