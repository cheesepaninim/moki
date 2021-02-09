/**
 * 특정 길이로 텍스트 말줄임 처리
 *
 * @param {string} str          원문 텍스트
 * @param {number} maxLeng      기준 표시할 길이
 * @param {string} ellipsis     말줄임 부호
 */
const setEllipsis = (str, maxLeng, ellipsis) => {
    const subStr = str.substr(0, maxLeng + 1);
    const splitStr = subStr.split(' ');
    splitStr.pop();
    return `${splitStr.join(' ')}${ellipsis}`;
};

/**
 * HTML tag 제거
 *
 * @param {string} str      원문 텍스트
 */
const removeTag = (str) => str.replace(/(<([^>]+)>)/gi, '');

export { setEllipsis, removeTag };
