


//슬라이드아이템 스크롤 값에 따라 다른페이지 띄우기 
window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let status =0;
    console.log(scrollY)

    if(scrollY>1000&&1800>=scrollY){
        console.log("지금 이모티콘");
        display_page(0);
        del_fixed()
    }
    else if(scrollY>1800&&2570>=scrollY){
        console.log("지금 쇼핑");
        display_page(0);
        fixed_page(0);
    }
    else if(scrollY>2570&&3340>=scrollY){
        console.log("지금 채널");
        display_page(1);
        fixed_page(1);
    }
    else if(scrollY>3340&&4110>=scrollY){
        console.log("지금 메일");
        display_page(2);
        fixed_page(2);
    }
    else if(scrollY>4110&&4880>=scrollY){
        console.log("지금 테마");
        display_page(3);
        fixed_page(3);
    }
    else if(scrollY>4880&&5650>=scrollY){
        console.log("지금 지갑");
        display_page(4);
        fixed_page(4);
    }
    else if(scrollY>5650&&6420>=scrollY){
        console.log("지금 실험실");
        display_page(5);
        fixed_page(5);
    }
    else if(scrollY>6420&&7200>=scrollY){
        console.log("지금 실험실");
        display_page(6);
        fixed_page(6);
    }
    else if(scrollY>7200){
        console.log("지금 실험실");
        del_fixed()
        display_page(6);
    }
    // console.log(scrollY);
});

function display_page(num){
    $('.updown_slide').eq(num).addClass('showBox_class');
    if(num>0){
        $('.updown_slide').eq(num-1).removeClass('showBox_class');
    }
    if(7>num){
        $('.updown_slide').eq(num+1).removeClass('showBox_class');
    }
}

function fixed_page(num){
    $('.updown_slide').eq(num).addClass('showBox_fixed');
    if(num>0){
        $('.updown_slide').eq(num-1).removeClass('showBox_fixed');
    }
    if(7>num){
        $('.updown_slide').eq(num+1).removeClass('showBox_fixed');
    }
}

function del_fixed(){
    $('.updown_slide').removeClass('showBox_fixed');
}

























// function openWindowPop(url, name){

//     var options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no';
//     window.open('./joinus.html', name, options);
// }

$(document).ready(function() {
    let chk_num = 0;
    $('#intro').click(function(){
        $('.ab_pan').css({display:'none'});
        
        if(chk_num==1){
            $('#intro .ab_pan').css({
                display:'none'
            })
        }

        else if(chk_num!=1){
            $('#intro .ab_pan').css({
                display:'block'
            })
            chk_num=1;
        }
    })
    $('#tell').click(function(){
        $('.ab_pan').css({display:'none'});
        
        if(chk_num==2){
            $('#tell .ab_pan').css({
                display:'none'
            })
        }

        else if(chk_num!=2){
            $('#tell .ab_pan').css({
                display:'block'
            })
            chk_num=2;
        }
    })
    $('#it_serv').click(function(){
        $('.ab_pan').css({display:'none'});
        if(chk_num==3){
            $('#it_serv .ab_pan').css({
                display:'none'
            })
        }
        if(chk_num!=3){
            $('#it_serv .ab_pan').css({
                display:'block'
            })
            chk_num=3;
        }
        
        
    })
    $('#promi').click(function(){
        $('.ab_pan').css({display:'none'});
        if(chk_num==4){
            $('#promi .ab_pan').css({
                display:'none'
            })
        }
        if(chk_num!=4){
            $('#promi .ab_pan').css({
                display:'block'
            })
            chk_num=4;
        }
        
        
    })

    

    let chk = true;
    let scrollpos = 0;
    let chk_display = true;
    let chk_onoff = true;
        $('.start_page').on('mousewheel DOMMouseScroll', function() {
            let timer = 1000;
            let header_bot = $('.header').offset().top+$(".header").outerHeight();

            event.preventDefault();
            if(chk) {
                // 휠 막기
                chk = false;
                setTimeout(function() {
                    chk = true;
                }, timer)
                if(event.wheelDelta<0){
                    if(scrollpos==0){
                        $('html, body').stop().animate({
                            scrollTop: $('.main_banner').offset().top - header_bot
                        }, timer)
                    }
                    else if(scrollpos==1){
                        $('html, body').stop().animate({
                            scrollTop: $('.scd_banner_outer').offset().top - header_bot
                        }, timer)
                        setTimeout(function(){
                            $('.is_page').css({display:'none'})
                            $('html, body').stop().animate({
                                scrollTop: 0
                            }, 0)
                        },timer)
                        chk_display=false;
                        $('.start_page').off('mousewheel DOMMouseScroll')
                        
                    }
                    scrollpos++;
                }

                else if(event.wheelDelta>0){
                    $(window).scroll(function () { 
                        if($(document).scrollTop()<120){
                            chk_display=true;
                        }
                    });

                    if(chk_display){
                        if(scrollpos==2){
                            $('.is_page').css({display:'block'})
                            $('html, body').stop().animate({
                                scrollTop: $('.scd_banner_outer').offset().top - header_bot
                            }, 0)
                            $('html, body').stop().animate({
                                scrollTop: $('.main_banner').offset().top - header_bot
                            }, timer)
                        }
                        else if(scrollpos==1){
                            $('html, body').stop().animate({
                                scrollTop: $('.main').offset().top - header_bot
                            }, timer)
                        }
                        scrollpos--;
                    }
                }
            }
        })

    $('.start_page').on('mousewheel DOMMouseScroll', function() {

    })
})


