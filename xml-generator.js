const randomXMLGenerator = require('./random-xml-generator.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function generateRandomXML(options){

	var maxDepth = options['maxDepth'], 
		maxElementCountPerBranch = options['maxElementCountPerBranch'],
		xmlContainerId = options['xmlContainerId'],
		maxStringLength = options['maxStringLength'],
		random = options['random'];
		
	var _0x2bfcda = randomXMLGenerator._0x192720;

	var _0x1cb5c5 = random;
	
	if (_0x1cb5c5){
		var _0x50d290 = _0x2bfcda(0x7b4);  //'random'
	}
	else{
		var _0x50d290 = _0x2bfcda(0xa8c);  //'english'
	} 
	
	var _0x2e76db = new randomXMLGenerator.RandomJsonGenerator({
            'maxDepth': maxDepth,
            'satisfyDepth': false,
            'elementsPerBranch': maxElementCountPerBranch,
            'stringType': _0x50d290, 
            'possibleElements': ['strings', _0x2bfcda(0x563), _0x2bfcda(0xcfa), 'booleans', 'arrays'],  // _0x2bfcda(0x563) -> numbers _0x2bfcda(0xcfa) -> objects
            'randomKeyAlphabet': '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-abcdefghijklmnopqrstuvwxyz',
            'randomKeyRestrictions': [_0x2bfcda(0x3d8), _0x2bfcda(0xc5c)], 
            'maxStringLength': maxStringLength
	}),
	
	_0x32411f = '\x20\x20';  //indentation

	var _0x264448 = _0x2e76db[_0x2bfcda(0xbbf)]();  //_0x2bfcda(0xbbf) --> 'generate'

    var _0x4c3ddc = randomXMLGenerator.json2xml(_0x264448),
        _0x91b482 = null,
        _0x44eb79 = 'root';
   
    _0x4c3ddc = '<' + _0x44eb79 + '>' + _0x4c3ddc + '</' + _0x44eb79 + '>';
	
	/*
	console.log("-->" + _0x2bfcda(0xd5f));
	console.log("-->" + _0x2bfcda(0x563));
	console.log("-->" + _0x2bfcda(0xb61));
	console.log("-->" + _0x2bfcda(0xcfa));
	console.log("-->" + _0x2bfcda(0xc8b));
	console.log("-->" + _0x2bfcda(0x35d));
	console.log("-->" + _0x2bfcda(0x141));
	console.log("-->" + _0x2bfcda(0x733));
	console.log("-->" + _0x2bfcda(0xb1e));
	console.log("\n");
	*/
	//console.log("-->" + _0x2bfcda(0x4f9));
   //if (window['DOMParser']) {
        //var _0x51e7e4 = new DOMParser();
		var _jsdom = new JSDOM();
		var _0x51e7e4 = new _jsdom.window.DOMParser();
		
		//console.log(_0x51e7e4.window.document.createCDATASection);
        _0x91b482 = _0x51e7e4[_0x2bfcda(0x815)](_0x4c3ddc, 'text/xml');  //_0x2bfcda(0x815) -> 'parseFromString'
		//_0x91b482 = _0x51e7e4;
		//console.log(_0x2bfcda(0xb1e));
    //} 
	/*else{
		_0x91b482 = new ActiveXObject(_0x2bfcda(0x501));
		_0x91b482['async'] = ![], 
		_0x91b482['loadXML'](_0x4c3ddc);
	}*/

    var _0x492419 = _0x91b482[_0x2bfcda(0xb49)],	// _0x2bfcda(0xb49) -> 'documentElement'
        _0x3339ae = _0x492419[_0x2bfcda(0xd09)]('*');  //_0x2bfcda(0xd09) -> 'querySelectorAll'

		//_0x3339ae = _0x51e7e4.window.document.documentElement.querySelectorAll("*");
		//console.log(_0x51e7e4.window.document.documentElement);
    for (var _0x45b0dd = 0x0; _0x45b0dd < _0x3339ae[_0x2bfcda(0x586)]; _0x45b0dd++) {  // _0x2bfcda(0x586) -> 'length'
      //for (var _0x45b0dd = 0x0; _0x45b0dd < _0x3339ae.length; _0x45b0dd++) {  // _0x2bfcda(0x586) -> 'length'
		var _0x5bf627 = _0x3339ae[_0x45b0dd];
		
        if (true && randomXMLGenerator.chance(0.5)) {
            var _0xa4011d = randomXMLGenerator.WordDictionary['random'](),
                _0x5776dc = randomXMLGenerator.WordDictionary[_0x2bfcda(0x7b4)]();
            _0x5bf627[_0x2bfcda(0x19d)](_0xa4011d, _0x5776dc);   //_0x2bfcda(0x19d) -> 'setAttribute'
        }
        if (true && randomXMLGenerator.chance(0.25)) {
            var _0x3f9b31 = _0x91b482[_0x2bfcda(0x480)](randomXMLGenerator.sentence());  //_0x2bfcda(0x480) -> 'createCDATASection'
            randomXMLGenerator.insertRandomly(_0x3f9b31, _0x5bf627);
        }
        if (true && randomXMLGenerator.chance(0.25)) {
            var _0x400a9b = _0x91b482['createComment'](randomXMLGenerator.sentence());
            randomXMLGenerator.insertRandomly(_0x400a9b, _0x5bf627);
        }
    }
	
	var _0x352dc1 = _0x492419['outerHTML'];
	//var _0x352dc1 = _0x51e7e4.window.document['outerHTML'];
	_0x352dc1 = _0x2bfcda(0xb3b) 	// '<?xml version="1.0" encoding="UTF-8" ?>'
				+ 
				_0x352dc1;  // generated xml document
	
    let resultXMLDocumentAsString = randomXMLGenerator.vkbeautify[_0x2bfcda(0xcbe)](_0x352dc1, _0x32411f);
	
	return resultXMLDocumentAsString;
}

module.exports = { generateRandomXML }