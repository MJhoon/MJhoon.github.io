/* 검색아이콘 클릭시 검색폼 확장 */

const label = document.querySelector("#searchF > label");
const searchF = document.querySelector("#searchF");
const btn = document.querySelector("#search_btn");

label.onclick = () => {
  searchF.style.width = "180px";
  btn.style.zIndex = "1";
}


/* jQuery식 표기 
$(function(){
  $("#searchF > label").click(function(){
    $("#searchF").css({width: "182px"});
    $("#search_btn").css({zIndex: 1});
  });
});
*/