export function h(template, position = 'afterbegin') {
  const el = document.createElement('div');
  el.insertAdjacentHTML(position, template);
  return el.firstElementChild;
}
