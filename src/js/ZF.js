/*
 * @file NY.js 提供 window.NY 全局对象，开放各类工具、组件、业务快捷方法，提供统一的交互模式及业务接口
 * @version 1.0.0.2
 * Create on 2016-05-05. By P.Lin
 *
 * 目前拥有的模块及方法如下（部分方法分前台后台调用）：
 * 	NY.constant（常量类，只有属性，没有方法）
 * 	NY.date（日期方法类，用于 计算或格式化 日期，需要依赖 jquery-dateFormat.js）
 * 		NY.date.format
 * 		NY.date.now
 * 		NY.date.transformTime
 * 		NY.date.getIncrementTime
 * 		NY.date.getDecrementTime
 * 	NY.number（数字格式化方法类）
 * 		NY.number.priceFormat
 * 		NY.number.dataPatchFormat
 * 		NY.number.toFixed
 * 		NY.number.getInt
 * 		NY.number.getDecimals
 * 	NY.string（字符串操作方法类）
 * 		NY.string.isEqual
 * 		NY.string.isEmpty
 * 		NY.string.removeInsideSpace
 * 		NY.string.initial
 * 		NY.string.breakLineToArray
 * 		NY.string.createRepeatChar
 * 	NY.util（工具类）
 * 		NY.util.argumentsToArray
 * 		NY.util.setTimeout
 * 		NY.util.getFirstInCollection
 * 		NY.util.getFieldByName
 * 		NY.util.getTagName
 * 		NY.util.isTagName
 * 		NY.util.encodeHtmlTag
 * 	NY.data（数据处理类）
 * 		NY.data.arrayToMap
 * 		NY.data.stringToArray
 * 	NY.feedback（uc专用）
 * 		NY.feedback.success
 * 		NY.feedback.warn
 * 		NY.feedback.info
 * 		NY.feedback.error
 * 	+NY.remind（uc专用）
 * 		NY.remind.showBusy
 * 		NY.remind.loading
 * 		NY.remind.hideLoading
 * 		NY.remind.waiting
 * 		NY.remind.hideWaiting
 * 	NY.tips（对$.dialog的一种封装，默认不带按钮且会自动消失。而NY.tips.ask带有两个按钮，并且不会自动消失）
 * 		NY.tips.warn
 * 		NY.tips.success
 * 		NY.tips.error
 * 		NY.tips.info
 * 		NY.tips.ask
 * 		NY.tips.showBusy
 * 	NY.success
 * 	NY.warn
 * 	NY.error
 * 	NY.showBusy
 * 	NY.waiting
 * 	NY.hideWaiting
 * 	NY.dom（与DON有关的操作封装）
 * 		NY.dom.scrollToBottom
 * 		NY.dom.setChecked
 * 		NY.dom.setUnchecked
 * 		NY.dom.fillFormByContainer
 * 		NY.dom.fillFormByTr
 * 		NY.dom.createRowByForm
 * 		NY.dom.resetForm
 * 		NY.dom.clearForm
 * 		NY.dom.createSelectOptions
 * 		NY.dom.fillSelectOptions
 * 		NY.dom.createCountDown
 * 	NY.event（提供一些快捷的绑定事件方法）
 * 		NY.event.enterPress
 * 		NY.event.enterUp
 * 		NY.event.enterDown
 * 		NY.event.inputNumberLimit
 * 	NY.ajax（对$.ajax的封装，兼容$.ajax的全部用法）
 * 	NY.get
 * 	NY.post
 * 	NY.jsonp
 * 	NY.mAjax（手机版用户中心专用）
 * 	NY.mGet
 * 	NY.mPost
 * 	NY.biz（业务类的方法封装）
 * 		NY.biz.createTextMapHelper
 * 		NY.biz.createObjectMapHelper
 * 		NY.biz.multiUpload（uc专用）
 * 		NY.biz.getMenuSet（uc专用）
 * 		NY.biz.setMenuHighlight（uc专用）
 * 		NY.biz.getListTable（uc专用）
 * 		NY.biz.useNoneDataFallback（uc专用）
 * 		NY.biz.makeListTableSortable（uc专用）
 * 		NY.biz.initSearchForm（uc专用）
 * 		NY.biz.chooseAllInTable（uc专用）
 * 	NY.plupload（上传细节的封装）
 * 		NY.plupload.createUploader
 * 		NY.plupload.previewImage
 * 		NY.plupload.setPreviewImage
 * 	NY.zeroClipboard（对复制插件使用的封装）
 * 		NY.zeroClipboard.init
 * 	NY.component（uc专用，组件初始化封装）
 * 		NY.component.initPagination
 * 		NY.component.initTabs
 * 		NY.component.initDropDown
 * 		NY.component.initNumber
 * 	NY.validater（uc专用，业务验证类）
 * 		NY.validater.clearValidateError
 * 		NY.validater.validateShowError
 NY.validater.formValidate
 * 	NY.proxyRenderer（uc专用，代理渲染类）
 * 		NY.proxyRenderer.renderContent
 * 		NY.proxyRenderer.renderCrumb
 * 		NY.proxyRenderer.renderPagination
 */

window.NY = window.NY || {};

NY.constant = (function () {
	// 前后端数据接口中的默认 键名（键用于标识选中项）
	var defaultKeyName = "id";
	// 前后端数据接口中的默认 值名（值用于展示）
	var defaultValueName = "name";

	return {
		// 文本类
		DEFAULT_BUSY_TEXT: "服务器繁忙，请稍后重试！",
		DEFAULT_TIPS_TITLE: "消息",
		DEFAULT_TIPS_ERROR_TITLE: "错误提醒",
		DEFAULT_TIPS_LOADING_TITLE: "加载中",
		// 上传动作提示文本
		UPLOAD_FILE_ERROR_TEXT: "文件格式不符合或文件大小超限",
		// 上传后的图片，需要添加此前缀浏览
		UPLOAD_FILE_IMG_PREFIX: "",

		// 配置类
		DATE_NORMAL_FORMAT: "yyyy-M-dd HH:mm:ss",
		DATA_ARRAY2MAP_DEFAULT_KEYNAME: defaultKeyName,
		DATA_ARRAY2MAP_DEFAULT_VALUENAME: defaultValueName,
		DEFAULT_TIPS_SHOW_DURATION: 3,
		DEFAULT_KEYNAME: defaultKeyName,
		DEFAULT_VALUENAME: defaultValueName

		// TODO: fillFormByContainer/createRowByForm/resetForm (data-name)
		// TODO: $_nyTips:id/className
	};
})();

/* 表单验证正则表达式 begin*/
NY.regEx = (function () {
	//密码验证
	return {
		passwordRegEx: "^(?=.*[0-9])(?=.*[a-zA-Z])^[\\w\\(\\)\\~\\!\\@\\#\\$\\%\\^\\&\\*\\-\\+\\=\\|\\{\\}\\[\\]\\:\\;\\<\\>\\,\\.\\?\/]{8,30}$"
	};

})();

// 由于依赖nyData数据，所以需要等$.ready之后才能使用
$(function () {
	// 静态资源路径
	NY.constant.STATIC_SOURCES_PATH = nyData.common.domain["static"] || "/";
});



/*
 * ------------------------
 * 无组件依赖的工具方法
 * ------------------------
 */
