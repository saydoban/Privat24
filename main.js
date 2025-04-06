let timerInterval;

function startTimer() {
  // Получаем данные из полей
  const bus = document.getElementById('bus').value;
  const date = document.getElementById('dateInput').value;
  const time = document.getElementById('timeInput').value;
  const passengers = document.getElementById('passengersInput').value;

  // Сохраняем в localStorage
  localStorage.setItem('bus', bus);
  localStorage.setItem('date', date);
  localStorage.setItem('time', time);
  localStorage.setItem('passengers', passengers);

  // Запуск таймера
  clearInterval(timerInterval);
  let seconds = 39 * 60 + 40;

  timerInterval = setInterval(() => {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
    }
    seconds--;
  }, 1000);
}

// При загрузке страницы вставляем данные из localStorage
window.addEventListener('load', () => {
  document.getElementById('bus').value = localStorage.getItem('bus') || '№-';
  document.getElementById('dateInput').value = localStorage.getItem('date') || '';
  document.getElementById('timeInput').value = localStorage.getItem('time') || '';
  document.getElementById('passengersInput').value = localStorage.getItem('passengers') || '2';
});


