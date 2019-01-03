window.onload = function(){
			var cover = document.getElementById('banner');
			window.onscroll = function(){
				var st = document.documentElement.scrollTop || document.body.scrollTop;
				if(st > 200){
					cover.style.position = 'fixed';
				}else{
					cover.style.position = 'static';
				}
			}
		}
	var oGouwu = document.getElementById('gouwu');
	var oFangda = document.getElementById('fangda');
	var oSpan_1 = document.getElementById('span_1');
	var oSpan_2 = document.getElementById('span_2');
	var oSpan_3 = document.getElementById('span_3');
	var oSpan_4 = document.getElementById('span_4');
	var oLeft_Img = document.getElementById('left_img');
	var oRight_Img = document.getElementById('right_img');
	var oCenter = document.getElementById('center');
	var oShadow = document.getElementById('shadow');
	var oNav = document.getElementById('nav');
	var oBanner = document.getElementById('banner');
	var opp0 = document.getElementById('pp0');
	var opp1 = document.getElementById('pp1');
	var oNum_span1 = document.getElementById('num_span1');
	var oNum_span2 = document.getElementById('num_span2');
	var oNum_span3 = document.getElementById('num_span3');
	var oShang_span1 = document.getElementById('shang_span1');
	var oShang_span2 = document.getElementById('shang_span2');
	var oSpan_1_img = document.getElementById('span_1_img');
	var oSpan_2_img = document.getElementById('span_2_img');
	var oMask = document.getElementById('mask');
	var oGouwuche_span1 = document.getElementById('gouwuche_span1');
	var oGouwuche_span2 = document.getElementById('gouwuche_span2');
	var oGouwuche_span3 = document.getElementById('gouwuche_span3');
	var oXiaoliang_span1 = document.getElementById('xiaoliang_span1');
	var oXiaoliang_span2 = document.getElementById('xiaoliang_span2');
	var oXiaoliang_span3 = document.getElementById('xiaoliang_span3');
	oXiaoliang_span2.onclick = function(){
		oMask.style.display = "block";
	}
	oXiaoliang_span3.onclick = function(){
		oMask.style.display = "block";
	}
	oGouwuche_span1.onclick = function(){
		oMask.style.display = "none";
	}
	oGouwuche_span2.onclick = function(){
		oMask.style.display = "none";
	}
	oGouwuche_span3.onclick = function(){
		oMask.style.display = "none";
	}
	
	oSpan_1.onclick = function(){
		if(oSpan_2.className == 'span_up'){
			oSpan_2.className = 'span_on';
			oSpan_3.className = 'span_up';
			opp0.src = 'img/pp0.jpeg';
			opp1.src = 'img/pp0.jpeg';
		}
	}
	oSpan_4.onclick = function(){
		if(oSpan_3.className == 'span_up'){
			oSpan_3.className = 'span_on';
			oSpan_2.className = 'span_up';
			opp0.src = 'img/pp1.jpeg';
			opp1.src = 'img/pp1.jpeg';
		}
			
	}
	oSpan_2.onclick = function(){
		oSpan_2.className = 'span_on';
		oSpan_3.className = 'span_up';
		opp0.src = 'img/pp0.jpeg';
		opp1.src = 'img/pp0.jpeg';
	}
	oSpan_3.onclick = function(){
		oSpan_3.className = 'span_on';
		oSpan_2.className = 'span_up';
		opp0.src = 'img/pp1.jpeg';
		opp1.src = 'img/pp1.jpeg';
	}
	
	oLeft_Img.onmouseenter = function(){
		oRight_Img.style.display = 'block';
		oShadow.style.display = 'block';
	}
	oLeft_Img.onmouseleave = function(){
		oRight_Img.style.display = 'none';
		oShadow.style.display = 'none';
	}
	oLeft_Img.onmousemove = function(e){
		var ev = e || window.event;
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		var iL = ev.clientX - oCenter.offsetLeft - oShadow.offsetWidth / 2 - 20;
		var iT = ev.clientY - oCenter.offsetTop - oShadow.offsetHeight / 2 + st;
		if(iL < 0)
			iL = 0;
		if(iT < 0)
			iT = 0;

		var iMaxL = oLeft_Img.offsetWidth - oShadow.offsetWidth;
		var iMaxT = oLeft_Img.offsetHeight - oShadow.offsetHeight;

		if(iL > iMaxL)
			iL = iMaxL;
		if(iT > iMaxT)
			iT = iMaxT;


		oShadow.style.left = iL + 'px';
		oShadow.style.top = iT + 'px';

		var oBmaxw = oRight_Img.offsetWidth - opp1.offsetWidth; 
		var oBmaxh = oRight_Img.offsetHeight - opp1.offsetHeight; 
		opp1.style.left = ( iL/iMaxL ) * oBmaxw + 'px';
		opp1.style.top = ( iT/iMaxT ) * oBmaxh + 'px';
	}

	oShang_span1.onmouseenter = function(){
		oShang_span1.className = "border_on";
		oShang_span2.className = "border_up";
		oSpan_1_img.style.display = "block";
		oSpan_2_img.style.display = "none";
		oXiaoliang_span1.innerHTML = "&quot150ml&quot";
	}
	oShang_span2.onmouseenter = function(){
		oShang_span2.className = "border_on";
		oShang_span1.className = "border_up";
		oSpan_2_img.style.display = "block";
		oSpan_1_img.style.display = "none";
		oXiaoliang_span1.innerHTML = "&quot200ml&quot";
	}

	oNum_span1.onclick = function(){
		oNum_span3.style.cursor = "pointer";
		var temp = parseInt(oNum_span2.innerHTML);
		var now = --temp;
		if(now <= 0)
			oNum_span1.style.cursor = "not-allowed";
		else{
			oNum_span1.style.cursor = "pointer";
			oNum_span2.innerHTML = now+"";
		}		
	}
	oNum_span3.onclick = function(){
		oNum_span1.style.cursor = "pointer";
		var temp = parseInt(oNum_span2.innerHTML);
		var now = ++temp;
		if(now > 5)
			oNum_span3.style.cursor = "not-allowed";
		else{
			oNum_span3.style.cursor = "pointer";
			oNum_span2.innerHTML = now+"";
		}
	}