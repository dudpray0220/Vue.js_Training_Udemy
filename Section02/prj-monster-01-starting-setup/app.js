
function getRandomValue (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            turn: 1, // 특수공격은 3턴 마다 1번
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: `${this.monsterHealth}%`};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        specialAttackReady() {
            return this.turn % 3 !== 0
        },
    },
    methods: {
        attackMonster() {
            this.turn ++;
            console.log(this.turn);
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.turn ++;
            console.log(this.turn);
            const attackValue = getRandomValue(10, 30);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount("#game");
