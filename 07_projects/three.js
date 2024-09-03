const clock = document.getElementById('clock');

setInterval(function () {
  const time = new Date();
  const flag = time.getHours() < 12 ? 'AM' : '';
  clock.innerHTML = time.toLocaleTimeString() + ' ' + flag;
}, 1000);
