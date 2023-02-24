import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dxirtcrxd',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

describe('Test on fileUpload', () => {
  test('should upload file correctly to Cloudinary', async () => {
    const imageURL =
      'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'photo.jpg');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');
  });
});
