const tttStat = [
		["N1", "N2", "N3"],
		["N4", "N5", "N6"],
		["N7", "N8", "N9"]
		];
let gameover = 0

let playerchar = 0 

const winIDs = ["ID", "ID", "ID"];


function tictactoePick() {
	document.getElementById("tictactoeid").innerHTML = 
		`<body>
			<style>
				button.xx {
					background-image:url(/games/tictactoe/tttX.png);
					background-size:cover;
				}
				button:hover.xx {
					background-image:url(/games/tictactoe/tttXw.gif);
				}
				
				button.oo {
					background-image:url(/games/tictactoe/tttO.png);
					background-size:cover;
				}
				button:hover.oo {
					background-image:url(/games/tictactoe/tttOw.gif);
				}
			</style>
			<p style="font-size:100px; line-height:20px; text-align:center;">
				<span style="color:#AA0000;">TIC </span>
				<span style="color:#0000AA;">TAC </span>
				<span style="color:#000000;">TOE</span>
			</p>
			<p style="font-size:40px; text-align:center;">
				Pick a character:<br>
			
				<button class="xx" onclick="playerchar = 1; tictactoeFunc();">
					<img src="/games/tictactoe/tttB.png" alt="X">
				</button>
				<button class="oo" onclick="playerchar = 0; tictactoeFunc();">
					<img src="/games/tictactoe/tttB.png" alt="O">
				</button>
			</p>
		</body>`
}

function tictactoeFunc() {
	gameover = 0
	let k = 0
	for (let i = 0; i<3; i++) {
		winIDs[i] = "ID";
		for (let j = 0; j<3; j++) {
			k++
			tttStat[i][j] = "N" + k;
		}
	}
	
	document.getElementById("tictactoeid").innerHTML = 
		`<body>
			<p style="font-size:100px; line-height:20px; text-align:center;">
				<span style="color:#AA0000;">TIC </span>
				<span style="color:#0000AA;">TAC </span>
				<span style="color:#000000;">TOE</span>
			</p>
			<div style="display:flex; justify-content:center;">
				<img src="/games/tictactoe/tttBs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttVs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttVs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttBs.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">	
				<img src="/games/tictactoe/tttBv.png" alt=":)">
				<span  id="ttt00">
					<button class="pic" onclick="tttPlyrFunc('ttt00')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt01">
					<button class="pic" onclick="tttPlyrFunc('ttt01')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt02">
					<button class="pic" onclick="tttPlyrFunc('ttt02')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttBv.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">	
				<img src="/games/tictactoe/tttHs.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttC.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttC.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttHs.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">	
				<img src="/games/tictactoe/tttBv.png" alt=":)">
				<span  id="ttt10">
					<button class="pic" onclick="tttPlyrFunc('ttt10')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt11">
					<button class="pic" onclick="tttPlyrFunc('ttt11')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt12">
					<button class="pic" onclick="tttPlyrFunc('ttt12')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttBv.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">	
				<img src="/games/tictactoe/tttHs.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttC.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttC.png" alt=":)">
				<img src="/games/tictactoe/tttH.png" alt=":)">
				<img src="/games/tictactoe/tttHs.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">	
				<img src="/games/tictactoe/tttBv.png" alt=":)">
				<span  id="ttt20">
					<button class="pic" onclick="tttPlyrFunc('ttt20')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt21">
					<button class="pic" onclick="tttPlyrFunc('ttt21')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt22">
					<button class="pic" onclick="tttPlyrFunc('ttt22')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttBv.png" alt=":)">
			</div>
			<div style="display:flex; justify-content:center;">
				<img src="/games/tictactoe/tttBs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttVs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttVs.png" alt=":)">
				<img src="/games/tictactoe/tttBh.png" alt=":)">
				<img src="/games/tictactoe/tttBs.png" alt=":)">
			</div>
		</body>`
								
	document.getElementById("tictactoebutt").innerHTML = "Reset Tic Tac Toe";
}