NY.date = (function () {
	var normalFormat = function (date) {
		return $.format.date(date, NY.constant.DATE_NORMAL_FORMAT);
	};
	/**
	 * @method transformTime 将一个秒数或毫秒数，转为 X年X月X天XX小时XX分钟XX秒 的结果。
	 * 						该方法来自nyTimeMaster内部的transformTime实现，这里将其改为公开的工具类方法
	 * @param timestamp {number|string} 需要处理的字符串
	 * @param options {Object} 配置项
	 * @param options.unitYear {string="年"} 作为结果中 年的单位
	 * @param options.unitMonth {string="个月"} 作为结果中 月的单位
	 * @param options.unitDay {string="天"} 作为结果中 天的单位
	 * @param options.unitHour {string="小时"} 作为结果中 小时的单位
	 * @param options.unitMinute {string="分钟"} 作为结果中 分钟的单位
	 * @param options.unitSecond {string="秒"} 作为结果中 秒的单位
	 * @param options.invalidTimeText {string="-"} 无效时间文本。当时间不是数字 或 小于等于0时，返回的文本
	 * @param options.isShowEmptyUnit {boolean=true} 是否显示没有值的单位，默认为true。
	 * 								说明：对于 transformTime(18050000) 的结果，当isShowEmptyUnit为true时，显示的是 5小时00分钟50秒，反之显示5小时50秒
	 * @param options.padZeroLevel {string="minute"} 补0的级别，默认为minute，表示对 分 和 秒 小于10 的时候 添加0前缀
	 * @param options.maxShowUnit {string="all"} 时间的最大展示单位，将根据unitLevelMap映射 显示级别
	 * @param options.useMillisecond {boolean=false} 使用毫秒为单位（将参数timestamp视作以毫秒为单位的值，会在处理中将其除以1000）。默认值为false
	 * @return {string} 转换后的结果，如果没有timestamp参数，则默认返回 "-"
	 *
	 * @example 举些栗子
	 * // 几个典型应用场景：

	 // 没有值的单位 是否显示
	 NY.date.transformTime(18050); // -> "5小时00分钟50秒"
	 NY.date.transformTime(18050, {isShowEmptyUnit: 0}); // -> "5小时50秒"

	 // 补0的级别（特别注意：补0之后，第一个单位开头的0会被删除）
	 NY.date.transformTime(15815347, {padZeroLevel:"all"}); // -> "6个月03天01小时09分钟07秒"
	 NY.date.transformTime(15815347, {padZeroLevel:"year"}); // -> "6个月03天01小时09分钟07秒"
	 NY.date.transformTime(15815347, {padZeroLevel:"hour"}); // -> "6个月3天01小时09分钟07秒"
	 NY.date.transformTime(15815347, {padZeroLevel:"second"}); // -> "6个月3天1小时9分钟07秒"
	 NY.date.transformTime(15815347, {padZeroLevel:"none"}); // -> "6个月3天1小时9分钟7秒"

	 // 时间的最大展示单位
	 NY.date.transformTime(18050, {maxShowUnit: "minute"}); // -> "300分钟50秒"
	 NY.date.transformTime(18050, {maxShowUnit: "second"}); // -> "18050秒"
	 */
	var transformTime = function (timestamp, options) {
		var unitLevelMap = {
			"all": -1,
			"year": 0,
			"month": 1,
			"day": 2,
			"hour": 3,
			"minute": 4,
			"second": 5,
			"none": 6
		};

		var settings = $.extend({
			unitYear: "年",
			unitMonth: "个月",
			unitDay: "天",
			unitHour: "小时",
			unitMinute: "分钟",
			unitSecond: "秒",
			invalidTimeText: "-",
			isShowEmptyUnit: true,
			padZeroLevel: "minute",
			maxShowUnit: "all",
			useMillisecond: false
		}, options);

		// 如果timestamp不是数字，或timestamp小于等于0时，返回无效时间文本
		if ((!$.isNumeric(timestamp)) || (timestamp <= 0)) {
			return settings.invalidTimeText;
		}

		var timeSecond = timestamp;
		if (settings.useMillisecond) {
			timeSecond = Math.round(timestamp / 1000);
		}
		var timeArray = [];
		var timeUnits = [
			31536000,	// year	31536000 = 365 * 24 * 60 * 60
			2592000,	// month 2592000 = 30 * 24 * 60 * 60
			86400,		// day	 86400 = 24 * 60 * 60
			3600,		// hour	3600 = 60 * 60
			60,			// minute
			1			// second
		];
		var timeUnitsText = [
			settings.unitYear,
			settings.unitMonth,
			settings.unitDay,
			settings.unitHour,
			settings.unitMinute,
			settings.unitSecond
		];
		// 补0的级别（4代表 补齐 05分05秒）
		var padZeroLevel = unitLevelMap[settings.padZeroLevel];
		var showUnitLevel = unitLevelMap[settings.maxShowUnit];

		// 将时间数值及时间单位，填充到timeArray时间数组中
		$.each(timeUnits, function (i, timeUnit) {
			// 当i小于设置的 最大显示单位时，不计算时间（比如72小时不计算为3天）
			if (i < showUnitLevel) {
				return;
			}

			// 如果timeSecond小于 时间单位上限，且timeArray数组还没有元素，说明是时间间隔的开头部分，则不需要显示单位（比如 “0年0月3天5小时” 中的 “0年0月”）
			if ((timeSecond < timeUnit) && (timeArray.length == 0)) {
				return;
			}

			// 根据时间单位 得出商（即为 x年x月x日 中的x）
			var x = Math.floor(timeSecond / timeUnit);
			// 余数即为下次 timeSecond 需要计算的值
			timeSecond = timeSecond % timeUnit;

			// 根据padZeroLevel 对小于10的值 前面补 0（默认对“分钟”和“秒”补=0）
			if ((i >= padZeroLevel) && (x < 10)) {
				x = "0" + x;
			}

			// 当 x 为0时，说明当前单位没有值。结果是否显示，取决于settings.isShowEmptyUnit的值
			if ((Number(x) === 0) && !settings.isShowEmptyUnit) {
				return;
			}

			// 向结果的时间数组中 添加 需要显示的时间
			timeArray.push(x + timeUnitsText[i]);
		});

		// 将时间数组拼接起来 即为结果（如果没有结果，起始与结束时间相同）
		var resultTimeText = timeArray.join("");

		if (!resultTimeText) {
			resultTimeText = settings.invalidTimeText;
		}
		// 由于补0策略的存在，导致可能出现 第一个时间单位值小于10时而被补0的情况，所以这里slice掉
		else if (resultTimeText.indexOf("0") === 0) {
			resultTimeText = resultTimeText.slice(1);
		}

		return resultTimeText;
	};

	return {
		format: normalFormat,
		now: function () {
			return normalFormat(new Date());
		},
		transformTime: transformTime,
		// 根据一个开始时间和一个时间间隔，得到一个将来的时间。开始时间可以是时间字符串或时间戳，也可以省略，当省略时，默认使用当前时间
		getIncrementTime: function (incrementTime, baseTimestamp) {
			return Number(new Date(baseTimestamp || new Date())) + Number(incrementTime || 0);
		},
		// 根据一个开始时间和一个时间间隔，得到一个过去的时间。开始时间可以是时间字符串或时间戳，也可以省略，当省略时，默认使用当前时间
		getDecrementTime: function (decrementTime, baseTimestamp) {
			return Number(new Date(baseTimestamp || new Date())) - Number(decrementTime || 0);
		}
	};
})();
NY.number = {
	/**
	 * @method priceFormat 价格格式化方法，为每3位数字 添加逗号分隔，支持带小数点的数值
	 * @param value {string|number} 需要转换的值（数字或数值型字符串）
	 * @return {string} 返回格式化后的字符串
	 *
	 * @example 举些栗子
	 * NY.number.priceFormat(12345678);	// "135,185"
	 NY.number.priceFormat("12345678");	// "135,185"
	 NY.number.priceFormat(12345678.05);	// "12,345,678.05"
	 NY.number.priceFormat("12345678.05");	// "12,345,678.05"
	 */
	priceFormat: function (value) {
		var originString = String(parseInt(value));
		var destString = "";
		var originStringLength = originString.length;
		var i = 0;
		//业务逻辑处理
		while (i < originStringLength) {
			var text;
			if(i == 0 ) {
				//截取传入值整数部分的最后三个数
				text = originString.slice(-i-3);
			}
			else {
				//截取传入值整数部分从后往前的三位数，并用“，”拼接起来
				text = originString.slice(-i-3, -i) + ",";
			}
			destString = text + destString;
			i += 3;
		}
		//小数部分的拼接
		var valueString = String(value);
		var destPoint = "";
		if (valueString.indexOf(".") !== -1) {
			destPoint = "." + valueString.split(".")[1];
		}

		return destString + destPoint;
	},
	/**
	 * @method dataPatchFormat 将小于指定长度的字符串，用指定的字符在 原字符串前 补充。当指定长度小于原字符串长度时，返回原字符串
	 * @param stringData {string|number} 需要处理的原字符串
	 * @param finalLength {string|number=6} 最终字符串的目标长度
	 * @param patchFlag {string="0"} 拼接的字符格式，如"0"、"#"等
	 * @return {string} 补充字符之后的字符串
	 *
	 * @example 举些栗子
	 * // 正常调用
	 NY.number.dataPatchFormat(111);		// "000111"
	 NY.number.dataPatchFormat("111");	// "000111"
	 NY.number.dataPatchFormat("111", 8);		// "00000111"
	 NY.number.dataPatchFormat("111", 8, "#");	// "#####111"
	 // 参数容错
	 NY.number.dataPatchFormat("111", 1);	// "111"
	 */
	dataPatchFormat: function (stringData, finalLength, patchFlag) {
		if (!stringData) {
			return stringData;
		}

		var processString = String(stringData) || "";
		finalLength = finalLength || 6;

		// 当指定长度小于原字符串长度时，返回原字符串
		if (finalLength < processString.length) {
			return stringData;
		}

		var destPatch = NY.string.createRepeatChar((patchFlag || "0"), finalLength);
		// 将补齐的数据和源数据拼接，截取最后需要的位数
		var destFormatData= (destPatch + stringData).slice(-finalLength);

		return destFormatData;
	},
	/**
	 * @method toFixed 将参数格式化为 指定小数位数的数字。为了保留小数点末尾的0，如 100.00， 返回值将以字符串的形式返回
	 * @param value {string|number} 将要格式化的数字或字符串型数字
	 * @param decimalLength {number} 保留的小数点位数（若该值小于原始数据小数位数，则会进行四舍五入保留指定位数）
	 * @return {string} 格式化后 带指定位数小数点的字符串
	 *
	 * @example 举些栗子
	 * NY.number.toFixed(100);			// "100.00"
	 NY.number.toFixed("100.2", 2);	// "100.20"
	 NY.number.toFixed(100.1258, 2);	// "100.13"
	 NY.number.toFixed("3.9955", 2);	// "4.00"
	 NY.number.toFixed("");			// "0.00"
	 */
	toFixed: function (value, decimalLength) {
		return Number(value).toFixed(decimalLength || 2);
	},
	/**
	 * @method getInt 获取指定值的整数部分
	 * @param value {string|number} 指定的值
	 * @return {number} 指定值的整数部分
	 *
	 * @example 举些栗子
	 * NY.number.getInt(100.1234);	// 100
	 NY.number.getInt("200");	// 200
	 NY.number.getInt();			// NaN
	 */
	getInt: function (value) {
		return parseInt(value);
	},
	/**
	 * @method getDecimals 获取指定值的小数部分
	 * @param value {string|number} 指定的值
	 * @param decimalLength {number=2} 保留的小数点位数（由于内部使用了toFixed，所以在截取小数时，也同样会四舍五入）
	 * @return {string} 指定值的小数部分
	 *
	 * @example 举些栗子
	 * NY.number.getDecimals(100);			// ".00"
	 NY.number.getDecimals(100.4567, 3);	// ".457"
	 NY.number.getDecimals("200.465");	// ".47"
	 NY.number.getDecimals();			// "NaN"
	 */
	getDecimals: function (value, decimalLength) {
		decimalLength = decimalLength || 2;

		return this.toFixed(value, decimalLength).slice(-(decimalLength + 1));
	}
};
NY.string = {
	/**
	 * @method isEqual 字符串比较。内部执行动作，会先将参数包裹在 String() 方法中，然后再使用 == 运算符进行比较。（可以通过第三个参数控制 是否忽略大小写）
	 * @param stringA {string|number} 需要比较的字符串A
	 * @param stringB {string|number} 需要比较的字符串B
	 * @param isIngoreCase {boolean=true} 是否忽略大小写，默认值是true，表示忽略大小写。仅当其值为false时，比较时才不忽略大小写
	 * @return {boolean} 字符串比较结果。相同则返回true，不等则返回false
	 *
	 * @example 举些栗子
	 * // 正常的使用场景
	 NY.string.isEqual("a", "A"); // true
	 NY.string.isEqual("a", "A", false); // false
	 NY.string.isEqual("a"); // false, 结果相当于 NY.string.isEqual("a", undefined)

	 // 参数类型不同时的结果
	 NY.string.isEqual(0, "0"); // true
	 NY.string.isEqual(1, "1"); // true
	 NY.string.isEqual(0, ""); // false

	 // 缺失参数时的结果（缺失第一个参数，与缺失第二个参数，执行过程都是相同的行为）
	 NY.string.isEqual(); // true
	 NY.string.isEqual(0); // false
	 NY.string.isEqual(""); // false
	 */
	isEqual: function (stringA, stringB, isIngoreCase) {
		stringA = String(stringA);
		stringB = String(stringB);

		if (isIngoreCase !== false) {
			stringA = stringA.toLowerCase();
			stringB = stringB.toLowerCase();
		}

		return stringA == stringB;
	},
	/**
	 * @method isEmpty 检测字符串是否为空。undefined、null、false这几个值的比较结果，取决于是否指定了严格匹配模式
	 * @param string {string|Object} 需要检测的字符串
	 * @param isStrictEmpty {boolean=false} 指定严格匹配模式时，仅在string为空字符串时，才返回true。默认值为false，不使用严格匹配模式
	 * @return {boolean} 字符串是否为空。是则返回true，不是则返回false
	 *
	 * @example 举些栗子
	 * // 不使用严格匹配模式时
	 NY.string.isEmpty("");			// true
	 NY.string.isEmpty(undefined);	// true
	 NY.string.isEmpty(null);		// true
	 NY.string.isEmpty(false);		// true

	 // 使用严格匹配模式时
	 NY.string.isEmpty("", true);		// false
	 NY.string.isEmpty(undefined, true);	// false
	 NY.string.isEmpty(null, true);		// false
	 NY.string.isEmpty(false, true);		// false

	 // 除以上情况之外，都返回false
	 NY.string.isEmpty(0);		// false
	 NY.string.isEmpty(NaN);		// false
	 NY.string.isEmpty("abc");	// false
	 NY.string.isEmpty(123);		// false
	 */
	isEmpty: function (string, isStrictEmpty) {
		var isEmptyString = false;

		switch (string) {
			case "": {
				isEmptyString = true;
				break;
			}
			// 下面这些（转成Boolean类型之后为false的）假值，在指定使用严格匹配(isStrictEmpty=true)时，会返回false，非严格匹配则返回true
			case undefined:
			case null:
			case false: {
				isEmptyString = !isStrictEmpty;
				break;
			}
			// NaN、0等值，不会被认为是空字符串
			default: {
				isEmptyString = false;
			}
		}

		return isEmptyString;
	},
	/**
	 * @method removeInsideSpace 删除字符串内部的空格
	 * @param string {string} 需要处理的字符串
	 * @return {string} 删除内部的空格之后的字符串
	 *
	 * @example 举个栗子
	 * NY.string.removeInsideSpace("a, b, c "); // "a,b,c"
	 */
	removeInsideSpace: function (string) {
		return String(string || "").replace(/\s+/g, "");
	},
	/**
	 * @method initial 将字符串的第一个字母转成大写
	 * @param string {string} 需要处理的字符串
	 * @return {string} 第一个字母转成大写 的字符串
	 *
	 * @example 举个栗子
	 * NY.string.initial("hello"); // "Hello"
	 */
	initial: function (string) {
		string = String(string || "");

		return string.charAt(0).toUpperCase() + string.slice(1);
	},
	/**
	 * @method breakLineToArray 根据换行符 将字符串 切割为数组（兼容Windows、Linux、Unix、Mac）
	 * @param string {string} 需要处理的字符串
	 * @return {Array<string>} 切割后 的字符串数组
	 *
	 * @example 举些栗子
	 * NY.string.breakLineToArray("Hello\r\nWorld!"); // ["Hello", "World!"]
	 * NY.string.breakLineToArray("Hello\nWorld!"); // ["Hello", "World!"]
	 * NY.string.breakLineToArray("Hello, World!"); // ["Hello, World!"]
	 */
	breakLineToArray: function (string) {
		string = String(string || "");

		// Windows下的换行符为 \r\n ，而Linux、Unix、Mac下的换行符为 \n
		return string.split(/\r?\n/g);
	},
	/**
	 * @method createRepeatChar 生成指定长度的重复字符
	 * @param charFlag {string} 重复的字符
	 * @param length {string|number} 需要重复的字符串长度
	 * @return {string} 返回重复字符的字符串
	 *
	 * @example 举些栗子
	 * NY.string.createRepeatChar("0", 6); 	// "000000"
	 NY.string.createRepeatChar("a"); 	// ""  效果等同于 NY.string.createRepeatChar("a", 0);
	 NY.string.createRepeatChar("abc", "3"); // "abcabcabc"
	 */
	createRepeatChar: function (charFlag, length) {
		length = (Number(length) + 1) || 0;

		return new Array(length).join(charFlag);
	}
};
// 一些简单操作的封装
NY.util = (function () {
	// 将 arguments 对象 转换成 标准数组
	var argumentsToArray = function (args) {
		return Array.prototype.slice.call(args);
	};
	// 从多个参数集合中，获取第一个dom对象（jQuery对象的add()方法会按元素在DOM中出现的顺序 重新构建一个集合，而本方法是按照参数顺序，获取第一个dom元素）
	var getFirstInCollection = function () {
		var domArrays = $.map(argumentsToArray(arguments), function (element) {
			// $.map会忽略 undefined值
			return $(element)[0];
		});

		return $(domArrays[0]);
	};
	// 根据传入的元素或选择器，返回标签名（统一为小写字母的形式）
	var getTagName = function (element) {
		var tagName = $(element).prop("tagName") || "";

		return tagName.toLowerCase();
	};
	var isTagName = function (element, compareTagName) {
		return NY.string.isEqual(getTagName(element), compareTagName);
	};
	// 根据name值，从一个form表单（也可以是其它容器）中获取对应的field元素
	var getFieldByName = function (name, container) {
		var $_container = getFirstInCollection($(container), $("#postForm"), $("form"));

		return $_container.find("[name=" + name + "]");
	};
	var setTimeout = (function () {
		// 暂不考虑 释放多余的timeoutSymbol属性引用（所以没有对 timeoutDo 进行二次封装）
		var timeoutSymbol = {};

		/**
		 * @method setTimeout 有时使用window.setTimeout需要自己手动clearTimeout，以保证该window.setTimeout的延迟函数有且仅执行一次。
		 * 					现在通过NY.util.setTimeout就可以智能管理这些 有且仅执行一次的延迟函数了！（以下对“有且仅执行一次的延迟函数”统称为“延迟函数”）。
		 * 					典型应用场景：点击某个按钮 会显示一些元素，过一段时间之后自动隐藏这些元素。
		 * 							但是当多次点击这个按钮时，最后一次显示的元素，可能在预期的显示时间之内，被隐藏了（因为之前还没执行的延迟函数 没有清空而到时执行了）
		 * 					使用方式：跟window.setTimeout一样，只是多了第一个参数，用来作为id标识不同的延迟函数（具体可见最后一个例子）。
		 * @param key {string} 唯一标识，用于区别 延迟函数。本方法支持 同时托管多个不同的延迟函数，所以需要一个类似id的标识来区别
		 * @param timeoutDo {function|string} 与window.setTimeout第一个参数一样
		 * @param millisecond {number} 与window.setTimeout第二个参数一样
		 * @param ... 与window.setTimeout第三个参数开始一样
		 * @return {number} 可用的 setTimeoutID，在调用系统的 setTimeout 方法之后生成。
		 * 					可以在 NY.util.setTimeout 根据这个 setTimeoutID 清除定时器
		 *
		 * @example 举个栗子 (*^__^*)
		 * // 以下代码将在5秒钟之后，打印十次。如果只想打印最后一个，需要手动调用clearTimeout，而这个管理过程很繁琐（请参考下一个例子）
		 for(var i = 0; i < 10; i++) {
				setTimeout(function () {
					console.log("看看我会打印多少次？");
				}, 5000);
			}
		 // 以下代码将在5秒钟之后，打印一次。这里手动调用了clearTimeout
		 var timeoutId = null;
		 for(var i = 0; i < 10; i++) {
				clearTimeout(timeoutId);

				timeoutId = setTimeout(function () {
					console.log("这样我就只会在最后一次打印");
				}, 5000);
			}
		 // 现在使用 NY.util.setTimeout 来达到上述效果，So easy! 妈妈再也不用担心我 clearTimeout 了 o(∩_∩)o
		 for(var i = 0; i < 10; i++) {
				NY.util.setTimeout("useMeIsAsmartDecision", function () {
					console.log("猜猜我会打印多少次？");
				}, 5000);
			}
		 */
		return function (key, timeoutDo, millisecond) {
			var argArray = argumentsToArray(arguments);
			var timeoutKey = argArray.shift();

			// 将之前未执行的setTimeout清除
			clearTimeout(timeoutSymbol[timeoutKey]);
			// 执行托管的setTimeout（参数），并将timeoutId返回（便于手动处理）
			return timeoutSymbol[timeoutKey] = window.setTimeout.apply(null, argArray);
		};
	})();
	/**
	 * @method encodeHtmlTag 将字符串中的html标签转义（目前只转义尖括号，即"<"和">"）
	 * @param content {string|Object} 参数支持字符串和对象。如果参数是字符串，则直接替换并返回；如果参数是对象，则返回一个 包含这个对象所有属性并且值已经被转义的对象。
	 * 							提示：对于Object类型的参数，目前仅支持一级属性的值转义，不支持多级嵌套属性转义
	 * @return {string|Object} 根据参数类型，返回 字符串或对象
	 *
	 * @example 举些栗子
	 * // js调用
	 // 参数为 普通字符串 的情况
	 NY.util.encodeHtmlTag("<div><span>hello</span></div>");  // "&lt;div&gt;&lt;span&gt;hello&lt;/span&gt;&lt;/div&gt;"
	 // 参数为 对象类型 的情况
	 NY.util.encodeHtmlTag({scriptContent:"haha<script>1111;</script>xixi", otherHtml:"<div><span>hello</span></div>"});
	 // Object {scriptContent: "haha&lt;script&gt;1111;&lt;/script&gt;xixi", otherHtml: "&lt;div&gt;&lt;span&gt;hello&lt;/span&gt;&lt;/div&gt;"}
	 */
	var encodeHtmlTag = function (content) {
		if (!content) {
			return content;
		}

		var replaceString = function (string) {
			return string.replace(/</mg, "&lt;")
				.replace(/>/mg, "&gt;");
		};

		var encodeResult = null;
		if (typeof content == "string") {
			encodeResult = replaceString(content);
		}
		else {
			encodeResult = {};
			$.each(content, function (name, value) {
				// 转义字符串形式的值
				if (typeof value == "string") {
					encodeResult[name] = replaceString(value);
				}
				// 非字符串形式的值不处理。TODO: 递归以支持多层嵌套结构
				else {
					encodeResult[name] = value;
				}
			});
		}

		return encodeResult;
	};

	return {
		argumentsToArray: argumentsToArray,
		setTimeout: setTimeout,
		getFirstInCollection: getFirstInCollection,
		getFieldByName: getFieldByName,
		getTagName: getTagName,
		isTagName: isTagName,
		encodeHtmlTag: encodeHtmlTag
	};
})();
// 数据加工处理方法
NY.data = {
	/**
	 * @method arrayToMap 将一个数组，转换成Map对象。可以用指定特定的key和value 从数组元素中获取值 构成 Map对象
	 * @param array {Array} 将要转换的数组
	 * @param keyName {string="id"|number} 从数组元素的这个 keyName 属性中获取值 作为 Map对象 的key。keyName默认值为id。
	 * @param valueName {string="name"|number} 从数组元素的这个 valueName 属性中获取值 作为 Map对象key对应的value。valueName默认值为name
	 * @return {Object} 转换成的Map对象
	 *
	 * @example 举些栗子
	 * var testArray = [{id: 1, name: "初级工程师", score: 10}, {id: 5, name: "中级工程师", score: 50}];
	 NY.data.arrayToMap(testArray); // 普通用法，得到对象： {1: "初级工程师", 5: "中级工程师"}
	 NY.data.arrayToMap(testArray, "score"); // 指定keyName为score，则得到：{10: "初级工程师", 50: "中级工程师"}
	 NY.data.arrayToMap(testArray, null, "score"); // 指定valueName为score，则得到：{1: 10, 5: 50}
	 NY.data.arrayToMap(testArray, "name", "id"); // 反向指定，可以得到 {初级工程师: 1, 中级工程师: 5}
	 NY.data.arrayToMap(testArray, "name", "name"); // 指定相同的keyName和valueName（创建option标签时可能会用到），得到 {初级工程师: "初级工程师", 中级工程师: "中级工程师"}
	 */
	arrayToMap: function (array, keyName, valueName) {
		array = array || [];
		keyName = keyName || NY.constant.DATA_ARRAY2MAP_DEFAULT_KEYNAME;
		valueName = valueName || NY.constant.DATA_ARRAY2MAP_DEFAULT_VALUENAME;

		var resultMap = {};

		$.each(array, function (i, item) {
			resultMap[item[keyName]] = item[valueName];
		});

		return resultMap;
	},
	/**
	 * @method stringToArray 将一个字符串切割成一个数组，可以自定义切割符和是否忽略空格
	 * @param string {string} 将要转换的字符串
	 * @param splitSymbol {string=","|RegExp} 切割标记，可以是字符串或正则表达式对象。默认值为 字符串型的【,】
	 * @param isIgnoreSpace {boolean=true} 是否忽略空格，默认为 true。表示在处理字符串前，会先替换掉字符串内的所有空格
	 * @return {Array} 转换后的数组对象
	 *
	 * @example 举些栗子
	 * NY.data.stringToArray("haha,xixi"); // ["haha", "xixi"]
	 NY.data.stringToArray("haha, xixi"); // ["haha", "xixi"]
	 NY.data.stringToArray("haha, xi xi", "a"); // ["h", "h", ",xixi"]
	 NY.data.stringToArray("haha, xi xi", "a", false); // ["h", "h", ", xi xi"]
	 NY.data.stringToArray("haha, xixi", /a/); // ["h", "h", ",xixi"]
	 NY.data.stringToArray(); // [""]
	 */
	stringToArray: function (string, splitSymbol, isIgnoreSpace) {
		string = String(string || "");
		splitSymbol = splitSymbol || ",";
		isIgnoreSpace = (isIgnoreSpace !== false);

		if (isIgnoreSpace) {
			string = NY.string.removeInsideSpace(string);
		}

		return string.split(splitSymbol);
	}
};


/*
 * ------------------------
 * 以下是组件相关的工具方法
 * ------------------------
 */

/**
 * 快捷feedback提示框，包含 NY.feedback.success、NY.feedback.warn、NY.feedback.info、NY.feedback.error 方法。
 * 由于依赖单一DOM元素来显示，所以在旧的提示框没消失之前，如果重新显示新的提示框，就会自动关闭旧的提示框，并触发旧提示框的关闭回调。
 *
 * @method success 主题为绿色的成功提示框。其它类型包括：黄色的warn提示框、蓝色的info提示框、红色的error提示框
 * @param text {string} 显示的消息文本
 * @param duration {number=3} 提示框自动消失时间（提示框出现过程的动画不算在该时间内），单位为秒。如果值小于等于0，则不自动消失
 * @param closedCallback {function=} 回调函数。当点击关闭按钮 或 提示框自动后，会触发该回调事件。回调中的this指向 包裹提示框最外层dom元素的jQuery对象
 * @return {Feedback} 返回创建的Feedback实例，该实例拥有 show、hide、destory 方法
 *
 * @example 举些栗子
 * NY.feedback.success("Hello world!");
 NY.feedback.warn("请填写确认码~", 5);
 NY.feedback.info("这是一个信息，它会展示10秒，消失后会有打印", 10, function () {console.info("info closed~")});
 NY.feedback.error("出错啦（提示框不会自动关闭）", 0, function () {console.log("手动关闭也会触发回调哦~")});
 */
NY.feedback = (function () {
	var Feedback = (function () {
		var $_nyFeedback = null;
		var containerClassName = "ui-feedback";
		var iconClassName = "ui-feedback-icon";
		var textClassName = "ui-feedback-text";
		var closeClassName = "ui-feedback-close";
		var closeEventNamespace = "click.closeFeedback";
		var instanceDataName = "feedback";
		var appearAnimateName = "slideDown";
		var appearAnimateDuration = 400;
		var defaultSettings = {
			type: "success",
			text: "操作成功",
			duration: 3,
			closedCallback: $.noop
		};

		// 构造器
		var constructor = function (options) {
			if (!$_nyFeedback) {
				$_nyFeedback = $("#nyFeedback");
			}
			if (!$_nyFeedback.length) {
				console.warn("找不到 #nyFeedback 元素");
				return;
			}
			// 关闭上一个 还没消失 feedback提示框
			var lastInstance = $_nyFeedback.data(instanceDataName);
			if (lastInstance && (lastInstance !== this)) {
				lastInstance.hide();
			}

			// 缓存变量
			var $_layout = $_nyFeedback;
			var $_container = $_layout.find("." + containerClassName);
			var $_close = $_container.find("." + closeClassName);
			// init
			var settings = $.extend({}, defaultSettings, options);
			var feedbackInstance = this;
			var hideTimeoutId = null;
			$_container.removeClass()
				.addClass(containerClassName + " " + containerClassName + "-" + settings.type);
			$_container.find("." + textClassName).html(settings.text);
			// 自动关闭
			if (settings.duration > 0) {
				hideTimeoutId = setTimeout(function () {
					feedbackInstance.hide();
				}, settings.duration * 1000 + appearAnimateDuration);
			}
			// 绑定事件
			$_close.bind(closeEventNamespace, function () {
				feedbackInstance.hide();
			});
			// 保存引用，方便识别实例化对象
			$_layout.data(instanceDataName, feedbackInstance);

			// 实例方法
			this.show = function () {
				$_layout.show();
				$_container.hide();
				$_container[appearAnimateName](appearAnimateDuration);

				return feedbackInstance;
			};
			this.hide = function () {
				$_layout.stop(true, true).hide();
				settings.closedCallback.call($_container);
				feedbackInstance.destory();

				return feedbackInstance;
			};
			this.destory = function () {
				// 清理定时器、事件、引用
				clearTimeout(hideTimeoutId);
				$_close.unbind(closeEventNamespace);
				$_layout.data(instanceDataName, null);
				// 删除方法
				delete feedbackInstance.show;
				delete feedbackInstance.hide;
				delete feedbackInstance.destory;
				// 释放局部变量
				$_layout = null;
				$_container = null;
				$_close = null;
				settings = null;
				feedbackInstance = null;
				hideTimeoutId = null;
			};
		};

		return constructor;
	})();

	var DEFAULT_SHOW_SECOND = 3;
	var feedbackMethods = [
		"success",
		"warn",
		"info",
		"error"
	];
	// 挂载方法的对象
	var methodObject = {};
	$.each(feedbackMethods, function (i, methodName) {
		methodObject[methodName] = function (text, duration, closedCallback) {
			var feedback = new Feedback({
				type: methodName,
				text: text,
				duration: $.isNumeric(duration) ? duration: DEFAULT_SHOW_SECOND,
				closedCallback: closedCallback || $.noop
			});

			feedback.show();

			return feedback;
		};
	});

	return methodObject;
})();

