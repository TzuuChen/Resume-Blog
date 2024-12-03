import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Header from "../component/header";

function App() {
	return (
		<div className="">
			<Header />
			<div>
				<div className="content-photo-mb d-flex d-md-none"></div>
				<div className="content d-flex justify-content-center align-items-center">
					<div className="content-left d-none d-md-flex">
						<div className="content-card">
							<div className="content-card_photo"></div>
							<div className="content-card_title">
								<div className="name">陳姿卉</div>
								<div>前端工程師</div>
							</div>
						</div>
					</div>
					<div className="content-right">
						<div className="content-text">
							<h1>嗨！我是陳姿卉</h1>
							<div>
								是個喜歡挑戰自己且積極學習的人，目前正專注於成為一名前端軟體工程師。
								<br />
								過去，我曾擔任東海大學射箭社社長並創辦手工藝同好會，展現了我的領導力與執行能力。這些經歷讓我更懂得如何在團隊中協作，並善於規劃與實現目標。
								<br />
								即便非本科出身，我仍透過自學取得國貿技術士丙級證照，並在資展國際（原資策會）完成了前端軟體工程師課程。
								<br />
								掌握了 HTML、CSS、JavaScript 等核心技能，以及
								React等框架的實戰經驗。在課程中，我完成了多個實作專案，如響應式網頁設計和前後端串接，進一步提升了我對於前端開發的熱情與能力。
								<br />
								期待能將所學應用在實際工作中，並不斷成長！
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="d-flex">
				<div className="container">
					<div>Contact Me</div>
					<div className="d-flex justify-content-center gap-3 flex-wrap">
						<div>
							<IoIosMail size={25} />
							jf76501@gmail.com
						</div>
						<div>
							<FaPhone size={20} />
							0907307468
						</div>
						<div>
							<FaGithub size={25} />
							Tzuu_chen
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
