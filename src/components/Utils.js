export const extractUrl = (div) => {
  let videoUrl = div.match(/(?:https?|ftp):\/\/[\n\S]+/g);
  return videoUrl;
};