/**
 * 有icon主题的，快捷artDialog提示框，包含 NY.tips.success、NY.tips.warn、NY.tips.error、NY.tips.info、NY.tips.showBusy、NY.tips.ask 方法。
 *
 * @method success 主题为绿色成功图标提示框，warn为橙色警示图标提示框，error为红色错误图标提示框，info为蓝色通知图标提示框，ask为蓝色询问图标提示框
 * @param options {object} 配置参数项。下面的参数仅列举了修改的值，更多参数可以查看这里： http://lab.seaning.com/_doc/API.html
 * @param options.icon {string} 提示框图标
 * @param options.title {string="提示信息"} 提示框标题，可选，默认为“提示信息”
 * @param options.content {string|HTMLElement} 提示框内容。可以是字符串或DOM对象
 * @param options.subTipContent {string} 提示框中的附加说明内容
 * @param options.padding {string="48px 80px 40px 10px"} 提示框内容区的padding值
 * @param options.time {number=3} 提示框自动消失时间，单位为秒，默认值为 NY.constant.DEFAULT_TIPS_SHOW_DURATION
 * @param options.close {function=$.noop} 提示框关闭的回调函数，暂时没有加入业务逻辑
 * @return {artDialog} artDialog 实例
 *
 * @example 举些栗子
 * NY.tips.success({content: "Hello world!"});
 NY.tips.warn({content: "警告警告", subTipContent: "这是一个警告"});
 NY.tips.warn({content: "警告内容", subTipContent: "我带有一个按钮，就不自动关闭了~", ok: true});
 NY.tips.error({content: "对不起，系统超载，请下车！"});
 NY.tips.info({content: "这是一个信息，它会展示10秒，消失后会有打印", time: 10, close: function () {console.info("info closed~")}});
 NY.tips.showBusy();
 NY.tips.ask({content: "你有权保持沉默，但你所说的每一句话都将成为呈堂证供", ok: function () {console.log("你点击了确定 :-)")}});
 */
NY.tips = (function () {
	var tipsMethodsObj = {};
	var tipsTypeList = ["success", "warn", "error", "info"];

	$.each(tipsTypeList, function (i, tipsType) {
		tipsMethodsObj[tipsType] = function (options) {
			var settings = $.extend(true, {
				icon: "uc_" + tipsType,
				title: "提示信息",
				content:  "",
				subTipContent: "",
				// 已去掉皮肤样式中的默认padding，在此用js控制 提示框的padding
				padding: "48px 80px 40px 10px",
				time: NY.constant.DEFAULT_TIPS_SHOW_DURATION,
				close: $.noop
			}, options);

			// 如果指定subTipContent参数，则根据content的类型，将subTipContent追加至content后面
			if (settings.subTipContent) {
				var subTipContent = [
					'<p class="sub-tip">',
					settings.subTipContent,
					'</p>'
				].join("");

				// 字符串则拼接
				if (typeof settings.content == "string") {
					settings.content += subTipContent;
				}
				// 若是DOM元素，则使用新元素包裹content和subTipContent
				// （但这种情况下，当关闭弹窗时，原DOM元素被会新的div标签包裹，且subTipContent会被“带回”原DOM元素位置后面）
				else {
					var $_wrapper = $(settings.content).wrap("<div>").parent();

					$_wrapper.append(subTipContent);
					settings.content = $_wrapper[0];
				}
			}

			// 当设置 确定、取消或自定义按钮时，取消自动隐藏弹窗
			if (settings.ok || settings.cancel || settings.button) {
				settings.time = options.time || 0;
			}

			delete settings.subTipContent;

			return window.parent.$.dialog(settings);
		};
	});

	// 作为ajax请求失败时的提示
	tipsMethodsObj.showBusy = function (options) {
		return tipsMethodsObj.error($.extend({
			content: NY.constant.DEFAULT_BUSY_TEXT
		}, options));
	};

	// 询问提示框，底层调用了 NY.tips.success 实现。二次封装了询问icon、title、取消按钮，且不自动关闭
	tipsMethodsObj.ask = function (options) {
		return tipsMethodsObj.success($.extend({
			icon: "uc_ask",
			title: "确认？",
			cancel: true
		}, options));
	};

	return tipsMethodsObj;
})();

// 封装 NY.success、NY.warn、NY.error、NY.showBusy 方法。
// 调用方式： NY.success("hello world!", 5, function () { console.log("NY.success colsed.") });
(function () {
	var methodList = ["success", "warn", "error", "showBusy"];

	$.each(methodList, function (i, methodType) {
		NY[methodType] = function (text, duration, closedCallback) {
			var settings = {
				content: text,
				time: duration,
				close: closedCallback
			};

			return NY.tips[methodType](settings);
		};
	});
})();


// 因为依赖 #nyWaitingTip 元素，所以将方法定义放在 $(function () {}) 中，等DOM加载完后就有 #nyWaitingTip 元素
$(function () {
	// 【加载中】的提示框，用于异步请求过程中的展现
	var $_nyWaitingTip = $("#nyWaitingTip");
	NY.waiting = function (waitText, isMask) {
		$_nyWaitingTip.find(".loading-tip-text").html(waitText);

		if(isMask){
			$_nyWaitingTip.find('.ny-loading-mask').show();
		}else{
			$_nyWaitingTip.find('.ny-loading-mask').hide();
		}
		// TODO: 根据 isMask 显示遮罩

		$_nyWaitingTip.show();
	};
	NY.hideWaiting = function () {
		$_nyWaitingTip.hide();
	};
});



// DOM 操作工具类
NY.dom = (function () {
	var fillFormByContainer = function (container, targetForm) {
		var $_container = $(container);
		var $_targetForm = $(targetForm || "form");

		if (!$_targetForm.length) {
			return false;
		}

		$_container.find("[data-name]").each(function (i, element) {
			var $_element = $(element);
			var fieldName = $_element.data("name");
			var fieldValue = $_element.data("value") || $_element.html();

			var $_field = $_targetForm.find("[name=" + fieldName + "]");
			// $_element和$_field都不可缺少，否则操作将不成功
			if (!$_element.length || !$_field.length) {
				return;
			}

			// 指定form中 接收数据的元素类型（类型不同，赋值方法也不同）
			var type = $_element.data("type") || $_element.attr("type");
			switch (type) {
				case "radio": {
					// radio 和 checkbox 的行为暂时一致
					// break;
				}
				case "checkbox": {
					// TODO: 支持同一个name多value的情况
					$_field[0].checked = $_element[0].checked;
					break;
				}
				case "text": {
					// 支持文本型的 展示类内容 填充（需要在带data-name的元素上 设置data-type）
					$_field.html($.trim(fieldValue));
					break;
				}
				// 对<select>类型，可以利用data-name的形式，将selected的value“传递”到form中。这里暂不特殊处理
				default: {
					$_field.val($.trim(fieldValue));
				}
			}
		});
	};

	return {
		// 滚动到底部
		scrollToBottom: function (element) {
			var $_element = $(element);

			$_element.scrollTop($_element[0].scrollHeight);
		},
		// 设置元素为选中状态
		setChecked: function (element) {
			var $_element = $(element);

			$_element.prop("checked", true);
		},
		// 设置元素为 非选中状态
		setUnchecked: function (element) {
			var $_element = $(element);

			$_element.prop("checked", false);
		},
		/**
		 * @method fillFormByContainer 根据容器元素内 带data-name属性的子元素，使用其html来填充form表单域的值（如果该子元素提供data-value属性，则优先使用该值代替其html）
		 * @param container {string|HTMLElement|jQueryObject} jQuery选择器或dom元素或jQuery对象。作用是从这个元素中查找带有data-name属性的子元素
		 * @param targetForm {string|HTMLElement|jQueryObject} 参数类型同container。作为目标form，若找不到则return false。
		 * 					若存在，则在这个form中寻找表单域（name与data-name相同），并填充值（目前仅支持文本类）。
		 *
		 * @example 举个栗子
		 * <!-- 如果使用NY.dom.fillFormByContainer方法，则用table作为容器 -->
		 <table id="table" class="table-bordered table-condensed">
		 <tr>
		 <!-- 普通用法，通过使用data-name指定元素，使其内容（html）填充到form相应字段中 -->
		 <td data-name="fieldOne">我就是那个字段一的值</td>
		 <td data-name="fieldTwo">我就是那个字段二~的值</td>
		 <!-- 另一种用法，可以设定特殊的值到form相应字段中（即data-value的值） -->
		 <td data-name="fieldThree" data-value="这是个正经公司">这个公司好污~嘘，没人注意到我说什么！</td>
		 <td>
		 <!-- 如果使用NY.dom.fillFormByTr方法，则可以用tr中的任意一个元素或tr本身作为参数来调用 -->
		 <span id="couReNao">我来凑个热闹</span>
		 </td>
		 </tr>
		 </table>
		 <form action="#" id="postForm">
		 <!-- form表单中的字段，带有name属性的域会在调用NY.dom.fillFormByXX方法时被自动填充值 -->
		 <input type="text" name="fieldOne" placeholder="我是字段一，我的值呢？" />
		 <br>
		 <input type="text" name="fieldTwo" placeholder="我是字段二~，我的值呢？" />
		 <br>
		 <input type="text" name="fieldThree" placeholder="这个公司怎么样？" />
		 </form>
		 // 使用 fillFormByContainer 方法需要指定包含容器。但如果该容器中有多个data-name相同的元素，则后面元素的值会覆盖前面元素的值
		 NY.dom.fillFormByContainer("#table", "#postForm");
		 // 使用 fillFormByTr 方法则指定 tr的某一个子元素 或 tr本身 作为容器
		 NY.dom.fillFormByTr("#couReNao", "#postForm");
		 */
		fillFormByContainer: fillFormByContainer,
		/**
		 * @method fillFormByTr 与fillFormByContainer不同的是，函数会判断element是不是tr或tr的子元素，如果都不是，则return false。
		 * @param element {string|HTMLElement|jQueryObject} 如果element不是tr标签，则会尝试寻找element的父元素，直到发现tr标签。若找不到tr标签，则return false
		 * @param targetForm {string|HTMLElement|jQueryObject} 同fillFormByContainer方法的targetForm参数
		 */
		fillFormByTr: function (element, targetForm) {
			var $_element = $(element);

			if (!NY.util.isTagName($_element, "tr")) {
				$_element = $_element.parents("tr");
			}

			if (!$_element.length) {
				return false;
			}

			fillFormByContainer($_element, targetForm);
		},
		/**
		 * @method createRowByForm 可以通过 表单数据 创建一个表格行（需要artTemplate模版）。
		 * 						原理是 将表单中带有 name 属性的域，取出来封装成一个 map数据对象，然后将其作为数据源 传给artTemplate模版方法，并将结果返回
		 * @param rowTemplate {string} artTemplate模版的id
		 * @param originForm {string|HTMLElement|jQueryObject} 源表单，artTemplate模版的数据来源
		 * @param dataWrap {string=|function(fieldDataMap):Object} 如果dataWrap是字符串，则相当于指定了 模版的数据源的属性名。
		 * 						如果dataWrap是方法，则会将dataWrap的返回值 作为 模版的数据源。dataWrap作为方法时 会接受一个参数，是由表单域构建的 map数据对象。
		 * 						当dataWrap为空，或者dataWrap方法的返回值为空时，将使用默认的 map数据对象 作为 模版的数据源
		 * @return {string} 根据指定模版和表单数据源生成的 HTML字符串
		 *
		 * @example 举个栗子
		 * <table id="testTable">
		 <tr>
		 <th>id</th>
		 <th>姓名</th>
		 <th>手机</th>
		 </tr>
		 <tr>
		 <td>100020</td>
		 <td>小明</td>
		 <td>13800138000</td>
		 </tr>
		 </table>
		 <script type="text/html" id="rowTemplate">
		 <tr>
		 <td>{{id}}</td>
		 <td>{{username}}</td>
		 <td>{{mobile}}</td>
		 </tr>
		 </script>
		 <!-- 下面这个模版，是在 user 变量中取值的 -->
		 <script type="text/html" id="rowTemplateByUser">
		 <tr>
		 <td>{{user.id}}</td>
		 <td>{{user.username}}</td>
		 <td>{{user.mobile}}</td>
		 </tr>
		 </script>
		 <form id="testForm">
		 姓名：<input type="text" name="username" value="请输入姓名" />
		 手机：<input type="text" name="mobile" value="请输入手机" />
		 </form>

		 // 普通调用法（在表格中 添加 一个带数据的新表格行）
		 $(testTable).append(NY.dom.createRowByForm("rowTemplate", testForm));

		 // 这次换了模版id，所以这种普通调用方法 虽然能生成一个表格行，但是不带数据
		 $(testTable).append(NY.dom.createRowByForm("rowTemplateByUser", testForm));
		 // 但可以通过 指定模版数据源的属性名 来适应新模版（这次表格虽然换了不同的模版，但还是可以显示新增的数据）
		 $(testTable).append(NY.dom.createRowByForm("rowTemplateByUser", testForm, "user"));

		 // 这种是高级用法，可以扩展和覆盖 模版数据源（这次的id有了，而且不管表单域输入的姓名是什么，都会被覆盖）
		 $(testTable).append(NY.dom.createRowByForm("rowTemplate", testForm, function (fieldDataMap) {
				fieldDataMap.id = "666666";
				fieldDataMap.username = "我是胖虎，我要覆盖表单输入的姓名";

				return fieldDataMap;
			}));
		 */
		createRowByForm: function (rowTemplate, originForm, dataWrap) {
			var $_originForm = $(originForm || "form");

			if (!$_originForm.length) {
				return false;
			}

			var templateData = null;
			var fieldDataMap = {};
			$_originForm.find("[name]").each(function (i, fieldElement) {
				var $_fieldElement = $(fieldElement);
				var elementType = $_fieldElement.data("type") || $_fieldElement.attr("type");
				var name = $_fieldElement.attr("name");
				var value = $_fieldElement.val();

				// select 是有html()的，这里需要将其过滤
				var tagName = NY.util.getTagName($_fieldElement);
				if (!value && (tagName != "input") && (tagName != "select")) {
					value = $_fieldElement.html();
				}

				if ((elementType == "checkbox") || (elementType == "radio")) {
					var fieldDataValue = fieldElement.checked ? $_fieldElement.data("checked_value") : $_fieldElement.data("unchecked_value");

					value = fieldDataValue;
				}

				// 暂不支持name相同的情况，如单选框和复选框
				fieldDataMap[name] = value;
			});

			// 支持函数参数，相当于提供了mix功能（如果dataWrap函数没有返回值，则使用直接使用 fieldDataMap 作为模版的数据源）
			if ($.isFunction(dataWrap)) {
				templateData = dataWrap.call(fieldDataMap, fieldDataMap) || fieldDataMap;
			}
			// 如果有指定 数据源的属性名，则将表单数据fieldDataMap包裹在该属性名下
			else if (dataWrap) {
				templateData = {};
				templateData[dataWrap] = fieldDataMap;
			}
			// 否则直接使用fieldDataMap作为模版的数据源
			else {
				templateData = fieldDataMap;
			}

			return template(rowTemplate, templateData);
		},
		/**
		 * @method resetForm 重置form表单的字段（会调用原生form.reset方法）。用来额外解决 默认的form.reset方法对hidden型的input不起作用的情况。
		 * 					使用说明：为 需要重置的hidden型input 添加 data-reset_value 属性及值，然后调用NY.dom.resetForm(formElement)即可
		 * @param form {string|HTMLElement|jQueryObject} 如果没有传参数 或 所传参数没有找到对应的DOM元素，则默认使用页面中的第一个<form>元素
		 * @param resetValueDataName {string="reset_value"} 对带有该dataName的元素进行重置（该元素需带[name]属性，某则不被认为是 需要重置的表单域）
		 *
		 * @example 举个栗子
		 * <form id="testForm">
		 <input type="text" id="testText" name="text" value="hahaha" />
		 <input type="hidden" id="testHidden" name="recordId" value="-1" data-reset_value="-1" />
		 </form>

		 // 打印初始化时的值
		 console.log("testText:[%s] -- testHidden:[%s]", testText.value, testHidden.value); // testText:[hahaha] -- testHidden:[-1]

		 // 使用js修改这些值
		 testText.value = "lalala";
		 testHidden.value = 100010;
		 console.log("testText:[%s] -- testHidden:[%s]", testText.value, testHidden.value); // testText:[lalala] -- testHidden:[100010]
		 // 使用form原生的reset方法重置表单（可以看到text型的input被重置了，但hidden型的input没有被重置）
		 testForm.reset();
		 console.log("testText:[%s] -- testHidden:[%s]", testText.value, testHidden.value); // testText:[hahaha] -- testHidden:[100010]

		 // 再次使用js修改这些值
		 testText.value = "hehehe";
		 testHidden.value = 666666;
		 console.log("testText:[%s] -- testHidden:[%s]", testText.value, testHidden.value); // testText:[hehehe] -- testHidden:[666666]
		 // 然后使用 NY.dom.resetForm 方法来重置
		 NY.dom.resetForm(testForm);
		 // 看看结果吧(*^__^*)
		 console.log("testText:[%s] -- testHidden:[%s]", testText.value, testHidden.value); // testText:[hahaha] -- testHidden:[-1]
		 */
		resetForm: function (form, resetValueDataName) {
			var $_form = NY.util.getFirstInCollection($(form), $("form"));
			resetValueDataName = resetValueDataName || "reset_value";

			if (!$_form.length) {
				return;
			}

			// begin reset
			$_form[0].reset();
			$_form.find("[name]").each(function () {
				var $_formField = $(this);
				var defaultResetValue = $_formField.data(resetValueDataName);

				if (defaultResetValue !== undefined) {
					var type = $_formField.data("type") || $_formField.attr("type");

					if (type == "text") {
						$_formField.html(defaultResetValue);
					}
					else {
						$_formField.val(defaultResetValue);
					}
				}
			});
		},
		/**
		 * @method clearForm 清空form中带有name的表单域的值，对 radio 和 chechbox 会取消选中状态。button，submit，reset，image 不清空。
		 * @param form {string|HTMLElement|jQueryObject} 如果没有传参数 或 所传参数没有找到对应的DOM元素，则默认使用页面中的第一个<form>元素
		 *
		 * @example 举个栗子
		 * NY.dom.clearForm("form");
		 */
		clearForm: function (form) {
			var $_form = NY.util.getFirstInCollection($(form), $("form"));

			if (!$_form.length) {
				return;
			}

			// 将有name的域清空
			$_form.find("[name]").each(function () {
				var type = this.type;
				var $_formField = $(this);
				switch (type) {
					// 不需要清空值的表单元素
					case "button":
					case "submit":
					case "reset":
					case "image": {
						return;
					}
					// 以下表单元素清空值
					case "radio":
					case "checkbox": {
						$_formField.prop("checked", false);
						break;
					}
					// text,password,hidden,textarea,select,file; range,number,url,email...等其他H5 input
					default: {
						$_formField.val("");
						break;
					}
				}
			});
		},
		/**
		 * @method createSelectOptions 根据一个数据项列表，返回创建的<option>元素（已使用jQuery包装）。可以将返回的数组添加到select元素中。
		 * @param dataList {Array} 数据项列表
		 * @param valueKeyName {string="id"} 从数组元素的这个 valueKeyName 属性中获取值 作为 <option>元素 的value。valueKeyName默认值为id
		 * @param textKeyName {string="name"} 从数组元素的这个 textKeyName 属性中获取值 作为 <option>元素 的text。textKeyName默认值为name
		 * @return {Array<jQueryObject>} 创建的<option>元素（已使用jQuery包装）
		 *
		 * @example 举些栗子
		 * // 数据项列表
		 var optionDataList = [
		 {"id":22,"name":"Windows"},
		 {"id":23,"name":"Linux"}
		 ];
		 // 常见使用方法
		 NY.dom.createSelectOptions(optionDataList); // [n.fn.init[1], n.fn.init[1]]
		 // 高级使用方法（指定option的value和text相同）
		 NY.dom.createSelectOptions(optionDataList, "id", "id");
		 */
		createSelectOptions: function (dataList, valueKeyName, textKeyName) {
			dataList = dataList || [];
			valueKeyName = valueKeyName || NY.constant.DEFAULT_KEYNAME;
			textKeyName = textKeyName || NY.constant.DEFAULT_VALUENAME;

			return $.map(dataList, function (optionItem, i) {
				var $_newOption = $("<option>").text(optionItem[textKeyName])
					.val(optionItem[valueKeyName]);
				// 将创建<option>元素 的原始数据源，放在<option>元素的data-source中，以向外部提供 访问原始数据源的机会
				$_newOption.data("source", optionItem);

				return $_newOption;
			});
		},
		/**
		 * @method fillSelectOptions 根据一个数据项列表，创建<option>元素，并填充到指定的<select>元素中。实现细节使用了 NY.dom.createSelectOptions 方法
		 * @param select {string|HTMLElement|jQueryObject} <select>元素
		 * @param dataList {Array} 数据项列表
		 * @param valueKeyName {string="id"} 从数组元素的这个 valueKeyName 属性中获取值 作为 <option>元素 的value。valueKeyName默认值为id
		 * @param textKeyName {string="name"} 从数组元素的这个 textKeyName 属性中获取值 作为 <option>元素 的text。textKeyName默认值为name
		 *
		 * @example 举个栗子
		 * // 数据项列表
		 var optionDataList = [
		 {"id":22,"name":"Windows"},
		 {"id":23,"name":"Linux"}
		 ];
		 // 使用方法（更多可参见NY.dom.createSelectOptions）
		 NY.dom.fillSelectOptions($("select"), optionDataList);
		 */
		fillSelectOptions: function (select, dataList, valueKeyName, textKeyName) {
			var $_select = $(select);

			// $.each(this.createSelectOptions(dataList, valueKeyName, textKeyName), function (i, optionElement) {
			// $_select.append(optionElement);
			// });
			// 使用下面更高级的方法向<select>添加<option>
			$_select.append(this.createSelectOptions(dataList, valueKeyName, textKeyName));
		},
		/**
		 * @method createCountDown 实现了禁用倒计时的效果。支持一个及多个对象同时进行倒计时。
		 * @param btn {string|HTMLElement|jQueryObject} 按钮或其它DOM元素（支持input、button、a、span等）
		 * @param options {Object=} 配置项
		 * @param options.time {number=60} 倒计时秒数
		 * @param options.waitingText {string="{%t}秒后重新发送"} 倒计时过程中 按钮文本显示的内容。其中，{%t} 会被倒计时秒数替换
		 * @param options.finalContent {string="点击再次发送"} 倒计时结束后 按钮文本显示的内容，如果该值为空字符串，则默认显示原始文本
		 * @param options.disabledClassName {string="disabled"} 倒计时过程中，默认会给按钮添加 "disabled" 样式类，通过该值可以设置指定的禁用样式类
		 * @param options.intervalSecond {number=1} 倒计时的时间间隔，默认为1秒
		 * @param options.callback {function(options)=$.noop} 倒计时完成后的回调函数。回调中，参数是当前的设置项，this指向 包裹按钮DOM对象 的jQuery对象
		 *
		 * @example 举个栗子
		 * <!-- html 结构 -->
		 <input type="button" id="BtnId" value="确认">
		 <input type="button" id="BtnId1" value="确认aaa">

		 // js调用
		 $("#BtnId").click(function () {
				NY.dom.createCountDown("input", {
					time: 10,
					waitingText: "{%t}",
					finalContent: "",
					callback: timeCallback
				});
			});
		 // 回调函数
		 function timeCallback (options) {
				console.log(this);  //指向传入的 input
				console.log("我是回调函数" , options);
			}
		 */
		createCountDown: function (btn, options) {
			var $btns = $(btn);
			var settings = $.extend({
				time: 60,
				waitingText: "{%t}秒后重新发送",
				finalContent: "点击再次发送",
				disabledClassName: "disabled",
				intervalSecond: 1,
				callback: function(){}
			}, options);
			var finalContent = settings.finalContent;
			var disabledClassName = settings.disabledClassName;
			var intervalSecond = settings.intervalSecond;
			var replaceTime = function (time) {
				return settings.waitingText.replace("{%t}", time);
			};

			$btns.each(function (i) {
				var $btn = $(this);

				// 根据 不同类型的DOM元素，采用不同的jQuery方法 读取/设置 文本
				var btnText = function (text) {
					var btnText = "";

					if ($btn.prop("nodeName").toUpperCase() == "INPUT") {
						btnText = $btn.val(text).val();
					}
					else {
						btnText = $btn.html(text).html();
					}

					return btnText;
				};

				var time = settings.time;
				var btnValue = btnText();

				var init = function () {
					btnText(replaceTime(time));
					$btn.prop("disabled", true);
					$btn.addClass(disabledClassName);
				};
				var timeFlag = setInterval(function () {
					if (time > 1) {
						time--;
						init();
					}
					else {
						btnText(finalContent || btnValue);
						$btn.prop("disabled", false);
						$btn.removeClass(disabledClassName);
						clearInterval(timeFlag);
						settings.callback.call($btn, settings);
					}
				}, intervalSecond * 1000);

				//初始化
				init();
			});
		}
	};
})();


