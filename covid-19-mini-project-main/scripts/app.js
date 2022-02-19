// --------------------------------- Opening Page - Welcome , Fade-In -------------------------------
const splash = document.querySelector('.splash');
window.addEventListener('load', (e) => {
  setTimeout(() => {
    splash.classList.add('hiden');
  }, 2000);
});

/* ---------------------------- Continents-Grid Items Fades In & Out -------------------------------------- */
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshhold: 1,
};

const appearOnScroll = new IntersectionObserver
  (function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })
  },
    appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

// ------------------------------------------------- Covid - 19 -------------------------------------------
document.querySelectorAll(".btnContinent").forEach(continent => {
  continent.addEventListener('click', e => {
    document.querySelector('#open-container').style.display = 'none';
    document.querySelector('#data-container').style.display = 'block';
    document.querySelector('#data-container').style.background = 'none';
  });
});

function goBack() {
  let firstPage = window.open("http://127.0.0.1:5500/index.html", "_self");
};


// continent
function getCountries(region) {
  let url = 'https://cors-anywhere.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/' + region;

  if (region == "Northern America" || region == "South America") {
    url = 'https://cors-anywhere.herokuapp.com/https://restcountries.herokuapp.com/api/v1/subregion/' + region;
  }

  return fetch(url, {
    "crossDomain": true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*",
    },
  }).then(response => { return response.json(); })
    .then(function (json) {
      return json;
    });
}

// pushe to select
function renderCountriesData(countries) {
  let html = '';
  let sel = document.querySelector('.countries');

  countries.forEach(function (country) {
    let opt = document.createElement('option');
    opt.value = country.cca2;
    opt.innerHTML += country.name.common
    sel.appendChild(opt);
  });
}

// Save in local storedge
function renderCountries(region) {
  let previousRegion = localStorage.getItem(region);

  if (previousRegion == null) {
    getCountries(region).then(function (countries) {
      localStorage.setItem(region, JSON.stringify(countries));
      renderCountriesData(countries)
    });
  }
  else {
    previousRegion = JSON.parse(previousRegion)
    renderCountriesData(previousRegion);
  }
}

// cuntry
function getCountryData(code) {
  let url = 'https://cors-anywhere.herokuapp.com/http://corona-api.com/countries/' + code;

  return fetch(url, {
    // 'no-cors',
    "crossDomain": true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*",
    },
    method: "GET",
  }).then(response => { return response.json(); })
    .then(function (json) {
      return json;
    });
}

// Save in local storedge
function renderCountryStats(code) {
  let previousStat = localStorage.getItem(code);
  if (previousStat == null) {
    getCountryData(code).then(function (stats) {
      localStorage.setItem(code, JSON.stringify(stats));
      renderCountryData(stats)
    });
  }
  else {
    previousStat = JSON.parse(previousStat)
    renderCountryData(previousStat);
  }
}

// Data
function renderCountryData(stats) {
  document.getElementById("totalCases").innerText = "Total Cases: " + stats.data.latest_data.confirmed;
  document.getElementById("totalDeaths").innerText = "Total Deaths: " + stats.data.latest_data.deaths;
  document.getElementById("totalRecovered").innerText = "Total Recovered: " + stats.data.latest_data.recovered;
  document.getElementById("totalCritical").innerText = "Total Critical: " + stats.data.latest_data.critical;

  const labels = [
    'Total Cases',
    'New Cases',
    'Total Deaths',
    'New Deaths',
    'Total Recovered',
    'In Critical Condition'
  ]

  const data = {
    labels: labels,
    datasets: [{
      label: 'Covid Dataset',
      data: [stats.data.latest_data.confirmed, stats.data.today.confirmed, stats.data.latest_data.deaths, stats.data.today.deaths, stats.data.latest_data.recovered, stats.data.latest_data.critical],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  document.querySelector("#divChart").innerHTML = '<canvas id="covidChart"></canvas>';

  const covidChart = new Chart(
    document.getElementById('covidChart'),
    config
  );
}

// every click (on click in html)
function getCountryStats(countryCode) {
  renderCountryStats(countryCode);
}

function loadCountries(country, region) {
  if (region == "Northern America") {
    country = region;
  }
  else if (region == "South America") {
    country = region;
  }
  renderCountries(country);
}