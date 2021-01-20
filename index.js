// получаем массив с элементами:
const animatedItems = Array.from(document.querySelectorAll('.animate'));
// для каждого элемента в массиве при скроле применяем условие:
const itemtest = document.querySelector('.presentation__text');
console.log(itemtest.offsetWidth);

document.addEventListener('scroll', () => {
  
  animatedItems.forEach((item) => {

    const domRect = item.getBoundingClientRect();
    console.log(window.innerHeight);
    console.log(domRect.top);

    const heightItem = domRect.top - domRect.bottom;
    window.innerHeight > domRect.top
      ? item.classList.add('animate-active')
      : item.classList.remove('animate-active');
  });
});

const animate = () => {
  animatedItems.forEach((item) => {

    const domRect = item.getBoundingClientRect();
    console.log(window.innerHeight);
    console.log(domRect.top);

    const heightItem = domRect.top - domRect.bottom;
    window.innerHeight > domRect.top
      ? item.classList.add('animate-active')
      : item.classList.remove('animate-active');
  });
}
animate();

  // console.log(`${window.pageYOffset} верхняя граница окна`)
  // console.log(`${window.innerHeight} высота окна`)
  // console.log(`${domRect.top + window.pageYOffset} расстояние от верхней границы элемента до верхнего края окна`)
  // console.log(item);
  // для каждого элемента в массиве при скроле применяем условие:
// const animate = () => {
//     animatedItems.forEach((item) => {
//       const domRect = item.getBoundingClientRect();
//       const heightItem = domRect.top - domRect.bottom;
//       document.documentElement.scrollTop > domRect.top
//         ? item.classList.add('animate-active')
//         : item.classList.remove('animate-active');
//     });
// };
// animate();