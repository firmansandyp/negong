const getMysqlConnection = (mysqlPool) => {
	return new Promise((resolve, reject) => {
		mysqlPool.getConnection((err, conn) => {
			if (err) {
				reject(err);
			} else {
				resolve(conn);
			}
		});
	});
};

const executeQuery = (mysqlConnection, query, queryArguments) => {
	return new Promise((resolve, reject) => {
		if (query.includes("?") && queryArguments.length > 0) {
			mysqlConnection.query(query, queryArguments, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			mysqlConnection.query(query, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		}
	});
};

export { getMysqlConnection, executeQuery };