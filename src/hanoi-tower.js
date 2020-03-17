module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const SECONDS_PER_HOUR = 3600;
    var turns = 2 ** disksNumber - 1;
    
    return {
        turns: turns,
        seconds: turns / (turnsSpeed / SECONDS_PER_HOUR)
    }
}