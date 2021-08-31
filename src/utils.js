const finishEdit = (player, newName, lastRoundScore) => {
    player.isEditing = false;
    if (newName !== "") {
        player.name = newName;
    }
    if (lastRoundScore !== "") {
        player.score = player.score - player.lastRoundScore;
        player.score = player.score + Number(lastRoundScore);
        player.lastRoundScore = Number(lastRoundScore);
    }
    return player;
};

const startEdit = (player) => {
    player.isEditing = true;
    return player;
};

const playerNextRound = (player) => {
    player.inputtingNextRound = true;
    return player;
};

const playerCalculateScore = (player, score) => {
    player.score = player.score + Number(score);
    player.lastRoundScore = Number(score);
    player.inputtingNextRound = false;
    return player;
};
const checkIfInputtingNextRound = (players) => {
    let finishedInputtingRound = true;
    players.forEach((player) => {
        if (player.inputtingNextRound) {
            finishedInputtingRound = false;
        }
    });
    return finishedInputtingRound;
};

const addPlayer = (players, name) => {
    players.push({
        name: name,
        score: 0,
        lastRoundScore: 0,
        isEditing: false,
        inputtingNextRound: false,
    });
    return players;
};

module.exports = {
    finishEdit,
    startEdit,
    playerNextRound,
    playerCalculateScore,
    checkIfInputtingNextRound,
    addPlayer,
};
