if(!window.console){window.console={}}if(!console.log){console.log=function(){}}var jvh=jvh||{};var conciergeToolTipMessage="";
jvh.core={settings:{channel:{id:9,name:"UK"},currency:"GBP",exchangeRate:1,imageDomain:"",ver:1,webquote:false,applicationDeploymentType:"",cohort:0,basketExpire:true},searchBarPositionTop:0,viewport:null,breakpoint:null,breakpointRes:{mobile:0,"large-mobile":480,tablet:768,"large-tablet":850,desktop:1140,"large-desktop":1400},resizeWait:null,headerHeight:0,desktopNavHeight:48,showMenu:true,accomDescRequests:[],accomDescRequestsTransit:[],trackingEnabled:true,trackingType:"",scrollLastPosition:0,fixedNav:0,statCounters:[],mapFirstRun:false,mapLoadFailed:null,categories:{2:{name:"Classic"},3:{name:"Signature"},4:{name:"Luxury"}},rTypes:["","Contract","AdHoc","AdHocReq","GenAdHocReq","GenAdHoc","Reserve"],localStorageSupported:false,fixedScrolling:false,hideMenu:function(e){if($(event.target).closest(".utility-nav").length==0){$(document).unbind("click.hideMenu")
}},modalTimer:null,previousScroll:0,contactUsPhoneNumber:"",homePodsData:null,months:["January","February","March","April","May","June","July","August","September","October","November","December"],init:function(){var e=jvh.core;
document.cookie="firstview=true; max-age=2592000;";jvh.core.localStorage.supported();var a=null;a=window.setInterval(function(){if(jvh.data&&jvh.data.deferCss){jvh.data.deferCss.forEach(function(e,a){var t=document.createElement("link");
t.rel="stylesheet";t.href=e.link;t.onload=function(){window.setTimeout(function(){jvh.core.images.lazyLoad();
jvh.core.loadHashModal()},50)};if(e.media!==""){t.media=e.media}document.getElementsByTagName("head")[0].appendChild(t)
})}window.clearInterval(a)},500);e.defineViewport();jvh.core.setHeaderHeight();e.statCounters=$(".stat-counter");
var t=$("html");var r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;
t.removeClass("no-js");if(r){t.addClass("touch")}else{t.addClass("no-touch")}var o=navigator.appName=="Microsoft Internet Explorer"||navigator.userAgent.match(/rv 11/)||/msie|trident/i.test(navigator.userAgent);
if(o){t.addClass("eq-ie")}if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach
}if(navigator.userAgent.match(/MSIE 10.0/i)){t.addClass("lt-ie11")}e.settings=$.extend(e.settings,jvhSettings);
jvhSettings=null;e.mapFirstRun=true;if(typeof jQuery.fn.owlCarousel!=="undefined"){jvh.core.owlCarousel.init()
}jvh.core.contentBlockCarousel.init();var n=$("body");$(document).on("click",".accom-pop-up-container .shortlist-container a, .map-marker-accom a.shortlist",jvh.core.shortlist.amendLink);
$(document).on("accomLoaded",jvh.core.populateVillaData);$(".add-please-wait").click(function(){$("body > div.curtains").addClass("active").addClass("show-spinner");
return true});e.scrollLastPosition=window.pageYOffset;e.fixedNav=$(".header").outerHeight(true)+$(".search").outerHeight(true);
$("#modalClose").click(function(){e.closeModal()});$("div.holiday-opening-hours a").click(function(e){e.preventDefault();
$("#modalClose").click()});$("a.holiday-opening-hours").click(function(e){e.preventDefault();jvh.core.showModal($("footer.secondary div.holiday-opening-hours").clone(true),false)
});$(document).on("accomLoaded",function(){jvh.core.shortlist.populateJSShortlist()});$("body > div.curtains").click(function(){var a=$(this);
if(a.hasClass("side-modal")&&jvh.account){jvh.account.sideModal.close()}else if($("body").hasClass("utility-open")){jvh.core.tracking.trackEvent("Header","Utility Nav","Close");
$("body").removeClass("utility-open")}else if(!a.hasClass("show-spinner")&&!a.hasClass("no-close")){e.closeModal()
}});$(document).on("click",".website-feedback",function(e){e.preventDefault();jvh.core.mainMenu.closeMenu();
jvh.core.websiteFeedback.feedbackForm.show(false)});jvh.core.promotions.init();$(".cohort-image").each(function(){jvh.core.images.cohortImage($(this))
});const i=$(".search");if(i.length>0){e.searchBarPositionTop=i.position().top}if(e.searchBarPositionTop===0&&n.hasClass("booking")){e.searchBarPositionTop=$(".booking-basket").position().top
}if(n.hasClass("homepage")){$(window).on("scroll",function(e){jvh.core.mainMenu.toggleMenu();jvh.core.fixViewportElements();
jvh.core.images.lazyLoad();jvh.core.contentBlockCarousel.init()})}else{$(window).on("scroll",debounce(jvh.core.delayedScroll,200)).on("scroll",jvh.core.scroll);
jvh.core.mainMenu.toggleMenu()}n.on("click",".photo-gallery-link",function(e){if(e.preventDefault){e.preventDefault()
}if(e.stopPropagation){e.stopPropagation()}jvh.core.tracking.trackEvent(jvh.core.trackingType,"Opens Gallery "+$(this).data("track-name"),"Tile CTA",null);
var a=$(this);var t=a.data("accom-id");if(!t){t=a.parents(".accom-pop-up-container").data("accom-id")
}jvh.core.gallery.fnLoadAndShowVillaGallery(t);return false});$(".trigger-view").on("click",jvh.core.clickTriggerView);
$(document).on("click",".desktop-click-block li",function(e){if(jvh.core.viewport=="desktop"){jvh.core.clickBlockClick(e,$(this))
}});$("span.back-to-top").click(function(){jvh.core.goToAnchor(null,null,200)});$(document).on("click",".click-block li, .clickable",function(e){jvh.core.clickBlockClick(e,$(this))
});if(navigator.userAgent.match(/MSIE 10.0/i)){document.documentElement.className+=" lt-ie11"}$("body").on("click",".you-tube-link",function(e){e.preventDefault();
var a=$(window).width();var t=55/100*a;var r=parseInt($("#modalContainer").css("max-width"))-40;if(t>=r){t=r
}var o=$(this).attr("href");if(typeof o==="undefined"){o=$(this).data("link")}var n='<div class="video-wrapper"><iframe id="YTPlayer" width="'+t+'" height="400" src="'+o+'?autoplay=1&iv_load_policy=3&rel=0" frameborder="0" allowfullscreen></iframe></div>';
jvh.core.showModal(n);$("#modalContent").addClass("yt-video-modal");jvh.core.resizeEmbed();jvh.core.centerModal();
jvh.core.tracking.trackEvent("YouTube Embed","Selects Video",o)});e.trackHeaderFooter();e.trackOrientation();
$(window).resize(function(){e.defineViewport();e.setHeaderHeight();var a=$(".search");var t=$(".header");
jvh.core.fixedNav=t.outerHeight(true)+a.outerHeight(true);var r=$("body");if($(".trigger-view.mobile").hasClass("active")){$(".trigger-view.desktop").addClass("active")
}else if($(".trigger-view.desktop").hasClass("active")){$(".trigger-view.mobile").addClass("active")}clearTimeout(jvh.core.resizeWait);
jvh.core.resizeWait=setTimeout(function(){$(window).trigger("resize-done")},50)});$(window).on("resize-done",function(){jvh.core.searchBar.positionSearchbarPopouts();
jvh.core.mainMenu.repositionMenu();jvh.core.resizeEmbed();jvh.core.centerModal();jvh.core.images.lazyLoad()
});$(document).on("orientation.changed",function(e,a){if(jvh.core.viewport=="mobile"){$("#mapPanel.active, #mapPanel.active #mapDisplay").css("height",$("#modalContainer").outerHeight()-40)
}});$(document).on("viewport.changed",function(e,a){var t=$("body");if(t.hasClass("utility-open")){t.removeClass("utility-open")
}if(jvh.core.viewport!=="mobile"){t.removeClass("search-open");$("html").removeClass("search-open")}if(a=="mobile"||jvh.core.viewport=="mobile"){jvh.core.mainMenu.closeMenu()
}$(".cohort-image").each(function(){jvh.core.images.cohortImage($(this))})});$(".sticky-scroll").find("a").click(function(a){a.preventDefault();
var t=$(this).attr("href").substr(1,4);e.goToAnchor(t,null,null,70)});$(".letter-link").click(function(a){a.preventDefault();
var t=$(this).attr("href").substr(1,4);e.goToAnchor(t,null,null,70)});$(".hover-track").on({mouseenter:function(){jvh.core.tracking.hoverItem=$(this);
jvh.core.tracking.hoverTrack()},mouseleave:function(){clearTimeout(jvh.core.tracking.hoverCheck)}});$(".back-to-top a:not(.cta)").click(function(e){e.preventDefault();
jvh.core.goToAnchor("page-top")});$(".ts-and-cs").click(function(e){var a=$(this);var t=$(this).data("promo-id");
var r=$("#tsAndCs"+t);var o="";var r=r.clone(true);o+='<div class="default-modal-content promo-terms-modal">'+r.html()+"</div>";
jvh.core.showModal(o,false)});if(!n.hasClass("error")&&!n.hasClass("error404")){e.mainMenu.init()}e.customerPopups.init();
e.manageVillaBlocks();e.utilityNav.init();e.domPrefix=e.getDomPrefix();e.gallery.init();e.initRememberMe();
e.initFormFields($(".container, .utility-nav, .search"));e.displayCountdowns();e.initReadMore();e.animateStatCounters();
e.fixMultipleElements();if($('body[class*="error"]').length===0){e.emailNewsletter.signUp.init()}if(window.location.hash.substring(0,10)=="#scrollto-"){jvh.core.goToAnchor(window.location.hash.substring(10));
window.setTimeout(function(){jvh.core.goToAnchor(window.location.hash.substring(10))},2e3)}jvh.core.tracking.autoTrack();
jvh.core.images.lazyLoad();$(document).bind("keydown",function(e){var a=$(".select-replacement.styled-options.active");
if(a.length>0){e.preventDefault();var t=$(".option-replacement li.selected",a);var r=$(".option-replacement li",a);
if(e.keyCode==40){if(t.length==0){r.eq(0).addClass("selected")}else{var o=t.index();if(o+1<r.length){r.removeClass("selected");
r.eq(o+1).addClass("selected")}}}else if(e.keyCode==38){if(t.length>0){var o=t.index();if(o-1>=0){r.removeClass("selected");
r.eq(o-1).addClass("selected")}}}else if(e.keyCode==13){t.click()}}});document.addEventListener("keyup",jvh.core.keyBoardActionForModal);
if(!jvh.core.settings.webquote){jvh.core.websiteFeedback.autoPopup.init()}if(e.settings.firstPage){if(e.settings.loginType===""){jvh.core.tracking.trackNonInteractionEvent("Login state","No","")
}else{jvh.core.tracking.trackNonInteractionEvent("Login state",e.settings.loginType,"")}}jvh.core.openSearchBarMobile();
jvh.core.collapsibleSection.initialise();jvh.core.validation.init($("#villa-owners-sign-up-form"));$("#villa-owners-sign-up-form").submit(function(e){e.preventDefault();
var a=$(this);if(jvh.core.validation.validateForm(a,true)){var t=a.data("event-action");var r=a.data("event-label");
jvh.core.tracking.trackEvent("CMS Villa Owners Sign Up Form",t,r);var o=function(e){var t=$("section.message.error",a);
var r="<p>"+e["error-title"]+"</p>";$("section.message.success",a).removeClass("active");e.errors.forEach(function(e){r+="<p>- "+e+"</p>"
});t.html(r).addClass("active");t.get(0).scrollIntoView({behavior:"smooth",block:"center"})};var n=function(e){var t=$("section.message.success",a);
$("section.message.error",a).addClass("active");t.html("Thank you for your enquiry/comments. You will be contacted as soon as possible if necessary.").addClass("active");
t.insertBefore(a);a.remove();t.get(0).scrollIntoView({behavior:"smooth",block:"center"})};jvh.core.ajaxForm.submitMultiPartForm(a,n,o)
}});var s=$(".hero-warning-message");if(s.length>0){var l=function(){var e;if(jvh.core.viewport=="desktop"){e="calc( 30% + "+s.outerHeight()+"px)"
}else if(jvh.core.viewport=="tablet"){e=290+s.outerHeight()+"px"}else if(jvh.core.viewport=="mobile"){e="50px"
}$("body .extra-search-styles").remove();$("body").append('<style class="extra-search-styles">.show-menu.homepage:not(.homepage-promotion) .search {top: '+e+"</style>")
};$(window).resize(l);l()}e.messages.init();e.dobSelector.init();e.placeholders.init();e.setLastClickedElement();
e.trackLastClickedElement();e.addMutationObserverToPhoneNumber();e.setPhoneNumberAfterPageLoads();e.reassuranceBanner.init();
e.recentlyViewedVillas.init();e.cancellation.init();e.homepage.pods.init()},placeholders:{placeholders:{firstname:"e.g. James",surname:"e.g. Smith",postcode:"e.g. AB1 CD2",property:"e.g. 221B",street:"e.g. Baker Street",locality:"e.g. Marylebone",town:"e.g. London",county:"e.g. Greater London",email:"e.g. james@villas.co.uk",tel:"e.g. 07700 000000",country:"e.g. Spain",region:"e.g. Costa del Sol",address:"Type your address here...",letwith:"e.g. www.myvilla.co.uk",holidayref:"e.g. 0000000"},init:function(e){var a=jvh.core.placeholders;
if(typeof e==="undefined"){e=$("input:not([type=hidden]):not([placeholder]), textarea:not([placeholder])")
}var t=function(e,t){var r=e.attr(t);if(typeof r!=="undefined"){if(r.indexOf(".")>-1){var o=r.split(".");
r=o[o.length-1]}Object.keys(a.placeholders).forEach(function(t){if(r.toLowerCase().indexOf(t)>-1){e.attr("placeholder",a.placeholders[t])
}})}};e.each(function(){var e=$(this);var a=e.attr("type");var r=e.prop("tagName").toLowerCase();if(a==="text"){t(e,"name")
}else if(a==="tel"||a==="email"){t(e,"type")}else if(r==="textarea"&&typeof a==="undefined"){t(e,"id")
}})}},messages:{init:function(){var messageSelector=".new-message.large";$(document).on("click",messageSelector+" > .close-message",function(e){e.preventDefault();
var message=$(e.currentTarget).parent();message.removeClass("active");var tracking=message.attr("data-tracking");
if(typeof tracking!=="undefined"){jvh.core.tracking.trackEvent(jvh.core.trackingType,"Close",tracking);
jvh.core.tracking.trackAdobeEvent(jvh.core.trackingType,tracking,"Close")}var callback=message.attr("data-close-callback");
if(typeof callback!=="undefined"){eval(callback)}e.stopPropagation()});jvh.core.messages.question.init()
},question:{init:function(){var e=$(".new-message.question");e.each(function(){var e=$(this);var a=e.find(".question-container");
var t=e.data("question-id");var r=e.data("question-type");var o=e.data("question-value");var n=e.data("callback");
if(typeof t!=="undefined"&&typeof r!=="undefined"&&typeof o!=="undefined"){if(a.length===0){e.append('<div class="question-container"></div>');
a=e.find(".question-container")}a.addClass("question-"+r);switch(r){case"radio":case"checkbox":jvh.core.messages.question.createRadiosChecks(r,o.split(";"),t,a,n);
break;case"button":jvh.core.messages.question.createButton(o,t,a,n);break;case"dropdown":jvh.core.messages.question.createDropdown(o.split(";"),t,a,n);
break}}})},createRadiosChecks:function(type,items,id,container,callback){var html="";for(var i=0;i<items.length;i++){html+='<label><input type="'+type+'" name="'+id+(i+1)+'"/></div>'+items[i]+"</label>"
}container.html(html);var inputs=container.find('input[type="'+type+'"]');if(type==="radio"){inputs.each(function(){jvh.core.styleRadio($(this))
});inputs.on("click",function(){inputs.not('[name="'+$(this).attr("name")+'"]').prop("checked",false)
})}else{inputs.each(function(){jvh.core.styleCheckbox($(this))})}if(typeof callback!=="undefined"){inputs.on("click",function(e){eval(callback)
})}},createDropdown:function(items,id,container,callback){var html='<select class id="'+id+'" name="'+id+'" data-disable-change-monitoring="true">';
for(var i=0;i<items.length;i++){html+='<option value="'+i+'">'+items[i]+"</option>"}html+="</select>";
container.html(html);var dropdown=container.find("select");dropdown.each(function(){jvh.core.styleSelect($(this))
});if(typeof callback!=="undefined"){dropdown.on("change",function(e){eval(callback)})}},createButton:function(item,id,container,callback){if(typeof callback!=="undefined"){container.html('<a class="cta no-text-transform" id="'+id+'" name="'+id+'">'+item+"</a>");
$("#"+id).on("click",function(e){eval(callback)})}}}},collapsibleSection:{windowWidth:null,expandTime:450,manageClickEvent:function(e,a){var t=e.parent();
if(!t.hasClass("collapsible-section")||t.hasClass("resizing")){return false}t.addClass("resizing");var r=t.hasClass("expand");
var o=r?"collapse":"expand";var n=t.data("tracking")?t.data("tracking"):e.text();if(typeof t.css("max-height")!=="undefined"){jvh.core.collapsibleSection.manageMaxHeight(t)
}t.css("max-height",(r?jvh.core.collapsibleSection.getCollapsedHeight(t):jvh.core.collapsibleSection.getSectionHeight(t))+"px");
t.toggleClass("expand");if(!a){jvh.core.tracking.trackEvent(jvh.core.trackingType,o,n);if(t["0"].getAttribute("data-adobe-tag")!==null){jvh.core.tracking.trackAdobeEvent(t["0"].getAttribute("data-adobe-tag"),n,o)
}else{jvh.core.tracking.trackAdobeEvent(jvh.core.trackingType,n,o)}}setTimeout(function(){t.removeClass("resizing");
if(t.hasClass("expand")){t.css("max-height","none")}},jvh.core.collapsibleSection.expandTime)},getCollapsedHeight:function(e){if(e.hasClass("accom-location")){return $("h2",e).first().innerHeight()+parseInt(e.css("padding-top"))
}else{return $("h2",e).first().innerHeight()}},getSectionHeight:function(e){var a=parseInt(e[0].scrollHeight)+parseInt(e.css("border-top-width"))+parseInt(e.css("border-bottom-width"));
if($("html.eq-ie").length>0){a+=parseInt(e.css("padding-bottom"))}return a},manageMaxHeight:function(e,a){if(e.hasClass("collapsible-section")){var t=e.hasClass("expand");
if(typeof a==="undefined"||t){e.css("max-height",jvh.core.collapsibleSection.getSectionHeight(e))}}},initialise:function(){$("body").on("click",".collapsible-section h2",function(){jvh.core.collapsibleSection.manageClickEvent($(this))
});$(".dynamic-collapsible-section-container").each(function(){const e=new MutationObserver(function(e,a){if($(e[0].addedNodes).filter(function(){return $(this).hasClass("collapsible-section")
}).length>0){jvh.core.collapsibleSection.setUpSections()}});e.observe(this,{attributes:true,childList:true,subtree:true})
});jvh.core.collapsibleSection.setUpSections()},setUpSections:function(){$(".collapsible-section").each(function(){var e=$(this);
if(!e.hasClass("expand")){var a=e.find("h2");e.css("max-height",e.find("h2").outerHeight())}})}},dobSelector:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],init:function(){$(".date-input.dropdowns").each(function(){var e=$(this);
var a=e.find('select[data-type="Year"]');var t=e.find('select[data-type="Month"]');var r=e.find('select[data-type="Day"]');
jvh.core.dobSelector.loadDateParts(a,new Date);jvh.core.dobSelector.loadDateParts(t);jvh.core.dobSelector.loadDateParts(r);
r.on("change.updateDropdowns",function(){jvh.core.dobSelector.updateSelectedDate(e,r,t,a)});a.on("change.updateDropdowns",function(){jvh.core.dobSelector.loadDateParts(r);
jvh.core.dobSelector.updateSelectedDate(e,r,t,a)});t.on("change.updateDropdowns",function(o){jvh.core.dobSelector.loadDateParts(r);
jvh.core.dobSelector.updateSelectedDate(e,r,t,a)})})},dateToString:function(e){return jvh.core.fnLeadZero(e.getMonth()+1)+"/"+jvh.core.fnLeadZero(e.getDate())+"/"+e.getFullYear()
},updateSelectedDate:function(e,a,t,r){var o="";if(t[0].selectedIndex!==0&&a[0].selectedIndex!==0&&r[0].selectedIndex!==0){o=t.val()+"/"+a.val()+"/"+r.val()
}e.attr("data-selected-date",o)},getDefaultValue:function(e,a){if(typeof e!=="undefined"){var t=new Date(e);
switch(a){case"Day":return jvh.core.fnLeadZero(t.getDate());case"Month":return jvh.core.fnLeadZero(t.getMonth()+1);
case"Year":return t.getFullYear()}}return"0"},getDataForDays:function(e,a,t,r){var o=a.closest(".date-input.dropdowns");
var n=o.find('select[data-type="Month"] option:selected').val();var i=o.find('select[data-type="Year"] option:selected').val();
var s=i!=="0"?parseInt(i,10):2004;var l=n!=="0"?parseInt(n,10):1;var c=new Date(s,l,0).getDate();var d=1;
if(typeof t!=="undefined"){if(r){d=t.getDate()+1}else{c=t.getDate()}}var h={value:jvh.core.dobSelector.checkValue(a.val(),e,d,c),end:c,start:d};
return h},getDataForMonths:function(e,a,t,r){const o=a.closest(".date-input.dropdowns");const n=o.find("select[id$='dobDay']");
const i=jvh.core.dobSelector.getDataForDays("0",n,t,r);const s=i.start>i.end;var l=1;var c=12;if(typeof t!=="undefined"){if(r){l=s?t.getMonth()+2:t.getMonth()+1
}else{c=t.getMonth()+1}}var d={value:jvh.core.dobSelector.checkValue(a.val(),e,l,c),end:c,start:l};return d
},getDataForYears:function(e,a,t){var r=t.getFullYear();var o=1900;var n=a.closest(".date-input.dropdowns").data("age-limits");
if(typeof n!=="undefined"){var i=parseInt(n.split(",")[0],10);var s=parseInt(n.split(",")[1],10)+1;o=r-s;
r-=i}var l={value:jvh.core.dobSelector.checkValue(a.val(),e,o,r),end:o,start:r};return l},loadDateParts:function(e,a,t){var r=e.closest(".date-input.dropdowns");
var o=e.data("type");var n=jvh.core.dobSelector.getDefaultValue(r.data("saved-date"),o);var i;switch(o){case"Day":i=jvh.core.dobSelector.getDataForDays(n,e,a,t);
break;case"Month":i=jvh.core.dobSelector.getDataForMonths(n,e,a,t);break;case"Year":i=jvh.core.dobSelector.getDataForYears(n,e,a);
break}var s=jvh.core.dobSelector.createSelectContent(i,o);e.html(s);e.val(i.value);jvh.core.displaySelectedValue(e)
},checkValue:function(e,a,t,r){var o=e===null?a:e;if(o>r){return jvh.core.fnLeadZero(r)}else if(o!=="0"&&o<t){return jvh.core.fnLeadZero(t)
}return o},createSelectContent:function(e,a){var t=jvh.core.dobSelector.createOption(0,a);var r=e.start;
var o=e.end;if(a==="Year"){r*=-1;o*=-1}for(var n=r;n<=o;n++){var i=Math.abs(n);var s=i;if(a==="Month"){s=jvh.core.dobSelector.monthNames[i-1]
}t+=jvh.core.dobSelector.createOption(jvh.core.fnLeadZero(i),s)}return t},createOption:function(e,a){return'<option value="'+e+'">'+a+"</option>"
}},displaySelectedValue:function(e){var a=e.find(":selected");var t=e.parent().find("div");t.html(a.data("display")||a.html());
t.toggleClass("active",e[0].selectedIndex!==0);e.data("currentValue",e.val());jvh.core.manageTetherChange(e)
},openSearchBarMobile:function(){if($(".account-landing, .booking, .agent-landing").length==0){jvhWaitForJs(["searchbar"],function(){if(jvh.core.viewport==="mobile"){jvh.core.waitForTrigger("accomLoaded",typeof accomInfoLoaded,"accomInfoLoaded",function(){var e=false;
try{window.sessionStorage.setItem("jvhtest","1");window.sessionStorage.removeItem("jvhtest");e=true}catch(a){e=false
}})}})}},searchBar:{positionSearchbarPopouts:function(){var e={"search-calendar-active":"#searchbarCalendar","search-destinations-active":".search-destination-container","search-dest-result-active":".search-destination-container","search-pax-active":"#searchbarPax","search-airports-active":"#searchbarAirport"};
const a=$("#searchbar").attr("class");var t="";if(a!==undefined){t=a.split(" ").filter(function(e){return e.indexOf("search-")!==-1
})}var r=e[t];var o=null;const n=$("#searchbarsettings .search-tab.show");if(jvh.core.viewport!=="mobile"&&r){r=$(r);
var i=0;var s=0;var l=$(window).width()-n.width();if(n.is(".search-destinations")||n.is(".search-dest-result")){o=r.position().left+r.outerWidth()-n.outerWidth();
switch(jvh.core.viewport){case"mobile":break;case"tablet":if(jvh.core.breakpoint==="tablet"){const c=$("#searchbar");
i=parseInt(c.css("padding-left"))+parseInt(c.find(".dest-pick").css("padding-left"))}else{i=o}break;case"desktop":i=o;
break}}else if(n.is(".search-calendar")){switch(jvh.core.viewport){case"mobile":break;case"tablet":case"desktop":i=($("#searchbar").outerWidth()-n.outerWidth())/2;
break}}else if(n.is(".search-pax")){o=r.position().left+parseInt(r.css("margin-left"));switch(jvh.core.viewport){case"mobile":break;
case"tablet":i=o;if(jvh.core.breakpoint==="tablet"){i+=r.outerWidth()-n.outerWidth()}break;case"desktop":i=o;
break}}if(i<s){i=s}else if(i>l){i=l}n.css("left",i+"px");n.css("transform","none")}else{n.attr("style","")
}jvh.searchbar.hidePackageDropdown()}},localStorage:{supported:function(){try{window.localStorage.setItem("test","1");
window.localStorage.removeItem("test");jvh.core.localStorageSupported=true}catch(e){jvh.core.localStorageSupported=false
}},set:function(e,a){try{window.localStorage.setItem(e,a)}catch(t){if(jvh.core.localStorage.isLocalStorageFull(t)){jvh.core.localStorageSupported=false;
jvh.core.localStorage.logLocalStorageFull()}else{jvh.core.tracking.trackEvent(jvh.core.trackingType,"Local Storage setItem Error: "+t+" for key "+e+"  | "+a,"Local Storage")
}}},get:function(e){try{return window.localStorage.getItem(e)}catch(a){return null}},remove:function(e){try{window.localStorage.removeItem(e)
}catch(a){return}},isLocalStorageFull:function(e){var a=false;if(e&&e.code){switch(e.code){case 22:a=true;
break;case 1014:if(e.name==="NS_ERROR_DOM_QUOTA_REACHED"){a=true}break}}return a},logLocalStorageFull:function(){var e="";
var a="";var t=0;var r="";var o=0;var n="";var i=0;for(var s=0,l=window.localStorage.length;s<l;++s){var c=window.localStorage.key(s);
var d=window.localStorage.getItem(c);e+=c+" | "+d;if(c.indexOf("villadesc")>=0){o++;if(d.length>i){i=d.length;
n=c}}if(d.length>t){t=d.length;r=c}}a+="Local Storage Full: ";a+="LocalStorage Num Keys | "+window.localStorage.length+" | ";
a+="Local Storage Size (Keys + values) | "+e.length+" | ";a+="Largest Value | Key "+r+" : Value length "+t+" | ";
a+="Num Villa Descriptions | "+o+" | ";a+="Largest Villa Description | Key "+n+" : Value length "+i;jvh.core.tracking.trackEvent(jvh.core.trackingType,a,"Local Storage")
}},loadHashModal:function(){if(window.location.hash){if(window.location.hash.indexOf("brochure")>-1){jvh.core.tracking.trackEvent("Footer","Order Brochure","Brochure Request");
jvh.core.brochure.preSelectedIssues=[];var e=window.location.hash.split("-");for(var a=0;a<e.length;a++){if($.isNumeric(e[a])){jvh.core.brochure.preSelectedIssues.push(e[a])
}}jvh.core.ajaxModal("/ajax/brochure.ajax",jvh.core.brochure.initModal)}else if(window.location.hash.indexOf("account")>-1){var t=function(){document.location.href="/account"
};if($("#sideBar ul > li[data-logged-out]").length){jvh.core.loginSuccessOverride=t;jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm)
}else{jvh.core.reauthenticateUser(null,t,null)}}else if(window.location.hash.indexOf("register")>-1){jvh.core.loginSuccessOverride=function(){document.location.href="/account"
};jvh.core.ajaxModal("/login/sign-up-options.ajax",jvh.core.initLoginForm)}else if(window.location.hash.indexOf("unsubscribe")>-1){jvh.core.ajaxModal("/ajax/unsubscribe.ajax",jvh.core.emailNewsletter.unsubscribe.initModal)
}else if(window.location.hash.indexOf("agent-login")>-1){jvh.core.ajaxModal("/ajax/agents/login",jvh.core.initAgentLogin)
}else if(window.location.hash.indexOf("passenger-login-failed")>-1){jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm)
}else if(window.location.hash.indexOf("verify")>-1){var r=jvh.core.getQueryString("source");var o=jvh.core.getQueryString("client_id");
var n=jvh.core.getQueryString("verification_token");if(o!=null&&n!=null){var i="?clientId="+o;i+="&verificationToken="+n;
if(r!=null){i+="&source="+r}jvh.core.ajaxModal("/login/verify.ajax"+i)}}}},added:false,clickTriggerView:function(e){e.preventDefault();
var a=$(this),t=a.data("view");const r=function(){return jvh.core.initLoginForm(true)};if(t=="menu"){if(!jvh.core.mainMenu.active){jvh.core.mainMenu.showMenu()
}else{jvh.core.mainMenu.closeMenu()}}else if(t=="map"){$(document).trigger("trigger-view-map",[$(this)])
}else if(t=="show-list"){$(document).trigger("trigger-view-showlist",[$(this)])}else if(t=="gallery"){$(document).trigger("trigger-view-gallery",[$(this)])
}else if(t=="filters"){if($(".filter-block").hasClass("active")){$(".filter-block").removeClass("active");
$(this).removeClass("active")}else{$(".filter-block").addClass("active");$(this).addClass("active")}}else if(t=="login-pane"){jvh.core.loginModalEmail=null;
jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm);if(jvh.core.viewport==="mobile"){$("body").removeClass("utility-open")
}}else if(t=="sign-up-options-pane"){jvh.core.loginModalEmail=null;jvh.core.ajaxModal("/login/sign-up-options.ajax",jvh.core.initLoginForm);
if(jvh.core.viewport==="mobile"){$("body").toggleClass("utility-open")}}else if(t=="agent-pane"){jvh.core.loginModalEmail=null;
jvh.core.ajaxModal("/ajax/agents/login",jvh.core.initAgentLogin);jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Travel agent login","Tile CTA");
if(jvh.core.viewport==="mobile"){$("body").toggleClass("utility-open")}}else if(t=="booking-pane"){jvh.core.loginModalEmail=null;
jvh.core.ajaxModal("/login/login.ajax",r);if(jvh.core.viewport==="mobile"){$("body").toggleClass("utility-open")
}}else if(t=="utility"){if($("body").hasClass("utility-open")){jvh.core.tracking.trackEvent("Header","Utility Nav","Close")
}else{jvh.core.tracking.trackEvent("Header","Utility Nav","Open")}$("body").toggleClass("utility-open")
}else if(t=="side-modal"&&jvh.account){jvh.account.sideModal.manageView(t,$(this))}else if(t=="email-unsubscribe"){jvh.core.tracking.trackEvent("Footer","Unsubscribe","Newsletter Signup");
jvh.core.ajaxModal("/ajax/unsubscribe.ajax",jvh.core.emailNewsletter.unsubscribe.initModal)}else if(t=="order-brochure"){jvh.core.tracking.trackEvent("Footer","Order Brochure","Brochure Request");
if(!$(this).attr("data-issue-id")){jvh.core.brochure.preSelectedIssues=[]}else{jvh.core.brochure.preSelectedIssues=[$(this).attr("data-issue-id")]
}jvh.core.ajaxModal("/ajax/brochure.ajax",jvh.core.brochure.initModal)}},domPrefix:"",getDomPrefix:function(){var e=document.createElement("div");
return e.style["webkitTransform"]!==undefined?"-webkit-":""},scroll:function(){menuChanged=jvh.core.mainMenu.toggleMenu();
jvh.core.fixViewportElements();jvh.core.fixMultipleElements();jvh.core.animateStatCounters()},clickBlockClick:function(e,a){e.preventDefault();
target=$(a).find("a").attr("href");catType=$(a).find("a").data("type");catName=$(a).find("a").text();
jvh.core.tracking.trackEvent(target,catType,catName);window.location=target},setHeaderHeight:function(){var e=$(".search");
var a=$(".header");jvh.core.headerHeight=a.outerHeight(true);if(e.css("opacity")>0){jvh.core.headerHeight+=e.outerHeight(true)
}},fixMultipleElements:function(){var e=$(window).scrollTop();var a=$(window).height();var t=e+$(window).height();
var r=e+jvh.core.fixedNav;$(".fix-me").each(function(){var o=false;var n=$(this).offset()["top"];var i=n+$(this).outerHeight(true);
var s=parseInt($(this).parent().css("padding-top").replace("px",""),0);if(jvh.core.viewport==="mobile"){$(this).parent().css("height","auto")
}else if($(this).parent().outerHeight()<$(this).outerHeight()){$(this).parent().css("height",$(this).outerHeight())
}var l=$(this).parent().offset()["top"];var c=l+$(this).parent().outerHeight();o=c<=i;if(e<l){$(this).addClass("top-fixed");
$(this).css("bottom","");$(this).removeClass("going-up")}else if(t>=i){$(this).removeClass("top-fixed");
if($(this).outerHeight(true)>a-jvh.core.fixedNav&&!$(this).hasClass("going-up")){$(this).css("bottom","0px")
}}if($(this).hasClass("bottomed")){if(r<n){$(this).removeClass("bottomed");if($(this).offset()["top"]+$(this).outerHeight(true)>=c){$(this).addClass("bottomed")
}else{$(this).addClass("going-up");$(this).css("bottom","")}}}else if(o){$(this).addClass("bottomed");
$(this).css("bottom","")}})},fixViewportElements:function(){var e=$(window).scrollTop();var a=window.pageYOffset;
var t=$("body");var r=$(window).height();var o=$(".article-image-panel");var n=$(".content-tile-wrapper");
var i=null;var s=false;var l=false;if(t.hasClass("shortlist")){i=$(".shortlist-container")}else if(t.hasClass("search-history")){i=$(".wide-rhs-aside")
}else if(o.is(":visible")){i=o;stickyScroll=$(".sticky-scroll");stickyLarger=stickyScroll.outerHeight(true)>r-jvh.core.fixedNav;
if(stickyLarger&&jvh.core.scrollLastPosition<=a){stickyScroll.addClass("up")}else if(stickyLarger&&jvh.core.scrollLastPosition>a){stickyScroll.removeClass("up")
}}else if(t.hasClass("agent-landing")){i=$(".wide-lhs")}else if(n.is(":visible")){i=n}else if($(".my-holiday-container").length>0){i=$(".my-holiday-container")
}if(i!=null){if(s){triggerFixedElements=i.height()}else{triggerFixedElements=i.height()-r}l=e<=triggerFixedElements+jvh.core.fixedNav;
$(".bottom-lock").toggleClass("fixed",l)}jvh.core.scrollLastPosition=window.pageYOffset},bookingPaneFixing:function(){var e=$(".booking-pane");
if(e.length>0){var a=$(window).scrollTop();var t=$(window).height();var r=e.outerHeight(true);var o=r<=t;
var n;var i=e.offset().top;var s=e.parent();var l=s.outerHeight(false);var c=parseInt(s.offset().top,10);
var d=l+c;var h=parseInt($("footer.secondary").offset().top,10);if(typeof e.data("top-position")!=="undefined"){c=c+parseInt(e.data("top-position"))
}if(l>r+150){if(o){n=a+r>d;var u=a>=c;e.removeClass("fixed-bottom");e.toggleClass("fixed",u&&!n);e.toggleClass("bottom",n)
}else{n=a+t>d;var v=a<=c;var f=a>c&&a+t>=r+i;e.toggleClass("fixed-bottom",!v&&!n);e.toggleClass("bottom",n);
e.removeClass("fixed")}}}},delayedScroll:function(){if(jvh.core.trackingEnabled){var e=jvh.core.whichInView("div.content-tile","tracked");
if(e!==null&&$(e).is(":visible")&&$(e).hasClass("tracked")==false){jvh.core.tracking.trackEvent(jvh.core.trackingType,$(e).data("track-name")+" tile in view","Tile visibility");
$(e).addClass("tracked")}}jvh.core.images.lazyLoad();jvh.core.contentBlockCarousel.init();var a=$("body");
if(a.hasClass("resort")||a.hasClass("holiday-resort")){jvh.areas.resortInView()}},tracking:{trackEventDelayTimers:{},hoverCheck:"",hoverItem:null,disableTracking:false,autoTrack:function(e){if(typeof e==="undefined"){target=$(".auto-track")
}else{target=e}target.each(function(){var e=$(this);var a=e.is("a");if(e.data("track-action")&&e.data("track-label")){if(a||e.is(":button")||e.hasClass("click-block")||e.hasClass("click-able")){e.click(function(t){t.preventDefault();
var r=e.val();var o=e.data("track-action");var n=e.data("track-label");if(typeof o!=="undefined"&&o!=null&&o.length>0&&r!=null){o=o
}else if(a){o=e.text();if(r!=null&&r!=""){o+=r}if(o==""){o=e.attr("href")}}if(typeof n==="undefined"||n==null||n==""){n=e.attr("data-track-label")
}var i;if(a){i=e.attr("href")}else if(e.data("track-outbound")){i=e.data("link")}if(typeof i!=="undefined"){jvh.core.tracking.trackOutbound(i,jvh.core.trackingType,o,n,null,e.attr("target")=="_blank")
}else{jvh.core.tracking.trackEvent(jvh.core.trackingType,o,n,null)}return true})}else{e.change(function(){var a=e.val();
if(this.type=="checkbox"){a=this.checked}jvh.core.tracking.trackEvent(jvh.core.trackingType,a,e.data("track-label"),null);
return true})}}var t=e.find("a, button:not(.scroller), input, select, .click-block, .click-able");var r=e.hasClass("track-nested-list");
t.each(function(){var a=$(this);var t=a.is("a");if(!a.hasClass("disable-auto-tracking")&&(t||a.is(":button")||a.hasClass("click-block")||a.hasClass("click-able"))){a.click(function(o){o.preventDefault();
var n=a.val();var i=a.closest("[data-track-action]").data("track-action");var s=a.closest("[data-track-label]").data("track-label");
if(typeof i!=="undefined"&&i!=null&&i.length>0&&n!=null){i=i+n}else if(t){i=a.text();if(n!=null&&n!=""){i+=n
}if(i==""){i=a.attr("href")}}if(typeof s==="undefined"||s==null||s==""){s=e.closest("[data-track-label]").attr("data-track-label")
}var l;if(t&&typeof a.data("track-inpage")=="undefined"){l=a.attr("href")}else if(a.data("track-outbound")){l=a.closest("[data-link]").data("link")
}if(r){a.parentsUntil(e,"ul").each(function(){if($(this).parent().children("a").length){i=$(this).parent().children("a").text()+" - "+i
}})}var c=false;const d=a.parents(".content-block-carousel");if(d&&d.hasClass("disable-auto-tracking")){c=true
}var h=e.data("track-type")||jvh.core.trackingType;if(typeof l!=="undefined"&&(!r||a.siblings("ul").find("a").length===0||a.parent().hasClass("follow"))){jvh.core.tracking.trackOutbound(l,h,i,s,null,a.attr("target")=="_blank")
}else{jvh.core.tracking.trackEvent(h,i,s,null)}return true})}else{a.change(function(){var t=a.val();if(this.type=="checkbox"){t=this.checked
}var r=e.data("track-type")||jvh.core.trackingType;jvh.core.tracking.trackEvent(r,t,a.closest("[data-track-label]").data("track-label"),null);
return true})}})})},hoverTrack:function(){clearTimeout(jvh.core.tracking.hoverCheck);jvh.core.tracking.hoverCheck=setTimeout(function(){hoverItem=jvh.core.tracking.hoverItem;
if(!hoverItem.hasClass("tracked")){jvh.core.tracking.trackEvent(jvh.core.trackingType,hoverItem.data("track-action")+" Hover","Tile CTA",null);
hoverItem.addClass("tracked")}},1e3)},trackOutbound:function(e,a,t,r,o,n){var i="";if(typeof e==="string"){i=e
}else if(typeof e==="function"){e()}else{i=e.href}jvh.core.tracking.trackEvent(a,t,r,o);if(typeof n!=="undefined"&&n){setTimeout(function(){openWindow=window.open(i)
},200)}else{setTimeout('document.location = "'+i+'"',200)}return false},trackTab:function(e,a){jvh.core.tracking.trackEvent("Page Tabs",e,a)
},trackGa:function(e,a,t,r,o,n){if(typeof ga!="undefined"&&!jvh.core.tracking.disableTracking){if(!o){o=0
}if(n){ga(function(){ga.getAll().forEach(function(n){ga(n.get("name")+".send",e,a,t,r,o,{nonInteraction:1})
})})}else{ga(function(){ga.getAll().forEach(function(n){ga(n.get("name")+".send",e,a,t,r,o)})})}}},manageTrackLabel:function(e){if(typeof e==="object"){try{return JSON.stringify(e)
}catch(a){return""}}return e},trackEvent:function(e,a,t,r){if(!jvh.core.tracking.disableTracking){var o=jvh.core.tracking.manageTrackLabel(t);
console.log("GA: "+e+" : "+a+" : "+o+" : "+r);jvh.core.tracking.trackGa("event",e,a,o,r,true)}},trackNonInteractionEvent:function(e,a,t,r){var o=jvh.core.tracking.manageTrackLabel(t);
console.log("GA non-interaction: "+e+" : "+a+" : "+o+" : "+r);jvh.core.tracking.trackGa("event",e,a,o,r,true)
},trackGoal:function(e){console.log("GA-GOAL: "+e);ga(function(){ga.getAll().forEach(function(e){ga(e.get("name")+".require","displayfeatures")
})});jvh.core.tracking.trackPageView(e)},trackPageView:function(e){console.log("GA-VIRTUAL-PAGEVIEW: "+e);
jvh.core.tracking.trackGa("pageview",e)},trackEventDelay:function(e,a,t,r,o){if(o==0){jvh.core.tracking.trackEvent(e,a,t,r);
jvh.core.tracking.trackEventDelayTimers[e+t]=null;return}if(typeof jvh.core.tracking.trackEventDelayTimers[e+t]!==undefined&&jvh.core.tracking.trackEventDelayTimers[e+t]!=null){window.clearTimeout(jvh.core.tracking.trackEventDelayTimers[e+t])
}var n=e;var i=a;var s=t;var l=r;jvh.core.tracking.trackEventDelayTimers[e+t]=window.setTimeout(function(){jvh.core.tracking.trackEventDelay(n,i,s,l,0)
},o)},trackSocial:function(e,a,t){jvh.core.tracking.trackGa("social",e,a,t)},trackBanners:function(e){$("#galleryWrapper a").click({locationName:e},this.trackBanner)
},trackMap:function(e,a){jvh.core.tracking.trackEvent($("body").data("page"),"Map item clicked: "+e,a)
},trackBanner:function(e){var a=$(this);var t=0;var r=a.closest("div[id^='overlay']");if(r.length>0){t=parseFloat(r.attr("id").substr(7))+1
}else{var o=a.find("img");if(o.length>0){for(var n=0;n<galleryDesktopImages.length;n++){if(galleryDesktopImages[n].srcLarge==o.attr("src")){t=n+1;
break}}if(t==0){for(var n=0;n<galleryMobileImages.length;n++){if(galleryMobileImages[n].srcSmall==o.attr("src")){t=n+1;
break}}}}}if(t>0){jvh.core.tracking.trackEvent("Banner "+e.data.locationName,"Banner "+t,a.attr("href"))
}},adobeAutoTrack:function(e,a){const t=e.querySelectorAll(".adobe-auto-track");[].slice.call(t).forEach(function(e){e.addEventListener("click",function(){jvh.core.tracking.trackAdobeElement(e,a)
})})},adobeLazyTrack:function(e,a){const t={attributes:true,attributeFilter:["addedNodes"],childList:true,subtree:true};
const r=new MutationObserver(function(e,t){e.forEach(function(e){[].slice.call(e.addedNodes).filter(function(e){if(e.classList){return e.classList.contains("adobe-auto-track")||e.classList.contains("owl-lazy")
}}).forEach(function(e){e.addEventListener("click",function(){jvh.core.tracking.trackAdobeElement(e,a)
})})})});r.observe(e,t)},trackAdobeElement:function(e,a){const t=e.dataset.trackName;const r=e.dataset.trackAction;
const o=a&&a!==""?a:e.dataset.trackLabel;jvh.core.tracking.trackAdobeEvent(o,t,r)},trackAdobeEvent:function(e,a,t){if(!jvh.core.tracking.disableTracking){if(typeof a!=="undefined"&&typeof t!=="undefined"){console.log("Adobe: "+e+" : "+a+" : "+t);
console.log("dataLayerPush",{event:a,label:e,action:t});digitalData.event=[{eventInfo:{eventName:a,eventAction:t}}];
dataLayerPush({event:a,label:e,action:t})}else{console.log("Adobe: "+e)}if(typeof _satellite==="object"){_satellite.track(e)
}}},convertVillas2InfoToList:function(e){var a={};var t=[];switch(e.accomTypeId){case 2:t.push("apartment");
break;case 3:t.push("townhouse");break;default:t.push("villa");break}if(e.filters.babyAndToddlerFriendly){t.push("baby-and-toddler-friendly")
}if(e.concierge){t.push("concierge-service")}if(e.resort.type==2){t.push("holiday-resorts")}else{t.push("no-holiday-resorts")
}a.accommodation=t.join(",");var r=[];if(e.ac){r.push("aircon")}if(e.filters.green){r.push("green-award")
}if(e.filters.heating){r.push("heating")}if(e.wifi){r.push("wifi")}if(e.filters.bbq==1){r.push("builtin-barbecue")
}else if(e.filters.bbq==2){r.push("portable-barbecue")}if(e.filters.singleStorey){r.push("single-storey-villa")
}if(e.filters.detached){r.push("detached-villa")}if(e.filters.views){r.push("great-views")}a.features=r.join(",");
var o=[];if(e.privatePool){o.push("private-pool")}if(e.sharedPool){o.push("shared-pool")}if(e.heatedPool){o.push("heated-pool")
}if(e.filters.poolSteps){o.push("pool-steps")}if(e.filters.poolGated){o.push("pool-gated")}if(e.filters.poolShape==5){o.push("pool-infinity")
}if(e.luxFilters[1]+e.luxFilters[2]>=1){o.push("hot-tub")}a.pool=o.join(",");var n=[];if(e.filters.location==1){n.push("rural")
}else if(e.filters.location==4){n.push("central-in-resort")}if(e.filters.seclusion){n.push("secluded")
}switch(e.car){case 1:n.push("car-optional");break;case 2:n.push("car-advised");break;case 3:n.push("car-essential");
break}a.location=n.join(",");var i=[];if(e.filters.gamesCon){i.push("games-console")}if(e.filters.dvd){i.push("dvd-player")
}if(e.filters.ipod){i.push("bluetooth-speaker-ipod-dock")}if(e.filters.poolTable){i.push("pool-table")
}if(e.filters.tableTennis){i.push("table-tennis")}if(e.filters.kidsClub){i.push("kids-club")}if(e.filters.playArea){i.push("childrens-play-area")
}if(e.filters.golf){i.push("golf")}if(e.filters.gym){i.push("gym-fitness")}if(e.luxFilters[0]){i.push("tennis")
}if(e.resort.features&64){i.push("spabeauty-treatments")}if(e.resort.features&8192){i.push("cycle-hire")
}if(e.resort.features&32){i.push("football-academy")}a.entertainment=i.join(",");return a}},populateVillaData:function(){$(".populate-villa").each(function(e,a){var t=$(a);
if(t.data("villa")!="0"){var r=parseInt(t.data("villa"));var o=villas2[r];if(!o){t.hide()}else{t.find(".villa-name").html(o.name);
t.find(".resort-name").html(o.resort.name);t.find(".region-name").html(o.resort.region.name);t.find(".accom-type").html(jvh.core.accomTypes[o.accomTypeId])
}}})},formFields:{monitorChanges:false,selectFields:new Array,checkboxFields:new Array,radioFields:new Array},initFormFields:function(e){e=e.find("select, input, textarea");
e.each(function(e,a){var t=$(a);if(!t.hasClass("noautostyle")&&!t.hasClass("form-styled")&&!t.closest("form").hasClass("noautostyle")){if(!t.is("input[type=hidden]")){t.addClass("form-styled")
}if(t.is("select")){jvh.core.styleSelect(t)}else if(t.is("input[type=text]")){jvh.core.styleInput(t)}else if(t.is("input[type=tel]")){jvh.core.styleInput(t)
}else if(t.is("input[type=number]")){jvh.core.styleInput(t)}else if(t.is("input[type=email]")){jvh.core.styleInput(t)
}else if(t.is("input[type=radio]")){jvh.core.styleRadio(t)}else if(t.is("input[type=checkbox]")){jvh.core.styleCheckbox(t)
}else if(t.is("input[type=password]")){jvh.core.stylePasswordField(t)}else if(t.is("input[type=file]")&&!$("html").hasClass("eq-ie")){jvh.core.styleUploadFields(t,name)
}else if(t.is("textarea")){jvh.core.styleTextArea(t)}jvh.core.manageTether(t)}});if(!jvh.core.formFields.monitorChanges){jvh.core.formFields.monitorChanges=true;
setInterval(function(){jvh.core.formFields.selectFields.forEach(function(e){if(!e.is(":focus")&&e.val()!=e.data("currentValue")&&!e.data("disable-change-monitoring")){e.data("currentValue",e.val());
e.data("autoset","true");e.change();e.data("autoset","false")}});jvh.core.formFields.checkboxFields.forEach(function(e){if(!e.is(":focus")&&e.data("currentChecked")!=e.is(":checked")){e.data("currentChecked",e.is(":checked"));
e.change()}});jvh.core.formFields.radioFields.forEach(function(e){if(e.data("currentChecked")!=e.is(":checked")){e.data("currentChecked",e.is(":checked"));
e.change()}if(e.parent().hasClass("selected")!=e.is(":checked")){$(e).parent().toggleClass("selected",e.is(":checked"))
}})},200)}$("form.quick-search input").focusin(function(){$(this).closest("form.quick-search").addClass("focus")
}).focusout(function(){$(this).closest("form.quick-search").removeClass("focus")});jvh.core.validation.init($("form#holidaySearch"));
$("form#holidaySearch button[type=submit]").click(function(e){e.preventDefault();if(jvh.core.validation.validateForm($("form#holidaySearch"),true)){$("form#holidaySearch").submit()
}});jvh.core.dateFieldManagement()},manageTetherChange:function(e){if(e.data("tether")){var a=e.val();
if(e.data("tether-value")){if(e.data("tether-value")=="text"){a=e.find("option[value="+a+"]").html()}else{a=e.data("tether-value").replace("$",a)
}}if(e.data("tether-format")=="LEAD-ZERO"){if(a&&a.length==1){a="0"+a}}e.closest("form").find(e.data("tether")).html(a)
}},manageTether:function(e){if(e.data("tether")){var a=e.closest("form").find(e.data("tether"));var t=a.closest(".control, .control-nostyle");
t.click(function(){if(jvh.core.viewport=="mobile"){jvh.searchbar.fnMobileSelectBox(e)}});e.parent().addClass("mobile-tethered");
jvh.core.manageTetherChange(e)}},styleSelect:function(e){if(!e.attr("size")||e.attr("size")==1){var a=e.attr("class");
e.wrap('<div class="select-replacement '+a+'">');var t=e.find(":selected");var r=t.data("display")||t.html();
if(e.data("is-active")||/^(Please )?Select/i.test(r)===false){activeclass="active"}else{activeclass=""
}e.parent().prepend('<div class="'+activeclass+'">'+r+"</div>");e[0].fnChange=function(){jvh.core.displaySelectedValue(e)
};e.parent().on("click",function(a){var t=$(this);var r=t.hasClass("active");$(".select-replacement").removeClass("active");
t.toggleClass("active",!r);e[0].fnChange});if(e.hasClass("styled-options")){var o='<ul class="option-replacement">';
var n=$("option",e);for(var i=0;i<n.length;i++){o+='<li data-value="'+n.eq(i).attr("value")+'">'+n.eq(i).text()+"</li>"
}o+="</ul>";e.parent().append(o);e.parent().addClass("option-replaced");$(".option-replacement li",e.parent()).on("click",function(a){var t=$(this);
t.parent("ul").find("li").removeClass("selected");t.addClass("selected");e[0].fnChange()});e[0].fnChange=function(){var a=$(".option-replacement li.selected",e.parent());
var t=a.data("value");var r=a.text();var o=$("option",e);e.parent().find("div").html(r).toggleClass("active",e[0].selectedIndex!==0);
e.data("currentValue",e.val());var n=$(this).parent().find("select");$('option[value="'+t+'"]',n).prop("selected",true);
jvh.core.manageTetherChange(e)}}if(e.hasClass("include-plus-minus")){var s=function(e){if(e.length){l(e,e[0].selectedIndex==0,".select-minus");
l(e,e[0].selectedIndex==e[0].options.length-1||e[0].options[e[0].selectedIndex+1].disabled,".select-plus")
}};var l=function(e,a,t){if(a){e.parent().find(t).attr("disabled","disabled").addClass("disable")}else{e.parent().find(t).removeAttr("disabled").removeClass("disable")
}};e[0].fnChange=function(a){r=e.find(":selected").html();e.parent().find("div").html(r).addClass("active");
e.data("currentValue",e.val());var t=$(this).data("autoset");s(e);if(typeof a==="string"){var o=e.attr("id");
if(o&&o.length>0&&$("#"+o+"Caption")){$("#"+o+"Caption").html(jvh.core.padout($(e).val()))}if(typeof t==="undefined"||t=="false"){var n=$(this).data("track-category")||"select-plus-minus";
if(this.skipGA){this.skipGA=false;return}if(a=="plus"||a=="minus"){this.skipGA=true}jvh.core.tracking.trackEvent(n,"selectplusminus-"+a,this.id,this.options[this.selectedIndex].value)
}}jvh.core.manageTetherChange(e)};e.parent().addClass("include-plus-minus");e.parent().append('<button class="select-minus" value="-" type="button"><span>-</span></button><button class="select-plus" value="+" type="button"><span>+</span></button>');
e.parent().find("button[type=button]").click(function(e){var a=$(this).parent().find("select");var t=a[0].selectedIndex;
var r="";if($(this).hasClass("select-plus")){t++;r="plus"}else{t--;r="minus"}if(t<0)t=0;if(t>=a[0].options.length)t=a[0].options.length-1;
if(a[0].options[t].disabled&&$(this).hasClass("select-plus")){t--}a[0].selectedIndex=t;a[0].fnChange(r);
a.change();return false});s(e)}jvh.core.bindFocusBlur(e);e.bind({change:function(){e[0].fnChange("select")
}});e.keydown(function(a){if(a.keyCode===38||a.keyCode===40){var t=e.find(":selected").index();if(a.keyCode===38&&t>0){t--
}else if(a.keyCode===40&&t<e.find("option").length-1){t++}var r=e.find("option").eq(t).html();e.parent().find("div").html(r)
}});jvh.core.applyOpacity(e);if(e.hasClass("styled-options")){e.find("option").css({display:"none"})}e.data("currentValue",e.val());
jvh.core.formFields.selectFields.push(e)}else{e.addClass("multi-select")}},applyOpacity:function(e){e.css({opacity:"0",filter:"alpha(opacity=0)"})
},bindFocusBlur:function(e,a){e.bind({focus:function(){if(!a||!a.hasClass("disable")){e.parent().addClass("focus")
}},blur:function(){e.parent().removeClass("focus")}})},styleInput:function(e){e.wrap('<div class="input-replacement">');
jvh.core.bindFocusBlur(e)},styleRadio:function(e){e.wrap('<div class="radio-replacement">');if(e.is(":checked")||e[0].defaultChecked){e.parent().addClass("selected")
}e.bind({change:function(){var a=e.closest(".radio-group-container");var t=a.find(".radio-replacement");
t.removeClass("selected");t.each(function(){$(this).find("input[type=radio]").each(function(){if($(this).is(":checked")){$(this).parent().addClass("selected")
}else{$(this).parent().removeClass("selected")}})})}});jvh.core.bindFocusBlur(e);jvh.core.applyOpacity(e);
e.data("currentChecked",e.is(":checked"));jvh.core.formFields.radioFields.push(e)},styleCheckbox:function(e){e.wrap('<div class="check-replacement">');
var a=e.parent().parent();if(e.is(":checked")){e.parent().addClass("selected");e.parent().parent().addClass("selected")
}var t=t=function(){var t=$(this);t.data("currentChecked",t.is(":checked"));if(!jvh.core.settings.webquote&&t.is(":checked")&&!a.hasClass("disable")||jvh.core.settings.webquote&&t.is(":checked")){e.parent().addClass("selected");
a.addClass("selected")}else{e.parent().removeClass("selected");a.removeClass("selected");t.prop("checked",false)
}};e[0].fnManageCheckbox=t;e.bind({change:t});jvh.core.bindFocusBlur(e,a);jvh.core.applyOpacity(e);e.data("currentChecked",e.is(":checked"));
jvh.core.formFields.checkboxFields.push(e)},stylePasswordField:function(e){e.wrap('<div class="input-replacement password">');
var a=$("<a />",{"class":"reveal-password",html:"Show",click:function(a){a.preventDefault();if($(e).attr("type")=="text"){$(e).prop("type","password");
$(e).next(".reveal-password").html("Show")}else{$(e).prop("type","text");$(e).next(".reveal-password").html("Hide")
}}});if(!$(e).hasClass("password-alt")){a.insertAfter(e)}jvh.core.bindFocusBlur(e)},styleUploadFields:function(e){var a=e.prop("name");
e.wrap('<div class="upload-container">');var t=e.data("placeholder");if(typeof t=="undefined"){t="Upload Photo"
}$('<div class="upload-replacement"><input type="text" tabIndex="-1" value="'+t+'"><a href="#" class="cta ghost salmon file">Choose file</a></div>').insertAfter(e);
$(".upload-replacement").click(function(e){e.preventDefault();$(this).addClass("focus");$(this).parent().find('input[name="'+a+'"]').click()
});e.bind({change:function(){var a=e.val();e.parent().find(".upload-replacement").removeClass("focus");
e.parent().find(".upload-replacement input[type=text]").val(a)},focus:function(){e.parent().find(".upload-replacement").addClass("focus");
$(this).parent().find('input[name="'+a+'"]').click()}});jvh.core.bindFocusBlur(e.parent().find(".upload-replacement input[type=text]"));
jvh.core.applyOpacity(e)},styleTextArea:function(e){e.wrap('<div class="textarea-replacement">');jvh.core.bindFocusBlur(e)
},removeFocus:function(){$(".focus").removeClass("focus")},dateFieldManagement:function(){var e=function(e,a){return e.parents(".date-input").find("input[placeholder="+a+"]")
};$(".date-input input:not(.date-managed)").addClass("date-managed").focus(function(e){this.justFocused=true
}).keyup(function(a){if(!this.placeholder)return true;if(a.keyCode==8){if(this.value.length==0){if(this.okBack){this.okBack=false;
var t=this.placeholder;if(t=="YYYY"){e($(this),"MM").focus().select()}else if(t=="MM"){e($(this),"DD").focus().select()
}else if(t=="HR"){e($(this),"MIN").focus().select()}}else{this.okBack=true}}else{this.okBack=false}}else{this.okBack=false
}}).keypress(function(a){var t=a.charCode;var r=this.placeholder;if(!r)return true;var o=String.fromCharCode(t);
var n=null;var i=false;var s=false;if(this.justFocused){this.justFocused=false;return true}if(o=="/"||o=="."||o=="-"||o==" "||o==":"){s=true;
i=true}else if(t>=48&&t<58&&r!="YYYY"){if(this.value.length==2){s=true;i=true;n=o}}if(i){var l=null;if(r=="DD"){l=e($(this),"MM")
}else if(r=="MM"){l=e($(this),"YYYY")}else if(r=="HR"){l=e($(this),"MIN")}if(l){if(n!=null){l.val(n).focus()
}else{l.focus().select()}}}return!s})},ajaxForm:{minSaveTime:1500,init:function(e){jvh.core.ajaxForm.assignOriginalFormValues(e);
e.each(function(e,a){$("input",a).keyup(function(){jvh.core.ajaxForm.inputChangedAction(a)});$("input, select",a).change(function(){jvh.core.ajaxForm.inputChangedAction(a)
});$(a).find(".save-changes").each(function(e,a){$(a).data("default-text",$(a).clone().children().remove().end().text())
})})},inputChangedAction:function(e){var a=$(e).find(".save-changes");var t=jvh.core.ajaxForm.hasChanged(e);
$(a).each(function(e,a){if(!$(a).hasClass("in-progress")){if(!$(a).hasClass("success")){$(a).prop("disabled",!t)
}else if(t){$(a).removeClass("success");$(a).prop("disabled",false)}jvh.core.ajaxForm.setButtonText($(a),$(a).data("default-text"))
}})},assignOriginalFormValues:function(e){var a=e.find("select, input, textarea").not("input[type=submit], input[type=reset], input[type=button]");
a.each(function(e,a){var t=$(a);var r=t.is("input[type=checkbox]")||t.is("input[type=radio]")?t.is(":checked"):t.val();
t.data("original-value",r)})},hasChanged:function(e){var a=false;var t=$(e).find("select, input, textarea").not("input[type=submit], input[type=reset], input[type=button]");
t.each(function(e,t){var r=$(t);var o=r.is("input[type=checkbox]")||r.is("input[type=radio]")?r.is(":checked"):r.val();
if(r.data("original-value")!=o){a=true}});return a},submitForm:function(e,a,t){var r=$(".save-changes",$(e));
r.each(function(){$(this).addClass("in-progress");$(this).prop("disabled",true);var e;if($(this).attr("data-wait-text")){e=$(this).attr("data-wait-text")
}else{e="Saving..."}jvh.core.ajaxForm.setButtonText($(this),e)});jvh.core.ajaxForm.assignOriginalFormValues($(e));
var o=(new Date).getTime();$.ajax({type:"POST",url:e.attr("action"),data:e.serialize(),cache:false,success:function(n){if(typeof n.success==="undefined"||n.success){applyButton=function(){jvh.core.ajaxForm.manageSavedButtonState(true,r,e);
if(a){a(n)}}}else{applyButton=function(){jvh.core.ajaxForm.manageSavedButtonState(false,r,e);if(t){t(n)
}}}var i=(new Date).getTime()-o;if(i<jvh.core.ajaxForm.minSaveTime){setTimeout(applyButton,jvh.core.ajaxForm.minSaveTime-i)
}else{applyButton()}},error:function(a,o,n){console.log(a);jvh.core.ajaxForm.manageSavedButtonState(false,r,e);
if(t){t(a)}}})},submitMultiPartForm:function(e,a,t){var r=$(".save-changes",$(e));r.each(function(){$(this).addClass("in-progress");
$(this).prop("disabled",true);var e;if($(this).attr("data-wait-text")){e=$(this).attr("data-wait-text")
}else{e="Saving..."}jvh.core.ajaxForm.setButtonText($(this),e)});jvh.core.ajaxForm.assignOriginalFormValues($(e));
var o=(new Date).getTime();$.ajax({type:"POST",url:e.attr("data-action"),data:new FormData(e[0]),enctype:"multipart/form-data",processData:false,contentType:false,cache:false,success:function(n){if(typeof n.success==="undefined"||n.success){applyButton=function(){jvh.core.ajaxForm.manageSavedButtonState(true,r,e);
if(a){a(n)}}}else{applyButton=function(){jvh.core.ajaxForm.manageSavedButtonState(false,r,e);if(t){t(n)
}}}var i=(new Date).getTime()-o;if(i<jvh.core.ajaxForm.minSaveTime){setTimeout(applyButton,jvh.core.ajaxForm.minSaveTime-i)
}else{applyButton()}},error:function(a,o,n){console.log(a);jvh.core.ajaxForm.manageSavedButtonState(false,r,e);
if(t){t(a)}}})},manageSavedButtonState:function(e,a,t){if(e){a.addClass("success").removeClass("in-progress");
a.each(function(e,a){if($(a).attr("data-success-message")){jvh.core.ajaxForm.setButtonText($(a),$(a).data("success-message"))
}if(jvh.core.ajaxForm.hasChanged(t)){setTimeout(function(){jvh.core.ajaxForm.inputChangedAction(t)},jvh.core.ajaxForm.minSaveTime)
}})}else{a.prop("disabled",false).removeClass("in-progress");a.each(function(e,a){jvh.core.ajaxForm.setButtonText($(a),$(a).data("default-text"))
})}},setButtonText:function(e,a){var t=$(e).children();$(e).text(a).append(t?t:"")}},addSwipe:function(e,a,t,r,o){var n=false,i=false,s=false,l=false,c=null,d=null,h=false,u=null,v=null,f=false,g=false;
var p=false;addButtons=false;if(o.up)n=true;if(o.down)i=true;if(o.left)s=true;if(o.right)l=true;if(o.snap)c=o.snap;
if(o.snapAmt)d=o.snapAmt;if(o.wizz)h=o.wizz;if(o.maxScroll){u=o.maxScroll;v=o.maxScroll}if(o.maxScroll2)v=o.maxScroll;
if(o.pixelMode)f=true;if(o.contain)p=true;if(o.addButtons)addButtons=true;if(o.mobileOff)g=true;if(typeof e.swipeSettings==="undefined"){if(e.length==0)return;
e[0].refresh=function(){e[0].sliderSlide(e,0)};if(addButtons){e.parent().append('<button class="prev">prev</button><button class="next">next</button>');
e.parent().find("button.prev").hide();if(e.parent().width()>=e.width()){e.parent().find("button.next").hide()
}e.parent().find("button").click(function(a){var t=e.parent().width();var r=$(e.children()[0]).width();
e.addClass("transition");if($(this).hasClass("next")){if(r>t/2){e[0].currentLeft=e[0].currentLeft-r}else{e[0].currentLeft=e[0].currentLeft-(t-r)
}e[0].sliderSlide(e,-1)}else{if(r>t/2){e[0].currentLeft=e[0].currentLeft+r}else{e[0].currentLeft=e[0].currentLeft+(t-r)
}e[0].sliderSlide(e,1)}})}e[0].currentLeft=0;e.swipeSettings={direction:"n",up:n,down:i,left:s,right:l,startfn:a,endfn:t,fnabort:r,snap:c,snapAmt:d,wizz:h,maxScroll1:u,maxScroll2:v,pixelMode:f,contain:p,mobileOff:g};
e.bind("touchstart",function(a){if(jvh.core.viewport=="mobile"&&e.swipeSettings.mobileOff){return}var t=a.originalEvent.changedTouches[0];
if(typeof e[0].currentLeft==="undefined"){e[0].currentLeft=0}var r=e[0].currentLeft;var o=e[0].currentTop;
e.swipeVar={clientX:t.clientX,clientY:t.clientY,swiping:false,currentLeft:r,currentTop:o,starttime:new Date};
e.removeClass("transition")});e.bind("touchmove",function(a){if(jvh.core.viewport=="mobile"&&e.swipeSettings.mobileOff){return
}var t=a.originalEvent.changedTouches[0];var r=e.swipeSettings;if(!e.swipeVar.swiping){var o=Math.abs(e.swipeVar.clientX-t.clientX);
var n=Math.abs(e.swipeVar.clientY-t.clientY);if(o<10&&n<10){return}if(o>n/2&&(r.left||r.right)||o>n/2&&(r.up||r.down)){a.preventDefault()
}if(r.left&&e.swipeVar.clientX>t.clientX+20&&o>n/2){e.swipeVar.swiping=true;r.direction={axis:"x",d:-1,scroll:r.maxScroll1}
}if(r.right&&e.swipeVar.clientX<t.clientX-20&&o>n/2){e.swipeVar.swiping=true;r.direction={axis:"x",d:1,scroll:r.maxScroll2}
}if(r.up&&e.swipeVar.clientY>t.clientY+20&&n>o/2){e.swipeVar.swiping=true;r.direction={axis:"y",d:-1}
}if(r.down&&e.swipeVar.clientY<t.clientY-20&&n>o/2){e.swipeVar.swiping=true;r.direction={axis:"y",d:1}
}if(e.swipeVar.swiping&&r.startfn)r.startfn(r.direction.d,e)}if(e.swipeVar.swiping){a.preventDefault();
if(r.direction.axis=="x"){var i=e.swipeVar.currentLeft-(e.swipeVar.clientX-t.clientX);if(r.maxScroll1&&i>e.swipeVar.currentLeft+Math.abs(r.maxScroll2)){i=e.swipeVar.currentLeft+Math.abs(r.maxScroll1)
}else if(r.maxScroll1&&i<e.swipeVar.currentLeft-Math.abs(r.maxScroll1)){i=e.swipeVar.currentLeft-Math.abs(r.maxScroll2)
}jvh.core.setTranslateXYStyle(e,i+"px",0);e[0].currentLeft=i;if(r.direction.d*(e.swipeVar.clientX-t.clientX)>0){e.swipeVar.swiping=false;
if(r.fnabort!=null)r.fnabort(e.swipeSettings.direction.d,e)}}if(r.direction.axis=="y"){e[0].currentTop=e.swipeVar.currentTop-(e.swipeVar.clientY-t.clientY);
jvh.core.setTranslateXYStyle(e,0,e[0].currentTop+"px");if(r.direction.d*(e.swipeVar.clientY-t.clientY)>0){e.swipeVar.swiping=false;
if(r.fnabort!=null)r.fnabort(e.swipeSettings.direction.d,e)}}}});e[0].sliderSlide=function(e,a){var t=e.swipeSettings;
var r=parseInt(e.css("width").replace("px",""));if(t.maxScroll1){var o=t.direction.scroll*a;var n=r*a;
if(r>Math.abs(e.swipeVar.currentLeft+o)){n=e.swipeVar.currentLeft+o}}else{n=r}if(t.contain){if(e[0].currentLeft>=0){e[0].currentLeft=0
}else if(e[0].currentLeft<0-(e.width()-e.parent().width())&&(!t.contain||t.snap)){e[0].currentLeft=0-(e.width()-e.parent().width())
}if(e[0].currentLeft>=0){e.parent().find("button.prev").hide()}else{e.parent().find("button.prev").show()
}if(e[0].currentLeft<=0-(e.width()-e.parent().width())){e.parent().find("button.next").hide()}else{e.parent().find("button.next").show()
}}var i=0;if(t.snap){var s=1;if(t.snapAmt){s=t.snapAmt/100}var l=e.parent().width()*s;i=e[0].currentLeft/l;
if(a==1){i=Math.ceil(i)}else{i=Math.floor(i)}e[0].currentLeft=i*l;i=Math.abs(i)}if(t.contain||t.snap){jvh.core.setTranslateXYStyle(e,e[0].currentLeft+"px",0)
}if(t.endfn!=null){t.endfn(a,e,i)}};e.bind("touchend",function(a){if(jvh.core.viewport=="mobile"&&e.swipeSettings.mobileOff){return
}var t=a.originalEvent.changedTouches[0];e.addClass("transition");if(e.swipeVar.swiping){var r=e.swipeVar.clientX-t.clientX;
var o=e.swipeSettings;if(o.direction.axis=="x"){var n=o.direction.d;if(r*n<-50){e[0].sliderSlide(e,n)
}else{jvh.core.setTranslateXYStyle(e,e.swipeVar.currentLeft+"px",0);if(o.fnabort!=null)o.fnabort(n,e)
}}else{if(o.endfn!=null){o.endfn()}}}e.swipeVar.swiping=false})}},accomTypes:["","Villa","Apartment","Hotel","Townhouse","Gite","Cottage"],load:{loadedJsFiles:[],mapCallback:null,gmapLoaded:false,mapjsLoaded:false,loadMapInProgress:false,loadMap:function(e){const a=jvh.core.load;
if(!a.loadMapInProgress){a.loadMapInProgress=true;a.mapCallback=e;jvh.core.mapLoading();if(jvh.core.settings.jsMin){a.loadJs("/js/jvh/min/map-min.js?ver="+jvh.core.settings.ver,jvh.core.load.mapLoaded)
}else{a.loadJs("/js/jvh/map.js?ver="+jvh.core.settings.ver,jvh.core.load.mapLoaded)}var t="//maps.googleapis.com/maps/api/js?callback=jvh.core.load.gmapCallback";
if(jvh.core.settings.googleApiChannel!=null&&jvh.core.settings.googleApiChannel.length>1){t+="&channel="+jvh.core.settings.googleApiChannel
}if(jvh.core.settings.googleApiKey!=null&&jvh.core.settings.googleApiKey.length>1){t+="&key="+jvh.core.settings.googleApiKey
}a.loadJs(t,a.mapLoaded)}},gmapCallback:function(){jvh.core.load.gmapLoaded=true;jvh.core.load.mapLoaded()
},mapJsLoaded:function(){jvh.core.load.mapjsLoaded=true;jvh.core.load.mapLoaded()},mapLoaded:function(){const e=jvh.core.load;
e.gmapLoaded&&e.mapjsLoaded?e.mapCallback():jvh.core.mapError();e.loadMapInProgress=false},myCallbacks:{n:0},loadJs:function(e,a){var t=this;
var r=false;for(var o=0;o<t.loadedJsFiles.length;o++){if(t.loadedJsFiles[o]==e){r=true}}if(!r){const n=function(e){return e+(e.indexOf("?")>0?"&":"?")
};var i=document.createElement("script");i.type="text/javascript";if(a&&e.indexOf("callback=")==-1){jvh.core.load.myCallbacks.n++;
jvh.core.load.myCallbacks["cb"+jvh.core.load.myCallbacks.n]=a;e=n(e)+"callback=jvh.core.load.myCallbacks.cb"+jvh.core.load.myCallbacks.n
}if(typeof jvh.data.timeStamp!=="undefined"){e=n(e)+"timeStamp="+jvh.data.timeStamp}i.src=e;document.getElementsByTagName("head")[0].appendChild(i);
t.loadedJsFiles[t.loadedJsFiles.length]=e}else if(a){a()}}},ajaxModal:function(e,a,t,r,o,n){$("#modalContainer").removeClass("modal-active");
$("#modalClose").addClass("fixed");var i="";if(r){i=r}$.ajax({type:"GET",url:e,dataType:"html",cache:false,success:function(e){jvh.core.showModal(i+e,t,o,null,n);
jvh.core.initFormFields($("#modalContainer"));if(a){a()}jvh.core.centerModal()},error:function(e,a,t){jvh.core.showModal("<section class='modal-error'><h2>Error</h2>We are really sorry, there seems to be a problem with this page.</section>")
}})},showInnerModal:function(e,a,t){var r=e.find($("div.inner-modal"));if(r.length==0){e.append('<div class="inner-modal">'+a+'<button class="close inner-modal-close">X</button></div>');
e.find(".curtains").addClass("active");$(".inner-modal-close",e).click(function(a){var r=$(".inner-modal",e);
e.find(".curtains").removeClass("active");a.preventDefault();r.removeClass("active");t.removeClass("active");
window.setTimeout(function(){r.remove()},600);jvh.core.tracking.trackEvent(jvh.core.trackingType,"Closed inner modal","Inner modal")
});t.addClass("active");window.setTimeout(function(){$(".inner-modal",e).addClass("active")},100);if(jvh.core.viewport=="mobile"){window.setTimeout(function(){jvh.core.goToAnchor("inner-modal.active",null,null,-45)
},600)}}else{$(".inner-modal",e).removeClass("active");e.find(".curtains").removeClass("active");t.removeClass("active");
window.setTimeout(function(){r.remove()},600)}},showModal:function(e,a,t,r,o){var n=$("#modalContent");
var i=$("#modalContainer");var s=$(".modal-content");var l=$("body");var c=$(window).scrollTop();if(e!=null){n.html(e)
}if(typeof o!=="undefined"&&o!=null){s.addClass(o)}jvh.core.fixModalScrolling();i.addClass("modal-active").toggleClass("styled",a===true).toggleClass("no-close",r===true);
$("body > div.curtains").addClass("active").removeClass("side-modal show-spinner");$("body > div.curtains").addClass("active").removeClass("side-modal");
jvh.core.closeModalCallBack=t?t:null;var d=[];$("#modalContainer img").each(function(e){if(!this.complete&&this.naturalHeight===0){d.push(this)
}});d.forEach(function(e){e.addEventListener("load",function(){jvh.core.centerModal()})});jvh.core.centerModal();
document.getElementById("modalContainer").scrollTop=0;if(o&&o.indexOf("fix-back-scroll")>=0&&!l.hasClass("fix-back-scroll")&&!jvh.core.fixedScrolling){l.data("scroll-current",c);
l.addClass("fix-back-scroll")}},pleaseWaitModal:{time:null,timer:null,setTimer:function(e){if(e){jvh.core.pleaseWaitModal.time=null;
clearInterval(jvh.core.pleaseWaitModal.timer)}else{jvh.core.pleaseWaitModal.time=new Date;if(jvh.core.pleaseWaitModal.timer!==null){jvh.core.pleaseWaitModal.setTimer(true)
}jvh.core.pleaseWaitModal.timer=setInterval(function(){var e=new Date;if(jvh.core.pleaseWaitModal.time!==null&&e.getTime()-jvh.core.pleaseWaitModal.time.getTime()>2e3&&($(".curtains.show-spinner").hasClass("active")||$("#modalContent .spinner.show").length>0)){if($(".curtains.show-spinner").hasClass("active")){jvh.core.closeModal()
}else if($("#modalContent .villa-modal .spinner.show").length>0){$("#modalContent .villa-modal").hide()
}jvh.core.pleaseWaitModal.setTimer(true)}else{jvh.core.pleaseWaitModal.time=e}},1e3)}}},fixModalScrolling:function(){var e=$("body");
var a=$(window).scrollTop();if(jvh.core.viewport!="desktop"){e.css("margin-top",-a);jvh.core.fixedScrolling=true
}e.addClass("modal-open");if(jvh.core.fixedScrolling){e.data("scroll-current",a)}},removeModalScrollFixing:function(){var e=$("body");
e.removeClass("modal-open");e.css("margin-top","");if(jvh.core.fixedScrolling){$(window).scrollTop(e.data("scroll-current"));
jvh.core.fixedScrolling=false}},centerModal:function(e){var a=$("#modalContainer");if(a.is(":visible")){a.css("height","");
var t=$(".modal-content");var r=a.outerWidth(false);var o=t.outerHeight();var n=a.outerHeight();var i=0;
const s=$(".right-side");const l=$("body > .curtains");if(jvh.core.viewport==="mobile"){a.css("top","20px");
a.css("left","20px");a.css("bottom","20px");t.css("top","0px");if(!t.hasClass("dest-map")&&o<n){a.css("height",o+"px")
}}else{if(($(window).height()-o)/2>0&&o<=n){a.css("height",o+"px");a.css("bottom","")}else{if($(window).height()<760){a.css("top","15px");
a.css("bottom","15px")}else{a.css("top","30px");a.css("bottom","30px")}}i=($(window).width()-r)/2;if(i<0){i=0
}a.css("left",i+"px")}if(a.find(".login-modal.client-login, .other-pax-login, .agent-login-modal").length>0){a.addClass("narrow-modal-mobile");
if(s.hasClass("active")){myself.toggleBasket();l.addClass("active")}}else{a.removeClass("narrow-modal-mobile")
}if(a.find(".login-modal").length>0&&$("body").hasClass("modal-open")&&s.hasClass("active")){myself.toggleBasket();
l.addClass("active")}var c=$("#modalClose");var d="";var h="";if(jvh.core.modalTimer!==null){clearTimeout(jvh.core.modalTimer)
}if(c.hasClass("fixed")){if(jvh.core.viewport==="mobile"){d=t.css("top")}else if(jvh.core.viewport==="tablet"){d=t.offset().top
}else{d=t.offset().top-$(window).scrollTop()}h=i+$("#modalContent").outerWidth(true)-c.outerWidth(true);
if(jvh.core.viewport==="tablet"){c.css("left",h);jvh.core.modalTimer=window.setTimeout(function(){c.css("top",d)
},200,d)}else{c.css({top:d,left:h})}}else{c.css({top:d,left:h})}}},resizeEmbed:function(){var e=$(window).width();
var a;if(e>767){a=55/100*e;$("#YTPlayer").css("max-height","initial")}else{a=e-60;$("#YTPlayer").css("max-height",parseInt($(window).height())-95+"px")
}var t=parseInt($("#modalContainer").css("max-width"))-40;if(a>=t){a=t}$("#YTPlayer").attr("width",a);
newVidHeight=315/560*$("#modalContent").width();$("#YTPlayer").attr("height",newVidHeight)},closeModalCallBack:null,closeModal:function(){var e=$("body");
const a=$("#modalClose");if(a.hasClass("call-me-modal-close")){a.removeClass("new call-me-modal-close")
}jvh.core.removeModalScrollFixing();$("#modalContainer").removeClass("modal-active saving");$("body > div.curtains").removeClass("active");
$(".modal-content").removeClass().addClass("modal-content");if(jvh.core.viewport=="mobile"){$(".map-show-all").removeClass("active").addClass("hide");
$("#accomFilter, #accomFilter > ul > li, #mapFilter, #mapFilter > ul > li, .beach-golf-container, .mob-filter-toggle, .mob-map-label").removeClass("active")
}if(jvh.core.closeModalCallBack!=null){jvh.core.closeModalCallBack()}$("#YTPlayer").remove();$("#modalContent").removeClass("yt-video-modal");
if(e.hasClass("fix-back-scroll")&&!jvh.core.fixedScrolling){e.removeClass("fix-back-scroll");$(window).scrollTop(e.data("scroll-current"))
}jvh.core.pleaseWaitModal.setTimer(true)},reauthentication:false,authCallback:null,reauthChangeUserAction:null,loginSuccessOverride:null,jvhLogin:function(){var e=$("#jvhLoginForm, #frmAgentLoginModal");
var a=$("body > div.curtains");$(".login-modal .message.error").removeClass("active");if(jvh.core.validation.validateForm(e)){a.addClass("show-spinner");
$(".modal-container").addClass("saving");$.ajax({type:"POST",url:e.attr("action"),data:e.serialize(),cache:false,dataType:"JSON",success:function(t){if(t.authenticated){jvh.core.loginSuccess(t)
}else{if(t.lockedUntil){a.removeClass("show-spinner");$(".modal-container").removeClass("saving");$(".message.error",e).html("Due to too many failed login attempts your account has been locked until "+t.lockedUntil+'.<br> <br>If you cannot remember your password please use the "Forgot password" link below.').addClass("active")
}else{a.removeClass("show-spinner");$(".modal-container").removeClass("saving");$(".message.error",e).html("Login failed. Please check your details are correct and your account has been verified.").addClass("active")
}}},error:function(t,r,o){a.removeClass("show-spinner");$(".modal-container").removeClass("saving");$(".message.error",e).html("There was a problem trying to log you in, please try again later.").addClass("active")
}})}jvh.core.centerModal()},reauthenticateUser:function(e,a,t){jvh.core.reauthentication=true;if(e){jvh.core.authCallback=e
}else{jvh.core.authCallback=null}if(a){jvh.core.loginSuccessOverride=a}else{jvh.core.loginSuccessOverride=null
}if(t){jvh.core.reauthChangeUserAction=t}else{jvh.core.reauthChangeUserAction=null}jvh.core.ajaxModal("/login/reauthenticate.ajax",jvh.core.initLoginForm)
},loginSuccess:function(e,a){if(jvh.core.localStorageSupported&&jvh.core.localStorage.get("recentSearchCount")!==null){jvh.core.localStorage.remove("recentSearchCount")
}if(!jvh.core.loginSuccessOverride){if(typeof e.loginClientId!=="undefined"){digitalData.event=[{eventInfo:{eventName:"Successful Login",eventAction:e.loginType+" Login Click",userId:e.loginClientId}}];
jvh.core.tracking.trackAdobeEvent("successful-login")}if(e.login&&jvh.core.authCallback){var t='<li class="account-section" data-logged-in data-track-label="User Accounts"><div class="avatar-container dropdown">';
if(e.login.photoUrl){t+='<img class="avatar" src="'+e.login.photoUrl+'" alt="'+e.login.firstName+" "+e.login.surname+'" />'
}else{t+='<div class="avatar">'+e.login.initials+"</div>"}var r;if(e.login.firstName.length<13){r="Welcome "+e.login.firstName
}else if(e.login.firstName.length>=22){r="Welcome"}else{r=e.login.firstName}t+='</div><a href="/account" class="account dropdown">'+r+"</a>"+"<ul>"+'<li><a href="/account">Account</a></li>'+'<li><a href="/account/search-history">Search History</a></li>'+'<li><a href="/account/villa-shortlist">Shortlist</a></li>'+'<li><a href="/myholiday/logout">Logout</a></li>'+"</ul></li>";
var o=$("li[data-logged-out]",".utility-nav .utility-nav-wrapper > ul");o.first().after(t);o.remove();
$(".utility-nav li.pipe[data-logged-in]:has(ul)").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")
});var n=$("body > div.curtains");n.removeClass("show-spinner");$(".modal-container").removeClass("saving");
a=jvh.core.authCallback(e);if(a){jvh.core.closeModal()}const i=document.body.classList.contains("booking");
if(i){jvh.core.utilityNav.adjustHoverOnBookingPage()}}else{window.setTimeout(function(){var a;if(e.redirectUrl){a=e.redirectUrl
}else if(e.loginType=="AGENT"){a="/agents/authenticated"}else{a="/account"}document.location.href=a},200)
}}else{jvh.core.loginSuccessOverride(e)}},jvhSignUp:function(){const e=$("#jvhSignUpForm");const a=$("body > div.curtains");
const t=$(".password-view-toggle");if(t.hasClass("show-password")){t.removeClass("show-password");$("#signup-password").attr("type","password")
}if(jvh.core.validation.validateForm(e)){a.addClass("show-spinner");$(".modal-container").addClass("saving");
$.ajax({type:"POST",url:e.attr("action"),data:e.serialize(),cache:false,dataType:"JSON",success:function(t){a.removeClass("show-spinner");
$(".modal-container").removeClass("saving");if(t.authenticated===true){$(".email-signup-form").hide();
$(".email-signup-confirmation").show();digitalData.event=[{eventInfo:{eventName:"Successful Sign-up",eventAction:"Sign Up Click",userId:t.clientId}}];
jvh.core.tracking.trackAdobeEvent("successful-signup");dataLayerPush({event:"account_created",userId:t.clientId})
}else{$(".message.error",e).html('It appears that this email address is already in use. Have you <a href="#" class="forgot-password-link forgot-password-link-sign-up-modal">forgotten your password?</a>').addClass("active");
$(".message.error a.forgot-password-link",e).click(function(e){e.preventDefault();jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Forgotten Password","James Villa Holidays");
jvh.core.ajaxModal("/login/reset-password.ajax",jvh.core.initLoginForm)})}},error:function(t,r,o){a.removeClass("show-spinner");
$(".modal-container").removeClass("saving");$(".message.error",e).html("There was a problem signing you up, please try again later").addClass("active")
}})}},jvhPasswordReset:function(){var e=$("#jvhPasswordResetForm, #frmAgentForgottenPassword");var a=$("body > div.curtains");
if(jvh.core.validation.validateForm(e)){a.addClass("show-spinner");$(".modal-container").addClass("saving");
$.ajax({type:"POST",url:e.attr("action"),data:e.serialize(),cache:false,dataType:"JSON",success:function(t){a.removeClass("show-spinner");
$(".modal-container").removeClass("saving");if(t.success===true){$(".confirmation",".reset-password-form,.agent-reset-password-form").show();
$(".request-password-reset",".reset-password-form,.agent-reset-password-form").hide();$(".reset-email-to").html(t.email)
}else if(t.errorMessage){jvh.core.validation.manageFormErrorMessage(e,t.errorMessage,true)}else{jvh.core.validation.manageFormErrorMessage(e,"We were unable to reset your password, please check your details are correct and try again.",true)
}},error:function(t,r,o){a.removeClass("show-spinner");$(".modal-container").removeClass("saving");jvh.core.validation.manageFormErrorMessage(e,"We were unable to reset your password, please check your details are correct and try again.",true)
}})}},bookingPaneOpen:function(e){$(this).addClass("selected");$("#accountBtn").removeClass("selected");
if(e){$(".account-login-modal").slideUp(500,false);$(".booking-login-modal").slideDown(500,false);$("#selectedLine").animate({marginLeft:"42.5%"},{duration:500})
}else{$(".account-login-modal").hide();$(".booking-login-modal").show();$("#selectedLine").css({marginLeft:"42.5%"})
}},loginModalEmail:null,initLoginForm:function(e){booking=e||false;if($("#fbLogin, #fbSignup",".login-modal")){jvh.core.facebookSDK.load()
}if($("#googleLogin, #googleSignup, #googleSignUpLink, #googleSignUpOption",".login-modal").length){jvh.core.googleSDK.load(jvh.core.googleSDK.attachGoogleLogin)
}jvh.core.validation.init($("#modalContainer form"));if(jvh.core.viewport==="mobile"){$("#modalContainer .login-container > button").addClass("small")
}else{$("#modalContainer .login-container > button").removeClass("small")}$("#modalContainer form").not("#jvhOtherPaxLoginForm").submit(function(){return false
});$("#loginPassword").keypress(function(e){if(e.which==13){e.preventDefault();jvh.core.jvhLogin()}});
$("#fbLogin, #fbSignup").click(function(e){e.preventDefault();$(".login-modal .message.error").removeClass("active");
$(".login-modal .input-replacement").removeClass("error");jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),$(this).data("track-action"),"Facebook");
if(jvh.core.reauthentication){jvh.core.facebookSDK.facebookReauth()}else{jvh.core.facebookSDK.facebookLogin()
}});$("#googleLogin, #googleSignup, #googleSignUpLink, #googleSignUpOption").click(function(e){$(".login-modal .message.error").removeClass("active");
$(".login-modal .input-replacement").removeClass("error");jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),$(this).data("track-action"),"Google")
});$(".login-modal .forgot-password-link").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Forgotten Password","James Villa Holidays");
jvh.core.loginModalEmail=$.trim($("input[type=email]",".login-container").val())!=""?$.trim($("input[type=email]",".login-container").val()):null;
jvh.core.ajaxModal("/login/reset-password.ajax",jvh.core.initLoginForm)});$(".login-modal .other-pax-login-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Other pax login","James Villa Holidays");
jvh.core.ajaxModal("/login/other-pax-login.ajax",jvh.core.initLoginForm)});$(".login-modal .sign-up-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Sign-up","James Villa Holidays");jvh.core.loginModalEmail=$.trim($("input[type=email]",".login-container").val())!=""?$.trim($("input[type=email]",".login-container").val()):null;
jvh.core.ajaxModal("/login/sign-up-options.ajax",jvh.core.initLoginForm)});$(".login-modal .email-sign-up-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Sign-up","James Villa Holidays");jvh.core.ajaxModal("/login/email-sign-up.ajax",jvh.core.initLoginForm)
});$(".login-modal .login-link").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Log-in","James Villa Holidays");
jvh.core.loginModalEmail=$.trim($("input[type=email]",".login-container").val())!=""?$.trim($("input[type=email]",".login-container").val()):null;
jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm)});$(".login-modal .terms-policy-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),$(this).data("linkName"),"James Villa Holidays");
window.location=$(this).attr("href")});$(".login-modal .agent.switch-login-type-agent").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Travel agent login","Tile CTA");jvh.core.ajaxModal("/ajax/agents/login",jvh.core.initAgentLogin)
});$(".login-modal .agent.switch-login-type").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Travel agent login","Tile CTA");
jvh.core.ajaxModal("/ajax/agents/login",jvh.core.initAgentLogin)});$("#jvhLoginForm").submit(function(e){e.preventDefault();
jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Email login attempt","James Villa Holidays");
jvh.core.jvhLogin()});$("#jvhSignUp").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Sign-Up by email","James Villa Holidays");
jvh.core.jvhSignUp()});$("#jvhResetPassword").click(function(e){jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Reset password","James Villa Holidays");
jvh.core.jvhPasswordReset()});$("#jvhOtherPaxLogin").click(function(e){jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Login as other pax","James Villa Holidays");
if(jvh.core.validation.validateForm($("#jvhOtherPaxLoginForm"))){$("#jvhOtherPaxLoginForm").submit()}});
$("#jvhLoginForm :input, #jvhPasswordResetForm :input, #jvhOtherPaxLoginForm :input").keypress(function(e){$(".login-modal .message.error").removeClass("active")
});if(jvh.core.loginModalEmail!=null){$("input[type=email]",".login-container").val(jvh.core.loginModalEmail)
}if(jvh.core.reauthChangeUserAction!=null){$(".change-user").click(function(e){e.preventDefault();jvh.core.reauthChangeUserAction()
})}if(window.location.hash.indexOf("passenger-login-failed")>-1){$("#jvhOtherPaxLoginForm > .message.error").addClass("active");
$("#bookingsBtn").addClass("selected");$("#accountBtn").removeClass("selected");$(".account-login-modal").slideUp(500,false);
$(".booking-login-modal").slideDown(500,false);$("#selectedLine").animate({marginLeft:"42.5%"},{duration:500})
}booking&&jvh.core.bookingPaneOpen(false);$("#bookingsBtn").click(function(){$(this).addClass("selected");
$("#accountBtn").removeClass("selected");$("#modalContainer").css("overflow-y","hidden");$(".account-login-modal").slideUp(500,false);
$(".booking-login-modal").slideDown(500,false);$("#selectedLine").animate({marginLeft:"42.5%"},{duration:500});
jvh.core.bookingPaneOpen(true);setTimeout(function(){$("#modalContainer").css("overflow-y","")},200)});
$("#accountBtn").click(function(){$("#bookingsBtn").removeClass("selected");$(this).addClass("selected");
$(".account-login-modal").slideDown(500,false);$(".booking-login-modal").slideUp(500,false);$("#selectedLine").animate({marginLeft:"0"},{duration:500,queue:false})
});$("#leadPassengerLink").click(function(){$("#accountBtn").click()});$("#passengerCodeLink").click(function(){jvh.core.passengerCode.holidayRef=$("#holidayRef").val();
jvh.core.passengerCode.leadSurname=$("#leadPaxSurname").val();jvh.core.ajaxModal("/login/passenger-code.ajax",jvh.core.passengerCode.init)
});$(".login-modal-fields").focusin(function(){$(this).parent().siblings("label").addClass("focus");$(this).addClass("focused")
});$(".login-modal-fields").focusout(function(){if(!$(this).val().length>0){$(this).removeClass("focused");
$(this).parent().siblings("label").removeClass("focus")}});$(".login-modal-fields").each(function(){if($(this).val().length>0){$(this).parent().siblings("label").addClass("focus");
$(this).addClass("focused")}});$(".password-view-toggle").click(function(){if($(this).hasClass("show-password")){$(this).removeClass("show-password");
$(this).siblings(".input-replacement").children(".password-alt").attr("type","password")}else{$(this).addClass("show-password");
$(this).siblings(".input-replacement").children(".password-alt").attr("type","text")}})},passengerCode:{leadSurname:null,holidayRef:null,init:function(){var e=$("#modalContainer form");
jvh.core.validation.init(e);jvh.core.initFormFields(e);$(".login-modal-fields").focusin(function(){$(this).parent().siblings("label").addClass("focus");
$(this).addClass("focused")});$(".login-modal-fields").focusout(function(){if(!$(this).val().length>0){$(this).removeClass("focused");
$(this).parent().siblings("label").removeClass("focus")}});$(".login-modal-fields").each(function(){if($(this).val().length>0){$(this).parent().siblings("label").addClass("focus");
$(this).addClass("focused")}});$(".trigger-view",".other-pax-code-form-confirm").on("click",jvh.core.clickTriggerView);
$("#jvhOtherPaxCode").click(function(e){jvh.core.tracking.trackEvent($(".login-modal").data("modal-view"),"Send passenger code","James Villa Holidays");
var a=$("#jvhOtherPaxCodeForm");if(jvh.core.validation.validateForm(a)){var t=$(".modal-container");var r=$(".message.error",t);
var o=$("body > div.curtains");o.addClass("show-spinner");t.addClass("saving");$.ajax({type:"POST",url:a.attr("action"),data:a.serialize(),cache:false,dataType:"JSON",success:function(e){if(e.success){o.removeClass("show-spinner");
t.removeClass("saving");$(".other-pax-code").addClass("display-none");$(".other-pax-code-form-confirm").removeClass("display-none").find("p.message").addClass("active")
}else{o.removeClass("show-spinner");t.removeClass("saving");$(".login-modal .message.error").removeClass("active");
r.text("There was an issue sending the passenger code to the lead passenger.").addClass("active")}},error:function(e,a,t){o.removeClass("show-spinner");
$(".modal-container").removeClass("saving");$(".login-modal .message.error").removeClass("active");r.text("An error occured please try again").addClass("active")
}})}})}},initAgentLogin:function(){$("#frmAgentLoginModal").submit(function(e){e.preventDefault();if(jvh.core.validation.validateForm($(this))){jvh.core.jvhLogin()
}});$("#frmAgentForgottenPassword").submit(function(e){e.preventDefault();jvh.core.jvhPasswordReset()
});$(".login-modal .customer.switch-login-type").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent("Agent Portal - Login Modal","Customer login","Tile CTA");
jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm)});$(".login-modal .agent-login-modal .login-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent("Agent Portal - Forgotten Password Modal","Login","Agent Portal Login");
jvh.core.ajaxModal("/ajax/agents/login",jvh.core.initAgentLogin)});$(".login-modal .agent-login-modal a.forgot-password-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent("Agent Portal - Login Modal","Forgotten Password","Agent Portal Login");
jvh.core.ajaxModal("/ajax/agents/login-forgotten-password.ajax",jvh.core.initAgentLogin)});$(".login-modal-fields").focusin(function(){$(this).parent().siblings("label").addClass("focus");
$(this).addClass("focused")});$(".login-modal-fields").focusout(function(){if(!$(this).val().length>0){$(this).removeClass("focused");
$(this).parent().siblings("label").removeClass("focus")}});$(".password-view-toggle").click(function(){if($(this).hasClass("show-password")){$(this).removeClass("show-password");
$(this).siblings(".input-replacement").children(".password-alt").attr("type","password")}else{$(this).addClass("show-password");
$(this).siblings(".input-replacement").children(".password-alt").attr("type","text")}})},googleSDK:{loaded:false,auth2:null,load:function(e){if(!jvh.core.googleSDK.loaded){$.getScript("https://apis.google.com/js/api:client.js",function(){jvh.core.googleSDK.init(e)
})}else{jvh.core.googleSDK.init(e)}},init:function(e){if(!gapi.auth2){jvh.core.googleSDK.loaded=true;
gapi.load("auth2",function(){gapi.auth2.init({client_id:"700868293100-buqe5ak2nugun2cpmk4684kfla22c79b.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}).then(function(){jvh.core.googleSDK.auth2=gapi.auth2.getAuthInstance();
if(e){e()}})})}else if(e){jvh.core.googleSDK.auth2=gapi.auth2.getAuthInstance();e()}},attachGoogleLogin:function(){jvh.core.googleSDK.auth2.attachClickHandler(document.getElementById("googleLogin")||document.getElementById("googleSignup")||$(".login-register .google-login")[0],{},function(e){jvh.core.googleSDK.googleLogin(e.getAuthResponse().id_token)
},function(e){var a=$(".modal-container");if(a.is(":visible")){$(".login-modal .input-replacement").removeClass("error");
$(".login-modal .message.error").removeClass("active");$(".google-error-message",a).text("An error occured please try again").addClass("active")
}else{$(".google-error-message").text("An error occured please try again").addClass("active")}})},googleLogin:function(e){var a={j_username:jvh.core.googleSDK.auth2.currentUser.get().getId(),j_password:e,channel:jvh.core.settings.channel.id,loginType:"GOOGLE"};
var t=jvh.core.reauthentication?"/login/reauthentication/google-security-check":"/login/google-security-check";
var r=$("body > div.curtains");r.addClass("show-spinner");var o=$(".modal-container");var n;if(o.is(":visible")){n=$(".google-error-message",o)
}else{n=$(".google-error-message")}o.addClass("saving");$.ajax({type:"POST",url:t,data:a,cache:false,dataType:"JSON",success:function(e){if(e.authenticated){jvh.core.loginSuccess(e,true)
}else{r.removeClass("show-spinner");$(".modal-container").removeClass("saving");if(jvh.core.reauthentication){n.text("Please ensure you are logging in with the correct Google account.").addClass("active")
}else{n.text("The personal details on your Google account do not match the minimum requirements for registering").addClass("active")
}}},error:function(e,a,t){$(".login-modal .message.error").removeClass("active");n.text("An error occured please try again").addClass("active");
$(".login-modal .input-replacement").removeClass("error");r.removeClass("show-spinner");$(".modal-container").removeClass("saving")
}})},disconnect:function(){jvh.core.googleSDK.auth2.disconnect()}},facebookSDK:{load:function(){(function(e,a,t){var r,o=e.getElementsByTagName(a)[0];
if(e.getElementById(t))return;r=e.createElement(a);r.id=t;r.src="//connect.facebook.net/en_US/sdk.js";
o.parentNode.insertBefore(r,o)})(document,"script","facebook-jssdk");window.fbAsyncInit=function(){FB.init({appId:jvh.core.settings.facebookAppId,channelUrl:"//"+document.domain+"/fbchannel.cfm",status:true,cookie:true,xfbml:true,version:"v2.4"})
}},facebookLogin:function(){FB.login(function(){jvh.core.facebookSDK.facebookCheckLoginState()},{scope:"email"})
},facebookReauth:function(){FB.login(function(){jvh.core.facebookSDK.facebookCheckLoginState()},{scope:"email",auth_type:"reauthenticate"})
},facebookCheckLoginState:function(){FB.getLoginStatus(function(e){jvh.core.facebookSDK.facebookStatusChangeCallback(e)
})},facebookStatusChangeCallback:function(e){if(e.status==="connected"){jvh.core.facebookSDK.facebookGetUserDetails(e.authResponse.accessToken)
}else{var a=$(".modal-container");if(a.is(":visible")){$(".login-modal .message.error").removeClass("active");
$(".facebook-error-message",a).text("An error occured please try again").addClass("active")}else{$(".facebook-error-message").text("An error occured please try again").addClass("active")
}}},facebookGetUserDetails:function(e){var a=$(".modal-container");var t;if(a.is(":visible")){t=$(".facebook-error-message",a)
}else{t=$(".facebook-error-message")}FB.api("/me",{fields:"id,email"},function(r){if(r.email){var o={j_username:r.id,j_password:e,channel:jvh.core.settings.channel.id,loginType:"FACEBOOK"};
var n=jvh.core.reauthentication?"/login/reauthentication/facebook-security-check":"/login/facebook-security-check";
var i=$("body > div.curtains");i.addClass("show-spinner");a.addClass("saving");$.ajax({type:"POST",url:n,data:o,cache:false,dataType:"JSON",success:function(e){if(e.authenticated){jvh.core.loginSuccess(e,true)
}else{i.removeClass("show-spinner");$(".modal-container").removeClass("saving");$(".login-modal .message.error").removeClass("active");
if(jvh.core.reauthentication){t.text("We were unable to confirm your Facebook credentials.").addClass("active")
}else{t.text("The personal details on your Facebook account do not match the minimum requirements for registering").addClass("active")
}}},error:function(e,a,r){i.removeClass("show-spinner");$(".modal-container").removeClass("saving");$(".login-modal .message.error").removeClass("active");
t.text("An error occured please try again").addClass("active")}})}else{$(".login-modal .message.error").removeClass("active");
t.text("We require an email address to be registered on your Facebook account to use this service").addClass("active")
}})}},trackHeaderFooter:function(){jvh.core.tracking.autoTrack($(".partner-logo"));$("#newsletterEmail").on("focus",function(){jvh.core.tracking.trackEvent("Footer","Activates Email Address Field","Newsletter Signup")
});$("footer.secondary .quicklinks a:not(.tel)").click(function(e){e.preventDefault();var a=$(this);var t;
if(a.attr("data-track-action")){t=a.attr("data-track-action")}else{t=a.text()}jvh.core.tracking.trackAdobeEvent("footer-click",t,"Footer Click");
var r=a.attr("target")=="_blank";jvh.core.tracking.trackOutbound(a.attr("href"),"Footer",t,"Footer Anchors",null,r)
})},trackOrientation:function(){(function(){var e=jvh.core.deviceOrientation();jvh.core.tracking.trackEvent("Device Orientation","Orientation",e);
if(window.addEventListener){window.addEventListener("resize",function(){var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
var t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);var r=a>t?"Landscape":"Portrait";
if(r!=e){jvh.core.tracking.trackEvent("Device Orientation","Orientation Change","Switch to "+r);$(document).trigger("orientation.changed",e);
e=r}},false)}})()},deviceOrientation:function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);
var a=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return e>a?"Landscape":"Portrait"
},fnCurrencyFormat:function(e,a,t){if(typeof e!="number"){return""}var r=null;if(a){r=Math.abs(e).toFixed(2)
}else{r=Math.abs(e).toFixed(0)}if(t){r=jvh.core.commaNumber(r)}var o=jvh.core.settings.currency=="EUR"?"&euro;":"&pound;";
var n=e<0?"-":"";return n+o+r},convertToSterling:function(e,a){var t=(e/jvh.core.settings.exchangeRate).toFixed(2);
if(a){return Math.floor(t)}return Math.round(t,0)},commaNumber:function(e){return e.toString().replace(/./g,function(e,a,t){return a&&e!=="."&&(t.length-a)%3===0?","+e:e
})},linkReplace:function(e,a){var t=e.replace(/\n|\&|\t|\"\|_|,|-|\s/g,a);t=t.replace(/\*|\/|\!|'|`|#|~|:|;|\?|\||,|\.|\(|\)|\\/g,"");
return t.replace(/-+/g,"-").replace(/-+$/g,"").toLowerCase()},padout:function(e){return e<10?"0"+e:e},link:{villa:function(e){var a="";
var t="";var r="";var o="";r="destinations/";var n=villas2[e];var i=n.resort.region;if(i.country.id!=8&&i.id!=10&&i.group!=null&&i.group.id!=3&&i.group.id!=4){a=jvh.core.linkReplace(i.country.name,"-")+"/"
}else if(i.country.id==8){a="florida/"}else if(i.group!=null&&(i.group.id==3||i.group.id==4)){a=jvh.core.linkReplace(i.group.name,"-")+"/"
}else if(i.id!=10){a=jvh.core.linkReplace(i.country.name,"-")+"/"}o=jvh.core.linkReplace(i.name,"-");
return"/"+r+a+o+"/"+jvh.core.linkReplace(n.resort.name,"-")+"/"+jvh.core.linkReplace(n.name,"-")+"-"+e
},resortLink:function(e,a){var t="";var r="";var o="/";o="/destinations/";if(a.country.id!=8&&a.id!=10&&a.group!=null&&a.group.id!=3&&a.group.id!=4){t=jvh.core.linkReplace(a.country.name,"-")+"/"
}else if(a.country.id==8){t="florida/"}else if(a.group!=null&&(a.group.id==3||a.group.id==4)){t=jvh.core.linkReplace(a.group.name,"-")+"/"
}else if(a.id!=10){t=jvh.core.linkReplace(a.country.name,"-")+"/"}r=jvh.core.linkReplace(a.name,"-");
return o+t+r+"/"+jvh.core.linkReplace(e,"-")},regionLink:function(e){var a="";var t="";var r="/";r="/destinations/";
if(e.country.id!=8&&e.id!=10&&e.group!=null&&e.group.id!=3&&e.group.id!=4){a=jvh.core.linkReplace(e.country.name,"-")+"/"
}else if(e.country.id==8){a="florida/"}else if(e.group!=null&&(e.group.id==3||e.group.id==4)){a=jvh.core.linkReplace(e.group.name,"-")+"/"
}else if(e.id!=10){a=jvh.core.linkReplace(e.country.name,"-")+"/"}t=jvh.core.linkReplace(e.name,"-");
return r+a+t},regionGroupLink:function(e){var a="/";var t="";var r="";a="/destinations/";if(e.id!=3&&e.id!=4&&e.id!=6){r=jvh.core.linkReplace(e.regions[0].country.name,"-")+"/"
}t=jvh.core.linkReplace(e.name,"-");return a+r+t},countryLink:function(e){var a=jvh.core.linkReplace(e.name,"-");
var t="/destinations/";return t+a},manageRegionFName:function(e){if(e=="Majorca")return"Mallorca";else if(e=="Zante")return"Zakynthos";
else return e}},images:{cohortImage:function(e){if(e.is(":visible")||e.parent().hasClass("apply-cohort-image")){var a=e.data("image-path");
if(typeof a!=="undefined"){var t=jvh.core.settings.cohort;var r=a.length;var o=a.substring(r-4,r);var n=a.substring(0,r-4);
if(jvh.core.viewport==="mobile"&&n.indexOf("-mob")<0){n+="-mob"}var i=e.data("cohort-version");if(typeof i==="undefined"){if(t===1){i="_cpl"
}else if(t===2){i="_grp"}else if(t===3){i="_fam"}else if(t===4){if(Math.random()<.5){i="_gy1"}else{i="_gy2"
}}else{i=""}e.data("cohort-version",i)}var s=n+i+o;n+=o;var l=new Image;l.onload=function(){if(!(e.prop("tagName")=="IMG")){return e.css("background-image","url('"+s+"')")
}else{return e.attr("src",s)}};l.onerror=function(){var t=new Image;t.onerror=function(){if(!(e.prop("tagName")==="IMG")){return e.css("background-image","url('"+a+"')")
}else{return e.attr("src",a)}};t.onload=function(){if(!(e.prop("tagName")==="IMG")){return e.css("background-image","url('"+n+"')")
}else{return e.attr("src",n)}};t.src=n};l.src=s}}},villaImg:function(e,a,t){var r=villas2[e];var o=r.resort.region;
var n=jvh.core.padout(o.id);var i=jvh.core.settings.imageDomain+"/images/galleries/"+n+jvh.core.link.manageRegionFName(o.name).replace(/ /g,"").replace(/\-/g,"").replace(/\'/g,"").replace(/\./g,"")+"/villas/photos/"+n+t+"/"+n+t+"_ext_"+a+".jpg";
return i.toLowerCase()},getCountryImage:function(e,a,t){if(t=="hero"){imageVer="all_dest_hero_"+e+"_mob"
}else{imageVer="thumbnail"}var r=jvh.core.settings.imageDomain+"/images/galleries/countries/"+jvh.core.padout(e)+jvh.core.linkReplace(a,"")+"/jvh/"+imageVer+".jpg";
return r.toLowerCase()},getRegionGroupImage:function(e,a,t){if(t=="hero"){imageVer="all_dest_hero_"+countryId+"_mob"
}else{imageVer="thumbnail"}var r=jvh.core.settings.imageDomain+"/images/galleries/region_groups/"+jvh.core.padout(e)+jvh.core.linkReplace(a,"")+"/jvh/"+imageVer+".jpg";
return r.toLowerCase()},getRegionImage:function(e,a,t){if(t=="hero"){imageVer="region_hero"+jvh.core.padout(e)+"_mob"
}else{imageVer="thumbnail"}var r=jvh.core.settings.imageDomain+"/images/galleries/"+jvh.core.padout(e)+jvh.core.linkReplace(jvh.core.link.manageRegionFName(a),"")+"/jvh/"+imageVer+".jpg";
return r.toLowerCase()},getResortImage:function(e,a){if(e!=null){if(e.type==2){leisure="leisure_"}else{leisure=""
}if(a=="hero"){imageVer="resort_hero_"+e.id+"_mob"}else{imageVer="thumbnail"}var t=jvh.core.settings.imageDomain+"/images/galleries/"+jvh.core.padout(e.region.id)+jvh.core.linkReplace(jvh.core.link.manageRegionFName(e.region.name),"")+"/resorts/"+e.id+"_"+leisure+"resort_page/jvh/"+imageVer+".jpg";
return t.toLowerCase()}},lazyLoad:function(e,a){if(typeof e==="undefined"){e=$("body")}e.find(".lazy-load").addBack(".lazy-load").each(function(){var e=$(this);
if(jvh.core.isInView(e,a)){if(e.prop("tagName")=="IMG"){e.attr("src",e.data("lazy-load"))}else if(e.data("lazy-load")){e.css("background-image","url('"+e.data("lazy-load")+"')")
}e.addClass("lazy-loaded");e.removeClass("lazy-load")}})},preLoadImages:function(e,a,t){for(i=0;i<e.length;++i){var r=jvh.core.settings.imageDomain+e[i];
var o=new Image;if(a){o.onload=function(){a()}}if(jvh.core.viewport=="mobile"&&t){r=r.replace(".jpg","_mob.jpg")
}o.src=r}}},goToElement:function(e,a,t,r){jvh.core.setHeaderHeight();if(e.length==0){return}var o=e.offset().top-95;
if($("body").hasClass("show-menu")){o=o-50}if(typeof r!=="undefined"){o=o-r}if(t==null){t=1e3;if(Math.abs(o-$(window).scrollTop())<50){t=100
}}$("html,body").animate({scrollTop:o},t,function(){if(typeof a=="function"){a()}})},goToAnchor:function(e,a,t,r){var o;
if(e===null||typeof e==="undefined"){o=$("body")}else{o=$("#"+e);if(o.length==0){o=$("."+e)}}jvh.core.goToElement(o,a,t,r)
},defineViewport:function(){const e=jvh.core;const a=window.innerWidth;var t=e.viewport;var r=e.breakpoint;
const o="mobile";const n="large-mobile";const i="tablet";const s="large-tablet";const l="desktop";const c="large-desktop";
if(a<e.breakpointRes[n]){e.viewport=o;e.breakpoint=o}else if(a<e.breakpointRes[i]){e.viewport=o;e.breakpoint=n
}else if(a<e.breakpointRes[s]){e.viewport=i;e.breakpoint=i}else if(a<e.breakpointRes[l]){e.viewport=i;
e.breakpoint=s}else if(a<e.breakpointRes[c]){e.viewport=l;e.breakpoint=l}else{e.viewport=l;e.breakpoint=c
}if(t!=null&&t!=e.viewport){$(document).trigger("viewport.changed",t)}if(r!=null&&r!=e.breakpoint){$(document).trigger("breakpoint.changed",r)
}const d=$("body");var h="non-home";if(d.hasClass("home")){h="home"}else if(d.hasClass("accom")){h="accom"
}else if(d.hasClass("search-results")){h="search-results"}else if(d.hasClass("essential-info")){h="essential-info"
}},isInView:function(e,a){if($(e).length>0){var t=$(e).offset().top;var r=t+$(e).outerHeight(true);var o=$(window).scrollTop();
var n=o+$(window).height()-20;if(typeof a==="undefined"){a=0}if(o>t&&o<r+a){return true}else if(n<r&&n>t-a){return true
}else if(o>r&&o>t){return false}else if(n<t&&n<r){return false}else if($(e).is(":visible")){return true
}}else{return false}},whichInView:function(e,a){var t=null;$(e).each(function(){var e=$(this).attr("id");
var r=jvh.core.isInView("#"+e);if(r){if(t==null&&(typeof a===undefined||!$("#"+e).hasClass(a))){t="#"+e
}}});return t},toSentenceList:function(e){var a="";for(var t=0;t<e.length;t++){if(t>0&&t==e.length-1){a+=" and "
}else if(t>0){a+=", "}a+=e[t]}return a},mainMenu:{active:false,mainNav:null,init:function(){jvh.core.mainMenu.mainNav=$("nav.main");
var e=jvh.core.mainMenu.mainNav;$("ul.menu",e).on("click","li > a",jvh.core.mainMenu.showMenu);$("a[data-brochure]",e).click(function(e){e.preventDefault();
jvh.core.mainMenu.closeMenu();jvh.core.ajaxModal("/ajax/brochure.ajax",jvh.core.brochure.initModal)});
$("body > a.logo, body > h1 > a.logo").click(function(){jvh.core.tracking.trackOutbound($(this).attr("href"),"Header","Logo")
});jvh.core.mainMenu.navHighlightLine.init()},disableBodyScrolling:function(e){e.preventDefault()},showMenu:function(e){var a=$(this);
var t=jvh.core.mainMenu.mainNav;var r=$("body");var o=a.parent();var n=o.children("ul");if(!jvh.core.mainMenu.active){if(typeof a.attr("data-brochure")==="undefined"){if(jvh.core.viewport!=="mobile"){if(o.hasClass("no-sub-items")||n&&n.children().length==0){if(jvh.core.viewport==="mobile"){window.location.href=a.attr("href")
}else{e.preventDefault();jvh.core.tracking.trackEvent("Header","Menu",a.attr("href"));window.open(a.attr("href"),"_blank")
}return}jvh.core.mainMenu.active=true;r.addClass("menu-open");$("> div.curtains",r).click(jvh.core.mainMenu.closeMenu);
jvh.searchbar.fnHideShowPanels("",true);document.body.addEventListener("touchmove",jvh.core.mainMenu.disableBodyScrolling,false);
$("html").click(function(e){if($(e.target).closest("nav.main ul.menu").length===0){jvh.core.mainMenu.closeMenu()
}});a.siblings("ul").first().addClass("active");a.siblings("ul").first().addClass("overflow-hidden");
window.setTimeout(function(){a.siblings("ul").first().removeClass("overflow-hidden")},400);a.parent("li").addClass("active");
jvh.core.mainMenu.navHighlightLine.repositionAtActiveItem();jvh.core.mainMenu.repositionMenu();jvh.core.images.lazyLoad(a.parent("li"));
jvh.core.tracking.trackAdobeEvent("menu-click",a.text(),"Horizontal Menu Click")}else{jvh.core.mainMenu.active=true;
jvh.core.tracking.trackEvent("Header","Menu","Open");r.addClass("menu-open");$("> div.curtains",r).click(jvh.core.mainMenu.closeMenu);
var i=document.querySelector("meta[name=viewport]");i.setAttribute("original",i.getAttribute("content"));
i.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no");
$("div.heading",t).text("Menu");$("div.menu",t).css("margin-left",0);if(r.hasClass("basket-open")&&typeof jvh.booking!=="undefined"){jvh.booking.toggleBasket()
}}}}else{var s=a.closest("ul");var l=a.hasClass("back");if(!l&&(o.hasClass("no-sub-items")||n&&n.children().length==0)){if(jvh.core.viewport==="mobile"||!s.hasClass("flights")){window.location.href=a.attr("href")
}else{jvh.core.tracking.trackEvent("Header","Menu",a.attr("href"));var c=window.open(a.attr("href"),"_blank");
c.location;return false}return}if(r.hasClass("menu-open")&&jvh.core.viewport!=="mobile"&&s.hasClass("menu")&&a.parent("li").find("ul.active").length>0){e.preventDefault();
jvh.core.mainMenu.closeMenu()}else if(l||a.parent().find("ul").length>0){e.preventDefault();var d=a.closest("div");
$("ul.active",d).removeClass("active");$("li.active",d).removeClass("active");var h;if(l){h=s.parent().closest("ul")
}else{h=a.siblings("ul").first()}h.parentsUntil("ul.menu","ul").addClass("active");if(!a.parent().hasClass("region-group")){h.addClass("active");
h.addClass("overflow-hidden");window.setTimeout(function(){h.removeClass("overflow-hidden")},400)}if(jvh.core.viewport==="mobile"){var u=h.data("level");
if(!l&&h.find("a.back").length===0){h.prepend('<li><a href="#" class="back">Back</a></li>');$("a.back",h).click(jvh.core.mainMenu.showMenu);
t.addClass("sub-menu-open")}if(u===1){t.removeClass("sub-menu-open")}else{t.addClass("sub-menu-open")
}var v=t.width();var f=-(v*(u-1))+"px";d.css("margin-left",f);$("div.menu",t).scrollTop(0);var g=h.closest("li").find("> a").text();
if(g===""){g="Menu"}$("div.heading",t).text(g);if(u===3){a.parent("li").siblings().addClass("display-none")
}else{t.find("ul[data-level='2'] > li").removeClass("display-none")}}else{if(!a.parent().hasClass("region-group")){s.addClass("active")
}h.parentsUntil("ul.menu","li").addClass("active");jvh.core.mainMenu.navHighlightLine.repositionAtActiveItem();
jvh.core.mainMenu.repositionMenu();jvh.core.images.lazyLoad(a.parent("li"));jvh.core.tracking.trackAdobeEvent("menu-click",a.text(),"Horizontal Menu Click")
}}}},closeMenu:function(){var e=$("body");var a=document.querySelector("meta[name=viewport]");var t=jvh.core.mainMenu.mainNav;
var r=$("div.menu",t);if(a.getAttribute("original")){a.setAttribute("content",a.getAttribute("original"))
}document.body.removeEventListener("touchmove",jvh.core.mainMenu.disableBodyScrolling,false);$("html").unbind("click");
e.removeClass("menu-open");jvh.core.mainMenu.active=false;r.find("ul[data-level='2'] > li").removeClass("display-none");
r.find("ul, li").removeClass("active");r.css("margin-left",0);if(t&&t!==null){t.removeClass("sub-menu-open");
$("ul.menu > li > ul",t).css("left","").removeClass("align-to-right");$(".highlight-line",t).removeClass("active")
}$("a.back",r).parent("li").remove();jvh.core.tracking.trackEvent("Header","Menu","Close");window.setTimeout(function(){r.css("overflow-y","visible")
},500)},repositionMenu:function(){if(jvh.core.viewport!=="mobile"){var e=jvh.core.mainMenu.mainNav;var a=$("ul.menu > li",e);
var t=$("> ul.active",a);var r=t.parent("li").children("a");if(t.length>0){var o=$(window).width();t.css("left","");
t.removeClass("align-to-right");if(t.outerWidth()+a.last().offset().left>o){if(t.parent().index()!==0&&t.parent().index()+1<a.length){var n=a.first().offset().left-r.offset().left;
var i=a.last().offset().left+a.last().outerWidth()-a.first().offset().left;var s=n+(i-t.outerWidth())/2;
t.css("left",s+"px")}else if(t.parent().index()+1===a.length){t.addClass("align-to-right")}}}jvh.core.mainMenu.navHighlightLine.repositionAtActiveItem()
}},toggleMenu:function(){var e=$("body"),a=$(window).scrollTop(),t=false,r=$(".search").not(".not-dockable");
if(a>jvh.core.searchBarPositionTop&&jvh.core.viewport!=="mobile"&&$(window).height()>670){if(a>jvh.core.previousScroll&&!e.hasClass("menu-open")){if(!e.hasClass("section-toggle-open")&&!e.hasClass("accom")){e.removeClass("show-menu")
}jvh.searchbar.toggleSearchbarVillaOnly();r.addClass("fixed");t=true}if(jvh.searchbar.tabView){$(".search").removeClass("tab-view");
$(".button-nav-bar").hide()}}else{if(jvh.core.showMenu){e.addClass("show-menu");r.removeClass("fixed");
jvh.searchbar.hidePackageDropdown();t=true}if(jvh.searchbar.tabView&&jvh.core.viewport!=="mobile"){if(jvh.searchbar.isVillaOnly){jvh.searchbar.setVillaOnlyTabView()
}else{jvh.searchbar.setVillaAndFlightTabView()}$(".search").addClass("tab-view");$(".button-nav-bar").show()
}}if(jvh.core.viewport!=="mobile"&&jvh.core.mainMenu.active&&!jvh.core.isInView($(".menu li ul.active"))){jvh.core.mainMenu.closeMenu()
}if(a<jvh.core.searchBarPositionTop){e.addClass("at-top")}else{e.removeClass("at-top")}if(jvh.core.viewport!=="mobile"&&jvh.searchbar.criteria.airport==="-1"){$("#searchAirportsClose").click()
}$("span.back-to-top").toggleClass("display-none",jvh.core.scrollLastPosition<700);jvh.core.previousScroll=a;
return t},navHighlightLine:{init:function(){var e=jvh.core.mainMenu.mainNav;var a=$(".highlight-line",e);
jvh.core.mainMenu.navHighlightLine.setPosition($("ul.menu > li",e).first());$("nav.main ul.menu > li").hover(function(){if(jvh.core.viewport!=="mobile"){a.addClass("active");
var e=$(this);jvh.core.mainMenu.navHighlightLine.setPosition(e)}},function(){if(jvh.core.viewport!=="mobile"){var t=$("ul.menu > li.active",e);
if(t.length>0){jvh.core.mainMenu.navHighlightLine.repositionAtActiveItem()}else{a.removeClass("active")
}}})},setPosition:function(e){if(e.length>0){var a=$(".highlight-line",jvh.core.mainMenu.mainNav);var t=e.offset().left+20;
var r=e.outerWidth()-40;a.css("left",t).width(r)}},repositionAtActiveItem:function(){var e=$("ul.menu > li.active",jvh.core.mainMenu.mainNav);
if(e.length>0){jvh.core.mainMenu.navHighlightLine.setPosition(e)}}}},utilityNav:{init:function(){$(".utility-nav li:has(ul)").hover(function(){if(jvh.core.viewport!=="tablet"&&jvh.core.viewport!=="mobile"){$(this).addClass("active")
}},function(){if(jvh.core.viewport!=="tablet"&&jvh.core.viewport!=="mobile"){$(this).removeClass("active")
}}).click(function(){$(this).toggleClass("active")});$(".utility-nav .utility-nav-wrapper > ul").on("click","li > a",function(e){e.preventDefault();
if(!$(this).hasClass("dropdown")){var a=$(this);var t=a.closest("[data-track-label]").data("track-label");
var r=a.data("track-action")||a.text();jvh.core.tracking.trackAdobeEvent("utility-nav-click",r,t);jvh.core.tracking.trackOutbound(a.attr("href"),"Header",r,t)
}});var e=null;var a=null;if(jvh.core.localStorageSupported&&!!window.performance&&window.performance.navigation.type===2){if(jvh.core.localStorage.get("shortlistVillaCount")!==null){e=parseInt(jvh.core.localStorage.get("shortlistVillaCount"))
}if(jvh.core.localStorage.get("recentSearchCount")!==null){a=parseInt(jvh.core.localStorage.get("recentSearchCount"))
}}if(e!==null){jvh.core.utilityNav.setShortlistCount(e)}else if($("#headerShortlist").length>0){jvh.core.utilityNav.setShortlistCount(parseInt($("#headerShortlist").html()))
}if(a!==null){jvh.core.utilityNav.setRecentSearchCount(a)}else if($("#headerSearchHistory").length>0){var t=parseInt($("#headerSearchHistory").html());
if(jvh.core.localStorageSupported&&jvh.core.localStorage.get("recentSearchCount")!==null&&t>parseInt(jvh.core.localStorage.get("recentSearchCount"))&&parseInt(jvh.core.localStorage.get("recentSearchCount"))==1){var r='<h4 class="heading-extra-small">Added to your Recent Searches!</h4><p><a href="/account/search-history">View Recent Searches</a></p>';
jvh.core.notificationMessage.show(r,"main",1e3)}jvh.core.utilityNav.setRecentSearchCount(t)}},setShortlistCount:function(e){if(jvh.core.localStorageSupported){jvh.core.localStorage.set("shortlistVillaCount",e)
}$("#headerShortlist").html(e).toggleClass("active",e>0);var a=parseInt(e)+parseInt($("#headerSearchHistory").html());
$("#utilityTotalCount").html(a).toggleClass("active",a>0)},setRecentSearchCount:function(e){if(jvh.core.localStorageSupported){jvh.core.localStorage.set("recentSearchCount",e)
}$("#headerSearchHistory").html(e).toggleClass("active",e>0);var a=parseInt(e)+parseInt($("#headerShortlist").html());
$("#utilityTotalCount").html(a).toggleClass("active",a>0)},adjustHoverOnBookingPage:function(){const e=document.querySelector(".utility-nav .account-section");
const a=e.getElementsByTagName("li");Array.from(a).filter(function(e){const a=e.childNodes[0].innerHTML;
return a==="Search History"||a==="Shortlist"}).forEach(function(e){e.remove()});e&&e.addEventListener("mouseenter",function(){e.classList.add("active")
});e&&e.addEventListener("mouseleave",function(){e.classList.remove("active")})}},customerPopups:{items:["villas4you","international","cookie-2020"],init:function(){if(jvh.core.localStorageSupported){jvh.core.promotions.promotionList=jvh.data.promotionsList||[];
var e=this;var a=false;for(var t=0;t<e.items.length;t++){var r=$("[data-customer-popup='"+e.items[t]+"']");
if(r.length>0){var o=jvh.core.localStorage.get("customerPopup-"+e.items[t]);if(!a&&!o){e.show(e.items[t],r,true);
a=true}else{r.hide()}}}}},show:function(e,a,t){window.setTimeout(function(){if($("#modalContainer.modal-active").length==0&&(!$("body").hasClass("search-open")||$("body").hasClass("search-opened-automatically"))){$("body").removeClass("search-opened-automatically");
if(e=="international"){if(typeof navigator.language!="undefined"&&(navigator.language.indexOf("en-")==-1||navigator.language=="en-IE")){jvh.core.showModal(a.clone(false),false);
jvh.core.customerPopups.popupSeen(a,e,t);jvh.core.tracking.trackEvent("Non UK Visitor Modal","Prompt shown");
a.find("a").click(function(e){e.preventDefault();jvh.core.tracking.trackOutbound(this.href,"Non UK Visitor Modal","Visit website")
})}else{jvh.core.customerPopups.popupSeen(a,e,t)}}else{a.addClass("show");a.find("button").click(function(){jvh.core.customerPopups.popupSeen(a,e,t)
})}}},3e3)},popupSeen:function(e,a,t){if(jvh.core.localStorageSupported){jvh.core.localStorage.set("customerPopup-"+a,t);
e.removeClass("show");window.setTimeout(function(){e.remove()},300)}}},postcodeLookup:{init:function(){$("#btnFindAddr").click(function(e){e.preventDefault();
if(jvh.booking&&jvh.booking.passengers&&jvh.booking.passengers.isTestDesignActive){$(".manual-inputs + div").slideUp();
$(".manual-inputs").show();$(".enter-address-manually").show()}jvh.core.postcodeLookup.findAddresses("client")
});$("#addressPostcode").keypress(function(e){jvh.core.postcodeLookup.submitFindAddresses(e,"client")
}).change(function(e){jvh.core.validation.validateFields($("#addressPostcode"),true,true)});$("#addressLookup").change(function(e){jvh.core.postcodeLookup.findAddress($("#addressLookup").val(),"client")
});$("#addressCountry").change(function(e){jvh.core.postcodeLookup.switchAddressCountry($(this).val())
});if(jvh.core.settings.channel.id!==25){var e=$(".manual-inputs + div").hide();$(".manual-inputs-link").on("click",function(a){if(jvh.booking&&jvh.booking.passengers&&jvh.booking.passengers.isTestDesignActive){jvh.core.postcodeLookup.rearrangeAddresInputs();
$("#postcodeOnlyWrapper").hide();$("#postcodeWrapper").hide()}e.slideDown();$(".manual-inputs").hide();
$("#selectedAddress").removeClass("active");jvh.core.tracking.trackEvent("Booking Process - Passengers Page","Displays manual address inputs")
})}},submitFindAddresses:function(e){var a;if(window.event){a=window.event.keyCode}else if(e){a=e.which
}if(a==13){jvh.core.postcodeLookup.findAddresses();e.preventDefault();return false}return true},postCodeLookups:new Array,postKeyLookups:new Array,findAddresses:function(e,a){var t=new Object;
var r="#addressPostcode";t.postcode=$("#addressPostcode").val();const o=$("#addressProperty").val();if(t.postcode.length==0){$(r).addClass("paxfieldError").focus();
return false}else{$(r).removeClass("paxfieldError");var n=t.postcode.replace(" ","").toUpperCase();if(typeof jvh.core.postcodeLookup.postCodeLookups[n]!="undefined"){jvh.core.postcodeLookup.processPostCodeLookup(jvh.core.postcodeLookup.postCodeLookups[n],n,o)
}else{a&&a(true);$.post("/booking/ajax/addressListLookup.ajax",t,function(t){jvh.core.postcodeLookup.processPostCodeLookup(t,n,o);
if(typeof e==="function"){a&&a(false);e()}},"json")}}},processPostCodeLookup:function(e,a,t){var r="#addressLookup";
var o="#addressLookup option";var n="#addressLookupBox";var i=e.length;var s="PostcodeOnly";$(o).remove();
if(e.length==0){jvh.core.postcodeLookup.addressNotFound();$(n).hide()}else if(e.length==1&&!jvh.directDebit){$("#addressLookupNotFound").removeClass("active");
jvh.core.postcodeLookup.findAddress(e[0].postkey);if(jvh.booking){jvh.core.tracking.trackAdobeEvent("Passenger-Details","Adult [0]","House or Postcode Searched")
}}else{$("#addressLookupNotFound").removeClass("active");if(jvh.core.viewport=="tablet"||jvh.core.viewport=="mobile"){$(r).append('<option value="-1" selected="selected">Select address</option>')
}var l=-1;if(t){var c=/^\d+$/.test(t);var d;var h=0;$.each(e,function(e,a){var r=function(){const e=t.toUpperCase();
return!c&&a.addressLine.toUpperCase().indexOf(e)>-1};var o=function(){var e=false;const r=/\d+/;const o=/\d+-\d+/;
if(c){if(a.addressLine.match(r)&&a.addressLine.match(r)[0]===t){e=true}var n=a.addressLine.match(o);if(n){var i=parseInt(n[0].split("-",2)[0]);
var s=parseInt(n[0].split("-",2)[1]);if(parseInt(t)>=i&&parseInt(t)<=s){e=true}}}return e};if(o()||r()){h+=1;
d=e;if(h>1){return false}}});if(h===1){l=d}s="Both"}$.each(e,function(e,a){$(r).append('<option value="'+a.postkey+'">'+a.addressLine+"</option>")
});$(n).slideDown();if(jvh.booking&&jvh.booking.passengers&&jvh.booking.passengers.isTestDesignActive){$(".house-name").hide();
$("#postcodeOnlyWrapper").hide();$("#btnFindAddr").hide()}$(".enter-different-postcode").show();size=e.length>7?7:e.length;
$(r).attr("size",size);if(jvh.booking){jvh.core.tracking.trackAdobeEvent("Passenger-Details","Adult [0]","House or Postcode Searched")
}}digitalData.page.interactions={};digitalData.page.interactions.addressSearch=s;digitalData.page.interactions.addressSearchResults=i;
jvh.core.postcodeLookup.postCodeLookups[a]=e},findAddress:function(e){var a=new Object;a.postkey=e;if(typeof jvh.core.postcodeLookup.postKeyLookups[e]!="undefined"){jvh.core.postcodeLookup.processPostKeyLookup(jvh.core.postcodeLookup.postKeyLookups[e],e)
}else{$.ajax({type:"POST",url:"/booking/ajax/addressPostkeyLookup.ajax",data:a,dataType:"json",success:function(a){jvh.core.postcodeLookup.processPostKeyLookup(a,e)
},error:function(){var e="#addressLookupBox";jvh.core.postcodeLookup.addressNotFound();$(e).hide()}})
}},addressNotFound:function(){$("#addressLookupNotFound").text("Your address could not be found. Please try again or enter your address manually.").addClass("active")
},processPostKeyLookup:function(e,a){$("#addressPostkey").val(a);$("#addressProperty").val(e.property);
$("#addressStreet").val(e.street);$("#addressLocality").val(e.locality);$("#addressTown").val(e.town);
$("#addressCounty").val(e.county);$("#addressPostcode").val(e.postcode);$("#addressCensationCode").val(e.censationCode);
$("#addressTvRegion").val(e.tvRegion);$("#addressConstituency").val(e.constituency);$("#addressNhsRegionCode").val(e.nhsRegionCode);
$("#addressLatitude").val(e.latitude);$("#addressLongitude").val(e.longitude);$("#addressLookupBox").slideUp();
if(jvh.directDebit!==undefined&&$("#direct-debit #customer-details-btn").length){jvh.directDebit.removeButtonDisabled()
}jvh.core.postcodeLookup.validateAddress();jvh.core.postcodeLookup.postKeyLookups[a]=e;if($(".manual-inputs + div").is(":hidden")){var t=function(e){if(typeof e!=="undefined"&&e.length>0){return"<li>"+e+"</li>"
}return""};var r=$("#selectedAddress");var o=r.find("ul");var n=t(e.property)+t(e.street)+t(e.locality)+t(e.town)+t(e.county)+t(e.postcode);
o.html(n);r.addClass("active")}if(jvh.booking&&jvh.booking.passengers&&jvh.booking.passengers.isTestDesignActive){jvh.core.postcodeLookup.toggleLookupFieldsWhenSelectedAddress()
}},toggleLookupFieldsWhenSelectedAddress:function(){jvh.core.postcodeLookup.rearrangeAddresInputs();$("#postcodeOnlyWrapper").hide();
$("#postcodeWrapper").hide();$("#btnFindAddr").hide();$(".enter-address-manually").hide();if($(".manual-inputs + div").is(":hidden")){$(".edit-address").show()
}},rearrangeAddresInputs:function(){const e=$("#postcodeLookupWrapper > label");const a=$(".house-name > label");
const t=$("#addressCounty").parent().parent();const r=$("#addressStreet").parent().parent();e.insertAfter(t);
a.insertBefore(r)},validateAddress:function(){jvh.core.validation.validateForm($("#addressPostcode, #addressStreet, #addressTown"))
},switchAddressCountry:function(e){$("#postcodeOnlyWrapper").toggleClass("active",e!=25);$("#postcodeWrapper").toggleClass("active",e!=9);
if(e!=9){$("#btnFindAddr").hide();$("#addressPostcode, #addressPostkey").val("")}else{$("#btnFindAddr").show()
}}},validation:{submitAttempted:false,isFormValidationSuccessful:true,formErrorMessage:"Please complete the required fields.",regex:{email:/^[A-Z0-9]([0-9A-Z_\.\/\|`\-\+])*@[A-Z0-9.-]+\.[A-Z]{2,}$/i,phone:/^([\d \+\(\)-\.]|ext){6,15}$/i,name:/^[a-z'-\s\u00C0-\u017F\u2018\u2019\u201C\u201D\u2014]+$/i},init:function(e){$("input, select, textarea",e).each(function(){var e=$(this);
var a=function(){var e=$(this).attr("type")=="checkbox"||$(this).attr("type")=="radio";if(jvh.core.validation.submitAttempted||!e&&jvh.core.validation.validate.entered($(this).val())){jvh.core.validation.validateFields($(this),true,true)
}else{jvh.core.validation.manageFieldErrorMessage($(this),true,true)}};if(e.is("input[type=checkbox]")||e.is("input[type=radio]")){e.change(a)
}else{e.blur(a)}e.focus(function(){jvh.core.validation.manageFieldErrorMessage($(this),true,true)})});
$("<span />",{"class":"error",html:"Required"}).prependTo($("fieldset.check-group-container"));$("input, select, textarea",e).each(function(){var e=$(this);
var a;var t=false;if(e.attr("name")){a=e.attr("name").toLowerCase()}else{a="noname"}if(a.replace("holiday","").indexOf("day")>-1||a.indexOf("month")>-1||a.indexOf("year")>-1){t=true
}if($(this).parent("div[class*='-replacement']").length>0&&$(this).parent("div.check-replacement").length==0&&$(this).parent("div.radio-replacement").length==0&&!t){$("<span />",{"class":"error",html:"Required"}).prependTo($(this).parent("div[class*='-replacement']"))
}if($(this).hasClass("server-error")){jvh.core.validation.manageFieldErrorMessage($(this),true,false)
}})},validateForm:function(e,a,t,r){jvh.core.validation.submitAttempted=true;jvh.core.validation.isFormValidationSuccessful=true;
var o=$("input, select, textarea",e);if(typeof t==="undefined"||!t){const n=r?":not(:disabled)":"";o=o.filter(n+":visible, .force-validation")
}jvh.core.validation.validateFields(o,false,true);jvh.core.validation.manageFormErrorMessage(e,jvh.core.validation.formErrorMessage);
if(typeof a!=="undefined"&&a&&!jvh.core.validation.isFormValidationSuccessful){jvh.core.validation.highlightFormError(false)
}return jvh.core.validation.isFormValidationSuccessful},validateFields:function(e,a,t){jvh.core.validation.errors=[];
var r=true;var o=true;var n=false;e.each(function(){var e=$(this);var i;if(e.attr("type")){i=e.attr("type")
}else{i="other"}var s;var l=false;var c=false;if(i=="checkbox"&&e.closest("fieldset.check-group-container").length){s=e.closest("fieldset.check-group-container").hasClass("mandatory");
c=true}else{s=e.hasClass("mandatory");l=e.hasClass("zero-allowed")}var d=e.val()?e.val().trim():null;
var h;if(e.attr("name")){h=e.attr("name")}else{h="noname"}var u=jvh.core.validation.validate.entered(d,l);
var v=u||!s;if(t){jvh.core.validation.manageFieldErrorMessage(e,v)}if(u&&v){var f=null;var g=null;if(i=="password"||h.indexOf("password")>-1){f=jvh.core.validation.validate.password
}else if(i=="email"){f=jvh.core.validation.validate.email;g=jvh.core.validation.formatType.email}else if(i=="tel"){f=jvh.core.validation.validate.phone;
g=jvh.core.validation.formatType.trim}else if(i=="checkbox"&&c){f=jvh.core.validation.validate.checkGroup
}else if(i=="radio"||i=="checkbox"){f=jvh.core.validation.validate.checked}else if(h.toLowerCase().indexOf("holidayref")>-1){f=jvh.core.validation.validate.holidayRef
}else if(h.toLowerCase().indexOf("firstname")>-1||h.toLowerCase().indexOf("surname")>-1){f=jvh.core.validation.validate.name;
g=jvh.core.validation.formatType.name}else if(h.toLowerCase().indexOf("postcode")>-1){f=jvh.core.validation.validate.postcode;
g=jvh.core.validation.formatType.postcode}else if(h.toLowerCase().replace("holiday","").indexOf("day")>-1){f=jvh.core.validation.validate.day;
g=jvh.core.validation.formatType.datePart}else if(h.toLowerCase().indexOf("month")>-1){f=jvh.core.validation.validate.month;
g=jvh.core.validation.formatType.datePart}else if(h.toLowerCase().indexOf("year")>-1){f=jvh.core.validation.validate.year
}if(f){if(i=="radio"||i=="checkbox"){v=f(h)||!s}else{var p=f(d);if(i==="email"||i==="password"){v=p.success
}else{v=p}v=v||!s&&!u}if((i==="email"||i==="password")&&!v&&o){jvh.core.validation.formErrorMessage=p.message;
o=false}if(v&&g&&a){g(e)}if(t){jvh.core.validation.manageFieldErrorMessage(e,true,v)}}else{jvh.core.validation.manageFieldErrorMessage(e,true,true)
}}else if(!s&&!u){if(t){jvh.core.validation.manageFieldErrorMessage(e,true,true)}}else if(!u){jvh.core.validation.formErrorMessage="The entered value is not valid";
o=false}if(!v){r=false}else{var m=jvh.core.validation.validate.forbiddenValues(d);if(m){r=false;n=true;
jvh.core.validation.manageFieldErrorMessage(e,true,r,m)}}});if(!r&&o){jvh.core.validation.formErrorMessage="Please complete the required fields.";
if(n){jvh.core.validation.formErrorMessage="You have used some invalid characters. Please, delete them and try again."
}}if(r){var i=false;e.each(function(){var e=$(this);var a;var o=e.hasClass("mandatory");if(e.attr("name")){a=e.attr("name")
}else{a="noname"}if(a.toLowerCase().indexOf("year")>-1){if(e.closest("ul.date-input.dropdowns").length>0){return
}else{var n=$('input[name="'+a.replace("Year","Day")+'"]',e.closest("form"));var s=$('input[name="'+a.replace("Year","Month")+'"]',e.closest("form"));
var l=n.val();var c=s.val();var d=e.val();if(jvh.core.validation.validate.day(l)&&jvh.core.validation.validate.month(c)&&jvh.core.validation.validate.year(d)){i=jvh.core.validation.validate.date(l,c,d);
var h=new Date;if(e.hasClass("future-date")){i=jvh.core.validation.validate.futureDate(l,c,d,h)}if(e.hasClass("past-date")){i=jvh.core.validation.validate.pastDate(l,c,d,h)
}}else if(!o&&!jvh.core.validation.validate.entered(l)&&!jvh.core.validation.validate.entered(c)&&!jvh.core.validation.validate.entered(d)){i=true
}if(!i){r=false}if(t){jvh.core.validation.manageFieldErrorMessage(n.add(s).add(e),true,i)}}}})}jvh.core.validation.isFormValidationSuccessful=r
},manageFormErrorMessage:function(e,a,t){var r=$(".new-message.error:not(.secondary)",e);if((!jvh.core.validation.isFormValidationSuccessful||t)&&a){if(r.length>0){r.first().html(a).addClass("active")
}else{var o=$(".message-area");var n=$('<div class="new-message error active">'+a+"</div>");n.prependTo(o.length>0?o:e)
}}else{r.first().html(a).removeClass("active")}},manageFieldErrorMessage:function(e,a,t,r){if(e.attr("type")){fieldType=e.attr("type")
}else{fieldType="other"}var o=e.hasClass("mandatory");if(fieldType=="checkbox"&&e.closest("fieldset.check-group-container").length){var n=e.closest("fieldset.check-group-container");
o=n.hasClass("mandatory");if(!t&&o){n.addClass("error")}else{n.removeClass("error")}}else if(fieldType=="radio"||fieldType=="checkbox"){if(!t&&o){$('input[name="'+e.attr("name")+'"]').closest("label").addClass("error")
}else{$('input[name="'+e.attr("name")+'"]').closest("label").removeClass("error")}}else{if(!a){e.parent("div").addClass("error");
e.parent("div").children("span.error").html("Required")}else if(!t){e.parent("div").addClass("error");
e.parent("div").children("span.error").html("Please check");if(r){e.parent("div").addClass("error");e.parent("div").children("span.error").html("Invalid")
}}else{e.parent("div").removeClass("error")}}},highlightFormError:function(e){$(".highlight-field-error").removeClass("highlight-field-error");
$(".error:visible:not(.message):not(.new-message)").first().addClass("highlight-field-error");if(e){callBack=function(){var e=200;
var a=$(".highlight-field-error").closest(".collapsible-section:not(.expand)");if(a.length>0){jvh.core.collapsibleSection.manageClickEvent(a.find("> h2"),true);
e=jvh.core.collapsibleSection.expandTime+10}window.setTimeout(function(){jvh.core.goToAnchor("highlight-field-error",null,null,75)
},e)};return callBack}else{jvh.core.goToAnchor("highlight-field-error",null,null,75)}},validate:{entered:function(e,a){var a=typeof a==="undefined"?true:a;
return!(e==null||e==""||e<0||e==0&&!a)},checked:function(e){return $('input[name="'+e+'"]').is(":checked")
},checkGroup:function(e){var a=$('input[name="'+e+'"]').closest("fieldset.check-group-container");var t=false;
a.find("input[type='checkbox']").each(function(){if($(this).is(":checked")){t=true}});return t},numeric:function(e){return!isNaN(e)
},positiveInteger:function(e){return jvh.core.validation.validate.numeric(e)&&e%1===0&&e>0},email:function(e){var a=false;
if(e.match(jvh.core.validation.regex.email)&&e.substr(-5)!=".couk"&&e.substr(-4)!=".con"&&!e.match(/@(gogg?lemail|hotmil)\./)){a=true
}return{success:a,message:"Please enter a valid email address"}},phone:function(e){return e.match(jvh.core.validation.regex.phone)
},password:function(e){var a=false;if(e.length>5&&e.length<21){a=true}return{success:a,message:"Please enter a password between 6 and 20 characters long"}
},holidayRef:function(e){return jvh.core.validation.validate.positiveInteger(e)&&e.toString().length==7
},name:function(e){return e.length>1&&e.match(jvh.core.validation.regex.name)},postcode:function(e){return e.replace(/\s/g,"").length>=5
},day:function(e){if(jvh.core.validation.validate.checkObfuscation(e)){return true}return jvh.core.validation.validate.positiveInteger(e)&&Number(e)<=31
},month:function(e){if(jvh.core.validation.validate.checkObfuscation(e)){return true}return jvh.core.validation.validate.positiveInteger(e)&&Number(e)<=12
},year:function(e){return jvh.core.validation.validate.positiveInteger(e)&&Number(e)>1900&&Number(e)<2100
},date:function(e,a,t){var r=jvh.core.validation.validate.day(e)&&jvh.core.validation.validate.month(a)&&jvh.core.validation.validate.year(t);
var o=jvh.core.validation.validate.checkObfuscation(e)&&jvh.core.validation.validate.checkObfuscation(a);
if(o){return true}if(r){var n;try{n=new Date(t,a-1,e)}catch(i){console.log("Date invalid:"+i.message)
}return n&&n.getFullYear()==t&&n.getMonth()==a-1&&n.getDate()==e}else{return false}},futureDate:function(e,a,t,r){var o=jvh.core.validation.validate.checkObfuscation(e)&&jvh.core.validation.validate.checkObfuscation(a);
if(o){if(!jvh.core.validation.validate.checkObfuscation(t)){return t>=r.getFullYear()}return true}var n=new Date(t,a-1,e);
return n.getTime()>r.getTime()},pastDate:function(e,a,t,r){var o=jvh.core.validation.validate.checkObfuscation(e)&&jvh.core.validation.validate.checkObfuscation(a);
if(o){if(!jvh.core.validation.validate.checkObfuscation(t)){return t<=r.getFullYear()}return true}var n=new Date(t,a-1,e);
return n.getTime()<r.getTime()},age:function(e,a,t,r){var o=jvh.core.calculateAge(e,a);return o>=t&&o<=r
},checkObfuscation:function(e){if(e.substring(0,2)=="●●"){return true}else{return false}},forbiddenValues:function(e){var a=["javascript:|<script",'[\\s"]+on[a-z]+=',"<[\"']*[a-z]+[\\s/]","[\"'][\\s]*[/]?>","[\"'][\\s]*style=","(\\.\\.)","<<","</"];
for(var t=0;t<a.length;t++){var r=new RegExp(a[t],"gim");if(r.test(e)){return true}}return false}},formatType:{name:function(e){var a;
var t=e.val();if($(e).val()==e.val().toUpperCase()&&e.val()!=""){a=t.substr(0,1).toUpperCase()+t.substring(1,t.length).toLowerCase()
}else{a=t.substr(0,1).toUpperCase()+t.substring(1,t.length)}e.val($.trim(a))},postcode:function(e){e.val($.trim(e.val().toUpperCase()))
},trim:function(e){e.val($.trim(e.val()))},datePart:function(e){var a="00"+e.val();e.val(a.substr(a.length-2))
}}},calculateAge:function(e,a){var t=a.getFullYear()-e.getFullYear();if(a.getMonth()<e.getMonth()){t--
}if(e.getMonth()==a.getMonth()&&a.getDate()<e.getDate()){t--}return t},accomIcons:function(e){var a="";
a+='<li title="Sleeps '+e.maxOcc+'" class="sleeps"><span>Sleeps</span>'+e.maxOcc+"</li>";var t=e.bedrooms==1?"Bedroom":"Bedrooms";
var r=e.bathrooms==1?"Bathroom":"Bathrooms";var o=e.bedrooms+" "+t;var n=e.bathrooms+" "+r;a+='<li title="'+o+'"  class="beds"  >'+e.bedrooms+"<span>"+t+"</span></li>";
a+='<li title="'+n+'"  class="bath"  >'+e.bathrooms+"<span>"+r+"</span></li>";if(e.privatePool||e.sharedPool){var i="";
if(e.privatePool)i+="Private ";else i+="Shared ";if(e.heatedPool)i+="Heated ";a+='<li title="'+i+'Pool" class="p'+(e.heatedPool?1:0)+'" ><span>'+i+"<span>Pool</span></span></li>"
}if(e.ac==1){a+='<li title="Free A/C"  class="ac" ><span>Free A/C</span></li>'}if(e.car>=1&&e.car<=3){var s=["Optional","Advised","Essential"][e.car-1];
a+='<li title="Car '+s+'" class="cr"><span><span>Car </span>'+s+"</span></li>"}if(e.wifi&&e.wifi==1){a+='<li title="Free Wi-Fi" class="wifi"><span>Free Wi-Fi</span></li>'
}return'<ul class="icons">'+a+"</ul>"},checkAndLoadMissingDescription:function(e,a){if(e.desc===null||e.desc===""){jvh.core.fnCheckForDescription(e);
if(e.desc===null||e.desc===""){jvh.core.fnLoadAccomDescs(a)}}if(e.desc!==null){jvh.core.fillDescription(e.desc,a,e.id)
}},fnCheckForDescription:function(e){if(e.desc==null){if(jvh.core.localStorageSupported){var a=jvh.core.localStorage.get("villadesc"+e.id);
var t=new Date;if(a!==null){if(a){var r=a.indexOf(",");if(r>0&&r<20){var o=parseInt(a.substring(0,r));
if(o>t.getTime()-864e5){e.desc=a.substring(r+1);return}}else{e.desc=a;return}}}}jvh.core.accomDescRequests[jvh.core.accomDescRequests.length]=e;
jvh.core.accomDescRequestsTransit[jvh.core.accomDescRequestsTransit.length]=false;e.desc=""}},fillDescription:function(e,a,t){if(a.indexOf("?")>=0){$(a.replace("?",""+t)).html(e)
}else{$("#"+a+t+" p").html(e)}},loadingFnAccomDescs:null,fnLoadAccomDescs:function(e,a){if(!a){if(jvh.core.loadingFnAccomDescs!=null){window.clearTimeout(jvh.core.loadingFnAccomDescs);
jvh.core.loadingFnAccomDescs=null}jvh.core.loadingFnAccomDescs=window.setTimeout(function(){jvh.core.fnLoadAccomDescs(e,true)
},40);return}if(jvh.core.accomDescRequests.length>0){var t="";for(var r=0;r<jvh.core.accomDescRequests.length&&t.length<200;r++){if(!jvh.core.accomDescRequestsTransit[r]){if(r>0){t+=","
}t+=jvh.core.accomDescRequests[r].id;jvh.core.accomDescRequestsTransit[r]=true}}if(t.length>0&&t.substring(0,1)==","){t=t.substring(1)
}if(t.length>0){var o="/ajax/search/accomDescriptions?accomIds="+t;$.ajax({type:"GET",url:o,dataType:"json",cache:true,success:function(a){var t=new Date;
t=t.getTime();for(var r=0;r<a.descriptions.length;r++){var o=a.descriptions[r];if(o.v>0&&o.d!=null){for(var n=0;n<jvh.core.accomDescRequests.length;n++){var i=jvh.core.accomDescRequests[n];
if(i.id==o.v){i.desc=o.d;jvh.core.accomDescRequests[n]=jvh.core.accomDescRequests[jvh.core.accomDescRequests.length-1];
jvh.core.accomDescRequests.length=jvh.core.accomDescRequests.length-1;jvh.core.accomDescRequestsTransit[n]=jvh.core.accomDescRequestsTransit[jvh.core.accomDescRequestsTransit.length-1];
jvh.core.accomDescRequestsTransit.length=jvh.core.accomDescRequestsTransit.length-1;n--;if(jvh.core.localStorageSupported){jvh.core.localStorage.set("villadesc"+o.v,""+t+","+o.d)
}jvh.core.fillDescription(i.desc,e,i.id)}}}}if(jvh.core.accomDescRequests.length>0){jvh.core.fnLoadAccomDescs(e)
}},error:function(e,a,t){console.log(e);console.log(a);console.log(t)}})}}},gallery:{self:null,galleryInitiated:false,galleryOpen:false,images:[],tags:[],currentImage:0,currentGallery:null,active:false,slideshowTimer:null,loading:false,cycleCount:1,init:function(){var e=jvh.core.gallery;
var a;e.postInit=function(){if(!jvh.core.gallery.galleryInitiated){$("#galleryViewer .close").click(e.fnCloseGallery);
$("#galleryViewer .slideshow").click(e.fnPlaySlideshow);jvh.core.gallery.galleryInitiated=true}};e.fnManageKeyboardShortcuts=function(a){var t=$("#galleryViewer .slide-panel");
if(a.keyCode==27){e.fnCloseGallery();jvh.core.tracking.trackEvent(jvh.core.trackingType,"Gallery Esc Key Pressed","Gallery Viewer")
}else if(a.keyCode===37){t.trigger("prev.owl.carousel");jvh.core.owlCarousel.updateIndex(t);jvh.core.tracking.trackEvent(jvh.core.trackingType,"Gallery Left Key Pressed","Gallery Viewer")
}else if(a.keyCode===39){t.trigger("next.owl.carousel");jvh.core.owlCarousel.updateIndex(t);jvh.core.tracking.trackEvent(jvh.core.trackingType,"Gallery Right Key Pressed","Gallery Viewer")
}};e.fnCloseGallery=function(){jvh.core.gallery.loading=false;var t=$("#galleryViewer .slide-panel");
var r=$("#galleryViewer .thumb-panel");var o=t.find(".owl-item.active").index();var n=t.find(".owl-item").length;
var i=jvh.core.gallery.tags[o];var s=$("button.slideshow").hasClass("playing");jvh.core.gallery.stopSlideshow();
$("#galleryViewer").removeClass("show");window.setTimeout(function(){$("#galleryViewer").hide();jvh.core.owlCarousel.destroyOwlCarousel(t);
if(r.length>0){jvh.core.owlCarousel.destroyOwlCarousel(r)}},1e3);galleryOpen=false;e.active=false;document.removeEventListener("keyup",e.fnManageKeyboardShortcuts);
jvh.core.tracking.trackEvent(jvh.core.trackingType,"Accommodation - Closed","Gallery Viewer");if(s){jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Closed","Closed Gallery Image - "+i+" - ["+e.cycleCount+"] "+(o+1)+"/"+n+" - "+jvh.core.gallery.currentGallery.villaID)
}else{jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Closed","Closed Gallery Image - "+i+" - "+(o+1)+"/"+n+" - "+jvh.core.gallery.currentGallery.villaID)
}jvh.core.removeModalScrollFixing()};e.fnPlaySlideshow=function(t){t.preventDefault();clearTimeout(jvh.core.gallery.slideshowTimer);
var r=$(this);var o=$("#galleryViewer .slide-panel");var n=o.find(".owl-item.active").index();var i=o.find(".owl-item").length;
var s=jvh.core.gallery.tags[n];if(r.hasClass("playing")){jvh.core.gallery.stopSlideshow();jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Slide Show","Stopped Image - "+s+" - ["+e.cycleCount+"] "+(n+1)+"/"+i+" - "+jvh.core.gallery.currentGallery.villaID)
}else{r.addClass("playing");r.text("Stop slideshow");var l=function(){if(r.hasClass("playing")){if(o.find(".owl-item.active").index()===i-1){jvh.core.owlCarousel.jumpToItem(o,0,200);
e.cycleCount++}else{o.trigger("next.owl.carousel");jvh.core.owlCarousel.updateIndex(o)}n=o.find(".owl-item.active").index();
s=jvh.core.gallery.tags[n];jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Slide Show","Active Image - "+s+" - ["+e.cycleCount+"] "+(n+1)+"/"+i+" - "+jvh.core.gallery.currentGallery.villaID);
jvh.core.gallery.slideshowTimer=window.setTimeout(l,2500)}};jvh.core.gallery.slideshowTimer=window.setTimeout(l,2500);
jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Slide Show","Started Image - "+s+" - ["+e.cycleCount+"] "+(n+1)+"/"+i+" - "+jvh.core.gallery.currentGallery.villaID)
}jvh.core.tracking.trackEvent(jvh.core.trackingType,"View slide show clicked","Gallery Viewer")};e.stopSlideshow=function(){clearTimeout(jvh.core.gallery.slideshowTimer);
$("#galleryViewer .slideshow").removeClass("playing").text("Play slideshow")};e.fnLoadAndShowVillaGallery=function(a){e.event=window.event;
var t=function(e){jvh.core.gallery.fnShowVillaGallery({images:e.gallery,tags:e.galleryTags,lowResImages:e.lowResImages,villaID:e.accomId})
};var r=function(e,a,t){jvh.core.showModal("<section class='modal-error'><h2>Error</h2>We are really sorry, there seems to be a problem loading the villa photos.</section>")
};e.fnLoadVillaGallery(a,t,r)};e.fnLoadVillaGallery=function(e,a,t){var r="/ajax/search/accom?accomId="+e+"&lookupFlights=false";
$.ajax({type:"GET",url:r,dataType:"json",cache:true,success:a,error:t})};e.fnReplaceThumbsUrl=function(e,a){if(!a){return e.replace("_14.jpg","_3.jpg").replace("_12.jpg","_3.jpg").replace("_15.jpg","_2.jpg").replace("_13.jpg","_2.jpg")
}else{return e.replace("_14.jpg","_1.jpg").replace("_12.jpg","_1.jpg").replace("_15.jpg","_1.jpg").replace("_13.jpg","_1.jpg")
}};e.fnReplaceMobileUrl=function(e){return e.replace("_14.jpg","_1.jpg").replace("_12.jpg","_1.jpg").replace("_15.jpg","_2.jpg").replace("_13.jpg","_2.jpg")
};e.fnShowVillaGallery=function(a){a.thumbs=e.fnReplaceThumbsUrl;a.mobile=e.fnReplaceMobileUrl;a.maxWidth=1600;
for(var t=0;t<a.images.length;t++){if(a.lowResImages){a.images[t]=a.images[t].replace("_1.jpg","_12.jpg");
a.images[t]=a.images[t].replace("_2.jpg","_13.jpg")}else{a.images[t]=a.images[t].replace("_1.jpg","_14.jpg");
a.images[t]=a.images[t].replace("_2.jpg","_15.jpg")}}jvh.core.gallery.fnShowGallery(a)};e.fnShowGallery=function(a){if(jvh.core.gallery.loading){return
}else{jvh.core.gallery.loading=true;window.setTimeout(function(){jvh.core.gallery.loading=false},5e3)
}if(!a.thumbs){a.thumbs=function(e){return e}}if(!a.mobile){a.mobile=function(e){return e}}jvh.core.gallery.self=jvh.core.gallery;
jvh.core.gallery.currentGallery=a;var t=$("#galleryViewer");t.show();window.setTimeout(function(){t.addClass("show")
},10);jvh.core.gallery.fnSetUpCurrentGallery();galleryOpen=true;document.addEventListener("keyup",e.fnManageKeyboardShortcuts);
jvh.core.fixModalScrolling()};e.fnSetUpCurrentGallery=function(){if(e.currentGallery==null){return}e.active=true;
var t=e.currentGallery.images;var r=e.currentGallery.tags;e.images=t;if(jvh.core.trackingType==="Accommodation"){a="Accommodation "
}else{a="Product Results "}if(r==null||r.length==0){r=[];for(var o=0;o<t.length;o++){r[o]=null}}e.tags=r;
e.currentImage=0;var n="";var i=t[0];if(jvh.core.viewport=="mobile"){i=e.currentGallery.mobile(t[0])}n+='<li class="gallery-image-0" style="background-image:url(\''+jvh.core.settings.imageDomain+i+"');\"></li>";
for(var o=1;o<t.length;o++){var s=t[o];if(jvh.core.viewport==="mobile"){s=e.currentGallery.mobile(t[o])
}n+='<li class="gallery-image-'+o+'"></li>'}var l=$("#galleryViewer .slide-panel");l.removeClass("owl-hidden");
l.html(n);l.owlCarousel({items:1,loop:false,nav:true,dots:false,navText:["",""],autoWidth:false,onInitialized:function(e){window.setTimeout(function(){jvh.core.owlCarousel.updateIndex(l);
l.trigger("refresh.owl.carousel")},50)}});if(e.currentGallery.thumbs!=null){n="";for(var o=0;o<t.length;o++){n+='<li><img src="'+jvh.core.settings.imageDomain+e.currentGallery.thumbs(t[o])+'"';
if(r[o]!==null){n+=' alt="Thumbnail '+r[o]+'"'}n+=' onload="jvh.core.gallery.fnLoadImage(this, '+o+');" /></li>'
}var c=$("#galleryViewer .thumb-panel");c.removeClass("owl-hidden");c.html(n);c.owlCarousel({items:9,loop:false,nav:true,dots:false,navText:["",""],autoWidth:false,responsive:{0:{items:3},768:{items:5},1140:{items:7},1400:{items:9}}});
c.find("img").click(function(){var e=$(this).closest(".owl-item").index();jvh.core.owlCarousel.jumpToItem(l,e,200);
jvh.core.tracking.trackAdobeEvent("Gallery",a+"- Thumbnail","Viewed Image - "+jvh.core.gallery.tags[e]+" - "+(e+1)+"/"+jvh.core.gallery.tags.length+" - "+jvh.core.gallery.currentGallery.villaID);
jvh.core.tracking.trackEvent(jvh.core.trackingType,"Thumbnail "+(e+1)+" clicked","Gallery Viewer")});
l.on("changed.owl.carousel",function(a){window.setTimeout(function(){var a=l.find(".owl-item.active").index();
for(var o=0;o<t.length;o++){var n=t[o];var i=e.currentGallery.mobile(t[o]);if(jvh.core.viewport==="mobile"){n=i
}var s=$("#galleryViewer .gallery-image-"+o);if(o>=a-1&&o<=a+1){s.css("background-image","url('"+jvh.core.settings.imageDomain+n+"')")
}else if(n!==i){s.css("background-image","url('"+jvh.core.settings.imageDomain+i+"')")}else{s.css("background-image","none")
}}jvh.core.owlCarousel.jumpToItem(c,a,200);c.find("img").removeClass("selected");$(c.find("img")[a]).addClass("selected");
var d=$("#galleryViewer .tag");d.html("");var h=r[a];if(h!==null){d.html(h)}},50)});var d=l.find(".owl-item.active").index();
var h="Gallery";if(a==="Product Results "){h+="-Open"}jvh.core.tracking.trackAdobeEvent(h,a+"- Open","Viewed Image - "+jvh.core.gallery.tags[d]+" - "+(d+1)+"/"+l.find(".owl-item").length+" - "+jvh.core.gallery.currentGallery.villaID)
}else{$("#galleryViewer .thumb-panel").hide()}};e.fnLoadImage=function(e,a){var t=$("#galleryViewer .gallery-image-"+a);
var r=$(e);if(r.width()<r.height()){t.css("background-size","contain")}};e.postInit()}},waitingFor:{},waitForTrigger:function(e,a,t,r){if(a=="undefined"){if(typeof jvh.core.waitingFor[t]=="undefined"){$(document).on(e,r);
jvh.core.waitingFor[t]=1}}else{r()}},displayCountdowns:function(){var e=$("ul.countdown");if(e.length>0){e.each(function(e,a){var t=$(a);
var r=t.data("holiday-start")||t.data("end-date");var o=function(e){return e};if(false||t.data("lead-zero")){o=function(e){if(e<10)return"0"+e;
else return e}}var n=new Date(r);var i=new Date;var s=n.getTime()-i.getTime();var l=Math.floor(s/864e5);
if(t.data("short-text")==true){var c={day:"day",days:"days",hour:"hr",hours:"hrs",minute:"min",minutes:"mins",second:"sec",seconds:"secs"}
}else{var c={day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds"}
}var d=true;if(t.data("hide-zeros")==true){d=false}if(l>-1){var h=new Date(s-l*864e5);var u="";var v=h.getHours();
var f=h.getMinutes();var g=h.getSeconds();if(l>0||d){u+="<li><span>"+o(l)+"</span><span>"+(l==1?c.day:c.days)+"</span></li>"
}if(v>0||d){u+="<li><span>"+o(v)+"</span><span>"+(v==1?c.hour:c.hours)+"</span></li>"}if(f>0||d){u+="<li><span>"+o(f)+"</span><span>"+(f==1?c.minute:c.minutes)+"</span></li>"
}if(t.data("show-seconds")==true){u+="<li><span>"+o(g)+"</span><span>"+(g==1?c.second:c.seconds)+"</span></li>"
}t.html(u)}else{t.hide();t.closest(".countdown-container").hide()}});if(jvh.core.countdownInterval==null){jvh.core.countdownInterval=window.setInterval(jvh.core.displayCountdowns,1e3)
}}else{clearInterval(jvh.core.holidayCountdownInterval)}},initRememberMe:function(e){if(!e){e="body"}if(jvh.core.localStorageSupported){if(jvh.core.localStorage.get("rememberme")!==null){var a=JSON.parse(jvh.core.localStorage.get("rememberme"));
for(var t in a){if(typeof t!="function"){var r=$(e+" #"+t);if(r.length>0&&r.hasClass("rememberme")){var o=a[t];
if(r.attr("type")=="radio"||r.attr("type")=="checkbox"){if(r.attr("value")==o.v){$("input[name="+o.n+"][checked=checked]").prop("checked",false);
if(r.hasClass("uncheck")){r.prop("checked",false)}else{r.prop("checked",true)}}}else if(r.is("select")){r.children().each(function(){if(this.value==o.v){r.val(o.v)
}})}else{r.val(o.v)}}}}}$(e+" .rememberme").change(function(e){var a={};if(jvh.core.localStorage.get("rememberme")!==null){a=JSON.parse(jvh.core.localStorage.get("rememberme"))
}for(e in a){var t=a[e];if(t.n==this.name){delete a[e]}}if(this.id!=""){if(this.type!="checkbox"||this.checked&&!$(this).hasClass("uncheck")||$(this).hasClass("uncheck")&&!this.checked){a[this.id]={v:this.value,n:this.name}
}jvh.core.localStorage.set("rememberme",JSON.stringify(a))}})}else{$("#rememberSearchFilters").closest("label").hide()
}},numbers:["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"],numberToText:function(e){if(parseInt(e)&&parseInt(e)>=0&&parseInt(e)<=20){return jvh.core.numbers[e]
}return e},numbersToText:function(e){if(!e){e=""}$(e+".number").each(function(e,a){a.innerHTML=jvh.core.numberToText(a.innerHTML)
})},randomLoader:function(e){var a=$(e+" li").length;for(var t=0;t<a;t++){window.setTimeout(function(){jvh.core.randomlyLoadBlocks(e)
},100*t)}},randomlyLoadBlocks:function(e){var a=$(e+" li").length;var t=true;var r=0;while(t){r=Math.floor(Math.random()*a+1);
if(!$(e+" li:nth-child("+r+")").hasClass("visible")){t=false}}$(e+" li:nth-child("+r+")").addClass("visible")
},manageVillaBlocks:function(){var myself=this;myself.setCountryRegionWeight=function(e,a,t,r,o){if(r==6)t=10;
var n=r;var i=o;if(t){if(!e[t]){e[t]=0}e[t]+=i;n=regions2[t].country.id;i=i/4}if(n){if(!a[n]){a[n]=0}a[n]+=i;
n=countries2[n].id}};myself.fnOrder=function(e,a){if(e.orderScore<a.orderScore){return 1}else if(e.orderScore>a.orderScore){return-1
}else if(e.rnd<a.rnd){return-1}else if(e.rnd>a.rnd){return 1}else{return 0}};myself.pickNVillasByRegion=function(e,a){var t=[];
for(var r=0;r<e;r++){if(a.length>r&&!a[r].picked){t[r]=a[r];if(r>0&&a[r].orderScore<1e3){for(var o=r;o<a.length;o++){if(!a[o].picked&&!a[o].pickedRegion){t[r]=a[o];
var n=a[o];a[o]=a[r];a[r]=n;break}}}t[r].picked=true;for(var o=0;o<a.length;o++){if(t[r].resort.region.id==a[o].resort.region.id){a[o].pickedRegion=true
}}}}return t};myself.categoryScore=function(e,a){if(e[a]>0){return e[a]}else if(e[a-1]>0){return e[a-1]/2
}else if(a!=6&&e[a+1]>0){return e[a+1]/2}else if(a==6&&e[3]+e[4]>0){return(e[3]+e[4])/4}else{return 0
}};myself.setDepartMonths=function(e,a){var t=parseInt(a.substring(3,5));var r=parseInt(a.substring(6,10));
var o=new Date;var n=t-1;if(o.getFullYear()<r){n+=12}e[n]++};myself.buildFilterRules=function(blockSet){var fnStr="true ";
var categoryRule=blockSet.data("rule-category");if(categoryRule){fnStr+=" && villa.category == "+categoryRule
}var regionRule=blockSet.data("rule-region");if(regionRule){fnStr+=" && villa.resort.region.id == "+regionRule
}var countryRule=blockSet.data("rule-country");if(countryRule){fnStr+=" && villa.resort.region.country.id == "+countryRule
}var n=1;var found=true;while(found&&n<10){var rule=blockSet.data("rule-"+n);if(rule){fnStr+=" && "+rule
}else{found=false}n++}eval("var fn = function(villa) {return ("+fnStr+");}");return fn};$(document).on("accomLoaded",function(){try{for(var e=0;e<villas1.length;e++){villas1[e].rnd=Math.floor(Math.random()*1e4)
}$(".auto-villa-blocks").each(function(e,a){var t=$(a);t.addClass("auto-track lazy-load");t.attr("data-track-label","Smart villa block");
var r=t.data("n-villas");var o=t.data("fill-missing");var n=myself.buildFilterRules(t);var i=[0,0,0,0,0,0,0];
var s=[];var l=[];var c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var d=null;if(jvh.searchbar){d=Math.ceil((jvh.searchbar.criteria.adults+jvh.searchbar.criteria.children)/2)*2
}try{$(".shortlisted-villas li[data-accom]").each(function(e,a){var t=$(a);var r=parseInt(t.data("accom"));
var o=t.data("depdate");var n=villas2[r];if(n){i[n.category]++;myself.setCountryRegionWeight(s,l,n.resort.region.id,n.resort.region.country.id,1);
if(o){myself.setDepartMonths(c,o)}}})}catch(h){jvh.core.tracking.trackEvent("JS Error","smart villa block 1",h.message)
}try{var u=$(".recent-searches").data("recent-villas");if(u&&u.length>1){u=u.split(",");for(var v=0;v<u.length-1;v++){if(u[v]!=""){var f=villas2[parseInt(u[v])];
if(f){i[f.category]++;myself.setCountryRegionWeight(s,l,f.resort.region.id,f.resort.region.country.id,1)
}}}}}catch(h){jvh.core.tracking.trackEvent("JS Error","smart villa block 2",h.message)}try{var g=[];if(jvh.core.localStorageSupported&&jvh.core.localStorage.get("searchhistory")!==null){g=JSON.parse(jvh.core.localStorage.get("searchhistory"))
}$(".recent-searches ul[data-history]").each(function(e,a){g[e]=$(a).data("history");g[e].country=g[e].countryId;
g[e].region=g[e].regionId});for(var v=0;v<g.length;v++){var p=g[v];var m=3;if(v>5){m=.5}else if(v>2){m=1
}myself.setCountryRegionWeight(s,l,p.region,p.country,m);if(p.depart&&v<6){myself.setDepartMonths(c,p.depart)
}}}catch(h){jvh.core.tracking.trackEvent("JS Error","smart villa block 3",h.message)}var b=[];var j=null;
if(t.data("priority-villas")){j=t.data("priority-villas").split(",")}for(var v=0;v<villas1.length;v++){var f=villas1[v];
if(n(f)){b.push(f);f.orderScore=0;f.picked=false;f.pickedRegion=false;if(s[f.resort.region.id]){f.orderScore+=s[f.resort.region.id]
}if(l[f.resort.region.country.id]){f.orderScore+=l[f.resort.region.country.id]}f.orderScore+=myself.categoryScore(i,f.category);
if(f.category==5){f.orderScore-=1}if(f.category==4){f.orderScore-=.5}var y=Math.ceil(f.maxOcc/2)*2;if(d&&y>=d){f.orderScore+=8-(y-d)
}else{f.orderScore+=8-(d-y)*2}var k=0;for(var w=0;w<12;w++){if(c[w]>0&&(f.availabilityYear1&&Math.pow(2,w))>0){k++
}}for(var w=12;w<24;w++){if(c[w]>0&&(f.availabilityYear2&&Math.pow(2,w-12))>0){k++}}if(k==1){f.orderScore+=1
}else if(k>1){f.orderScore+=2}else if(k==0){f.orderScore--}if(j!=null&&j.indexOf(f.id.toString())!=-1){f.orderScore=f.orderScore+1e3
}}}b.sort(myself.fnOrder);const C=myself.pickNVillasByRegion(r,b);const S=t.data("inc-icons");const x=t.data("inc-description");
const D=t.data("inc-photos");const M=t.data("inc-cta");const T=t.data("inc-heading-block");const L=t.data("inc-category-badge");
const F=t.data("add-badges");const I=t.data("villa-img-background");const A=t.data("villa-img-label");
const P=t.data("track-name-postfix");const E=D?"upper":"";for(var v=0;v<C.length;v++){var f=C[v];t.append(jvh.core.buildAccomBlock(f.id,true,{className:"villa-block-standard",shortlist:false,gallery:E,size:"large",sizeSubHeading:"heading-extra-small",heading:"below-image",addBadges:F,incIcons:S,incDescription:x,incCta:M,incHeadingBlock:T,incCategoryBadge:L,villaImgBackground:I,villaImgLabel:A,trackNamePostfix:P}))
}if(o&&C.length<r){for(var v=C.length;v<r;v++){t.append('<li class="filler-li"></li>')}}if(t.data("add-carousel")){t.addClass("owl-carousel owl-theme");
window.setTimeout(function(){t.owlCarousel({center:true,items:1,loop:true,nav:true,dots:false,navText:["",""],autoWidth:true,margin:20,responsive:{0:{items:1},768:{items:2},1140:{items:3}}})
},100)}else{t.addClass("no-carousel")}t.addClass("accom-loaded");jvh.core.tracking.autoTrack(t);jvh.core.images.lazyLoad(t);
return C})}catch(a){jvh.core.tracking.trackEvent("JS Error","smart villa block 4",a.message)}})},emailNewsletter:{signUp:{lastBreakpoint:null,messages:null,html:null,hubspotScript:'hbspt.forms.create({ region: "na1", portalId: "7281075", formId: "d675e9e2-e26f-4c83-ad02-e99bc7238048"});',init:function(){const core=jvh.core;
const signUp=core.emailNewsletter.signUp;signUp.messages=$.extend({},hsMessages);$("#newsletterSubscribe").click(function(e){e.preventDefault();
if(signUp.html===null){signUp.html='<header class="hubspot-signup-header">'+signUp.messages.header+'</header><script id="hubSpotScript"></script>'
}core.showModal(signUp.html,null,null,false,"hubspot-signup-modal");$("#hubSpotScript").attr("type","text/javascript").append(signUp.hubspotScript);
setTimeout(function(){eval(signUp.hubspotScript)},100);core.tracking.trackEvent("Footer","Enters Email Address","Newsletter Signup");
const mutationObserver=new MutationObserver(function(e){const a=e.length;const t=$(".modal-content");
var r=false;var o=false;$.each(e,function(){const e=this;$(e.removedNodes).each(function(){if($(this).is(".hs-error-msgs")){t.removeClass("errors");
r=true}});$(e.addedNodes).each(function(){const e=$(this);if(e.is(".hs-error-msgs")){t.addClass("errors");
r=true}else if(e.is(".submitted-message")){$(".hubspot-signup-header > h1").text("Thank you!");$(".hubspot-signup-header > p").remove();
t.addClass("subscribed");r=true;o=true;dataLayerPush({event:"newsletter_sign_up"})}})});if(r){core.centerModal();
if(o){this.disconnect()}}});mutationObserver.observe(document.getElementById("modalContent"),{childList:true,subtree:true})
});$(window).on("resize",function(){if(signUp.lastBreakpoint!=jvh.core.breakpoint){const e=$(".hs-form-iframe");
const a=e.parent().width()+"px";e.css("width",a)}signUp.lastBreakpoint=jvh.core.breakpoint})}}},brochure:{preSelectedIssues:[],hasEditedAddress:false,newAddress:null,initModal:function(){var e=$("#brochureRequestForm");
jvh.core.validation.init(e);jvh.core.postcodeLookup.init();if(jvh.core.brochure.preSelectedIssues.length){for(var a=0;a<jvh.core.brochure.preSelectedIssues.length;a++){$("#brochureRequestForm .brochure-issues input:checkbox[value="+jvh.core.brochure.preSelectedIssues[a]+"]").prop("checked",true)
}}$("#modalContainer").removeClass("saving");jvh.core.brochure.toggleRequiredFields();jvh.core.ajaxForm.assignOriginalFormValues(e);
e.submit(function(a){a.preventDefault();if(jvh.core.validation.validateForm(e,false,false,true)){jvh.core.brochure.hasEditedAddress=jvh.core.ajaxForm.hasChanged($(".address-details"));
var t;if($(".brochure-request-modal").hasClass("fully-authenticated")){if(jvh.core.brochure.hasEditedAddress){jvh.core.brochure.newAddress={};
$('[name^="address."],[name^="censation."]',".address-details").each(function(){jvh.core.brochure.newAddress[$(this).attr("name")]=$(this).val()
});t="Address edited"}else{t="Address not edited"}}jvh.core.tracking.trackEvent("Brochure Signup","Brochure Signup","Orders brochure",t);
$.ajax({type:"POST",url:e.attr("action"),data:e.serialize(),cache:false,dataType:"JSON",success:function(a){if(a.success){jvh.core.ajaxModal("/brochure/confirmation.ajax?"+e.serialize(),jvh.core.brochure.initConfirmation)
}else{console.log(a);jvh.core.validation.manageFormErrorMessage(e,"We currently cannot process your request at this time, please try again later.",true)
}},error:function(a){console.log(a);jvh.core.validation.manageFormErrorMessage(e,"We currently cannot process your request at this time, please try again later.",true)
}})}else{jvh.core.centerModal()}});$("#brochureReauthenticate").click(function(e){e.preventDefault();
jvh.core.brochure.preSelectedIssues=[];$('#brochureRequestForm .brochure-issues input[name="issues"]').each(function(){if($(this).is(":checked")){jvh.core.brochure.preSelectedIssues.push($(this).val())
}});jvh.core.reauthenticateUser(function(){jvh.core.ajaxModal("/ajax/brochure.ajax",jvh.core.brochure.initModal)
})});$(".address-details,#promoPost").change(function(){jvh.core.brochure.toggleRequiredFields()});$('#brochureRequestForm .brochure-issues input[name="issues"]').change(function(){jvh.core.brochure.toggleRequiredFields();
var e=$(this);if(e.data("parent-issue-id")){$("#brochureRequestForm .brochure-issues input[name='issues'][data-parent-issue-id='"+e.data("parent-issue-id")+"']").not(e).prop("disabled",e.is(":checked"))
}$("#brochureRequestForm .brochure-issues input[name='issues']").each(function(){$(this).closest("label").toggleClass("disabled",$(this).prop("disabled"))
})});jvh.core.placeholders.init($("#brochureRequestForm input"));jvh.core.centerModal()},toggleRequiredFields:function(){const e=$("#promoPost").is(":checked");
var a=$('#brochureRequestForm .brochure-issues input[name="issues"]:checked').length==0;const t=$(".address-details").find('input:not([type="hidden"]), #btnFindAddr');
if(!e){t.attr("disabled","disabled")}else{t.removeAttr("disabled")}$("#addressMandatory").attr("value",e);
if(!a){$('#brochureRequestForm .brochure-issues input[name="issues"]').each(function(){const e=$(this);
if(!a&&e.is(":checked")&&e.attr("data-downloadable")==="false"){a=true;t.removeAttr("disabled")}})}if(!a){a=$('.brochure-issues input[type=checkbox][data-downloadable="true"]').is(":checked")&&e
}if(!a){a=$("#addressPostcode").val().length>0||$("#addressStreet").val().length>0||$("#addressTown").val().length>0
}$('#brochureRequestForm .address-details :input[data-mandatory="true"]').each(function(){const e=$(this);
const t=!e.is(":disabled")&&a;e.toggleClass("mandatory",t);$(".hint",e.closest("label")).toggleClass("mandatory",t)
})},initConfirmation:function(){jvh.core.tracking.trackGoal("/brochure/brochure-request");if(!jvh.core.brochure.hasEditedAddress){$(".brochure-confirmation-modal.fully-authenticated > .cta").css("display","none");
$(".line-divide").css("border-bottom","0px");$(".line-divide").css("margin-bottom","0px")}$(".brochure-confirmation-modal .brochures a").click(function(){jvh.core.tracking.trackEvent(window.universal_variable.page.type,$(this).data("track-action"),$(this).attr("href"))
});if(!$("brochure-confirmation-modal").hasClass("fully-authenticated")){jvh.core.facebookSDK.load();
jvh.core.googleSDK.load(jvh.core.googleSDK.attachGoogleLogin);$(".brochure-confirmation-modal .email-sign-up-link").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent("Brochure Signup","Sign up by Email","Confirmation");jvh.core.ajaxModal("/login/email-sign-up.ajax",jvh.core.initLoginForm)
});$(".brochure-confirmation-modal .login-link").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent("Brochure Signup","Log in","Confirmation");
jvh.core.ajaxModal("/login/login.ajax",jvh.core.initLoginForm)});$(".brochure-confirmation-modal .update-address").click(function(e){e.preventDefault();
jvh.core.tracking.trackEvent("Brochure Signup","Update address","Confirmation");$.ajax({type:"POST",url:"/ajax/brochure-address-change.ajax",data:$.param(jvh.core.brochure.newAddress),cache:false,dataType:"JSON",success:function(e){jvh.core.closeModal()
},error:function(e){jvh.core.validation.manageFormErrorMessage(".brochure-confirmation-modal","We currently cannot change your address, please try again later.",true);
console.log(e)}})});$("#fbSignup").click(function(e){e.preventDefault();jvh.core.tracking.trackEvent("Brochure Signup","Sign up with Facebook","Confirmation");
jvh.core.facebookSDK.facebookLogin()});$("#googleSignup").click(function(e){jvh.core.tracking.trackEvent("Brochure Signup","Sign up with Google","Confirmation")
})}$(".brochure-confirmation-modal .close-window").click(function(e){jvh.core.tracking.trackEvent("Brochure Signup","Close CTA button on successful request","Confirmation");
jvh.core.closeModal()});if(jvh.core.brochure.hasEditedAddress){$(".update-address").addClass("active")
}}},getQueryString:function(e){var a=window.location.search.substr(1).split("&");for(var t=0;t<a.length;t++){var r=a[t].split("=");
if(r[0]==e){return decodeURIComponent(r[1])}}return null},shortlist:{shortlist:[],createShortlistAdobeEventInfo:function(e,a,t,r,o){var n=villas2[e];
var i=[{eventName:"Villa Shortlist",eventAction:a?"Shortlist Remove":"Shortlist Add",productId:n.id,productName:n.name,productCategory:n.category,region:n.regionId,resort:n.resortId,duration:t,airport:r!=="-1"?r:null,date:o,userId:digitalData.user.authState.toLowerCase()==="logged in"?digitalData.user.profileInfo:null}];
return i},isShortlisted:function(e){for(var a=0;a<jvh.core.shortlist.shortlist.length;a++){if(jvh.core.shortlist.shortlist[a].accomId==e){return true
}}return false},showLink:function(e,a){var t=jvh.core.shortlist.isShortlisted(e);if(t){a.html("Remove from shortlist").data("added",true)
}else{a.html("Add to shortlist").data("added","")}var r=a.parent().find(".shortlist-add-caption");if(r.length>0){r.toggle(!t)
}},amendLink:function(e,a){e.preventDefault();var t=$(e.currentTarget);var r=t.data("added")?"remove":"add";
var o=t.data("accom-id");var n=t.data("dep-date");return jvh.core.shortlist.amend(r,o,n,t,a)},amend:function(e,a,t,r,o,n,i){var s=jvh.core;
r.each(function(a,t){var r=$(t);if(r.data("shortlist-remove")&&e=="add"){r.html(r.data("shortlist-remove")).data("added",true)
}else if(r.data("shortlist-add")&&e!="add"){r.html(r.data("shortlist-add")).data("added","")}else if(r.hasClass("shortlist-small")){if(e=="add"){r.html("Remove").data("added",true).addClass("remove")
}else{r.html("Shortlist").data("added","").removeClass("remove")}}else{if(e=="add"){r.html("Remove from shortlist").data("added",true)
}else{r.html("Add to shortlist").data("added","")}}});var l=jvh.core.shortlist.createShortlistAdobeEventInfo(a,e==="remove",n,i,t);
s.shortlist.amendShortlist(e,a,t,r,o,l)},amendShortlist:function(e,a,t,r,o,n){var i=jvh.core;$.getJSON("/ajax/amendShortlist.ajax?rand="+Math.round((new Date).getTime()),{action:e,accomId:a,depDate:t},function(s){if(!s.error){i.shortlist._updateShortlist(e=="add",a,t);
jvh.core.utilityNav.setShortlistCount(s.numShortlisted);i.shortlist._track(e,r.data("track-category"),s.accomId,n);
var l=$(".populate-likes");var c;if(e=="add"){c='<h4 class="heading-extra-small shortlist-heart no-pulse remove">Saved to your shortlist!</h4><p><a href="/account/villa-shortlist">View Shortlist</a></p>';
if(l.length){l.each(function(e,a){$item=$(a);$item.html(parseInt($item.html())+1)})}if(jvh.core.localStorageSupported){jvh.core.localStorage.set("new-shortlist-mobile",true)
}}else{c='<h4 class="heading-extra-small shortlist-heart no-pulse remove">Removed from your shortlist!</h4><p><a href="/account/villa-shortlist">View Shortlist</a></p>';
if(l.length){l.each(function(e,a){$item=$(a);$item.html(parseInt($item.html())-1)})}}jvh.core.notificationMessage.show(c,"main");
if(o){o(s,r)}}else{if(r&&r!=null){var d=r.parent().children("span");if(!r.hasClass("shortlist-small")){d.each(function(){var e=$(this);
if(e.hasClass("copy")){e.html("")}else if(e.closest("#modalContainer").length>0){e.html(s.modalMessage)
}else{e.html(s.message)}})}jvh.core.shortlist.addMaxShortlistMsg(r);i.shortlist._track("limit",r.data("track-category"),s.accomId);
r.filter(".shortlist-small").addClass("display-none").removeClass("remove").html("Shortlist").data("added",false);
d.find(".trigger-view").on("click",jvh.core.clickTriggerView)}}})},addMaxShortlistMsg:function(e){var a=e.siblings(".shortlist-full.info-hint");
if(a.length===0&&e.hasClass("shortlist-small")){var t=$(".shortlist-full.info-hint.active");t.removeClass("active");
setTimeout(function(){t.remove()},300);var r='<span class="shortlist-full info-hint popup-message fade-in"><table><tr><td><button type="button" class="close"></button><h4 class="heading-extra-small shortlist-heart no-pulse remove">Your shortlist is full</h4><p>To add more of your favourite villas... <a href="#" class="trigger-view cta ghost fill salmon" data-view="login-pane">Login</a> or <a href="#" class="trigger-view" data-view="sign-up-options-pane">Register</a></p></td></tr></span>';
e.before(r);a=e.siblings(".shortlist-full.info-hint");if($("body").hasClass("accom")){a.addClass("below")
}setTimeout(function(){a.addClass("active")},300);a.find(".trigger-view").on("click",function(){jvh.core.shortlist._track("Login/register","Shortlist limit popup")
});a.find(".trigger-view").on("click",jvh.core.clickTriggerView);$("button.close",a).click(function(){jvh.core.shortlist._track("Close","Shortlist limit popup");
a.removeClass("active");setTimeout(function(){a.remove()},300)})}},populateJSShortlist:function(){if(typeof userShortlist!=="undefined"){jvh.core.shortlist.shortlist=userShortlist
}},_updateShortlist:function(e,a,t){shortlist=jvh.core.shortlist.shortlist;var r=false;for(var o=0;o<shortlist.length;o++){if(shortlist[o].accomId==a){r=true
}else if(r&&!e){shortlist[o-1]=shortlist[o]}}if(r&&!e){shortlist.length--}else if(!r&&e){shortlist.unshift({accomId:a,depDate:t})
}},_track:function(e,a,t,r){if(!a){a="Shortlist"}if(typeof r!=="undefined"){digitalData.event=r;jvh.core.tracking.trackAdobeEvent("shortlist")
}dataLayerPush({event:"shortlist_villa",eventAction:e,productId:t});jvh.core.tracking.trackEvent(a,"Shortlists "+e,t)
}},accomFilterOnClick:function(){$("#accomFilter ul li[data-filter-type]").on("click",function(e){var a=$(this);
if(!a.hasClass("disabled")){var t=a.data("filter-type");if(a.hasClass("active")){show=false;a.removeClass("active")
}else{show=true;a.addClass("active")}jvh.map.hideShowVillaCategory.changeCategory(t,show);jvh.core.tracking.trackEvent(jvh.core.trackingType,"Map accom filter "+a.data("track-name")+"  toggled","Page Navigation")
}})},mobileMapLoading:function(){$("#mapPanel").addClass("active")},mapLoading:function(){if(jvh.core.viewport=="mobile"){$("#modalContent").html('<div id="mapPanel" class="active"><div class="curtains"><div class="spinner"></div></div><div id="mapDisplay"></div></div>')
}else{$("#mapPanel.active").html('<div class="curtains white"><p>We\'re spinning our globe &amp; plotting our pins</p><div class="spinner black"></div></div><div id="mapDisplay"></div>')
}$("#mapDisplay").css("height",$("#mapDisplay").parent().outerHeight());var e=$("#mapPanel.active .curtains");
e.addClass("active");e.addClass("show-spinner")},mapError:function(){var e=$("#mapPanel.active .curtains");
if(jvh.core.mapLoadFailed){window.clearTimeout(jvh.core.mapLoadFailed)}jvh.core.mapLoadFailed=setTimeout(function(){e.removeClass("active");
e.removeClass("show-spinner");e.remove();$("#mapPanel.active").html("<div class=\"map-not-available\"><h2>Oops, we took a wrong turn!</h2><p>We're sorry, due to a technical issue we're unable to bring you this map. Please refresh the page or try again later.</p></div>");
$("#mapFilter").removeClass("active");$(".map-show-all").hide()},3e4)},animateStatCounter:function(e){if(!e.hasClass("animated")&&!e.hasClass("paused")&&jvh.core.isInView(e)){e.addClass("animated");
if(e.text().length==0){e.text("0")}e.prop("Counter",0).animate({Counter:e.text()},{duration:1500,easing:"swing",step:function(a){var t=Math.ceil(a);
if(t>=1e5&&!$(this).hasClass("full-amount")){e.text(Math.floor(t/1e3)+"k+")}else{e.text(t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
}}})}},animateStatCounters:function(){jvh.core.statCounters.each(function(){jvh.core.animateStatCounter($(this))
})},buildAccomBlock:function(e,a,t){var r=villas2[e];if(!r){return""}var o={className:"accom-pop-up-item",shortlist:true,gallery:"lower",heading:"in-image",addBadges:true,size:"medium",sizeSubHeading:"small",incIcons:true,incDescription:true,incCategoryBadge:true,incHeadingBlock:true,incCta:true,villaImgBackground:false,villaImgLabel:false};
if(t){$.extend(o,t)}if((r.desc==null||r.desc=="")&&o.incDescription){jvh.core.fnCheckForDescription(r);
jvh.core.fnLoadAccomDescs(".accom-desc-?")}if(r.desc!=null&&r.desc!=""){accomDesc=r.desc}else{accomDesc=""
}const n=r.resort.region.country.name;if(a){accomContent='<li id="popUp'+e+'" class="'+o.className+'" data-accom-id='+e+' data-track-name="'+n+o.trackNamePostfix+'" data-track-action="['+r.name+"]|["+e+'] Clicked">'
}else{accomContent='<div id="popUp'+e+'" class="'+o.className+'" data-accom-id='+e+' data-track-name="'+n+o.trackNamePostfix+'" data-track-action="['+r.name+"]|["+e+'] Clicked">'
}accomContent+='<div class="image-block collection collection-'+r.category;if(o.className=="accom-pop-up-item"||o.villaImgBackground){if(o.gallery!="upper"){accomContent+=" click-able "
}accomContent+='" style="background: #f6f7f8 url(\''+jvh.core.images.villaImg(e,12,r.picture)+"') no-repeat center center / cover\" ";
if(o.gallery!="upper"){accomContent+=' data-track-action="'+r.name+' clicked" data-track-outbound="true" data-link="'+jvh.core.link.villa(e)+'"'
}accomContent+=">";accomContent+='<span class="collection-tag"></span>';if(o.villaImgLabel){accomContent+='<div class="image-text">';
accomContent+="<p>"+r.name+"</p>";accomContent+="<p>"+r.resort.region.name+"</p>";accomContent+="</div>"
}}else{if(o.gallery!="upper"){accomContent+=' click-able" data-track-action="'+jvh.core.categories[r.category]["name"]+' clicked" data-track-outbound="true" data-link="'+jvh.core.link.villa(e)+'"'
}accomContent+='">';accomContent+='<img class="lazy-load" src="'+jvh.core.settings.imageDomain+'/images/jvh/1x1.gif" data-lazy-load="'+jvh.core.images.villaImg(e,12,r.picture)+'" alt="'+r.name+", "+r.resort.region.name+'" />'
}if(o.gallery=="upper"&&r.galleryCount>1){accomContent+='<a href="" class="photo-gallery-link" data-accom-id="'+r.id+'" data-track-name="'+r.name+'"><span class="photo-sprite photos"></span>'+r.galleryCount+" More Photos</a>"
}if(o.incCategoryBadge){accomContent+='<span class="collection-tag medium-tag"></span>'}if(o.addBadges){if(r.accomTypeId==2){accomContent+='<span class="apartment-badge">Apartment</span>'
}if(r.resort.type==2){accomContent+='<span class="hr-badge position';if(r.accomTypeId==2){accomContent+=" hr-plus-apartment"
}accomContent+='"></span>'}}if(o.heading!="in-image"){accomContent+="</div>"}if(o.incHeadingBlock){accomContent+='<div class="heading-block">';
accomContent+='<h3 class="heading-'+o.size+' collapse">';if(o.addBadges){accomContent+=r.name.replace(/ [Aa]partments(s)?/,"")
}else{accomContent+=r.name}accomContent+="</h3>";accomContent+='<h4 class="heading-'+o.sizeSubHeading+'">'+r.resort.name+", "+r.resort.region.name+"</h4>";
accomContent+="</div>"}if(o.heading=="in-image"){accomContent+="</div>"}accomContent+='<div class="info-block" id="popUpInfo'+e+'">';
if(o.gallery=="lower"&&r.galleryCount>1){accomContent+='<a href="" class="photo-gallery-link" data-accom-id="'+r.id+'" data-track-name="'+r.name+'"><span class="photo-sprite photos salmon"></span>'+r.galleryCount+" More Photos</a>"
}if(o.incDescription){accomContent+='<p class="accom-desc-'+r.id+'">'+r.desc+"</p>"}accomContent+="</div>";
if(o.shortlist){accomContent+='<div class="shortlist-link">';accomContent+='<span class="shortlist-container"><span>Not ready to book yet? </span>';
accomContent+='<a class="shortlist" data-accom-id="'+e+'" data-track-category="'+jvh.core.trackingType+'">Shortlist this villa</a></span>'
}if(o.incCta){accomContent+='<a href="'+jvh.core.link.villa(e)+'" class="cta" data-track-action="'+r.name+' clicked" data-track-outbound="true">View Villa</a>'
}accomContent+="</div>";if(a){accomContent+="</li>"}else{accomContent+="</div>"}return accomContent},searchHistory:{fill:function(e){var a=jvh.core.searchHistory.convertResult(e);
if(jvh.core.localStorageSupported&&jvh.core.localStorage.get("searchhistory")!==null){var t=JSON.parse(jvh.core.localStorage.get("searchhistory"));
var r;if(jvh.core.localStorage.get("searchFilter")!==null){r=JSON.parse(jvh.core.localStorage.get("searchFilter"))
}for(var o=0;o<t.length;o++){if(jvh.searchbar.fnCompareBasicObjects(t[o],a,"filterId,cheapestResult,searchDate")){a.filterId=t[o].filterId;
if(r!=null){var n=0;for(var i=0;i<r.length;i++){if(r[i].filterId==a.filterId){if(r[i].cheapestResult!=null&&r[i].cheapestResult!="&pound;0"&&r[i].cheapestResult!="&euro;0"){n=r[i].cheapestResult
}break}}if(n!=0){a.cheapestResult=n}}break}}}return a},produceSearchLink:function(e){var a=jvh.searchbar.createSearchUrl(jvh.searchbar.getSearchLink(e));
if(e.filterId!=null){a+="&filterId="+e.filterId}return a},filterCount:function(e){var a=0;var t;if(jvh.core.localStorage.get("searchFilter")!==null){t=JSON.parse(jvh.core.localStorage.get("searchFilter"))
}if(t!=null){for(var r=0;r<t.length;r++){if(t[r].filterId==e){for(item in t[r]){if("filterId,cheapestResult,searchDate".split(",").indexOf(item)==-1&&t[r][item]!=false){a++
}}break}}}return a},convertResult:function(e){var a={adults:null,airport:null,children:null,childAges:null,country:null,depart:null,flex:null,nights:null,region:null,regionGroup:null,resort:null,type:null,airport:null,villa:null,cheapestResult:null,category:null};
a.adults=e.adults;a.airport=e.depAirId;if(e.childAges!=null&&e.childAges.length>0){a.childAges=e.childAges
}a.children=e.children;if(e.countryId!=0){a.country=e.countryId}if(e.departs!=null){if(!e.nodate){var t=new Date(e.departs);
a.depart=jvh.core.padout(t.getDate())+"/"+jvh.core.padout(t.getMonth()+1)+"/"+t.getFullYear()}}else{a.depart=e.departs
}if(e.airport!=null){a.airport=e.airport}if(e.flex!=0&&e.flex!=1){a.flex=e.flex}a.nights=e.duration;if(e.regionId!=0){a.region=e.regionId
}if(e.regionGroupId!=0){a.regionGroup=e.regionGroupId}if(e.resortId!=0){a.resort=e.resortId}if(e.type!="STANDARD"){a.type=e.type
}if(e.accomId!=0&&typeof e.accomId!=="undefined"){a.villa=e.accomId}if(e.cheapestResult!=0){a.cheapestResult=e.cheapestResult
}if(e.searchDate!=null){a.searchDate=new Date(e.searchDate)}if(e.category!=null){a.category=e.category
}return a}},social:{shareToFacebook:function(e,a){FB.ui({method:"share",display:"popup",quote:a,href:e},function(e){})
},shareToTwitter:function(e,a){var t="http://twitter.com/share?text="+a+"&url="+e;var r=575,o=400,n=($(window).width()-r)/2,i=($(window).height()-o)/2,s="status=1"+",width="+r+",height="+o+",top="+i+",left="+n;
window.open(t,"twitter",s);return false}},setTranslateXYStyle:function(e,a,t){if(!a){a="0px"}if(!t){t="0px"
}e.data("xpos",a.replace("px",""));e.data("ypos",t.replace("px",""));e[0].currentLeft=parseInt(a.replace("px",""));
if($("html").hasClass("lt-ie10")){e.css("-ms-transform","translate("+a+", "+t+")")}else{e.css(jvh.core.domPrefix+"transform","translate3d("+a+", "+t+", 0px)")
}},removeHTML:function(e){return e.replace(/(<([^>]+)>)/gi,"")},fnLeadZero:function(e){if(e<10)return"0"+e;
return e},promotions:{promotionList:[],init:function(){if(jvh.data.resortPromo){jvh.core.promotions.resortsLoaded()
}var e=(new Date).setHours(0,0,0,0);$("nav.main li.comp-block, .homepage .promo-comp-block li.comp-block, .deals-and-offers .competitions li.comp-block, .competition-landing .competition-grid li.comp-block").each(function(){var a=$(this);
var t=new Date(a.data("expires"));var r=Math.floor((t-e)/1e3/60/60/24);if(r<0){a.find(".status").addClass("lapsed").html("Ended "+a.data("ends"));
a.find(".active").hide();a.find(".expired").show()}else{a.addClass("available");if($("nav.main").find(a).length===0){if(r==0){a.find(".status").html("Ends Today")
}else if(r==1){a.find(".status").html("Ends Tomorrow")}else if(r<=7){a.find(".status").html(r+" Days Left")
}}}});$(".homepage .promo-comp-block").each(function(){var e=$(this).find("li.comp-block.available");
if(e.length>0&&$(this).find("li.featured-promo:not(.resort-promo)").length<3){$(this).find("li.featured-promo").last().hide();
e.first().addClass("active")}});$("ul:not(.hero-promotion) li[data-promo-link], .accom-container .special-offers div[data-promo-link]").click(function(){jvh.core.promotions.goToPromoLink($(this))
});jvh.core.promotions.countdown()},goToPromoLink:function(e){var a=e.data("promo-link");if(typeof a==="undefined"){e=e.closest(".featured-promo");
a=e.data("promo-link")}if(a==="resort"){var t=resorts2[e.data("resort-id")];a=jvh.core.link.resortLink(t.name,t.region)+"#destPromos"
}jvh.core.tracking.trackOutbound(a,jvh.core.trackingType,"Promotion block "+e.data("promo-id")+" clicked",e.closest(".featured-promo").data("track-label"),a)
},resortsLoaded:function(){jvh.core.waitForTrigger("accomLoaded",typeof resorts1,"resortsLoaded",function(){$(".featured-promo.resort-promo").each(function(){var e=$(this);
var a=e.data("resort-id");var t=resorts2[a];if(t!=null){e.find("span.resort").html(t.name);e.find("span.region").html(t.region.name);
var r=jvh.core.images.getResortImage(t,"hero");e.data("lazy-load",r);e.removeClass("lazy-loaded").addClass("lazy-load")
}});jvh.core.images.lazyLoad()})},countdown:function(e){if(typeof e==="undefined"){e="body"}$(".featured-promo",e).has(".countdown-text").each(function(){var e=$(this).find(".countdown-text");
var a=parseInt(e.data("days"));var t=Date.parse($(this).data("promo-book-end"));var r=Math.floor((t-new Date)/1e3/60/60/24);
var o=$(this).hasClass("menu")&&$(this).index()>0;var n=$(this).hasClass("accom-quote");var i=$(this).children(".complex-basic").length>0;
if(t!=null&&a>0&&a>=r){var s=t-new Date;if(s>0){s=Math.floor(s/1e3);var l=s%60;s=Math.floor(s/60);var c=s%60;
s=Math.floor(s/60);var d=s%24;var h=Math.floor(s/24);if(o||n){if(i){var u="OFFER ENDS IN <span>";u+="<span>"+h+"</span>d ";
u+="<span>"+d+"</span>h ";u+="<span>"+c+"</span>m ";u+="<span>"+l+"</span>s </span>";e.html(u)}else{e.html("OFFER ENDS IN "+h+"d "+d+"h "+c+"m "+l+"s")
}}else{var u="<span class='copy'>OFFER ENDS IN</span><span class='time'>";u+="<span><span>"+jvh.core.fnLeadZero(h)+"</span>DAYS</span>";
u+="<span><span>"+jvh.core.fnLeadZero(d)+"</span>HOURS</span>";u+="<span><span>"+jvh.core.fnLeadZero(c)+"</span>MINS</span>";
u+="<span><span>"+jvh.core.fnLeadZero(l)+"</span>SECS</span>";u+="</span>";e.html(u)}}else{e.html("Ended")
}if(o){e.addClass("basic");$(this).addClass("basic")}else if(n){e.addClass("inline");$(this).addClass("inline")
}else{e.addClass("advanced");$(this).addClass("advanced")}$(this).addClass("counting-down")}});window.setTimeout(jvh.core.promotions.countdown,1e3)
},redeemPromotion:function(){var e=$.trim($("#promotionCode").val());var a=$("#promotionCodeOrig");if(a.length>0&&e!=a.val()){jvh.core.promotions.redeemPromotionError();
return false}var t=new Object;t.promotionCode=e;var r=$("body > div.curtains");r.addClass("active");r.addClass("show-spinner");
$.ajax({url:"/ajax/promotion-redeem.ajax",cache:false,type:"POST",timeout:1e4,data:t,dataType:"json",success:function(e){if(e&&e!=null&&e.success){jvh.core.promotions.redeemPromotionSuccess()
}else{jvh.core.promotions.redeemPromotionError()}},error:function(e,a,t){jvh.core.promotions.redeemPromotionError()
}})},redeemPromotionSuccess:function(){var e=$("body > div.curtains");e.removeClass("active");e.removeClass("show-spinner");
$("#promotionRedeem").hide();$(".promo-redeemed").addClass("active")},redeemPromotionError:function(){var e=$("body > div.curtains");
e.removeClass("active");e.removeClass("show-spinner");$(".promo-redeemed").removeClass("active");$(".promo-error").addClass("active");
$("#promotionRedeem").show()}},jsonFunctions:{arrayToJson:function(e){return JSON.stringify(e)},jsonToArray:function(e){return jQuery.parseJSON(e)
}},makePlural:function(e,a,t){var r=a;if(e>1||e==0){if(t==null){r+="s"}else{r=t}}return r},uniqueArray:function(e){var a={};
for(var t=0;t<e.length;t++)a[e[t]]=true;return Object.keys(a)},compareNumbers:function(e,a){return a-e
},owlCarousel:{lastViewedImageIndex:1,init:function(){$(document).on("click",".owl-next, .owl-prev",function(e){var a=$(e.currentTarget);
var t="";var r=a.closest(".owl-carousel");if(e.currentTarget.className=="owl-next"||e.currentTarget.className=="owl-next disabled"){t="next"
}else{t="prev"}jvh.core.owlCarousel.navigateCarousel(r,"Click",t,e)});$(document).on("dragged.owl.carousel",function(e){var a=$(e.target);
var t="";if(e.relatedTarget["_drag"]["direction"]=="left"){t="next"}else{t="prev"}jvh.core.owlCarousel.navigateCarousel(a,"Drag",t,e)
})},navigateCarousel:function(e,a,t,r){const o=e.data("owl.carousel");const n=e[0];const i=!n||!n.classList.contains("owl-carousel-destination");
if(typeof o!=="undefined"&&i){if(e.length==0){e=$(r.target).closest(".owl-carousel")}if(e.hasClass("index-display")){jvh.core.owlCarousel.updateIndex(e)
}jvh.core.owlCarousel.trackDirection(a,t,e,r)}},manageCarouselIndex:function(e,a){var t=e.data("owl.carousel");
if(typeof t!="undefined"){if(t.options.center){object=$(".owl-item.center",e)}else{object=$(".owl-item.active",e)
}var r=t.relative(object.index())+1;if(a!==null){var o=$(".index-counter",e);if(o.length===0){o=$(".index-counter",e.parent())
}o.html(r+"/"+a)}return r}},addIndex:function(e){window.setTimeout(function(){var a=$(e.currentTarget);
a.addClass("index-display");a.append('<span class="index-counter"></span>');jvh.core.owlCarousel.manageCarouselIndex(a,e.item.count)
},1e3)},updateIndex:function(e){jvh.core.owlCarousel.manageCarouselIndex(e,$(".owl-item:not(.cloned)",e).length)
},jumpToItem:function(e,a,t){if(typeof t==="undefined"){t=200}var r=e.data("owl.carousel");e.trigger("to.owl.carousel",[a,t]);
if(e.hasClass("index-display")){jvh.core.owlCarousel.updateIndex(e)}},trackDirection:function(e,a,t,r){var o;
var n=jvh.core.gallery.currentGallery;var i=n?n.villaID:null;var s=$(".owl-item:not(.cloned)",t).length;
var l=jvh.core.gallery.tags;if(jvh.core.trackingType==="Accommodation"){o="Accommodation "}else{o="Product Results "
}if(typeof r!=="undefined"){if(jvh.core.trackingType==""&&typeof r!=="undefined"){jvh.core.trackingType=r.currentTarget.baseURI
}var c=jvh.core.owlCarousel.manageCarouselIndex(t,null);var d=t.closest("[data-track-label]").data("track-label");
if(d==null){d=t.attr("class")}else{d=d+" carousel"}if(a=="prev"){o+="- Previous Image "}else{o+="- Next Image "
}if(e=="Drag"){o+="- Drag"}jvh.core.tracking.trackEvent(jvh.core.trackingType,e+" "+a+" : Panel "+c,d,null);
var i=null;if(jvh.core.gallery.currentGallery){i=jvh.core.gallery.currentGallery.villaID}if(self.lastViewedImageIndex!==c&&i){jvh.core.tracking.trackAdobeEvent("Gallery",o,"Viewed Image - "+l[c-1]+" - "+c+"/"+s+" - "+i);
self.lastViewedImageIndex=c}else{jvh.core.tracking.trackAdobeEvent(d,"Panel "+c,e+" "+a)}}},removeOwlAtResize:function(e,a,t){if(a.indexOf(jvh.core.viewport)>=0){e.owlCarousel(t)
}else{jvh.core.owlCarousel.destroyOwlCarousel(e)}},destroyOwlCarousel:function(e){e.trigger("destroy.owl.carousel").removeClass("owl-loaded");
e.find(".owl-stage-outer, .owl-stage, .owl-item").children().unwrap()}},contentBlockCarousel:{init:function(){if(typeof jQuery.fn.owlCarousel!=="undefined"){var e=$(window).height();
const a=function(e){e.on("drag.owl.carousel",function(){e.addClass("disable-auto-tracking")});e.on("dragged.owl.carousel",function(){setTimeout(function(){if(!e.hasClass("owl-grab")){e.removeClass("disable-auto-tracking")
}},1e3)})};$(".content-block-carousel:not(.large):not(.jvh-loaded)").each(function(){var t=$(this);var r=t.hasClass("mobile-dots-enable");
if(t.length>0&&jvh.core.isInView(t,e)){t.addClass("jvh-loaded");t.owlCarousel({center:false,nav:true,navText:["",""],dots:true,lazyLoad:true,responsive:{0:{items:1,loop:t.find("li").length>1,dots:r},480:{items:2,loop:t.find("li").length>2},850:{items:3,loop:t.find("li").length>3},1140:{items:4,loop:t.find("li").length>4}},onInitialized:function(){jvh.core.contentBlockCarousel.checkLoopStatus(t)
},onResized:function(){jvh.core.contentBlockCarousel.checkLoopStatus(t)}});a(t)}});$(".content-block-carousel.large:not(.jvh-loaded)").each(function(){var t=$(this);
if(t.length>0&&jvh.core.isInView(t,e)){t.addClass("jvh-loaded");if(jvh.core.breakpoint==="large-tablet"||jvh.core.breakpoint==="desktop"||jvh.core.breakpoint==="large-desktop"){jvh.core.contentBlockCarousel.convertToLarge(t)
}else{jvh.core.contentBlockCarousel.convertToSmall(t)}a(t);$(document).on("breakpoint.changed",function(e,a){var r=jvh.core.breakpoint==="large-tablet"||jvh.core.breakpoint==="desktop"||jvh.core.breakpoint==="large-desktop";
if(!t.hasClass("large")&&r){jvh.core.contentBlockCarousel.convertToLarge(t)}else if(t.hasClass("large")&&!r){jvh.core.contentBlockCarousel.convertToSmall(t)
}})}})}},checkLoopStatus:function(e){e.toggleClass("looping",e.find(".owl-item.cloned").length>0)},buildLargeCarousel:function(e){e.owlCarousel({center:false,nav:true,dots:true,navText:["",""],loop:true,lazyLoad:true,responsive:{0:{items:1,dots:false},480:{items:2},768:{items:3},850:{items:2}},onInitialized:function(){jvh.core.contentBlockCarousel.checkLoopStatus(e)
},onResized:function(){jvh.core.contentBlockCarousel.checkLoopStatus(e)}})},convertToLarge:function(e){jvh.core.owlCarousel.destroyOwlCarousel(e);
e.addClass("large");var a=e.find("li");var t=e.find("a");for(var r=0;r<t.length;r++){var o=Math.floor(r/3);
$(t[r]).appendTo(a[o])}var n=Math.floor(t.length/3);if(n>0){for(var r=Math.floor(t.length/3)+1;r<t.length;r++){$(a[r]).remove()
}}a=e.find("li");for(var r=0;r<a.length;r++){var i=$(a[r]);i.find("a").removeClass("large");if(r%2==0){$(i.find("a")[0]).addClass("small");
$(i.find("a")[1]).addClass("small");$(i.find("a")[2]).addClass("large");i.addClass("odd")}else{$(i.find("a")[0]).addClass("large");
$(i.find("a")[1]).addClass("small");$(i.find("a")[2]).addClass("small");i.addClass("even")}}t.each(function(){var e=$(this);
if(e.hasClass("large")){e.css("background-image","none");var a=e.data("src");var t=e.data("src-large");
if(a!==t){e.attr("data-src",t)}}});jvh.core.contentBlockCarousel.buildLargeCarousel(e)},convertToSmall:function(e){jvh.core.owlCarousel.destroyOwlCarousel(e);
e.removeClass("large");var a=e.find("li");var t=e.find("a");t.addClass("small");t.removeClass("large");
for(var r=a.length;r<t.length;r++){e.append("<li></li>")}a=e.find("li");for(var r=t.length;r>0;r--){$(t[r]).appendTo(a[r])
}jvh.core.contentBlockCarousel.buildLargeCarousel(e)}},searchPanel:{loadVilla:function(e,a,t,r,o,n,i,s,l,c){jvh.core.searchPanel.searchLoaded(o,n,function(){jvh.villaModal.loadVilla(e,a,t,r,o,n,i,s,l,c,false)
})},searchLoaded:function(e,a,t,r){if(jvh.search&&jvh.villaModal&&jvh.flights){t()}else{if(jvh.core.settings.jsMin){if(!jvh.search){jvh.core.load.loadJs("/js/jvh/min/search-min.js?ver="+jvh.core.settings.ver)
}jvh.core.load.loadJs("/js/jvh/min/villaModal-flights-min.js?ver="+jvh.core.settings.ver)}else{if(!jvh.search){jvh.core.load.loadJs("/js/jvh/search.js?ver="+jvh.core.settings.ver)
}jvh.core.load.loadJs("/js/jvh/villaModal.js?ver="+jvh.core.settings.ver);jvh.core.load.loadJs("/js/jvh/flights.js?ver="+jvh.core.settings.ver)
}if($("link[href='/css/generated/jvh/search.css?ver="+jvh.core.settings.ver+"']").length===0){var o=document.createElement("link");
o.rel="stylesheet";o.href="/css/generated/jvh/search.css?ver="+jvh.core.settings.ver;document.getElementsByTagName("head")[0].appendChild(o)
}jvhWaitForJs(["searchResults","villaModal","flights"],function(){$.ajax({type:"GET",url:"/ajax/search/panel?adults="+e+"&children="+a+"&d="+jvh.core.fnDateFormat(new Date,"YYMMDD")+"&ver="+jvh.core.settings.ver,cache:true,success:function(e){$("body").append(e);
t()},error:function(){if(r){r()}}})})}}},websiteFeedback:{autoPopup:{init:function(){if(jvh.core.localStorageSupported){if(!window.sessionStorage.getItem("feedbackAttempted")&&(jvh.core.localStorage.get("feedbackFormShown")===null||jvh.core.localStorage.get("feedbackFormShown")==="false")){var e=window.location.pathname.split("/")[1];
if(e!=="booking"&&typeof jvh.search==="undefined"){var a=Math.floor(Math.random()*101);var t=jvh.core.localStorage.get("pageViews")!==null?jvh.core.localStorage.get("pageViews"):0;
var r=t?t:0;jvh.core.websiteFeedback.autoPopup.setTimer(t,r,a)}}}},setTimer:function(e,a,t){var r=parseInt($(".website-feedback").data("pageviews"));
var o=parseInt($(".website-feedback").data("aggressiveness"));var n=new Date;n.setHours(0,0,0,0);if(a>=r&&jvh.core.localStorage.get("lastPageViewedDate")!==null&&Date.parse(jvh.core.localStorage.get("lastPageViewedDate"))>=n){if(t<=o){setTimeout(function(){if(!$(".modal-container").hasClass("modal-active")&&!$("body").hasClass("menu-open")){jvh.core.websiteFeedback.feedbackForm.show(true);
jvh.core.localStorage.set("feedbackFormShown",true)}},1e4)}else{window.sessionStorage.setItem("feedbackAttempted",true)
}}else if(jvh.core.localStorage.get("lastPageViewedDate")!==null&&Date.parse(jvh.core.localStorage.get("lastPageViewedDate"))<n){jvh.core.localStorage.set("pageViews",0);
jvh.core.localStorage.set("lastPageViewedDate",n)}else{a++;jvh.core.localStorage.set("pageViews",a);jvh.core.localStorage.set("lastPageViewedDate",n)
}}},feedbackForm:{show:function(e){var a=jvh.core.trackingType===""?"Any Page":jvh.core.trackingType;
jvh.core.tracking.trackEvent(a,"Feedback Modal","Page Navigation",e?"Timer Opened":"Opened");var t=function(){jvh.core.tracking.trackEvent(a,"Feedback Modal","Page Navigation","Closed")
};jvh.core.ajaxModal("/ajax/newsletter/feedbackform.ajax",jvh.core.websiteFeedback.feedbackForm.init,null,null,t,"feedback-form")
},init:function(){var e=$("#modalContent form[name='feedbackForm']");jvh.core.initFormFields(e);jvh.core.validation.init(e);
e.submit(function(a){a.preventDefault();var t=jvh.core.trackingType===""?"Any Page":jvh.core.trackingType;
jvh.core.tracking.trackEvent(t,"Feedback Modal","Page Navigation","Submitted");if(jvh.core.validation.validateForm(e)){var r=e.serializeArray();
var o=$("body > div.curtains.active");var n=$(".modal-container");n.addClass("saving");o.addClass("show-spinner");
$.ajax({type:"POST",url:e.attr("action"),data:r,cache:false,dataType:"JSON",success:function(a){if(a.success){n.removeClass("saving");
$(".fbf-thank-you-message",n).show();o.removeClass("show-spinner");jvh.core.tracking.trackGoal("/feedbackform/feedbackform-success")
}else{jvh.core.validation.manageFormErrorMessage(e,"There was a problem processing your request, please check the details entered and try again.",true);
jvh.core.tracking.trackEvent(t,"Feedback Failure","Feedback Form","An error occurred while a user tried to send us feedback.");
o.removeClass("show-spinner");n.removeClass("saving")}},error:function(a){jvh.core.validation.manageFormErrorMessage(e,"We currently cannot process your request at this time, please try again later.",true);
jvh.core.tracking.trackEvent(t,"Feedback Form Failure","Feedback Form",a);o.removeClass("show-spinner");
n.removeClass("saving")}})}})}}},pagination:{init:function(e,a){e.data("current-page",1);e.data("callback",a);
jvh.core.pagination.refreshPagination(e,null,true);$(document).on("viewport.changed",function(a,t){jvh.core.pagination.refreshPagination(e,null,true)
})},refreshPagination:function(e,a,t){var r=e.data("per-page-"+jvh.core.viewport)||e.data("per-page")||5;
e.data("per-page",r);if(typeof a!=="undefined"&&a!=null){e.data("item-total",a)}jvh.core.pagination.managePaginationLinks(e,r,e.data("item-total"),t)
},managePaginationLinks:function(e,a,t,r){var o="";var n;if(isNaN(a)){n=1}else{n=parseInt(t/a);if(n!=t/a){n++
}}if(t>0&&r){if(n!=1){o+=jvh.core.pagination.addPage("Prev",n,e);for(var i=1;i<n+1;i++){o+=jvh.core.pagination.addPage(i,n,e)
}o+=jvh.core.pagination.addPage("Next",n,e)}e.html(o);e.find("li").on("click",function(e){var a=$(this);
if(!a.hasClass("disabled")){var t=a.closest("ul.pagination-controls");t.data("current-page",a.data("page-num"));
if(typeof t.data("callback")!=="undefined"&&t.data("callback")!=""){callback=t.data("callback");callback(a)
}jvh.core.tracking.trackEvent(jvh.core.trackingType,a.closest("[data-track-action]").data("track-action"),t.data("track-label"))
}})}var s=e.find("li");var l=s.first();var c=s.last();s.removeClass("current surrounding disabled");e.find("li.page-separator").remove();
var d=e.data("current-page");e.find("li:not(.next-prev)[data-page-num='"+d+"']").addClass("current");
e.find("li").addClass("adobe-auto-track");e.find("li").attr("data-track-name","Accom navigation");if(n>5){if(d<=3&&jvh.core.viewport!=="mobile"){e.find("li:lt(5)").addClass("surrounding");
c.prev().before('<li class="page-separator">...</li>')}else if(d<=2&&jvh.core.viewport==="mobile"){e.find("li:lt(3)").addClass("surrounding");
c.prev().before('<li class="page-separator">...</li>')}else if(d>=n-2&&jvh.core.viewport!=="mobile"){e.find("li:gt("+(n-4)+")").addClass("surrounding");
l.next().after('<li class="page-separator">...</li>')}else if(d>=n-1&&jvh.core.viewport==="mobile"){e.find("li:gt("+(n-2)+")").addClass("surrounding");
l.next().after('<li class="page-separator">...</li>')}else{var h=e.find("li:not(.next-prev).current");
var u=h.prev();var v=h.next();if(jvh.core.viewport!=="mobile"){u.addClass("surrounding").before('<li class="page-separator">...</li>');
v.addClass("surrounding").after('<li class="page-separator">...</li>')}else{u.before('<li class="page-separator">...</li>');
v.after('<li class="page-separator">...</li>')}}}else{s.addClass("surrounding")}if(d==1){l.addClass("disabled")
}else if(d==n){c.addClass("disabled")}l.data("page-num",d-1);c.data("page-num",d+1)},addPage:function(e,a,t){var r="";
var o;var n=t.data("current-page");if(e=="Prev"){if(n==1){o=1}else{o=n-1}}else if(e=="Next"){if(n==a){o=a
}else{o=n+1}}else{o=e}buttonClass="";if(e=="Next"||e=="Prev"){buttonClass="next-prev"}r='<li class="'+buttonClass+'" data-page-num="'+o+'" data-track-action="Page '+e+' clicked">'+e+"</li>";
return r}},keyBoardActionForModal:function(e){if(typeof galleryOpen==="undefined"||!galleryOpen){var a=null;
var t=$("#modalContainer.modal-active .owl-carousel");var r=$(".beach-golf-container.active .beach-golf.owl-carousel");
var o=$(".booking-options.active .extra-gallery.show .owl-carousel");if(t.length>0){a=t}else if(r.length>0){a=r
}else if(o.length>0){a=o}if(a!=null){if(e.keyCode===37){a.trigger("prev.owl");direction="prev"}else if(e.keyCode===39){a.trigger("next.owl");
direction="next"}else if(e.keyCode==27&&r.length>0){jvh.destinations.closeBeachGolf()}if(e.keyCode==27){jvh.core.tracking.trackEvent(jvh.core.trackingType,"Esc Key Pressed","Carousel")
}else if(e.keyCode===37||e.keyCode===39){jvh.core.owlCarousel.navigateCarousel(a,"Keyup",direction,e)
}}else if($(".inner-modal.active [data-key-left]").length>0||$("#modalContainer.modal-active [data-key-left]").length>0){var n;
if(e.keyCode==27){if($(".inner-modal.active").length>0){$(".close.inner-modal-close").click()}else{jvh.core.closeModal()
}jvh.core.tracking.trackEvent(jvh.core.trackingType,"Esc Key Pressed","Inner Modal")}else{if($(".inner-modal.active").length>0){n=$(".inner-modal.active")
}else{n=$("#modalContainer.modal-active")}if(e.keyCode===37){n.find("[data-key-left]").trigger("click",["Keyup"])
}else if(e.keyCode===39){n.find("[data-key-right]").trigger("click",["Keyup"])}}}}},ssltestIe:function(){try{if(jvh.core.settings&&jvh.core.settings.sslProtocol&&jvh.core.settings.sslProtocol=="TLSv1"&&(jvh.core.localStorageSupported||document.referrer.indexOf("www.jamesvillas")==-1)&&jvh.core.settings.channel.id==9){if(!(jvh.core.localStorageSupported&&typeof window.localStorage["tlswarning"]==="string")){jvh.core.showModal("<h2>Browser Support</h2><p>We've noticed that you’re using an older browser. From March 2018 we will no longer be supporting this version, meaning that you will be unable to access our website with your current browser. Don't worry, there's a few ways that you can continue using our website. You can try updating your browser or use another browser.</p>",true);
jvh.core.tracking.trackEvent("TLS Notification","TLS NOT OK",navigator.userAgent);if(jvh.core.localStorageSupported){window.localStorage.tlswarning="NOTOK"
}}}}catch(e){}},animateMapDestinations:function(){var e=$(window).scrollTop();var a=$(".destination-map").offset().top-$(".destination-map").height();
if(e>=a){$(".destination-map ul.pointers li").each(function(e){$(".destination-map ul.pointers li:nth-child(1)").addClass("active");
setTimeout(function(){fadeItem=e+1;$(".destination-map ul.pointers li:nth-child("+fadeItem+")").addClass("active")
},250+e*250)})}else{$(".destination-map ul.pointers li").removeClass("active")}},notificationMessage:{messages:[],show:function(e,a,t,r){if(typeof a!=="undefined"&&$(".active.page-notification."+a).length>0){$(".active.page-notification."+a).each(function(){jvh.core.notificationMessage.close($(this),true)
});window.setTimeout(function(){jvh.core.notificationMessage.show(e,a,1,r)},600)}else{var o=typeof a==="undefined"?"page-notification":"page-notification "+a;
var n=$('<div class="'+o+'">'+e+'<button type="button" class="close">X</button></div>');var i=r||$("body");
i.append(n);jvh.core.notificationMessage.messages.push(n[0]);n.find("button.close").click(function(){jvh.core.notificationMessage.close(n,true)
});n.hover(function(){n.addClass("focused")},function(){n.removeClass("focused")});setTimeout(function(){n.addClass("active");
setTimeout(function(){jvh.core.notificationMessage.close(n,false)},5e3)},(t||10)+(jvh.core.notificationMessage.messages.length-1)*2e3)
}},close:function(e,a){var t=jvh.core.notificationMessage.messages;if(t.indexOf(e[0])>=0){t.splice(t.indexOf(e[0]),1)
}if(e.hasClass("focused")&&!a){window.setTimeout(function(){jvh.core.notificationMessage.close(e,false)
},2e3)}else{e.removeClass("active");window.setTimeout(function(){e.remove()},a?500:1500)}}},initReadMore:function(){$(".read-more-container").each(function(e){var a=$(this);
var t=false;var r=a.outerHeight();var o=a.data("size");var n=150;var i=335;var s=450;if(o=="short"&&r>n||o=="medium"&&r>i||o=="long"&&r>s||typeof o==="number"&&r>o||typeof o==="undefined"){t=true
}if(t){if(a.data("faded")){a.addClass("faded-text")}if(a.data("size")){a.addClass(a.data("size"))}var l=" auto-track adobe-auto-track";
var c=a.data("more")||"Read more";if(typeof a.data("open-non-mobile")!=="undefined"&&jvh.core.viewport!=="mobile"){l+=" open";
c="Show less";a.removeClass("closed")}else{a.addClass("closed")}const d=$('<button type="button" class="view-more chevron'+l+'" data-track-name="" content" data-track-action="Opened">'+c+"</button>");
d.click(function(e){e.preventDefault();const t=$(this);const r=t.hasClass("open");var o="";if(jvh.destinations!==undefined){o=jvh.destinations.destSettings.destName+" Content"
}else if(jvh.areas!==undefined){o=jvh.areas.destSettings.destName+" Content"}a.toggleClass("closed",r);
t.toggleClass("open",!r);if(jvh.destinations){const o=jvh.destinations.destSettings.destName+" Content";
t.attr("data-track-name",o)}if(r){t.attr("data-track-action","Show Less");t.text(a.data("more")||"Read more");
action="closed";const n=a.siblings("h2");if(n.length){const i=a.offset().top-n.offset().top;jvh.core.goToElement(a,null,200,i)
}else{jvh.core.goToElement(a,null,200)}}else{t.attr("data-track-action","Show More");t.text(a.data("less")||"Show less");
action="opened"}jvh.core.tracking.trackEvent(jvh.core.trackingType,"Read more container "+action,t.closest("[data-track-label]:not([data-track-label=''])").data("track-label"),null)
});a.after(d)}})},getDaySuffix:function(e){var a=(""+e).split("").reverse();if(a[1]!="1"){switch(a[0]){case"1":return"st";
case"2":return"nd";case"3":return"rd"}}return"th"},getDomPath:function(e){var a=[];while(e.parentNode!=null){var t=0;
var r=0;for(var o=0;o<e.parentNode.childNodes.length;o++){const n=e.parentNode.childNodes[o];if(n.nodeName==e.nodeName){if(n===e){r=t
}t++}}const i=e.className!==""?"."+e.className.replace(/\s+/g,"."):"";if(e.hasAttribute("id")&&e.id!=""){a.unshift(e.nodeName.toLowerCase()+"#"+e.id+i)
}else if(t>1){a.unshift(e.nodeName.toLowerCase()+i+":eq("+r+")")}else{a.unshift(e.nodeName.toLowerCase()+i)
}e=e.parentNode}var s=a.slice(1).reverse();var l=s.length;for(var o=0;o<s.length;o++){if(s[o].indexOf("#")!==-1){l=o;
break}}s=s.slice(0,l+1);var c="";for(var o=0;o<s.length;o++){c+=s[o]+" < "}c=c.slice(0,-3);return c},setLastClickedElement:function(){digitalData.page.pageInfo.referringClick=sessionStorage.getItem("last_clicked_element");
sessionStorage.removeItem("last_clicked_element")},trackLastClickedElement:function(){document.body.addEventListener("click",function(e){sessionStorage.setItem("last_clicked_element",jvh.core.getDomPath(e.target))
},true)},addMutationObserverToPhoneNumber:function(){const e=$(".InfinityNumber")[1];if(typeof e!=="undefined"){const a={attributes:true,childList:true};
const t=function(e,a){jvh.core.setPhoneNumber()};const r=new MutationObserver(t);r.observe(e,a)}},setPhoneNumberAfterPageLoads:function(){$(window).on("load",jvh.core.setPhoneNumber())
},setPhoneNumber:function(){const e=$(".InfinityNumber")[1];if(e!==undefined){jvh.core.contactUsPhoneNumber=e.innerHTML;
const a=$(".phone-number")[0];if(a!==undefined){a.innerHTML=jvh.core.contactUsPhoneNumber}}},showCallMeButton:function(){var e=document.createElement("div");
var a=document.getElementsByTagName("body")[0];e.classList.add("call-me-button-wrapper");e.innerHTML="<button class='call-me-button'>Call Now</button>";
a.appendChild(e);$(".call-me-button").click(function(e){e.preventDefault();jvh.core.tracking.trackAdobeEvent("Phone-Number",digitalData.page.pageInfo.pageType,"Call Now Clicked");
if(jvh.core.viewport==="mobile"){window.open("tel:"+jvh.core.contactUsPhoneNumber)}else{jvh.core.showCallMeModal()
}})},showCallMeModal:function(){if(jvh.core.viewport!=="mobile"){const e='<div class="call-me-modal"><div class="description">Speak to our Travel Advisors on...</div><div class="phone-number">'+jvh.core.contactUsPhoneNumber+"</div></div>";
jvh.core.showModal(e);$("#modalClose").addClass("new call-me-modal-close")}},shakeCallMeButtonOnMobile:function(){if(jvh.core.viewport==="mobile"){const e=$(".call-me-button");
e.addClass("shake animated");setTimeout(function(){e.removeClass("shake animated")},2e3)}},heroBanner:{loaded:false,slides:{slidesLoaded:[],slidesWaiting:[]},produceSlide:function(e,a,t,r){var o={html:"",targetIndex:null,index:null,priority:null,important:false};
if(typeof e!=="undefined"&&e!==null){o.html=$(e)}if(typeof a!=="undefined"&&a!==null){o.targetIndex=a
}if(typeof t!=="undefined"&&t!==null){o.priority=t}if(typeof r!=="undefined"&&r!==null){o.important=r
}return o},addSlides:function(e,a){if(!(typeof e==="object"&&e.length>0)){jvh.core.heroBanner.slides.slidesWaiting.push(e)
}else{jvh.core.heroBanner.slides.slidesWaiting=jvh.core.heroBanner.slides.slidesWaiting.concat(e)}if(a.length>0){jvh.core.heroBanner.insertSlides(jvh.core.heroBanner.slides.slidesWaiting,a)
}},onChange:function(e){var a=jvh.core.heroBanner.slides.slidesWaiting;var t=a.length;if(t>0){jvh.core.heroBanner.insertSlides(a,$(e.target),true);
if(a.length!==t){$(e.target).trigger("slideInserted")}}},insertSlides:function(e,a,t){e.forEach(function(e){jvh.core.heroBanner.insertSlide(e,a,null,true)
});if(!t){a.trigger("slideInserted")}},insertSlide:function(e,a,t,r){var o=jvh.core.heroBanner.slides.slidesLoaded;
var n=false;var i=null;var s=false;if(e.targetIndex!==null){o.forEach(function(a){if(a.targetIndex==e.targetIndex){if(a.priority<e.priority){if(e.important||!a.html.parent().hasClass("active")){i=a;
a.html.replaceWith(e.html);a.priority=e.priority;a.important=e.important}else{s=true}}else{n=true}}})
}if(!n&&i===null&&!s){var l;if(e.targetIndex!==null){var c=false;o.forEach(function(a,t){if(a.index>=e.targetIndex){a.index++;
if(!c){c=true;l=t}}});if(!c){l=o.length}}else{l=o.length}e.index=l;if(!jvh.core.heroBanner.loaded){$(a).append(e.html)
}else{$(a).trigger("add.owl.carousel",[e.html,l])}o.push(e);o.sort(function(e,a){return e.index>a.index?1:-1
})}if(!s){jvh.core.heroBanner.slides.slidesWaiting=jvh.core.heroBanner.slides.slidesWaiting.filter(function(a){return e!=a
});if(!r&&!n&&i===null){$(a).trigger("slideInserted")}}},initCarousel:function(){const e='<div id="slidesBanner">'+'<div id="bannerCarousel" class="owl-carousel owl-theme">'+"</div>"+"</div>";
$(".reassurance-banner-container").prepend(e);var a=$("#bannerCarousel");a.on("slideInserted",function(){if(!jvh.core.heroBanner.loaded){jvh.core.heroBanner.buildCarousel(a)
}else{$("#bannerCarousel").trigger("refresh.owl.carousel")}})},buildCarousel:function(e){jvh.core.heroBanner.loaded=true;
const a=e;a.owlCarousel({nav:false,items:1,loop:true,autoplay:true,autoplayTimeout:5e3,dots:false});a.on("changed.owl.carousel",jvh.core.heroBanner.onChange);
const t=function(){a.trigger("play.owl.autoplay");a.trigger("stop.owl.autoplay")};$("#bannerCarousel .owl-nav .owl-prev")[0].addEventListener("click",t);
$("#bannerCarousel .owl-nav .owl-next")[0].addEventListener("click",t)}},showBannerCarousel:function(e,a){if(!(typeof e==="array"&&e.length>0)){var t=new Array;
$.each(e,function(e,a){const r=jvh.core.heroBanner.produceSlide('<div id="'+a.id+'" class="item'+(a.clazz?" "+a.clazz:"")+'">'+'<div class="banner-element '+a.bannerColourClass+'">'+(a.link?'<a class="banner-element-content" href="'+a.link+'">':"")+'<div class="banner-hero"><div class="banner-hero-container"><div class="banner-hero-title'+(a.star?" star":"")+'">'+a.title+"</div>"+'<div class="banner-hero-copy">'+a.copyHTML+"</div></div>"+'<p class="footer">'+(a.footerHTML?a.footerHTML:"")+"</p>"+"</div>"+(a.link?"</a>":"")+"</div></div>");
t.push(r)});if(!jvh.core.heroBanner.loaded){jvh.core.heroBanner.initCarousel()}jvh.core.heroBanner.addSlides(t,$("#bannerCarousel"));
if(a){$('<style id="slideStyles">'+a+"</style>").insertBefore(bannerCarousel)}}},reassuranceBanner:{init:function(){const e=$(".reassurance-banner:not(.no-slides)");
if(e.length>0){const a=e.data("banner-title");const t=e.data("banner-copy-html");const r=[{id:"mainSlide",clazz:"one-liner",bannerColourClass:"banner-colours-branded",title:a,copyHTML:t,star:true}];
jvh.core.showBannerCarousel(r)}}},recentlyViewedVillas:{init:function(){const e=jvh.core.recentlyViewedVillas;
const a=$("#recentVillasCarousel");if(a.length>0){a.owlCarousel(e.buildOptions())}},buildOptions:function(){const e=jvh.core.breakpointRes;
const a={loop:false,autoplay:false,autoplaySpeed:false,dots:false,startPosition:0,stageElement:"ul",itemElement:"li",responsive:{}};
for(var t in e){var r={};var o=""+e[t];switch(t){case"mobile":r.items=1;r.nav=false;r.stagePadding=30;
break;case"large-mobile":r.items=3;r.nav=false;r.stagePadding=30;break;case"tablet":r.items=4;r.nav=false;
break;case"large-tablet":r.items=5;r.nav=false;break;default:r.items=5;r.nav=true;break}a.responsive[o]=r
}return a}},cancellation:{policies:null,isSERP:false,isMyHoliday:false,init:function(){const e=jvh.core.cancellation;
e.clonePolicies();if(e.policies){$(document).on("mouseenter",".free-cancellation-hover",function(e){$(".free-cancellation-hover-tooltip").toggleClass("active",false);
$(e.target).find(".free-cancellation-hover-tooltip").toggleClass("active",true)});$(document).on("mouseleave",".free-cancellation-hover",function(e){$(e.target).find(".free-cancellation-hover-tooltip").toggleClass("active",false)
});$(document).on("click",".free-cancellation-hover",function(a){a.preventDefault();e.openTooltip(a.target);
a.stopPropagation()});$(document).on("scroll",function(){$(".free-cancellation-hover-tooltip").toggleClass("active",false)
});$(".cancellation-info").on("click",".cancellation-info-full-details-link",function(){jvh.core.tracking.trackEvent("Cancellation","Hyperlink Clicked","See Full Details")
})}$(".cancellation-info-link.show-traffic-lights").click(function(){const e=$(this);const a=e.siblings(".cancellation-info-container");
const t=(a.hasClass("show")?"Collapse":"Expand")+" traffic lights";a.slideToggle();a.toggleClass("show");
e.siblings(".cancellation-info-full-details-link").toggleClass("show");e.toggleClass("more");e.text(e.hasClass("more")?"Show less":"Show more");
jvh.core.tracking.trackEvent("Cancellation","Show More",t)});$(window).on("resize",function(){if(jvh.core.viewport==="desktop"||jvh.core.viewport==="tablet"&&jvh.core.breakpoint==="large-tablet"){$(".cancellation-info-container").each(function(){const e=$(this);
if(!e.is(":visible")&&e.attr("style")==="display: none;"){e.removeAttr("style")}})}})},clonePolicies:function(){const e=jvh.core.cancellation;
const a=$("#cancellationPoliciesScript");if(typeof cancellationPolicies!=="undefined"){e.policies=$.extend({},cancellationPolicies);
a.remove()}else if(typeof cancellationTermRanges!=="undefined"){e.policies=$.extend({},cancellationTermRanges);
a.remove()}},openTooltip:function(e){const a=$("#cancellation-tooltip").clone();const t=$(e).find(".loaded").html();
a.find("p").html(t);a.removeAttr("id").addClass("cancellation-modal");a.append('<a class="booking-conditions-link" href="/help-and-advice/booking-conditions#cancellations" target="_blank">Click here to find out more</a>');
jvh.core.showModal(a);jvh.core.tracking.trackEvent("Cancellation","Icon Clicked","Free Cancellation Icon");
a.find(".booking-conditions-link").on("click",function(){jvh.core.tracking.trackEvent("Cancellation","Hyperlink Clicked","Find Out More")
})},getData:function(e,a){const t=new Array;const r=function(e,a){const t=new Date(e.getTime());t.setDate(t.getDate()-a);
return t};var o=0;$.each(e,function(e,n){const i={days:n.days,startDate:r(a,o),endDate:r(a,n.days),refundPercentage:n.refund+"%"};
o=n.days+1;t.push(i)});return t},resetCancellationBanner:function(){const e=$(".results .result-container > .cancellation-info > .free-cancellation.no-icon").find("[data-cancellation-days]");
e.attr("data-cancellation-days",0);jvh.core.cancellation.hideCancellationMessaging()},manageCancellationInformation:function(e,a,t,r){const o=function(e){return typeof e!=="undefined"&&e!==null
};const n=jvh.core.cancellation;const i=o(a)&&o(a.date);var s;if(o(a)&&o(jvh.search)){s=jvh.search.getCancellationTermType(a)
}else{s=i||o(a)&&o(a.cancellationTermType)?a.cancellationTermType:cancellationTermType}switch(e){case"search":n.isSERP=true;
n.isMyHoliday=false;break;case"myholiday":n.isSERP=false;n.isMyHoliday=true;break}if(!o(r)){r=new Date;
r.setHours(0,0,0,0)}if(n.isMyHoliday||typeof s!=="undefined"&&s>0&&s<3){$("body").addClass("cancellation-available");
const l=n.isMyHoliday?n.policies:n.policies["tier"+s];if(!n.isSERP){n.updateTempObjectProduct(t,"tier",s)
}$('.free-cancellation:not([id^="fc-"])').toggleClass("hide",false);if(o(l)){if(i){n.populateCancellationInfoWithDate(l,a,t,r)
}else{n.populateCancellationInfoNoDate(l,s,a?a.villa.id:null)}}}else if(!n.isSERP){n.hideCancellationMessaging()
}},populateCancellationInfoNoDate:function(e,a,t){const r=jvh.core.cancellation;const o=e[e.length-2].days+1;
const n=o+" days";var i="";if(r.isSERP){i="#fc-"+t+":not(.loaded) ";const s=$(".results .result-container > .cancellation-info > .free-cancellation.no-icon").find("[data-cancellation-days]");
var l=parseInt(s.attr("data-cancellation-days"));if(l<o){s.text(n);s.attr("data-cancellation-days",o)
}}else{$("[data-cancellation-days]").text(n)}const c=$(i+"[data-cancellation-date-days]");const d=c.parent().find(".before-departure");
c.text(n).parent().addClass("loaded");if(d.length===0){c.after(' <span class="before-departure">before departure</span>')
}const h=$(".cancellation-info-list");if(!r.isSERP){if(a===1){h.parent().addClass("hide")}else{var u="";
var v=0;$.each(e,function(e,a){if(a.days>0){u="<li><span>"+v+" - "+a.days+" days</span> before = <span>"+a.refund+"%</span > refund"+u;
v=a.days+1}});h.append(u)}}$(".cancellation-info").addClass("active")},populateCancellationInfoWithDate:function(e,a,t,r){const o=jvh.core.cancellation;
const n=a.date;const i=o.getData(e,n);const s=i[i.length-1];const l=jvh.core.fnDateFormat(s.startDate,"DD/MM/YYYY");
const c=i[i.length-2].days+1+" days";const d="DD/MM/YYYY";var h="";if(o.isSERP){h="#fc-"+a.villa.id+":not(.loaded) "
}const u=$(h+"[data-cancellation-date-days]");u.text(l).parent().addClass("loaded");u.parent().find(".before-departure").remove();
$("[data-cancellation-days]").text(c);const v=function(e,a){const t=new Date(e.getTime());t.setDate(t.getDate()-a);
return t};if(!o.isSERP){var f='<li class="green-dot"><span>'+jvh.core.fnDateFormat(r,d)+"</span><span>Holiday Booked</span></li>";
const g=o.isMyHoliday?new Date:r;const p=o.getCancellationTrackingInfo(i,n,g);o.updateTempObjectProduct(t,"currentThreshold",p.currentThreshold);
o.updateTempObjectProduct(t,"daysLeftCurrentThreshold",p.daysLeftCurrentThreshold);var m=true;$.each(i.reverse(),function(e,a){switch(e){case 0:var t=a.startDate;
if(g.getTime()<=t.getTime()){f+='<li class="green-dot"><span>Cancel up to '+jvh.core.fnDateFormat(t,d)+"</span>";
f+="<span>"+a.refundPercentage+" Refund</span></li>";$(".cancellation-info").addClass("active")}else if(!o.isMyHoliday){o.hideCancellationMessaging();
m=false;return false}break;case i.length-1:var t=v(a.endDate,1);if(g.getTime()<=t.getTime()){f+='<li class="red-dot"><span>Cancel after '+jvh.core.fnDateFormat(t,d)+"</span>"
}else{f+='<li class="red-dot"><span>Cancel after '+jvh.core.fnDateFormat(g,d)+"</span>"}f+="<span>"+a.refundPercentage+" Refund</span></li>";
break;default:const r=a.endDate;const n=a.startDate;if(g.getTime()<=n.getTime()){if(g.getTime()<=r.getTime()){f+='<li class="yellow-dot"><span>Between '+jvh.core.fnDateFormat(r,d)+" - "+jvh.core.fnDateFormat(n,d)+"</span>"
}else{f+='<li class="yellow-dot"><span>Cancel up to '+jvh.core.fnDateFormat(n,d)+"</span>"}f+="<span>"+a.refundPercentage+" Refund</span></li>"
}break}});const b=$(".cancellation-info-list");b.empty();if(m){b.addClass("traffic-lights").append(f).closest(".cancellation-info").addClass("dated active");
b.parent().removeClass("hide");if(o.isMyHoliday){b.addClass("horizontal")}}}else{const j=i[i.length-1];
if(r.getTime()>j.startDate.getTime()){o.hideCancellationMessaging(a.villaId)}else{$(".cancellation-info").addClass("active")
}}},getCancellationTrackingInfo:function(e,a,t){var r=jvh.core.cancellation.getDaysBetweenDates(a,t);
var o=0;const n={currentThreshold:null,daysLeftCurrentThreshold:null};$.each(e,function(a,t){const i=t.days;
const s=t.refundPercentage;const l=e.length-1;if(i>=r||a===l){n.currentThreshold=s;n.daysLeftCurrentThreshold=r-o;
return false}else{o=i}});return n},getDaysBetweenDates:function(e,a){const t=24*60*60*1e3;return Math.round(Math.abs((e.getTime()-a.getTime())/t))
},hideCancellationMessaging:function(e){if(typeof e!=="undefined"){$("#fc-"+e).addClass("hide").closest('.a-result[data-free-cancellation="true"]').attr("data-free-cancellation",false)
}else{$(".free-cancellation").toggleClass("hide",true);$(".cancellation-info").removeClass("active")}},updateTempObjectProduct:function(e,a,t){if(typeof e!=="undefined"){e[a]=t
}}},fnParseDate:function(e,a){if(e){var t,r,o;if(typeof a==="undefined"||a==="DD/MM/YYYY"||a==="DD/MM/YY"){const n=e.split(" ")[0].split("/");
t=parseInt(n[0]);r=parseInt(n[1])-1;o=parseInt(n[2]);o+=o<100?2e3:0}else if(a==="YYYY-MM-DD"){return new Date(e)
}else if(a==="DD MON YYYY"){const i={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
const s=e.split(" ");return new Date(s[2],i[s[1].toLowerCase()],s[0])}return new Date(o,r,t)}return},fnDateFormat:function(e,a){if(e==null){return null
}if(typeof e.iLocalMillis!=="undefined"){e=new Date(e.iLocalMillis);e.setTime(e.getTime()+e.getTimezoneOffset()*60*1e3)
}if(typeof e.getDate=="undefined"){if(typeof e.year=="undefined"){if(/^([0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2})$/.test(e)){var t=e.split(" ");
var r=t[0].split("-");var o=t[1].split(":");var n=new Date(r[0],parseInt(r[1])-1,r[2],o[0],o[1],o[2])
}else{var n=new Date(e)}}else{var n=new Date(e.year,e.monthOfYear-1,e.dayOfMonth,e.hourOfDay,e.minuteOfHour,e.secondOfMinute)
}e=n}if(a==null){return e}else if(a=="DD/MM/YYYY"){return jvh.core.fnLeadZero(e.getDate())+"/"+jvh.core.fnLeadZero(e.getMonth()+1)+"/"+e.getFullYear()
}else if(a=="YYMMDD"){return e.getYear()-100+""+jvh.core.fnLeadZero(e.getMonth()+1)+""+jvh.core.fnLeadZero(e.getDate())
}else if(a=="YY-MM-DD"){return e.getYear()-100+"-"+jvh.core.fnLeadZero(e.getMonth()+1)+"-"+jvh.core.fnLeadZero(e.getDate())
}else if(a=="YYYY-MM-DD"){return e.getFullYear()+"-"+jvh.core.fnLeadZero(e.getMonth()+1)+"-"+jvh.core.fnLeadZero(e.getDate())
}else if(a=="DD/MM/YY"){return jvh.core.fnLeadZero(e.getDate())+"/"+jvh.core.fnLeadZero(e.getMonth()+1)+"/"+(e.getFullYear()-2e3)
}else if(a=="DD MON YY"||a=="DD MON YYYY"){const i=a==="DD MON YY"?e.getFullYear()-2e3:e.getFullYear();
return jvh.core.fnLeadZero(e.getDate())+" "+jvh.core.months[e.getMonth()].substr(0,3)+" "+i}else if(a=="D MON"){var s=e.getDate();
if(e.getDate()==1||e.getDate()==21||e.getDate()==31){s=s+"st"}else if(e.getDate()==2||e.getDate()==22){s=s+"nd"
}else if(e.getDate()==3||e.getDate()==23){s=s+"rd"}else{s=s+"th"}return s+" "+jvh.core.months[e.getMonth()].substr(0,3)
}else if(a=="d MON"){var s=e.getDate();return s+" "+jvh.core.months[e.getMonth()].substr(0,3)}else if(a=="MON YYYY"){return jvh.core.months[e.getMonth()].substr(0,3)+" "+e.getFullYear()
}else if(a=="DD MON YYYY"){return jvh.core.fnLeadZero(e.getDate())+" "+jvh.core.months[e.getMonth()].substr(0,3)+" "+e.getFullYear()
}else if(a=="DD MONTH YYYY"){return jvh.core.fnLeadZero(e.getDate())+" "+jvh.core.months[e.getMonth()]+" "+e.getFullYear()
}else if(a=="HH:MM"){return jvh.core.fnLeadZero(e.getHours())+":"+jvh.core.fnLeadZero(e.getMinutes())
}else if(a=="DD/MM/YYYY HH:MM"){return jvh.core.fnDateFormat(e,"DD/MM/YYYY")+" "+jvh.core.fnDateFormat(e,"HH:MM")
}else if(a=="DD/MM/YY HH:MM"){return jvh.core.fnDateFormat(e,"DD/MM/YY")+" "+jvh.core.fnDateFormat(e,"HH:MM")
}else if(a=="DAY MON DD"){return jvh.calendar.days[e.getDay()].substr(0,3)+" "+jvh.core.months[e.getMonth()].substr(0,3)+" "+jvh.core.fnLeadZero(e.getDate())
}else if(a=="DAY DD MON YYYY"){return jvh.calendar.days[e.getDay()].substr(0,3)+" "+jvh.core.fnLeadZero(e.getDate())+" "+jvh.core.months[e.getMonth()].substr(0,3)+" "+e.getFullYear()
}},fnLeadZero:function(e){return e<10?"0"+e:e},dateFormatHelper:function(e,a){const t=new Date(e);const r=t.getFullYear();
const o=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1;const n=t.getDate()<10?"0"+t.getDate():t.getDate();
if(a){return n+"/"+o+"/"+r}else{return r+"-"+o+"-"+n}},sessionStorage:{supported:null,isSupported:function(){const e=jvh.core.sessionStorage;
if(e.supported===null){try{const a="jvhtest";window.sessionStorage.setItem(a,"1");window.sessionStorage.removeItem(a);
e.supported=true}catch(t){e.supported=false}}return e.supported},get:function(e){if(jvh.core.sessionStorage.isSupported()){const a=window.sessionStorage.getItem(e);
switch(a){case"true":return true;case"false":return false;default:return a}}return},set:function(e,a){if(jvh.core.sessionStorage.isSupported()){window.sessionStorage.setItem(e,a)
}},remove:function(e,a){if(jvh.core.sessionStorage.isSupported()){const t=a?window.sessionStorage.getItem(e):null;
window.sessionStorage.removeItem(e);return t}return}},feefo:{displayRatingsWhenLoaded:function(e){const a=new MutationObserver(function(a){const t=$(this);
$.each(a,function(){const a=$(this.target);if(a.is("feefowidget-product-stars")&&a.children().length>0){const t=e?$(".feefo-container"):a.closest(".feefo-container");
t.addClass("active");$("#reviewTab").show()}})});const t=$(".feefo-container:not(.active) .feefo-product-stars-widget");
t.each(function(){a.observe(this,{childList:true,subtree:true})});window.setTimeout(function(){a.disconnect()
},1e4)},scrollToReviews:function(e){e.preventDefault();const a=document.getElementById("customer-reviews");
if(a!==null){const t=a.offsetTop;if($("html").hasClass("eq-ie")){window.scrollTo(0,t-90)}else{window.scrollTo({top:t-90,behavior:"smooth"})
}}}},paxUtils:{getPaxCount:function(e){const a={adults:e.adults,children:0,infants:0};if(e.childAges){const t=e.childAges.split(",");
for(var r=0;r<t.length;r++){if(t[r]>=2){a.children++}else{a.infants++}}}return a}},homepage:{data:null,pods:{init:function(){const e=jvh.core.homepage.pods;
if($("#pods").length>0){e.data=homePodsData;e.data!=null&&e.data.length>0&&e.build()}},formatPodJson:function(){const e=jvh.core.homepage.pods;
try{e.data=e.data.split("(").join("{");e.data=e.data.split(")").join("}")}catch(a){console.log("Issue while formatting:"+a.message)
}},build:function(){const e=jvh.core.homepage.pods;e.formatPodJson();const a=JSON.parse(e.data)["pods"];
if(a!=null&&a.length>0){const t=$("#pods");var r="";var o;var n,i;for(var s in a){n=a[s];o=n.display==="1"?" active":"";
i="pod"+n.id;r+='<div class="box-container'+o+'" id="'+i+'" style="order: '+n.order+'">';r+="<h3>"+n.title+"</h3>";
r+='<div class="owl-carousel box-wrapper-new">';for(var l=0;l<n.items.length;l++){var c=n.items[l];r+='<div class="box-new" style="background-image:url('+c.picUrl+');" data-order="'+c.order+'">';
r+='<div class="box-gradient"></div>';r+="<a href="+c.link+">";r+='<div class="text-offer"><p>'+c.imageTitle+"</p>";
r+="<span>"+c.tag+"</span></div></a></div>"}r+="</div></div>"}t.html(r);const d=t.find(".owl-carousel");
if(d.length>0){e.initCarousels();$(window).on("viewport.changed",function(a){e.initCarousels(true)})}}},initCarousels:function(e){const a=jvh.core.homepage.pods;
const t=$("#pods .owl-carousel");e&&t.trigger("destroy.owl.carousel");t.owlCarousel(a.buildOptions());
t.find("div[data-order]").each(function(){const e=$(this);e.closest(".owl-item").css("order",e.data("order"))
})},buildOptions:function(){const e=jvh.core.breakpointRes;const a=jvh.core.viewport==="mobile";const t={loop:false,autoplay:false,autoplaySpeed:false,dots:false,startPosition:0,stageElement:"ul",itemElement:"li",mouseDrag:a,touchDrag:a,pullDrag:a,responsive:{}};
for(var r in e){var o={};var n=""+e[r];switch(r){case"mobile":o.items=1;o.nav=false;o.stagePadding=30;
break;case"large-mobile":o.items=2;o.nav=false;o.stagePadding=30;break;default:o.items=4;o.nav=false;
break}t.responsive[n]=o}return t}}}};function debounce(e,a,t){var r;return function(){var o=this,n=arguments;
var i=function(){r=null;if(!t)e.apply(o,n)};var s=t&&!r;clearTimeout(r);r=setTimeout(i,a);if(s)e.apply(o,n)
}}function trackEvent(e,a,t,r){return jvh.core.tracking.trackEvent(e,a,t,r)}function trackExternal(e,a,t,r,o,n){return jvh.core.tracking.trackOutbound(e,a,t,r,o,n)
}function openList(e,a){var t,r,o;r=document.getElementsByClassName("tabcontent");for(t=0;t<r.length;t++){r[t].style.display="none"
}o=document.getElementsByClassName("tablinks");for(t=0;t<o.length;t++){o[t].className=o[t].className.replace(" active","")
}document.getElementById(a).style.display="block";e.currentTarget.className+=" active"}function setCohort(e){const a=["DEFAULT","COUPLE","GROUP","FAMILY","GAYDIO"," ","YOUNG_FAMILY"];
const t=a.includes(e.toUpperCase());if(t){$.ajax({url:"/ajax/setCohort.ajax?cohort="+e,type:"post",dataType:"json",success:function(t){console.log(t);
if(t==true){const r=e.toUpperCase();const o=a.indexOf(r);jvh.core.settings.cohort=o}},error:function(e){console.log(e)
}})}else{console.log("Invalid cohort.")}}jvhWaitForJs(["jquery","searchbar"],function(){jvh.core.init();
jvh.core.ssltestIe();$(document).trigger("core-loaded");$("ul.tab li a").click(function(e){e.preventDefault()
});if(jvh.core.viewport=="mobile"){$(".villa-thumbnails-holder img").click(function(e){e.preventDefault()
})}else{$(".villa-thumbnails-holder img").click(function(){var e=$(this).attr("src");var a=$(this).parent().parent().parent().prev().prev().parent();
$(a).css("background","url("+e+") no-repeat center center").css("background-size","100% 100%");$(this).parent().addClass("active").siblings().removeClass("active")
})}jvh.data.jsLoaded["core"]=true;jvhTriggerEvent("core-jsLoaded")});var jvh=jvh||{};const ANY_DESTINATION="Any Destination";
const OWN_FLIGHTS="Own Flights";jvh.searchbar={destTextObj:null,waiting:null,waitingOnGoogle:null,firstrun:true,firstLoad:true,googleResults:[],ngoogleResults:0,criteria:{region:null,resort:null,villa:null,country:null,regionGroup:null,depart:null,nights:7,adults:2,children:0,childOnly:0,infants:0,childAges:null,airport:null,type:null,accommodation:null},defaultMonth:null,previousAirports:null,settings:{googleWait:1200,maxGoogleSearches:5,firstSearch:true,cachedNights:[7,10,11,14]},currentMonth:null,currentDest:null,currentDestList:null,currentVillaList:null,waitCount:0,visitedSections:{},usedKeys:false,setDestinationBy:null,defaultCriteria:null,calendarOpened:false,searchTextFocused:false,keytyped:false,validateDate:true,timeOfLastSearchKeyPress:0,isVillaOnly:false,tabView:false,editCriteria:false,searchSummaryShow:false,windowWidth:window.windowWidth,init:function(e){if(!e)return;
const a=$(document);const t=jvh.searchbar;const r=jvh.core;const o=new Date;const n=$("div.search");if(typeof e!=="undefined"){for(var i in t.criteria){if(typeof e[i]==="undefined"){e[i]=t.criteria[i]
}}t.criteria=e}if(t.criteria.airport==="-1"){t.isVillaOnly=true;t.toggleSearchbarVillaOnly()}if(r.localStorageSupported&&r.localStorage.get("searchCriteria")!==null){if(r.localStorage.get("defaultMonth")!==null){t.defaultMonth=r.localStorage.get("defaultMonth")
}tmpCriteria=JSON.parse(r.localStorage.get("searchCriteria"));if(tmpCriteria){t.firstLoad=false;if(tmpCriteria.flex!=null){t.criteria.flex=tmpCriteria.flex
}}}if(window.location.href.indexOf("apartment")>-1){t.criteria.accommodation="apartment,townhouse"}r.load.loadJs("/jvh/search/generatedJs/searchinfo.js?ver="+r.settings.ver+"&channel="+r.settings.channel.name+"&runDate="+o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear()+"-"+o.getHours()+"&includeGeo=true");
r.load.loadJs("/jvh/search/generatedJs/calendar-and-durations.js?ver="+r.settings.ver+"&channel="+r.settings.channel.name+"&runDate="+o.getDate()+"-"+(o.getMonth()+1)+"-"+o.getFullYear()+"-"+o.getHours());
$("div.search .dest-pick, div.search .all-destination-link").bind("click",function(e){t.fnDisplayDestList("div.search");
t.trackEvent(e.target.getAttribute("class"),"Click");return false});$(".find-holidays").click(function(){t.trackEvent("Open","searchbar mobile","Holiday Search Mobile");
r.tracking.trackAdobeEvent("Holiday-Search","Opens search","Find Holidays Clicked");r.tracking.disableTracking=true;
$(".search-controls .toggle-active").click();r.tracking.disableTracking=false;t.fnHideShowPanels("searchButton",true);
window.scrollTo(0,0);t.openSearchWithTabView();$(".call-me-button").hide()});$("#searchbarCalendar").bind("click",function(){t.calendar.fnDisplay(false);
return false});$("#searchbarPax").bind("click",function(){t.fnHideShowPanels(".search-pax",false);return false
});$(".search-airport").bind("click",function(){t.fnCheckAvailAirports();t.fnHideShowPanels(".search-airports",false);
return false});$("#searchbtn").bind("click",t.fnSendSearch);$(".search .done").click(function(){var e=$(this).prop("class").match(/[a-z]+-done/)[0];
t.fnHideShowPanels(e,false);if(e=="calendar-done"&&r.viewport!="mobile"){t.fnHideShowPanels(".search-pax",false)
}if(e=="pax-done"&&r.viewport!="mobile"){$("#searchbtn").click()}return false});a.on("click.closeSearchTab",function(e){const a=$(e.target);
const o=r.viewport==="mobile";if(!o&&!a.hasClass("search-tab")&&a.closest("#searchbarsettings").length===0&&a.closest("#searchbar").length===0){const n=$("#searchbarsettings > .show");
if(n.length>0){const i=n.attr("class").replace("show","").replace("search-tab").trim();t.fnHideShowPanels(i,false)
}}});t.destTextObj=$("div.search .search-dest");t.destTextObj.bind("keydown",function(e){t.fnTextSearch(e,"down")
});t.destTextObj.bind("keyup",function(e){t.fnTextSearch(e,"up")});t.destTextObj.click(function(){$(this).select()
});t.destTextObj.focusin(function(){var e=$(this);if(r.viewport==="mobile"){e.val("")}else{if(e.val().length===0){t.fnDisplayDestList("div.search")
}}t.searchTextFocused=true});t.destTextObj.focusout(function(){t.searchTextFocused=false});t.fnPlaceholder();
$("#frmSearchDuration").bind("change",function(){t.calendar.fnSetDateDuration(null,n);if($("#searchCalendar").hasClass("show")||$(".search").hasClass("searchactive")){t.trackEvent("Duration",$(this).val())
}});n.on("focus","select",function(){var e=this.id;if($(this).data("track-name")){e=$(this).data("track-name")
}t.trackEvent(e+" Open")});$("#frmSearchNoDate, #frmSearchFlexMonth").bind("change",function(){var e=$(this).data("mode");
t.calendar.fnSetDateDuration(e,n)});$(".searchbar-product-list input").bind("change",t.fnProductFilterActive);
$("#frmSearchAllDest").bind("change",function(){t.fnSetDestination(null,3,"All dest","div.search")});
t.childAge.init(n,null,t.criteria);$("#searchAirports input").bind("change",function(e){t.updateAdobeTrackingVariable()
});$(".search .search-calendar-date h3 button").bind("click",function(e){if(this.id==="monthLeft")t.calendar.fnChangeMonth(1,"arrow left");
else t.calendar.fnChangeMonth(-1,"arrow right");return false});$("#searchMobDuration").bind("click",function(){t.calendar.fnDisplay(false,"none");
t.fnMobileSelectBox($("#frmSearchDuration"),"duration-select",function(){t.fnHideShowPanels(this.id,false);
return false})});$("#mobPaxAdultPanel").bind("click",function(){t.fnMobileSelectBox($("#frmSearchAdults"),null,function(){t.fnHideShowPanels(this.id,false);
return false})});$("#mobPaxChildPanel").bind("click",function(){t.fnMobileSelectBox($("#frmSearchChildren"),null,function(){t.fnHideShowPanels(this.id,false);
return false})});$("#searchMobDate").bind("click",function(){t.calendar.fnDisplay(false,".search-calendar")
});n.on("click",".country-list li:not(.no-link), .region-list li:not(.no-link), .searchbar-dest-list li:not(.no-link)",function(e){e.stopPropagation();
if(e.keyCode===13){e.preventDefault()}t.regionListContent($(this))});const s=$(".country-list");s.on("click",".cta-dropdown.active",function(e){e.stopPropagation();
$(this).removeClass("active");$(this).parent().removeClass("selected")});s.on("click",".search-any-dest",function(){t.setSearchDestination(null,2,"any destination option","div.search");
$(".country-list li.selected, .country-list li .active").removeClass("active").removeClass("selected");
t.fnHideShowPanels("searchDestResultClose",true)});$(".search-calendar-flex .message").click(function(){$(this).removeClass("active")
});$(".search .close").bind("click",function(){t.fnHideShowPanels(this.id,false);return false});a.on("change","select.search-children, select.search-adults, select.search-infants",function(e){const a=$(this).data("autoset");
if(typeof a==="undefined"||a==="false"){var t=$("body").attr("class");if(t.indexOf("accom")>-1){t="Accommodation"
}else if(t.indexOf("shortlist")>-1){t="Shortlist"}else{t="Holiday Search"}r.tracking.trackEvent(t,$(e.target).attr("id"),$(e.target).val())
}});$("#mobileSelectPanel .close").click(function(){$("#mobileSelectPanel").removeClass("show");if(t.mobileSelectCloseCallback){t.mobileSelectCloseCallback();
t.mobileSelectCloseCallback=null}});$("#mobileSelectPanel, #searchPax, #searchAirports, #searchDestlist, #searchbarsettings").click(function(e){if(r.viewport==="mobile"&&e&&e.target==this){var a=$(this).find(".close");
a.click()}});a.on("accomLoaded",t.init2);a.on("viewport.changed",function(e,a){if(r.viewport!="mobile"){$(".search.searchactive").removeClass("searchactive");
r.removeModalScrollFixing();t.fnSetSearchBarMode("");const o=$(".filter-panel.section-toggle.toggle-active.active");
if(a==="mobile"&&o.length>0){o.removeClass("toggle-active");$('.search-controls > [data-toggle-name="filter"].toggle-active').removeClass("toggle-active")
}}else{$("#searchbar, .search").removeClass("search-dest-result-active");$(".search .search-dest-result").removeClass("show")
}t.updateSearchSummary();t.fnPlaceholder()});t.calendar.init();$("#frmSearchDuration").val(t.criteria.nights);
if($("#frmSearchDuration").val()!=t.criteria.nights){var l=document.getElementById("frmSearchDuration").options;
l[l.length]=new Option(t.criteria.nights+" nights",t.criteria.nights);$("#frmSearchDuration").val(t.criteria.nights)
}t.calendar.fnSetDateDuration(null,n);t.managePaxButtons($(".search-pax-adults"),t.criteria.adults);t.managePaxButtons($(".search-pax-infants"),t.criteria.infants);
t.managePaxButtons($(".search-pax-children"),t.criteria.childOnly);t.childAge.fnSetDefaultPax(n,t.criteria);
t.fnHideShowPanels("",true);$(".search-dest-result").on("click",".searchbar-villa-list ul li",function(){t.fnViewVilla($(this).data("villa-id"));
return false});if(jvh.defaultSearchCriteria.userRole==="WEBQUOTE"){$("#no-flights-list").show()}if(localStorage.getItem("defaultSearchCriteriaToNearestAirports")===null){if(t.firstLoad&&t.criteria.airport==="-1"){localStorage.setItem("defaultSearchCriteriaToNearestAirports","false");
t.setVillaOnlyTabView()}else if(t.firstLoad&&t.criteria.airport!=="-1"){localStorage.setItem("defaultSearchCriteriaToNearestAirports","true");
t.setVillaAndFlightTabView()}}window.addEventListener("resize",t.activateTabView);t.activateTabView();
const c=document.querySelector("body").classList.contains("results");if(c&&!t.searchSummaryShow&&r.viewport!=="mobile"&&!t.editCriteria){t.toggleSearchBar(false);
$("#searchSummaryBar").addClass("active");$(".search-open").removeClass("search-open");t.searchSummaryShow=!t.searchSummaryShow;
t.updateSearchSummary()}if(typeof jvh.areas!=="undefined"){jvh.areas.setVillaPriceAvailableFrom()}a.on("viewport.changed",function(){t.activateTabView();
t.manageMobileViewport()});t.enableAdobeTrackingForSearchbar()},fnSaveLastAirportSelection:function(){if(jvh.core.localStorageSupported&&!jvh.core.localStorage.isLocalStorageFull()){jvh.core.localStorage.set("lastAirportSelection",jvh.searchbar.criteria.airport)
}},fnLoadLastAirportSelection:function(){var e=jvh.defaultSearchCriteria.nearestAirports;if(jvh.core.localStorageSupported&&!jvh.core.localStorage.isLocalStorageFull()){const a=jvh.core.localStorage.get("lastAirportSelection");
if(a){e=a}}return e},fnCloseOpenedMenu:function(){const e=$(".search div.show");if(e.children(".close")[0]){jvh.searchbar.fnHideShowPanels(e.children(".close")[0].id,false)
}},hidePackageDropdown:function(){$("#dropdown-pointer").removeClass("show")},toggleSearchbarVillaOnly:function(){var e=jvh.searchbar.isVillaOnly;
$("#option-villa-only").removeClass("show");$("#option-villa-flights").addClass("show");$("#flight-options").html("Villa Only");
$(".search").addClass("villa-only")},updateAdobeTrackingVariable:function(){const e=jvh.searchbar.currentDest?jvh.searchbar.currentDest.name:ANY_DESTINATION;
digitalData.user.defaultSearch={destination:e,airport:jvh.searchbar.criteria.airport,nearestAirports:jvh.searchbar.criteria.nearestAirports,country:jvh.searchbar.criteria.country,region:jvh.searchbar.criteria.region,regionGroup:jvh.searchbar.criteria.regionGroup,resort:jvh.searchbar.criteria.resort,villa:jvh.searchbar.criteria.villa,depart:jvh.searchbar.criteria.depart,nights:jvh.searchbar.criteria.nights,flex:jvh.searchbar.criteria.flex,adults:jvh.searchbar.criteria.adults,children:jvh.searchbar.criteria.children,infants:jvh.searchbar.criteria.infants,childAges:jvh.searchbar.criteria.childAges,type:jvh.searchbar.criteria.type,userRole:jvh.searchbar.criteria.userRole}
},enableAdobeTrackingForSearchbar:function(){var e=!(navigator.appVersion.indexOf("MSIE 10")!==-1);if(e){const a=document.getElementById("searchbar");
const t="Holiday-Search";a&&jvh.searchbar.trackPassengersEvents(t);a&&jvh.searchbar.trackDatesEvents(t);
a&&jvh.searchbar.trackDestinationEvents(t)}},managePaxButtons:function(e,a){const t=e.find('input[type="hidden"]');
var r=0;if(e.data("pax-type").toLowerCase()=="infant"){r=a}if(e.data("pax-type").toLowerCase()=="child"){a-=r
}t.val(a);t.trigger("valueChange");e.find(".count").text(a);const o=parseInt(e.data("pax-min"));const n=parseInt(e.data("pax-max"));
const i=e.find(".remove");const s=e.find(".add");if(a===o){i.attr("disabled","disabled")}else{i.removeAttr("disabled")
}if(a===n){s.attr("disabled","disabled")}else{s.removeAttr("disabled")}},trackPassengersEvents:function(e){const a="Passengers Search";
const t=$("#searchbarPax");t.on("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Field Interaction")
});const r=$(".search-pax div[data-pax-type]");r.on("click","button",function(t){const r=$(t.target);
const o=r.closest("div");const n=o.data("pax-type");const i=r.hasClass("remove");const s=i?"removed":"added";
const l=r.siblings('input[type="hidden"]');const c=parseInt(l.val());const d=i?c-1:c+1;jvh.searchbar.managePaxButtons(o,d);
jvh.core.tracking.trackAdobeEvent(e,a,n+" passenger "+s+" | Value: "+d);return false})},trackDatesEvents:function(e){const a="Dates Search";
const t=document.getElementById("searchbarCalendar");const r=document.getElementById("frmSearchDuration");
const o=document.getElementById("calendar1frmMonth");t.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Field Interaction")
});r.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Duration Drop Down Opened")
});o.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Month Drop Down Opened")
})},trackDestinationEvents:function(e){const a="Destination Search";const t=document.getElementById("frmSearchDest");
const r=document.querySelector(".dest-pick");const o=document.querySelector(".searchbar-dest-list ul");
const n={attributes:true,childList:true,subtree:true};const i=new MutationObserver(function(t,r){t.filter(function(e){return e.type==="childList"
}).forEach(function(t){[].slice.call(t.addedNodes).forEach(function(t){const r="["+t.innerHTML.split(",")[0]+"] Typed Selected";
t.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,r)})})})});i.observe(o,n);
t.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Field Interaction")});r.addEventListener("click",function(){jvh.core.tracking.trackAdobeEvent(e,a,"Location Pin Clicked")
})},trackEvent:function(e,a,t){if(jvh.core.trackingType!=""){jvh.core.tracking.trackEvent(jvh.core.trackingType,e,a)
}else if(t){jvh.core.tracking.trackEvent(t,e,a)}else{jvh.core.tracking.trackEvent("Holiday Search",e,a)
}},init2:function(){var e=jvh.searchbar;window.setTimeout(function(){$("#searchbar .loading").removeClass("loading")
},333);countries1.sort(e.fnNameSort);regions1.sort(e.fnNameSort);regionGroups1.sort(e.fnNameSort);var a=jvh.searchbar.staticSearchData;
e.destTypes={type:[a[0],null,null,a[1]],region:regions2,regionGroup:regionGroups2,resort:resorts2,country:countries2};
regions2[4].nameAlt="Majorca";regions2[5].nameAlt="Minorca";regions2[55].nameAlt="Cephalonia";regions2[57].nameAlt="Zante";
e.settings.firstSearch=false;if(e.criteria.region!=null){e.currentDest=regions2[e.criteria.region]}else if(e.criteria.resort!=null){e.currentDest=resorts2[e.criteria.resort]
}else if(e.criteria.country!=null){e.currentDest=countries2[e.criteria.country]}else if(e.criteria.regionGroup!=null){e.currentDest=regionGroups2[e.criteria.regionGroup]
}if(!jvh.searchbar.keytyped){e.fnSetDestination(e.currentDest,3,"default","div.search",e.firstLoad)}jvh.searchbar.updateSearchSummary()
},fnCreateDurationDepartureText:function(e,a){return e+" nights, "+(a?a:"no&nbsp;date")},fnPlaceholder:function(){jvh.searchbar.destTextObj.attr("placeholder",jvh.searchbar.destTextObj.data(jvh.core.viewport==="mobile"?"short-placeholder":"long-placeholder"))
},fnNameSort:function(e,a){if(e.name<a.name){return-1}if(e.name>a.name){return 1}return 0},fnHideShowPanels:function(e,a,t,r){if(!t){t="div.search"
}var o=$(t);if(o.data("old-title")!=null&&o.data("old-title")!=""){o.data("old-title","")}if(t==="div.search"){searchPage="Holiday Search"
}else{searchPage="Destination Search"}if(o&&(o.hasClass("late-deals")||o.hasClass("seo-search"))&&e!="searchFormClose"){o.find("#searchbtn").addClass("lates-search");
jvh.searchbar.calendar.fnDisplayDuration(jvh.searchbar.currentDest,jvh.searchbar.calendar.cal.month,$("#frmSearchDuration"));
o.find("#searchbtn").off("click");o.find("#searchbtn").click(function(e){e.preventDefault();$(".date-picker button").html(jvh.searchbar.criteria.depart==null?"No date in mind":jvh.searchbar.criteria.depart);
jvh.search.alternateSearches.reSubmitSearch();jvh.searchbar.fnHideShowPanels("searchFormClose",false)
})}else{o.find("#searchbtn").removeClass("lates-search");o.find("#searchbtn").off("click");o.find("#searchbtn").click(jvh.searchbar.fnSendSearch)
}if((e==="searchDestResultClose"||e==="searchDestListClose")&&t==="div.search"&&jvh.searchbar.setDestinationBy!=null){jvh.searchbar.trackEvent("Destination "+jvh.searchbar.setDestinationBy,jvh.searchbar.currentDest==null?"any":jvh.searchbar.currentDest.name,searchPage);
jvh.searchbar.setDestinationBy=null}if(!a){if(e&&(e.indexOf("Close")>0||e.indexOf("-done")>0)){jvh.searchbar.trackEvent("Close",e,searchPage)
}else{jvh.searchbar.trackEvent("Open",e,searchPage)}}$(".close",o).removeClass("success");if(t==="div.search"){$("#searchCalendar .date-change-warning").removeClass("active");
if((e==="searchDestResultClose"||e==="searchDestListClose")&&(!(jvh.core.viewport==="mobile")&&jvh.searchbar.settings.firstSearch&&typeof jvh.searchbar.visitedSections["searchCalendar"]==="undefined"||!jvh.searchbar.calendar.fnCheckDate())){if(a||jvh.searchbar.currentDest!=null){jvh.searchbar.calendar.fnDisplay(true);
return}}if(e==="searchCalendarClose"&&a&&!(jvh.core.viewport==="mobile")&&jvh.searchbar.settings.firstSearch&&typeof jvh.searchbar.visitedSections["searchPax"]==="undefined"){jvh.searchbar.fnHideShowPanels(".search-pax",true);
return false}else if(e==="searchCalendarDateClose"&&jvh.core.viewport==="mobile"){if(jvh.searchbar.calendar.dateWhenOpened){if(jvh.searchbar.calendar.dateWhenOpened.length===7){jvh.searchbar.calendar.cal.frmMonth.val(jvh.searchbar.calendar.dateWhenOpened);
$("#frmSearchFlexMonth").prop("checked","checked");jvh.searchbar.calendar.fnSetDateDuration("month")}else{jvh.searchbar.calendar.fnSetDateDuration(jvh.searchbar.calendar.dateWhenOpened)
}}}if(e==="searchPaxClose"&&!(jvh.core.viewport==="mobile")&&jvh.searchbar.settings.firstSearch&&typeof jvh.searchbar.visitedSections["searchAirports"]==="undefined"){jvh.searchbar.fnHideShowPanels(".search-airports",true)
}if(e==="searchCalendarClose"){jvh.searchbar.checkSelectedDate();if($("#searchCalendar .date-change-warning").hasClass("active")){return
}}var n=$("body");if(!a){$(".container").addClass("search-interacted");n.removeClass("search-open");$("html").removeClass("search-open")
}const i=document.querySelector("body").classList.contains("results");if(e==="searchFormClose"){$(".search").removeClass("searchactive");
if(jvh.core.viewport==="mobile"&&digitalData.page.pageInfo.pageName==="Search results"){$("#searchSummaryBar").addClass("active");
$(".find-holidays").hide();$(".search-open").removeClass("search-open");jvh.searchbar.searchSummaryShow=true
}else if(i&&!jvh.searchbar.searchSummaryShow&&jvh.core.viewport==="mobile"&&jvh.searchbar.editCriteria){$("#searchSummaryBar").addClass("active");
$(".search-open").removeClass("search-open");jvh.searchbar.searchSummaryShow=!jvh.searchbar.searchSummaryShow
}else{$(".find-holidays").show()}$(".button-nav-bar").hide();jvh.searchbar.toggleSearchBar(false);jvh.searchbar.fnSetSearchBarMode("");
$(".call-me-button").show()}else if(e!=""){if(jvh.core.viewport==="mobile"){$(".search").addClass("searchactive");
$(".container").addClass("search-interacted");n.addClass("search-open");$("html").addClass("search-open");
$(".section-toggle .close").click();jvh.searchbar.manageContainerPushDown()}else{$(".search").removeClass("searchactive")
}$(".carousel.auto-play").removeClass("auto-play")}}if(e&&(e.indexOf("Close")>0||e.indexOf("-done")>0)){$("#"+e.substring(0,e.length-5)).removeClass("show show2");
$(".search-bar-settings").removeClass("show")}else{jvh.searchbar.visitedSections[e]=true}if($("body.search-flex-test").length==0&&e=="calendar-done"&&jvh.searchbar.settings.cachedNights.indexOf(jvh.searchbar.criteria.nights)==-1&&jvh.searchbar.criteria.depart==null&&!$("body").hasClass("search-flex-test")){var s=$(".no-date-in-mind-error");
var l=s.data("searchbar-invalid-duration");s.html(l.replace("night_num",jvh.searchbar.criteria.nights)).addClass("active");
return}var c=["search-dest-result","search-destinations","search-calendar","search-pax","search-airports","search-calendar-date"];
var d=false;for(var h=0;h<c.length;h++){if(e=="."+c[h]){$("#searchbar").removeClass(c[h].toLowerCase()+"-active");
$(".search").removeClass(c[h].toLowerCase()+"-active");$("."+c[h]+", .search-bar-settings").removeClass("show");
$("."+c[h],o).addClass("show");if(!$("."+c[h],o).hasClass("search-dest-result")){$(".search-bar-settings").addClass("show")
}$("#searchbar",o).addClass(c[h].toLowerCase()+"-active");if(e!==".search-dest-result"){d=true}else if(!o.hasClass("dest-search-box")){$(".search").addClass(c[h].toLowerCase()+"-active")
}}else{$("."+c[h],o).removeClass("show");$("#searchbar",o).removeClass(c[h].toLowerCase()+"-active");
$(".search").removeClass(c[h].toLowerCase()+"-active")}}if(jvh.core.viewport==="mobile"){if(d){jvh.core.fixModalScrolling()
}else{jvh.core.removeModalScrollFixing()}}if(e==="mobileSelectPanelClose"){return}jvh.core.searchBar.positionSearchbarPopouts()
},manageContainerPushDown:function(){$(".search-open .results .container").toggleClass("push-down-villa-only",jvh.core.viewport==="mobile"&&$("#searchbar").hasClass("villa-only"))
},checkSelectedDate:function(){if(!jvh.searchbar.calendar.fnCheckDate()){const e=jvh.searchbar.criteria.depart;
const a=jvh.searchbar.currentDest.name;const t=jvh.searchbar.calendar.getNearestAvailableDate(jvh.searchbar.calendar.fnStringToDate(e),jvh.searchbar.currentDest);
if(t!=null){var r=jvh.searchbar.calendar.cal;var o=(t.getDate()<10?"0":"")+t.getDate();var n=(t.getMonth()<9?"0":"")+(t.getMonth()+1);
var i=o+"/"+n+"/"+t.getFullYear();r.date=i;r.month=i.substring(3,10);r.root.data("current-date",i);r.fnDateSelected(i,r.root);
jvh.calendar.internal.highlightDates(r,t.getMonth(),t.getDate(),true);$("#searchCalendar .date-change-warning").html(a+" is not available on "+e+", so we reset your previously selected date")
}else{$("#searchCalendar .date-change-warning").html(a+" is not available on "+e+". Please select an available date.")
}$("#searchCalendar .date-change-warning").addClass("active")}else{$("#searchCalendar .date-change-warning").removeClass("active")
}},fnSetSearchBarMode:function(e){if(e==="late-deals"){$(".search").addClass(e);$(".search [data-track-category]").each(function(e,a){$(a).data("track-category","Late Deals Search")
});var a=$(".search .flexAmount.flex-month").addClass("hide");if($("#frmSearchFlexMonth").is(":checked")){$("#frmSearchFlexMonth").removeProp("checked")
}}else if(e=="seo-search"){$(".search").addClass(e);$(".search [data-track-category]").each(function(e,a){$(a).data("track-category","SEO Search")
})}else{$("div.search").removeClass("late-deals seo-search");$(".search [data-track-category]").each(function(e,a){$(a).data("track-category","Holiday Search")
});$(".search .flexAmount.flex-month").removeClass("hide")}},fnMobileSelectBoxShow:function(){$("#mobileSelectPanel").addClass("fade");
$("#mobileSelectPanel").addClass("show");jvh.core.fixModalScrolling()},currentMobileSelectClass:null,fnMobileSelectBox:function(e,a,t,r){jvh.searchbar.mobileSelectCloseCallback=t;
jvh.searchbar.mobileSelectDoneCallback=r;if(jvh.searchbar.currentMobileSelectClass!=null){$("#mobileSelectPanel").removeClass(jvh.searchbar.currentMobileSelectClass);
jvh.searchbar.currentMobileSelectClass=null}if(a){$("#mobileSelectPanel").addClass(a);jvh.searchbar.currentMobileSelectClass=a
}$("#mobileSelectPanel").removeClass("fade");$("#mobileSelectPanel").removeClass("show");window.setTimeout(jvh.searchbar.fnMobileSelectBoxShow,10);
$("#mobileSelectPanel > div > h2 > span").html(e.data("text"));var o=e.data("hint");var n=$("#mobileSelectPanel > div > p");
n.html(o);if(o===""){n.hide()}else{n.show()}$("#mobileSelectPanel").toggleClass("block",e.data("class")==="block");
var i=$("#mobileSelectPanel > div > ul");i.html(jvh.searchbar.fnMobileSelectBoxHtml(e,a));jvh.searchbar.fnMobileSelectBoxApplyClickAction(i,e);
var s=e.attr("id");if($(this).data("track-name")){s=e.data("track-name")}jvh.searchbar.trackEvent(s+" Open")
},fnMobileSelectBoxApplyClickAction:function(e,a){e.find("li.selectable").click(function(){jvh.searchbar.fnMobileSelectBoxSet(a,$(this).data("value"))
})},fnMobileSelectBoxHtml:function(e,a){var t=e[0].options;var r="";var o=e.data("class");var n=typeof e.data("use")!=="undefined"&&e.data("use")==="text";
var i=0;if(typeof e.data("start")!=="undefined"){i=parseInt(e.data("start"))}for(var s=i;s<t.length;s++){r+='<li class="';
if(s===e[0].selectedIndex){r+=" selected "}if(t[s].disabled){r+=' disabled ">'}else{r+='selectable" data-value="'+t[s].value+'" >'
}if(o==="block"&&!n){if(t[s].value.length===1){r+="0"}r+=t[s].value}else{if(a==="duration-select"){r+=t[s].text.substring(0,2)+"<span>"+t[s].text.substring(2)+"</span>"
}else{if(o==="block"&&t[s].text.length===1){r+="0"}var l=$(t[s]).data("display");if(l){r+=t[s].text.replace(l,l+'<span class="sub-content">')+"</span>"
}else{r+=t[s].text}}}r+="</li>"}return r},fnMobileSelectBoxSet:function(e,a){$("#mobileSelectPanel").removeClass("show");
e.val(a);e.trigger("change");if(e.hasClass("child-age-select")&&$("#modalContainer.modal-active .search-availability-panel-active").length===1){jvh.villaModal.searchPanelFns.villaAvailability.internal.criteriaChange()
}if(jvh.searchbar.mobileSelectDoneCallback){jvh.searchbar.mobileSelectDoneCallback();jvh.searchbar.mobileSelectDoneCallback=null
}},textSearchNavPos:{col:1,row:0},staticSearchData:[{id:0,name:ANY_DESTINATION,text:"type",type:null}],fnTextSearch:function(e,a,t){var r=new Date;
jvh.searchbar.keytyped=true;if(e&&(a==="up"&&e.keyCode===13||a==="down"&&e.keyCode!==13)){return}if(typeof t==="undefined"){t="div.search"
}var o=$(t);var n=jvh.searchbar;if(n.waiting!=null){window.clearTimeout(jvh.searchbar.waiting);n.waiting=null
}if(e){if(e.keyCode===38){n.textSearchNavPos.row--}else if(e.keyCode===40){n.textSearchNavPos.row++}else if(e.keyCode===37){n.textSearchNavPos.col--
}else if(e.keyCode===39){n.textSearchNavPos.col++}else if(e.keyCode===13){var i=$(".search-dest-result li.selected",o);
if(i.length===1){n.usedKeys=true;jvh.searchbar.searchTextFocused=false;i.click();n.usedKeys=false;return
}else if(jvh.searchbar.currentDest){jvh.searchbar.searchTextFocused=false;jvh.searchbar.fnSetDestination(jvh.searchbar.currentDest,1,"type then enter",t)
}}else{n.textSearchNavPos.col=1;n.textSearchNavPos.row=0}if(e.keyCode>=37&&e.keyCode<=40){if(n.textSearchNavPos.row===0)n.textSearchNavPos.row=1;
if(n.textSearchNavPos.col===0)n.textSearchNavPos.col=1;if(n.textSearchNavPos.col===3)n.textSearchNavPos.col=2;
$(".search-dest-result li.selected",o).removeClass("selected");if(n.textSearchNavPos.col===1){var s=$(".search-dest-result .searchbar-dest-list ul li",o)
}else{var s=$(".search-dest-result .searchbar-villa-list ul li",o)}if(s.length<n.textSearchNavPos.row){n.textSearchNavPos.row===s.length
}$(s[n.textSearchNavPos.row-1]).addClass("selected");return}}var l=$(".search-dest",o).val().toLowerCase();
if(l.length===0){jvh.searchbar.fnSetDestination(null,3,"All dest",t);return}$(".searchbar-villa-list h3").html("Accommodation");
$(".searchbar-villa-list h3",o).show();var c=l.match(/\d{1,7}/g);if(c){for(var d=0;d<c.length;d++){if(l===c[d]&&c[d].length<=5){if(typeof villas2[parseInt(c[d],10)]!=="undefined"){jvh.core.tracking.trackEventDelay("Holiday Search",parseInt(c[d],10),"Text entered","",1e3);
n.fnDisplayVilla(villas2[parseInt(c[d],10)],t);$(".search-dest-result").addClass("hide-destinations");
return}}else if(c[d].length===7&&t==="div.search"){n.fnDisplayBooking(parseInt(c[d],10));$(".searchbar-villa-list ul",o).html("");
return}}}$(".searchbar-dest-list h3",o).html("Destinations");var h=n.fnSimpleName(l,false);if(h.length<3)h=null;
if(typeof villas1==="undefined"){if(l.length>=3){n.waiting=window.setTimeout(function(){n.fnTextSearch(e,a,t)
},100)}return}var u=[];var v=[];var f=[countries1,regionGroups1,regions1,resorts1];if(t==="div.search"){f=[jvh.searchbar.staticSearchData].concat(f)
}for(var g=0;g<f.length;g++){for(var d=0;d<f[g].length;d++){if(f[g][d].text!="region"||f[g][d].id!=10){n.fnMatchText(f[g][d],1,l,h,u,g)
}}}for(var d=0;d<villas1.length;d++){n.fnMatchText(villas1[d],1,l,h,v,1)}var p=function(e,a){if(e.score<a.score)return-1;
if(e.score>a.score)return 1;if(e.score2<a.score2)return-1;if(e.score2>a.score2)return 1;return 0};u.sort(p);
v.sort(p);html="";var m=5;var b=5;var j=5;if(u.length>0){j=u[0].score;m=u[0].score+1}var y=5;if(v.length>0){if(v[0].score<y){y=v[0].score
}b=v[0].score+1;if(u.length===0){n.fnSetDestination(v[0].item,0,"typed first match villa",""+t+"")}}n.currentDestList=u;
var k=9;var w=9;if(v.length<9){k+=9-v.length}if(u.length<9){w+=9-u.length}var C=false;var S=(new Date).getTime();
var x=0;for(var d=0;d<u.length&&x<k;d++){if(u[d].score<=m){if(!u[d].item.usedT||u[d].item.usedT!=S){u[d].item.usedT=S;
x++;var D=u[d].item.name;if(u[d].item.parent!=null){D+=", "+u[d].item.parent.name}if(u[d].alt){D+=" ("+u[d].item.nameAlt+")"
}if(d==0){C=true;if(u[d].item.text!="type"||u.length==1){n.fnSetDestination(u[d].item,0,"typed first match",""+t+"")
}}html+='<li data-dest-id="'+u[d].item.id+'" data-dest-type="'+u[d].item.text+'" data-action="typed selected" data-click-action="1" data-location="'+t+'">';
html+=D;html+="</li>"}}}var M=false;if(typeof v[0]!=="undefined"&&typeof u[0]!=="undefined"&&v[0].score==0&&v[0].score<u[0].score){M=true
}var T="";n.currentVillaList=v;var L=0;for(var d=0;d<v.length&&L<w;d++){if(v[d].score<=m){var D=v[d].item.name;
if(v[d].item.parent!=null){D+="<span>, "+v[d].item.parent.parent.name+"</span>"}if(d==0&&(!C||M)){n.fnSetDestination(v[d].item,0,"typed first match villa",""+t+"")
}T+='<li data-villa-id="'+v[d].item.id+'">';T+=D;T+="</li>";L++}}$(".search-dest-result").toggleClass("hide-destinations",x===0).toggleClass("hide-villas",L===0);
if(j>3&&y>1&&t=="div.search"){n.fnAskGoogle(l,t)}n.fnHideShowPanels(".search-dest-result",true,t);$(".search-dest-result .searchbar-dest-list ul",o).html(html);
$(".search-dest-result .searchbar-villa-list ul",o).html(T);n.firstrun=false;if(t=="div.search"){searchPage="Holiday Search"
}else{searchPage="Destination Search"}jvh.searchbar.timeOfLastSearchKeyPress=new Date;window.setTimeout(function(){var e=new Date;
if(jvh.searchbar.timeOfLastSearchKeyPress.getTime()+500>e.getTime()){if($(".search").hasClass("late-deals")){jvh.core.tracking.trackEventDelay("Late Deals Search",$("#frmSearchDest").val(),"Text entered","",1e3)
}else{if($(".search-dest-result").hasClass("hide-villas")&&$(".search-dest-result").hasClass("hide-destinations")){jvh.core.tracking.trackEventDelay(searchPage,$("#frmSearchDest").val(),"No matches found","",1e3)
}else{jvh.core.tracking.trackEventDelay(searchPage,$("#frmSearchDest").val(),"Text entered","",1e3)}}}},500)
},fnAskGoogle:function(e,a){var t=jvh.searchbar;if(t.ngoogleResults>t.settings.maxGoogleSearches){return
}if(e!=null){if(e.replace(/[0-9]+/,"").length<4){return}t.googleSearchText=e;t.googleSearchTarget=a;if(t.waitingOnGoogle!=null){window.clearTimeout(t.waitingOnGoogle);
t.waitingOnGoogle=null}t.waitingOnGoogle=window.setTimeout(t.fnAskGoogle,t.settings.googleWait)}else{window.clearTimeout(t.waitingOnGoogle);
t.waitingOnGoogle=null;if(t.googleSearchText.length>=4&&t.googleSearchText.length==t.googleSearchText.replace(" ","").length||t.googleSearchText.length>=8){var r=t.googleSearchText;
var o=t.googleSearchTarget;if(typeof t.googleResults[r]!=="undefined"){t.fnProcessGoogleResults(t.googleResults[r],o)
}else{t.googleResults[t.googleSearchText]={data:null};t.ngoogleResults++;var n=t.googleSearchText;if(n.indexOf(",")==-1){n+=", Europe"
}jvh.core.load.loadMap(function(){var e=new google.maps.Geocoder;var a=new google.maps.LatLng(26.975961,-18.761622);
var t=new google.maps.LatLng(44.241286,60.886815);var i=new google.maps.LatLngBounds(a,t);e.geocode({address:n,bounds:i},function(e,a){if(a=="OK"){jvh.searchbar.googleResults[r]=e;
jvh.searchbar.fnProcessGoogleResults(e,o)}})})}}}},fnProcessGoogleResults:function(e,a){var t=null;var r=[null,null];
var o=$(a);for(var n=0;n<e.length&&n<=3;n++){result=e[n];var i=result.address_components[0].long_name;
if(result.address_components.length>1&&result.address_components[1].long_name!=i){i+=", "+result.address_components[1].long_name
}if(result.address_components.length>2&&result.address_components[result.address_components.length-1].long_name!=result.address_components[0].long_name&&result.address_components[result.address_components.length-1].long_name!=result.address_components[2].long_name){i+=", "+result.address_components[result.address_components.length-1].long_name
}if(typeof result.geometry.bounds!=="undefined"){var s=result.geometry.bounds.getCenter().lat();var l=result.geometry.bounds.getCenter().lng()
}else{var s=result.geometry.location.lat;var l=result.geometry.location.lng}for(var c=0;c<regions1.length;c++){var d=regions1[c];
if(d.lat!=0){var h=Math.pow(Math.abs(s-d.lat),2)+Math.pow(Math.abs(l-d.lng),2);if(t==null||h<t){t=h;region=d;
r[1]=r[0];r[0]={name:i,lat:s,lng:l,region:d,result:result,dist:h,lastName:result.address_components[result.address_components.length-1].long_name}
}}}}if(a=="div.search"){searchPage="Holiday Search"}else{searchPage="Destination Search"}var u=null;for(var n=0;n<r.length;n++){var v=r[n];
var f=document.getElementsByClassName("show-dest-list");if(v!=null&&u!=v.name){$(".searchbar-dest-list ul li.proximity",o).remove();
u=v.name;if(v.lat>49.3089927&&v.lat<61.082896&&v.lng>-12.0234282&&v.lng<2.186437&&!(v.lat<51.106736&&v.lng>1.421095)){jvh.searchbar.trackEvent("Google cottages uk shown",v.name,searchPage);
$(".searchbar-dest-list ul",o).append('<li class="no-link proximity"><strong>'+v.name+"</strong>: Looking for properties in "+v.lastName+"? Our sister company <a href=\"http://www.cottages.com\" onclick=\"jvh.searchpage.trackEvent('Google cottages uk','"+v.name+"', '"+searchPage+"'); return true\">cottages.com</a> will be able to help.</li>");
$(".search-dest-result").removeClass("hide-destinations")}}}},fnMatchText:function(e,a,t,r,o,n){if(jvh.searchbar.firstrun){jvh.searchbar.fnSimpleName(e,true)
}var i=e.name.toLowerCase();var s=null;var l=i.indexOf(t);var c=t.replace("villa ","").replace("casa ","").replace("the  ","");
var d=i.indexOf(c);if(e.nameAlt){s=e.nameAlt.toLowerCase();var h=s.indexOf(c);var u=s.indexOf(t)}else{var u=-1;
var h=-1}if(c.length<3){d=-1}if(i===c||s===c){o[o.length]={type:a,item:e,score:0,score2:n-.5,alt:s===c&&i!==c}
}else if(l==0||u==0){o[o.length]={type:a,item:e,score:1,score2:n-.5,alt:u===0&&l!==0};if(e.regions&&e.regions.length>0&&(e.text!="country"||e.id!=6)){for(var v=0;v<e.regions.length;v++){o[o.length]={type:a,item:e.regions[v],score:2,score2:n-.5}
}}}else if(d==0||h==0){o[o.length]={type:a,item:e,score:1,score2:n,alt:h===0&&d!==0}}else if(l>0||d>0){o[o.length]={type:a,item:e,score:2,score2:n}
}else{var f=0;if(r!=null&&e.name2.indexOf(r)>=0){if(r.length>5){f=3}else if(r.length>=4){f=4}else{f=5
}}if(t.length>=3&&f!=3){var g=0;var p=0;var m="";for(var v=0;v<t.length;v++){var b=t.substring(v,v+1);
var j=false;for(var y=g;y<i.length;y++){if(i.substring(y,y+1)==b){var k=1;if(y==g){p+=1.5;m+=":"+b+"="+y+","+g+" "+p+" +1"
}else if(y==g+1){p+=.5;m+=":"+b+"="+y+","+g+" "+p+" +0.5"}else if(y==g+2){p+=-.5;m+=":"+b+"="+y+","+g+" "+p+" -0.5"
}else if(y>=g+3){var w=false;if(v<t.length+1){for(var C=g;C<i.length&&C<g+3;C++){if(i.substring(y,y+1)==t.substring(v+1,v+2)){w=true
}}}if(w){p+=-.5;m+=":"+b+"="+y+","+g+" "+p+" -0.5A";k=0}else{p+=-2;m+=":"+b+"="+y+","+g+" "+p+" -2B"}}g=y+k;
j=true;break}}if(!j){p+=-1;m+=":"+b+"=X,"+g+" "+p+" -2"}}if(p>=t.length*.8){f=3}else if(p>=t.length*.7){f=4
}else if(p>=t.length*.6&&f==0){f=5}}if(f>0){o[o.length]={type:a,item:e,score:f,score2:n}}}},fnSimpleName:function(e,a){var t=null;
if(a){t=e.name}else{t=e}t=t.toLowerCase().replace(/(\w)\1+/,"$1").replace(/(o|u)+/g,"o").replace(/(e|i)+/g,"e").replace(/[s]/g,"c").replace(/[z]/g,"c").replace(/[k]/g,"c").replace(/[v]/g,"f").replace(/[j]/g,"g");
if(a){e.name2=t}else{return t}},fnDisplayVilla:function(e,a){var t=jvh.core.images.villaImg(e.id,1,e.picture);
var r=$(a);jvh.searchbar.fnHideShowPanels(".search-dest-result",true,a);$(".search-dest-result").removeClass("hide-villas");
$(".searchbar-villa-list h3",r).html("Property ID: "+e.id);$(".searchbar-villa-list ul",r).html('<li class="villa-booking" data-villa-id="'+e.id+'"><span><span class="villa-name">'+e.name+"</span>, "+e.resort.name+", "+e.resort.region.name+' </span><img src="'+t+'"/><button class="cta small" >View Villa</button></li>')
},fnDisplayBooking:function(e){jvh.searchbar.fnHideShowPanels(".search-dest-result",true);$(".searchbar-dest-list h3").html("Holiday reference: "+e);
$(".search-dest-result > .searchbar-dest-list ul").html('<li class="villa-booking"><img src="/images/jvh/ui/search/myholiday.jpg" onclick="window.location=\'/myholiday/?holidayId='+e+'\'; return false;" /><span><h4>View or amend booking</h4>Login to view in my holiday.<button class="cta" onclick="window.location=\'/myholiday/?holidayId='+e+"'; return false;\">MyHoliday</button></span></li>");
$(".searchbar-villa-list h3").hide()},fnViewVilla:function(e){window.location=jvh.core.link.villa(e)},fnProductFilterActive:function(){jvh.searchbar.fnProductFilterActiveDirect($(this));
jvh.searchbar.fnDisplayDestList("div.search");if($(this).data("name")){jvh.searchbar.trackEvent("Collection "+this.checked,$(this).data("name"))
}},fnProductFilterActiveDirect:function(e,a){if(e.length>0&&e.attr("id")=="productAll"&&e.prop("checked")){$(".searchbar-product-list .collection-colour input").prop("checked",false).each(function(e,a){jvh.searchbar.fnManageCheckBox(a)
});jvh.searchbar.criteria.category=null}else{var t=$(".searchbar-product-list .collection-colour input:checked");
if(t.length==0){$("#productAll input").prop("checked",true).each(function(e,a){jvh.searchbar.fnManageCheckBox(a)
});jvh.searchbar.criteria.category=null}else{$("input#productAll").prop("checked",false).each(function(e,a){jvh.searchbar.fnManageCheckBox(a)
});var r=0;t.each(function(e,a){var t=parseInt(a.value);r-=t});jvh.searchbar.criteria.category=r}}},fnDisplayDestList:function(e){jvh.core.waitForTrigger("accomLoaded",typeof accomInfoLoaded,"searchbarDest",function(){var a="";
var t=null;var r=$(e);var o=$(".country-list li.selected",r);if(o.length>0){t=o[0].id}if(jvh.searchbar.currentDest!=null){var n=jvh.searchbar.fnGetCountryFromDest(jvh.searchbar.currentDest);
t="search-country-"+n.id}a+='<li class="search-any-dest"><span>'+ANY_DESTINATION+"</span></li>";for(var i=0;i<countries1.length;i++){var s=countries1[i];
a+='<li class="search-country-'+s.id;if(t=="search-country-"+s.id){a+=" selected"}if(jvh.searchbar.criteria.category<0&&(s.hasCategory&Math.abs(jvh.searchbar.criteria.category))==0){a+=' disable"'
}else{a+='" data-dest-id="'+s.id+'" data-dest-type="country" data-action="list country" data-click-action="2" data-location="'+e+'"'
}a+='><span class="cta-dropdown';if(t=="search-country-"+s.id){a+=" active"}a+='">'+s.name+'</span><ul class="region-list">';
a+=jvh.searchbar.fnDisplayRegionListHtml(s,e)+"</ul></li>"}$(".search-destinations ul.country-list",r).html(a)
});jvh.searchbar.fnHideShowPanels(".search-destinations",true,e);return false},fnDisplayRegionListHtml:function(e,a){var t=jvh.searchbar;
var r="";if(a=="div.search"||a!="div.search"&&jvh.core.viewport!="mobile"){r="<li";if(t.criteria.category<0&&(e.hasCategory&Math.abs(t.criteria.category))==0){r+=' class="disable no-link"'
}else{r+=' data-dest-id="'+e.id+'" data-dest-type="country" data-action="list country all" data-click-action="1" data-location="'+a+'"'
}if(a=="div.search"){var o="All"}else{var o="View"}r+=">"+o+" "+e.name+"</li>"}var n=[];for(var i=0;i<e.regions.length;i++){n[n.length]=e.regions[i];
if(e.regions[i].group!=null){var s=false;for(var l=0;l<n.length;l++){if(n[l]==e.regions[i].group){s=true;
break}}if(!s){n[n.length]=e.regions[i].group}}}n.sort(jvh.searchbar.fnNameSort);for(var i=0;i<n.length;i++){var c=n[i];
if(!(c.text=="region"&&c.id==10)){r+="<li";if(t.criteria.category<0&&(c.hasCategory&Math.abs(t.criteria.category))==0){r+=' class="disable no-link"'
}else{if(c==jvh.searchbar.currentDest){r+=' class="selected"'}if(c.text=="region"){regionType="region";
action="list region"}else{regionType="regionGroup";action="list group"}clickAction="1";r+=' data-dest-id="'+c.id+'" data-dest-type="'+regionType+'" data-action="'+action+'" data-click-action="'+clickAction+'" data-location="'+a+'"'
}r+=">"+c.name+"</li>"}}return r},regionListContent:function(e){var a=e.data("dest-id");if(typeof a==="undefined")return;
var t=e.data("click-action");var r=e.data("dest-type");var o=e.data("location");var n=jvh.searchbar.destTypes[r][a];
if(o=="div.search"){var i=e.data("action");var t=e.data("click-action");jvh.searchbar.fnSetDestination(n,t,i,o)
}else{if(r=="country"){link=jvh.core.link.countryLink(n)}else if(r=="regionGroup"){link=jvh.core.link.regionGroupLink(n)
}else if(r=="resort"){link=jvh.core.link.resortLink(n.name,n.region)}else{link=jvh.core.link.regionLink(n)
}jvh.core.tracking.trackOutbound(link,"Destination Quick Search",n.name+" selected","CTA",null,false)
}},fnValidSearch:function(e){var a=jvh.searchbar.criteria;var t=$("body > .curtains");if(a.depart!=null&&jvh.searchbar.currentDest!=null&&jvh.searchbar.validateDate){if(!jvh.searchbar.calendar.fnCheckDate()){jvh.searchbar.calendar.fnDisplay(false);
var r=jvh.searchbar.calendar.fnStringToDate(a.depart);if(jvh.searchbar.calendar.fnCheckDate(true)){jvh.searchbar.checkSelectedDate();
jvh.searchbar.trackEvent("valid search","departure day not available")}else{var o=jvh.searchbar.calendar.fnGetMonthsAvail(jvh.searchbar.currentDest);
var n=null,i=null;for(var s=0;s<o.length;s++){if(o[s].getTime()<r.getTime()){n=o[s]}if(o[s].getTime()>r.getTime()){i=o[s];
break}}var l='<div class="message error active"><h2>'+jvh.calendar.months[parseInt(a.depart.substring(3,5))-1]+" unavailable</h2>We're sorry, but "+jvh.searchbar.currentDest.name+" is not available in "+jvh.calendar.months[parseInt(a.depart.substring(3,5))-1]+".";
if(n!=null&&i!=null){l+=" The nearest availble months are "+jvh.calendar.months[n.getMonth()]+" "+n.getFullYear()+" and "+jvh.calendar.months[i.getMonth()]+" "+i.getFullYear()+"."
}else if(n!=null||i!=null){var c=n||i;l+=" The nearest availble month is "+jvh.calendar.months[c.getMonth()]+" "+c.getFullYear()+"."
}l+="<br/><br/> Please select an alternative month or try another destination.</div>";jvh.core.showModal(l,"50%");
jvh.searchbar.trackEvent("valid search","month not available")}return false}var o=jvh.searchbar.calendar.fnGetMonthsAvail(jvh.searchbar.currentDest);
var d=null;o.forEach(function(e){if(jvh.core.fnLeadZero(e.getMonth()+1)+"/"+e.getFullYear()==a.depart.substring(3,10))d=e
});if(!d){jvh.searchbar.calendar.fnDisplay(false);jvh.core.showModal('<div class="message error active"><h2>'+jvh.calendar.months[parseInt(a.depart.substring(3,5))-1]+" not available</h2>Sorry but "+jvh.searchbar.currentDest.name+" is not available in "+jvh.calendar.months[parseInt(a.depart.substring(3,5))-1]+".<br/><br/> Please select an alternative month or try alternative destination.</div>","50%");
jvh.searchbar.trackEvent("valid search","month not available");return false}else{}}if($("body.search-flex-test").length==0&&a.depart==null&&jvh.searchbar.settings.cachedNights.indexOf(a.nights)==-1){var h=$(".no-date-in-mind-error");
jvh.searchbar.calendar.fnDisplay(false);h.addClass("active").removeClass("flash");if(jvh.searchbar.calendar.warnedNights){jvh.searchbar.flashItem(h)
}jvh.searchbar.calendar.warnedNights=true;jvh.searchbar.trackEvent("valid search","nights not applicable NDIM "+a.nights);
return false}if(a.airport!=null&&a.airport.length>19){if(!e){jvh.searchbar.fnHideShowPanels(".search-airports",true)
}t.addClass("active");jvh.core.showModal('<div class="message error active"><h2>Too many airports</h2>Sorry but we can only search on up to 5 departure airports, please can you amend your selection.</div>',"50%");
jvh.searchbar.trackEvent("valid search","too many airports");return false}return true},flashItem:function(e){e.addClass("flash");
window.setTimeout(function(){e.removeClass("flash")},1e3)},fnSendSearch:function(){var e=$(".search");
if(!e.hasClass("searchactive")&&jvh.core.viewport=="mobile"){jvh.searchbar.fnHideShowPanels("searchButton",false);
return false}if(jvh.searchbar.fnValidSearch()){var a=jvh.searchbar.criteria;var t=jvh.searchbar.getSearchLink(a);
jvh.searchbar.logSearch(a);jvh.core.tracking.trackAdobeEvent("searchclick");window.setTimeout(function(){window.location=jvh.searchbar.createSearchUrl(t)
},200)}return false},createSearchUrl:function(e){return"/search-results"+e+"&width="+$(window).width()
},getSearchLink:function(e){var a="";var t="?";var r=$("body.search-flex-test").length>0;var o=$("#flexOverride :selected").val();
jvh.searchbar.criteria.flex=3;if(jvh.searchbar.currentDest==null){jvh.searchbar.criteria.flex=1}else{var n=jvh.searchbar.fnGetRegionFromDest(jvh.searchbar.currentDest);
var n=n.parent||n;if(n.text=="country"&&(n.id==6||n.id==7||n.id==16)){jvh.searchbar.criteria.flex=7}}for(var i in e){var s=e[i];
if(i=="flex"&&s==null){s=3}if(s!=null&&"cheapestResult,searchDate,filterId".split(",").indexOf(i)==-1){if(i=="villa"){i="accomId"
}if(i=="airport"&&s==""){s="-1"}a+=t+i+"="+s;t="&"}}if($("#frmSearchFlexMonth").prop("checked")){var l=0;
if(jvh.searchbar.defaultMonth&&jvh.searchbar.defaultMonth.length==7){var c=parseInt(jvh.searchbar.defaultMonth.substr(3,4));
l=parseInt(jvh.searchbar.defaultMonth.substr(0,2))-1;var d=new Date;var h=c-d.getFullYear();if(h>0){l+=12*h
}}a+="&month="+jvh.searchbar.calendar.cal.getMonthPos(l)}if(r&&o>0&&o<30&&a.indexOf("depart")>-1){a+="&flexOverride="+o
}return a},syncDurations:function(e,a){const t="surpress-change-event";if($(e).hasClass(t)){$(a).removeClass(t);
return}$(a).addClass(t);var r=e.selectedIndex;$(a+" option").eq(r).prop("selected",true)},setupFlexOverrideTest:function(){$("body").addClass("search-flex-test");
$(".flexAmount.disable").removeClass("disable");$("#searchCalendar").on("change","#flexDuration",function(){jvh.searchbar.resetSearchErrors();
$(".flexAmount.disable").removeClass("disable");if($(this).val()!=35){$(".test-too-many-nights").removeClass("active");
jvh.searchbar.syncDurations(this,"#frmSearchDuration")}else{$(".test-too-many-nights").addClass("active")
}});$("#searchCalendar").on("change","#frmSearchDuration",function(){jvh.searchbar.syncDurations(this,"#flexDuration")
});$("#searchCalendar").on("click",".next-year, .previous-year",function(){jvh.searchbar.resetSearchErrors();
const e=$("#selectedYear");if(e){var a=parseInt(e.val())-1;var t=function(e){return e.getTime()<=new Date("12/31/"+a).getTime()
};if($(this).hasClass("next-year")){a=parseInt(e.val())+1;t=function(e){return e.getTime()>=new Date("01/01/"+a).getTime()
}}var r=e.val();if(jvh.searchbar.calendar.fnGetMonthsAvail().filter(t).length>0){r=a}$(".year-label").text(r);
e.val(r);jvh.searchbar.calendar.fnDisplay(true)}});$("#searchCalendar").on("change","#flexOverride",function(){const e=$(this);
jvh.searchbar.resetSearchErrors(e);const a=$("#frmSearchFlexMonth");const t=$("#frmSearchNoDate");const r=e.children(":selected").val();
const o=$(".flex-test-button");const n=$("#flexDuration");if(r==30){var i=(new Date).getFullYear();if(jvh.searchbar.defaultMonth&&jvh.searchbar.defaultMonth.indexOf("/")>-1){i=jvh.searchbar.defaultMonth.split("/")[1]
}$(".year-label").text(i);$("#selectedYear").val(i);a.prop("checked",true)}o.toggleClass("date-picked",r==-1);
t.prop("checked",r==-1);if(!e.hasClass("disable-auto-tracking")){jvh.core.localStorageSupported&&jvh.core.localStorage.set("flexOverride",r);
setTimeout(function(){jvh.searchbar.calendar.fnDisplay(true)},100)}});$("#searchCalendar").on("click",".monthly-selector li label.active",function(){jvh.searchbar.resetSearchErrors();
const e=$(this);const a=$("#calendar1frmMonth");const t=e.find("radio").attr("value");if(e.hasClass("selected")||!a||jvh.searchbar.durationMonthCachedAvailability(t,7)==2){if(jvh.searchbar.durationMonthCachedAvailability(t,7)==2){jvh.searchbar.activateSearchError("month-out-of-range")
}return}$(".monthly-selector li label").removeClass("selected");e.addClass("selected");const r=$("#frmSearchFlexMonth");
if(r&&!r[0].checked){r.prop("checked",true)}a.val(t)});const e=$("#flexOverride");const a=jvh.core.localStorageSupported&&jvh.core.localStorage.get("flexOverride")?jvh.core.localStorage.get("flexOverride"):null;
if(e){e.addClass("disable-auto-tracking");if($("#frmSearchFlexMonth").prop("checked")&&jvh.searchbar.defaultMonth!=null){e.find("[value='30']").prop("selected",true)
}else if($("#frmSearchNoDate").prop("checked")){e.find("[value='-1']").prop("selected",true)}else if(a){e.find("[value='"+a+"']").prop("selected",true)
}else if(jvh.flexTest&&jvh.flexTest.newDefault){e.find("[value='"+jvh.flexTest.newDefault+"']").prop("selected",true)
}setTimeout(function(){e.removeClass("disable-auto-tracking")},200)}},resetSearchErrors:function(e){if(!e||!e.hasClass("retain-errors")){$(".flex-test-error").removeClass("active")
}},activateSearchError:function(e){trackEvent("searchbar error shown",e);$(".flex-test-error."+e).addClass("active")
},newSearchCheck:function(e,a){if(jvh.core.localStorageSupported&&e!=a){jvh.core.localStorage.set("newSearch",true)
}},logSearch:function(e){if(jvh.core.localStorageSupported){jvh.core.localStorage.set("searchCriteria",JSON.stringify(e));
var a=[];if(jvh.core.localStorage.get("searchhistory")!==null){a=JSON.parse(jvh.core.localStorage.get("searchhistory"))
}var t=[];e.filterId=Math.random();t[0]=e;for(var r=0;r<a.length&&r<19;r++){var o=false;for(var n=0;n<t.length;n++){if(jvh.searchbar.fnCompareBasicObjects(t[n],a[r],"filterId,cheapestResult,searchDate")){o=true;
break}}if(!o){t[t.length]=a[r]}}jvh.core.localStorage.set("searchhistory",JSON.stringify(t))}},fnCompareBasicObjects:function(e,a,t){var r=[];
if(t!=null){r=t.split(",")}for(item in e){if(r.indexOf(item.valueOf())==-1){var o=e[item];var n=a[item];
if(typeof n==="undefined"||o!=n){return false}}}return true},fnManageCheckBox:function(e,a){if(typeof a!=="undefined"){e.checked=a
}if(typeof e.fnManageCheckbox!=="undefined")e.fnManageCheckbox()},fnSetDestination:function(e,a,t,r,o){var n=$(r);
jvh.searchbar.setDestinationBy=jvh.searchbar.usedKeys?"typed arrow keys":t;if(typeof window.event!="undefined"&&window.event!=null){window.event.cancelBubble=true
}if(r=="div.search"){jvh.searchbar.setSearchDestination(e,a,t,r,o)}if(a==2){$(".country-list li.selected, .country-list li span",n).removeClass("selected").removeClass("active");
$(".search-country-"+e.id,n).addClass("selected");$(".search-country-"+e.id+" > span",n).addClass("active")
}},setSearchDestination:function(e,a,t,r,o){var n=$(r);var i=ANY_DESTINATION;jvh.searchbar.currentDest=e;
if(e==null){if(jvh.core.viewport=="mobile"&&t!="default"){jvh.searchbar.fnHideShowPanels("searchDestResultClose",true)
}if(o){i=""}}else{i=e.name}if(a!=0&&!jvh.searchbar.searchTextFocused){$(".search-dest",n).val(i);$(".search-dest-text",n).html(i||$("#frmSearchDest").attr("placeholder"));
$("#searchSummaryDest").text(i)}if(a==1&&a!=3){jvh.searchbar.fnHideShowPanels("searchDestResultClose",true);
if(jvh.core.viewport!="mobile"){jvh.searchbar.calendar.fnDisplay(true)}}else{if(t=="list country"){jvh.searchbar.trackEvent("Country selected",e.name)
}else if(t=="All dest"){jvh.searchbar.trackEvent("All destinations")}}jvh.searchbar.criteria.region=null;
jvh.searchbar.criteria.resort=null;jvh.searchbar.criteria.regionGroup=null;jvh.searchbar.criteria.country=null;
jvh.searchbar.criteria.villa=null;if(e!=null){if(e.text=="type"){jvh.searchbar.criteria.type=e.type;jvh.searchbar.currentDest=null;
if(a!=3){jvh.searchbar.fnProductFilterActiveDirect($(".searchbar-product-list input[value="+e.type+"]"),true)
}}else{jvh.searchbar.criteria[e.text]=e.id;jvh.searchbar.criteria.type=null}}jvh.searchbar.updateAdobeTrackingVariable()
},fnGetRegionList:function(e){var a=[e];if(e==null){a=[]}else if(e.text=="resort"){a=[e.region]}else if(e.text=="country"||e.text=="regionGroup"){a=e.regions
}return a},fnGetRegionFromDest:function(e){if(e!=null){if(e.text==="resort"){return e.region}else if(e.text==="villa"){return e.resort.region
}}return e},fnGetCountryFromDest:function(e){var e=jvh.searchbar.fnGetRegionFromDest(e);if(e.text=="regionGroup"){e=e.regions[0]
}if(e.text!="country"){return e.parent}return e},durationMonthCachedAvailability:function(e,a){var t=e?e:jvh.searchbar.calendar.cal.frmMonth.val()||this.calendar.cal.month;
var r=a?a:$("#frmSearchDuration").val();var o=(new Date).getFullYear();var n=jvh.searchbar.calendar.fnStringToDate("01/"+t).getFullYear()-o;
if(jvh.searchbar.settings.cachedNights.indexOf(parseInt(r))==-1){return 1}else if(n>1){return 2}return 0
},fnCheckFlexMonthNoDate:function(){var e=$(".search-calendar-flex .flex-month");var a=$(".search-calendar-flex .nodate");
var t=$(".flex-month-error");var r=document.getElementById("frmSearchFlexMonth");var o=document.getElementById("frmSearchNoDate");
if($("body").hasClass("search-flex-test")){return}switch(jvh.searchbar.durationMonthCachedAvailability()){case 1:e.addClass("disable");
a.addClass("disable");jvh.searchbar.fnManageCheckBox(r,false);jvh.searchbar.fnManageCheckBox(o,false);
break;case 2:e.addClass("disable");a.removeClass("disable");if(r.checked==true){jvh.searchbar.fnManageCheckBox(r,false);
if($(".search-calendar").is(":visible")){t.addClass("active");$("#wholeMonthLimitYear").text((new Date).getFullYear()+1)
}}break;default:e.removeClass("disable");a.removeClass("disable");$("#searchCalendar .message").removeClass("active")
}},calendar:{cad:[],maxDate:null,changeMethod:null,monthsFlex:[],cal:null,currentMonthForFlexMonth:null,init:function(){var e=jvh.searchbar.calendar;
jvh.core.waitForTrigger("calendarDataLoaded",typeof cfeed,"searchbarCalData",function(){e.initData();
jvh.core.waitForTrigger("accomLoaded",typeof accomInfoLoaded,"searchbarDurAccomData",e.fnInitDurations)
});var a={navTag:"div",trackCategory:"Holiday Search",monthChanged:function(e){var a=jvh.searchbar.defaultMonth;
jvh.searchbar.currentMonth=e;jvh.searchbar.defaultMonth=e;if(jvh.core.localStorageSupported){jvh.core.localStorage.set("defaultMonth",jvh.searchbar.defaultMonth)
}jvh.searchbar.calendar.fnDisplayDuration(jvh.searchbar.currentDest,jvh.searchbar.calendar.cal.month,$("#frmSearchDuration"));
if($("#frmSearchFlexMonth").prop("checked")){if(jvh.core.viewport=="mobile"&&e!=jvh.searchbar.calendar.currentMonthForFlexMonth&&!$("body").hasClass("search-flex-test")){jvh.searchbar.calendar.currentMonthForFlexMonth=a;
document.getElementById("frmSearchFlexMonth").checked=false;jvh.searchbar.calendar.fnSetDateDuration("")
}else{jvh.searchbar.calendar.fnSetDateDuration("month")}}else if(jvh.searchbar.calendar.currentMonthForFlexMonth==e){jvh.searchbar.fnManageCheckBox(document.getElementById("frmSearchFlexMonth"),true);
jvh.searchbar.calendar.currentMonthForFlexMonth=null}jvh.searchbar.fnCheckFlexMonthNoDate()},defaultMonth:jvh.searchbar.defaultMonth,getDuration:function(){var e=jvh.searchbar.criteria.nights;
if(e==null){e=$("#frmSearchDuration").val();if(e){e=parseInt(e)}else{return null}}return e},fnMonthsAvailable:function(){return jvh.searchbar.calendar.fnGetMonthsAvail(jvh.searchbar.currentDest)
},fnMonthData:function(e,a){return jvh.searchbar.calendar.fnGetDates(e,jvh.searchbar.currentDest,a)},getCurrentDate:function(e){if(jvh.searchbar.criteria.depart==null&&$("#frmSearchFlexMonth").is(":checked")&&e){return"month"
}return jvh.searchbar.criteria.depart}};e.cal=jvh.calendar.init("#searchCalendarDate",a,function(e){jvh.searchbar.calendar.fnSetDateDuration(e,$("div.search"))
})},initData:function(){var e=jvh.searchbar.calendar;var a=e.cad;var t=cfeed;for(var r=0;r<t.length;r+=16){var o=t.substr(r,16);
a[a.length]=new e.c_rd(o.substr(0,2),o.substr(2,6),o.substr(8,6),o.substr(14,1),o.substr(15,1))}},c_rd:function(e,a,t,r,o){if(e.charCodeAt(0)>=97){this.region=(e.charCodeAt(0)-97)*10+100+parseInt(e.substring(1))
}else{this.region=parseInt(e,10)}this.start=new Date(parseFloat("20"+a.substr(4,2)),a.substr(2,2)-1,a.substr(0,2));
this.end=new Date(parseFloat("20"+t.substr(4,2)),t.substr(2,2)-1,t.substr(0,2));this.day=r;this.f=o;if(jvh.searchbar.calendar.maxDate==null||jvh.searchbar.calendar.maxDate.getTime()<this.end.getTime())jvh.searchbar.calendar.maxDate=this.end
},fnDisplay:function(e,a){var t=jvh.searchbar;var r=t.calendar;r.dateWhenOpened=t.criteria.depart;if($("#frmSearchFlexMonth").is(":checked")){if(r.dateWhenOpened==null){r.dateWhenOpened=t.defaultMonth;
if(t.currentMonth!==null){r.dateWhenOpened=t.currentMonth}}else{$("#frmSearchFlexMonth").removeProp("checked")
}}r.currentMonthForFlexMonth=null;r.cal.show(e);t.calendarOpened=true;if(typeof a==="string"){t.fnHideShowPanels(a,e)
}else{t.fnHideShowPanels(".search-calendar",e)}r.fnDisplayDuration(t.currentDest,r.cal.month,$("#frmSearchDuration"))
},matchDest:function(e,a){var t=typeof regions2!=="undefined"?regions2[a.region]:null;return e==null||e.id===0||e.text==="type"||t==null||t==e||t.country==e||t.group==e
},fnGetYearsAvail:function(e){var a=jvh.searchbar.fnGetRegionFromDest(e);var t=jvh.searchbar.calendar;
var r=new Date;r.setDate(1);var o=[];for(var n=0;n<3;n++){o[n]=t.cad.length===0}for(var n=0;n<t.cad.length;n++){var i=t.cad[n];
if(jvh.searchbar.calendar.matchDest(a,i)){var s=i.start.getFullYear()-r.getFullYear();var l=i.end.getFullYear()-r.getFullYear();
if(s<0){s=0}for(var c=s;c<=l;c++){o[c]=true}}}var d=[];for(var n=0;n<3;n++){if(o[n]){d[d.length]=new Date(r.getFullYear(),1,1)
}}if(d.length==0){d[0]=r}return d},fnGetMonthsAvail:function(e){var a=jvh.searchbar.fnGetRegionFromDest(e);
var t=jvh.searchbar.calendar;var r=new Date;r.setDate(1);var o=[];for(var n=0;n<36;n++){o[n]=t.cad.length===0
}for(var n=0;n<t.cad.length;n++){var i=t.cad[n];if(jvh.searchbar.calendar.matchDest(a,i)){var s=i.start.getMonth()-r.getMonth()+(i.start.getFullYear()-r.getFullYear())*12;
var l=i.end.getMonth()-r.getMonth()+(i.end.getFullYear()-r.getFullYear())*12;if(s<0){s=0}for(var c=s;c<=l;c++){o[c]=true
}}}var d=[];for(var n=0;n<36;n++){if(o[n]){d[d.length]=new Date(r.getFullYear(),r.getMonth(),1)}r.setMonth(r.getMonth()+1)
}if(d.length==0){d[0]=r}return d},fnStringToDate:function(e){return new Date(parseInt(e.substr(6,4)),parseInt(e.substr(3,2),10)-1,parseInt(e.substr(0,2),10))
},fnCheckDate:function(e){var a=jvh.searchbar.calendar;var t=jvh.searchbar.criteria.depart;if(t===null){return true
}var r=parseInt(t.substr(0,2),10);var o=jvh.searchbar.calendar.fnStringToDate(t);o.setDate(1);var n=a.fnGetDates(o,jvh.searchbar.currentDest,null);
if(e){var i=false;n.forEach(function(e){if(typeof e!=="undefined"&&e.avail)i=true});return i}return n[r].avail
},fnGetDates:function(e,a,t){var r=jvh.searchbar.calendar;var a=jvh.searchbar.fnGetRegionFromDest(a);
var o=[];var n=new Date;var i=jvh.calendar.fnGetMonthEnd(e);for(var s=1;s<=i.getDate();s++){o[s]={avail:r.cad.length===0&&(e.getTime()>n.getTime()||s>n.getDate())}
}for(var l=0;l<r.cad.length;l++){var c=r.cad[l];if(c.start.getTime()<=i.getTime()&&c.end.getTime()>=e.getTime()){if(jvh.searchbar.calendar.matchDest(a,c)){for(var s=1;s<=i.getDate();s++){var d=new Date(e.getFullYear(),e.getMonth(),s);
if(c.start.getTime()<=d.getTime()&&c.end.getTime()>=d.getTime()&&d.getDay()===parseInt(c.day)&&d.getTime()>n.getTime()){o[s].avail=true
}}}}}if(t==null){return o}t(o);return false},getNearestAvailableDate:function(e,a){if(a!=null&&a.text==="resort"){a=a.region
}else if(a!=null&&a.text==="villa"){a=a.resort.region}var t=[];var r=new Date;var o=new Date(e);var n=new Date(e);
o.setDate(o.getDate()-3);n.setDate(n.getDate()+3);for(var i=0;i<jvh.searchbar.calendar.cad.length;i++){var s=jvh.searchbar.calendar.cad[i];
if(s.start.getTime()<=n.getTime()&&s.end.getTime()>=o.getTime()){if(jvh.searchbar.calendar.matchDest(a,s)){for(var l=1;l<=7;l++){var c=new Date(o);
c.setDate(c.getDate()+l);if(s.start.getTime()<=c.getTime()&&s.end.getTime()>=c.getTime()&&c.getDay()===parseInt(s.day)&&c.getTime()>r.getTime()){return c
}}}}}return null},fnInitDurations:function(){for(var e=0;e<dur_data.length;e++){var a=dur_data[e];var t=dur_data[e].substr(0,2);
if(t.charCodeAt(0)>=97){t=(t.charCodeAt(0)-97)*10+100+parseInt(t.substr(1))}else{t=parseInt(t,10)}var r=new Date(parseFloat("20"+dur_data[e].substr(6,2)),dur_data[e].substr(4,2)-1,dur_data[e].substr(2,2));
var o=new Date(parseFloat("20"+dur_data[e].substr(12,2)),dur_data[e].substr(10,2)-1,dur_data[e].substr(8,2));
var n=[];if(typeof regions2[t]!=="undefined"){for(var i=14;i<a.length;i+=2){n[n.length]=parseInt(dur_data[e].substr(i,2),10)
}if(typeof regions2[t].durations==="undefined"){regions2[t].durations=[]}regions2[t].durations[regions2[t].durations.length]={start:r,end:o,nights:n}
}}},fnDisplayDuration:function(e,a,t){var r;if($(".modal-container").css("display")==="none"){r=jvh.searchbar.criteria.nights
}else{r=parseInt($(".villa-panel .search-availability-panel .nights select").val(),10);jvh.searchbar.criteria.nights=r
}var o=jvh.searchbar.calendar.fnStringToDate("01/"+a);var n=new Date(o.getFullYear(),o.getMonth()+1,0);
var i=[];var s=[7,14,21,28];if(!e){s=[2,3,4,5,6,7,8,9,10,11,12,13,14,21,28]}else if(e instanceof Array){e.forEach(function(){i.push(jvh.searchbar.fnGetRegionList(e))
})}else{i=jvh.searchbar.fnGetRegionList(e)}for(var l=0;l<i.length;l++){var c=[];if(typeof i[l].durations!=="undefined"){c=i[l].durations
}else if(i[l].region&&i[l].region.durations!=="undefined"){c=i[l].region.durations}for(var d=0;d<c.length;d++){var h=c[d];
if(h.start.getTime()<=n.getTime()&&h.end.getTime()>=o.getTime()){for(var u=0;u<h.nights.length;u++){var v=false;
for(var f=0;f<s.length;f++){if(s[f]==h.nights[u]){v=true;break}}if(!v){s[s.length]=h.nights[u]}}}}}if($(".search").hasClass("late-deals")||$(".search").hasClass("seo-search")){s=[7,14,21]
}s=s.sort(function(e,a){return e-a});var g=function(e,a){e.options.length=0;var t=-1;for(var o=0;o<a.length;o++){e.options[o]=new Option(a[o]+" nights",a[o]);
if(a[o]==r||a[o]==7&&t==-1){t=o}}return t};var p=t[0];var m=g(p,s);if(t.parents("#searchbarsettings").length){p.options[p.options.length]=new Option("28+ nights",35);
var b=$("#flexDuration");if(b){b.addClass("surpress-change-event");g(b[0],s);b[0].options[b[0].options.length]=new Option("28+ nights",35);
b[0].selectedIndex=m;b.removeClass("surpress-change-event")}}p.selectedIndex=m},fnSetDateDuration:function(e,a){var t=$("select.search-duration",a);
var r=parseInt(t.val());if(r==35){jvh.searchbar.trackEvent("duration","more than 28");$(".too-many-nights").removeClass("display-none")
}else{$(".too-many-nights").addClass("display-none")}var o=$(".search-flex-check",a);if(r==0){r=7}if(o.is(":checked")){jvh.searchbar.criteria.flex=3;
if(e!=null&&e.length==10)var n=jvh.searchbar.calendar.monthsFlex[e.substring(2)];if(n){jvh.searchbar.criteria.flex=n
}}else{jvh.searchbar.criteria.flex=null}$("#searchCalDurationBox").html(jvh.core.fnLeadZero(r));if(r===35){r=28
}jvh.searchbar.criteria.nights=r;var i=document.getElementById("frmSearchNoDate");var s=document.getElementById("frmSearchFlexMonth");
if(e!=null){if(e==""||e=="month"){if(e=="month"){$(".flex-month-error").removeClass("active");if(!s.checked&&jvh.searchbar.criteria.depart!=null){return
}if(s.checked&&jvh.searchbar.calendar.cal){jvh.searchbar.currentMonth=jvh.searchbar.calendar.cal.frmMonth.val();
jvh.searchbar.defaultMonth=jvh.searchbar.currentMonth}if(s.checked&&o.checked){o.checked=false}}else if(e==""&&i.checked&&o.checked){o.checked=false
}jvh.searchbar.criteria.depart=null;if(e==""&&i.checked){s.checked=false}else if(e=="month"&&s.checked&&i.checked){i.checked=false
}}else{jvh.searchbar.criteria.depart=e;s.checked=false;jvh.searchbar.fnManageCheckBox(i,false);jvh.searchbar.defaultMonth=e.substring(3,10);
if(jvh.core.localStorageSupported){jvh.core.localStorage.set("defaultMonth",jvh.searchbar.defaultMonth)
}}}else{if(s.checked&&i.checked){i.checked=false}jvh.searchbar.fnCheckFlexMonthNoDate()}$("#searchMobDuration > span > span").html(jvh.core.fnLeadZero(r));
var l=function(e,a,t){$("#searchbarCalendar").html(e);$("#mobDateDay").html(a);$("#mobDateMonth").html(t)
};if(jvh.searchbar.criteria.depart!=null){$(".search-calendar .message").removeClass("active");var c=jvh.searchbar.criteria.depart.substr(0,6)+jvh.searchbar.criteria.depart.substr(8,2);
var d=parseInt(jvh.searchbar.criteria.depart.substr(3,2),10)-1;var h=parseInt(jvh.searchbar.criteria.depart.substr(0,2),10);
l(r+" nights, "+c,jvh.searchbar.criteria.depart.substr(0,2),jvh.calendar.months[d].substr(0,3));jvh.calendar.internal.highlightDates(jvh.searchbar.calendar.cal,d,h,true)
}else{jvh.searchbar.calendar.cal.show(true);if(s.checked){var u=$("#calendar1frmMonth")[0];var v=u.options[u.selectedIndex].text;
l(r+" nights, "+v.substring(0,3)+" "+v.substr(v.length-4,4),u.options[u.selectedIndex].value.substring(0,2),v.substr(v.length-4,4))
}else{l(r+" nights, no date","no","Date")}}console.log(e+"selected");if(e!=null){var f=jvh.searchbar.criteria.depart;
if(e==""){f="no date"}else if(e=="month"){f="Month "+$("#searchbarCalendar").html()}jvh.searchbar.trackEvent("Date selected",f)
}jvh.searchbar.updateAdobeTrackingVariable()}},childAge:{childAgesLoaded:0,settingDefaultPax:true,init:function(e,a,t){const r=function(r){jvh.searchbar.childAge.fnSetPax(r.target.id,e,t);
a&&a()};const o=e.find(".search-adults, .search-children, .search-infants");o.on("change",r);o.on("valueChange",r);
jvh.searchbar.childAge.fnSetDefaultPax(e,t)},fnSetDefaultPax:function(e,a){var t=e.find(".search-adults");
var r=e.find(".search-children");var o=e.find(".search-infants");const n=jvh.core.paxUtils.getPaxCount(a);
if(a&&a.adults){t.val(a.adults)}else{t.val(0)}if(a&&a.children){r.val(a.children)}else{r.val(0)}if(a&&a.infants){o.val(a.infants)
}else{o.val(0)}jvh.searchbar.childAge.fnSetPaxSubFn(null,e,a,true);if(a.childAges!=null){t.val(n.adults);
r.val(n.children);o.val(n.infants)}window.setTimeout(function(){jvh.searchbar.childAge.settingDefaultPax=false
},500);jvh.searchbar.updateAdobeTrackingVariable()},fnSetPax:function(e,a,t){jvh.searchbar.childAge.fnSetPaxSubFn(e,a,t);
jvh.searchbar.updateAdobeTrackingVariable()},fnSetPaxSubFn:function(e,a,t,r){const o=jvh.core.paxUtils.getPaxCount(t);
var n=jvh.searchbar.childAge;var i=t.adults;if(e!=null){i=a.find("select.search-adults, input[type='hidden'].search-adults").val()
}var s=a.find("select.search-children, input[type='hidden'].search-children");var l=s.val();var c=a.find("select.search-infants, input[type='hidden'].search-infants");
var d=c.val();if(r){i=o.adults;l=o.children;d=o.infants}var h=parseInt(i);var u=parseInt(l);var v=parseInt(d);
const f=new Array;if(t.adults==null){return}t.adults=h;t.children=u+v;t.infants=v;t.childOnly=u;t.childAges="";
const g=function(e,a){for(var r=0;r<e;r++){t.childAges+=a+",";f.push(a)}};g(v,1);g(u,5);t.childAges=t.childAges.slice(0,-1);
const p=$("#childAgesInputs");if(p.length>0){var m="";for(var b=0;b<f.length;b++){m+='<input type="hidden" name="childAge'+b+'" value="'+f[b]+'" />'
}p.html(m)}a.find(".search-pax-adults > p, .mob-panel .mob-pax-adult").html(jvh.core.fnLeadZero(h));a.find(".search-pax-children > p, .mob-panel .mob-pax-child").html(jvh.core.fnLeadZero(u));
a.find(".search-pax-infants > p, .mob-panel .mob-pax-infants").html(jvh.core.fnLeadZero(v));const j=a.find(".search-bar-pax");
if(j.length>0){var y=h+" "+jvh.core.makePlural(h,"&nbsp;Adult");if(u>=1){y+=", "+u+"&nbsp;"+jvh.core.makePlural(u,"Child","Children")
}if(v>=1){y+=", "+v+"&nbsp;"+jvh.core.makePlural(v,"Infant")}j.html(y)}}},fnSetAirportsUsedBefore:function(){return false
},saveSearchCriteriaToUser:function(){$.ajax({url:"/ajax/searchbar/updateCriteria.ajax",cache:false,type:"post",dataType:"json",data:jvh.searchbar.criteria})
},fnGetRegionDepartureAirports:function(e){var a=jvh.searchbar.fnGetRegionList(e);var t=["LGW","MAN","DUB"];
for(var r=0;r<a.length;r++){var o=a[r];if(typeof o.airports!=="undefined"){for(var n=0;n<o.airports.length;n++){if(t.indexOf(o.airports[n])==-1){t[t.length]=o.airports[n]
}}}}return t},updateSearchSummary:function(){const e=$(".search-summary__from");const a=$("#searchSummaryDates");
const t=$("#searchSummaryVillaFlights");const r=$("#searchSummaryDest");const o=$(".search-summary__link");
if(jvh.searchbar.criteria.airport==="-1"){t.text("Villa Only");e.hide();o.hide()}else{if(jvh.core.viewport==="mobile"){o.show()
}t.text("Villa & Flights");$("#searchSummaryFrom").text($("#searchbarAirport").text());e.show()}if(jvh.searchbar.currentDest){r.text(jvh.searchbar.currentDest.name)
}else{r.text(ANY_DESTINATION)}var n="";if(jvh.core.viewport!=="mobile"){const i=jvh.searchbar.criteria.adults+(jvh.searchbar.criteria.adults!==1?" Adults":" Adult");
var s="";var l="";if(jvh.searchbar.criteria.childOnly>0){s=", "+jvh.searchbar.criteria.childOnly+(jvh.searchbar.criteria.childOnly!==1?" Children":" Child")
}if(jvh.searchbar.criteria.infants>0){l=", "+jvh.searchbar.criteria.infants+(jvh.searchbar.criteria.infants!==1?" Infants":" Infant")
}n=i+s+l}else{const c=jvh.searchbar.criteria.adults+jvh.searchbar.criteria.children;n=c!==1?c.toString()+" Guests":c.toString()+" Guest";
if(jvh.search!==undefined){if(!jvh.searchbar.searchSummaryShow&&!jvh.searchbar.editCriteria){jvh.searchbar.toggleSearchBar(false);
$("#searchSummaryBar").addClass("active");$(".search-open").removeClass("search-open");$(".find-holidays").hide();
jvh.searchbar.searchSummaryShow=!jvh.searchbar.searchSummaryShow}}e.insertBefore(o)}$("#searchSummaryWho").text(n);
const d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var h="No date";const u=function(e){const a=e.split("/");
var t={};const r=a.length;if(r>0&&r<=3){const o=r-1;const n=r-2;const i=r-3;if(i>=0){t.day=parseInt(a[i])
}if(n>=0){t.month=parseInt(a[n])-1}t.year=parseInt(a[o])}return t};var v=null;if(jvh.searchbar.criteria.depart!==null){v=u(jvh.searchbar.criteria.depart);
const f=v.year;const g=v.month;const p=v.day;const m=new Date(f,g,p);var b=new Date(m);b.setDate(m.getDate()+jvh.searchbar.criteria.nights);
const j=d[g];const y=d[b.getMonth()];const k=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";
case 2:return"nd";case 3:return"rd";default:return"th"}};const w=k(p);const C=k(b.getDate());if(b.getFullYear()>f){h=p.toString().concat(w," ",j," ",f.toString()," - ",b.getDate().toString(),C," ",y," ",b.getFullYear().toString())
}else{h=p.toString().concat(w," ",j," - ",b.getDate().toString(),C," ",y," ",b.getFullYear().toString())
}}else if($("#frmSearchFlexMonth").is(":checked")){v=u(jvh.searchbar.calendar.cal.month);h=d[v.month]+" "+v.year
}a.text(h);$("#searchSummaryBar").click(function(){const e=$("#searchSummaryBar");jvh.core.tracking.trackAdobeEvent("Holiday-Search","Condensed Search Bar","Edit Search Clicked");
if(jvh.searchbar.searchSummaryShow){e.slideUp(400,function(){e.removeClass("active").removeAttr("style")
});$("#searchbar").slideDown(400);jvh.searchbar.searchSummaryShow=!jvh.searchbar.searchSummaryShow;jvh.searchbar.editCriteria=true;
if(jvh.core.viewport=="mobile"){jvh.searchbar.displayMobileLayout()}}})},displayMobileLayout:function(){jvh.searchbar.fnHideShowPanels("searchButton",true);
window.scrollTo(0,0);$("#searchSummaryBar").removeClass("active");$(".button-nav-bar").show()},manageMobileViewport:function(){if(jvh.core.viewport==="mobile"&&$("#searchSummaryBar.active").length===0&&$(".homepage").length===0){jvh.searchbar.displayMobileLayout()
}},activateTabView:function(){const e=JSON.parse(localStorage.getItem("searchCriteria"));const a=$(".search");
const t=$(".button-nav-bar");const r=$("#searchbtn")[0];const o=$(".search-results");const n=$(".find-holidays");
const i=$("#searchbar");const s=window.windowWidth;if(jvh.core.viewport==="mobile"||digitalData.page.pageInfo.pageName==="Homepage"){jvh.searchbar.tabView=true;
if(jvh.core.viewport==="mobile"&&digitalData.page.pageInfo.pageName!=="Search results"){a.addClass("tab-view");
r.innerText="Find holidays";o.addClass("tab-view");if(a.hasClass("searchactive")){t.show()}else{i.hide();
const l=$("#searchSummaryBar");if(l.length>0){if(!l.hasClass("active")){n.show()}}else{n.show()}t.hide()
}if(jvh.searchbar.isVillaOnly){$("#searchbarAirport").hide()}}else if(jvh.core.viewport==="mobile"&&digitalData.page.pageInfo.pageName==="Search results"){a.addClass("tab-view");
if(jvh.searchbar.isVillaOnly){jvh.searchbar.setVillaOnlyTabView()}else{jvh.searchbar.setVillaAndFlightTabView()
}if(jvh.searchbar.windowWidth-s===0){jvh.searchbar.windowWidth=s;return false}jvh.searchbar.toggleSearchBar(false);
$("#searchSummaryBar").addClass("active");$(".search-open").removeClass("search-open");$("#searchFormClose").click();
jvh.searchbar.searchSummaryShow=true}else{a.addClass("tab-view");t.show()}if(localStorage.getItem("defaultSearchCriteriaToNearestAirports")==="false"){$("#villaOnly").insertBefore("#villaAndFlight");
$("#villaAndFlight").addClass("second")}jvh.searchbar.setVillaOnlyTabView()}else{jvh.searchbar.tabView=false;
a.removeClass("tab-view");t.hide()}const c=function(){return jvh.core.viewport!=="mobile"&&(digitalData.page.pageInfo.pageName==="Homepage"||digitalData.page.pageInfo.pageName==="Booking Process"&&jvh.booking.trackCategory==="Booking Process - Saved Holiday"||window.location.href.indexOf("destinations")!==-1)&&!jvh.searchbar.searchSummaryShow
};if(c()){n.hide();jvh.searchbar.toggleSearchBar(true);r.innerText="Search"}},openSearchWithTabView:function(){$(".find-holidays").hide();
$(".button-nav-bar").show();$("#searchbar").show()},toggleSearchBar:function(e){const a=$("#searchbar");
if(e){a.show()}else{a.hide()}},setVillaAndFlightTabView:function(){const e=$("#searchbarAirport");const a=$(".search");
$("#villaAndFlight").addClass("active");$("#villaOnly").removeClass("active");$("#searchbar").removeClass("villa-only");
a.removeClass("villa-only");e.show();jvh.searchbar.isVillaOnly=false},setVillaOnlyTabView:function(){const e=$("#searchbarAirport");
const a=$("#searchbar");const t=$(".search");$("#villaAndFlight").removeClass("active");$("#villaOnly").addClass("active");
e.hide();a.addClass("villa-only");t.addClass("villa-only");jvh.searchbar.isVillaOnly=true}};jvh.calendar={maxDate:null,months:["January","February","March","April","May","June","July","August","September","October","November","December"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],calendars:0,init:function(e,a,t){jvh.calendar.calendars++;
a=$.extend({showPrices:false,navTag:"div",monthFormat:"MMMM YYYY",trackCategory:"Calendar",defaultMonth:null,monthChanged:function(){},getDuration:function(){return null
},getCurrentDate:function(){return null},fnMonthData:jvh.calendar.internal.fnDefaultMonthData,fnMonthsAvailable:jvh.calendar.internal.fnDefaultMonthsAvailable,calculatePpPrice:function(e){return jvh.core.fnCurrencyFormat(e)
}},a);var r={calNo:jvh.calendar.calendars,monthsFlex:[],config:a,root:$(e)};r.date=r.config.getCurrentDate();
if(r.date!=null){r.month=r.date.substring(3,10)}else if(r.config.defaultMonth==null){var o=new Date;r.month=jvh.core.fnLeadZero(o.getMonth()+1)+"/"+o.getFullYear()
}else{r.month=r.config.defaultMonth}jvh.calendar.internal.initHtml(r);jvh.core.initFormFields(r.root);
r.panel=$(e+" .calendar-grid");r.fnDateSelected=t;r.fnSwipeStart=function(){$(".search .calendar-grid").removeClass("transformAni")
};r.fnSwipeEnd=function(e){jvh.calendar.internal.fnChangeMonth(r,0-e,"swipe");r.panel[0].currentLeft=0
};r.fnSwipeAbort=function(){r.panel.addClass("transformAni");r.panel.css(jvh.core.getDomPrefix()+"transform","translateX(0px)");
r.currentLeft=0};r.panel.on("mouseover","li.active",function(){jvh.calendar.internal.highlightDates(r,parseInt($(this).data("month")),parseInt($(this).data("day")))
});r.panel.on("mouseout","li.active",function(){jvh.calendar.internal.hoverClear(r)});r.panel.on("click","li.active",function(){r.date=$(this).data("date");
r.month=r.date.substring(3,10);r.root.data("current-date",$(this).data("date"));r.fnDateSelected($(this).data("date"),r.root,r)
});r.frmMonth=$("#calendar"+r.calNo+"frmMonth");r.frmMonth.change(function(){jvh.calendar.internal.fnChangeMonth(r,0,"select")
});$(e+" .previous-month").click(function(){jvh.calendar.internal.fnChangeMonth(r,-1,"arrow left")});
$(e).on("click","button.next-month, .next-month li.active",function(){jvh.calendar.internal.fnChangeMonth(r,1,"arrow right")
});jvh.core.addSwipe(r.panel,r.fnSwipeStart,r.fnSwipeEnd,r.fnSwipeAbort,{left:true,right:true});r.show=function(e,a){if(r.panel.length==0){return
}var t=jvh.calendar.internal.fnGetCurrentMonth(r);if(t&&!a){var o=r.frmMonth[0];for(var n=0;n<o.options.length;n++){if(o.options[n].value==t){r.frmMonth.val(t);
break}}}jvh.calendar.internal.fnDisplay(r,e)};r.getMonthPos=function(e){if(!r.frmMonth[0]||r.frmMonth[0].options.length==0){return e
}return $(r.frmMonth[0].options[r.frmMonth[0].selectedIndex]).data("month-pos")};return r},fnGetMonthEnd:function(e){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate());
a.setDate(1);a.setMonth(a.getMonth()+1);a.setDate(0);return a},internal:{initHtml:function(e){var a="<"+e.config.navTag+' class="month-navigation"><button class="previous-month" type="button">prev</button><label><select id="calendar';
a+=e.calNo+'frmMonth" name="calendar'+e.calNo+'frmMonth" data-track-name="Calendar Month" class="small-all"></select></label><button class="next-month" type="button">next</button></'+e.config.navTag+">";
var t=(new Date).getFullYear();if(jvh.searchbar.defaultMonth&&jvh.searchbar.defaultMonth.indexOf("/")>-1){t=jvh.searchbar.defaultMonth.split("/")[1]
}a+="<div class='year-navigation'>";a+="<button class='previous-year' type='button'>prev</button>";a+="<input type='hidden' value='"+t+"' id='selectedYear'/><span class='year-label'>"+t+"</span>";
a+="<button class='next-year' type='button'>next</button>";a+="</div>";a+='<div class="calendar-grid transition';
if(e.config.showPrices){a+=" with-prices"}a+='" style="transform: translateX(0px);"><div class="month-before month"></div><div class="current-month month"></div><div class="next-month month"></div><div class="month-after month"></div>';
a+="<div class='monthly-selector year'></div></div>";e.root.prepend(a)},fnDefaultMonthData:function(e,a){var t=[];
var r=new Date;var o=r.getMonth()==e.getMonth()&&r.getYear()==e.getYear();for(var n=0;n<=31;n++){t[n]=!o||n>r.getDate()?{avail:true}:{avail:false}
}if(a==null){return t}a(t);return false},fnDefaultMonthsAvailable:function(){var e=new Date;var a=new Date;
a.setDate(a.getDate()+1);if(a.getMonth()!=e.getMonth()){e=a}e.setDate(1);var t=[];for(var r=0;r<24;r++){t.push(e);
a=new Date;a.setTime(e.getTime());a.setMonth(a.getMonth()+1);e=a}return t},fnGetCurrentMonth:function(e){var a=e.config.getCurrentDate();
if(a){return a.substring(3,10)}return null},fnChangeMonth:function(e,a,t){var r=e.frmMonth[0];if(r.selectedIndex+a<0||r.selectedIndex+a==r.options.length){e.fnSwipeAbort()
}else if(!e.monthSwiping){e.monthSwiping=true;var o=e.panel;o.addClass("transformAni");slideDist=$(o.children()[0]).width();
o.css(jvh.core.getDomPrefix()+"transform","translateX("+slideDist*(0-a)+"px)");e.changeMethod=t;var n=a;
var i=e;window.setTimeout(function(){jvh.calendar.internal.fnChangeMonthReset(i,n);e.monthSwiping=false
},200)}},fnChangeMonthReset:function(e,a){e.panel.removeClass("transformAni");if(a==-11){e.panel.find(".main").html(e.panel.find(".left").html())
}else{e.panel.find(".main").html(e.panel.find(".right").html())}e.panel.css(jvh.core.getDomPrefix()+"transform","translateX(0px)");
e.currentLeft=0;e.frmMonth[0].selectedIndex+=a;e.month=e.frmMonth[0].options[e.frmMonth[0].selectedIndex].value;
e.config.monthChanged(e.month);jvh.calendar.internal.fnDisplay(e,true)},fnDisplay:function(e){if($("body").hasClass("search-flex-test")&&e.panel.closest("#searchCalendar").length>0){const a=$("#flexOverride :selected").val();
const t=a==-1;e.panel.parent().toggleClass("monthly-selector-container",a==30);e.panel.parent().toggleClass("ndim-selector-container",t);
e.panel.closest("#searchCalendar").toggleClass("ndim-selector-container",t)}var r=e.config.fnMonthsAvailable();
var o=e.frmMonth[0];var n=o.selectedIndex;if(e.changeMethod!=null&&o.selectedIndex>-1){jvh.core.tracking.trackEvent(e.config.trackCategory,"Calendar Month",e.changeMethod+" - "+o.options[o.selectedIndex].value);
e.changeMethod=null}if(o.selectedIndex>-1){var i=o.options[o.selectedIndex].value}else{var i=jvh.calendar.internal.fnGetCurrentMonth(e);
if(i==null&&e.config.defaultMonth!=null){i=e.config.defaultMonth}}o.options.length=0;var s=new Date;var l=s.getFullYear();
var c=e.config.getCurrentDate();for(var d=0;d<r.length;d++){var h=jvh.core.fnLeadZero(r[d].getMonth()+1)+"/"+r[d].getFullYear();
var u=r[d].getMonth();var v=r[d].getFullYear()-l;if(v>0){u+=12*v}if(i==h){n=d}o.options[o.options.length]=new Option(jvh.calendar.internal.fnMonthSelectFormat(e,r[d]),h);
$(o.options[o.options.length-1]).data("month-pos",u)}if(n==-1||n>r.length){n=0}o.selectedIndex=n;e.root.find(".previous-month").toggleClass("disable",o.selectedIndex==0);
e.root.find(".next-month").toggleClass("disable",o.selectedIndex==o.options.length-1);if(typeof o.fnChange!=="undefined")o.fnChange();
var f='<span class="no-availability">No Availability</span>';if(n>0){jvh.calendar.internal.fnPrepMonthHtml(e,r[n-1],e.panel.find("div.month-before"))
}else{e.panel.find("div.month-before").html(f)}jvh.calendar.internal.fnPrepMonthHtml(e,r[n],e.panel.find("div.current-month"));
if(n<r.length-1){jvh.calendar.internal.fnPrepMonthHtml(e,r[n+1],e.panel.find("div.next-month"));if(n<r.length-2){jvh.calendar.internal.fnPrepMonthHtml(e,r[n+2],e.panel.find("div.month-after"))
}else{e.panel.find("div.month-after").html(f)}}else{e.panel.find("div.next-month").html(f);e.panel.find("div.month-after").html(f)
}if($("body").hasClass("search-flex-test")){e.panel.find("div.monthly-selector").html(jvh.calendar.internal.fnMonthlySelector(e,parseInt($("#selectedYear").val())))
}},fnMonthlySelector:function(e,a){const t=jvh.calendar.internal;const r=e.config.fnMonthsAvailable();
const o=a;var n="<ul>";for(var i=0;i<jvh.calendar.months.length;i++){const s=new Date(o,i,1);const l=r.filter(function(e){return e.getTime()==s.getTime()
}).length>0;n+=t.fnMonthlySelectorItem(s,l)}return n+"</ul>"},fnMonthlySelectorItem:function(e,a){var t="<li>";
if(e!=null){const r=jvh.core.fnLeadZero(e.getMonth()+1)+"/"+e.getFullYear();const o=jvh.searchbar.defaultMonth==r;
if(o){t="<li class='selected'>"}const n=(a?"active":"")+(a&&o?" ":"")+(o?"selected":"");t+="<label class='"+n+"'>"+jvh.calendar.months[e.getMonth()];
t+="<span>"+e.getFullYear()+"</span>";t+="<radio name='monthly-selector' value='"+r+"'/>"}return t+"</li>"
},fnMonthSelectFormat:function(e,a){if(e.config.monthFormat=="MMM YYYY"){return jvh.calendar.months[a.getMonth()].substring(0,3)+" "+a.getFullYear()
}else{return jvh.calendar.months[a.getMonth()]+" "+a.getFullYear()}},fnPrepMonthHtml:function(e,a,t){var r=e.config.fnMonthData(a,function(r){jvh.calendar.internal.fnMonthHtml(e,a,t,r)
});if(r){jvh.calendar.internal.fnMonthHtml(e,a,t,jvh.calendar.internal.fnDefaultMonthData(a,null),true)
}},fnMonthHtml:function(e,a,t,r,o){var n=jvh.calendar.fnGetMonthEnd(a);var i=e.config.getCurrentDate(true);
var s="<span>"+jvh.calendar.months[a.getMonth()].substring(0,3)+" "+a.getFullYear()+"</span>";var l="<ul>";
var c=0;for(var d=0;d<7;d++){l+='<li class="day">'+jvh.calendar.days[d].substring(0,3)+"</li>"}for(var d=0;d<a.getDay();d++){l+='<li class="blank"></li>';
c++}var h=jvh.core.fnLeadZero(a.getMonth()+1)+"/"+a.getFullYear();var u=0;var v=false;for(var f=1;f<=n.getDate();f++){c++;
l+="<li ";if(r[f].avail){u++;if(r[f].price&&r[f].price>0&&e.config.showPrices&&r[f].offer){addClass=" offer"
}else{addClass=""}l+=' class="active'+addClass+'" data-date="'+jvh.core.fnLeadZero(f)+"/"+h+'" '}l+='data-month="'+a.getMonth()+'" data-day="'+f+'" ><span>'+f;
if(r[f].price&&r[f].price>0&&e.config.showPrices){l+='<span class="price">'+e.config.calculatePpPrice(r[f].price)+"</span>";
v=true}l+="</span></li>"}if(u<=10){e.monthsFlex["/"+h]=7}else{e.monthsFlex["/"+h]=3}var g=0;if(c<35)g=35-c;
else if(c>35)g=42-c;for(var d=0;d<g;d++){l+='<li class="blank"></li>'}l+="</ul>";var p=e.config.showPrices===true&&v===false&&h===jvh.search.currentResult.cal.frmMonth.val();
if(o){l+='<li class="loading"><span class="load-msg">Loading</span><span class="spinner small show"></span></li>'
}else if(p){l=jvh.villaModal.searchPanelFns.villaAvailability.internal.alternativeAvailabilityMessage(a,t)
}t.html(s+l);if(i!==null&&!o){var m=document.getElementById("frmSearchFlexMonth").checked&&$(t).closest("#searchCalendarDate").length>0;
var b=jvh.searchbar.calendar.fnStringToDate(i);jvh.calendar.internal.highlightDates(e,b.getMonth(),b.getDate(),true,m)
}},highlightDates:function(e,a,t,r,o){var n=e.config.getDuration();if(n==null)n=1;var i="hover";if(o){var s=e.panel.find("li.current").removeClass("current hover selection-start selection-end");
s=e.panel.find(".current-month li:not(.day, .blank)").addClass("current");s.first().addClass("selection-start");
s.last().addClass("selection-end");$(".flex-test-button").addClass("date-picked");return}var l=e.panel.find("li[data-month="+a+"][data-day="+t+"]");
if(l.length>0){if(r){i="current";e.panel.find("li.current").removeClass("current")}if(l.hasClass("active")){l.addClass("first").addClass(i)
}if(typeof l.data("date")!=="undefined"){var c=jvh.searchbar.calendar.fnStringToDate(l.data("date"))}else{return
}for(var d=1;d<n;d++){var h=new Date(c);h.setDate(h.getDate()+d);var u=e.panel.find("li[data-month="+h.getMonth()+"][data-day="+h.getDate()+"]");
if(u){u.addClass(i);if(d===n-1&&u.hasClass("hover")){u.addClass("last")}}}}const v=e.panel.find("li.current");
const f=v.length-1;if(f>=0){$(".flex-test-button").addClass("date-picked");$(".calendar-grid li[data-date].active").removeClass("selection-start selection-end");
v.first().addClass("selection-start");v.last().addClass("selection-end")}},hoverClear:function(e){e.panel.find("li.hover").removeClass("hover first last")
}}};jvh.data.jsLoaded["searchbar"]=true;jvhTriggerEvent("searchbar-jsLoaded");jvhWaitForJs(["core"],function(){jvh.searchbar.init(jvh.defaultSearchCriteria)
});
//@ sourceMappingURL=core-searchbar-min.js.map