//서치아이콘
$(document).ready(function() {

    let chk = true;

        $('.sear').click(function(){
            if(chk){
                $('.header, .header_outer, .top_header').css({
                    height: '100%'
                })
                $('.pan').css({
                    display:'block'
                })
            }
            else{
                    $('.header, .header_outer').css({
                        height: '146px'
                    })
                    $('.top_header').css({
                        height: '72px'
                    })
                    $('.pan').css({
                        display:'none'
                    })
            }
            chk=!chk;
    })
    
})

//나이트모드
$(document).ready(function() {

    let chk = true;

    $('.moon').click(function(){
        if(chk){
            $('body').css({
                background:"black",
                color: "white"
            })
            $('.header_outer').css({
                background:"black",
                color: "white"
            })
            $('.top_header').css({
                "border-bottom": "1px solid rgba(255, 255, 255, 0.5)"
            })
            $('.btm_header').css({
                "border-bottom": "1px solid rgba(255, 255, 255, 0.5)"
            })
            $('.recomand').css({
                borderTop: "1px solid rgba(255, 255, 255, 0.5)"
            })
            $('.footer').css({
                borderTop: "1px solid rgba(255, 255, 255, 0.5)"
            })
            $('.night').css({
                display:"inline-block"
            })
            $('.night1').css({
                display:"flex"
            })
            $('.sun, .sun1').css({
                display:"none"
            })
            $('.updown_slide').css({
                color: "white"
            })
            $('.updown_slide').css({
                color: "white"
            })
            $('.top_a').css({
                color: "white"
            })
            $('.ab_pan').css({
                color: "black",
                background:"white"
            })
            
        }
        else{
            $('body').css({
            background: "white",
            color: "black"
            })
            $('.header_outer').css({
                background:"white",
                color: "black"
            })
            $('.top_header').css({
                "border-bottom": "1px solid rgba(100, 100, 100, 0.1)"
            })
            $('.btm_header').css({
                "border-bottom": "1px solid rgba(100, 100, 100, 0.1)"
            })
            $('.recomand').css({
                borderTop: "1px solid rgba(100, 100, 100, 0.1)"
            })
            $('.footer').css({
                borderTop: "1px solid rgba(100, 100, 100, 0.1)"
            })

            $('.night, .night1').css({
                display:"none"
            })
            $('.sun').css({
                display:"inline-block"
            })
            $('.sun1').css({
                display:"flex"
            })
            $('.updown_slide, .top_a:hover').css({
                color: "black"
            })
            $('.top_a').css({
                color: "black"
            })
            $('.ab_pan').css({
                color: "white",
                background:"black"
            })

        }
        chk=!chk;
        console.log(chk);
    })
})





$(document).ready(function() {

    $('.log_out').click(function(){

        logout();
    })

    function logout(){
        $('.log').css({display: 'block'}); 
        $('.log_info').css({display: 'none'}); 

    }


    //슬라이드 아이템 
    $('.slide_item').eq(0).css({left: 0});  
    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.slide_item').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator').append(`<div class="indi"></div>`)
    }
    $('.indi').eq(0).addClass('indi_active')

    let curr_idx=0;
    let timer = 500; // 모든 애니메이션에 적용될 시간
    $('#btn_slide_R').click(function(){ 
        버튼막기() 
        if(curr_idx<6){
        slide(curr_idx % bn_count, '-100%', (curr_idx+1) % bn_count, '100%',timer);
        curr_idx += 1;
        }
    });

    $('#btn_slide_L').click(function(){ 
        버튼막기() 
        if(curr_idx>0){
        slide(curr_idx % bn_count, '100%', (curr_idx-1) % bn_count, '-100%',timer);
        curr_idx -= 1;
        }
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.slide_item').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.slide_item').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)
        $('.indicator').text(c_idx+1+"/"+bn_count);
    }

    function 버튼막기() {
        // 버튼 막기
        $('.btn_slide').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    $('.indi').click(function(){
        let colored = $('.indi_active').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            버튼막기()
            slide(colored, '-100%', clicked, '100%', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            버튼막기()
            slide(colored, '100%', clicked, '-100%',timer);
            curr_idx = clicked ;
        }
    })
})

