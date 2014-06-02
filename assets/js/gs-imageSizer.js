function imageSizer(element) {

    var bgImg = $("." + element + " img");
    var vPort = $("." + element);

//var bgImg = $('.ib-icon img');
//var vPort = $('.ib-icon');

    if (bgImg.width() > bgImg.height()) {
        bgImg.width(vPort.outerWidth()).css('height', 'auto');
        bgImg.css('left', 0);
        if (bgImg.width() < vPort.width()) {
            bgImg.width(vPort.outerWidth()).css('height', 'auto');
            bgImg.css('left', 0);
        }
        if (bgImg.height() < vPort.height()) {
            bgImg.height(vPort.outerHeight()).css('width', 'auto');
            bgImg.css('left', -(bgImg.width() - vPort.width()) / 2);
        }

        return;
    } else {
        bgImg.width(vPort.outerWidth()).css('height', 'auto');
        bgImg.css('bottom', '0');
        if (bgImg.width() < vPort.width()) {
            bgImg.width(vPort.outerWidth()).css('height', 'auto');
            bgImg.css('bottom', '0');
        }
        if (bgImg.height() < vPort.height()) {
            bgImg.height(vPort.outerHeight()).css('width', 'auto');
            bgImg.css('bottom', -(bgImg.height() - vPort.height()) / 2);
        }
        return;
    }
}