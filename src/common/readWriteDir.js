// const StreamZip = require('node-stream-zip');
import * as zip from '@zip.js/zip.js';

/**
 * readDir is a JS file because it is experimental and TS doesn't have definitions for it
 */
export const readDir = async () => {
	const dir = document.getElementById('directory-btn');

	dir?.addEventListener('click', async () => {
		const dirHandle = await window.showDirectoryPicker();
		let fileData;

		for await (const item of dirHandle.values()) {
			console.log(item.kind, item.name);

			if (item.kind === 'directory') {
			} else if (item.kind === 'file') {
				fileData = await item.getFile();
				console.log('\n///////////////////////////fileData\n', await fileData.text());
			}

			if (fileData) {
				extract(fileData);
			}
		}
	});

	const open = (file) => {
		return new Promise(function (resolve, reject) {
			const zip = new zip({
				file: file,
				storeEntries: true,
			});

			zip.on('ready', () => {
				var chunks = [];
				var content = '';
				zip.stream('word/document.xml', (err, stream) => {
					if (err) {
						reject(err);
					}
					stream.on('data', function (chunk) {
						chunks.push(chunk);
					});
					stream.on('end', function () {
						content = Buffer.concat(chunks);
						zip.close();
						resolve(content.toString());
					});
				});
			});
		});
	};

	const extract = (file) => {
		return new Promise(function (resolve, reject) {
			open(file).then(function (res, err) {
				if (err) {
					reject(err);
				}

				var body = '';
				var components = res.toString().split('<w:t');

				for (var i = 0; i < components.length; i++) {
					var tags = components[i].split('>');
					var content = tags[1].replace(/<.*$/, '');
					body += content + ' ';
				}

				console.log('\n///////////////////////////body\n', body);

				resolve(body);
			});
		});
	};
};
