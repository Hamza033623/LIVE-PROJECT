module.exports = {
  domainUrl: process.env.domainUrl,
  serverUrl: process.env.serverUrl,
  raiseCapitalServer: process.env.raiseCapitalServer,
  authServer: process.env.authServer,
  formcServer: process.env.formcServer,
  investmentServer: process.env.investmentServer,
  filerServer: process.env.filerServer,
  esignServer: process.env.esignServer,
  commentsServer: process.env.commentsServer,
  blogServer: process.env.blogServer,
  notificationsServer: process.env.notificationsServer,
  emailServer: process.env.emailServer,
  bucketServer: process.env.bucketServer,

  teamName: 'Team',
  teamTitle: "Meet The Team",
  siteTitle: 'GrowthFountain | Equity Crowdfunding Platform',
  siteDescription: 'Invest as little as $100 in startups and small businesses. GrowthFountain is the preferred equity crowdfunding platform of more than 1 million credit union members',

  // Growth Fountain production keys:
  // facebookClientId: "191471871275050",
  // googleClientId: "488593151885-87nqfd8gl444a1me0n149otrf37dbahq.apps.googleusercontent.com",
  // linkedinClientId: "77wzj6tz0yyr33",

  facebookClientId: process.env.facebookClientId,
  googleClientId: process.env.googleClientId,
  linkedinClientId: process.env.linkedinClientId,

  googleMapKey: process.env.googleMapKey,
  stripeKey: process.env.stripeKey,

  //analytics services settings
  googleTagID: process.env.googleTagID,
  googleAnalyticsID: process.env.googleAnalyticsID,
  googleAnalyticsIDGeneral: process.env.googleAnalyticsIDGeneral,
  facebookPixelID: process.env.facebookPixelID,

  indexPage: {
    //main slider or img (slider - 1/ img - 0)
    slider: 1,
    campaignListTitle: 'CURRENT CAMPAIGNS', // title main page list campaign
    videoPopupUrl: 'https://player.vimeo.com/video/198101157?title=0&amp;byline=0&amp;controls=0&fullscreen=1&buttons.share = false&embed.buttons.like = false;autoplay=0&portrait=0',
    videoTitle: 'WHAT IS GROWTHFOUNTAIN?',
    videoText: '<h3>We banded together with a simple mission: to simplify fundraising <br> and help businesses raise capital.</h3>'
    + '<h3>Everybody in the world now has the ability to invest directly <br> in America’s entrepreneurs!</h3>',
    dataVideoIdPopup: '198101157',
    dataProviderVideoPopup: 'vimeo',
    // top banner (none - 0 / dcu - 1 / river - 2)
    topBanner: 0,
    //bottom banner (1 - raise capital/ 0 - INVEST)
    bottomBunner: 1,
  },
  currentSiteUrl: process.env.currentSiteUrl,
};
