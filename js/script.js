$(function () {
  let current = getCurrent();

  setCurrentCity('Polska', 'Warszawa');
  setIconToday(current.WeatherIcon);
  setTempToday(
    current.Temperature.Metric.Value,
    current.Temperature.Metric.Unit
  );
  setCurrentDate(current.LocalObservationDateTime);
  setForecast();
});

function setIconToday(icon) {
  $('#icon-today').addClass(`accu-${icon}-s`);
}

function setCurrentCity(country, city) {
  $('#current-city').text(`${city}, ${country}`);
}

function setTempToday(temp, unit) {
  $('#temp-today').html(`${temp} &deg;${unit}`);
}

function setCurrentDate(dateString) {
  let day = moment(dateString);
  $('#current-date').text(day.format('dddd, HH:mm'));
}

function setForecast() {
  let forecast = getForecast();

  let prepForecast = forecast.map(function (item) {
    let day = moment(item.Date).format('dddd');
    let tempDayMin = `${item.Temperature.Minimum.Value} &deg;${item.Temperature.Minimum.Unit}`;
    let tempDayMax = `${item.Temperature.Maximum.Value} &deg;${item.Temperature.Maximum.Unit}`;
    let tempDay = `${tempDayMin} - ${tempDayMax}`;
    let icon = item.Day.Icon;

    return `
    <div class="col-xs-6 col-m-2 text-center">
      <span class="day">${day}</span>
      <span class="sprite accu-${icon}-s"></span>
      <div>
        <span class="temp-day">${tempDay}</span>
      </div>
    </div>
    `
  });

  $('#forecast').html(prepForecast.join(''));

}