// try {
// 	connectToDatabase().then(async () => {
// 		let buildings = []
// 		const res = await Site.findById(event.pathParameters.siteId)
// 		await res.exec((err, site) => {
// 			if (err) throw err
// 			buildings = [...site.buildings, JSON.parse(event.body)]
// 		})

// 		const findRes = await Site.findOneAndUpdate({ _id: event.pathParameters.siteId }, { $set: { buildings: buildings } }, { new: true })
// 		await findRes.exec((err, newSite) => {
// 			if (err) throw err
// 			callback(null, {
// 				statusCode: 200,
// 				body: JSON.stringify(newSite),
// 			})
// 		})
// 	})
// } catch (err) {
// 	console.error('an error occurred=>', err.message)
// 	callback(null, {
// 		statusCode: err.statusCode || 500,
// 		headers: { 'Content-Type': 'text/plain' },
// 		body: JSON.stringify(err.message),
// 	})
// }
