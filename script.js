

// Sample data for demonstration
const trendingMovies = [
    { title: "Movie 1", img: "https://via.placeholder.com/200x300?text=Movie+1" },
    { title: "Movie 2", img: "https://via.placeholder.com/200x300?text=Movie+2" },
    { title: "Movie 3", img: "https://via.placeholder.com/200x300?text=Movie+3" },
    { title: "Movie 4", img: "https://via.placeholder.com/200x300?text=Movie+4" },
    { title: "Movie 5", img: "https://via.placeholder.com/200x300?text=Movie+5" }
];

const topPicks = [
    { title: "Pick 1", img: "https://via.placeholder.com/200x300?text=Pick+1" },
    { title: "Pick 2", img: "https://via.placeholder.com/200x300?text=Pick+2" },
    { title: "Pick 3", img: "https://via.placeholder.com/200x300?text=Pick+3" },
    { title: "Pick 4", img: "https://via.placeholder.com/200x300?text=Pick+4" }
];

// Function to render movie posters
function renderMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie.img;
        img.alt = movie.title;
        img.className = 'row-poster';
        container.appendChild(img);
    });
}

// Render movies on page load
document.addEventListener('DOMContentLoaded', () => {
    renderMovies(trendingMovies, 'trending');
    renderMovies(topPicks, 'top-picks');
});
