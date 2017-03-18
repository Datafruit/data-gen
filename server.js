/*!
 * TEST SERVER
**/


var
koa = require('koa')
,serve = require('koa-static')

,port = 7501
,oneYear = 1000 * 60 * 60 * 24 * 365
,config = require('./config')
,app = koa()

//static files
app.use(function*(next) {
	this.set('Access-Control-Allow-Origin', '*')
	yield next
})

app.use(serve(__dirname, {
	maxAge: oneYear
}))

//start
app.listen(port, function() {
	console.log(new Date() + ' ' + config.siteName + ' runs on port ' + port)
})


