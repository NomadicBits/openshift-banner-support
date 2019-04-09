var bannertop = document.body.appendChild('<div class="header">here</div>')
var topPop = new Popper(window, bannertop,{
	placement: 'top-start',
	positionFixed: true,
	modifiers: {
		inner: {
			enabled: 'true'
		},
		preventOverflow: {
			padding: 0
		},
		filp: {
			enabled :'false'
		}
	}
}

var bannerbot = document.body.appendChild('<div class="footer">bottom</div>')
//create a 'fake' box on the bottom of the view to contain banner
Class botBox {
	constructor () {
		//subtract banner hight from top,
		this.rect = {
        		top: window.innerHeight-10,
        		left: 0,
        		right: window.innerWidth,
        		bottom: window.innerHeight,
        		width: window.innerWidth,
        		height: 10
      		};
	}

	getBoundingClientRect() {
		return this.rect;
	}

	get clientWidth() {
		return this.rect.width;
	}

	get clientHeight() {
		return this.rect.height;
	}
}

var Box = new botBox();
var botPop = new Popper(Box, bannerbot,{
	placement: bottom-start,
	positionFixed: true,
	modifiers: {
		inner: {
			enabled: 'true'
		},
		preventOverflow: {
			padding: 0
		},
		filp: {
			enabled :'false'
		}
	}
}
