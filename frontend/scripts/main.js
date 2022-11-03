$(document).ready(function () {
  $(".xzoom, .xzoom-gallery").xzoom({
    zoomWidth: 500,
    title: false,
    tint: "#333",
    Xoffset: 15,
  });

  $(".datepicker").datepicker({
    uiLibrary: "bootstrap5",
    icons: {
      rightIcon: '<i class ="fa-solid fa-calendar-days" ></i>',
    },
  });
});
