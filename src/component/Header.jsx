import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";

function Header() {
	const [isDark, setIsDark] = useState(false);
	return (
		<div className="flex items-center justify-between bg-white px-10 py-4 mb-2 shadow-md fixed w-full ">
			<h1 className="text-2xl font-semibold">Where in the world ?</h1>
			<div className="theme" onClick={() => setIsDark(!isDark)}>
				{isDark ? (
					<button className="flex justify-center gap-2 items-center">
						<MdOutlineWbSunny className="text-xl" />
						<span>Light Mode</span>
					</button>
				) : (
					<button
						className="flex justify-center gap-2 items-center"
					>
						<CiDark className="text-xl" />
						<span>Dark Mode</span>
					</button>
				)}
			</div>
		</div>
	);
}

export default Header;
