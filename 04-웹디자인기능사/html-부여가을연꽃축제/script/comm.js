$(function(){
    
    //fade
    let now = 0; // 현재 보여지는 이미지를 now 변수에 지정

    let $slide = $('.slide li');
    $slide.eq(now).show();

    // 3초 마다 명령 실행
    setInterval(function(){    
        if(now<2){
            // '.slide ul'의 'left: -100%' 애니메이션 시켜...
            $slide.eq(now).fadeOut();
            $slide.eq(now+1).fadeIn();

            now++; // now = now + 1
        }else{
            $slide.eq(now).fadeOut();
            $slide.eq(0).fadeIn();
            now=0;
        }
    },3000);


        



})