$(document).ready(function() {
    //슬라이드 아이템 
    $('.box_img1').eq(0).css({left: 0});  
    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.slide_item').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator').append(`<div class="indi"></div>`)
    }
    $('.indi').eq(0).addClass('indi_active')

    let curr_idx=0;
    let timer = 500; // 모든 애니메이션에 적용될 시간
    $('#btn_slide_R').click(function(){ 
        버튼막기() 
        if(curr_idx<6){
        slide(curr_idx % bn_count, '-100%', (curr_idx+1) % bn_count, '100%',timer);
        curr_idx += 1;
        }
    });

    $('#btn_slide_L').click(function(){ 
        버튼막기() 
        if(curr_idx>0){
        slide(curr_idx % bn_count, '100%', (curr_idx-1) % bn_count, '-100%',timer);
        curr_idx -= 1;
        }
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.slide_item').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.slide_item').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)
        $('.indicator').text(c_idx+1+"/"+bn_count);
    }

    function 버튼막기() {
        // 버튼 막기
        $('.btn_slide').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    $('.indi').click(function(){
        let colored = $('.indi_active').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            버튼막기()
            slide(colored, '-100%', clicked, '100%', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            버튼막기()
            slide(colored, '100%', clicked, '-100%',timer);
            curr_idx = clicked ;
        }
    })

})

//이미지 투명도 조정 함수
$(document).ready(function() {
    $('.box_img1').eq(0).css({opacity: 1});  
    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.box_img1').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator_box').append(`<div class="indi_box"></div>`)
    }
    $('.indi_box').eq(0).addClass('indi_active_box')

    let curr_idx=0;
    let timer = 500; // 모든 애니메이션에 적용될 시간
    $('#btn_for_right').click(function(){ 
        stop_box() 
        if(curr_idx<2){
        slide_box(curr_idx % bn_count, '0', (curr_idx+1) % bn_count, '1',timer);
        curr_idx += 1;
        }
    });

    $('#btn_for_left').click(function(){ 
        stop_box() 
        if(curr_idx>0){
        slide_box(curr_idx % bn_count, '0', (curr_idx-1) % bn_count, '1',timer);
        curr_idx -= 1;
        }
    })

    function slide_box(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.box_img1').eq(o_idx).animate({
            opacity: o_pos
        }, t)

        // 들어올방
        $('.box_img1').eq((c_idx)).css({
            opacity: c_pos
        },0).stop(true).animate({
            opacity: 1
        }, 800)
        $('.indicator_box').text(c_idx+1+"/"+bn_count);
    }

    function stop_box() {
        // 버튼 막기
        $('.btn_box_slide').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.btn_box_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    $('.indi_box').click(function(){
        let colored = $('.indi_active_box').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            stop_box()
            slide_box(colored, '0', clicked, '1', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            stop_box()
            slide_box(colored, '0', clicked, '1',timer);
            curr_idx = clicked ;
        }
    })

})

$(document).ready(function() {
    $('.box_img1').eq(0).css({opacity: 1});  
    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.box_img1').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator_box').append(`<div class="indi_box"></div>`)
    }
    $('.indi_box').eq(0).addClass('indi_active_box')

    let curr_idx=0;
    let timer = 500; // 모든 애니메이션에 적용될 시간
    $('#btn_for_right').click(function(){ 
        stop_box() 
        if(curr_idx<2){
        slide_box(curr_idx % bn_count, '0', (curr_idx+1) % bn_count, '1',timer);
        curr_idx += 1;
        }
    });

    $('#btn_for_left').click(function(){ 
        stop_box() 
        if(curr_idx>0){
        slide_box(curr_idx % bn_count, '0', (curr_idx-1) % bn_count, '1',timer);
        curr_idx -= 1;
        }
    })

    function slide_box(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.box_img1').eq(o_idx).animate({
            opacity: o_pos
        }, t)

        // 들어올방
        $('.box_img1').eq((c_idx)).css({
            opacity: c_pos
        },0).stop(true).animate({
            opacity: 1
        }, 800)
        $('.indicator_box').text(c_idx+1+"/"+bn_count);
    }

    function stop_box() {
        // 버튼 막기
        $('.btn_box_slide').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.btn_box_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    $('.indi_box').click(function(){
        let colored = $('.indi_active_box').index();
        let clicked = $(this).index();

        if(colored < clicked) {  
            stop_box()
            slide_box(colored, '0', clicked, '1', timer); 
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
            stop_box()
            slide_box(colored, '0', clicked, '1',timer);
            curr_idx = clicked ;
        }
    })

})





