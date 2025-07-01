const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    zoomable: true,
    autoplayVideos: false,
    openEffect: "zoom", // mở ảnh
    closeEffect: "zoom", // đóng ảnh
    slideEffect: "fade", // chuyển ảnh = fade (mượt hơn slide)
    preload: true, // preload ảnh tiếp theo
});

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 50,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    lazy: {
        loadPrevNext: true, // Tải ảnh trước và sau
        loadOnTransitionStart: true, // Tải khi bắt đầu chuyển
    },
    breakpoints: {
        0: {
            spaceBetween: 30,
        },
        769: {
            spaceBetween: 50,
        },
    },
});

const btnOpen = document.querySelector(".btn"); // nút mở popup
const dimmed = document.querySelector(".dimmed");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".btn_close");

// Mở popup
btnOpen.addEventListener("click", () => {
    dimmed.classList.add("is_active");
    popup.classList.add("is_active");
    document.body.style.overflow = "hidden";
});

// Đóng popup khi click nút X
btnClose.addEventListener("click", () => {
    dimmed.classList.remove("is_active");
    popup.classList.remove("is_active");
    document.body.style.overflow = "";
});

// Đóng popup khi click ra ngoài (dimmed)
dimmed.addEventListener("click", () => {
    dimmed.classList.remove("is_active");
    popup.classList.remove("is_active");
    document.body.style.overflow = "";
});
