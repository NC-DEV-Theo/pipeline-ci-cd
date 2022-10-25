function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Page');
  return template.evaluate();
}

function getData(){
    var data = {
        "name": "John Doe",
        "age": 21
    };
    return data;
}