declare global {
	interface Window {
		showDirectoryPicker?: any;
	}
}

const showDirectoryPicker = window.showDirectoryPicker;

const GenerateJson = () => {
	async function getDir() {
		const dirHandle = await window.showDirectoryPicker();

		// run code for dirHandle
	}

	const getFilesInDirectory = async (directoryHandle: any): Promise<any> => {
		const files = [];
		for await (const [name, handle] of directoryHandle.entries()) {
			if (handle.kind === 'file') {
				const file = await handle.getFile();
				const contents = await file.text();
				files.push({ name, contents });
			} else if (handle.kind === 'directory') {
				const subdirectory = await handle.getDirectory();
				const subdirectoryFiles = await getFilesInDirectory(subdirectory);
				files.push({ name, files: subdirectoryFiles });
			}
		}
		return files;
	};

	const readAllFiles = async () => {
		const directoryHandle = await window.showDirectoryPicker();
		const files = await getFilesInDirectory(directoryHandle);
		console.log(files);
	};

	readAllFiles();
};

export default GenerateJson;
