<template>
    <h2 :class="{running: visibleNumber !== number}">{{visibleNumber}}</h2>
</template>

<script>
    export default {
        data() {
            return {
                visibleNumber: this.number,
            };
        },
        methods: {
            run() {
                const diff = Math.floor((this.number - this.visibleNumber) * 0.02);

                if (diff === 0) {
                    this.visibleNumber = this.number;
                    return;
                }
                this.visibleNumber += diff;
                window.requestAnimationFrame(this.run);

            },
        },
        props: ['number'],
        watch: {
            number() {
                this.run();
            },
        },
    };
</script>

<style scoped>
    h2 {
        display: inline-block;
        transition: .2s;
    }

    h2.running {
        color: red;
        transform: scale(1.5);
    }
</style>
