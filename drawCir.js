;(function(){
	function Circle(selector,setting){
				var direction = {
					"right"  : 0,
					"left"   : Math.PI,
					"top"    : -Math.PI/2,
					"bottom" : Math.PI/2
				};
				var defauleSetting={
					maxX:88,
					lineWidth:10,
					fontSize:20,
					startDeration:"right",
					fontColor:"#00ff00",
					backgroundColor:"#0000ff",
				};
				if(setting){
					for(var p in defauleSetting){
						if(setting[p] !=undefined){
							defauleSetting[p]=setting[p];
						}
					}
				}
				var  box = document.querySelector(selector);
				console.log(box);
				var boxW = box.offsetWidth;
				var boxH = box.offsetHeight;
				var o = { x: boxW/2 , y : boxH/2 , r: boxW/2-defauleSetting.lineWidth} ;
				var startDiction = direction[defauleSetting.startDeration]||0;
				var can =document.createElement('canvas');
				can.setAttribute("width",boxW);
				can.setAttribute("height",boxH);
				function drawCir(){					
					var i=0;
					var ctx=can.getContext('2d');
					ctx.font=defauleSetting.fontSize;
					var timer=setInterval(function(){
						i++;						
						if(i>=defauleSetting.maxX){
							clearInterval(timer)
						}
						var y=2*Math.PI*i/100+startDiction;
						ctx.clearRect(0,0,boxW,boxH);
						ctx.textBaseline="middle";
						ctx.fillText(i+"%",o.x,o.y); 
						ctx.lineWidth=defauleSetting.lineWidth;
						ctx.beginPath();
						//debugger
						ctx.strokeStyle=defauleSetting.fontColor;
						ctx.arc(o.x,o.y,o.r,startDiction,y);
						ctx.stroke();
						ctx.beginPath();
						ctx.strokeStyle=defauleSetting.backgroundColor;
						ctx.arc(o.x,o.y,o.r,y,2*Math.PI+startDiction);
						ctx.stroke();
					},1000/25);				
				}
				drawCir();
				box.appendChild(can);
			}
	window.Circle = Circle;
})()
