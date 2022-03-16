let args = process.argv;
args = args.slice(2);

const timer = nums => {
    for (let num of nums) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, num * 1000);
    }
};
timer(args);


// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.