import { isMobile } from "react-device-detect";

const sliceText = (text: string, maxLength = 0): string => {
  maxLength = maxLength ? maxLength : (
    isMobile ? 28 : 18
  );

  let sliced = text.slice(0, maxLength);
  
  if (text.length >= maxLength) {
    sliced += "...";
  }

  return sliced;
}

export { sliceText };