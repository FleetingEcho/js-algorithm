function escapeGhosts(ghosts: number[][], target: number[]): boolean {
	const start = [0, 0]
	const minD = getDistance(start, target)
	for (const g of ghosts) {
		if (getDistance(g, target) <= minD) {
			return false
		}
	}
	return true
}

const getDistance = (point1: number[], point2: number[]): number => Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1])
