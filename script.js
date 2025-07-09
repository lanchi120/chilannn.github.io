document.addEventListener('DOMContentLoaded', () => {
    const welcomePage = document.getElementById('welcome-page');
    const lovePage = document.getElementById('love-page');
    const angryPage = document.getElementById('angry-page');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    // Hàm ẩn tất cả các trang
    function hideAllPages() {
        welcomePage.classList.remove('active');
        lovePage.classList.remove('active');
        angryPage.classList.remove('active');
    }

    // Xử lý khi nhấn nút "cs"
    yesButton.addEventListener('click', () => {
        hideAllPages();
        lovePage.classList.add('active'); // Hiển thị trang yêu
    });

    // Xử lý khi nhấn nút "ko"
    noButton.addEventListener('click', () => {
        hideAllPages();
        angryPage.classList.add('active'); // Hiển thị trang giận
    });
});