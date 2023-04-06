export const readDir = async () => {
	const dir = document.getElementById('directory-btn');

	dir?.addEventListener('click', async () => {
		const dirHandle = await window.showDirectoryPicker();

		for await (const item of dirHandle.values()) {
			console.log(item.kind, item.name);
		}
	});
};
