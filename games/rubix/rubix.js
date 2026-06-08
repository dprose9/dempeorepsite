
function rubixInit() {
	document.getElementById("rubixID").innerHTML =
		`<body justify-content:center;>
			<style>
				.box {
					width: 100px;
					height: 100px;
					display: inline-block;
					border: 8px solid #000000;
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