// 为绑定事件提供便捷设定
NY.event = (function () {
	// 封装回车键事件响应方法
	var enterKey = function (element, handler, options) {
		options = options || {};
		var eventType = options.eventType || "keypress";
		var eventData = options.eventData;
		var isCtrlKey = options.isCtrlKey;
		var isShiftKey = options.isShiftKey;
		var isAltKey = options.isAltKey;

		var isBoolean = function (param) {
			return (typeof param === "boolean");
		};
		// 尽在按下回车键 且组合键符合设置时 才触发回调事件
		var myHandler = function (e) {
			var keyCode = e.which;
			var that = this;

			if ((keyCode == 10) || (keyCode == 13)) {
				// 如果指定了Ctrl、Shift、Alt等，则严格匹配相应组合键
				if (isBoolean(isCtrlKey) && (isCtrlKey !== e.ctrlKey)) {
					return;
				}
				else if (isBoolean(isShiftKey) && (isShiftKey !== e.shiftKey)) {
					return;
				}
				else if (isBoolean(isAltKey) && (isAltKey !== e.altKey)) {
					return;
				}

				handler.call(that, e);
			}
		};

		// 相当于 将【$(element).keypress(eventData, myHandler);】中的keypress换成变量
		return $(element)[eventType](eventData, myHandler);
	};
	// 统一创建方法
	var createEnterMethod = function (eventType) {
		return function (element, handler, options) {
			options = options || {};
			options.eventType = eventType;

			return enterKey(element, handler, options);
		};
	};

	/**
	 * @method inputNumberLimit 对指定的输入框限制输入数字，支持配置参数是否可以输入小数，或限定输入范围
	 * @param inputSelector {string|HTMLElement|jQueryObject} 输入框选择器
	 * @param options {object=} 配置项
	 * @param options.isLimitInt {Boolean=false} 是否只能输入整数，默认值为false，即可以输入小数
	 * @param options.min {number=1} 限制输入的最小值，默认为 1
	 * @param options.max {number} 限制输入的最大值
	 *
	 * @example 举例说明
	 // 默认配置
	 NY.event.inputNumberLimit("#numberInput");
	 // 自定义配置
	 NY.event.inputNumberLimit("#numberInput", {
			isLimitInt: true,
			min: 0.01
		});
	 */
	var inputNumberLimit = function (inputSelector, options) {
		var settings= $.extend({
			isLimitInt: false,
			//multi: 1,
			min: 1,
			max: undefined
		}, options);
		var isLimitInt = settings.isLimitInt;
		var min = settings.min;
		var max = settings.max;

		$(inputSelector).keydown(function (e) {
			var $_self = $(this);
			var keyCode = e.which;
			// 不允许输入shift组合键
			if (e.shiftKey) {
				return false;
			}

			// 条件：是否输入为小数点
			var isPointCode = ((keyCode == 110) || (keyCode == 190));
			if (isLimitInt && isPointCode) {
				return false;
			}

			// 条件：是否数字键
			var isNumberCode = (((keyCode >= 48) && (keyCode <= 57)) || ((keyCode >= 96) && (keyCode <= 105)));
			// 条件：是否输入 backspace or ↑ or → or ↓ or ← or end or home or delete
			var isOperateCode = ((keyCode == 8) || (keyCode == 37) || (keyCode == 38) || (keyCode == 39) || (keyCode == 40) || (keyCode == 35) || (keyCode == 36) || (keyCode == 46));
			// 不允许白名单以外的输入
			if (!isPointCode && !isNumberCode && !isOperateCode) {
				return false;
			}

			var inputValue = $_self.val();
			var pointIndex = inputValue.indexOf(".");
			// 不可输入两个小数点
			if ((pointIndex != -1) && isPointCode) {
				return false;
			}
			// 小数部分不超过两位
			if ((pointIndex >= 0) && ((inputValue.length - pointIndex) > 2) && isNumberCode) {
				return false;
			}
		}).blur(function () {
			var $_self = $(this);
			// 尽量解析数字
			var inputValue = parseFloat($_self.val());

			// 如果输入非数字，设为最小值
			if (!$.isNumeric(inputValue)) {
				$_self.val(min);
				return;
			}

			// 限制最小值
			var validatedValue = Math.max(min, inputValue);
			// 限制最大值
			if (max) {
				validatedValue = Math.min(max, validatedValue);
			}
			// 统一赋值
			$_self.val(validatedValue);
		});
	};

	return {
		/**
		 * @method enterPress 封装回车键响应方法，可以指定Ctrl、Shift、Alt组建键。除了对回车的响应判断之外，其余的调用方式均保持与jQuery一致
		 * @param element {string|HTMLElement|jQueryObject} 要绑定事件的元素
		 * @param handler {function=} 回调函数，可选。该回调用法与jQuery事件回调一致
		 * @param options {Object=} 配置项，可选
		 * @param options.eventType {string="keypress"} 绑定的事件名，默认为keypress。
		 * 									对于值为keyup或keydown的情况，可以直接使用快捷方式NY.event.enterUp或NY.event.enterDown
		 * @param options.eventData {Object=} 该数据对象将被传递给jQuery的事件处理程序
		 * @param options.isCtrlKey {boolean=} 是否根据按下Ctrl键来响应回车事件。如果该值为布尔值，则严格匹配组合键来响应事件。如果该值非布尔值，则忽略组合键影响
		 * @param options.isShiftKey {boolean=} 是否根据按下Shift键来响应回车事件，具体同options.isCtrlKey
		 * @param options.isAltKey {boolean=} 是否根据按下Alt键来响应回车事件，具体同options.isCtrlKey
		 * @return {jQueryObject} 返回绑定事件后的jQuery对象（集合）
		 *
		 * @example 举些栗子
		 * <!-- html结构 -->
		 <input type="text" id="testInput">

		 // 绑定普通回车事件
		 NY.event.enterPress($("#testInput"), function (e) {
				console.log(this.value);
			});
		 // 绑定Ctrl+Enter事件（仅按回车键并不会触发事件，需要同时按住Ctrl+Enter才能触发事件）
		 NY.event.enterPress($("#testInput"), function (e) {
				console.log(this.value);
				console.log("is ctrlKey press:", e.ctrlKey);
			}, {isCtrlKey: true});
		 // 绑定不按Shift的回车事件（仅按回车键就可以触发事件，但如果使用Shift+Enter则不会触发事件）
		 NY.event.enterPress($("#testInput"), function (e) {
				console.log(this.value);
				console.log("is shiftKey press:", e.shiftKey);
			}, {isShiftKey: false});
		 *
		 */
		enterPress: enterKey,
		enterUp: createEnterMethod("keyup"),
		enterDown: createEnterMethod("keydown"),
		inputNumberLimit: inputNumberLimit
	};
})();


/**
 * 封装业务型的快捷NY.ajax方法，使用方法及参数同$.ajax。
 *
 * @method ajax 使用方式同$.ajax
 * @param url {string|Object} 同$.ajax第一个参数
 * @param options {Object} 同$.ajax第二个参数。NY.ajax方法还支持以下扩展属性：
 * @param options.isCoverSuccess {boolean=false} 是否覆盖默认的success处理方式。
 * 				如果值为true，则覆盖默认处理，在响应数据status标识为不成功时，不做额外处理
 * 				如果值不为true，则使用默认处理，会在响应数据status标识为不成功时，使用 NY.tips.warn提示响应数据的errmsg信息
 * @param options.successResultFalse {function=} 会在响应数据status标识为不成功时 调用，参数为 (responseData, textStatus, jqXHR)
 * @param options.isSuccessShowTip {boolean=true} 是否在 响应数据status标识为成功时 显示text值，默认值为显示
 * @param options.isSuccessJump {boolean=true} 是否在 响应数据status标识为成功时 根据响应的url跳转或刷新，默认值为自动跳转（当响应数据中有url字段时）或自动刷新（当响应数据中有reload字段时）。
 * 										注意：若 options.success 方法显式返回false，则也不自动跳转或刷新页面
 * @param options.isResultFalseWarn {boolean=true} 是否在 响应数据status标识为不成功时，使用 NY.warn 显示  responseData.text 信息，默认为显示
 * @param options.waitText {string="加载中"} 发送ajax时 显示的【加载中】提示框文字
 * @param options.isShowWaitTip {boolean=true} 是否显示【加载中】提示框，默认为true，表示显示
 * @param options.isShowWaitMask {boolean=false} 是否显示遮罩层（遮罩层会阻止用户在界面上进行其它操作）
 * @param options.waitMaskStyle {string=} TODO: 设置遮罩层样式风格，如透明度、背景色
 * @return {jQueryXHR} 返回jQuery封装的 XMLHTTPRequest 对象，可参考 $.ajax 返回值说明
 *
 * @example 举些栗子（NY.post是语义化的NY.ajax，使用方式同NY.ajax）
 * // post应用（NY.get用法也相同）
 NY.post({
		url: "action url",
		data: $_form.serialize(),
		success: function (responseData) {
			console.log("响应数据为: ", responseData);
			console.log("[success] 仅当 响应数据status标识为成功时 调用");
		},
		successResultFalse: function (responseData, textStatus, jqXHR) {
			console.log("响应数据为: ", responseData);
			console.log("[ajax success but result false]: 仅当 响应数据status标识为不成功时 调用...");
		},
	});

 // jsonp应用（除了$.ajax对jsonp形式的参数限制之外，其它$.ajax的参数都可以使用）
 NY.jsonp({
		url: "http://www.niaoyun.com/market/quickorder.html",
		data: {
			serviceID: "1",
			type: 1
		},
		success: function (responseData) {
			console.log("响应数据为: ", responseData);
			console.log("[success] 仅当 响应数据status标识为成功时 调用，与NY.post的success用法一致");
		},
		successResultFalse: function (responseData, textStatus, jqXHR) {
			console.log("响应数据为: ", responseData);
			console.log("这里也可以使用successResultFalse");
		}
	});
 */
