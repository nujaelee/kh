


$(document).ready(function() {
    var chk2 = false;
    var chk3 = false;
    let lev = 0;
    $('.login_box_gray').click(function(){
        let chk=check_lisk();

        if(chk&&lev==0){
//            add_arr();
            join_input_pw();
            console.log("1단계");
            lev+=1;
            console.log(lev);
        }
        else if(chk&&lev==1){
            chk2 = pw_change_chk();
            if(chk2){
                lev+=1;
                join_input_name();
            }
            console.log("2단계");
            console.log(lev);
        }
        else if(chk&&lev==2&&chk2){
            chk3=name_chk();
            if(chk3){
                add_arr();
            }
        }
    })

    $('.login_box_yell').click(function(){
        let user_data = check_user();
        if(user_data){
            window.close();
        }
    })
})

function pw_change_chk(){
    let chk1=$('#user_pw1').val();
    let chk2=$('#user_pw2').val();
    // let chk1=$('#user_pw1').text();
    // console.log(chk1);
    // let chk2=$('#user_pw2').text();
    // console.log(chk2);
    if(chk1==""){
        window.alert("비밀번호를 입력해 주세요.")
        return false;
    }
    else{
        if(chk1==chk2){
            return true;
        }
        else{
            window.alert("같은 비밀번호를 입력해 주세요.")
            return false;
        }
    }
    

}

function join_input_pw(){
    $('#user_pw1, #user_pw2').css({
        display: 'block'
    })
}

function join_input_name(){
    $('#us_name').css({
        display: 'block'
    })   
}
function name_chk(){
    let chk1=$('#us_name').val();
    // let chk1=$('#user_pw1').text();
    // console.log(chk1);
    // let chk2=$('#user_pw2').text();
    // console.log(chk2);
    if(chk1){
        return true;
    }
    else{
        window.alert("이름을 입력해 주세요.")
        return false;
    } 
    

}



function add_arr(){
    console.log(user_list);
    console.log($('#user_email').val());
    let len = user_list.length;
    var us_name = $('#us_name').val();
    var us_id = $('#user_email').val();
    var user_pw = $('#user_pw1').val();

    user_list.push({user_no: len, name: us_name, user_id: us_id, user_pw: user_pw});
    console.log(user_list);
    window.close();

}


function check_lisk(){
    var id = $('#user_email').val();
    let chk_at=id.indexOf("@");
    let chk_dot=id.indexOf(".");
    let at_arr=id.split("@");
    let dot_arr=id.split(".");;
    let at_len=at_arr.length;
    let dot_len=dot_arr.length;
    let len = user_list.length;

    console.log("@ 배열수"+at_len);
    console.log(". 배열수"+dot_len);
    if(chk_at>chk_dot){
        window.alert("올바른 메일주소를 입력해 주세요.");
    }
    else{
        if(at_len==2&&dot_len==2){
            for(let i=0; i<len; i++){
                console.log(user_list[i].user_id)
                if(user_list[i].user_id==id){
                    window.alert("이미 존재 하는 이메일 입니다.");
                    return false;
                }
            }
            return true;
        }
        else{
            window.alert("올바른 메일주소를 입력해 주세요.");
        }
    }
}

function check_user(){
    var inp_id = $('#user_id').val();
    var inp_pw = $('#user_pw').val();

    for(let i=0; i<user_list.length;i++){
        if(inp_id==user_list[i].user_id){
            if(inp_pw==user_list[i].user_pw){
                return true;
            }
            window.alert("PW가일치하지않습니다.");
            return false;
            
        }
    }
    
    window.alert("없는 ID입니다.");
    return false;
}
