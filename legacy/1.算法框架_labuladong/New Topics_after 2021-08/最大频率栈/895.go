package main

func main() {

}

type FreqStack struct {
	maxFreq    int
	valToFreq  map[int]int
	freqToVals map[int][]int
}

func Constructor() FreqStack {
	return FreqStack{0, make(map[int]int), make(map[int][]int)}
}

func (this *FreqStack) Push(val int) {
	freq := 1
	if val, ok := this.valToFreq[val]; ok {
		freq += val
	}
	this.valToFreq[val] = freq
	if _, ok := this.freqToVals[freq]; !ok {
		this.freqToVals[freq] = []int{}
	}
	this.freqToVals[freq] = append(this.freqToVals[freq], val)
	this.maxFreq = myMax(this.maxFreq, freq)
}

func (this *FreqStack) Pop() int {
	arr := this.freqToVals[this.maxFreq]
	v := arr[len(arr)-1] // pop
	arr = arr[:len(arr)-1]
	this.freqToVals[this.maxFreq] = arr // update pop-ed arrray
	freq := this.valToFreq[v] - 1
	this.valToFreq[v] = freq
	if len(arr) == 0 {
		this.maxFreq--
	}
	return v
}

func myMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}
