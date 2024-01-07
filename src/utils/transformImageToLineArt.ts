

const imgUrlToImageData = (imgUrl: string): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Add this line
    img.src = imgUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        resolve(imageData);
      }
    }
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    }
  })
}

const transformImageToLineArt = async (imgUrl: string): Promise<ImageData> => {
  const imageData = await imgUrlToImageData(imgUrl);
  const { data, width, height } = imageData;
  const threshold = 100;
  const result = new ImageData(width, height);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / 3;
    const val = brightness > threshold ? 255 : 0;
    result.data[i] = val;
    result.data[i + 1] = val;
    result.data[i + 2] = val;
    result.data[i + 3] = 255;
  }
  return result;
}

export default transformImageToLineArt;