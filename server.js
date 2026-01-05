//server run command : node server.js <port>

var fs = require('node:fs');
var http = require('node:http');
var currentServerProcess = require('node:process');

var xmlGenerator = require('./xml-generator.js');
var xmlGeneratorByCopilot = require('./xml-generator-by-copilot.js');

const hostname = 'localhost';

const port = currentServerProcess.argv[2];  // port argument of the command

const server = http.createServer((req, res) => {
	
	var _url = new URL(req.url, "http://" + hostname + ":" + port + "/");

	if(req.method === 'GET'){
		
		if(req.url === '/'){
			res.statusCode = 200;
			return page(res, "home.html");
		}
		
		else if(req.url.toLowerCase().startsWith('/favicon.ico')){
			res.statusCode = 200;
			res.end();
		}
		
		else if(req.url.toLowerCase().startsWith('/get-random-xml-copilot')){

			var generatedXMLDocument = xmlGeneratorByCopilot.generateRandomXML(40, 10, 0);
			
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/xml");
			res.write(generatedXMLDocument);
			res.end();
		}
		
		else if(req.url.toLowerCase().startsWith('/get-random-xml')){
			var maxDepth = _url.searchParams.get('maxDepth');
			var maxElementCountPerBranch = _url.searchParams.get('maxElementCountPerBranch');
			var maxStringLength = _url.searchParams.get('maxStringLength');
			var random = _url.searchParams.get('random');
			
			maxDepth = !isNaN(maxDepth) ? parseInt(maxDepth) : 1;
			maxElementCountPerBranch = !isNaN(maxElementCountPerBranch) ? parseInt(maxElementCountPerBranch) : 0;
			maxStringLength = !isNaN(maxStringLength) ? parseInt(maxStringLength) : 10;
			random = (random !== undefined && random !== null ? (random === 'true' ? true : false) : false);
			
			var generatedXMLDocument = xmlGenerator.generateRandomXML(
				{
					'maxDepth' : maxDepth, 
					'maxElementCountPerBranch': maxElementCountPerBranch, 
					'maxStringLength' : maxStringLength,
					'random' : random
				}
			);
			
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/xml");
			res.write(generatedXMLDocument);
			res.end();
		}
		
		else{
			res.statusCode = 301;
			res.writeHead(301, { Location: '/' });
			res.end();
		}
	}

});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});

function page(res, file){
	var _page = null;
	
	try{
		//check if file exists and readable, otherwise throw error
		fs.accessSync(file, fs.constants.F_OK | fs.constants.R_OK);  
		_page = fs.createReadStream(file);
	}
	catch(err){
		_page = fs.createReadStream("home.html");
	}
	
	_page.pipe(res);
}