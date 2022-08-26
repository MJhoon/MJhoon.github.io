document.addEventListener('DOMContentLoaded', () => {


  const navBtn = document.querySelector('.toggle_nav');

  navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
  });

  
  const filterBtn = document.querySelector('.filter_option');

    filterBtn.addEventListener('click', () => {
      this.filterBtn = filterBtn;
      filterBtn.classList.toggle('active');

  });

});