$(function () {
  let current = getCurrent();

  setCurrentCity('Polska', 'Warszawa');
  setIconToday(current.WeatherIcon);
  setCurrentPhrase(current.WeatherText);
  setTempToday(
    Math.round(current.Temperature.Metric.Value),
    current.Temperature.Metric.Unit
  );
  setTempRealFeel(
    Math.round(current.RealFeelTemperature.Metric.Value),
    current.RealFeelTemperature.Metric.Unit,
  );
  setCurrentDate(current.LocalObservationDateTime);
  setForecast();
});


function setIconToday(icon) {
  $('#icon-today').addClass(`accu-${icon}-s`);
}

function setCurrentPhrase(phrase) {
  $('#current-phrase').text(phrase);
}

function setCurrentCity(country, city) {
  $('#current-city').text(`${city}, ${country}`);
}

function setTempRealFeel(temp, unit) {
  $('#real-feel').html(`Feels like ${temp} &deg;${unit}`);
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
    let day = moment(item.Date).format('dddd').substring(0, 3);
    let tempDayMin = `${Math.round(item.Temperature.Minimum.Value)} &deg;${item.Temperature.Minimum.Unit}`;
    let tempDayMax = `${Math.round(item.Temperature.Maximum.Value)} &deg;${item.Temperature.Maximum.Unit}`;
    let icon = item.Day.Icon;
    let iconPhrase = item.Day.IconPhrase;

    return `
    <div class="day-wrapper text-center">
      <span class="day">${day}</span>
      <span class="sprite accu-${icon}-s"></span>
      <div>
        <span class="temp-day">${tempDayMax}</span>
        <span class="temp-night">${tempDayMin}</span>
        <span class="icon-phrase">${iconPhrase}</span>
      </div>
    </div>
    `
  });

  $('#forecast').html(prepForecast.join(''));

}