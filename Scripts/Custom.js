$(document).ready(function () {
  $("#submit_btn").click(function () {
    var panelName = $(".tab-pane.active .hidden-tabname").val();
    var FORMPARAMS = $("#filter_form").serialize();
    $.ajax({
      url: "/AjaxEventPagination2/",
      type: "GET",
      data: $("#filter_form").serialize() + "&panelName=" + panelName,
      success: function (result) {
        var activeTab = $("#event-section");
        activeTab.empty();
        activeTab.append($.parseHTML(result));
        addtocalendar.load();
        $("html, body").animate(
          { scrollTop: $(".media-section").offset().top },
          1000
        );
        $(".pagination-item ").click(function (e) {
          e.stopPropagation();
          $(this)
            .closest(".pagination-wrapper")
            .find(".pagination-item")
            .removeClass("active");
          $(this).addClass("active");
          var page = $(this).text();
          var panelName = $(".tab-pane.active .hidden-tabname").val();
          $(".tab-pane.active .hidden-currentpage").attr("value", page);
          var data =
            $("#filter_form").serialize() +
            "&panelName=" +
            panelName +
            "&page=" +
            page;
          $.ajax({
            url: "/event_AjaxEventPagination/",
            type: "GET",
            data: data,
            success: function (result) {
              var activeTab = $(".tab-pane.active .single-panel-contents");
              activeTab.empty();
              activeTab.append($.parseHTML(result));
              addtocalendar.load();
              $("html, body").animate(
                { scrollTop: $(".media-section").offset().top },
                1000
              );
            },
            error: function (error) {
              console.log(error.responseText);
            },
          });
        });
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
  $(".filter-select-main").select2({ minimumResultsForSearch: -1 });
  $(".slider-wrap").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
});
$(".pub-slider").slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
$(".press-slider").slick({
  dots: true,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
$(".nav-bar ul li:has(ul)").addClass("submenu-ul");
$(".nav-bar ul li:has(ul)").append("<i></i>");
$(".nav-bar ul i").click(function () {});
$(".main-menu i").click(function () {
  $(this).closest(".main-menu").find(".sub-menu").slideToggle();
  var t = $(this).closest(".main-menu").find(".sub-menu");
  $(".sub-menu").not(t).slideUp();
});
$(document).ready(function () {
  $(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 120) {
      $(".main-header").addClass("sticky");
    } else {
      $(".main-header").removeClass("sticky");
    }
  });
});
