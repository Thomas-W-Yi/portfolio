$(document).on('click', '.contentBx', function (e) {
  $(this).toggleClass('active');
  console.log(`lable clicked`, this);
  e.preventDefault();
});
