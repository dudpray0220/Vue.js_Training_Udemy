
function getRandomValue (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            turn: 1, // 특수공격은 3턴 마다 1번,
            winner: null, // falsy 취급,
            battleLog: []
        }
    },
    watch: {
      playerHealth(value) {
          if (value <= 0 && this.monsterHealth <= 0) {
              // Draw
              this.winner = 'draw';
          } else if (value <= 0) {
              // Player Lose
              this.winner = 'monster';
          }
      },
      monsterHealth(value) {
          if (value <= 0 && this.playerHealth <= 0) {
              // Draw
              this.winner = 'draw';
          } else if (value <= 0) {
              // Monster Lose
              this.winner = 'player';
          }
      }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: `${this.monsterHealth}%`};
        },
        playerBarStyles() {
        if (this.playerHealth < 0) {
            return {width: '0%'}
        }
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
        startGame() {
            // reset data
            this.playerHealth= 100;
            this.monsterHealth= 100;
            this.turn= 1; // 특수공격은 3턴 마다 1번,
            this.winner= null; // falsy 취급
            this.battleLog = [];
        },
        attackMonster() {
            this.turn ++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            // this.battleLog.push(`플레이어의 공격이 ${attackValue}데미지로 몬스터에게 적중했습니다.`)
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            // this.battleLog.push(`몬스터의 공격이 ${attackValue}데미지로 플레이어에게 적중했습니다.`)
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.turn ++;
            const attackValue = getRandomValue(10, 30);
            this.monsterHealth -= attackValue;
            // this.battleLog.push(`플레이어 특수 공격 발동! ${attackValue}데미지로 몬스터에게 적중했습니다.`)
            this.addLogMessage('player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.turn ++;
            const healValue = getRandomValue(5, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
                // this.battleLog.push(`플레이어 자힐! ${healValue}만큼 치유합니다! 풀피가 됐습니다.`)
            } else {
                this.playerHealth += healValue;
                // this.battleLog.push(`플레이어 자힐! ${healValue}만큼 치유합니다! 체력을 ${this.playerHealth}로 회복합니다.`)
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
            this.battleLog.unshift(`플레이어 몬스터에게 굴복합니다...`)
        },
        // log 저장 함수
        addLogMessage(who, what, value) {
            this.battleLog.unshift({
                actionBy:  who,
                actionType: what,
                actionValue: value
            })
        }
    }
});

app.mount("#game");
