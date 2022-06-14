var hostParts = window.location.host.split('.');
var env = 'local';
var blobFolder = 'qa/';
var contentPath = '/payment/contents/';
var baseUrl = '/payment';
var vendorBundleSrc = '/payment/build/vendor.bundle.js?v=1.0.0.305';
var developerBundleSrc = '/payment/build/app.bundle.js?v=1.0.0.305';
var plansBundleSrc = '/payment/build/plans-1.0.0.305.bundle.js';
var appJsSrc = '/payment/scripts/app.js?v=1.0.0.305';
var bootstrapSrc = 'styles/bootstrap/bootstrap.min.css';
var fontAwesomeSrc = 'fonts/fontawesome5-subset/css/all.min.css';
var jQuerySrc = '/blob/common/scripts/jquery-3.5.1.min.js';
var googleFontsSrc = 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700|Source+Sans+Pro:200,300,400,600,700|Open+Sans:300,400,600,700,800|Roboto+Slab:100,300,400,700|Work+Sans:300,400,500,600,700|Merriweather:300,400,600,700';
var mainCssSrc = '/payment/stylesheets/zty/main.css?v=1.0.0.305';
var resFileName = 'dev.json';
var portalJsFileName = 'dev.json';
var esShimSrc = 'scripts/es6/es6-shim.min.js';
var hkgrostekfont = 'styles/HKGrotesk/css/hkgrostekfont.css?v=1.0.0.305';
switch (hostParts[0]) {
case 'reg-builder':
    env = hostParts[0];
    resFileName = 'reg.json';
    blobFolder = 'reg/';
    break;
case 'stg-builder':
    env = 'stg';
    blobFolder = 'stg/';
    resFileName = 'stg.json';
    break;
case 'qa-builder':
    env = hostParts[0];
    blobFolder = 'qa/';
    break;
case 'perf-builder':
    env = hostParts[0];
    blobFolder = 'reg/';
    break;
case 'builder':
    env = hostParts[0];
    blobFolder = 'prod/';
    resFileName = 'prod.json';
    break;
}
var ecomJsonPath = contentPath + blobFolder + 'zety.com/' + resFileName + '?v=1.0.0.305';
var nrJsPath = contentPath + blobFolder + 'zety.com/nr.js';
var localizedTextJsonPath = contentPath + blobFolder + 'zety.com/localizedText.json?v=1.0.0.305';

function prefetchFiles(src, callback) {
    var s, r, t;
    r = false;
    s = document.createElement('link');
    s.rel = 'prefetch';
    s.href = src;
    s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) {
            r = true;
            callback && callback();
        }
    };
    t = document.getElementsByTagName('link')[0];
    t.parentNode.insertBefore(s, t);
}

function loadImageFiles() {
    prefetchFiles(baseUrl + '/images/zty/logo.svg');
    prefetchFiles(baseUrl + '/images/zty/loading.gif');
    prefetchFiles(baseUrl + '/images/wlb/bold-logo.png');
    prefetchFiles(baseUrl + '/images/wlb/hubert_baker.png');
    prefetchFiles(baseUrl + '/images/wlb/Heather_spielmaker.png');
    prefetchFiles(baseUrl + '/images/wlb/breadcrum-check-two.png');
    prefetchFiles(baseUrl + '/images/wlb/lc-sell-sprite.jpg');
    prefetchFiles(baseUrl + '/images/wlb/lc-sell-sprite.jpg');
    prefetchFiles(baseUrl + '/images/wlb/exe-girl.png');   
    prefetchFiles(baseUrl + '/images/wlb/grey-arrow.png');
}

prefetchFiles(vendorBundleSrc);		//prefetch vendor bundle
prefetchFiles(developerBundleSrc);	//prefetch developer bundle
prefetchFiles(plansBundleSrc);	//prefetch plans bundle
prefetchFiles(appJsSrc);	//prefetch app JS 
prefetchFiles(contentPath + bootstrapSrc);						//prefetch bootstrap CSS
prefetchFiles(contentPath + fontAwesomeSrc);						//prefetch fontawesome CSS
prefetchFiles(jQuerySrc);						//prefetch jQuery
prefetchFiles(contentPath + esShimSrc);
prefetchFiles(contentPath + hkgrostekfont);
prefetchFiles(googleFontsSrc);					//prefetch googleFonts CSS
prefetchFiles(mainCssSrc);			//prefetch main CSS 
prefetchFiles(ecomJsonPath);            //prefetch ecom JSON
prefetchFiles(localizedTextJsonPath);
prefetchFiles(nrJsPath);
prefetchFiles('/payment/contents/styles/HKGrotesk/fonts/HKGrotesk-Regular.woff2');
prefetchFiles('/payment/contents/styles/HKGrotesk/fonts/HKGrotesk-SemiBold.woff2');
prefetchFiles('/payment/contents/styles/HKGrotesk/fonts/HKGrotesk-Light.woff2');
prefetchFiles('/payment/contents/styles/HKGrotesk/fonts/HKGrotesk-Bold.woff2');
prefetchFiles('/payment/contents/styles/font-awesome-5/webfonts/fa-solid-900.woff2');
prefetchFiles('/payment/contents/' + blobFolder + 'common/localizedText.json?v=1.0.0.305');

loadImageFiles();										//prefect image files