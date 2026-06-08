function tictactoeFunc() {
	document.getElementById("tictactoeid").innerHTML = `<body>
									<p style="font-size:40px; text-align:center;">
										&nbsp&nbsp&nbsp&nbsp╷&nbsp&nbsp&nbsp╷&nbsp&nbsp&nbsp&nbsp<br>
										&nbsp&nbsp&nbsp&nbsp│&nbsp&nbsp&nbsp│&nbsp&nbsp&nbsp&nbsp<br>
										╶───┼───┼───╴<br>
										&nbsp&nbsp&nbsp&nbsp│<img src="/games/tictactoe/tttX.png" alt="X" width="40px">│&nbsp&nbsp&nbsp&nbsp<br>
										╶───┼───┼───╴<br>
										&nbsp&nbsp&nbsp&nbsp│&nbsp&nbsp&nbsp│&nbsp&nbsp&nbsp&nbsp<br>
										&nbsp&nbsp&nbsp&nbsp╵&nbsp&nbsp&nbsp╵&nbsp&nbsp&nbsp&nbsp<br>
										
									</p>
								</body>`
								
	document.getElementById("tictactoebutt").innerHTML = "Reset Tic Tac Toe";
}