var pt=['img/20190109104155147376.jpg','img/20190109104215314555.jpg','img/20190611101938392990.jpg',
		'img/20190712141831347594.jpg','img/20190713180315537789.jpg','img/20190713180810156845.jpg',
		'img/20190713180852218252.jpg'];
var left=document.getElementsByClassName('bt_left')[0];
var right=document.getElementsByClassName('bt_right')[0];
var lb_dot=document.getElementsByClassName('lb_dot')[0];
var dot=lb_dot.getElementsByTagName('li');
var lunbo=document.getElementsByClassName('lunbo')[0];
var timer=null;
var num=0;
var img=document.getElementById('img');

for(var i=0;i<dot.length;i++){
	dot[i].index=i;
	dot[i].onmousemove=function(){
		for(var j=0;j<dot.length;j++){
			dot[j].className='';
		}
		num=this.index;
		dot[this.index].className='li_active';
		img.src=pt[this.index];
	}
}
function clear_dot(){
	for(var j=0;j<dot.length;j++){
			dot[j].className='';
	}
}
left.onclick=function(){
	clear_dot();
	num--;
	if(num<0)num=dot.length-1;
	dot[num].className='li_active';
	img.src=pt[num];
}
right.onclick=function(){
	clear_dot();
	num++;
	num%=(dot.length);
	dot[num].className='li_active';
	img.src=pt[num];
}
function auto_img(){
	clear_dot();
	num++;
	num%=(dot.length);
	dot[num].className='li_active';
	img.src=pt[num];
}
timer=setInterval(auto_img,1000);
lunbo.onmousemove=function(){
	clearInterval(timer);
}
lunbo.onmouseleave=function(){
	timer=setInterval(auto_img,1000);
}
