/* 공지사항 리스트 순차적으로 up */

var index = 0; //현재 보이는 li 인텍스(자리번호)
var pIndex = 0; //지나간(바로 이전에 위로 이동한) li 인텍스
var $list = $("#notice_list > li"); // 모든 li
var liLength = $list.length; // li 총갯수
var liHeight = $("#notice_list > li").height(); // li 하나당 높이

setInterval(() => {
  index++;
  if(index >= liLength){
    index = 0;
  }
  console.log(index);
  $list.eq(pIndex).animate({top: "-"+liHeight+"px"});
  $list.eq(index).css({top: liHeight+"px"});
  $list.eq(index).animate({top: 0+"px"});

  pIndex = index;
}, 3000);