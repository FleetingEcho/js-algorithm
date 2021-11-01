// 0_技巧总结
for (var a of s) h[a] = (h[a] || 0) + 1
for (var a in h) h[a] < k && n.push(a)
for (let i of s) {
	record[i] = (record[i] || 0) + 1
}

// return A= C? A++ : B===C && C++

h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1 : 1)
