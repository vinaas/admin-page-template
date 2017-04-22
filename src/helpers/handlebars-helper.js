'use strict';

var HandlebarsLayouts = require('handlebars-layouts');

module.exports = function (Handlebars) {
    Handlebars.registerHelper(HandlebarsLayouts(Handlebars));

    Handlebars.registerHelper('ifEqual', function (a, b, options) {
        if (a === b) return options.fn(this);
        else return options.inverse(this);
    });
    Handlebars.registerHelper('ifContain', function (b, a, options) {
        if (a.indexOf(b) != -1) return options.fn(this);
        else return options.inverse(this);
    });


    Handlebars.registerHelper('repeat', function (count, options) {
        var str = '';
        var data;

        if (options.data) {
            data = Handlebars.createFrame(options.data);
        }

        for (var i = 0; i < count; i++) {
            if (data) {
                data.index = i;
            }

            str += options.fn(this, {
                data: data
            });
        }

        return str;
    });

};