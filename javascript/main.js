// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $nav = document.getElementById('#nav');
var $footer = document.getElementById('#footer');
// Helpers
var
/**
* @description Test if the body id is something
* @param  		{string}
* @return 		{bool}
*
*/
page = function page(name) {
  if (!name) {
    return $body.getAttribute('id');
  }

  return $body.getAttribute('id') == name;
};
(function () {
  "use strict";

  var specs = [{
    component: ".mobile-nav",
    triggers: [".mobile-nav__toggle"]
  }]; // NodeList.forEach polyfill for IE11

  if (window.NodeList && !window.NodeList.prototype.forEach) {
    window.NodeList.prototype.forEach = function (callback, thisArg) {
      var i;
      thisArg = thisArg || window;

      for (i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  var toggleable = function () {
    var openClass = "is-open";

    function open() {
      this.element.classList.add(openClass);
      this.isOpen = true;
    }

    function close() {
      this.element.classList.remove(openClass);

      if (this.isOpen && this.preventScroll) {
        document.body.classList.toggle(preventScrollClass);
      }

      this.isOpen = false;
    }

    function toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    function init(element, triggers, preventScroll) {
      this.element = element;
      this.triggers = triggers;
      this.preventScroll = preventScroll || false;
      this.isOpen = element.classList.contains(openClass) ? true : false;
      this.close();
      this.triggers.forEach(function (trigger) {
        trigger.addEventListener("click", toggle.bind(this));
      }, this);
      return this;
    }

    return {
      open: open,
      close: close,
      toggle: toggle,
      init: init
    };
  }();

  var setupToggleables = function setupToggleables(specs) {
    var components,
        triggers,
        triggerNodes,
        triggerArray,
        toggleables = [],
        i,
        j;
    specs.forEach(function (spec) {
      components = document.querySelectorAll(spec.component);

      for (i = 0; i < components.length; i++) {
        triggers = [];

        for (j = 0; j < spec.triggers.length; j++) {
          triggerNodes = components[i].querySelectorAll(spec.triggers[j]);
          triggerArray = Array.prototype.slice.call(triggerNodes);
          triggers = triggers.concat(triggerArray);
        }

        toggleables.push(Object.create(toggleable).init(components[i], triggers, spec.preventScroll));
      }
    });
    return toggleables;
  };

  window.toggleables = setupToggleables(specs);
})();