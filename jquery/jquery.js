var jQuery = function(selector, context) {
	return new jQuery.fn.init(selector, context);
};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery
}



var
/*  (?:pattern) : 匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用
    \s* : 匹配任何空白字符，包括空格、制表符、换页符等等 零次或多次 等价于{0,}
    (pattern) : 匹配pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，使用 $0…$9 属性
    [\w\W]+ : 匹配于'[A-Za-z0-9_]'或[^A-Za-z0-9_]' 一次或多次， 等价{1,}
    (<[wW]+>) :这个表示字符串里要包含用<>包含的字符，例如<p>,<div>等等都是符合要求的
    [^>]* : 负值字符集合,字符串尾部是除了>的任意字符或者没有字符,零次或多次等价于{0,},
    #([\w-]*))$ 匹配结尾带上#号的任意字符，包括下划线与-
*/
	// 										匹配html           id
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	init: function(selector, context) {
		var match, elem;
		/*$(document)
		$("input:radio", document.forms[0]); 
		$(‘input’, $(‘div’)) 
		$("<div>", { 
		         "class": "test", 
		         text: "Click me!", 
		         click: function(){ $(this).toggleClass("test"); } 
		}).appendTo("body"); */

		// HANDLE: $(""), $(null), $(undefined), $(false), $() 
		if (!selector) {
			return this; // 没有选择器  返回jQuery对象
		}
		// Handle HTML strings
		// $(‘<div>’)   $(‘div’)   $(‘#test’)  $(‘.test’)
		if (typeof selector === "string") {
			// HANDLE: $(DOMElement)
			if (selector.charAt(0) === "<" &&
			   selector.charAt(selector.length - 1) === ">" &&
			   selector.length >= 3) {

				// 判断传入为html标签
				// match数组第二个参数  不用匹配
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec(selector);
			}

			// 没有上下文 或者 html标签
			if (match && (match[1] || !context)) {
				if(match[1]) {
					// html

				}else {
					//id
					elem = document.getElementById(match[2]);
					if(elem && elem.parentNode) {
						this.length = 1;
						this[0] = elem;
					}
					this.context = document;
					this.selector = selector;
					return this;
				}
			}

		}
		// $(document)
		else if (selector.nodeType) {
			// HANDLE: $(function)
			// Shortcut for document ready
		}
		// $(function(){}) 
		else if (jQuery.isFunction(selector)) {
			return rootjQuery.ready(selector);
		}
		if (selector.selector !== undefined) {
			this.selector = selector.selector; // $($(‘.test’))
			this.context = selector.context;
		}
		return jQuery.makeArray(selector, this);
	};

jQuery.prototype.init.prototype = jQuery.prototype;



//console.log(jQuery().age);


// 对jQuery属性扩展 和 对jQuery.fn即原型属性进行扩展 公用同一个方法
// 谁调用 函数中的this指向谁 给实例属性或者原型扩充 jQuery或jQuery.fn
jQuery.extend = function() {
	/* var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},   // 传入参数有的话赋为参数
			i = 1,
			length = arguments.length,     // 参数长度
			deep = false;    // 深复制

			if(typeof target === "boolean") {
				copy = target;
				target = arguments[1] || {};
				i++;
			}

			if (typeof target !== "object") {
				target = {};
			}

			for(; i<length; i++) {
				src = arguments[i];
				name = arguments[i].name;
				if(copy) {

				}else {
					this[name] = src;
				}
			}
	target = this;
	return target;*/

	/*	// 深复制判断
	if(typeof target === "boolean") {  // 此次处理为boolean类型
		deep = target;									 // 传入的参数就是 是否深复制
		target = arguments[1] || {};     // 将target改为第二个参数
		i = 2;
	}

	// 传入不规则参数处理
	if(typeof target !== "object" && !jQuery.isFunction(target)) {
		target = {};
	}

	if(i === length) {
		target = this;     // 索引为该长度  赋值
		--i;
	}

	for(; i<length; i++) {
		if((options = arguments[i]) != null) {
			for(name in options) {   // 取出来的单个对象
				src = target[name];    // 1
				copy = options[name];  // 2
				if (target === copy) {   // 防止自引用
					continue;
				}
				//深拷贝，且被拷贝的属性值本身是个对象
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {    // 被拷贝的属性值是个数组
            copyIsArray = false;
            clone = src && jQuery.isArray(src) ? src : [];
					} else {    // 被拷贝的属性值是个plainObject，比如{ nick: 'casper' }
            clone = src && jQuery.isPlainObject(src) ? src : {};
          }
          target[ name ] = jQuery.extend( deep, clone, copy );  // 递归~
        } else if ( copy !== undefined ) {  // 浅拷贝，且属性值不为undefined
          target[ name ] = copy;
        }
			}
		}
	}
	return target;*/
}


/*jQuery.extend({star: '许魏洲'});
 */