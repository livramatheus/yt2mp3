const sliceText = (text: string, maxLength = 18): string => {
  let sliced = text.slice(0, maxLength);
  
  if (text.length >= maxLength) {
    sliced += "...";
  }

  return sliced;
}

export { sliceText };