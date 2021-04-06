// const accordion = $('.contentBx');
// console.log(`panel.js`, accordion);

// accordion.forEach((box) => {
//   box.on('click', function () {
//     console.log(`lable clicked`, this);
//   });
// });
$(document).on('click', '.contentBx', function (e) {
  $(this).toggleClass('active');
  console.log(`lable clicked`, this);
  e.preventDefault();
});
