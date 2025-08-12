document.addEventListener('DOMContentLoaded', () => {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
  });
});
