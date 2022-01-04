//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/thrive'));

// app.get('*',function(req,res,next){
//   if(req.headers['x-forwarded-proto']!='https')
//     res.redirect('https://www.therosca.in'+req.url)
//   else
//     next() /* Continue to other routes if we're not redirecting */
// })

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/thrive/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
