/*
 * 前端模版扩展方法
 * 使用template.helper(name, callback)注册公用辅助方法
 * 模板中使用的方式：{{time | dateFormat:'yyyy-MM-dd hh:mm:ss'}}
 * 支持传入参数与嵌套使用：{{time | say:'cd' | ubb | link}}
 */
$(function () {
	/*
	 * 工具类
	 */
	// 根据秒数转成 X小时X分钟X秒 的展现形式
	template.helper("formatSecond", function (second, maxShowUnit) {
		return NY.date.transformTime(second, {
			maxShowUnit: maxShowUnit
		});
	});
	// 通用时间格式化方法
	template.helper("formatDate", function (second) {
		if ($.isNumeric(second)) {
			second *= 1000;
		}
		else {
			second = Number(new Date(second));
		}

		return NY.date.format(second);
	});
	//分割价格,从右到左每三位加逗号分割
	template.helper("getPriceFormat", NY.number.priceFormat);
	// 在订单编号长度不足6位时，用"0"补齐
	template.helper("orderNumberFormat", NY.number.dataPatchFormat);
	// 在编号长度不足9位时(可指定其他位数)，用"10"补齐,第一位是1
	template.helper("servicesOrderFormat", function (sources, finalLength) {
		var formatNumber = String(NY.number.dataPatchFormat(sources, (finalLength || 9)));

		if (formatNumber.charAt(0) == "0") {
			formatNumber = "1" + formatNumber.slice(1);
		}

		return formatNumber;
	});
	// 对数值类 补齐两位小数
	template.helper("toFixed", NY.number.toFixed);
	// 获取数字的整数部分
	template.helper("getInt", NY.number.getInt);
	// 获取数字的小数部分
	template.helper("getDecimals", NY.number.getDecimals);
	// 开放 Math.abs 方法引用
	template.helper("getAbsoluteValue", Math.abs);
	/*
	 * 业务类
	 */
	// 云服务器状态 类名 名称 映射
	var serverStatusMap1 = {
		10: {className: "loading", name: "开通中"},
		11: {className: "upgrading", name: "升级中"},
		12: {className: "loading", name: "重启中"},
		13: {className: "fail", name: "重启失败"},
		14: {className: "loading", name: "重装中"},
		15: {className: "loading", name: "终端密码修改中"},
		16: {className: "loading", name: "密码重设中"},
		20: {className: "loading", name: "关机中"},
		21: {className: "fail", name: "关机失败"},
		22: {className: "run", name: "运行中"},
		23: {className: "loading", name: "启动中"},
		24: {className: "stop", name: "停止"}
	};
	// 云服务器状态状态映射
	NY.biz.createObjectMapHelper("getServerStatusClassOld", serverStatusMap1);
	// 云服务器状态 类名 名称 映射
	var serverStatusMap = {
		// 进行中状态
		100: {className: "loading", name: "开通中", color: "primary"},
		101: {className: "loading", name: "关机中", color: "primary"},
		102: {className: "loading", name: "启动中", color: "primary"},
		103: {className: "loading", name: "重启中", color: "primary"},
		104: {className: "loading", name: "升级中", color: "primary"},
		105: {className: "loading", name: "正在重装", color: "primary"},
		106: {className: "loading", name: "正在重置密码", color: "primary"},
		107: {className: "loading", name: "正在重置VNC密码", color: "primary"},
		108: {className: "loading", name: "降级中", color: "primary"},

		500: {className: "loading", name: "备份中", color: "primary"},
		501: {className: "loading", name: "恢复中", color: "primary"},
		502: {className: "loading", name: "备份删除中", color: "primary"},
		// 正常状态
		200: {className: "run", name: "正常", color: "success"},
		201: {className: "run", name: "续费中", color: "success"},
		// 失败状态
		300: {className: "warn-opening", name: "正在过户", color: "fail"},
		301: {className: "fail", name: "密码重置失败", color: "fail"},
		302: {className: "fail", name: "重启失败", color: "fail"},
		303: {className: "fail", name: "关机失败", color: "fail"},
		304: {className: "fail", name: "VNC重设失败", color: "fail"},
		305: {className: "fail", name: "启动失败", color: "fail"},
		// 完成状态
		400: {className: "stop", name: "已关机", color: "fail"},
		401: {className: "lock", name: "服务器锁定", color: "fail"},
		402: {className: "paused", name: "已过期", color: "muted"},
		403: {className: "recycle", name: "已回收", color: "muted"},
		404: {className: "fail", name: "已删除", color: "fail"},

		600: {className: "loading", name: "创建快照中", color: "primary"},
		601: {className: "loading", name: "恢复快照中", color: "primary"},
		602: {className: "loading", name: "删除快照中", color: "primary"}
	};
	// 云服务器状态状态映射
	NY.biz.createObjectMapHelper("getServerStatusClass", serverStatusMap);
	// 托管服务器状态 类名 名称 映射
	var idcStatusMap = {
		0: {className: "loading", name: "开通中"},
		1: {className: "wait-up", name: "待上架"},
		2: {className: "run", name: "运行中"},
		3: {className: "has-recycled", name: "已回收"},
		4: {className: "paused", name: "已过期"},
		5: {className: "fail", name: "已删除"},
		6: {className: "sold-out", name: "已下架"},
		7: {className: "reopen", name: "重新开通中"},
		'-1': {className: "loading", name: "重启中"},
		'-2': {className: "loading", name: "重装中"},
		'-3': {className: "loading", name: "密码重设中"},
		'-4': {className: "loading", name: "升级中"}
	};
	// 托管服务器状态状态映射
	NY.biz.createObjectMapHelper("getIdcStatusClass", idcStatusMap);

	// 虚拟主机状态 类名 名称 映射
	var hostStatusMap = {
		2: {className: "run text-finished", name: "运行"},
		4: {className: "stop text-red", name: "停止"},
		6: {className: "paused text-muted", name: "暂停"},
		7: {className: "stop text-muted", name: "已过期"},
		10: {className: "stop text-red", name: "未备案停机"},
		12: {className: "stop text-red", name: "欠费停机"},
		14: {className: "stop text-red", name: "非法信息停机"}
	};
	// 虚拟主机状态映射
	NY.biz.createObjectMapHelper("getHostStatusClass", hostStatusMap);
	// 数据库状态 类名 名称 映射
	var dbStatusMap = {
		0: {className: "run text-finished", name: "试用"},
		2: {className: "run text-finished", name: "运行"},
		4: {className: "stop text-red", name: "停止"},
		6: {className: "paused text-muted", name: "暂停"},
		7: {className: "stop text-muted", name: "已过期"},
		10: {className: "stop text-red", name: "未备案停机"},
		12: {className: "stop text-red", name: "欠费停机"},
		14: {className: "stop text-red", name: "非法信息停机"}
	};
	// 数据库状态映射
	NY.biz.createObjectMapHelper("getDbStatusClass", dbStatusMap);
	// 添加status/name -> 文本 的映射（因为不是所有页面都有对应的数据，所以加了if判断）
	// 工单状态映射
	if (nyData.workorder && nyData.workorder.statusList) {
		NY.biz.createTextMapHelper("getWorkorderStatusName", nyData.workorder.statusList, "status", "name");
	}
	// 服务状态类名映射
	var servicesStatusMap = {
		"0": {className: "state-icon-dealing text-finished", name: "未使用"},
		"10": {className: "state-icon-waiting text-primary", name: "待处理"},
		"11": {className: "state-icon-dealing text-orange", name: "处理中"},
		"20": {className: "state-icon-examine text-red", name: "待验收"},
		"30": {className: "state-icon-evaluate text-red", name: "待评价"},
		"40": {className: "state-icon-fail text-muted", name: "已过质保期"},
		"50": {className: "state-icon-done text-finished", name: "验收完成"},
		"60": {className: "state-icon-waiting text-primary", name: "退回审核中"},
		"70": {className: "state-icon-money text-finished", name: "已退款"},
		"-1": {className: "state-icon-error text-red", name: "错误状态码"}
	};
	// 服务状态映射
	NY.biz.createObjectMapHelper("getServicesStatusClass", servicesStatusMap);
	// 发票申请状态
	var invoiceStatusMap = {
		// "0": {className: "state-icon-error text-red", name: "申请失败"},
		"0": {className: "state-icon-waiting text-primary", name: "审核中"},
		"1": {className: "state-icon-done text-finished", name: "申请成功"},
		"3": {className: "state-icon-reject text-muted", name: "已取消"},
		"-1": {className: "state-icon-error text-red", name: "申请失败"}
	};
	// 发票申请状态映射
	NY.biz.createObjectMapHelper("getInvoiceStatusClass", invoiceStatusMap);
	// 退款管理认证状态
	var refundVerifyTypeStatus = {
		"0": {className: "user-verified-origin", name: "非实名认证用户，1-3个工作日(周末、法定假日顺延)审核完成，并退款至您的账户余额"},
		"1": {className: "user-verify-company", name: "您是实名认证用户，享有免审急速退款特权，立刻到账，款项会立刻退回至您的账户余额"},
	};
	// 退款管理认证状态映射
	NY.biz.createObjectMapHelper("refundVerifyType", refundVerifyTypeStatus);
	//身份状态
	var idTypeMap = {
		"1": "身份证",
		"2": "营业执照",
		"3": "法人证书",
		"4": "组织机构代码证",
		"5": "社会团体"
	};
	NY.biz.createTextMapHelper("idType", idTypeMap);
	// 合同类型
	var contractTypeMap = {
		"1": "IDC托管服务合同",
		"2": "小鸟云服务协议"
	};
	NY.biz.createTextMapHelper("contractType", contractTypeMap);
	//合同状态
	var contractStatusMap = {
		"0": {className: "state-icon-waiting text-primary", name: "审核中"},
		"10": {className: "state-icon-done text-finished", name: "审核通过"},
		"11": {className: "state-icon-done text-finished", name: "合同已寄出"},
		"12": {className: "state-icon-done text-finished", name: "合同已收到"},
		"13": {className: "state-icon-done text-finished", name: "合同已回寄"},
		"20": {className: "state-icon-error text-red", name: "审核不通过"},
		"-1": {className: "state-icon-reject text-muted", name: "已取消"}
	};
	NY.biz.createObjectMapHelper("contractStatus", contractStatusMap);
	//退款list数据状态提示
	var refundListStatusMap = {
		"-1": "您的账号下无可退款订单",
		"0": "您的退款次数已经达到上限，无法退款",
		"1": "您的账号下无可退款订单"
	};
	NY.biz.createTextMapHelper("refundListStatus", refundListStatusMap);
	//退款原因状态
	var refundReasonStatusMap = {
		"1": "对产品不满意",
		"2": "对服务不满意",
		"3": "下错单",
		"4": "5天无理由退款",
		"5": "其他原因"
	};
	NY.biz.createTextMapHelper("refundReasonStatus", refundReasonStatusMap);
	//订单支付状态名称
	var orderPaymentStatusMap = {
		"-1": {className: "state-icon-fail text-muted", name: "已失效"},
		"0": {className: "state-icon-payment text-red", name: "待支付"},
		"1": {className: "state-icon-done text-finished", name: "已支付"}
	};
	//订单支付状态名称映射
	NY.biz.createObjectMapHelper("orderPaymentStatus", orderPaymentStatusMap);
	//订单管理详情 产品名称缩写
	var orderProductNameMap = {
		"server": {name: "云服务器", address: "/user/serverManage/manage.html?id="},
		"idc": {name: "托管服务器", address: "/user/idcManage/manage.html?id="},
		"host": {name: "虚拟主机", address: ""},
		"db": {name: "数据库", address: ""},
		"services": {name: "服务市场", address: ""},
		"invitation": {name: "邀请码", address: ""},
		"promotion": {name: "会员推广", address: ""},
		"icpscreen": {name: "备案幕布", address: ""},
		"identity": {name: "身份识别", address: ""}
	};
	//订单管理详情 产品名称映射
	NY.biz.createObjectMapHelper("orderProductName", orderProductNameMap);
	//订单管理产品详情 类型
	var orderProductTypeMap = {
		"buy": "新购",
		"renew": "续费",
		"upgrade": "升级",
		"install": "重装系统",
		"setpsw": "重置密码",
		"couponbuy": "购买优惠券",
		"backup": "全景备份",
		"snapshot": "创建快照",
		"verify": "实名认证",
	};
	//订单管理详情 产品类型映射
	NY.biz.createTextMapHelper("orderProductType", orderProductTypeMap);
	// 服务详情页状态名称映射
	var serviceDetailStatusMap = {
		0: "开启服务",
		10: "待处理",
		11: "处理中",
		20: "待您验收",
		30: "待您评价",
		40: "服务已完成",
		50: "您已验收",
		51: "您已验收",
		60: "退回审核中",
		70: "退款成功",
	};
	NY.biz.createTextMapHelper("getServiceDetailStatusName", serviceDetailStatusMap);
	// 用户认证类型样式类名映射
	var verifyClassNameMap = {
		0: "",
		1: "user-verify-company",
	};
	NY.biz.createTextMapHelper("getVerifyClassName", verifyClassNameMap);
	// 用户认证类型名称映射
	var verifyTypeNameMap = {
		0: "未认证",
		1: "个人认证",
		2: "企业认证"
	};
	NY.biz.createTextMapHelper("getVerifyTypeName", verifyTypeNameMap);
	// 用户认证状态名映射
	var verifyStatusMap = {
		"0": "未认证",
		"1": "审核中",
		"-1": "认证失败",
		"2": "已认证"
	};
	NY.biz.createTextMapHelper("getVerifyStatusName", verifyStatusMap);
	// 账户管理 修改信息验证方式名称映射
	var verifyMethodNameMap = {
		"protection": "密保验证",
		"mobile": "手机验证",
		"email": "邮箱验证"
	};
	NY.biz.createTextMapHelper("getVerifyMethodName", verifyMethodNameMap);
	// 账户管理 修改信息验证内容序号映射
	var verifyContentRankMap = {
		"protection": "1",
		"mobile": "2",
		"email": "3"
	};
	NY.biz.createTextMapHelper("getVerifyContentRank", verifyContentRankMap);

	// 上传文件的正确地址（用户上传的文件在http://uploads.niaoyun.com/下）
	template.helper("getUploadFileUrl", function (fileUrl) {
		return nyData.common.domain.upload + fileUrl;
	});
	template.helper("getCompiledString", function (str) {
		var c=String.fromCharCode(str.charCodeAt(0) + str.length);
		for(var i=1;i<str.length;i++)
		{
			c+=String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
		}
		return escape(c);
	});
});

