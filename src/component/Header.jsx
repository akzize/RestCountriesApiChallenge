import { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";

function Header() {
	const [isDark, setIsDark] = useState(false);

	const handleClick = () => {
		setIsDark(!isDark);
		localStorage.setItem('theme', isDark ? 'dark' : '')
		console.log(localStorage.theme);
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		// ||
		// (!("theme" in localStorage) &&
		// 	window.matchMedia("(prefers-color-scheme: dark)").matches)
		const theme = localStorage.getItem('theme')
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}

	return (
		<div className="flex items-center justify-between bg-white px-10 py-4 mb-2 shadow-md fixed w-full z-50 dark:bg-gray-900">
			<h1 className="text-2xl font-semibold">Where in the world ?</h1>
			<div className="theme" onClick={handleClick}>
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
