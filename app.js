// app.js
// هذا الملف مسؤول عن التنسيق العام للتفاعل مع صفحة الويب
function changeBackgroundColor() {
    const color = document.getElementById('bgColorPicker').value;
    document.getElementById('page-body').style.background = color;
}

function recommendMovie() {
    const occasion = document.getElementById('occasion').value;
    // منطق توصية الأفلام
}