function tttPlyrFunc(tttID) {
	let xx = tttID[3];
	let yy = tttID[4];
	let x = parseInt(xx);
	let y = parseInt(yy);
	
	
	if (playerchar === 0) {
		document.getElementById(tttID).innerHTML = `<img src="/games/tictactoe/tttO.png" alt="O">`;
		
		tttStat[x][y] = "O";
		tttWinFunc("O");
	} else if (playerchar === 1) {
		document.getElementById(tttID).innerHTML = `<img src="/games/tictactoe/tttX.png" alt="X">`;
		
		tttStat[x][y] = "X";
		tttWinFunc("X");
	}
	
	if (gameover === 0) { 
		tttCompFunc();
	}
}

function tttCompFunc() {
	let x = 0;
	let y = 0;
	let xID = "ttt";
	
	if (playerchar === 0) {
		for (let i = 0; i<3; i++) {
			for (let j = 0; j<3; j++) {
				if (tttStat[i][j] != "O" && tttStat[i][j] != "X") {
					x = i;
					y = j;
					xID = "ttt" + i + j;
					document.getElementById(xID).innerHTML = `<img src="/games/tictactoe/tttX.png" alt="X">`;
					i = 3;
					break;
				}
			}
		}
		tttStat[x][y] = "X";
		tttWinFunc("X");
	} else if (playerchar === 1) {
		for (let i = 0; i<3; i++) {
			for (let j = 0; j<3; j++) {
				if (tttStat[i][j] != "O" && tttStat[i][j] != "X") {
					x = i;
					y = j;
					xID = "ttt" + i + j;
					document.getElementById(xID).innerHTML = `<img src="/games/tictactoe/tttO.png" alt="O">`;
					i = 3;
					break;
				}
			}
		}
		tttStat[x][y] = "O";
		tttWinFunc("O");
	}
}


function tttWinFunc(Player) {
	
	for (let i = 0; i<3; i++) {
		if ((tttStat[i][0] === tttStat[i][1]) &&
			(tttStat[i][1] === tttStat[i][2])) {
			
			winIDs[0] = "ttt" + i + 0;
			winIDs[1] = "ttt" + i + 1;
			winIDs[2] = "ttt" + i + 2;
			tttEndFunc(Player);
			
		}	
		if ((tttStat[0][i] === tttStat[1][i]) &&
			(tttStat[1][i] === tttStat[2][i])) {
			
			winIDs[0] = "ttt" + 0 + i;
			winIDs[1] = "ttt" + 1 + i;
			winIDs[2] = "ttt" + 2 + i;
			tttEndFunc(Player);
			
		}
	}
	
	if ((tttStat[0][0] === tttStat[1][1]) &&
		(tttStat[1][1] === tttStat[2][2])) {
	
		winIDs[0] = "ttt" + 0 + 0;
		winIDs[1] = "ttt" + 1 + 1;
		winIDs[2] = "ttt" + 2 + 2;
		tttEndFunc(Player);
	
	}
	if ((tttStat[0][2] === tttStat[1][1]) &&
		(tttStat[1][1] === tttStat[2][0])) {
		
		winIDs[0] = "ttt" + 0 + 2;
		winIDs[1] = "ttt" + 1 + 1;
		winIDs[2] = "ttt" + 2 + 0;
		tttEndFunc(Player);
		
	}
}

function tttEndFunc(winner) {
	gameover = 1;
	let blankst = "ttt"
	for (let i = 0; i<3; i++) {
		for (let j = 0; j<3; j++) {
			if (tttStat[i][j] != "O" && tttStat[i][j] != "X") {
				blankst = "ttt" + i + j;
				document.getElementById(blankst).innerHTML = `<img src="/games/tictactoe/tttB.png" alt="?">`;
			}
		}
	}
	if (winner === "O") {
		document.getElementById(winIDs[0]).innerHTML = `<img src="/games/tictactoe/tttOw.gif" alt="O!">`;
		document.getElementById(winIDs[1]).innerHTML = `<img src="/games/tictactoe/tttOw.gif" alt="O!">`;
		document.getElementById(winIDs[2]).innerHTML = `<img src="/games/tictactoe/tttOw.gif" alt="O!">`;
	
	} else if (winner === "X") {
		document.getElementById(winIDs[0]).innerHTML = `<img src="/games/tictactoe/tttXw.gif" alt="X!">`;
		document.getElementById(winIDs[1]).innerHTML = `<img src="/games/tictactoe/tttXw.gif" alt="X!">`;
		document.getElementById(winIDs[2]).innerHTML = `<img src="/games/tictactoe/tttXw.gif" alt="X!">`;
	}
	
}
