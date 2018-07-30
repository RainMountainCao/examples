
// zepto源码部分
(function(window) {

	window.$ = zepto;
	var zepto = {};

	var $ = function (selector) {
		return zepto.init(selector);
	}

	zepto.init = function(selector) {
		var slice = Array.prototype.slice;
		var dom = slice.call(document.querySelectorAll(selector));
		return new Z(dom, selector);
	}

	function Z(dom, selector) {
		this.length = dom.length;
		for(var i=0; i<dom.length; i++) {
			this[i] = dom[i];
		}
		this['selector'] = selector;
	}

	$.fn = {
		css: function(key, value) {},
		html: function(value) {}
	}

	Z.prototype = $.fn;

})(window);

// jQuery源码部分

(function(window) {
	window.$ = $;
	
	var jQuery = function(selector) {
		return new jQuery.fn.init(selector);
	}

	var init = jQuery.fn.init = function(selector) {
		var slice = Array.prototype.slice
		var dom = slice.call(document.querySelectorAll(selector))
		this.length = dom.length;
		for(var i=0; i<dom.length; i++) {
			this[i] = dom[i];
		}
		this['selector'] = selector;
	}

	jQuery.fn = jQuery.prototype = {
		constructor: jQuery,
		css: function(key, value) {},
		html:function(value) {}
	}

	init.prototype = jQuery.fn;
	
})(window);
