// ----- JS-KOD MED KOMMENTARER ------


//En funktion för att hämta och visa foton
function fetchAndDisplayPhotos() {

    //Hämta den valda kameran från URL-parametrar
    const selectedCamera = new URLSearchParams(window.location.search).get('camera');

    const sol = 1000; // Solvärdet

    // API-neckeln
    const apiKey = 'v2q9tdxOorB1liOooQgjTHN5v8tfWGkN26a6mBB7';
    // API-url för att hämta foton med den valda kameran och andra parametrar
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${selectedCamera}&api_key=${apiKey}`;


    // Hämta data från API:et
    fetch(apiUrl)
        // Konvertera svaret till JSON-format
        .then(response => response.json())
        .then(data => {
            // Visa foton när data har hämtasts
            displayPhotos(data.photos);
        })
        .catch(error => {
            // Här visas felmeddelande om något går fel
            console.error('Error fetching photos:', error);
        });
}



// ---- RESULTATSSIDAN -----

// Funktion för att visa foton på sidan
function displayPhotos(photos) {
    // Hitta elementet för att visa foton
    const photosContainer = document.getElementById('photos');
    photosContainer.innerHTML = ''; // Clear previous photos


    // Loopa genom varje foto och skapa ett <img> och <p> element för varje.
    // Jag har alltså valt att plocka fram bild + tidpunkt
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        // Lägg till bildkälla
        imgElement.src = photo.img_src;
        imgElement.alt = 'Mars Rover Photo';
        // Lägg till klass för bildens stil så jag kan redigera i CSS
        imgElement.classList.add('mars-photo');

        const earthDate = new Date(photo.earth_date).toLocaleString(); // Konvertera till lokal tid
        const timeTakenElement = document.createElement('p');
        timeTakenElement.textContent = `Time taken: ${earthDate}`;
        timeTakenElement.classList.add('time-taken'); // Lägg till klass för textens stil

        // Lägger till bild och tidpunktselement till behållaren
        photosContainer.appendChild(imgElement);
        photosContainer.appendChild(timeTakenElement);
    });
}


// Hämta och visa bilder när sidan laddas
document.addEventListener('DOMContentLoaded', fetchAndDisplayPhotos);

//Här omdirigeras man till resultatsidan
document.getElementById('camera-form').addEventListener('submit', function (event) {
    event.preventDefault(); // 

    // Hämtar värdet för den valda kameran
    const selectedCamera = document.getElementById('camera-select').value;

    const redirectUrl = `result_page.html?camera=${selectedCamera}`;

    // Här slussas man visare till resultatsidan med den valda kameran.
    window.location.href = redirectUrl;
});