var express = require('express');
var app= express();


app.get('/',(req,res)=>{
	console.log('root call 5000');
	res.send('root 5000');
});

app.get('/app',(eq,res)=>{
	console.log('calling app URL 5000');
	res.send('app URL 5000');
});

app.get('/app/test',(eq,res)=>{
        console.log('calling app URL using get method 5000');
        res.send('app URL using get method 5000');
});


app.listen(process.env.PORT || 5000,()=>{
	console.log('application running on port :',process.env.PORT||5000);
});