NY.ajax = function (url, options) {
	// 照搬jquery的ajax方法的参数判断
	if (typeof url === "object") {
		options = url;
		url = undefined;
	}

	// 缓存 计算后的设置
	var isShowWaitTip = (options.isShowWaitTip !== false);

	// 默认ajax配置
	var settings= $.extend({
		url: url,
		type: "post",
		dataType: "json",
		error: function () {
			NY.showBusy();
		},
		beforeSend: function() {
			NY.waiting('加载中，请稍后...',true);
		},
		// 注意，如果使用options.complete覆盖了这里的默认行为，则需要手动调用NY.hideWaiting()
		complete: function (jqXHR, textStatus) {
			if (isShowWaitTip) {
				NY.hideWaiting();
			}
		}
	}, options);
	// 删除扩展的参数
	delete settings.isCoverSuccess;
	delete settings.successResultFalse;
	delete settings.isSuccessShowTip;
	delete settings.isSuccessJump;
	delete settings.isResultFalseWarn;
	delete settings.waitText;
	delete settings.isShowWaitTip;
	delete settings.isShowWaitMask;
	delete settings.waitMaskStyle;

	// isCoverSuccess表示 是否覆盖增强的success方法。若值为true，则不使用增强的success方法。若值不为true，则使用增强的success方法。
	if (options.isCoverSuccess !== true) {
		// 增强的success方法：对响应数据的status做判断，并在错误时显示后端提示信息，正确时才调用原来的options.success
		settings.success = function (responseData, textStatus, jqXHR) {
			var context = this;
			// 缓存响应数据
			var responseDataText = responseData.text;
			var responseDataTime = responseData.time;

			// status 标识不成功时的处理
			if (!responseData.result) {
				// 对successResultFalse的 容错调用封装
				var resultFalseHandler = function () {
					var successResultFalse = options.successResultFalse;

					if ($.isFunction(successResultFalse)) {
						successResultFalse.call(context, responseData, textStatus, jqXHR);
					}

					// 若后端有返回url时，则跳转
					if (responseData.url) {
						window.location.href = responseData.url;
					}
					// 若后端有返回reload时，则刷新
					else if (responseData.reload) {
						window.location.reload();
					}
				};

				// 弹窗提示警告信息（当 options.isResultFalseWarn 配置不为 false 时执行）
				if (options.isResultFalseWarn !== false) {
					NY.warn(responseDataText, responseDataTime, function () {
						resultFalseHandler();
					});
				}
				else {
					resultFalseHandler();
				}
				return;
			}

			/*
			 * status标识成功时的处理（默认处理方式：先弹窗提示成功信息，再根据responseData的url或reload值 进行页面跳转或刷新）
			 */
			var successHandler = function () {
				var optionSuccess = options.success;
				var isJumpAfterCall = true;
				// 如果有传入options.success回调，则调用该方法
				if ($.isFunction(optionSuccess)) {
					isJumpAfterCall = optionSuccess.call(context, responseData, textStatus, jqXHR);
				}

				// 自动跳转（当 isSuccessJump 配置不为 false 且optionSuccess没有返回false 时执行）
				if ((options.isSuccessJump !== false) && (isJumpAfterCall !== false)) {
					// 若后端有返回url时，则跳转
					if (responseData.url) {
						window.location.href = responseData.url;
					}
					// 若后端有返回reload时，则刷新
					else if (responseData.reload) {
						window.location.reload();
					}
				}
			};

			// 弹窗提示成功信息（当 isSuccessShowTip 配置不为 false 时执行）
			if ((options.isSuccessShowTip !== false) && responseDataText) {
				// 使用成功提示框显示信息，并在指定时间后自动关闭
				NY.success(responseDataText, responseDataTime, function () {
					successHandler();
				});
			}
			else {
				successHandler();
			}
		};
	}

	// 发送ajax之前，根据配置 展示 waitTip
	if (isShowWaitTip) {
		NY.waiting(options.waitText, options.isShowWaitMask);
	}
	// 发送ajax
	return $.ajax(settings);
};
// 封装业务型的快捷 NY.get 和 NY.post 方法
$.each(["get", "post"], function (i, method) {
	NY[method] = function (url, options) {
		options = options || {};
		options.type = method;

		if (method == "get") {
			options.cache = false;
		}

		return NY.ajax(url, options);
	};
});
// 在 NY.ajax 的基础上，封装业务型的快捷 NY.jsonp 方法，调用时可以忽略业务参数要求。详细应用请参见 NY.ajax 的 example
NY.jsonp = function (url, options) {
	// 照搬jquery的ajax方法的参数判断
	if (typeof url === "object") {
		options = url;
		url = undefined;
	}

	// jsonp配置
	var settings= $.extend(true, {
		url: url,
		dataType: "jsonp",
		data: {
			"format": "jsonp"
		}
	}, options);

	// 分隔符，因为jsoncallback参数必须加在url后面才能生效（jQuery规则），所以需要根据原url参数 来决定使用“?”还是“&”分隔参数
	var separator = (settings.url.indexOf("?") == -1) ? "?" : "&";
	settings.url += separator + "jsoncallback=?";

	return NY.ajax(settings);
};

// 手机端ajax方法
NY.mAjax = function (url, options) {
	// 照搬jquery的ajax方法的参数判断
	if (typeof url === "object") {
		options = url;
		url = undefined;
	}

	// 缓存 计算后的设置
	var isShowWaitTip = (options.isShowWaitTip !== false);

	// 默认ajax配置
	var settings= $.extend({
		url: url,
		type: "post",
		dataType: "json",
		error: function () {
			mui.nyTip(NY.constant.DEFAULT_BUSY_TEXT, 3, "error");
		},
		beforeSend: function() {
			mui.nyTip("加载中...", 100, "loading");
		},
		// 注意，如果使用options.complete覆盖了这里的默认行为，则需要手动调用NY.hideWaiting()
		complete: function (jqXHR, textStatus) {
			if (isShowWaitTip) {
				$(".ny-show-loading").parent().remove();
			}
		}
	}, options);
	// 删除扩展的参数
	delete settings.isCoverSuccess;
	delete settings.successResultFalse;
	delete settings.isSuccessShowTip;
	delete settings.isSuccessJump;
	delete settings.isResultFalseWarn;
	delete settings.waitText;
	delete settings.isShowWaitTip;
	delete settings.isShowWaitMask;
	delete settings.waitMaskStyle;

	// isCoverSuccess表示 是否覆盖增强的success方法。若值为true，则不使用增强的success方法。若值不为true，则使用增强的success方法。
	if (options.isCoverSuccess !== true) {
		// 增强的success方法：对响应数据的status做判断，并在错误时显示后端提示信息，正确时才调用原来的options.success
		settings.success = function (responseData, textStatus, jqXHR) {
			var context = this;
			// 缓存响应数据
			var responseDataText = responseData.text || '操作成功!';
			var responseDataTime = responseData.time || 1;

			// status 标识不成功时的处理
			if (!responseData.result) {
				// 对successResultFalse的 容错调用封装
				var resultFalseHandler = function () {
					var successResultFalse = options.successResultFalse;

					if ($.isFunction(successResultFalse)) {
						successResultFalse.call(context, responseData, textStatus, jqXHR);
					}
				};

				// 弹窗提示警告信息（当 options.isResultFalseWarn 配置不为 false 时执行）
				if (options.isResultFalseWarn !== false) {
					mui.alert(responseDataText, " ", function () {
						resultFalseHandler();
					})
				}
				else {
					resultFalseHandler();
				}

				return;
			}

			/*
			 * status标识成功时的处理（默认处理方式：先弹窗提示成功信息，再根据responseData的url或reload值 进行页面跳转或刷新）
			 */
			var successHandler = function () {
				var optionSuccess = options.success;
				var isJumpAfterCall = true;
				// 如果有传入options.success回调，则调用该方法
				if ($.isFunction(optionSuccess)) {
					isJumpAfterCall = optionSuccess.call(context, responseData, textStatus, jqXHR);
				}

				// 自动跳转（当 isSuccessJump 配置不为 false 且optionSuccess没有返回false 时执行）
				if ((options.isSuccessJump !== false) && (isJumpAfterCall !== false)) {
					// 若后端有返回url时，则跳转
					if (responseData.url) {
						window.location.href = responseData.url;
					}
					// 若后端有返回reload时，则刷新
					else if (responseData.reload) {
						window.location.reload();
					}
				}
			};

			// 弹窗提示成功信息（当 isSuccessShowTip 配置不为 false 时执行）
			if ((options.isSuccessShowTip !== false) && responseDataText) {
				// 使用成功提示框显示信息，并在指定时间后自动关闭
				mui.nyTip(responseDataText, responseDataTime, "success", function () {
					successHandler();
				});
			}
			else {
				successHandler();
			}
		};
	}

	// 发送ajax之前，根据配置 展示 waitTip
	/*if (isShowWaitTip) {
	 NY.waiting(options.waitText, options.isShowWaitMask);
	 }*/
	// 发送ajax
	return $.ajax(settings);
};

// 封装手机版专用业务型的快捷 NY.mGet 和 NY.mPost 方法
$.each(["mGet", "mPost"], function (i, method) {
	NY[method] = function (url, options) {
		options = options || {};
		options.type = method;

		if (method == "get") {
			options.cache = false;
		}

		return NY.mAjax(url, options);
	};
});

