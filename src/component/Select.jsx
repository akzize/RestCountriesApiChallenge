function Select({ regions }) {
	return (
		<form action="">
			<select name="" id="" className="py-3 w-40 px-2  rounded-lg">
				<option value="0" selected disabled>
					select region
				</option>
				{regions.map((region, index) => (
					<option key={index} value={region}>
						{region}
					</option>
				))}
			</select>
		</form>
	);
}

export default Select;
