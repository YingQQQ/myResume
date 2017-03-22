export const getStyle = (elem, value) => {
  let viwe = elem.ownerDocument.defaultView;
  if (!viwe) {
    viwe = window;
  }
  const computedStyle = viwe.getComputedStyle(elem);

  return elem.style[value] || computedStyle.getPropertyValue(value);
};
export const setStyle = (elem, properties, duration, ease, delay) => {
  const cssValues = {};
  if (typeof properties === 'string' && duration) {
    cssValues['animation-name'] = properties;
    cssValues['animation-duration'] = `${duration}s`;
    cssValues['animation-delay'] = `${delay}s`;
    cssValues['animation-timing-function'] = (ease || 'linear');
  } else {
    for (const name in properties) {
      if ({}.hasOwnProperty.call(properties, name)) {
        cssValues[name] = properties[name];
      }
    }
  }
  let css = '';
  /* eslint no-restricted-syntax: "off" */
  for (const key in cssValues) {
    if ({}.hasOwnProperty.call(cssValues, key)) {
      css += `${key}:${cssValues[key]};`;
    }
  }
  /* eslint no-param-reassign: ["error", { "props": false }]*/
  elem.style.cssText += `;${css}`;
};
