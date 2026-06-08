
function rubixInit() {
	document.getElementById("rubixID").innerHTML =
		`<body style="text-align:center;">
			<style>
				.box {
					width: 100px;
					height: 100px;
					display: inline-block;
					border: 8px solid #000000;
					vertical-align: top;
				}
				
				button.ll {
					background-image:url(/games/tictactoe/tttX.png);
					background-size:cover;
				}
				button.dd {
					background-image:url(/games/tictactoe/tttXw.gif);
				}
				
				button.rr {
					background-image:url(/games/tictactoe/tttO.png);
					background-size:cover;
				}
				button.uu {
					background-image:url(/games/tictactoe/tttOw.gif);
				}
				button.cc {
					background-image:url(/games/tictactoe/tttOw.gif);
				}
				
				
			</style>
			
			<div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><br>
			<div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><br>
			<div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><!--
			--><div class="box" style="background-color:#AA0000;"></div><br>
		</body>`
	
	document.getElementById("rubixbutt").innerHTML = "Reset Rubix Cube";
}