// 添加业务类辅助方法
NY.biz = {
	/**
	 * @method createTextMapHelper 在artTemplate中创建一个辅助方法，用来将一个id或key，转换为text输出
	 * @param textMapHelperName {string} 指定artTemplate中的辅助方法名
	 * @param dataSource {Object|Array<Object>} 数据源，支持数组 或 已经是map的对象。
	 * 								当dataSource为数组时，会自动使用NY.data.arrayToMap方法将其转为一个map对象
	 * @param {string="id"|number} keyName 从数组元素的这个 keyName 属性中获取值 作为 Map对象 的key。keyName默认值为id。
	 * @param {string="name"|number} valueName 从数组元素的这个 valueName 属性中获取值 作为 Map对象key对应的value。valueName默认值为name
	 *
	 * @example 举个栗子
	 * // 这样调用，就能在artTemplate中创建一个getGroupName的方法，用于将groupID转换为groupName显示
	 NY.biz.createTextMapHelper("getGroupName", data.groupList);
	 // artTemplate中 这样使用
	 <div>{{groupID | getGroupName}}</div>
	 */
	createTextMapHelper: function (textMapHelperName, dataSource, keyName, valueName) {
		var dataMap = $.isArray(dataSource) ? NY.data.arrayToMap(dataSource, keyName, valueName) : dataSource;

		template.helper(textMapHelperName, function (key) {
			return dataMap[key];
		});
	},
	/**
	 * @method createObjectMapHelper 在artTemplate中创建一个辅助方法，根据两个参数 获取指定数据对象的数据。
	 * 					该方法支持特殊值“__default__”（也可以通过第三个参数指定该默认值），用以实现除 枚举定义之外 其它objectKey情况下的返回值
	 * @param objectMapHelperName {string} 指定artTemplate中的辅助方法名
	 * @param dataMap {Object} map数据对象
	 * @param defaultKey {string="__default__"} 当在调用artTemplate模版方法时，使用 objectKey 无法从map数据对象中获得值时，则尝试使用 defaultKey 获取值
	 *
	 * @example 举些栗子
	 * // js代码
	 var invoiceStatusMap = {
			0: {className: " text-red", name: "申请失败"},
			1: {className: "state-icon-done text-finished", name: "申请成功"},
			__default__: {className: "state-icon-default text-default", name: "如果传入除 0、1 外的参数，则会看到我 (*^__^*) "}
		};
	 // 这样调用，就能在artTemplate中创建一个getInvoiceStatusClass的方法，用于根据invoiceStatus从invoiceStatusMap中获取className或name
	 NY.biz.createObjectMapHelper("getInvoiceStatusClass", invoiceStatusMap);

	 // artTemplate中 这样使用
	 <span class="ny-state-icon {{invoiceStatus | getInvoiceStatusClass:"className"}}">
	 {{invoiceStatus | getInvoiceStatusClass:"name"}}
	 </span>
	 // 还可以这样“随便”用
	 <span class="ny-state-icon {{"xixihaha" | getInvoiceStatusClass:"className"}}">
	 {{"hahaxixi" | getInvoiceStatusClass:"name"}}
	 </span>
	 */
	createObjectMapHelper: function (objectMapHelperName, dataMap, defaultKey) {
		// 当 dataMap[objectKey] 属性没有值时，使用 defaultDataObject 做“替补 ”
		var defaultDataObject = dataMap[defaultKey || "__default__"] || {};

		template.helper(objectMapHelperName, function (objectKey, objectField) {
			var dataObject = dataMap[objectKey] || defaultDataObject;

			return dataObject[objectField];
		});
	},

	/**
	 * @method multiUpload 基于NY.plupload封装的业务方法，用于提交工单或其他页面的多附件（图片）上传
	 * @param options{Object} 本业务方法的配置项
	 * @param options.maxAttachments {number} 允许上传的最大附件数
	 * @param options.attachmentItemHtml {string} 附件项的html
	 * @param options.containerSelector {string} 多个附件的共同容器选择器
	 * @param options.addButtonSelector {string} 添加附件按钮选择器，用于绑定上传附件方法
	 * @param options.deleteButtonSelector {string} 删除按钮选择器，用于删除当前附件项
	 * @param options.uploadingClassName {string} 上传中样式类名
	 * @param options.doneClassName {string} 上传完成样式类名
	 * @param options.errorCall {function} 上传错误回调
	 * @param uploadOptions{Object} 参考 NY.plupload的配置项
	 *
	 * @example 举个梨纸
	 NY.biz.multiUpload({
			addButtonSelector: "#addAttachment"
		});
	 */
	multiUpload: function (options, uploadOptions) {
		var settings = $.extend(true, {
			maxAttachments: 5,
			attachmentItemHtml: template("attachment", {}),
			containerSelector: ".added-img-container",
			addButtonSelector: ".add-attachment-btn",
			deleteButtonSelector: ".delete-attachment",
			uploadingClassName: "attachment-uploading",
			doneClassName: "attachment-done",
			errorCall: function (uploader, errObject) {
				NY.feedback.error(NY.constant.UPLOAD_FILE_ERROR_TEXT, 5);
			}
		}, options);

		var maxAllowed = settings.maxAttachments;
		var attachmentItemHtml = settings.attachmentItemHtml;
		var $_attachmentsContainer = $(settings.containerSelector);
		var $_addAttachButton = $(settings.addButtonSelector);
		var deleteButtonSelector = settings.deleteButtonSelector;
		var uploadingClassName = settings.uploadingClassName;
		var doneClassName = settings.doneClassName;
		var errorCall = settings.errorCall;

		$_addAttachButton.each(function () {
			var $_addAttachButtonContainer = $_addAttachButton.parent();

			var uploadSetting = $.extend(true, {
				// this为browseButton集合中的元素
				browse_button: this,
				multi_selection: true,
				// 监听添加文件的事件
				onFilesAdded: function (uploader, files) {
					var existItemLength = $_attachmentsContainer.children().length;
					var maxAppendCount = maxAllowed - existItemLength;
					var appendCount = Math.min(files.length, maxAppendCount);
					for (var i = 0; i < appendCount; i++) {
						$_attachmentsContainer.append(attachmentItemHtml);
					}

					if ((existItemLength + files.length) >= maxAllowed) {
						var browser=navigator.appName;
						var b_version=navigator.appVersion;
						var version=b_version.split(";");
						if((browser=="Microsoft Internet Explorer")){
							$_addAttachButtonContainer.addClass("attachment-add-disappear");
						}else{
							$_addAttachButtonContainer.hide();
						}
					}
				},
				// 上传完成回调
				onFileUploaded: function (responseJSON, uploader, file, responseObject) {
					var $_targetContainer = $_attachmentsContainer.find("." + uploadingClassName).first();
					var $_img = $_targetContainer.find("img");
					if (responseJSON.result) {
						if (!$_targetContainer.length) {
							return;
						}
						$_targetContainer.removeClass(uploadingClassName);
						$_targetContainer.addClass(doneClassName);
						$_img.data("file_path", responseJSON.url);
						$_img.data("attachmentid", responseJSON.attachmentid);

						NY.plupload.previewImage(file, function (imgsrc) {
							$_img.attr("src", imgsrc);
						}, {
							// ie8使用在线地址进行预览
							unpreviewCallback: function (file) {
								$_img.attr("src", NY.constant.UPLOAD_FILE_IMG_PREFIX + responseJSON.url);
							}
						});
					} else {
						$_img.parent().remove();
						NY.warn(responseJSON.text || "上传失败，请重试！");
					}

				},
				// 文件格式不对 或文件大小超限时 的错误事件回调
				onError: errorCall
			}, uploadOptions);

			var uploader = NY.plupload.createUploader(uploadSetting);

			// 删除附件
			$_attachmentsContainer.on("click", deleteButtonSelector, function () {
				var $_parent = $(this).parent();
				$_parent.fadeOut(function () {
					$_parent.remove();
					var browser=navigator.appName
					var b_version=navigator.appVersion
					var version=b_version.split(";");
					if((browser=="Microsoft Internet Explorer")){
						$_addAttachButtonContainer.removeClass("attachment-add-disappear");
					}else{
						$_addAttachButtonContainer.show();
					}
				});
			});
		});
	},

	/**
	 * @method getMenuSet 获取菜单相关的元素及信息 集合。
	 * 				请注意：该方法依赖的导航数据 来自参数或面包屑组件，若没有导航数据（被无参调用 且面包屑组件延迟渲染），则此方法返回 null。
	 * 					另外，当导航菜单是一级项时，则二级菜单数据会返回null，包括 $_subMenuContainer、$_subMenuItem，而 subMenuIndex 会返回-1
	 * @param navData{string} 菜单导航数据信息。内容为鸟类名称，如 "phoenix"、"roc"
	 * @return {Object} 集合。详见return注释
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <!-- 菜单内有data-named="xxx" -->
	 <div class="panel">...</div>
	 <div class="panel">
	 <div class="upper-menu-wrap" role="tab" id="businessHeading">
	 <a class="collapsed upper-menu menu-icon-cloud" role="button" data-toggle="collapse" data-parent="#accordion" href="#businessCollapse" aria-expanded="true" aria-controls="businessCollapse">
	 云服务器
	 </a>
	 </div>
	 <div id="businessCollapse" class="collapse" role="tabpanel" aria-labelledby="businessHeading">
	 <ul class="sub-menu">
	 <li>
	 <a href="/user/serverManage/" data-named="roc">管理云服务器</a>
	 </li>
	 <li>
	 <a href="/user/serverPush/" data-named="hornbill">PUSH服务器</a>
	 </li>
	 </ul>
	 </div>
	 </div>
	 <div class="panel">...</div>

	 <!-- 面包屑指定data-nav -->
	 <div class="crumb-container" data-nav="roc" id="crumbNavContainer">
	 <!-- JS填充 -->
	 </div>

	 // js调用
	 var menuSet = NY.biz.getMenuSet();
	 console.log(menuSet.upperMenuIndex);	// 1
	 console.log(menuSet.subMenuIndex);		// 0
	 */
	getMenuSet: function (navNamed) {
		navNamed = navNamed || $("#crumbNavContainer").data("nav");

		if (!navNamed) {
			return null;
		}

		// 相关菜单元素
		var $_nyMenu = $(".ny-menu");
		var $_activeItem = $_nyMenu.find("[data-named='" + navNamed + "']");
		var $_upperMenuContainer = $_activeItem.parents(".panel");
		var $_upperMenuItem = null;
		var $_subMenuContainer = null;
		var $_subMenuItem = null;
		// 当前页面菜单索引
		var upperMenuIndex = $_upperMenuContainer.index();
		var subMenuIndex = -1;
		// 根据upper-menu类，判断$_activeItem是一级菜单项 还是 二级菜单项
		if ($_activeItem.hasClass("upper-menu")) {
			$_upperMenuItem = $_activeItem;
		}
		else {
			$_upperMenuItem = $_upperMenuContainer.find(".upper-menu");
			// 二级菜单数据
			$_subMenuItem = $_activeItem;
			$_subMenuContainer = $_subMenuItem.parents("[role=tabpanel]");
			subMenuIndex = $_subMenuItem.parent().index();
		}

		return {
			// 菜单外部容器
			nyMenuContainer: $_nyMenu,
			// 一级菜单容器
			upperMenuContainer: $_upperMenuContainer,
			// 一级菜单文本元素
			upperMenuItem: $_upperMenuItem,
			// 一级菜单索引
			upperMenuIndex: upperMenuIndex,
			// 二级菜单容器
			subMenuContainer: $_subMenuContainer,
			// 二级菜单文本元素
			subMenuItem: $_subMenuItem,
			// 二级菜单索引
			subMenuIndex: subMenuIndex
		};
	},
	/**
	 * @method setMenuHighlight 设置菜单高亮
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div class="crumb-container" data-nav="7-1" id="crumbNavContainer">
	 <!-- JS填充 -->
	 </div>

	 // js调用
	 NY.biz.setMenuHighlight();
	 */
	setMenuHighlight: function () {
		var menuSet = NY.biz.getMenuSet();
		// 由于menuSet是根据面包屑导航数据 查找元素的，所以当面包屑延迟渲染时，menuSet值则为null，这里就需要容错
		if (menuSet) {
			var $_nyMenuContainer = menuSet.nyMenuContainer;
			var clearTransitionClassName = "clear-transition";
			// 初始化前 先禁用动画效果
			$_nyMenuContainer.addClass(clearTransitionClassName);
			// 设置 一级菜单高亮
			menuSet.upperMenuItem.addClass("menu-active");

			// 二级菜单数据可能为空（高亮的是没有二级菜单的一级菜单）
			if (menuSet.subMenuContainer) {
				// 展开 对应二级菜单容器（使用“in”类名的方式，代替 collapse("show") 以避免插件内部bug）
				menuSet.subMenuContainer.addClass("in");
				// 设置 二级菜单高亮
				menuSet.subMenuItem.addClass("sub-menu-active");
			}

			// 完成菜单初始化后，启用动画效果
			setTimeout(function () {
				$_nyMenuContainer.removeClass(clearTransitionClassName);
			}, 0);
		}
	},

	/**
	 * @method getListTable 获取 列表table元素（依据是 分页容器 之前的table元素）
	 * @return {jQueryObject|null} jQuery对象集合 或 null
	 */
	getListTable: function () {
		var $_table = $(".pager-wrapper").prev("table");

		return $_table.length ? $_table : null;
	},

	/**
	 * @method useNoneDataFallback 使用该方法，当页面表格total数据为0时，则对表格添加 无数据提示。提示 内容，取决于id为nonedataTdTpl(或noneSearchRecordTdTpl)的模版的内容。
	 * 			示例模版内容如：<tr><td colspan="{{cols}}">{{text}}</td></tr>，模版内支持 cols、text、subtext、subtextLink 这几个变量。
	 * 			另外，可以通过 在table元素中设置 data-nonedata_text、data-nonedata_subtext、data-nonedata_subtext_link 来改变模版的变量值（cols变量为自动计算的值）。
	 * 			提示：对于 emptySearchListTipTemplate 模版，还有 searchKey 变量。
	 * @param table {string|HTMLElement|jQueryObject=} jQuery选择器或dom元素或jQuery对象。用来查找<table>元素，不传时，根据分页组件的前一个元素来确定<table>
	 * @param nonedataTipTemplate {string=nonedataTdTpl} 设置 无数据提示信息的模版id
	 * @param emptySearchListTipTemplate {string=noneSearchRecordTdTpl} 设置 无搜索结果提示信息的模版id
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <table class="ny-table" data-nonedata_text="哈哈，你会看到我">...</table>
	 <!-- 引入分页 -->
	 {{include "paginationTpl"}}

	 <!-- nyData数据 -->
	 <script charset="utf-8">var nyData = {"pager":{"page":1,"pageSize":10,"total":0}};</script>

	 // js调用
	 NY.biz.useNoneDataFallback();
	 */
	useNoneDataFallback: function (table, nonedataTipTemplate, emptySearchListTipTemplate) {
		// 无分页对象 或 分页有数据时，不操作
		if (!nyData.pager || nyData.pager.total) {
			return;
		}

		var $_table = $(table);
		// 如果没有table参数，则使用 分页容器 之前的table元素
		if (!$_table.length) {
			$_table = NY.biz.getListTable();
		}

		// 根据 是否有搜索关键字 决定使用何种提示模版
		var isEmptySearchList = (nyData.filter && (!NY.string.isEmpty(nyData.filter.searchKey))) ? true : false;
		var tipTemplate = isEmptySearchList
			? (emptySearchListTipTemplate || "noneSearchRecordTdTpl")
			: (nonedataTipTemplate || "nonedataTdTpl");

		// 计算跨列数
		var tdCols = 0;
		$_table.find("tr").first()
			.children().each(function (i, element) {
			tdCols += Number($(element).attr("colspan")) || 1;
		});

		var $_contentRowContainer = NY.util.getFirstInCollection($_table.find("tbody"), $_table);
		// 构造模版数据，并添加到表格中
		$_contentRowContainer.append(template(tipTemplate, {
			cols: tdCols,
			text: $_table.data("nonedata_text") || "暂无数据",
			searchKey: (isEmptySearchList ? nyData.filter.searchKey : ""),
			subtext: $_table.data("nonedata_subtext"),
			subtextLink: $_table.data("nonedata_subtext_link")
		}));
	},

	/**
	 * @method makeListTableSortable 为列表添加排序功能（包括为表头添加排序图标、初始化默认排序及排序字段）
	 * @param table {string|HTMLElement|jQueryObject=} jQuery选择器或dom元素或jQuery对象。
	 * 								用来查找<table>元素，不传时，使用 NY.biz.getListTable方法 获得<table>元素
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <table class="ny-table margin-bottom-20">
	 <thead>
	 <tr>
	 <th width="15%" data-order_name="code">备案券码</th>
	 <th data-order_name="status">状态</th>
	 <th>操作</th>
	 </tr>
	 </thead>
	 </table>
	 <!-- 这后面有个 `.pager-wrapper` 分页容器 -->

	 <!-- 同步数据 -->
	 nyData.filter -> {searchType: 2, searchKey: "haha", orderType: "desc", orderName: "code"}

	 // js调用（为表格添加排序功能）
	 NY.biz.makeListTableSortable();
	 */
	makeListTableSortable: function (table) {
		// 使用table参数 或 getListTable 获取 排序表格
		var $_table = NY.util.getFirstInCollection($(table), NY.biz.getListTable());
		// 如果没有 需要排序的表格，则返回
		if (!$_table.length) {
			return;
		}

		// HTML中的data字段名
		var SORT_FIELD_DATA_NAME = "order_name";
		var SORT_TYPE_DATA_NAME = "order_type";
		// 排序值
		var SORT_TYPE_DESC_VALUE = "desc";
		var SORT_TYPE_ASC_VALUE = "asc";
		var DEFAULT_SORT_TYPE = SORT_TYPE_DESC_VALUE;
		// 图标样式类名
		var DEFAULT_SORT_CLASSNAME = "filter-icon";
		var SORT_DESC_CLASSNAME = "filter-desc";
		var SORT_ASC_CLASSNAME = "filter-asc";
		// 为 可排序表头 添加的样式类名
		var TH_SORTABLED_CLASSNAME = "th-sortable";
		// 排序图标模版
		var sortIconTemplate = '<a href="#a_null" class="' + DEFAULT_SORT_CLASSNAME + '"></a>';

		// 为可排序的th元素添加排序标识图标
		var filterData = nyData.filter || {};
		var filterSortField = filterData.orderName;
		var filterSortType = filterData.orderType;
		$_table.find("thead th[data-" + SORT_FIELD_DATA_NAME + "]").each(function () {
			var $_th = $(this);
			var thSortField = $_th.data(SORT_FIELD_DATA_NAME);
			var $_sortIcon = $(sortIconTemplate);

			// 对指定的nyData.filter排序字段，添加 降序/升序 图标
			if (thSortField == filterSortField) {
				if (filterSortType == SORT_TYPE_DESC_VALUE) {
					$_sortIcon.addClass(SORT_DESC_CLASSNAME);
					// 仅当排序方式为 "desc" 时，才需要为th添加data数据
					$_th.data(SORT_TYPE_DATA_NAME, SORT_TYPE_DESC_VALUE);
				}
				else if (filterSortType == SORT_TYPE_ASC_VALUE) {
					$_sortIcon.addClass(SORT_ASC_CLASSNAME);
				}
			}

			$_th.append($_sortIcon)
				.addClass(TH_SORTABLED_CLASSNAME);
		});

		// 绑定点击事件
		$_table.find("thead").on("click", "th[data-" + SORT_FIELD_DATA_NAME + "]", function () {
			var $_th = $(this);
			var sortField = $_th.data(SORT_FIELD_DATA_NAME);
			// 仅当 排序方式 已经显式指定为 "desc" 时，才使用 "asc"。否则，默认使用 "desc"
			var sortType = ($_th.data(SORT_TYPE_DATA_NAME) == SORT_TYPE_DESC_VALUE) ? SORT_TYPE_ASC_VALUE : SORT_TYPE_DESC_VALUE;

			var queryString = $.param($.extend(filterData, {
				orderName: sortField,
				orderType: sortType
			}));

			// 使用同步方式请求
			window.location = window.location.pathname + "?" + queryString;
		});
	},

	/**
	 * @method initSearchForm 初始化列表搜索组件（含下拉框与搜索输入框）。结构要求：下拉框需包含 `.ny-search-group` 类，而搜素表单则是下拉框的下一个DOM节点。
	 * 						副作用：（为避免与 NY.component.initDropDown 冲突）本方法在调用之后，会将下拉框的 `.ny-dropdown-container` 类移除
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div data-field_name="searchType" class="btn-group ny-search-group ny-dropdown-container pull-left">
	 <a type="button" href="#a_null" class="ny-btn btn-select-muted dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	 <span class="selected-content"></span>
	 <span class="ny-caret"></span>
	 </a>
	 <ul class="dropdown-menu ny-search-dropdown">
	 <li><a href="#a_null" class="" data-drop="1">服务器IP</a></li>
	 <li><a href="#a_null" class="" data-drop="2">关联订单</a></li>
	 </ul>
	 </div>
	 <form action="" class="pull-left">
	 <input id="nySelectedInput" class="hide" type="text" name="searchType" value="1">
	 <input type="text" name="searchKey" class="pull-left ny-input-reset search-group-input" placeholder="请输入搜索关键词">
	 <input type="submit" class="pull-left ny-btn btn-primary btn-primary-search" value="">
	 </form>

	 <!-- nyData数据 -->
	 <script charset="utf-8">var nyData = {"filter":{"searchType":0,"searchKey":"haha","orderType":"desc","orderName":0}};</script>

	 // js调用
	 NY.biz.initSearchForm();
	 */
	initSearchForm: function () {
		$(".ny-search-group").each(function () {
			var $_dropdownContainer = $(this);
			var $_searchForm = $_dropdownContainer.next();

			// 自动 初始化下拉框
			if ($(".ny-search-dropdown").length) {
				var $_searchType = NY.util.getFieldByName("searchType", $_searchForm);
				var defaultValue = nyData.filter.searchType;

				// 若后端有值，则以 后端的值为准
				if ((defaultValue !== undefined) && (defaultValue !== "")) {
					$_searchType.val(defaultValue);
				}
				else {
					// 若没有后端的值，则使用 页面的初始值
					defaultValue = $_searchType.val();
				}

				NY.component.initDropDown({
					containerSelector: $_dropdownContainer,
					defaultOptionValue: defaultValue
				});
			}

			// 自动填充 搜索关键字
			if (nyData.filter && !NY.string.isEmpty(nyData.filter.searchKey)) {
				NY.util.getFieldByName("searchKey", $_searchForm).val(nyData.filter.searchKey);
			}

			// 方法执行结束之前，删除下拉框类名，避免被 NY.component.initDropDown 二次初始化
			$_dropdownContainer.removeClass(".ny-dropdown-container");
		});
	},

	/**
	 * @method chooseAllInTable 在table中实现全选中所有的checbox。
	 * @param controlSelector {string|HTMLElement|jQueryObject=} 全选checkbox 控制元素
	 * @param options {object=} options 配置项
	 * @param settings.checkboxGroupSelector {string=} 需要控制的checkbox选择器
	 * @param settings.parmContainerSelector {string=} checkbox组的父容器，默认为控制元素的table父容器。
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <table>
	 <thead>
	 <tr><td><input type="checkbox" id="checkall"><label for="checkall">全选</label></td></tr>
	 </thead>
	 <tbody>
	 <tr>
	 <td><input type="checkbox"></td>
	 </tr>
	 <tr>
	 <td><input type="checkbox"></td>
	 </tr>
	 <tr>
	 <td><input type="checkbox"></td>
	 </tr>
	 <tr>
	 <td><input type="checkbox"></td>
	 </tr>
	 <tr>
	 <td><input type="checkbox"></td>
	 </tr>
	 </tbody>
	 </table>
	 // js调用
	 NY.biz.chooseAllInTable("#checkall");
	 */
	chooseAllInTable: function(controlSelector, options) {
		var settings = $.extend({
			checkboxGroupSelector: "input:checkbox",
			parmContainerSelector: ""
		}, options);

		var $_control = $(controlSelector);
		var $_parmContainer = $(settings.parmContainerSelector);

		// parmContainerSelector如不传值，默认找父元素的table
		if (!$_parmContainer.length) {
			$_parmContainer = $_control.parents("table");
		}
		//找不到controlSelector 或 parmContainerSelector未指定且父元素无table直接return
		if (!$_control.length || !$_parmContainer.length) {
			return;
		}

		var $_checkboxGroup = $_parmContainer.find(settings.checkboxGroupSelector);
		$_control.change(function () {
			var isChecked = $(this).prop("checked");
			$_checkboxGroup.prop("checked", isChecked);

		});
	}

};


