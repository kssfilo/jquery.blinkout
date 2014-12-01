#jquery.blinkout

jQuery plugin to make element blinking and fadeout

##Download

* [jquery.blinkout.js](https://raw.github.com/kssfilo/jquery.blinkout/master/dist/jquery.blinkout.js)
* [jquery.blinkout.min.js](https://raw.github.com/kssfilo/jquery.blinkout/master/dist/jquery.blinkout.min.js)

##Usage

```html
<html>
	<head>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
		<script src='jquery.blinkout.js' ></script>

		<script>
			$(window).load(function(){
				$('.target').blinkout();
			});
		</script>
	</head>

	<body>
		<h1 class='target'>Blinkout</h1>
	</body>
</html>
```

##Optional Arguments

	$('.target').blinkout(5000,1000);

-> Blinking Time to 5000ms(Default:10000ms),Fade Time to 1000ms(Default:5000ms)


##History


