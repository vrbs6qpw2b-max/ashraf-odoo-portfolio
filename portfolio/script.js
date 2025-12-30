const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // حفظ الاختيار في المتصفح عشان لما يعمل ريفريش ميرجعش قديم
    if(body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// تفعيل الثيم المحفوظ عند فتح الموقع
if(localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}
