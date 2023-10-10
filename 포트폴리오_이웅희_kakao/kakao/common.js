$(document).ready(function() {
    
    /*************************************/
    /*************  메인배너 **************/
    /*************************************/
    // css에서 banner0 한테 left:0 주던가 여기서 이거로 주던가
    $('.banner').eq(0).css({left: 0});

    // 배너 개수에 맞춰서 인디케이터 생성하기
    let bn_count = $('.banner').length;
    for(let i=0; i<bn_count; i++) { 
        $('.indicator').append(`<div class="indi"></div>`)
    }
    $('.indi').eq(0).addClass('indi_active')


    
    let curr_idx=0;
    let timer = 1000; // 모든 애니메이션에 적용될 시간
    $('#btn_slide_R').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '-100%', (curr_idx+1) % bn_count, '100%',timer);
        curr_idx += 1;
    });

    $('#btn_slide_L').click(function(){ 
        버튼막기() 
        slide(curr_idx % bn_count, '100%', (curr_idx-1) % bn_count, '-100%',timer);
        curr_idx -= 1;
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) {
        // 나갈방
        $('.banner').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.banner').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)

        $('.indi').eq(o_idx).removeClass('indi_active');
        $('.indi').eq(c_idx).addClass('indi_active');

        // curr_idx = c_idx;
    }
/*
            - 왼쪽버튼 기능 만들기
            - auto_slide 만들기
            - main_banner에 마우스오버시 멈춤
                            마우스아웃시 다시 auto_slide 동작
        */
    function 버튼막기() {
        // 버튼 막기
        $('.btn_slide').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('#btn_slide_R').trigger('click')
        }, timer+2000)
    }
    auto_slide()

    $('.main_banner').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide()
    })




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


    /* 스크롤 위치 파악 후, 아이템 위로 올리는 용도 */
    let w_ranking_o_top = $('#w_ranking').offset().top;
    let best_o_top = $('#best').offset().top;
    let new_o_top = $('#new').offset().top;

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let s_bot = s_top + w_height - 300;

        if(s_bot >= w_ranking_o_top) { 
            // for(let i=0; i<$('#w_ranking .item_init').length; i++) {
            //     setTimeout(function(){
            //         $('#w_ranking .item_init').eq(i).addClass('item_init_active')
            //     }, i * 70)
            // }
            item_slide_up($('#w_ranking .item_init'));
            best_o_top = $('#best').offset().top;
        }
        if(s_bot >= best_o_top) { 
            // for(let i=0; i<$('#best .item_init').length; i++) {
            //     setTimeout(function(){
            //         $('#best .item_init').eq(i).addClass('item_init_active')
            //     }, i * 70)
            // }
            item_slide_up($('#best .item_init'));
            new_o_top = $('#new').offset().top;
        }
        if(s_bot >= new_o_top) { 
            // for(let i=0; i<$('#new .item_init').length; i++) {
            //     setTimeout(function(){
            //         $('#new .item_init').eq(i).addClass('item_init_active')
            //     }, i * 70)
            // }

            item_slide_up($('#new .item_init'));
        }
    });

    function item_slide_up(el) {
        for(let i=0; i<el.length; i++) {
            setTimeout(function(){
                el.eq(i).addClass('item_init_active')
            }, i * 70)
        }
    } 


    // load_list.js 에 있는 함수 사용
    load_items(0, 8) // best
    load_items(1, 8) // new
})