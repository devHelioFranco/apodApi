$('#main-container').on('click', async function (event) {
    event.preventDefault();
    $('#main-texto').css("display", "none");
    let inputDate = $('#dia').val();
    const url = `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${inputDate}`
    let apiResponse = await fetch(url).then(response => response.json());
    $('body').css("background-image", `url(${apiResponse.url})`);
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
    $('#texto-nasa').css('display', 'block');
    $('#nasa-titulo').html(`${apiResponse.title}`);
    $('#nasa-texto').html(`(${apiResponse.explanation})`);
});