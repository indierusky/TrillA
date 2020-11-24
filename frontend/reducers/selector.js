export const selectBoard = ({ boards}, id) => {
    if (boards[id]) {
        const board = boards[id];
        return bench;
    }
    return {};
};
export const asArray = ({ boards }) => (
    Object.keys(boards).map(key => boards[key])
);


export const userBoards = ({boards}, id) => {

        let currentBoards = [];

    Object.values(boards).map( board => {
        if(board.user_id === id){
            currentBoards.push(board);


        }

    })
    return currentBoards;
}
