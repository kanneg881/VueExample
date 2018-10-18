<template>
    <div id="app">
        <div class="board">
            <div class="grid"
                 @click="setGrid(index)"
                 v-for="(grid, index) in grids">
                {{getSymbol(grid)}}
            </div>
        </div>
        <div class="information">
            <span>Player: {{getSymbol(player)}}</span>
            <br>
            <span>Winner: {{getSymbol(winner)}}</span>
            <br>
            <button @click="reset">Reset</button>
        </div>
    </div>
</template>

<script>
    const lines = [
        [0, 1, 2,], [3, 4, 5,], [6, 7, 8,],
        [0, 3, 6,], [1, 4, 7,], [2, 5, 8,],
        [0, 4, 8,], [2, 4, 6,],
    ];
    export default {
        computed: {
            winner() {
                return lines.reduce((winner, [grid1, grid2, grid3]) => {
                    if (winner !== 0) {
                        return winner;
                    }
                    const countLine = this.grids[grid1] + this.grids[grid2] + this.grids[grid3];

                    if (countLine === 3) {
                        return 1;
                    }

                    if (countLine === -3) {
                        return -1;
                    }

                    return 0;
                }, 0);
            },
        },
        data() {
            return {
                grids: [
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                ],
                player: 1,
            };
        },
        methods: {
            getSymbol(number) {
                return number === 0 ? '' : number === 1 ? 'O' : 'X';
            },
            reset() {
                this.grids = [
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                ];
                this.player = 1;
            },
            setGrid(index) {
                if (this.grids[index] !== 0) {
                    return;
                }
                if (this.winner !== 0) {
                    return;
                }
                this.$set(this.grids, index, this.player);
                this.player *= -1;
            },
        },
        name: 'app',
    }
</script>

<style>
    .board {
        align-content: flex-start;
        display: flex;
        flex-flow: row wrap;
        height: 400px;
        width: 400px;
    }

    .grid {
        border: 1px solid gray;
        box-sizing: border-box;
        font-size: 60px;
        height: 33%;
        line-height: 130px;
        text-align: center;
        width: 33%;
    }

    .information {
        font-size: 40px;
    }
</style>
