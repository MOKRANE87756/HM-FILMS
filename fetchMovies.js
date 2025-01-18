// fetchMovies.js
// جلب الأفلام بناءً على الفئة المختارة
async function fetchMoviesByCategory(category) {
    const apiKey = 'curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/550?append_to_response=images&language=en-US&include_image_language=en,null' \
     --header 'Authorization: Bearer ACCESS_TOKEN' \
     --header 'accept: application/json'';  // API key الخاص بـ TMDb
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${category}&language=en-US`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;  // إرجاع الأفلام المستخلصة من الـ API
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
