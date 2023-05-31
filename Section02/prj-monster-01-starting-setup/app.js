
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
        isFirst() {
            return this.turn === 1
        }
    },
    methods: {
        attackMonster() {
            this.turn ++;
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
            const attackValue = getRandomValue(10, 30);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.turn ++;
            const healValue = getRandomValue(5, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }
    }
});

app.mount("#game");
