const url = 'https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink';
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'auto-download-all-in-one.p.rapidapi.com',
        'x-rapidapi-key': 'e1e7f14de7msh88c1559523c65d6p1e1c60jsn0737ab2bc842' // استبدلها إذا لزم الأمر
    },
    body: JSON.stringify({
        url: 'https://www.tiktok.com/@yeuphimzz/video/7237370304337628442'
    })
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // البيانات التي تم الحصول عليها من API
    })
    .catch(error => {
        console.error('Error:', error);
    });
