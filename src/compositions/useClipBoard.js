const copyToClickBoard = (text) => () => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('Text copied to clipboard...');
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
};

export const useClipBoard = copyToClickBoard
