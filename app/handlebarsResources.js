/**
 * Created by codeforcoffee on 6/10/14.
 */
Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});
Handlebars.registerHelper('dynamicList', function(listModel, options) {
    // declare primary list - the "model".
    // Model: { dataList = [{id: 1, name: "test"},{id: 2, name: "bar"}],
    //          keysForIndex = ["id", "name", "somethingNotDeclared"],
    //          columnTag: "td",
    //          rowTag: "tr",
    //          className: "myClass" }
    // keysForIndex array will display which columns to show.
    // dataObjects are the list of data to populate the list with.
    // tag is the HTML tag type to wrap each item inside.
    //
    // usage:
    // ie: {{#dynamicList Pets}}
    // Where Pets:
    //    var Pets = {
    //        dataList: [{id: 1, name: "magda", desc: "meow" },
    //                  {id: 2, name: "charlie", desc: "ruff" },
    //                  {id: 3, name: "fluffy", desc: "hiss" }],
    //        keysForIndex: ['id', 'name'],
    //        columnTag: 'td',
    //        rowTag: 'tr',
    //        className: 'list-column'
    //    }

    // temporary storage; grab column names
    this.storage = new Array();
    for (var i = 0; i <= listModel.dataList.length; i++) {
        this.storage.push(listModel.keysForIndex[i]);
    }
    this.out = "";

    // now we will search each list in the dataList by keysForIndex
    try {
        for (var j = 0; j < listModel.dataList.length; j++) {
            this.out = this.out + "<" + listModel.rowTag + ">";
            for (var i = 0; i < this.storage.length; i++ ) {
                if (this.storage[i] === undefined) break;
                if (!listModel.dataList[j].hasOwnProperty(this.storage[i])) {
                    this.out = this.out + "<" + listModel.columnTag + " />";
                } else {
                    var key = this.storage[i];
                    this.out = this.out + "<" + listModel.columnTag + ">" +
                        listModel.dataList[j][key] + "</" + listModel.columnTag + ">";
                }
            }
            this.out = this.out + "</" + listModel.rowTag + ">";
        }
    } catch(e) {

    }
    return new Handlebars.SafeString(this.out);
});