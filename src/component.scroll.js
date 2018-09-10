/** ********** *
 *
 * scroll
 * - Event listeners
 *
 * ********** **/

const inBrowser = typeof window !== 'undefined';

let ec;

let scrollFuncs = {
    loose: function ($sprite) {
        $sprite.$scroll.touching = false;
    },

    looper: function ($sprite) {
        if (!$sprite.$scroll || !$sprite.$scroll.$scrolling) return;

        if (Math.abs($sprite.$scroll.speedX) > 1) {
            $sprite.$scroll.speedX *= $sprite.scroll.smooth || 0.8;
        } else {
            $sprite.$scroll.speedX = 0;
        }
        if (Math.abs($sprite.$scroll.speedY) > 1) {
            $sprite.$scroll.speedY *= $sprite.scroll.smooth || 0.8;
        } else {
            $sprite.$scroll.speedY = 0;
        }

        if (Math.abs($sprite.$scroll.speedX) <= 2 && Math.abs($sprite.$scroll.speedY) <= 2) {
            $sprite.$scroll.$scrolling = false;
            return;
        }

        if ($sprite.$scroll.touching) return;

        $sprite.scroll.scrollY -= $sprite.$scroll.speedY;
        $sprite.scroll.scrollX -= $sprite.$scroll.speedX;

        let minScrollX = ec.utils.funcOrValue($sprite.scroll.minScrollX, $sprite);
        let maxScrollX = ec.utils.funcOrValue($sprite.scroll.maxScrollX, $sprite);
        let minScrollY = ec.utils.funcOrValue($sprite.scroll.minScrollY, $sprite);
        let maxScrollY = ec.utils.funcOrValue($sprite.scroll.maxScrollY, $sprite);

        if (!isNaN(minScrollY) && $sprite.scroll.scrollY < minScrollY) {
            $sprite.scroll.scrollY = minScrollY;
        } else if (!isNaN(maxScrollY) && $sprite.scroll.scrollY > maxScrollY) {
            $sprite.scroll.scrollY = maxScrollY;
        }

        if (!isNaN(minScrollX) && $sprite.scroll.scrollX < minScrollX) {
            $sprite.scroll.scrollX = minScrollX;
        } else if (!isNaN(maxScrollX) && $sprite.scroll.scrollX > maxScrollX) {
            $sprite.scroll.scrollX = maxScrollX;
        }
    },

    touch: function ($sprite, $e) {
        if (!$sprite.scroll.scrollable) return false;

        let now = Date.now();

        if (!$sprite.$scroll.touching) {
            // start scroll
            $sprite.$scroll.touching = now;
            $sprite.$scroll.quickTouch = now;

            $sprite.$scroll.startPos.x = $e.canvasX;
            $sprite.$scroll.startPos.y = $e.canvasY;

            $sprite.$scroll.speedX = 0;
            $sprite.$scroll.speedY = 0;
        } else {
            $sprite.$scroll.$scrolling = true;

            let deltaX = $sprite.$scroll.startPos.x - $e.canvasX;
            let deltaY = $sprite.$scroll.startPos.y - $e.canvasY;

            let deltaTime = now - $sprite.$scroll.touching;
            $sprite.$scroll.touching = now;

            if ($sprite.scroll.scrollX + deltaX < $sprite.scroll.minScrollX ||
                $sprite.scroll.scrollX + deltaX > $sprite.scroll.maxScrollX) {
                if ($sprite.scroll.flexibleX) deltaX >>= 3;
                else deltaX = 0;
            }
            if ($sprite.scroll.scrollY + deltaY < $sprite.scroll.minScrollY ||
                $sprite.scroll.scrollY + deltaY > $sprite.scroll.maxScrollY) {
                if ($sprite.scroll.flexibleY) deltaY >>= 3;
                else deltaY = 0;
            }

            if (Math.abs(deltaX) >= 1 && deltaTime > 1) {
                $sprite.$scroll.speedX = ($e.canvasX - $sprite.$scroll.startPos.x) * 4;
                $sprite.scroll.scrollX += deltaX;
            }
            if (Math.abs(deltaY) >= 1 && deltaTime > 1) {
                $sprite.$scroll.speedY = ($e.canvasY - $sprite.$scroll.startPos.y) * 4;
                $sprite.scroll.scrollY += deltaY;
            }

        // $sprite.$scroll.speedX = ($sprite.$scroll.speedX + ($e.canvasX - startPos.x) * 2) / 2;

        // let curSpeed = ($e.canvasY - startPos.y) * 3;
        // $sprite.$scroll.speedY = ($sprite.$scroll.speedY + curSpeed) / 2;

            $sprite.$scroll.startPos.x = $e.canvasX;
            $sprite.$scroll.startPos.y = $e.canvasY;

            // $e.event.preventDefault();
            $e.stopPropagation();
        }
    },

    wheel: function ($sprite, $e) {
        if (!$sprite.scroll.scrollable) return false;

        $sprite.$scroll.$scrolling = true;

        $sprite.$scroll.speedX = $e.event.wheelDeltaX;
        $sprite.$scroll.speedY = $e.event.wheelDeltaY;

        // $e.event.preventDefault();
        $e.stopPropagation();
    }
};

