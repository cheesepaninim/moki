const setEllipsis = (str, maxLeng, ellipsis) => {
    const subStr = str.substr(0, maxLeng + 1);
    const splitStr = subStr.split(' ');
    splitStr.pop();
    return `${splitStr.join(' ')}${ellipsis}`;
};

export { setEllipsis };
