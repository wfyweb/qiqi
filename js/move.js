		var aLi = List.getElementsByTagName('li');
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var str = zero(hours)+'d'+zero(minutes)+'d'+zero(seconds);
		
		for (var i=0;i<aLi.length;i++ )
		{	
			aLi[i].getElementsByTagName('img')[0].index = str.charAt(i);
			aLi[i].getElementsByTagName('img')[0].src = 'images/'+str.charAt(i)+'.png';			
			play( aLi[i],i );
		}
		function play( obj,index ){
			var num = 0;
			setInterval(function(){
				var date = new Date();
				var hours = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();
				var str2 = zero(hours)+'d'+zero(minutes)+'d'+zero(seconds);
				var aImg = obj.getElementsByTagName('img');

				//��֮ǰ��ʱ�����֣���Ϊ�Զ������Լ���ͼƬ�ϣ����������ڵ�ʱ����бȽ�
				if ( str2.charAt(index) != aImg[num].index ) //֮ǰ��ʱ������ڵ�ʱ����бȽ�
				{
					move( aImg[num],{top:-61} );
					if ( num==1 )
					{
						aImg[num-1].src='images/'+str2.charAt(index)+'.png';
						aImg[num-1].index = str2.charAt(index);
						move( aImg[num-1],{top:0},500,'linear',function(){
							aImg[num].style.top = '61px';
							num--;
						} )
					}else{
						aImg[num+1].src='images/'+str2.charAt(index)+'.png';
						aImg[num+1].index = str2.charAt(index);
						move( aImg[num+1],{top:0},500,'linear',function(){
							aImg[num].style.top = '61px';
							num++;
						} );
					}
				}
			},1000);			
		};
		function zero( num ){
			return num<10?'0'+num:num;
		};