let base = 1337;
function mypow(a,k) {
    if (k == 0) return 1;
    a %= base;

    if (k % 2 == 1) {
        // k 是奇数
        return (a * mypow(a, k - 1)) % base;
    } else {
        // k 是偶数
        let sub = mypow(a, k / 2);
        return (sub * sub) % base;
    }
}

console.log(mypow(2,10));