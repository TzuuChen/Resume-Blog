import React, { useState, useEffect } from "react";
import Loading from "../component/loading";
import Header from "../component/header";

const Project = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// 模擬後端請求，3秒後停止 Loading
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<div>
			{loading ? (
				<Loading /> // 根據 loading 狀態顯示 loading 畫面
			) : (
				<Header />
			)}
		</div>
	);
};

export default Project;
