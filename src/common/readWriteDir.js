/**
 * readDir is a JS file because it is experimental and TS doesn't have definitions for it
 */
export const readDir = async () => {
	const dir = document.getElementById('directory-btn');

	dir?.addEventListener('click', async () => {
		const dirHandle = await window.showDirectoryPicker();

		for await (const item of dirHandle.values()) {
			console.log(item.kind, item.name);
			if (item.kind === 'directory') {
			} else if (item.kind === 'file') {
				const fileData = await item.getFile();
				console.log('\n///////////////////////////fileData\n', fileData.text());
			}
		}
	});
};
