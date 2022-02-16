const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.render('top.ejs');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });