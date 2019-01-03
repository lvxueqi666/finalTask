	window.onload = function(){
			var cover = document.getElementById('banner');
			window.onscroll = function(){
				var st = document.documentElement.scrollTop || document.body.scrollTop;
				if(st > 170){
					cover.style.position = 'fixed';
				}else{
					cover.style.position = 'static';
				}
			}
		}
		var oRimg1 = document.getElementById('Right_img1');
		var oRimg2 = document.getElementById('Right_img2');
		var oRimg3 = document.getElementById('Right_img3');
		var oRimg4 = document.getElementById('Right_img4');
		var oBox = document.getElementById('gonggao');
		var oUl1 = document.getElementById('ul1');
		var oUl2 = document.getElementById('ul2');
		var oPrice = document.getElementById('price');
		var oNowPrice = document.getElementById('now_price');
		var oCen = document.getElementById('pic');
		var oBtn = document.getElementById('btn');
		var oRight = document.getElementById('right');
		var oLeft = document.getElementById('left');
		oRimg1.onmouseenter = function(){
			oRimg1.style.right = '-10px';
		}
		oRimg1.onmouseleave = function(){
			oRimg1.style.right = '-85px';
		}
		oRimg2.onmouseenter = function(){
			oRimg2.style.right = '0';
		}
		oRimg2.onmouseleave = function(){
			oRimg2.style.right = '-57px';
		}
		oRimg3.onmouseenter = function(){
			oRimg3.style.right = '0';
		}
		oRimg3.onmouseleave = function(){
			oRimg3.style.right = '-57px';
		}
		oRimg4.onmouseenter = function(){
			oRimg4.style.right = '0';
		}
		oRimg4.onmouseleave = function(){
			oRimg4.style.right = '-80px';
		}
		oPrice.onchange = function(){
			oNowPrice.innerHTML = "¥" + this.value;
		}
		oCen.onmouseenter = function(){
			oRight.style.opacity = '0.5';
			oLeft.style.opacity = '0.5';
		}
		oCen.onmouseleave = function(){
			oRight.style.opacity = '0';
			oLeft.style.opacity = '0';
		}
		roll(50);
		(function(){
				var tabLi = document.getElementById('tab').getElementsByTagName('li');
				var oUl = document.getElementById('pic').getElementsByTagName('ul')[0];
				var oRight = document.getElementById('right');
				var oLeft = document.getElementById('left');
				var oCenter = document.getElementById('nav_center');
				var index = 0;
				var timer;
				var nowTime = 0;

				for ( var i=0;i<tabLi.length;i++ )
				{
					tabLi[i].temp = i;
					tabLi[i].onclick = function(){
						tabLi[index].className = '';
						index = this.temp;
						change();
					}
				}

				oRight.onclick = function(){
					if ( new Date() - nowTime > 300 )
					{
						nowTime = new Date();
						tabLi[index].className = '';
						index ++;
						index %= (tabLi.length+1);
						change();
					}
				}

				oLeft.onclick = function(){
					if ( new Date() - nowTime > 300 )
					{
						nowTime = new Date();
						tabLi[index].className = '';
						index = index<0?tabLi.length-1:index-1;
						change();
					}
				}
				
				auto();
				
				oCenter.onmouseenter = function(){
					clearInterval( timer );
				}

				oCenter.onmouseleave = function(){
					auto();
				}

				function auto(){
					timer = setInterval(function(){
						tabLi[index].className = '';
						index ++;
						index %= tabLi.length+1;
						change();
					},1500)
				}

				function change(){
					var now = index;
					now %= tabLi.length;
					if ( now < 0 )now = tabLi.length - 1;
					tabLi[now].className = 'on';
					move( oUl , {marginLeft : -805.8*(index+1) + 'px'} , 300 , function(){
						if ( index == tabLi.length )
						{
							this.style.marginLeft = '-805.8px';
							index = now;
						}
						else if (index == -1)
						{
							this.style.marginLeft = -805.8*tabLi.length + 'px';
							index = now;
						}
					})
				}
			})();
			function roll(t) {
				oUl2.innerHTML = oUl1.innerHTML;
				oBox.scrollTop = 0;
				var timer = setInterval(rollStart, t);
				oBox.onmouseover = function () {
					clearInterval( timer );
				}
				oBox.onmouseout = function () {
					timer = setInterval(rollStart, t);
				}
			}

			function rollStart() {
				if (oBox.scrollTop >= oUl1.scrollHeight) {
					oBox.scrollTop = 0;
				} 
				else {
					oBox.scrollTop++;
				}
			}
			