const gallery = document.getElementById('gallery');
const storyForm = document.getElementById('storyForm');

let photos = [
    {
        title: "Sunset Memories",
        imageUrl: "https://picsum.photos/300/200?random=1",
        story: "I took this picture during my first solo trip. It reminds me of peace and freedom."
    },
    {
        title: "Old Bicycle",
        imageUrl: "https://picsum.photos/300/200?random=2",
        story: "This bicycle belonged to my grandfather. It still works!"
    }
];

function displayPhotos() {
    if (!gallery) return;
    gallery.innerHTML = "";
    photos.forEach(p => {
        const div = document.createElement('div');
        div.className = "photo-card";
        div.innerHTML = `
            <h3>${p.title}</h3>
            <img src="${p.imageUrl}" alt="${p.title}">
            <p>${p.story}</p>
        `;
        gallery.appendChild(div);
    });
}

if (storyForm) {
    storyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const imageUrl = document.getElementById('imageUrl').value;
        const storyText = document.getElementById('storyText').value;

        if (title && imageUrl && storyText) {
            photos.push({ title, imageUrl, story: storyText });
            displayPhotos();
            storyForm.reset();
        } else {
            alert("Please fill all fields!");
        }
    });
}

displayPhotos();
