let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let clickPower = localStorage.getItem("clickPower") ? parseInt(localStorage.getItem("clickPower")) : 1;
let upgradeCost = localStorage.getItem("upgradeCost") ? parseInt(localStorage.getItem("upgradeCost")) : 100;
let upgradeCount = localStorage.getItem("upgradeCount") ? parseInt(localStorage.getItem("upgradeCount")) : 0;
let permInc = localStorage.getItem("permInc") ? parseInt(localStorage.getItem("permInc")) : 0;
let permCost = localStorage.getItem("permCost") ? parseInt(localStorage.getItem("permCost")) : 500;
let upgradeIncCount = localStorage.getItem("upgradeIncCount") ? parseInt(localStorage.getItem("upgradeIncCount")) : 0;

const button = document.getElementById('myButton');
const scoreDisplay = document.getElementById('score');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const currentUpgradeDisplay = document.getElementById('currupgr');
const resetButton = document.getElementById('resetButton');
const permIncButton = document.getElementById('permanentIncomeButton')
const permCostDisplay = document.getElementById('permCost');

scoreDisplay.textContent = score;
upgradeCostDisplay.textContent = upgradeCost;
currentUpgradeDisplay.textContent = upgradeCount;

resetButton.addEventListener('click', () => {
    if (confirm("are you sure?")) {
        localStorage.clear();
        score = 0;
        clickPower = 1000;
        upgradeCost = 100;
        upgradeCount = 0;
        permInc = 0;
        permCost = 500;
        upgradeIncCount = 0;

        scoreDisplay.textContent = score;
        upgradeCostDisplay.textContent = upgradeCost;
        currentUpgradeDisplay.textContent = upgradeCount;
        permCostDisplay.textContent = permCost;
    }
});

button.addEventListener('click', () => {
    score += clickPower;
    scoreDisplay.textContent = score;
    localStorage.setItem("score", score);
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower++;
        upgradeCount++;
        upgradeCost = Math.floor(upgradeCost * 2);

        scoreDisplay.textContent = score;
        upgradeCostDisplay.textContent = upgradeCost;
        currentUpgradeDisplay.textContent = upgradeCount += 1;

        localStorage.setItem("score", score);
        localStorage.setItem("clickPower", clickPower);
        localStorage.setItem("upgradeCost", upgradeCost);
        localStorage.setItem("upgradeCount", upgradeCount);
    } else {
        alert("not enough!");
    }
});

permIncButton.addEventListener('click', () => {
     if (score >= permCost) {
         score -= permCost;
         permInc+= 5;
         upgradeIncCount+=5;
         permCost = Math.floor(permCost * 5);

         permCostDisplay.textContent = permCost;

         localStorage.setItem('score', score);
         localStorage.setItem("permInc", permInc);
         localStorage.setItem("permCost", permCost);
         localStorage.setItem("upgradeIncCount", upgradeIncCount)
    }
});

setInterval(() => {
    score += permInc;
    scoreDisplay.textContent = score;
    localStorage.setItem("score", score);
}, 1000);