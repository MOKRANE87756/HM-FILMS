// fetchMovies.js
// هذا الملف مسؤول عن جلب البيانات من الـ API
async function fetchMoviesByCategory(category) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${category}&language=en-US`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
