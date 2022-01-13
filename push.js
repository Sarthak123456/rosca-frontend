const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey= "BHYoWkri64_MLB2A1Qxgz5i_pGIXSWSCpE12MjKRAEAbc0uazaSmGx4aFyPr7pImDL6kFpyKxHNQ9WvZh1OhFuI"
const privateKey= "ENueWzQJax2NGeWR11BX4AuCdgXUvKhdTwvEg_Sro1U"

const sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/emYd8h0SrcQ:APA91bEkOFeDmRygxW7uTjuQln56iMrJArTfQcAUg-v9zWMIguJ9iQcwh4ogh4HzZo7XkjMKSPAPRYa4Sk-b6jIs2SbKL_42GA4xt_rr-S46UX3l1q_R6iUqVOIEOPHRZhqw-pmToC_G",
  "expirationTime": null,
  "keys": {
      "p256dh": "BBirxanEM5E4lhAqUWppy9RA655PS4fitkW-zOBOA1uHS3qcXnsJUw-v8ddhl_ASCfQ7jadLnrgHzuW_3RgzaQU",
      "auth": "uuCr1DwSndE6KgOgF9o-EQ"
  }
}

webpush.setVapidDetails('mailto:support@therosca.in', publicKey, privateKey);

const payLoad = {
  notification: {
    data: { url: "https://www.therosca.in/" },
    title: 'Get started',
    vibrate: [100, 50, 100]

}
};

// console.log(JSON.stringify(payLoad));

webpush.sendNotification(sub, JSON.stringify(payLoad));
