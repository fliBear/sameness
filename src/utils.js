const finishEdit = (player) => {
    player.isEditing = false;
    return player;
};

const startEdit = (player) => {
    player.isEditing = true;
    return player;
};

module.exports = { finishEdit, startEdit };
