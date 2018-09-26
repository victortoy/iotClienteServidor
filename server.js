var five = require('johnny-five')
var board = new five.Board()
var express = require('express')
var app = express()
var valor = 0

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	next()
})

app.get('/', function(req, res){
	res.send(''+valor)
})

app.get('/about', function(req, res){
	res.send("Este es about")
})

app.listen(3000, function(){
	console.log("Servidor UP!!!")
})

board.on('ready', function(){
	var photoresistor = new five.Sensor({
		pin: "A0",
		freq: 500
	})

	photoresistor.on("data", function(){
		console.log(this.value)
		valor = this.value
	})
})