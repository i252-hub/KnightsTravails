function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    const isValidMove = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const bfs = (start, end) => {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (const [dx, dy] of moves) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValidMove(newX, newY) && !visited.has([newX, newY].toString())) {
                    visited.add([newX, newY].toString());
                    queue.push([...path, [newX, newY]]);
                }
            }
        }
        return null; 
    };

    const path = bfs(start, end);
    
    if (path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(pos => console.log(pos));
    } else {
        console.log('No path found');
    }

    return path;
}


knightMoves([0, 0], [3, 3]);
