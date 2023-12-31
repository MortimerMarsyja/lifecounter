const transformImageToLineArt = (image: ImageData): ImageData => {
  const { width, height, data } = image;
  const lineArt = new ImageData(width, height);
  const lineArtData = lineArt.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const gray = (r + g + b) / 3;
    lineArtData[i] = gray;
    lineArtData[i + 1] = gray;
    lineArtData[i + 2] = gray;
    lineArtData[i + 3] = a;
  }
  return lineArt;
}

export default transformImageToLineArt;