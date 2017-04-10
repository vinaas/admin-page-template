'use strict';

var HandlebarsLayouts = require('handlebars-layouts');

var Helpers = require('handlebars-helpers');

module.exports = function (Handlebars) {
    Handlebars.registerHelper(HandlebarsLayouts(Handlebars));

    // Helpers({handlebars: Handlebars});

     ['array', 'code', 'collection', 'comparison', 'date', 'fs', 'html', 'i18n', 'inflection', 'logging', 'markdown', 'match', 'math', 'misc', 'number', 'path', 'string', 'url'].forEach(function(name) {
        Helpers[name]({
        handlebars: Handlebars
        });
    });

     Handlebars.registerHelper('ifCond', function(v1, v2, options) {
        if(v1 === v2) {
          return options.fn(this);
        }
        return options.inverse(this);
      });


    Handlebars.registerHelper('json', function (obj) {
        return JSON.stringify(obj);
    });

};