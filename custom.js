$(document).ready(function() {
			var lvlup = 100;
			var clicko = 0;
			var socket = io('http://37.187.9.21:1337');
			$("#test").mousedown(function() {
				$(this).css('background-position', 'bottom');
				socket.emit('message', 'y');
			});
			$("#test").mouseup(function() {
				$(this).css('background-position', 'top');
			});
			socket.on('updc', function (data) {
				clicko = parseInt(data);
				$("#txtclick").html("&nbsp;- STOP CLICKING, IT'S OVER, clicked " + clicko + " times -&nbsp;");
				if (clicko % lvlup == 0)
				{
					$("#teub").append("<span class='cpy'>" + $("#txtclick").text() + "</span>");
					$(".cpy").animate({
									opacity: 0,
									top: "-=200" }, 1000, "linear", function() {
										$(this).remove();
									});
				}
			});
			socket.on('spm', function() {
				$("#chsttxt").text("!!! DON'T SPAM ME BRO !!!");
			});
			socket.on('scrt', function(data) {
				$("#chst").css("cursor", "help");
				$("#chst").css("backgroundImage", "url('chestopen.png')");
				$("#chsttxt").text("1,000,000 HOLY SHIT");
				$("#chst").attr("href", data);
			});
		});