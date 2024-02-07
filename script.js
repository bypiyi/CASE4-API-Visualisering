let cameraString = window.location.href.split('?')[1];
console.log(cameraString)


// API

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=v2q9tdxOorB1liOooQgjTHN5v8tfWGkN26a6mBB7&"+cameraString) // Skicka request
    .then(response => response.json()) // När svaret har kommit tillbaka tolka informationen i responsen
    .then(data => {
        // Arbete med data från vår request

        console.log(data);

        output = data.photos.filter(p => p.camera.name == "FHAZ");
        urls = output.map(p => p.img_src);


        let container = document.querySelector("#container");
        container.innerHTML = ''

        for (let i = 0; i < urls.length; i++) {
            let img = document.createElement('img');
            img.src = urls[i]
            img.style.height = '200px';
            img.style.width = '300px';
            container.appendChild(img);
        }

    
    });
