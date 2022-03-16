let args = process.argv.slice(2);

const beep = () => {
  return process.stdout.write('\x07');
};

const timer = nums => {
    for (const num of nums) {
        setTimeout(() => {
          beep();
        }, num * 1000);
    }
};
timer(args);