package main

func main() {}

func escapeGhosts(ghosts [][]int, target []int) bool {
	myPoint := []int{0, 0}
	d := getDistance(myPoint, target)
	for _, ghost := range ghosts {
		if getDistance(ghost, target) <= d {
			return false
		}
	}
	return true
}

func getDistance(myPoint, point2 []int) int {
	return abs(myPoint[0]-point2[0]) + abs(myPoint[1]-point2[1])
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
