var mw = mw || {};

mw.Igadgettritium = {};

var iterator = mw.Igadgettritium;

jQuery(document).ready(function moovwebmoduleLoad() {
  for(var moduleKey in iterator) {
    var module = iterator[moduleKey];
    if(module.name && (jQuery("body").hasClass(module.name) || module.name === "mw-global") && typeof module.init !== 'undefined') {
      console.log(module.name);
      module.init();
    }
  }
});


