const replaceRange = (
  s: string,
  start: number,
  end: number,
  substitute: string
) => {
  return s.substring(0, start) + substitute + s.substring(end);
};

const applyMarkup = (
  sourceText: string,
  type: string,
  startIndex: number,
  endIndex: number
): string => {
  let selectedText = sourceText.substring(startIndex, endIndex);
  switch (type) {
    case "bold":
      selectedText = `**${selectedText}**`;
      break;
    case "italic":
      selectedText = `*${selectedText}*`;
      break;
    case "link":
      selectedText = `[LINK_TEXT](${selectedText})`;
      break;
    case "list":
      const lines = sourceText.split(/\r?\n|\r/);
      const startLineNo = sourceText.substr(0, startIndex).split(/\r?\n|\r/).length;
      const endLineNo = sourceText.substr(0, endIndex).split(/\r?\n|\r/).length;
      const unorderLines = lines.map((el,index) => {
        const lineNo = index + 1;
        if(lineNo >= startLineNo && lineNo <= endLineNo) {
          return `* ${el}`;
        }
        return el;
      });
      return unorderLines.join("\r\n");
    default :
      return sourceText;
  }
  
  const newText = replaceRange(sourceText, startIndex, endIndex, selectedText);
  return newText;
};

export { applyMarkup };
