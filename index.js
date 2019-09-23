// Stopwatch
function StopWatch() {
    var running = false;
    var startTime, endTime, duration = 0;

    this.start = () => {
        if (running) {
            throw new Error('Already Started')
        }
        running = true;
        console.log('Started')
        startTime = new Date();
    };

    this.stop = () => {
        if (!running) {
            throw new Error('Already stopped')
        }
        running = false;
        endTime = new Date();
        let diff = (endTime.getTime() - startTime.getTime()) / 1000;
        console.log(startTime.getTime())
        duration += diff;
        console.log('Total Time', duration);

    };

    this.reset = () => {
        running = false;
        startTime = 0;
        endTime = 0;
        duration = 0
    };

    Object.defineProperty(this, 'duration', {
        get: () => {
            return duration;
        }
    });
}

var sw = new StopWatch();