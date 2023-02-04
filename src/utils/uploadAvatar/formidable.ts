import { IncomingForm, JSONParser } from 'formidable';

export async function getImage(formData: any) {
	const data: any = await new Promise((resolve, rejects) => {
		const form = new IncomingForm({
			keepExtensions: true,
			multiples: true
		});
		form.parse(formData, (err, fields, files) => {
			if (err) return rejects(err);
			resolve({ fields, files});
		});
	});
    return {
		image: data.files.image,
		id: data.fields.id
	}
}