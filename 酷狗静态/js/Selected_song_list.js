var wrap_m_ul=document.getElementById('wrap_m_ul');
var pic=['img/20190721191211779306.jpg','img/20190729173641413693.jpg','img/20190730123450405608.jpg','img/20190724190741406217.jpg','img/20190723172706271099.jpg']
var cptT=['47.8','6.3','35772.0','2.0','159.5'];
var songName=['失恋听情歌｜没有你这故事没结尾','华语女声：深夜里的那丝温柔','每周推荐歌曲','浪漫轻音：心中一座城，住着我的心上人','粤语柔情·回味旧时光中的浪漫故事']		
var songsinger=['念安娜','腾讯音乐人','酷狗号歌单君','燕銜泥','星空下的恋人']
for(var i=0;i<pic.length;i++){
	var li=document.createElement('li');
	li.innerHTML=`<div class="hidden"><span></span></div>
					<div class="cptT"><span>${cptT[i]}万</span><i></i></div>
							<img src="${pic[i]}"/>
							<div class="bottom_tx">
								<p class="songName">${songName[i]}</p>
								<p class="songsinger">${songsinger[i]}</p>
							</div>
							`;
	wrap_m_ul.appendChild(li);
}

var li=wrap_m_ul.getElementsByTagName('li');
var hidden=wrap_m_ul.getElementsByClassName('hidden');
for(let i=0;i<hidden.length;i++){
	li[i].onmousemove=function(){
		console.log(1);
	hidden[i].style.visibility='visible';
	}
	li[i].onmouseleave=function(){
	hidden[i].style.visibility='hidden'
	}
}

var lisarr=['img/lispic01.jpg','img/lispic02.jpg','img/lispic03.jpg'];

