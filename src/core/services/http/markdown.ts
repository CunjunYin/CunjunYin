import * as Generic from './Generic';

interface MarkdownResponse extends Generic.BaseResponse {
	body: string
}

async function readFile(uri: string): Promise<MarkdownResponse> {
	const response = await Generic.getDataFromService(uri);
	if(response) {
		return  {
			success: true,
			body: response as string
		}
	}
	return  {
		success: false,
		body: ''
	};
}

export function getFile(
	uri: string,
	type: string = "file"
): Promise<MarkdownResponse> {
	return readFile(uri);
}