const inum = (() => {
	let uid = 0;
	return () => {
		uid++;
		return uid;
	};
})();

export default inum;