function get_query_arg(a,
b) {
    if(-1<a.indexOf(b+"=")) {
        var c=(new RegExp("[?&]"+b+"(.+?)(?=&|$)")).exec(a);
        if(null!=c)return c[1]?c[1].replace(/=/g, ""): ""
    }
}
Object.size=function(a) {
    var b=0, c;
    for(c in a)a.hasOwnProperty(c)&&b++;
    return b
}
;
void 0==window.jQuery&&alert("dzstabs.js -> jQuery is not defined or improperly declared ( must be included at the start of the head tag ), you need jQuery for this plugin");
jQuery.fn.outerHTML=function(a) {
    return a?this.before(a).remove(): jQuery("<p>").append(this.eq(0).clone()).html()
}
;
window.dzsztm_self_options= {};
window.dzsshuffle_currTarget=null;
window.dzsshuffle_finaltext="";
window.dzsshuffle_finaltext_arr="";
window.dzsshuffle_temp_arr="";
function shuffleText(a,
b,
c) {
    var f= {
        fps: 20
    }
    ;
    c&&(f=jQuery.extend(f,
    c));
    window.dzsshuffle_currTarget&&a.get(0)!=window.dzsshuffle_currTarget.get(0)&&(window.dzsshuffle_currTarget.text(window.dzsshuffle_finaltext),
    window.dzsshuffle_currTarget.data("terminate-now",
    "on"),
    a.data("terminate-now",
    "off"));
    b!=window.dzsshuffle_finaltext&&(c=a.text(),
    window.dzsshuffle_finaltext=b,
    b=b.split(""),
    window.dzsshuffle_finaltext_arr=b,
    window.dzsshuffle_temp_arr=c.split(""),
    a.data("current_k",
    0),
    a.data("current_k_try",
    0));
    a.data("current_k")&&!isNaN(a.data("current_k"))||a.data("current_k",
    0);
    if(Number(a.data("current_k"))>=window.dzsshuffle_finaltext_arr.length||"on"==a.data("terminate-now"))return a.text(window.dzsshuffle_finaltext),
    !1;
    if(1==Number(a.data("current_k_try")))for(b=a.data("current_k")+1;
    b<window.dzsshuffle_finaltext_arr.length;
    b++)window.dzsshuffle_temp_arr[b]=randomChar();
    a.data("finaltext")||a.data("finaltext",
    window.dzsshuffle_finaltext);
    var h=a.data("current_k"),
    u="";
    b=window.dzsshuffle_finaltext_arr[h];
    u=" "==b?"space":/[a-z]/.test(b)?"lowerLetter":/[A-Z]/.test(b)?"upperLetter":"symbol";
    setTimeout(function() {
        var b=randomChar(u);
        4<a.data("current_k_try")&&(b=window.dzsshuffle_finaltext_arr[h]);
        window.dzsshuffle_temp_arr[a.data("current_k")]=b;
        a.text(window.dzsshuffle_temp_arr.join(""));
        b==window.dzsshuffle_finaltext_arr[h]||"space"==u?(a.data("current_k", Number(a.data("current_k"))+1), a.data("current_k_try", 0), shuffleText(a, window.dzsshuffle_finaltext, f)): (shuffleText(a, window.dzsshuffle_finaltext, f), a.data("current_k_try", Number(a.data("current_k_try"))+1))
    }
    ,
    30)
}
function randomChar(a) {
    var b="";
    if("undefined"==typeof a) {
        var c=3*Math.random(), c=Math.floor(c);
        0==c&&(a="lowerLetter");
        1==c&&(a="upperLetter");
        2==c&&(a="symbol")
    }
    "lowerLetter"==a?b="abcdefghijklmnopqrstuvwxyz0123456789":"upperLetter"==a?b="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789":"symbol"==a&&(b=",.?/\\(^)![]{}*&^%$#'\"");
    a=b.split("");
    return a[Math.floor(Math.random()*a.length)]
}
(function(a) {
    a.fn.prependOnce=function(b, c) {
        var f=a(this);
        if("undefined"==typeof c) {
            var h=/class="(.*?)"/.exec(b);
            "undefined"!=typeof h[1]&&(c="."+h[1])
        }
        return 1>f.children(c).length?(f.prepend(b),
        !0):!1
    };
    a.fn.appendOnce=function(b,c) {
        var f=a(this);
        if("undefined"==typeof c) {
            var h=/class="(.*?)"/.exec(b);
            "undefined"!=typeof h[1]&&(c="."+h[1])
        }
        return 1>f.children(c).length?(f.append(b),
        !0):!1
    };
    a.fn.zoomtimeline=function(b) {
        if("undefined"==typeof b&&"undefined"!=typeof a(this).attr("data-options")&& ""!=a(this).attr("data-options")) {
            var c=a(this).attr("data-options");
            eval("window.dzsztm_self_options = "+c);
            b=a.extend( {}, window.dzsztm_self_options);
            window.dzsztm_self_options=a.extend( {}, {})
        }
        b=a.extend( {
            design_skin: "skin-default", settings_mode: "mode-3dslider", mode_slider_variation_content_position: "top", design_transition: "default", design_tabswidth: "default", design_maxwidth: "4000", init_on: "document_ready", settings_makeFunctional: !1, settings_appendWholeContent: !1, toggle_breakpoint: "320", toggle_type: "accordion", refresh_tab_height: "0", startItem: "default", outer_menu: null, color_highlight: "rgba(167, 220, 220, 1)", mode_3dslider_item_width:"250", mode_3dslider_item_height:"220", mode_3dslider_mode:"normal", settings_isotope_settings: {
                getSortData: {
                    number: function(b) {
                        return parseInt(a(b).attr("data-sort"), 10)
                    }
                }
                ,
                itemSelector:".isotope-item",
                sortBy:"number",
                layoutMode:"packery",
                masonry: {
                    columnWidth: ".grid-sizer"
                }
                ,
                packery: {
                    columnWidth: 1
                }
            }
        },b);
        this.each(function() {
            function c(b, l) {
                G=a(window).scrollTop();
                H=a(window).height();
                I=d.offset().top;
                G+H>I-30&&h()
            }
            function h() {
                a(window).off("scroll", c);
                if(d.hasClass("dzsztm-loaded")||d.hasClass("inited"))u();
                else {
                    D="string"==typeof d.attr("class")?d.attr("class"): d.get(0).className;
                    e=d.attr("id");
                    if("undefined"==typeof e||""==e) {
                        for(var m=0, l="zoomtimeline"+m;
                        0<a("#"+l).length;
                        )m++, l="zoomtimeline"+m;
                        e=l;
                        d.attr("id", e);
                        d.addClass(e)
                    }
                    d.parent().find(".feed-from-3dslider").length&&(x=d.parent().find(".feed-from-3dslider").eq(0));
                    -1==D.indexOf("skin-")&&d.addClass(b.design_skin);
                    d.hasClass("skin-default")&&(b.design_skin="skin-default");
                    -1==D.indexOf("mode-")&&d.addClass(b.settings_mode);
                    d.hasClass("mode-3dslider")&&(b.settings_mode="mode-3dslider");
                    "default"==b.design_transition&&(b.design_transition="fade");
                    if("mode-3dslider"==b.settings_mode) {
                        k=parseInt(b.mode_3dslider_item_width, 10);
                        v=parseInt(b.mode_3dslider_item_height, 10);
                        d.prepend('<style class="zoomtimeline-style-con"></style>');
                        J=d.children(".zoomtimeline-style-con").eq(0);
                        var m="", l=String(b.color_highlight).replace("1)", "0.5)"), p=String(b.color_highlight).replace("1)", "0.7)"), m=m+(".zoomtimeline.mode-3dslider."+e+" .yearlist-con:after, .zoomtimeline.mode-3dslider."+e+" .yearlist-con .yearlist .year figure{ background-color: "+b.color_highlight+"; } .zoomtimeline.mode-3dslider."+e+" .details-container > .detail .detail-image--border{ border-color: "+p+"; } .zoomtimeline.mode-3dslider."+e+" .details-container > .next-next-item .detail-image--border, .zoomtimeline.mode-3dslider."+e+" .details-container > .prev-prev-item .detail-image--border{ border-color: "+ l+" } ");
                        0==isNaN(k)&&(m=m+""+(".zoomtimeline.mode-3dslider."+e+" .details-container > .detail { width: "+k+"px; }           .zoomtimeline.mode-3dslider."+e+" .yearlist-con .yearlist-container{ top: "+(v/2+60)+"px; height: "+v+"px; }    .zoomtimeline.mode-3dslider."+e+" .yearlist-con .yearlist .year.curr-item{  top: "+(v/2+18)+"px; }    .zoomtimeline.mode-3dslider."+e+" .yearlist-con:after{  top: "+(v/2+90)+"px; }     .zoomtimeline.mode-3dslider."+e+" .details-container > .detail .detail-image, .zoomtimeline.mode-3dslider."+ e+" .details-container > .detail .detail-image--border{ height: "+v+"px;  } .zoomtimeline.mode-3dslider."+e+" .details-container > .detail{ margin-left: "+-(k/2)+"px; }  .zoomtimeline.mode-3dslider."+e+" .details-container >.next-item,  .zoomtimeline.mode-3dslider."+e+" .details-container  >.prev-item{ transform: translate3d(calc("+k/2+"px + 3vw),0,0); -webkit-transform: translate3d(calc("+k/2+"px + 3vw),0,0); }  .zoomtimeline.mode-3dslider."+e+" .details-container  >.prev-item{ transform: translate3d(calc("+ -(k/2)+"px - 3vw),0,0); -webkit-transform: translate3d(calc("+-(k/2)+"px - 3vw),0,0); }       .zoomtimeline.mode-3dslider."+e+" .details-container >.next-next-item{ transform: translate3d(calc("+k+"px + 3vw),0,0); -webkit-transform: translate3d(calc("+k+"px + 3vw),-25px,0); }         .zoomtimeline.mode-3dslider."+e+" .details-container  >.prev-prev-item{ transform: translate3d(calc("+-k+"px - 3vw),0,0); -webkit-transform: translate3d(calc("+-k+"px - 3vw),0,0); }"));
                        J.html(m)
                    }
                    w=d.children(".items");
                    "mode-3dslider"==b.settings_mode&&(d.append('<div class="yearlist-con"><div class="yearlist-container"><div class="yearlist-container-inner"><div class="yearlist-line"></div><div class="yearlist"></div></div></div></div>'),
                    d.append('<div class="details-container"><div class="clear"></div></div>'),
                    n=d.children(".details-container"),
                    y=d.find(".yearlist").eq(0));
                    u();
                    "default"==b.startItem&&(b.startItem=0);
                    a(window).on("resize",
                    K);
                    K();
                    m=200;
                    /*-----------------------------------------*/
                    /*--- Funcion validadora de dispositivo ---*/
                    /*-----------------------------------------*/
                    aquisi = '';
                    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                      console.log('estamos desde un movil o tablet')
                      aquisi = ''
                    }else{
                      console.log('nooooooooooo')
                      aquisi = d.on("click",E)
                    }
                    "mode-3dslider"==b.settings_mode&&(m=500,
                      z(b.startItem),
                      aquisi,
                      d.on("mouseover",E),
                      d.on("mouseleave",E),
                      a(document).on("keydown",M),
                      is_touch_device()&&N());
                    /*-----------------------------------------*/
                    /*-----------------------------------------*/
                    setTimeout(function() {
                        d.addClass("ztm-ready")
                    }
                    ,
                    m);
                    d.addClass("inited")
                }
            }
            function u() {
                var c=0;
                w&&(w.children(".ztm-item:not(.inited)").each(function() {
                    var l=a(this);
                    if("mode-3dslider"==b.settings_mode) {
                        d.find(".yearlist").append('<div class="year"><div class="the-year">'+l.find(".hex-desc").html()+"</div><figure></figure></div>");
                        var p=l.find(".ztm-content").html(), e=/<h3.*?class="the-heading".*?>(.*?)<\/h3>/g.exec(p), f="";
                        e&&e[0]&&(f=e[0]);
                        p=p.replace(/<h3.*?class="the-heading".*?>(.*?)<\/h3>/g, "");
                        p='<div class="detail">'+f+'<div class="detail-image-con" style=""><div class="detail-image--border"></div><div class="detail-image" style="background-image:url('+l.attr("data-image")+');"></div><div class="detail-image-shadow-con"><div class="detail-image-shadow-left"></div><div class="detail-image-shadow-right"></div></div></div><div class=" detail-excerpt">'+p+'</div><div class="clear"></div>';
                        0<l.children(".extrahtml").length&& (p+=l.children(".extrahtml").eq(0).html());
                        p+="</div>";
                        d.find(".details-container").append(p)
                    }
                    l.addClass("inited");
                    c++
                }
                ),
                w.children(".ztm-item").each(function() {
                    a(this)
                }
                ))
            }
            function M(b) {
                a(this);
                F&&(37==b.keyCode&&A(), 39==b.keyCode&&B())
            }
            function E(b) {
                var c=a(this);
                "mouseover"==b.type&&(F=!0);
                "mouseleave"==b.type&&(F=!1);
                if("click"==b.type&&(b=b.clientX-d.offset().left, d.offset(), c.hasClass("zoomtimeline")&&(b<r/2-k/2&&A(), b>r/2+k/2&&B()), c.hasClass("year")&&(b=c.parent().children().index(c), z(b)), c.hasClass("diamond-arrow-left")&&A(), c.hasClass("diamond-arrow-right")&&B(), c.hasClass("hexa-mark-con")))return d.children(".scroller-con").get(0)&&d.children(".scroller-con").get(0).fn_scrollx_to&&d.children(".scroller-con").get(0).fn_scrollx_to(parseInt(c.get(0).style.left, 10)/100), !1
            }
            function K(b) {
                a(window).width();
                r=d.width();
                900>r?d.addClass("under-900"): d.removeClass("under-900");
                600>r?d.addClass("under-600"): d.removeClass("under-600");
                400>r?d.addClass("under-400"): d.removeClass("under-400");
                L()
            }
            function L(b) {
                var c= {
                    calculate_year_position: !0
                }
                ;
                b&&a.extend(c,
                b)
            }
            function N() {
                d.addClass("swipe-enabled");
                var b=0, a=0, c=!1, e=d, f=null;
                e.on("touchstart", '.detail-image', function(a) {
                    a&&a.originalEvent&&(b=a.originalEvent.touches[0].pageX);
                    f=d;
                    c=!0;
                    d.addClass("closedhand");
                    console.info("TRIGGERED TOUCH START") 
                });
                e.on("swipeleft",function(a) {
                    console.info("SWIPE LEFT")
                });
                e.on("touchmove", '.detail-image', function(b) {
                    0!=c&&(a=b.originalEvent.touches[0].pageX)
                });
                e.on("touchend", '.detail-image', function(e) {
                    c=!1;
                    f==d&&(a-b<-(r/5)&&B(), a-b>r/5&&A());
                    d.removeClass("closedhand")
                })
            }
            function A() {
                q=C;
                q--;
                0>q&&(q=w.children(".ztm-item").length-1);
                z(q)
            }
            function B() {
                q=C;
                q++;
                q>=w.children(".ztm-item").length&&(q=0);
                z(q)
            }
            function z(a,c) {
                var e=null;
                if("mode-3dslider"==b.settings_mode) {
                    t=d.find(".yearlist > .year").eq(a);
                    d.find(".yearlist > .year").removeClass("active prev-prev-prev-item prev-prev-item prev-item curr-item next-item next-next-item next-next-next-item");
                    t.addClass("active");
                    t.prev().prev().addClass("prev-prev-item");
                    t.prev().addClass("prev-item");
                    t.addClass("curr-item");
                    t.next().addClass("next-item");
                    t.next().next().addClass("next-next-item");
                    y.css("left", 40-20*a+"%");
                    for(g=a+3;g<n.children(".detail").length;g++) {
                        var f=y.children(".year").eq(g);
                        f.addClass("next-next-next-item")
                    }
                    for(g=0;g<a-2;g++)f=y.children(".year").eq(g),
                    f.addClass("prev-prev-prev-item");
                    if(n) {
                        e=n.children(".detail").eq(a);
                        n.children().removeClass("prev-prev-prev-item prev-prev-item prev-item curr-item next-item next-next-item next-next-next-item");
                        for(g=a+3; g<n.children(".detail").length; g++)
                            f=n.children(".detail").eq(g),f.addClass("next-next-next-item");
                        for(g=0;g<a-2;g++)
                            f=n.children(".detail").eq(g), f.addClass("prev-prev-prev-item");
                        e.prev().prev().addClass("prev-prev-item");
                        e.prev().addClass("prev-item");
                        e.addClass("curr-item");
                        e.next().addClass("next-item");
                        e.next().next().addClass("next-next-item");
                        n.css("height", e.outerHeight());
                        setTimeout(function() {}, 500);
                        is_touch_device()&&setTimeout(function() {
                            n.css("height", e.outerHeight())
                        }
                        ,
                        1E3);
                        setTimeout(function() {
                            n.css("height", e.outerHeight());
                            setTimeout(function() {}, 300)
                        }
                        ,
                        100)
                    }
                    y&&L( {
                        calculate_year_position: !0
                    }
                    );
                    x&&(x.after(x.clone()),
                    x.next().css("background-image",
                    "url()"))
                }
                C=a
            }
            var d=a(this),
            D="",
            e="",
            C=-1,
            n=null,
            y=null,
            t=null,
            w=null,
            J=null,
            g=0,
            H,
            r,
            G=0,
            I=0,
            q=C=-1,
            F=!1,
            x=null,
            k=0,
            v=0;
            "document_ready"==b.init_on&&h();
            "scroll"==b.init_on&&(a(window).on("scroll",
            c),
            c());
            return this
        }
        )
    }
    ;
    window.dzsztm_init=function(b,
    c) {
        if("undefined"!=typeof c&&"undefined"!=typeof c.init_each&&1==c.init_each) {
            var f=0, h;
            for(h in c)f++;
            1==f&&(c=void 0);
            a(b).each(function() {
                a(this).zoomtimeline(c)
            }
            )
        }
        else a(b).zoomtimeline(c)
    }
}
)(jQuery);
function can_history_api() {
    return!(!window.history||!history.pushState)
}
function is_ios() {
    return-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")
}
function is_android() {
    return-1<navigator.userAgent.toLowerCase().indexOf("android")
}
function is_ie() {
    return-1!=navigator.appVersion.indexOf("MSIE")?!0: !1
}
function is_firefox() {
    return-1!=navigator.userAgent.indexOf("Firefox")?!0: !1
}
function is_opera() {
    return-1!=navigator.userAgent.indexOf("Opera")?!0: !1
}
function is_chrome() {
    return-1<navigator.userAgent.toLowerCase().indexOf("chrome")
}
function is_safari() {
    return-1<navigator.userAgent.toLowerCase().indexOf("safari")
}
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}
function version_firefox() {
    if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)
}
function version_opera() {
    if(/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)
}
function is_ie8() {
    return is_ie()&&9>version_ie()?!0: !1
}
function is_ie9() {
    return is_ie()&&9==version_ie()?!0: !1
}
function get_query_arg(a,
b) {
    if(-1<a.indexOf(b+"=")) {
        var c=(new RegExp("[?&]"+b+"=.+")).exec(a);
        if(null!=c)return c=c[0], -1<c.indexOf("&")&&(c=c.split("&")[1]), c.split("=")[1]
    }
}
function add_query_arg(a,
b,
c) {
    b=encodeURIComponent(b);
    c=encodeURIComponent(c);
    var f=b+"="+c;
    a=a.replace(new RegExp("(&|\\?)"+b+"=[^&]*"), "$1"+f);
    -1<a.indexOf(b+"=")||(f=-1<a.indexOf("?")?"&"+f: "?"+f, a+=f);
    "NaN"==c&&(a=a.replace(new RegExp("[?|&]"+b+"="+c), ""));
    return a
}

function is_touch_device() {
    return!!("ontouchstart"in window)
}

jQuery(document).ready(function(a) {
    dzsztm_init(".zoomtimeline.auto-init", {
        init_each: !0
    });
});