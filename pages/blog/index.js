import React, { useState, useEffect } from "react";
import Header from "@/component/header";
import Router, { useRouter } from "next/router";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import postsData from "@/data/post.json";
function Blog() {
	const router = useRouter();
	const [post, setPost] = useState([]);
	const [selectedDate, setSelectedDate] = useState(null);
	const [extend, setExtend] = useState({});
	const handleContent = (id) => {
		setExtend((prev) => ({
			...prev,
			[id]: !prev[id], // 切換特定文章的展開狀態
		}));
	};

	const handleDateChange = (newDate) => {
		setSelectedDate(newDate);
	};

	const wrap = (content) => {
		return content.split("\n").map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};
	const formatContent = (content, maxTotalChars = 300) => {
		if (content.length > maxTotalChars) {
			content = content.slice(0, maxTotalChars) + "...";
		}
		return content.split("\n").map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};
	useEffect(() => {
		setPost(postsData);
	}, [post]);
	return (
		<>
			<Header />
			<div className="container">
				<div className="d-flex justify-content-between">
					<ul>
						{post.map((post) => (
							<li key={post.id} className="article">
								<h3>{post.title}</h3>
								<p>
									{post.date}／{post.category}
								</p>
								<div
									className={`article-content ${
										extend[post.id] ? "expand" : ""
									}`}>
									{extend[post.id]
										? wrap(post.content)
										: formatContent(post.content)}
								</div>
								<button
									className=""
									onClick={() => handleContent(post.id)}>
									{extend[post.id] ? "關閉" : "看更多"}
								</button>
							</li>
						))}
					</ul>
					<div className="d-none d-md-flex">
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DateCalendar
								value={selectedDate}
								onChange={handleDateChange}
							/>
						</LocalizationProvider>
					</div>
				</div>
			</div>
		</>
	);
}

export default Blog;
