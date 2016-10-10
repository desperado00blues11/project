var lx_pop = {
	/**
	 * 创建回到顶部按钮
	 * 返回含有按钮的zepto对象
	 */
	createTopBtn: function() {
		var $topBtn = $('<div class="top-btn"/>');
		var $inner = $('<a><span class="text-icon">⇧</span></a>').on("click", function(e) {
			e.preventDefault();
			//			当点击元素时，让页面的滚动距离为0.写两个是为了兼容
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		});
		return $topBtn.append($inner);
	}
}