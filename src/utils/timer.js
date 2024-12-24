class Timer {
    constructor() {
        this.startTimes = {};
        this.elapsedTimes = {};
    }

    start(label) {
        this.startTimes[label] = performance.now();
    }

    stop(label) {
        if (!this.startTimes[label]) {
            console.warn(`Timer with label "${label}" has not been started.`);
            return;
        }
        const elapsed = performance.now() - this.startTimes[label];
        this.elapsedTimes[label] = elapsed;
        delete this.startTimes[label];
        return this.formatTime(elapsed);
    }

    stopAll() {
        Object.keys(this.startTimes).forEach((label) => {
            const elapsed = this.stop(label);
            console.log(`Timer "${label}" stopped. Elapsed time: ${elapsed}`);
        });
    }

    getElapsed(label) {
        const elapsed = this.elapsedTimes[label] || 0;
        return this.formatTime(elapsed);
    }

    reset(label) {
        delete this.startTimes[label];
        delete this.elapsedTimes[label];
    }

    resetAll() {
        this.startTimes = {};
        this.elapsedTimes = {};
    }

    formatTime(milliseconds) {
        if (milliseconds > 2000) {
            return `${(milliseconds / 1000).toFixed(2)} seconds`;
        }
        return `${milliseconds.toFixed(2)} ms`;
    }
}

export default Timer;