// 对plupload上传插件的封装，代码（及部分注释）参考自 http://www.cnblogs.com/2050/p/3913184.html
NY.plupload = (function () {
	/**
	 * @method createUploader 工厂方法，创建plupload插件的实例
	 * @param {Object=} options 配置项。完整参数可参考： http://chaping.github.io/plupload/doc/
	 * @param {string="http://static.niaoyun.com/lib/plugin/plupload/"} options.pluploadBasePath 【非plupload参数】 用来指定plupload插件依赖资源的路径（用于加载Flash和Silverlight资源）
	 * @param {boolean=true} isAutoInit 【非plupload参数】  是否自动初始化plupload插件，默认值为true
	 * @param {boolean=true} isAutoUpload 【非plupload参数】 是否自动上传（当用户选择了文件之后），默认值为true
	 * @param {boolean=false} isEasyGetFile 【非plupload参数】 是否设置为便捷模式，如果是便捷模式，则在多文件上传模式下，用户只选择一个文件时，则将onFilesAdded回调的第二个参数设置为files数组的第一个元素（简化迭代过程），默认值为false。
	 * @param {function(uploader, file)=} onFilesAdded 【非plupload参数】 当文件被添加之后触发的事件。在单文件上传模式下，file参数被简化，无需通过数组形式的迭代 即可直接使用
	 * @param {function(uploader, file)=} onUploadProgress 【非plupload参数】 文件上传进度事件
	 * @param {function(responseJSON, uploader, file, responseObject)=} onFileUploaded 【非plupload参数】 上传完成事件。
	 * 							第一个参数为响应数据的反序列化JSON对象，后面三个参数与原事件的参数列表一致
	 * @param {function(uploader, errObject)=} onError 【非plupload参数】 错误事件（当文件格式不对 或文件大小超限时 会触发）。
	 * 							回调函数的errObject对象，有 code、file、message 属性。参见 http://chaping.github.io/plupload/doc/#plupload_doc2 了解更多
	 * @param {boolean=true} isParseResponseJSON 【非plupload参数】 是否解析响应数据为JSON对象，默认值为true
	 * @param {string|HTMLElement|jQueryObject=null} previewImgElement 【非plupload参数】 用来预览的图片元素，如果在页面上找得到这个元素，则当选中上传文件后会自动提供预览功能
	 * // 以下是正式的plupload参数
	 * @param {HTMLElement|string=} options.browse_button 触发文件选择对话框的DOM元素，当点击该元素后便后弹出文件选择对话框。
	 * 								该值可以是DOM元素对象本身，也可以是该DOM元素的id
	 * @param {string=} options.url 服务器端接收和处理上传文件的脚本地址，可以是相对路径(相对于当前调用Plupload的文档)，也可以是绝对路径
	 * @param {string=} options.flash_swf_url flash上传组件的url地址
	 * @param {string=} options.silverlight_xap_url silverlight上传组件的url地址
	 * @param {boolean=false} options.multi_selection 是否可以选择多个
	 * @param {Object=} options.filters 可以使用该参数来限制上传文件的类型，大小等
	 * @return {Uploader} plupload插件实例
	 *
	 * @example 举些栗子
	 * <!-- 在HTML中需要引入<script src="http://static.niaoyun.com/lib/plugin/plupload/plupload.full.min.js"></script> -->
	 <!-- HTML结构（仅需要一个id为uploadFileButton的元素即可） -->
	 <input type="text" id="uploadFileButton">
	 <img src="" alt="" id="imgPreview" />
	 // 【推荐使用】在配置参数中使用回调（参数经过优化处理，更简便）
	 NY.plupload.createUploader({
			previewImgElement: "#imgPreview",
			// 在单文件上传模式下，file参数被简化，无需通过数组形式的迭代 即可直接使用
			onFilesAdded: function (uploader, file) {
				console.log("当前上传文件的文件名：", file.name);
				console.log("当前上传文件的大小：", plupload.formatSize(file.size));
			},
			onUploadProgress: function (uploader, file) {
				console.log("当前进度已完成：", file.percent, "%");
			},
			// 在原有三个参数的基础上，插入了第一个参数，值为反序列化的JSON对象
			onFileUploaded: function (responseJSON, uploader, file, responseObject) {
				console.log("响应数据对象：", responseJSON);
			},
			// errObject对象 类似 {code: -600, message: "File size error.", file: {...}}
			onError: function (uploader, errObject) {
				console.info("错误信息对象：", errObject);
			}
		});

	 // 【非特殊情况请避免使用该方式】传统的事件绑定方式
	 var uploader = NY.plupload.createUploader();
	 // 文件被添加后触发的事件
	 uploader.bind("FilesAdded", function (uploader, files) {
			// 直接绑定的事件里，files是数组
			$.each(files, function (i, file) {
				console.log("当前上传文件的文件名：", file.name);
				console.log("当前上传文件的大小：", plupload.formatSize(file.size));
			});
		});
	 // 文件上传进度事件
	 uploader.bind("UploadProgress", function (uploader, file) {
			console.log("当前进度已完成: ", file.percent, "%");
		});
	 // 上传完成事件
	 uploader.bind("FileUploaded", function (uploader, file, responseObject) {
			console.log("FileUploaded:", uploader, file, responseObject);
			// 需要手动序列化响应数据
			// $.parseJSON(responseObject.response)
		});
	 */
	var createUploader = function (options) {
		options = options || {};
		var noop = $.noop;
		var configs = $.extend({
			pluploadBasePath: "/static/uc/lib/plugin/plupload/js/",
			isAutoInit: true,
			isAutoUpload: true,
			isEasyGetFile: false,
			onFilesAdded: noop,
			onUploadProgress: noop,
			onFileUploaded: noop,
			onError: noop,
			isParseResponseJSON: true,
			previewImgElement: null
		}, options);

		// 删除 非plupload.Uploader创建的配置参数
		delete options.pluploadBasePath;
		delete options.isAutoInit;
		delete options.isAutoUpload;
		delete options.isEasyGetFile;
		delete options.onFilesAdded;
		delete options.onUploadProgress;
		delete options.onFileUploaded;
		delete options.onError;
		delete options.isParseResponseJSON;
		delete options.previewImgElement;

		var pluploadBasePath = configs.pluploadBasePath;
		// 以下默认配置是 new plupload.Uploader() 所支持的部分参数
		var settings = $.extend(true, {
			browse_button: "uploadFileButton",
			url: "/user/upload/",
			runtimes : 'html5,flash,silverlight,html4',
			flash_swf_url: pluploadBasePath + "Moxie.swf",
			silverlight_xap_url: pluploadBasePath + "Moxie.xap",
			multi_selection: false,
			filters: {
				/* 上传限制的类型 */
				mime_types: [
					{
						title: "Image files",
						extensions: "jpg,png"
					}
				],
				max_file_size: "1mb",
				/* true时不允许队列中存在重复文件(启用后同一个文件上传过就不能再上传了，所以不适合，一定要false) */
				prevent_duplicates: false
			}
		}, options);

		var uploader = new plupload.Uploader(settings);

		// （大部分情况下需要）自动init，plupload插件在init之后才能绑定事件
		if (configs.isAutoInit) {
			uploader.init();

			// 对于图片预览元素的处理
			var $_previewImg = $(configs.previewImgElement);
			var isShowPreviewImg = !!$_previewImg.length;

			// 文件被添加后触发的事件
			uploader.bind("FilesAdded", function (uploader, files) {
				// 如果单文件上传模式，则将onFilesAdded回调的第二个参数设置为files数组的第一个元素（简化迭代过程）
				var addFile = (settings.multi_selection) ? files : files[0];
				// 如果是便捷模式，则在多文件上传模式下，用户只选择一个文件时，则将onFilesAdded回调的第二个参数设置为files数组的第一个元素（简化迭代过程）
				if (configs.isEasyGetFile && (files.length == 1)) {
					addFile = files[0];
				}
				configs.onFilesAdded.call(this, uploader, addFile);

				// 暂不支持多选文件模式的图片预览功能
				if (isShowPreviewImg && !settings.multi_selection) {
					setPreviewImage(addFile, $_previewImg);
				}

				if (configs.isAutoUpload) {
					// 设置自动上传
					uploader.start();
				}
			});
			// 文件上传进度事件
			uploader.bind("UploadProgress", configs.onUploadProgress);
			// 上传完成事件
			uploader.bind("FileUploaded", function (uploader, file, responseObject) {
				var response = responseObject.response;

				if (configs.isParseResponseJSON) {
					response = $.parseJSON(responseObject.response);
				}

				// 在原有三个参数的基础上，插入了第一个参数，值为反序列化的JSON对象
				configs.onFileUploaded.call(this, response, uploader, file, responseObject);
			});
			// 错误事件（当文件格式不对 或文件大小超限时 会触发）
			uploader.bind("Error", configs.onError);
		}

		return uploader;
	};

	/**
	 * @method previewImage 本地实时预览图片（可以在图片选中并上传时，根据本地图片显示预览图）
	 * plupload中为我们提供了mOxie对象，有关mOxie的介绍和说明可以看：https://github.com/moxiecode/moxie/wiki/API
	 * 本方法来自Github http://chaping.github.io/plupload/demo/index4.html
	 * @param {Object} file plupload事件监听函数参数中的file对象
	 * @param {function=} callback 预览图片准备完成的回调函数
	 * @param {Object=} options 配置项
	 * @param {boolean=true} options.isDownsize 是否压缩预览图
	 * @param {number=200} options.downsizeWidth 预览图的默认宽
	 * @param {number=200} options.downsizeHeight 预览图的默认高
	 * @param {function(file)=} options.unpreviewCallback 无法预览时（IE8及以下）的回调，会传入一个参数，为plupload事件监听函数参数中的file对象
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <input type="text" id="uploadFileButton">
	 <img src="" alt="" id="imgPreview" />
	 // 监听添加文件的事件，然后显示预览图片
	 NY.plupload.createUploader({
			onFilesAdded: function (uploader, file) {
				NY.plupload.previewImage(file, function (imgsrc) {
					$("#imgPreview").attr("src", imgsrc);
				});
			}
		});
	 */
	var previewImage = function (file, callback, options) {
		var settings = $.extend({
			isDownsize: true,
			downsizeWidth: 200,
			downsizeHeight: 200,
			unpreviewCallback: function (file) {}
		}, options);

		// 确保文件是图片
		if (!file || !/image\//.test(file.type)) {
			return;
		}

		var fileSource = file.getSource();
		if (!file.loaded || !fileSource.size) {
			settings.unpreviewCallback(file);

			return;
		}

		// gif使用FileReader进行预览，因为mOxie.Image只支持jpg和png
		if (file.type == "image/gif") {
			var fr = new mOxie.FileReader();

			fr.onload = function () {
				if (callback) {
					callback(fr.result);
				}
				// 调用下面的析构方法，plupload插件内部会报错，所以这里去掉了
				// fr.destroy && fr.destroy();
				fr = null;
			};
			fr.readAsDataURL(file.getSource());
		}
		else {
			var preloader = new mOxie.Image();

			preloader.onload = function () {
				// 压缩要预览的图片
				if (settings.isDownsize) {
					preloader.downsize(settings.downsizeWidth, settings.downsizeHeight);
				}
				// 得到图片src，实质为一个base64编码的数据
				var imgsrc = (preloader.type == "image/jpeg") ? preloader.getAsDataURL("image/jpeg", 80) : preloader.getAsDataURL();

				if (callback) {
					// callback传入的参数为预览图片的url
					callback(imgsrc);
				}
				preloader.destroy && preloader.destroy();
				preloader = null;
			};
			preloader.load(fileSource);
		}
	};

	/**
	 * @method setPreviewImage （根据上传的本地文件来实时）设置预览图片。本方法对NY.plupload.previewImage进行再次封装，满足大部分情况下的便捷使用要求
	 * @param file {Object} plupload插件提供的file对象
	 * @param imgElement {string|HTMLElement|jQueryObject} 用来预览的图片元素
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <input type="text" id="uploadFileButton">
	 <img src="" alt="" id="imgPreview" />
	 // 监听添加文件的事件，然后显示预览图片
	 NY.plupload.createUploader({
			onFilesAdded: function (uploader, file) {
				NY.plupload.setPreviewImage(file, $("#imgPreview"));
			}
		});
	 */
	var setPreviewImage = function (file, imgElement) {
		previewImage(file, function (imgsrc) {
			$(imgElement).attr("src", imgsrc);
		});
	};

	return {
		createUploader: createUploader,
		previewImage: previewImage,
		setPreviewImage: setPreviewImage
	};
})();


// 对ZeroClipboard插件的封装，简化配置及初始化过程
NY.zeroClipboard = (function () {
	// 该变量用来保证：只对ZeroClipboard执行一次config操作
	var isConfiged = false;
	var timeoutKey = 100000;

	/**
	 * @method init 初始化ZeroClipboard插件，使指定元素具有复制功能。并且添加额外行为：鼠标悬浮提醒、复制成功提醒
	 * @param options {Object} 配置项
	 * @param options.config {Object} 针对ZeroClipboard插件做的配置。即使多次调用init方法，一个页面也只会对ZeroClipboard配置一次。完整配置说明参见下面的链接：
	 * 							https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/api/ZeroClipboard.md#configuration-options
	 * @param options.elementSelector {string=".copy-text"} 选择器，指定 需要添加复制功能的元素
	 * @param options.clipboardTextAttrName {string="data-clipboard-text"} 从元素的这个属性名中 提取复制文本
	 * @param options.isSetTitle {boolean=true} 是否为目标元素 设置鼠标悬浮的title提示
	 * @param options.elementTitle {string="点击复制"} 鼠标悬浮的title提示文本（如果html中有title属性，则以html中的title优先）
	 * @param options.copySuccessText {string="复制成功"|false} 复制成功之后的提示文本。若值为false，则复制成功之后不显示提示文本
	 * @param options.successTextDelay {number=2000} 复制成功之后的提示文本 显示的时间（超过这个时间会 自动隐藏 提示文本）
	 * @param options.onCopyComplete {function} 复制完成之后的回调方法。回调方法接收三个参数：第一个参数是复制的文本，第二个参数和第三个参数分别是 原始事件的第一个参数和第二个参数
	 *
	 * @example 举个栗子
	 * <a class="copy-text">点我点我快点我复制</a>
	 NY.zeroClipboard.init(); // 是的，就是这么简单~ o(∩_∩)o
	 */
	var initZeroClipboard = function (options) {
		var settings = $.extend(true, {
			config: {
				moviePath: NY.constant.STATIC_SOURCES_PATH + "/lib/plugin/zeroClipBoard/ZeroClipboard.swf"
			},
			elementSelector: ".copy-text",
			clipboardTextAttrName: "data-clipboard-text",
			isSetTitle: true,
			elementTitle: "点击复制",
			copySuccessText: "复制成功",
			successTextDelay: 2000,
			onCopyComplete: $.noop
		}, options);

		if (!isConfiged) {
			ZeroClipboard.config(settings.config);
			isConfiged = true;
		}

		$(settings.elementSelector).each(function () {
			var $_self = $(this);
			var clipboardTextAttrName = settings.clipboardTextAttrName;

			if (!$_self.attr(clipboardTextAttrName)) {
				$_self.attr(clipboardTextAttrName, $_self.html());
			}

			// 保留html中原始的title
			var htmlAttrTitle = "";
			// 先使用copySuccessText初始化tooltip
			if (settings.copySuccessText) {
				htmlAttrTitle = $_self.attr("title");

				$_self.attr("title", settings.copySuccessText);

				$_self.tooltip({
					trigger: "manual"
				});

				$_self.removeAttr("title");
			}
			// 再恢复title（如果isSetTitle为true的话）
			if (settings.isSetTitle) {
				// 以html中原始的title优先
				$_self.attr("title", htmlAttrTitle || settings.elementTitle);
			}

			var client = new ZeroClipboard(this);

			client.on("load", function (client) {
				client.on("complete", function (client, args) {
					settings.onCopyComplete.call(this, args.text, client, args);

					// 仅在 设置了成功提示文本 的时候使用tooltip提示
					if (settings.copySuccessText) {
						var $_targetElement = $(this);
						var targetTimeoutKey = $_targetElement.data("timeoutKey");
						if (!targetTimeoutKey) {
							targetTimeoutKey = timeoutKey++;
							$_targetElement.data("timeoutKey", targetTimeoutKey);
						}

						$_targetElement.tooltip("show");
						// 经过successTextDelay时间后 自动关闭提醒
						NY.util.setTimeout(targetTimeoutKey, function () {
							$_targetElement.tooltip("hide");
						}, settings.successTextDelay);
					}
				});
			});
		});
	};

	return {
		init: initZeroClipboard
	};
})();

