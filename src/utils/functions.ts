/**
 * Slices a given text to a specified maximum length and appends ellipsis if necessary.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max=50] - The maximum length to which the text should be sliced. Defaults to 50.
 * @returns {string} - The sliced text, possibly appended with ellipsis.
 *
 * @example
 * const slicedText = txtSlicer("Lorem ipsum dolor sit amet", 10);
 * // Result: "Lorem ipsu..."
 *
 * const defaultSlicedText = txtSlicer("Lorem ipsum dolor sit amet");
 * // Result: "Lorem ipsum dolor sit amet"
 */
export function txtSlicer(txt: string, max: number = 40) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
