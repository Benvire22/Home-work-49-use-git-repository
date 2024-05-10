const whiteCell: string = '  ';
const blackCell: string = '[]';

const getBoard = (number: number): string => {
    let board: string = '';

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if ((i + j) % 2 === 0) {
                board += whiteCell;
            } else {
                board += blackCell;
            }
        }
        board += '\n';
    }
    return board;
};

console.log(getBoard(8));
