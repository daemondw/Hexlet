var url = 'http://phphtml.net/?name=Василий&surname=Иванов';
var code_url = encodeURI(url);
document.write(code_url);
document.write(decodeURI(code_url));