const component = function (opt) {
    let autoScroll = false;

    let option = opt || {};

    option.scroll = Object.assign({
        scrollX: 0,
        scrollY: 0,
        scrollable: true,
        minScrollX: 0,
        maxScrollX: 0,
        minScrollY: 0,
        maxScrollY: 0,
    }, opt.scroll);

    const autoScrollFunc = () => {
        if (autoScroll) {
            $sprite.scroll.scrollY = autoScroll();
        }
    };

    let handling = true;
    const handleToggle = () => {
        handling = !handling;
    };

    option.events = Object.assign({
        interceptor ($e) {
            if (!handling) {
                return $e;
            }

            if ($e.type === 'touchmove') {
                scrollFuncs.touch(this, $e);
                $e.$stopPropagation = true;
            } else if ($e.type === 'mousewheel') {
                scrollFuncs.wheel(this, $e);
            } else if ($e.type === 'touchend' || $e.type === 'mouseup') {
                scrollFuncs.loose(this);
            } else if ($e.type === 'hold') {
                $e.$stopPropagation = true;
            }

            if (autoScroll) {
                $sprite.off('ticked', autoScrollFunc);
                autoScroll = false;
            }
            return $e;
        },
        // touchmove: function ($e) {
        //     scrollFuncs.touch(this, $e);
        // },
        // mousewheel: function ($e) {
        //     scrollFuncs.wheel(this, $e);
        // },
        // touchend: function () {
        //     scrollFuncs.stop();
        // },
        // mouseup: function () {
        //     scrollFuncs.stop();
        // },
    }, option.events || {});

    let $sprite = new ec.class.sprite(option);

    $sprite.on('ticked', () => {
        scrollFuncs.looper($sprite);
    });

    $sprite.on('handleToggle', handleToggle);

    $sprite.on('scrollTo', (position, duration) => {
        autoScroll = ec.transition.pendulum(
            $sprite.scroll.scrollY,
            position,
            (duration || 200) * 2,
            {
                cycle: 0.5,
            }
        );

        $sprite.on('ticked', autoScrollFunc);
    });

    $sprite.$scroll = {
        speedX: 0,
        speedY: 0,
        touching: false,
        startPos: {},
    };

    let $scrollingElement = $sprite.add({
        name: 'scrolling-element',
        style: {
            tx: function () {
                return -this.$parent.scroll.scrollX;
            },
            ty: function () {
                return -this.$parent.scroll.scrollY;
            },
        }
    });

    $sprite.add = $scrollingElement.add.bind($scrollingElement);
    $sprite.clear = $scrollingElement.clear.bind($scrollingElement);
    $sprite.getChildren = () => {
        return $scrollingElement.children;
    };

    return $sprite;
}

const init = function (Easycanvas, namespace) {
    ec = Easycanvas;
    if (namespace) {
        Easycanvas.class[namespace] = component;
    }

    return component;
};

if (inBrowser && window.Easycanvas) {
    ec = Easycanvas;
    Easycanvas.class.scroll = component;
} else {
    module.exports = init;
}