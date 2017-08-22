var express = require('express');
var app= express();


app.get('/',(req,res)=>{
	console.log('root call 4000');
	res.send('root 4000');
});

app.post('/app',(eq,res)=>{
	console.log('calling app URL 4000');
	res.send('app URL 4000');
});

app.get('/app',(eq,res)=>{
        console.log('calling app URL using get method 4000');
        res.send('app URL using get method 4000');
});


app.listen(process.env.PORT || 4000,()=>{
	console.log('application running on port :',process.env.PORT||4000);
});

