function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

window.addEventListener('load', () => {
    const cityInput = document.getElementById('city');
    const changeLink = document.getElementById('change-link');
    const inputWrapper = document.getElementById('input-wrapper');
    const cityMessageWrapper = document.getElementById('city-message-wrapper');
    const cityName = document.getElementById('city-name');

    let userCity = getCookie('city');
    if (userCity) {
        // show city name if cookie exists
        cityMessageWrapper.style.display = 'block';
        inputWrapper.style.display = 'none';
        cityName.innerText = userCity;
        cityInput.value = userCity;
    } else {
        // show input field
        inputWrapper.style.display = 'block';
        cityMessageWrapper.style.display = 'none';
    }


    cityInput.addEventListener('input', () => {
        document.cookie = `city=${cityInput.value}; max-age=604800`;
    })

    changeLink.addEventListener('click', () => {
        cityMessageWrapper.style.display = 'none';
        inputWrapper.style.display = 'block';
    })
})
