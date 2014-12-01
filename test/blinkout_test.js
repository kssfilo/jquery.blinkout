(function($) {
  module('jQuery.blinkout');

  asyncTest('default', function(assert) {
	var el="<h1 id='blinkout'>A</h1>";
	$('#target').append(el);
	$('#blinkout').blinkout();
    expect(1);
	setTimeout(function(){
		var op=$('#blinkout').css('opacity');
		assert.equal(op,0);
		$('#target').html('');
		start();
	},17000);
  });

  asyncTest('blinkspec', function(assert) {
	var el="<h1 id='blinkout'>A</h1>";
	$('#target').append(el);
	$('#blinkout').blinkout(1000);
    expect(1);
	setTimeout(function(){
		var op=$('#blinkout').css('opacity');
		assert.equal(op,0);
		$('#target').html('');
		start();
	},7000);
  });

  asyncTest('fadespec', function(assert) {
	var el="<h1 id='blinkout'>A</h1>";
	$('#target').append(el);
	$('#blinkout').blinkout(1000,1000);
    expect(1);
	setTimeout(function(){
		var op=$('#blinkout').css('opacity');
		assert.equal(op,0);
		$('#target').html('');
		start();
	},3000);
  });

}(jQuery));
