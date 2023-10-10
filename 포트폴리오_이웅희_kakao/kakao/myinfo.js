$(document).ready(function() {
    $('.btn_change').click(function(){
        pw_change();
    })
    $('.btn_change2').click(function(){

        let chk = pw_change_chk();
        if(chk){
            pw_change_com()
        }
    })
    $('.login_box_yell').click(function(){
            window.close();
    })
})

function pw_change(){
    $('.pw_change').css({display: 'block'}); 
}
function pw_change_chk(){
    let chk1=$('#pw_change1').val();
    let chk2=$('#pw_change2').val();
    if(chk1==chk2){
        return true;
    }
    else{
        window.alert("같은 비밀번호를 입력해 주세요.")
        return false;
    }
}
function pw_change_com(){
    let com = $('#pw_change1').val();
    console.log(com);
    $('#user_pw').val(com);
    window.alert("비밀번호가 변경되었습니다.")
    $('.pw_change').css({display: 'none'}); 
    console.log($('#user_pw').text)
}