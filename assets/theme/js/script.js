
(function(a){a.extend(a.easing,{easeInOutCubic:function(a,c,d,e,f){return 1>(c/=f/2)?e/2*c*c*c+d:e/2*((c-=2)*c*c+2)+d}});a.fn.outerFind=function(a){return this.find(a).addBack(a)};(function(a,c){var d=function(a,b,c){var d;return function(){var h=this,k=arguments;d?clearTimeout(d):c&&a.apply(h,k);d=setTimeout(function(){c||a.apply(h,k);d=null},b||100)}};jQuery.fn[c]=function(a){return a?this.bind("resize",d(a)):this.trigger(c)}})(jQuery,"smartresize");a.isMobile=function(b){var c=[],d={blackberry:"BlackBerry",
android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};b="undefined"==a.type(b)?"*":b.toLowerCase();"*"==b?c=a.map(d,function(a){return a}):b in d&&c.push(d[b]);return!(!c.length||!navigator.userAgent.match(new RegExp(c.join("|"),"i")))};var v=function(){var b=a('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),c=b[0],d=parseInt(window.innerHeight/2,10),c=parseInt((window.getComputedStyle?getComputedStyle(c,null):c.currentStyle).height,
10);b.remove();return c==d}();a(function(){function b(){a(this).css("height",9*a(this).parent().width()/16)}a("html").addClass(a.isMobile()?"mobile":"desktop");a(window).scroll(function(){a(".mbr-navbar--sticky").each(function(){var b=10<a(window).scrollTop()?"addClass":"removeClass";a(this)[b]("mbr-navbar--stuck").not(".mbr-navbar--open")[b]("mbr-navbar--short")})});a.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(b,c){var d=[b,b];d[c>b?0:1]=c;a(window).smartresize(function(){var b=a(window).height();
0>a.inArray(b,d)&&(b=d[a(window).width()>b?1:0]);a(".mbr-section--full-height").css("height",b+"px")})}(a(window).width(),a(window).height()):v||(a(window).smartresize(function(){a(".mbr-section--full-height").css("height",a(window).height()+"px")}),a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind(".mbr-section--full-height").length&&a(window).resize()}));a(window).smartresize(function(){a(".mbr-section--16by9").each(b)});a(document).on("add.cards change.cards",
function(c){var d=a(c.target).outerFind(".mbr-section--16by9");d.length?d.attr("data-16by9","true").each(b):a(c.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});a.fn.jarallax&&!a.isMobile()&&(a(document).on("destroy.parallax",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax("destroy").css("position","")}),a(document).on("add.cards change.cards",function(b){a(b.target).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")}));
if(a.fn.socialLikes)a(document).on("add.cards",function(b){a(b.target).outerFind(".mbr-social-likes:not(.mbr-added)").on("counter.social-likes",function(b,c,d){999<d&&a(".social-likes__counter",b.target).html(Math.floor(d/1E3)+"k")}).socialLikes({initHtml:!1})});var c,d,e=0,f=null,l=!a.isMobile();a(window).scroll(function(){d&&clearTimeout(d);var b=a(window).scrollTop(),c=b<=e||l;e=b;if(f){var k=b>f.breakPoint;c?k!=f.fixed&&(l?(f.fixed=k,a(f.elm).toggleClass("is-fixed")):d=setTimeout(function(){f.fixed=
k;a(f.elm).toggleClass("is-fixed")},40)):(f.fixed=!1,a(f.elm).removeClass("is-fixed"))}});a(document).on("add.cards delete.cards",function(b){c&&clearTimeout(c);c=setTimeout(function(){f&&(f.fixed=!1,a(f.elm).removeClass("is-fixed"));a(".mbr-fixed-top:first").each(function(){f={breakPoint:a(this).offset().top+3*a(this).height(),fixed:!1,elm:this};a(window).scroll()})},650)});a(window).smartresize(function(){a(".mbr-embedded-video").each(function(){a(this).height(a(this).width()*parseInt(a(this).attr("height")||
315)/parseInt(a(this).attr("width")||560))})});a(document).on("add.cards",function(b){a("html").hasClass("mbr-site-loaded")&&a(b.target).outerFind("iframe").length&&a(window).resize()});a(document).on("add.cards",function(b){a(b.target).outerFind("[data-bg-video]").each(function(){for(var b,c=a(this).data("bg-video"),d=[/\?v=([^&]+)/,/(?:embed|\.be)\/([-a-z0-9_]+)/i,/^([-a-z0-9_]+)$/i],e=0;e<d.length;e++)if(b=d[e].exec(c)){var c="http"+("https:"==location.protocol?"s":"")+":",c=c+("//img.youtube.com/vi/"+
b[1]+"/maxresdefault.jpg"),f=a('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});a("> *:eq(0)",this).before(f);a("<img>").on("load",function(){if(120==(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg")}}else f.css("background-image",'url("'+this.src+'")').show()}).attr("src",
c);a.fn.YTPlayer&&!a.isMobile()&&(c=eval("("+(a(this).data("bg-video-params")||"{}")+")"),a("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer(a.extend({videoURL:b[1],containment:"self",showControls:!1,mute:!0},c)));break}})});a("body > *:not(style, script)").trigger("add.cards");a("html").addClass("mbr-site-loaded");a(window).resize().scroll();a("html").hasClass("is-builder")||a(document).click(function(b){try{var c=b.target;if(!a(c).parents().hasClass("testimonials1")){do if(c.hash){var d=
/#bottom|#top/g.test(c.hash);a(d?"body":c.hash).each(function(){b.preventDefault();var d=a(".mbr-navbar--sticky").length?64:0,d="#bottom"==c.hash?a(this).height()-a(window).height():a(this).offset().top-d;a(this).hasClass("panel-collapse")||a(this).hasClass("tab-pane")||a("html, body").stop().animate({scrollTop:d},800,"easeInOutCubic")});break}while(c=c.parentNode)}}catch(e){}});a(".cols-same-height .mbr-figure").each(function(){function b(){d.css({width:"",maxWidth:"",marginLeft:""});if(l&&f){var a=
l/f;c.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var g=e.height()/e.width();g>a&&(a=100*(g-a)/a,d.css({width:a+100+"%",maxWidth:a+100+"%",marginLeft:-a/2+"%"}))}}var c=a(this),d=c.children("img"),e=c.parent(),f=d[0].width,l=d[0].height;d.one("load",function(){f=d[0].width;l=d[0].height;b()});a(window).on("resize",b);b()})});a("html").hasClass("is-builder")||(a(document).ready(function(){if(!a.isMobile()&&a("input[name=animation]").length){var b=function(a){var b=0;do b+=a.offsetTop||
0,a=a.offsetParent;while(a);return b};a("input[name=animation]").remove();var c=a("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-gallery, .mbr-slider, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return a(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine")}).addClass("hidden animated"),
d=a(window);d.on("scroll resize",function(){var d=document.documentElement.scrollTop||document.body.scrollTop,f=d+window.innerHeight-50;a.each(c,function(){var c=a(this),g=c[0],h=g.offsetHeight,g=b(g);if(g+h>=d&&g<=f&&c.hasClass("hidden"))c.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c.removeClass("animated fadeInUp")})})});d.trigger("scroll")}}),a(".navbar").length&&a(".nav-dropdown").swipe({swipeLeft:function(b,
c,d,e,f){a(".navbar-close").click()}}));a(document).ready(function(){if(a(".mbr-arrow-up").length){var b=a("#scrollToTop"),c=a("body,html"),d=a(window);b.css("display","none");d.scroll(function(){0<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(){c.animate({scrollTop:0},400);return!1})}});a(document).ready(function(){a(".jsNewsCard").each(function(){a(this).on("click",function(){var b=a(this).attr("modal-id");a(b).modal("show")})})});a(document).ready(function(){a(".counters").length&&
a(".counters").viewportChecker({offset:200,callbackFunction:function(b,c){a("#"+b.attr("id")+" .count").each(function(){a(this).prop("Counter",0).animate({Counter:a(this).text()},{duration:3E3,easing:"swing",step:function(b){a(this).text(Math.ceil(b))}})})}});a(".pie_progress").length&&(a(".pie_progress").asPieProgress({namespace:"asPieProgress",classes:{element:"pie_progress",number:"pie_progress__number"},min:0,max:100,size:150,speed:40,barcolor:"#c0a375",barsize:"10",trackcolor:"#f2f2f2",fillcolor:"none",
easing:"ease",numberCallback:function(a){return Math.round(this.getPercentage(a))+"%"},contentCallback:null}),a(".extProgressBarRound").viewportChecker({offset:150,callbackFunction:function(b,c){a("#"+b.attr("id")+" .pie_progress").asPieProgress("start")}}))});a(".panel-group").find(".panel-heading").each(function(b){a(this).click(function(){var b=a(this).children("span");a(b).hasClass("pseudoMinus")?a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border",""):(a(".panel-group").find(".signSpan").each(function(){a(this).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border",
"")}),a(b).removeClass("pseudoPlus").addClass("pseudoMinus"))})});a(".toggle-panel").find(".panel-heading").each(function(b){a(this).click(function(){var b=a(this).children("span");a(b).hasClass("pseudoMinus")?a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border",""):a(b).removeClass("pseudoPlus").addClass("pseudoMinus").parent().css("border","")})});initCountdown=function(){a(".countdown:not(.countdown-inited)").each(function(){a(this).addClass("countdown-inited").countdown(a(this).attr("data-end"),
function(b){a(this).html(b.strftime('<div class="row"><div class="col-xs-12 col-sm-6 col-lg-3"><span class="number-wrap"><span class="number">%D</span><span class="period">Days</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-lg-3"><span class="number-wrap"><span class="number">%H</span><span class="period">Hours</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-lg-3"><span class="number-wrap"><span class="number">%M</span><span class="period">Minutes</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-12 col-sm-6 col-lg-3"><span class="number-wrap"><span class="number">%S</span><span class="period">Seconds</span><div class="bottom1"></div><div class="bottom2"></div></span></div></div>'))})});
a(".countdown:not(.countdown-inited)").each(function(){a(this).countdown(a(this).attr("data-end"),function(b){a(this).text(b.strftime("%D days %H:%M:%S"))})})};0!=a(".countdown").length&&initCountdown();var u=!1;a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("mbr-slider-ext"))a(this).on("slid.bs.carousel",function(b,d){a(b.relatedTarget).closest("section").hasClass("mbr-slider-ext")&&(a(b.relatedTarget).parent().find(".carousel-item").not(".prev.right").removeClass("kenberns"),
a(b.relatedTarget).addClass("kenberns"))})});if(a("html").hasClass("is-builder"))a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("extTestimonials1")||a(b.target).hasClass("extTestimonials3")){setTimeout(function(){a(window).trigger("resize")},100);if(a(b.target).hasClass("extTestimonials3")){var c=a(b.target).find(".carousel-inner").attr("data-visible");a(b.target).find(".carousel-inner").attr("class","carousel-inner slides"+c);a(b.target).find(".clonedCol").remove();a(b.target).find(".carousel-item .col-md-12").each(function(){2>
c?a(this).attr("class","col-md-12"):5==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)});a(b.target).find(".carousel-item").each(function(){for(var b=a(this),e=1;e<c;e++){b=b.next();b.length||(b=a(this).siblings(":first"));var f=b.index();b.find(".col-md-12:first").clone(!0).addClass("cloneditem-"+e).addClass("clonedCol").attr("data-cloned-index",f).appendTo(a(this).children().eq(0))}})}a(b.target).hasClass("extTestimonials3")&&!u&&(u=!0,a(this).on("slide.bs.carousel",
"section.extTestimonials3",function(b){var c=a(b.target).find(".carousel-inner").attr("data-visible");a(b.target).find(".clonedCol").remove();a(b.target).find(".carousel-item").each(function(){for(var b=a(this),d=1;d<c;d++){b=b.next();b.length||(b=a(this).siblings(":first"));var g=b.index();b.find(".col-md-12:first").clone(!0).addClass("cloneditem-"+d).addClass("clonedCol").attr("data-cloned-index",g).appendTo(a(this).children().eq(0))}})}))}});a("html").hasClass("is-builder")||(0<a("section.extTestimonials1:not(.extTestimonials5)").length&&
(a(window).on("resize",function(){a("section.extTestimonials1:not(.extTestimonials5)").each(function(){var b=[],c=a(this).find(".carousel-item.active").index();a(this).find(".carousel-item .card-block").css("min-height","0");a(this).find(".carousel-item").addClass("active");a(this).find(".carousel-item").each(function(){b.push(a(this).find(".card-block")[0].offsetHeight)});a(this).find(".carousel-item").removeClass("active").eq(c).addClass("active");var d=Math.max.apply(null,b);a(this).find(".carousel-item").each(function(){a(this).find(".card-block").css("min-height",
d+"px")})})}),setTimeout(function(){a(window).trigger("resize")},100)),a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("extTestimonials1")||a(b.target).hasClass("extTestimonials3"))if((0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&a(b.target).find(".card-block").each(function(){a(this).css("display","block")}),a(b.target).hasClass("extTestimonials3")){var c=a(b.target).find(".carousel-inner").attr("data-visible");2>c||(a(b.target).find(".carousel-inner").attr("class",
"carousel-inner slides"+c),a(b.target).find(".carousel-item .col-md-12").each(function(){5==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)}),a(b.target).find(".carousel-item").each(function(){for(var b=a(this),e=1;e<c;e++)b=b.next(),b.length||(b=a(this).siblings(":first")),b.find(".col-md-12:first").clone().addClass("cloneditem-"+e).appendTo(a(this).children().eq(0))}))}}),a(document).on("add.cards change.cards",function(b){b=a(b.target);if(b.hasClass("table1")){var c=
b.find(".table-wrapper"),d="true"===c.attr("data-search");if(d)var e=c.attr("search-text"),f=c.attr("info1-text"),l=c.attr("info2-text"),g=c.attr("info3-text"),h=c.attr("info4-text");b.find(".table").DataTable({retrieve:!0,paging:!1,aaSorting:[],scrollX:!0,searching:d,info:d,language:{search:e,info:f+" _END_ "+l,infoEmpty:f+" _END_ "+l,infoFiltered:g+" _MAX_ "+h}})}}));filterShop=function(b,c){var d=3>c?a(".shop-items").children().sort(function(b,d){var e=parseFloat(a(b).attr("price")),h=parseFloat(a(d).attr("price"));
return 1==c?e>h?1:e==h?0:-1:e<h?1:e==h?0:-1}):w;a(".shop-items").children().remove();for(var e=0;e<d.length;e++)a(".shop-items").append(d[e]);modalEvents()};if(0!=a(".shop1").length){var w=a(".shop-items").children(),n=a(".shop-items").children(),p=a(".sort-buttons .filter-by-pu .btn"),q=a(".sort-buttons .filter-by-pd .btn"),t=a(".sort-buttons .filter-by-d .btn");a(".filter-by-pu").on("click",function(){a(p).removeClass("disableSortButton");a(q).addClass("disableSortButton");a(t).addClass("disableSortButton");
filterShop(n,1)});a(".filter-by-pd").on("click",function(){a(q).removeClass("disableSortButton");a(p).addClass("disableSortButton");a(t).addClass("disableSortButton");filterShop(n,2)});a(".filter-by-d").on("click",function(){a(t).removeClass("disableSortButton");a(p).addClass("disableSortButton");a(q).addClass("disableSortButton");filterShop(n,3)});a(".price-range").on("click",function(){var b=a(".min-input").val(),c=a(".max-input").val();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(d,
e){parseFloat(a(e).attr("price"))>=parseFloat(b)&&parseFloat(a(e).attr("price"))<=parseFloat(c)?a(e).removeClass("hided-by-price"):a(e).addClass("hided-by-price")})});a(".price-range-reset").on("click",function(){a(".max-input").val(findMaxItemPrice());a(".min-input").val(findMinItemPrice());a(".max-toggle").css("right","0");a(".min-toggle").css("left","0");a(".range-controls .bar").css("margin-left","0px").css("width","100%");rangeSliderInit();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,
c){a(c).removeClass("hided-by-price")})})}autoPriceRange=function(){var b=a(".min-input").val(),c=a(".max-input").val();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(d,e){parseFloat(a(e).attr("price"))>=parseFloat(b)&&parseFloat(a(e).attr("price"))<=parseFloat(c)?a(e).removeClass("hided-by-price"):a(e).addClass("hided-by-price")})};var x=a(".mbr-gallery-filter-all");a(document).on("add.cards change.cards",function(b){var c=a(b.target);if(c.hasClass("shop1")){var d=[];c.find(".mbr-gallery-item").each(function(b){(a(this).attr("data-tags")||
"").trim().split(",").map(function(b){b=b.trim();-1==a.inArray(b,d)&&d.push(b)})});if(0<c.find(".mbr-gallery-filter").length&&a(b.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var e="";c.find(".mbr-gallery-filter ul li:not(li:eq(0))").remove();d.map(function(a){e+="<li>"+a+"</li>"});c.find(".mbr-gallery-filter ul").append(x).append(e);c.on("click",".mbr-gallery-filter li",function(b){$li=a(this);$li.parent().find("li").removeClass("active");$li.addClass("active");var d=$li.closest("section").find(".mbr-gallery-row"),
e=$li.html().trim();c.find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,c){var d=a(this);tagsTrimmed=d.attr("data-tags").split(",").map(function(a){return a.trim()});-1!=a.inArray(e,tagsTrimmed)||$li.hasClass("mbr-gallery-filter-all")?d.removeClass("mbr-gallery-item__hided"):(d.addClass("mbr-gallery-item__hided"),setTimeout(function(){d.css("left","300px")},200))});setTimeout(function(){d.closest(".mbr-gallery-row").trigger("filter")},50)})}else c.find(".mbr-gallery-item__hided").removeClass("mbr-gallery-item__hided"),
c.find(".mbr-gallery-row").trigger("filter")}});findMaxItemPrice=function(){var b=0;a(".mbr-gallery-item").each(function(c,d){parseFloat(a(d).attr("price"))>b&&(b=parseFloat(a(d).attr("price")))});return b};findMinItemPrice=function(){var b=1E6;a(".mbr-gallery-item").each(function(c,d){parseFloat(a(d).attr("price"))<b&&(b=parseFloat(a(d).attr("price")))});return b};rangeSliderInit=function(){var b=a("input.min-input"),c=a("input.max-input"),d=a("div.range-controls"),e=d.find("div.bar"),f=d.find("div.min-toggle"),
l=d.find("div.max-toggle"),g=e.innerWidth()-20,h=0,k=g,n=d.offset().left,m=b.val(),r=c.val(),p=b.val(),q=parseInt(a(".filter-cost").width())-20;f.mousedown(function(){a(document).on("mousemove",function(c){l.css("z-index",0);f.css("z-index",1);togglePos=Math.round(c.pageX-n)-10;h=0>=togglePos?0:togglePos>=g?g:togglePos;f.css({left:function(a,b){if(h<k)return m=h;m=r;return k}});e.css({"margin-left":function(){return h<k?h:k},width:function(){return h<k?g-(h+(g-k)):0}});a(b).val(Math.floor((findMaxItemPrice()-
findMinItemPrice())/q*m)+parseInt(p));autoPriceRange()})});l.mousedown(function(){a(document).on("mousemove",function(b){l.css("z-index",1);f.css("z-index",0);togglePos=Math.round(b.pageX-n)-10;k=0>=togglePos?0:togglePos>=g?g:togglePos;l.css({right:function(a,b){if(h<k)return r=k,g-k;r=m;return g-h}});e.css({width:function(){return h<k?g-(h+(g-k)):0}});a(c).val(Math.ceil((findMaxItemPrice()-findMinItemPrice())/q*r)+parseInt(p));autoPriceRange()})});a(document).mouseup(function(){a(document).off("mousemove")})};
0!=a(".shop1").length&&a(document).ready(function(){a("input[name=max]").attr("value",findMaxItemPrice());a("input[name=min]").attr("value",findMinItemPrice());"block"==a(".range-slider").css("display")&&rangeSliderInit()});if(!a("html").hasClass("is-builder")){moveToModal=function(b){var c=a(".shopItemsModal"),d=a(b).find(".sidebar_wraper").clone(),e=a(b).find("img").clone();b=a(b).find(".onsale").clone();a(c).children(".text-modal").append(d);a(c).children(".image-modal").append(e).append(b);d=
a(c).children(".text-modal").find(".price-block");a(c).children(".text-modal").find(".price-block").remove();a(c).children(".text-modal").find(".card-description").after(d)};cleanModal=function(){var b=a(".shopItemsModal");a(b).children(".text-modal").empty();a(b).children(".image-modal").empty()};modalEvents=function(){a(".shop1 .mbr-gallery-item .galleryItem .item_overlay").on("click",function(b){b=a(b.target).closest(".mbr-gallery-item");cleanModal();moveToModal(b);a(".shopItemsModal_wraper").css("display",
"block")});a(".close-modal-wrapper, .shopItemsModalBg").on("click",function(){a(".shopItemsModal_wraper").css("display","none");cleanModal()})};0!=a(".shop1").length&&(a(document).ready(function(){n=a(".shop-items").children();filterShop(n,3)}),null!==navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints?(a(".range-controls").css("display",
"none"),a(".price-controls, .filter-cost").css("margin-bottom","15px")):(a("input.min-input, input.max-input").prop("disabled",!0),a(".filterPriceRange").css("display","none")));var m=function(){var b=a(".shop1");b.length&&a("body").stop().animate({scrollTop:b.offset().top},800,"linear")};if(1100>window.screen.width&&0!=a(".shop1").length)a(".showAll, .filterPriceRange").on("click",m)}move=function(b){b.width();a("html").hasClass("is-builder")||b.css("animation",Math.round(parseInt(b.width())/100)+
"s floatingText linear infinite")};for(m=0;2>m;m++)a(".bgTextP").each(function(){a(this).clone().appendTo(a(this).parent())});a(".bgTextP").css("padding-left",window.screen.width/2+"px");a(".wrapper-absolute").each(function(){move(a(this))});a(document).ready(function(){if(a(".modalWindow-video iframe").length){var b=a(".modalWindow-video iframe")[0].contentWindow,c=function(){a(".modalWindow").css("display","table").click(function(){a(".modalWindow").css("display","none");b.postMessage('{"event":"command","func":"pauseVideo","args":""}',
"*")})};a(".intro-play-btn").click(function(){c();b.postMessage('{"event":"command","func":"playVideo","args":""}',"*")});a(".intro-play-btn-figure").click(function(a){a.preventDefault();c();b.postMessage('{"event":"command","func":"playVideo","args":""}',"*")})}});initTyped=function(b,c,d,e){a(e).typed({strings:[b,c,d],typeSpeed:parseInt(a(e).attr("typeSpeed")),backSpeed:parseInt(a(e).attr("typeSpeed")),loop:!0,backDelay:1E3})};0!=a(".element").length&&a(".element").each(function(){initTyped(a(this).attr("firstel"),
a(this).attr("secondel"),a(this).attr("thirdel"),"."+a(this).attr("adress"))})})(jQuery);

!function() {
    try {
        document.getElementsByClassName('engine')[0].getElementsByTagName('a')[0].removeAttribute('rel');
    } catch(err){ }
    if(!document.getElementById('top-1')) {
        var e = document.createElement("section");
        e.id = "top-1";
        e.className = "engine";
        e.innerHTML = '<a href="https://mobirise.com">mobirise.com</a> Mobirise v3.10.3';
        document.body.insertBefore(e, document.body.childNodes[0]);
    }
}();