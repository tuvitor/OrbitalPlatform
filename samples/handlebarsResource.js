/**
 * Created by codeforcoffee on 6/10/14.
 */
var Pets = {
    dataList: [
        {id: 1, name: "magda"},
        {id: 2, name: "charlie"},
        {id: 3, name: "fluffy"}
    ],
    keysForIndex: ['id', 'name'],
    columnTag: 'td',
    rowTag: 'tr',
    className: 'list-column'
};

var template = $("#dynamicList").html()
window.Model = {};
window.Model.Pets = {
    dataList: [
        {id: 1, name: "magda"},
        {id: 2, name: "charlie"},
        {id: 3, name: "fluffy"}
    ],
    keysForIndex: ['id', 'name'],
    columnTag: 'td',
    rowTag: 'tr',
    className: 'list-column'
};
var compiledTemplate = Handlebars.compile(template);
compiledTemplate(window.Model)