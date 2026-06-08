const tttStat = [
		["N1", "N2", "N3"],
		["N4", "N5", "N6"],
		["N7", "N8", "N9"]
		];
let win = "A";

const winIDs = ["ID", "ID", "ID"];


function tictactoeFunc() {
	for (let i = 0; i<3; i++) {
		winIDs[i] = "ID";
		for (let j = 0; j<3; j++) {
			tttStat[i][j] = "N" + i;
		}
	}
	
	win = "A";
	
	document.getElementById("tictactoeid").innerHTML = 
		`<body>
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
					<button class="pic" onclick="tttOFunc('ttt00')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt01">
					<button class="pic" onclick="tttOFunc('ttt01')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt02">
					<button class="pic" onclick="tttOFunc('ttt02')">
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
					<button class="pic" onclick="tttOFunc('ttt10')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt11">
					<button class="pic" onclick="tttOFunc('ttt11')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt12">
					<button class="pic" onclick="tttOFunc('ttt12')">
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
					<button class="pic" onclick="tttOFunc('ttt20')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt21">
					<button class="pic" onclick="tttOFunc('ttt21')">
						<img src="/games/tictactoe/tttB.png" alt="?">
					</button>
				</span>
				<img src="/games/tictactoe/tttV.png" alt=":)">
				<span  id="ttt22">
					<button class="pic" onclick="tttOFunc('ttt22')">
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

function tttOFunc(tttID) {
	let xx = tttID[3];
	let yy = tttID[4];
	let x = parseInt(xx);
	let y = parseInt(yy);
	
	document.getElementById(tttID).innerHTML = `<img src="/games/tictactoe/tttO.png" alt="O">`;
	
	tttStat[x][y] = "O";
	tttWinFunc("O");
}


function tttWinFunc(Player) {
	
	for (let i = 0; i<3; i++) {
		if ((tttStat[i][0] === tttStat[i][1]) &&
			(tttStat[i][1] === tttStat[i][2])) {
			
			winIDs[0] = "ttt" + i + 0;
			winIDs[1] = "ttt" + i + 1;
			winIDs[2] = "ttt" + i + 2;
			win = tttStat[i][0];
			tttEndFunc(win);
			
		}	
		if ((tttStat[0][i] === tttStat[1][i]) &&
			(tttStat[1][i] === tttStat[2][i])) {
			
			winIDs[0] = "ttt" + 0 + i;
			winIDs[1] = "ttt" + 1 + i;
			winIDs[2] = "ttt" + 2 + i;
			win = tttStat[0][i];
			tttEndFunc(win);
			
		}
	}
	
	if ((tttStat[0][0] === tttStat[1][1]) &&
		(tttStat[1][1] === tttStat[2][2])) {
	
		winIDs[0] = "ttt" + 0 + 0;
		winIDs[1] = "ttt" + 1 + 1;
		winIDs[2] = "ttt" + 2 + 2;
		win = tttStat[0][0];
		tttEndFunc(win);
	
	}
	if ((tttStat[0][2] === tttStat[1][1]) &&
		(tttStat[1][1] === tttStat[2][0])) {
		
		winIDs[0] = "ttt" + 0 + 2;
		winIDs[1] = "ttt" + 1 + 1;
		winIDs[2] = "ttt" + 2 + 0;
		win = tttStat[0][2];
		tttEndFunc(win);
		
	}
}

function tttEndFunc(winner) {
	blankst = "ttt"
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
