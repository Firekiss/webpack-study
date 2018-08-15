var num1, num2;

process.stdout.write('请输入num1的值:');

process.stdin.on('data', function(chunk) {
    if (!num1) {
        num1 = Number(chunk);
    }
})