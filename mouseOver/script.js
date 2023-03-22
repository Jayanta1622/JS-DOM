const products = document.querySelectorAll('.product');

products.forEach(product => {
  const details = product.querySelector('.details');

  product.addEventListener('mouseover', () => {
    details.style.display = 'block';
  });

  product.addEventListener('mouseout', () => {
    details.style.display = 'none';
  });
});
