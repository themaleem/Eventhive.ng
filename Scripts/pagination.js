$(document).ready(function () {
  $("body").on(
    "click",
    ".media-pgn .tab-pane.active .pagination-item",
    function () {
      $(this)
        .closest(".pagination-wrapper")
        .find(".pagination-item")
        .removeClass("active");
      $(this).addClass("active");
      var page = $(this).text();
      var panelName = $(".tab-pane.active .hidden-tabname").val();
      $(".tab-pane.active .hidden-currentpage").attr("value", page);
      var data = { panelName: panelName, page: page };
      $.ajax({
        url: "/temp_AjaxPagination/",
        type: "GET",
        data: data,
        success: function (result) {
          var activeTab = $(".tab-pane.active .single-tab-contents");
          activeTab.empty();
          activeTab.append(jQuery.parseHTML(result));
          $("html, body").animate(
            { scrollTop: $(".media-section").offset().top },
            1000
          );
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    }
  );
  $("body").on("click", "#allevents", function () {
    console.log("called");
    setTimeout(function () {
      $("div.pagination-wrapper ul>li").first().find("a").click();
    }, 300);
  });
});
