const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const savedTodoList = JSON.parse(localStorage.getItem('save-items'));
const savedWeatherData = JSON.parse(localStorage.getItem('saved-weather'));

const createTodo = (storageData) => {
    let todoContents = todoInput.value;
    if (storageData) {
        todoContents = storageData.contents;
    }

    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    newBtn.addEventListener('click', (event) => {
        newLi.classList.toggle('complete');
        saveItemsFn();
    });

    newLi.addEventListener('dblclick', (event) => {
        newLi.remove();
    });

    if (storageData?.complete === true) {
        newLi.classList.add('complete');
    }

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = '';
    saveItemsFn();
};

const keyCodeCheck = () => {
    if (window.event.keyCode === 13 && todoInput.value.trim() !== '') {
        createTodo();
    }
};

const deletAll = () => {
    const liList = document.querySelectorAll('li');
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
    saveItemsFn();
};

const saveItemsFn = () => {
    const saveItems = [];
    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete'),
        };

        saveItems.push(todoObj);
    }

    saveItems.length === 0
        ? localStorage.removeItem('save-items')
        : localStorage.setItem('save-items', JSON.stringify(saveItems));
};

if (savedTodoList) {
    for (let i = 0; i < savedTodoList.length; i++) {
        createTodo(savedTodoList[i]);
    }
}

const weatherDataActive = ({ location, weather }) => {
    const weatherMainList = [
        'Clear',
        'Clouds',
        'Drizzle',
        'Rain',
        'Snow',
        'Thunderstorm',
    ];

    weather = weatherMainList.includes(weather) ? weather : 'Fog';
    const locationNameTag = document.querySelector('#location-name-tag');

    locationNameTag.textContent = location;
    document.body.style.backgroundImage = `url(./images/${weather}.jpg)`;

    if (
        !savedWeatherData ||
        savedWeatherData.location !== location ||
        savedWeatherData.weather !== weather
    ) {
        localStorage.setItem('saved-weather', JSON.stringify({ location, weather }));
    }
};

const weatherSearch = ({ latitude, longitude }) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e6972d059e9ad66dbd18b9b5403f8500`
    )
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            const weatherData = {
                location: json.name,
                weather: json.weather[0].main,
            };
            weatherDataActive(weatherData);
        })
        .catch((err) => {
            console.error(err);
        });
};

const accesToGeo = ({ coords }) => {
    const { latitude, longitude } = coords;
    // Shorthand property
    const positionObj = {
        latitude,
        longitude,
    };
    weatherSearch(positionObj);
};

const askForLocation = () => {
    navigator.geolocation.getCurrentPosition(accesToGeo, (err) => {
        console.log(err);
    });
};
askForLocation();
