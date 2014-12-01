(function($){
	$.fn.blinkout=function(blinkTime,fadeTime){
		
		this.each(function(){
			var self=this;

			self._stateMachine=function(){
				var self=this;
				switch(self._blinkoutState){
					case 0:
						self._blinkoutState=1;
						self._blinkoutStarted=new Date().getTime();
						return(self._stateMachine());
					case 1:
						$(self).css({opacity:1});
						var pass=new Date().getTime()-self._blinkoutStarted;
						if(pass>self._blinkTime){self._blinkoutState=3;}
						else{self._blinkoutState=2;}
						self._blinkoutDuty=Math.max(1-(pass/(self._blinkTime*0.6)),0);
						setTimeout(function(){self._stateMachine.apply(self);},self._blinkoutDuty*1000+100);
						break;
					case 2:
						$(self).css({opacity:0.5});
						self._blinkoutState=1;
						setTimeout(function(){self._stateMachine.apply(self);},100);
						break;
					case 3:
						$(self).fadeTo(self._fadeTime,self._blinkoutOpacity);
						break;
				}
			};

			self._blinkoutState=0;
			self._blinkTime=blinkTime||10000;
			self._fadeTime=fadeTime||5000;
			self._blinkoutOpacity=0;

			self._stateMachine();
		});
	};
})(jQuery);