// 组件方法封装
NY.component = (function () {
	/**
	 * @method initPagination 初始化分页组件。分页数据 默认使用 nyData.pager
	 * @param pager {string|HTMLElement|jQueryObject} 分页组件容器，组件需提供约定结构，参见例子说明
	 * @param onPageChange {function(pageNumber, e):boolean} 页码发生改变时 触发的回调事件。回调中，this指向触发点击的DOM元素。
	 * 					回调方法接收两个参数，第一个是目标页码，即页码发生改变后 高亮的页码。第二个是原始的jQuery Event对象。
	 * 					在调用回调方法后，默认会重新渲染分页页码。你可以在回调方法中显式返回 false 以阻止该默认行为
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div class="ny-pagination" id="pager">
	 <span class="page-button pager-first"></span>
	 <span class="page-button pager-prev"></span>

	 <span class="page-number">
	 <!-- 这个元素必须提供，新创建的页码元素以此为模版 -->
	 <span class="page-button">n</span>
	 </span>

	 <span class="page-button pager-next"></span>
	 <span class="page-button pager-last"></span>
	 </div>
	 // js 调用方式
	 NY.component.initPagination($("#pager"), function (pageNumber, e) {
			console.log(pageNumber);
		});
	 */
	var initPagination = function (pager, onPageChange) {
		// 分页容器
		var $_pager = $(pager);
		// 无容器时，直接返回
		if (!$_pager.length) {
			return;
		}

		var CURRENT_PAGE_CLASSNAME = "page--current";
		var DISABLED_CLASSNAME = "disabled";
		var SIDE_SHOW_NUMBER = 3;
		var MAX_SHOW_NUMBER = SIDE_SHOW_NUMBER * 2 + 1;
		// 组件的最少展示页数（值为1或0）
		var MIN_SHOW_PAGE = 1;

		// 数字页码容器
		var $_pagesContaner = $_pager.find(".page-number");
		// 数字页码模版，克隆自页面容器
		var $_pageButtonClone = $_pagesContaner.children().first().clone();

		var pagerData = nyData.pager || {};
		// 当前页码（初始化时）
		var initCurrentPageNumber = pagerData.page;
		// 所有记录总页数（需要根据 组件的最少展示页数 调整）
		var totalPageNumber = Math.max(
			Math.ceil(pagerData.total / pagerData.pageSize),
			MIN_SHOW_PAGE
		);
		// 展示的页数
		var showPageNumber = Math.min(MAX_SHOW_NUMBER, totalPageNumber);

		// 页码控制按钮的配置（用于更新disabled状态及click事件响应）
		var controlButtonConfig = [
			{
				// 页码控制按钮
				button: $_pager.find(".pager-first"),
				// 固定的目标页码
				targetPageNumber: 1
			},
			{
				button: $_pager.find(".pager-last"),
				targetPageNumber: totalPageNumber
			},
			{
				button: $_pager.find(".pager-prev"),
				// 通过该增量来计算目标页码
				incrementPageNumber: -1
			},
			{
				button: $_pager.find(".pager-next"),
				incrementPageNumber: 1
			}
		];
		// 根据配置，获取目标页码（即点击后应该跳转到的页码）
		var getTargetPageNumber = function (config) {
			var targetPageNumber = 0;

			if (config.targetPageNumber) {
				targetPageNumber = config.targetPageNumber;
			}
			else if (config.incrementPageNumber) {
				var currentPageNumber = Number($_pagesContaner.find("." + CURRENT_PAGE_CLASSNAME).html());

				targetPageNumber = currentPageNumber + Number(config.incrementPageNumber);
			}

			return targetPageNumber;
		};
		// 根据指定页码 渲染分页
		var renderPagination = function (currentPageNumber) {
			// 计算起始及终止页码
			var beginPageNumber = Math.max(currentPageNumber - SIDE_SHOW_NUMBER, 1);
			var endPageNumber = Math.min(totalPageNumber, currentPageNumber + SIDE_SHOW_NUMBER);
			if ((endPageNumber - beginPageNumber + 1) < showPageNumber) {
				if (beginPageNumber < SIDE_SHOW_NUMBER) {
					endPageNumber = showPageNumber;
				}
				if (totalPageNumber - currentPageNumber < SIDE_SHOW_NUMBER) {
					beginPageNumber = Math.max(endPageNumber - (MAX_SHOW_NUMBER - 1), 1);
				}
			}

			// 创建 页码
			$_pagesContaner.empty();
			for (var i = beginPageNumber; i <= endPageNumber; i++) {
				var newPageNumber = i;
				var currentClassName = (newPageNumber == currentPageNumber) ? CURRENT_PAGE_CLASSNAME : "";

				$_pageButtonClone.clone()
					.html(newPageNumber)
					.addClass(currentClassName)
					.appendTo($_pagesContaner);
			}

			// 更新 控制按钮 可用/禁用 状态
			$.each(controlButtonConfig, function (i, config) {
				var $_button = config.button;
				var buttonTargetPageNumber = getTargetPageNumber(config);

				// 若目标页为0或NaN，则直接禁用 该控制按钮
				if (!buttonTargetPageNumber) {
					$_button.addClass(DISABLED_CLASSNAME);
					return;
				}

				// 首页、尾页
				if (config.targetPageNumber) {
					// 若目标页码 已经是当前页码，则禁用按钮
					if (buttonTargetPageNumber === currentPageNumber) {
						$_button.addClass(DISABLED_CLASSNAME);
					}
					else {
						$_button.removeClass(DISABLED_CLASSNAME);
					}
				}
				// 上一页、下一页
				else if (config.incrementPageNumber) {
					// 若上一页、下一页超出页码范围，则禁用按钮
					if ((buttonTargetPageNumber < 1) || (buttonTargetPageNumber > totalPageNumber)) {
						$_button.addClass(DISABLED_CLASSNAME);
					}
					else {
						$_button.removeClass(DISABLED_CLASSNAME);
					}
				}
			});
		};

		/*
		 * 初始化页码
		 */
		renderPagination(initCurrentPageNumber);

		/*
		 * 绑定事件
		 */
		onPageChange = onPageChange || $.noop;
		// 统一触发 onPageChange 回调，并根据 onPageChange 返回值 决定是否重新渲染分页
		var triggerPageChange = function (targetPageNumber, args) {
			targetPageNumber = Number(targetPageNumber);

			var params = [targetPageNumber].concat(NY.util.argumentsToArray(args));
			var isUpdatePagination = onPageChange.apply(this, params);

			if (isUpdatePagination !== false) {
				renderPagination(targetPageNumber);
			}
		};
		// 添加数字页码点击事件
		$_pagesContaner.on("click", ".page-button:not(." + CURRENT_PAGE_CLASSNAME + ")", function (e) {
			var $_pageButton = $(this);
			var targetPageNumber = $_pageButton.html();

			triggerPageChange.call(this, targetPageNumber, arguments);
		});
		// 添加页码控制按钮点击事件
		$.each(controlButtonConfig, function (i, config) {
			var $_button = config.button;

			$_button.click(function () {
				// 按钮被禁用时，不响应点击
				if ($_button.hasClass(DISABLED_CLASSNAME)) {
					return;
				}

				var buttonTargetPageNumber = getTargetPageNumber(config);
				triggerPageChange.call(this, buttonTargetPageNumber, arguments);
			});
		});
	};

	/**
	 * @method initTabs 初始化tabs组件，实现tabs按钮组切换
	 * 固定结构：
	 * 		1.需要显示和隐藏的元素的父元素需要添加 class="ny-tab-container"
	 * 		2.tab需要绑定 data-tab_group；目前支持 data-tab_group的值 1~5。建议不要重复
	 * 		3.为需要显示的元素添加 class="tab-relate-1~5"
	 * 		为需要隐藏的元素添加 class="hide-relate-1~5"
	 * @param options {Object} 配置项
	 * @param options.containerSelector {string} 容器选择器，用于添加控制类，
	 * @param options.tabGroupDataName {string} 绑定在tab上的data属性名，该方法仅对添加了该属性名的tab生效
	 * @param options.selectedClassName {string} 标识当前选中的tab的类名
	 * @param options.controlClassNamePre {string} 添加在父元素上，用于控制对应显示/隐藏内容序号的类名前缀
	 *
	 * @example 举2个栗子
	 * // 默认配置：
	 NY.component.initTabs();
	 // 自定义配置：
	 NY.component.initTabs({
			containerSelector: ".my-tab-container"
		});
	 */
	var initTabs = function (options) {
		var settings = $.extend(true, {
			containerSelector: ".ny-tab-container",
			tabGroupDataName: "tab_group",
			selectedClassName: "ny-tab-selected",
			controlClassNamePre: "tab-group-"
		}, options);

		var $_nyTabContainer = $(settings.containerSelector);
		if ($_nyTabContainer.length) {
			var tabGroupDataName = settings.tabGroupDataName;
			var selectedClassName = settings.selectedClassName;
			var controlClassNamePre = settings.controlClassNamePre;

			$_nyTabContainer.each(function () {
				var $_container = $(this);
				var $_tabButton = $_container.find("[data-" + tabGroupDataName+ "]");
				// 对容器默认添加 "tab-group-" + 第一个tab的 data-tab_group值
				$_container.addClass(controlClassNamePre + $_tabButton.first().data(tabGroupDataName));
				// 根据tab绑定data的值，生成 "tab-group-n1 tab-group-n2 ..."
				var classNameToRemove = "";
				$_tabButton.each(function () {
					classNameToRemove += (controlClassNamePre + $(this).data(tabGroupDataName) + " ");
				});

				$_tabButton.click(function () {
					var $_self = $(this);
					// 按钮select高亮切换
					$_self.addClass(selectedClassName)
						.siblings().removeClass(selectedClassName);
					// 与按钮tab_group对应元素显示/隐藏
					$_container.removeClass(classNameToRemove);
					$_container.addClass(controlClassNamePre + $_self.data(tabGroupDataName));
				});
			});
		}
	};

	/**
	 * @method initDropDown 初始化下拉组件
	 * 固定结构：
	 * 		1.bootstrap下拉组件结构
	 * 		2.容器需要绑定data-field_name，用于指定需要填写的表单域
	 * @param options {Object} 配置项
	 * @param options.containerSelector {string} 容器选择器，指定需要填写的表单
	 * @param options.containerBindDataName {string} 绑定在容器上的data属性名，属性值为对应表单的name
	 * @param options.dropItemDataName {string} 下拉菜单每一个项目上绑定的data属性名，指定该项对应的值，类似于option的value值
	 * @param options.activeClassName {string} 下拉菜单选中项目高亮样式类
	 * @param options.defaultOptionClassName {string} 默认选中项目类名
	 * @param options.defaultOptionValue {string} 默认选中项目类的值，如果传入该值，则初始选项为该值对应的项目
	 * @param options.selectedContentClassName {string} 用于显示选中项内容的容器，一般为触发按钮中的元素
	 *
	 * @example 一些栗子
	 * // 默认配置：
	 NY.component.initDropDown();
	 // 自定义配置：
	 NY.component.initDropDown({
			containerSelector: ".drop-container",
			defaultOptionValue: 2
		});
	 */
	var initDropDown = function (options) {
		var settings = $.extend(true, {
			containerSelector: ".ny-dropdown-container",
			containerBindDataName: "field_name",
			containerBindInputIdDataName: "field_id",
			dropItemDataName: "drop",
			activeClassName: "ny-drop-active",
			defaultOptionClassName: "ny-default-option",
			defaultOptionValue: "",
			selectedContentClassName: "selected-content"
		}, options);

		var $_dropDownContainer = $(settings.containerSelector);
		var containerBindDataName = settings.containerBindDataName;
		var containerBindInputIdDataName = settings.containerBindInputIdDataName;
		var dropItemDataName = settings.dropItemDataName;
		var activeClassName = settings.activeClassName;
		var defaultOptionClassName = settings.defaultOptionClassName;
		var defaultOptionValue = settings.defaultOptionValue;
		var selectedContentClassName = settings.selectedContentClassName;

		$_dropDownContainer.each(function () {
			var $_container = $(this);
			// 显示选中内容的容器
			var $_nySelectedContent = $_container.find("." + selectedContentClassName);
			// 下拉需要填写的表单
			var $_nySelectedInput = $_container.data(containerBindInputIdDataName) ? $("#" + $_container.data(containerBindInputIdDataName)) : $("[name=" + $_container.data(containerBindDataName) + "]");
			// 下拉菜单选项
			var $_dropdownOptions = $_container.find("[data-" + dropItemDataName + "]");
			// 查找默认项目
			if (defaultOptionValue) {
				$_container.find("[data-" + dropItemDataName + "=" + defaultOptionValue + "]").addClass(defaultOptionClassName);
			}
			var $_defaultOption = $_container.find("." + defaultOptionClassName);
			// 初始化默认选中内容和填写表单域(没有默认选中项目则填充下拉第一项)
			if ($_defaultOption.length) {
				// 默认选项高亮
				$_defaultOption.addClass(activeClassName);
				$_nySelectedContent.html($_defaultOption.html());
				$_nySelectedInput.val($_defaultOption.data(dropItemDataName));
			}
			else {
				// 第一个选项高亮
				$_dropdownOptions.first().addClass(activeClassName);
				$_nySelectedContent.html($_dropdownOptions.first().html());
				$_nySelectedInput.val($_dropdownOptions.first().data(dropItemDataName));
			}

			// 自适应宽度，以初始时宽度较大者为准，将按钮和下拉框的宽度设置一致
			var $_selectedContainer = $_container.find(".dropdown-toggle");
			var $_dropdown = $_container.find(".dropdown-menu");
			// 下拉菜单show出来，否则在IE下无法正确的获取到下拉菜单的宽度
			$_dropdown.show();
			var selectedContainerOuterWidth = $_selectedContainer.outerWidth();
			var dropDownOuterWidth = $_dropdown.outerWidth();
			var dropFinalWidth = 0;
			if (dropDownOuterWidth > selectedContainerOuterWidth) {
				dropFinalWidth = dropDownOuterWidth + 18;
			}
			else {
				dropFinalWidth = selectedContainerOuterWidth + 8;
			}

			$_selectedContainer.outerWidth(dropFinalWidth);
			$_dropdown.outerWidth(dropFinalWidth);

			// 绑定选项点击事件，填充内容和表单域
			$_dropdownOptions.click(function () {
				var $_self = $(this);
				$_dropdownOptions.removeClass().removeClass(activeClassName);
				$_self.addClass(activeClassName);
				$_nySelectedContent.html($_self.html());
				$_nySelectedInput.val($_self.data(dropItemDataName));
				// trigger一次表单change事件，在外部可以使用该表单域的change事件回调
				$_nySelectedInput.trigger("change");
			});
		});
	};

	/**
	 * initNumber 对指定的input(type=text)渲染成带有 增加/减少按钮 的数字输入框组件（类似于HTML5的`<input type="number">`）
	 * @param options {Object} 配置项（其中，min、max、step、unit属性，可以覆盖对应的 元素上设置的 data-num_* 属性值。）
	 * @param options.inputSelector {string} 表单域选择器，该选择器指定的元素将被渲染成组件
	 * @param options.min {number=1|string} 输入框组件 可输入的最小值
	 * @param options.max {number=10000|string} 输入框组件 可输入的最大值
	 * @param options.step {number=1|string} 控制 输入框组件 增加/减少按钮 的增量
	 * @param options.unit {string=} 单位名称（附带显示，可选）
	 *
	 * @example 举些栗子
	 <!-- HTML结构 -->
	 <input type="text" class="ny-number-input" name="testNumber" data-num_min="100" data-num_step="50">

	 // 默认配置
	 NY.component.initNumber();
	 // 自定义配置
	 NY.component.initNumber({
			// 下面的配置会覆盖 元素中的 data-num_* 属性值
			min: 10,
			unit: "个"
		});
	 */
	var initNumber = function (options) {
		var defaultConfigs = {
			inputSelector: ".ny-number-input",
			min: 1,
			max: 10000,
			step: 1,
			unit: ""
		};
		var $_numberInput = $(defaultConfigs.inputSelector);

		$_numberInput.each(function () {
			var $_input = $(this);
			var settings = $.extend(true, {}, defaultConfigs,  {
				min: $_input.data("num_min"),
				max: $_input.data("num_max"),
				step: $_input.data("num_step"),
				unit: $_input.data("num_unit")
			}, options);

			// 初始化配置值
			var min = parseInt(settings.min);
			var max = parseInt(settings.max);
			var step = parseInt(settings.step);
			var unit = settings.unit;

			// 自动生成组件html结构
			var $_container = $([
				'<div class="ny-number-container">',
				'<span class="number-input-box">',
				'<span class="ny-number-unit">' + unit + '</span>',
				'</span>',
				'<span class="ny-number-control">',
				'<span class="number-control-up"></span>',
				'<span class="number-control-down"></span>',
				'</span>',
				'</div>'
			].join(""));
			$_input.before($_container);
			// 由于在IE下两次wrap操作会导致input丢失，所以将原input克隆一份，之后移除该input；
			$_container.find(".number-input-box").prepend($_input.clone());
			$_input.remove();
			$_input = $_container.find(".ny-number-input");

			// 查找当前input
			var findInput = function (element) {
				return $(element).parents(".ny-number-container").find(settings.inputSelector);
			};
			// 限制值范围方法
			var verifyValue = function (element) {
				var $_targetInput = element ? findInput(element) : $_input;
				var inputValue = $_targetInput.val();
				var rangedValue = Math.max(Math.min(inputValue, max), min);

				$_targetInput.val(isNaN(rangedValue) ? min : rangedValue);
			};
			// 验证默认初始化值
			verifyValue();

			// 表单change事件，限制输入范围
			$_input.change(function () {
				verifyValue(this);
			});

			// 绑定数字增大和减小点击事件
			var $_increase = $_container.find(".number-control-up");
			var $_decrease = $_container.find(".number-control-down");
			$_increase.click(function () {
				var $_input = findInput(this);
				var value =  parseInt($_input.val());
				value += step;
				$_input.val(Math.min(value, max));
				$_input.trigger("change");
			});
			$_decrease.click(function () {
				var $_input = findInput(this);
				var value =  parseInt($_input.val());
				value -= step;
				$_input.val(Math.max(value, min));
				$_input.trigger("change");
			});

			// 输入框区域绑定自动对焦点击事件
			$(".number-input-box").click(function () {
				$(this).find($_input).focus();
			});
		});
	};

	return {
		initPagination: initPagination,
		initTabs: initTabs,
		initDropDown: initDropDown,
		initNumber: initNumber
	};
})();

// 表单验证方法
NY.validater = (function () {
	var controlSelector = ".validate-control";
	var reminderSelector = ".error-reminder";
	var errorClassName = "error-input";
	/**
	 * @method clearValidateError 清空指定表单内所有的验证错误提示
	 * @param container {string|HTMLElement|jQueryObject} 容器，限定清除的范围
	 *
	 * @example 举个栗子
	 * // 默认配置：
	 NY.clearValidateError($("form"));
	 */
	var clearValidateError = function (container) {
		var $_container = $(container);
		$_container.find(controlSelector + " input").removeClass(errorClassName);
		$_container.find(reminderSelector).empty();
	};

	/**
	 * @method validateShowError 显示 表单验证错误提示
	 * @param name {string|HTMLElement|jQueryObject} 指定提示错误的表单域，如果传入的是字符串，则认为是指定表单的name，如果传入非字符串则作为html元素处理
	 * @param text {string} 错误提示语
	 * @param form {string|HTMLElement|jQueryObject} 表单容器，限定清除的范围
	 * @param isSmartClearError {boolean=true} 是否表单域失焦时验证正确后自动清空错误提示，默认为true
	 *
	 * @example 举个栗子
	 * NY.validateShowError("time", "您输入的时间参数不正确", $("form"));
	 */
	var validateShowError = function (name, text, form, isSmartClearError) {
		var $_input = null;
		if (typeof name == "string") {
			$_input = NY.util.getFieldByName(name, $(form));
		}
		else {
			$_input = $(name);
		}

		clearValidateError(form);

		$_input.addClass(errorClassName)
			.focus()
			.parents(controlSelector).find(reminderSelector).html(text);

		if (isSmartClearError !== false) {
			$_input.blur(function () {
				if ($(this).val()) {
					clearValidateError(form);
				}
			});
		}
	};
	/*
	 @method formValidate 表单验证
	 @param form {string|HTMLElement|jQueryObject} 表单容器
	 @param options  {object} 	key 	是需要验证的表单元素的name值
	 @param options.regexp {string} 正则表达式 注意'\'需要转义 比如 \d  字符串中写 \\d
	 @param options.required {Boolean}  是否必填
	 @param options.remindWords {string}  错误提示语句
	 @example

	 var flag = formValidate('form',{
	 qq:{
	 regexp:"\\d{5,20}",
	 required:true,
	 remindWords:'QQ是长度不小于5位的数字'
	 }
	 });
	 */
	var formValidate = function(form,options) {
		var $_form = $(form);
		var validateFlag = true;
		if(!options){
			return true;
		}
		$.each(options, function(key,value) {
			var $_input = NY.util.getFieldByName(key, $_form);
			var $_inputValue = $_input.val();
			var inputRegexp = new RegExp(value.regexp) || {};
			var remindWords = value.remindWords || '该项输入不合法';

			if(value.required){
				if(!$_inputValue){
					validateFlag = false;
					validateShowError($_input, remindWords, $_form);
				}
			}

			if(!inputRegexp.test($_inputValue)){
				validateFlag = false;
				validateShowError($_input, remindWords, $_form);
			}
		});
		return validateFlag;
	};

	var mobileFormValidate = function(form,options) {
		var $_form = $(form);
		var validateFlag = true;
		if(!options){
			return true;
		}
		$.each(options, function(key,value) {
			var $_input = NY.util.getFieldByName(key, $_form);
			var $_inputValue = $_input.val();
			var inputRegexp = new RegExp(value.regexp) || {};
			var remindWords = value.remindWords || '该项输入不合法';

			if(value.required){
				if(!$_inputValue){
					validateFlag = false;
					validateShowError($_input, remindWords, $_form);
					mui.alert(remindWords);
				}
			}

			if(!inputRegexp.test($_inputValue)){
				validateFlag = false;
				mui.alert(remindWords);
			}
		});
		return validateFlag;
	};

	return {
		clearValidateError: clearValidateError,
		validateShowError: validateShowError,
		formValidate: formValidate,
		mobileFormValidate:mobileFormValidate
	};
})();

// 代理渲染器
NY.proxyRenderer = {
	/**
	 * @method renderContent 渲染模版页面内容，可以修改模版数据及模版id，默认使用 nyData 数据 及 "contentTemplate" 模版id。
	 * 				该方法渲染 contentBox 之后，还会调用 NY.proxyRenderer.renderPagination 初始化分页组件。所以无需再次渲染分页
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div id="contentBox"></div>
	 <script type="text/html" id="contentTemplate">
	 {{icp.serverIP}}
	 </script>

	 // js调用
	 NY.proxyRenderer.renderContent();
	 */
	renderContent: function (contentBox, templateData, templateId) {
		var $_contentBox = contentBox || $("#contentBox");
		templateData = templateData || nyData;
		templateId = templateId || "contentTemplate";

		$_contentBox.html(template(templateId, templateData));

		/*
		 * 内置组件 自动初始化（在前端模版渲染结束之后）
		 */
		// 初始化面包屑组件
		NY.proxyRenderer.renderCrumb();
		// 面包屑初始化之后，设置菜单高亮
		NY.biz.setMenuHighlight();
		// 初始化分页组件
		NY.proxyRenderer.renderPagination();
		// 当表格无数据时，自动填充提示文字
		NY.biz.useNoneDataFallback();
		// 为表格添加排序功能
		NY.biz.makeListTableSortable();

		/*
		 * 可选组件 自动初始化
		 */
		// 初始化tab按钮组切换（按默认配置）
		NY.component.initTabs();
		// 初始化列表搜索组件
		NY.biz.initSearchForm();
	},
	/**
	 * @method renderCrumb 渲染面包屑
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div class="crumb-container" data-nav="7-1" id="crumbNavContainer">
	 <!-- JS填充 -->
	 </div>

	 // js调用
	 NY.proxyRenderer.renderCrumb();
	 */
	renderCrumb: function () {
		// 面包屑容器
		var $_navContainer = $("#crumbNavContainer");

		// 容错：在 iframe 或 其它没有导航面包屑容器 的页面，不初始化面包屑
		if (!$_navContainer.length) {
			return;
		}

		// 菜单数据集合
		var menuSet = NY.biz.getMenuSet();
		var $_upperMenuItem = menuSet.upperMenuItem;
		var $_subMenuItem = menuSet.subMenuItem;
		// 详情页标题（若面包屑设置了inside，则填充该值）
		var insideTitle = ($_navContainer.data("inside") ? $(".ny-panel-title").html() : "");
		// 二级菜单文本及链接
		var subMenuText = "";
		var subMenuLink = "";
		if ($_subMenuItem) {
			subMenuText = $_subMenuItem.html();
			subMenuLink = (insideTitle ? $_subMenuItem.attr("href") : "");
		}

		// 面包屑模版数据
		var crumbNavData = {
			upperMenuText: $_upperMenuItem.html(),
			subMenuText: subMenuText,
			// 若面包屑设置了inside，说明面包屑中有四级，这时需要为第三级导航增加链接，使其可点返回上一级
			subMenuLink: subMenuLink,
			insideTitle: insideTitle
		};
		// 填充面包屑导航
		$_navContainer.html(template("crumbNavTpl", crumbNavData));
	},
	/**
	 * @method renderPagination 渲染分页（并绑定页码跳转事件）
	 *
	 * @example 举个栗子
	 * <!-- HTML结构 -->
	 <div class="ny-pagination" id="pager">
	 <span class="page-button pager-first"></span>
	 <span class="page-button pager-prev"></span>

	 <span class="page-number">
	 <!-- 这个元素必须提供，新创建的页码元素以此为模版 -->
	 <span class="page-button">n</span>
	 </span>

	 <span class="page-button pager-next"></span>
	 <span class="page-button pager-last"></span>
	 </div>

	 // js调用
	 NY.proxyRenderer.renderPagination();
	 */
	renderPagination: function (pager) {
		var $_pager = $(pager || "#pager");

		if (!$_pager.length) {
			return;
		}

		// 没有分页pager数据 或 分页数据的total为 0、""、undefined时，不渲染分页 并隐藏分页容器
		if (!nyData.pager || (nyData.pager.total == 0)) {
			$_pager.hide();
			return;
		}

		NY.component.initPagination($_pager, function (pageNumber, e) {
			var queryString = $.param($.extend({
				page: pageNumber
			}, nyData.filter));

			// 使用同步方式跳转页面
			window.location = window.location.pathname + "?" + queryString;
		});
	}
};