// 公共属性 转义处理
$(function () {
	// 对 common、filter（主要是searchKey）、protect（主要是userQuestion） 中的属性进行转义
	if (window.nyData) {
		nyData.common = NY.util.encodeHtmlTag(nyData.common);
		nyData.filter = NY.util.encodeHtmlTag(nyData.filter);
		nyData.protect = NY.util.encodeHtmlTag(nyData.protect);
	}
});

// 页面公共模块初始化及事件绑定
$(function () {
	// 没有 .ny-main 元素的则为 iframe 页面，直接return
	if (!$(".ny-main").length) {
		return;
	}

	// 头部信息填充
	if (window.nyData) {
		$("#helloUserName").html(nyData.common.userName);

		// 填充消息数量
		var unReadTotal = nyData.common.unReadTotal;
		var hideClass = "hide";
		var $_messageCount = $(".header-message-count, .message-count");
		if (unReadTotal > 0) {
			$_messageCount.removeClass(hideClass);
			$_messageCount.html(unReadTotal);
			$_messageCount.parent().attr("href","/user/message/unread.html");
		}
		else {
			$_messageCount.addClass(hideClass);
		}
	}

	/*
	 * 菜单侧收控制
	 */
	var $_body = $("body");
	var graceMenuClassName = "graceful-menu";
	var menuCollapseCookieName = "menuCollapsed";
	if ($.cookie(menuCollapseCookieName) && $.cookie(menuCollapseCookieName) == "y") {
		$_body.addClass(graceMenuClassName);
	}
	else {
		$.removeCookie(menuCollapseCookieName, {path: "/"});
	}

	$("#menuControl").click(function () {
		if ($_body.hasClass(graceMenuClassName)) {
			$_body.removeClass(graceMenuClassName);
			$.removeCookie(menuCollapseCookieName, {path: "/"});
		}
		else {
			$_body.addClass(graceMenuClassName);
			$.cookie(menuCollapseCookieName, "y", {expires:180, path: "/"});
		}
	});
	// 侧收时 一级菜单不响应点击事件（加上menu-linkable类的链接除外）
	$("html").on("click", ".graceful-menu .upper-menu", function () {
		if (!$(this).hasClass("menu-linkable")) {
			return false;
		}
	});
});

