module.exports = {
  source: "dist",
  destination: "dist",
  routes: [
    "/",
    "/admin"
  ],
  waitFor: 1000,
  skipThirdPartyRequests: true,
  crawl: true,
  include: [
    "/",
    "/admin"
  ],
  userAgent: "ReactSnap",
  headless: true
};