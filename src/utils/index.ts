export const getPreviewImage = (file: File): string | undefined => {
  if (file) {
    try {
      return URL.createObjectURL(file);
    } catch (err) {
      if (err) return;
    }
  }
  return;
};
