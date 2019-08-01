var lunbo_pic=['//img10.360buyimg.com/img/jfs/t1/64124/1/3367/83729/5d19b843Eb81b49aa/dd02d6c395dd2e21.jpg',
'//img20.360buyimg.com/img/jfs/t1/76028/37/3412/96885/5d19ca28Ea15ca341/1d5c01c683a743df.jpg',
'//img10.360buyimg.com/img/jfs/t1/44804/37/3392/101071/5d1327ceEf3fbd99b/8ac1f20b7ba65dbd.jpg'];
var lunbo=document.getElementsByClassName('lunbo');
var lunbo_li=lunbo[0].getElementsByTagName('li');
var img=document.getElementById("img");
var num=0;
for(var i=0;i<lunbo_li.length;i++){
	lunbo_li[i].index=i;
	lunbo_li[i].onmousemove=function(){
		for(var j=0;j<lunbo_li.length;j++){
			lunbo_li[j].className="";
		}
		num=this.index;
		lunbo_li[this.index].className="active";
		img.style.backgroundImage="url("+lunbo_pic[this.index]+")";
	}
}
function clear_li(){
	for(var k=0;k<lunbo_li.length;k++){
			lunbo_li[k].className="";
		}
}
function auto_lunbo(){
	clear_li();
	num++;
	num%=lunbo_pic.length;
	lunbo_li[num].className="active";
	img.style.backgroundImage="url("+lunbo_pic[num]+")";
}
var timer=null;
timer=setInterval(auto_lunbo,2000);
lunbo[0].onmousemove=function(){
	clearInterval(timer);
}
lunbo[0].onmouseleave=function(){
	timer=setInterval(auto_lunbo,2000);
}

//倒计时
var timer_single=null;
function  single_count(){var starttime=new Date();
var endtiem=new Date('2019/11/11');
var time=endtiem.getTime()-starttime.getTime();
var second=Math.floor(time/1000%60);
var minit=Math.floor(time/1000/60%60);
var hour=Math.floor(time/1000/60/60%24);
var day=Math.floor(time/1000/60/60/24);
if(hour<10)hour='0'+hour;
if(minit<10)minit='0'+minit;
if(second<10)second='0'+second;
var time_hour=document.getElementsByClassName('count_time_hour');
var time_minit=document.getElementsByClassName('count_time_minit');
var time_second=document.getElementsByClassName('count_time_second');
time_hour[0].innerText=hour;
time_minit[0].innerHTML=minit;
time_second[0].innerHTML=second;}
timer_single=setInterval(single_count,1000);
