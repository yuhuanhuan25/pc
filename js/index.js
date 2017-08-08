var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed:3000,
    autoplay:true,
    effect:'fade',
    paginationClickable :true,
   /* effect : 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
    },*/
   /* paginationClickable :true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
*/
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
})




var news=document.getElementById('news');
var divs=news.getElementsByTagName('div');
var uls=document.getElementById('title');
var lis=uls.getElementsByTagName('li');
console.log(news);
console.log(divs);
console.log(uls);
console.log(lis);
for(var i= 0;i<lis.length;i++){
    choose();
}
function choose(){
    lis[i].index=i;
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            divs[j].className="";
        }
        lis[this.index].className="title-on";
        divs[this.index].className="dis-blo";


}
}


var uls=document.getElementById("uls");
 var lis1=uls.getElementsByTagName('li');
 console.log(uls);
 console.log(lis1);

 for(var a=0;a<lis1.length;a++){
 lis1[a].indexs=a;
 lis1[a].onmouseover=function(){
 for(var b=0;b<lis1.length;b++){
 lis1[b].className="";
 }
 lis1[this.indexs].className="on";
 }
 }


var uls3d=document.getElementById('uls-3d');
var lis3d=uls3d.getElementsByTagName('li');
var styles=document.querySelector('style');
console.log(uls3d);
console.log(lis3d);
console.log(styles);

for(var c=0;c<lis3d.length;c++){
    (function(c){
        window.setTimeout(function(){
            styles.innerHTML+=' .hero-3d ul li:nth-child('+(c+1)+'){transform:rotateY('+(lis3d.length-c-1)*30+'deg)translateZ(300px);transition:0.7s;translate-delay:'+0.1*c+'s}'
        },c*1000)
    })(c);
}





var diankai=document.getElementById('diankai');
var flash=document.getElementById('flash');
diankai.onclick=function(){
    flash.style.display='block';
}



var navTopjs=document.getElementById('nav-top-js');
var navTop=document.getElementById('nav-top');
navTop.onmouseover=function(){
    navTopjs.style.display='block';
}
navTop.onmouseout=function(){
    navTopjs.style.display='none';
}



var contChoose=document.getElementById('cont-choose');
var dtChoose=contChoose.getElementsByTagName('dt');
var ulsChoose=document.getElementById('ulsChoose');
var lisChoose=ulsChoose.getElementsByTagName('li');
console.log(contChoose);
console.log(dtChoose);
console.log(ulsChoose);
console.log(lisChoose);

for(var d=0;d<lisChoose.length;d++){
    lisChoose[d].indexChoose=d;
    lisChoose[d].onmouseover=function(){
        for(var e=0;e<lisChoose.length;e++){
            lisChoose[e].className="";
            dtChoose[e].className="";
        }
        dtChoose[this.indexChoose].className="content-choose-2-on";
    }

}

/*
ulsChoose.onmouseout=function(){
    for(var g=0;g<lisChoose.length;g++){
        lisChoose[g].className="";
        dtChoose[g].className="";
    }
    dtChoose[0].className='.content-choose-1 dl .content-choose-2-on';
}
*/


var footerSearch=document.getElementById('footer-search');
var inputSearch=document.getElementById('inputSearch');
var pSearch=document.getElementById('pSearch');
var footerUl=document.getElementById('footerUl');
var footera=footerUl.getElementsByTagName('a');
console.log(footerSearch);
console.log(inputSearch);
console.log(pSearch);
console.log(footerUl);
console.log(footera);


var n=-1;
var oldValue=null;

function search() {
    window.open('https://www.pvn.qq.com/s?wd='+inputSearch.value,'_self');
    inputSearch.innerHTML='';
}
inputSearch.onkeyup=inputSearch.onfocus=function () {
    var str=inputSearch.value.replace(/(^ +)|( +$)/g,'');
    /* if(str){
     oUl.style.display='block';
     }else {
     oUl.style.display='none';
     }*/
    footerUl.style.display=str?'block':'none';
};

document.body.onclick=function (e) {
    var target=e.target||e.srcElement;
    if(target.id=='inputSearch'){
        return;
    }
    if(target.id=='search'){
        search();
    }
    if(target.tagName.toLowerCase()=='a'){
        inputSearch.value=target.innerHTML;
    }
    footerUl.style.display='none';
};

inputSearch.onkeydown=function (e) {
    e=e||window.event;
    console.log(e.keyCode); // 向下40  上38   13 enter
    if(e.keyCode==40){
        n++;

        if(n>footera.length-1){
            n=-1;
        }
        listLi();

    }


    if(e.keyCode==38){
        n--;
        if(n<=-2){
            n=footera.length-1;
        }
        listLi();
    }

    function listLi() {
        if(!oldValue){
            oldValue=inputSearch.value;
        }
        for(var i=0;i<footera.length;i++){
            footera[i].style.background='';
        }
        if(n===-1){
            inputSearch.value=oldValue;
        }else {
            inputSearch.value=footera[n].innerHTML;
            footera[n].style.background='#e1e1e1';
        }
    }
    if(e.keyCode==13){
        search();
    }
};

pSearch.onclick=function () {
    search();
}



/*

var autoP=document.getElementById('content-choose-l-footer');
var autoDl=autoP.getElementsByTagName('dt');
var autoPp=autoP.getElementsByTagName('p');
var autoplay=autoP.getElementsByTagName('video');
console.log(autoplay);
console.log(autoDl);
console.log(autoPp);
for(var f=0;f<autoDl.length;f++){
    autoDl[f].indexF=f;
    autoDl.onmouseover=function(){
        for(var g=0;g<autoDl.length;g++){
            autoPp[g].className="";
        }
        autoPp[this.indexF].classNames='autoplayP';
    }
}
for(var m=0;m<autoplay.length;m++){
    autoplay[m].indexV=m;
    autoplay[m].onclick=function(){
       if(autoplay[m].paused){
           autoplay[m].play();
       }else{
           autoplay[m].paused();
       }

    }

}
*/


/*

var videoCon=document.getElementById('content-choose-l-footer');
var ps=videoCon.getElementsByTagName('p');
/!*var videos=videoCon.getElementsByTagName('video');*!/
var dts=videoCon.getElementsByTagName('dt');
var vodie=document.getElementById('vodie');


console.log(ps);


for(var v=0;v<ps.length;v++) {

    ps[v].video = v;
    ps[v].onclick = function () {
        this.style.display = 'none';
    }
}

*/


var ps=$('#content-choose-l-footer').find('p');
console.log(ps);
var dts=$('#content-choose-l-footer').find('dt');

ps.each(function(i,val){
    $(val).click(function(){
        $(this).hide(1000);
    })


})