// 前端模版渲染相关
$(function () {
	// 主内容区 模板渲染
	var $_contentBox = $("#contentBox");
	// 使用数据 渲染模版页面内容
	if ($_contentBox.length && $("#contentTemplate").length && nyData) {
		// 当data-render不等于"false"时进行模板渲染
		if ($_contentBox.data("render") !== false) {
			// renderContent方法中，会默认进行组件初始化（包括设置菜单高亮）
			NY.proxyRenderer.renderContent($_contentBox);
		}
	}
	else {
		// 自动对没有contentBox的“静态”页面，初始化面包屑组件 并设置菜单高亮
		NY.proxyRenderer.renderCrumb();
		NY.biz.setMenuHighlight();
	}
});

// 模块事件绑定
$(function () {
	var $_body = $("body");
	// 不响应 href="#a_null" 的链接点击事件
	$_body.on("click", "a", function (e) {
		if ($(this).attr("href") == "#a_null") {
			e.preventDefault();
		}
	});

	// 页面刷新
	$_body.on("click", ".window-reload", function () {
		window.location.reload();
	});

	// 图形验证码显示 及  点击刷新事件
	var captchaImgSelector = ".show-captcha";
	var $_showCaptcha = $(captchaImgSelector);
	if ($_showCaptcha.length) {
		var refreshCaptchaImg = (function () {
			var createCaptchaSrc = function () {
				return "/?m=api&c=captcha" + "&rnd=" + Math.random();
			};

			return function (captchaImg) {
				$(captchaImg).attr("src", createCaptchaSrc());
			};
		})();

		// 初始化
		refreshCaptchaImg($_showCaptcha);
		// 绑定图片及按钮的 点击刷新验证码事件
		$_showCaptcha.click(function () {
			refreshCaptchaImg(this);
		});
		$(".refresh-captcha").click(function () {
			refreshCaptchaImg($(this).parent().find(captchaImgSelector));
		});
	}

	// 发送手机验证码按钮 倒计时控制 及 点击发送事件
	var $_sendSMSBtn = $("#sendSMSCaptcha");
	var asyncSendSMSCaptcha = function (btn) {
		var $_sendBtn = $(btn);
		var $_mobileLeftTime = $("#mobileLeftTime");
		var sendSMSLeftTime = $_mobileLeftTime.html();

		// 当剩余时间大于0时页面保持倒计时
		if(sendSMSLeftTime > 0) {
			NY.dom.createCountDown($_sendBtn, {
				time: sendSMSLeftTime
			});
		}

		$_sendBtn.click(function () {

			var url = $_sendBtn.attr('url');
			var defaultUrl = "/user/validate/sendMobileCode.html";
			url = url ? url : defaultUrl;

			NY.post({
				// url: "/user/validate/sendMobileCode.html",
				url: url,
				success: function (responseJSON) {
					NY.dom.createCountDown($_sendBtn);
				}
			});
		});
	};
	if ($_sendSMSBtn.length) {
		asyncSendSMSCaptcha($_sendSMSBtn);
	};
	// 发送邮件验证码按钮 倒计时控制 及 点击发送事件 方法
	var $_sendEmailCaptcha = $("#sendEmailCaptcha");
	var asyncSendEmailCaptcha = function (btn) {
		var $_sendBtn = $(btn);
		var waitingTime = 20;
		$_sendBtn.click(function () {

			var url = $_sendBtn.attr('url');
			var defaultUrl = "/user/validate/sendMobileCode.html";
			url = url ? url : defaultUrl;

			NY.post({
				// url: "/user/validate/sendMailCode.html",
				url: url,
				success: function (responseJSON) {
					NY.dom.createCountDown($_sendBtn, {
						time: waitingTime
					});
				}
			});
		});
	};
	if ($_sendEmailCaptcha.length) {
		asyncSendEmailCaptcha($_sendEmailCaptcha);
	};

	// 数据处理，将验证方式字符串数组化
	if (nyData.protect) {
		nyData.protect.itemArray = NY.data.stringToArray(nyData.protect.items);
	}
	// 操作保护控制
	var protectEnableSelector = ".protection-enabled";
	$(protectEnableSelector).each(function () {
		var $_protectEnable = $(this);
		// 查找提交按钮所在父元素的表单
		var $_submitForm = $_protectEnable.parents("form");
		var verifyTypeSelector = "input[name=verifyType]";

		$_submitForm.on("click", protectEnableSelector, function () {
			var protectDialog = $.dialog({
				title: "操作保护",
				content: template("operateProtectTpl", nyData),
				okVal: "验证并提交",
				cancel: true,
				// 弹窗内容初始化
				init :function () {
					// 初始化ny-btn-group
					NY.component.initTabs();
					// 绑定发送手机验证码方法
					asyncSendSMSCaptcha($("#sendSMSCaptcha"));
					// 绑定发送邮箱验证码方法
					asyncSendEmailCaptcha($("#sendEmailCaptcha"));
					// 验证信息表单域
					var verifyInputsHtml = [
						'<input type="hidden" name="verifyType">',
						'<input type="hidden" name="verifyCode">',
						'<input type="hidden" name="answer1">',
						'<input type="hidden" name="answer2">'
					].join("");
					// 自动在需要提交的form中生成一次验证表单域
					if ($_submitForm.find(verifyTypeSelector).length == 0) {
						$_submitForm.append(verifyInputsHtml);
					}

					// 为弹窗中的验证方式切换按钮绑定点击事件，点击时填充表单域的值
					var $_verifyTypeInput = $(verifyTypeSelector);

					var $_changeVerifyMethodsBtns = $("#verifyMethodToggle a");
					$_changeVerifyMethodsBtns.click(function () {
						var $_self = $(this);
						$_verifyTypeInput.val($_self.data("method"));
					});
					// 触发第一个按钮的click事件，初始化填写一次表单
					$_changeVerifyMethodsBtns.first().trigger("click");
				},
				ok: function () {
					// 查找当前对话框中可见的表单，填写到verifyCodeInput
					var visibleInputSelector = "input:visible";
					var $_verifyCodeInput = $("input[name=verifyCode]");
					var $_verifyTypeInput = $(verifyTypeSelector);
					if (!$(visibleInputSelector).val()) {
						NY.warn("请填写验证内容");
					}
					else {
						// 如果选择类型是密保
						if ($_verifyTypeInput.val() == "protection") {
							$_submitForm.find("input[name=answer1]").val($(".protect-block").find(visibleInputSelector).first().val());
							$_submitForm.find("input[name=answer2]").val($(".protect-block").find(visibleInputSelector).eq(1).val());
						}
						else {
							$_verifyCodeInput.val($(".protect-block").find(visibleInputSelector).val());

						}


						NY.post({
							data: $_submitForm.serialize(),
							url: $_submitForm.attr("action"),
							success: function (responseJSON) {
								protectDialog.close();

								// 读取按钮上绑定的回调函数
								var closeCallback = $_protectEnable.data("closeCallback");
								if (closeCallback) {
									closeCallback(responseJSON);
								}
							}
						});
					}
					return false;
				}
			});
		});
	});

	// 临时返回旧版导航提示显示隐藏
	var $_guideMask = $("#guideMask");
	if (!$.cookie("isGuided") && nyData.common.userID.length == 5) {
		$_guideMask.show();
	}

	$(".guide-detail").click(function () {
		$.cookie("isGuided", 1,{path: "/",expires : 360});
		$_guideMask.hide();
	});
});
//地址信息管理初始化函数
$(function(){
	$("#addNewAddress").add(".edit-address").click(function () {
		var $_self = $(this);
		var url = $_self.data("id") ? "/user/address/addressview?id=" + $_self.data("id") : "/user/address/addressview";
		$.dialog.open(url, {
			title: $_self.data("title"),
			width: 700,
			height: 320,
			cancel: true,
			ok: function () {
				// 获取iframe表单和表单验证方法
				var $_form = $($.dialog.data("addressEditForm"));
				if ($.dialog.data("validateEmpty")($_form.find(".validate-control").find("input"))) {
					NY.post({
						beforeSend: function () {
							window.parent.NY.waiting("设置中，请稍后......", true);
						},
						data: $_form.serialize(),
						url: $_form.attr("action"),
						complete: function(){
							window.parent.NY.hideWaiting();
						}
					});
				}
				return false;

			}
		})
	});
})
