var more=document.getElementById('more');
var secondary_menu=document.getElementById('secondary_menu');
var li=secondary_menu.getElementsByTagName('li');
more.onmousemove=function(){
	secondary_menu.style.display='block';
	more.className='more_hover';
}
more.onmouseleave=function(){
	secondary_menu.style.display='none';
	more.className='';
}
for(var i in li){
	li[i].onmousemove=function(){
		secondary_menu.style.display='block';
		more.className='more_hover';
	}
	li[i].onmouseleave=function(){
		secondary_menu.style.display='none';
		more.className='';
	}
}
