/**
 * @fileoverview 业务逻辑
 * @authors yifei (yifei@zoocer.com)
 */

var elMainSwiperContainer = $('#main-swiper-container');

// 检查初始化样式
function checkStyle() {
	var innerHeight = window.innerHeight;
	elMainSwiperContainer.css({
		height: innerHeight
	});
}

checkStyle();

// 初始化swiper
var mainSwiper = $('#main-swiper-container').swiper({
	mode: 'vertical',
	loop: false
});