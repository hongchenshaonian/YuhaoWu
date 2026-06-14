$(document).ready(function() {
  var protectedViewer = {
    modal: null,
    image: null,
    active: false,
    insideProtectedArea: false,
    warningTimer: null
  };

  var showScreenshotWatermark = function() {
    $("body").addClass("protected-screenshot-warning");
    window.clearTimeout(protectedViewer.warningTimer);
    protectedViewer.warningTimer = window.setTimeout(function() {
      $("body").removeClass("protected-screenshot-warning");
    }, 2200);
  };

  var isProtectedTarget = function(target) {
    return $(target).closest(".protected-figure, .protected-image-modal").length > 0;
  };

  var closeProtectedViewer = function() {
    if (!protectedViewer.modal) {
      return;
    }
    protectedViewer.modal.removeClass("is-open").attr("aria-hidden", "true");
    protectedViewer.image.attr("src", "").attr("alt", "");
    protectedViewer.active = false;
    $("body").removeClass("protected-image-open");
  };

  var openProtectedViewer = function(image) {
    if (!protectedViewer.modal) {
      protectedViewer.modal = $(
        '<div class="protected-image-modal" role="dialog" aria-modal="true" aria-hidden="true">' +
          '<div class="protected-image-dialog">' +
            '<button type="button" class="protected-image-close" aria-label="Close image preview">&times;</button>' +
            '<div class="protected-image-stage">' +
              '<img draggable="false" alt="">' +
            '</div>' +
          '</div>' +
        '</div>'
      );
      protectedViewer.image = protectedViewer.modal.find("img");
      $("body").append(protectedViewer.modal);

      protectedViewer.modal.on("click", function(event) {
        if ($(event.target).is(".protected-image-modal, .protected-image-stage")) {
          closeProtectedViewer();
        }
      });
      protectedViewer.modal.find(".protected-image-close").on("click", closeProtectedViewer);
      protectedViewer.modal.on("contextmenu dragstart selectstart copy cut", function(event) {
        event.preventDefault();
        showScreenshotWatermark();
      });
    }

    protectedViewer.image
      .attr("src", image.currentSrc || image.src)
      .attr("alt", image.alt || "Protected research image");
    protectedViewer.modal.addClass("is-open").attr("aria-hidden", "false");
    protectedViewer.active = true;
    $("body").addClass("protected-image-open");
    protectedViewer.modal.find(".protected-image-close").focus();
  };

  $(".paper-box-image img").each(function() {
    var image = this;
    var figure = $(image).closest(".paper-box-image");
    figure
      .addClass("protected-figure")
      .attr("role", "button")
      .attr("tabindex", "0")
      .attr("aria-label", "View protected high-resolution image");
    $(image)
      .attr("draggable", "false")
      .attr("loading", "lazy")
      .attr("decoding", "async");
  });

  $(".paper-box-image.protected-figure")
    .on("mouseenter focusin", function() {
      protectedViewer.insideProtectedArea = true;
    })
    .on("mouseleave focusout", function() {
      protectedViewer.insideProtectedArea = false;
    })
    .on("click", function() {
      var image = $(this).find("img").get(0);
      if (image) {
        openProtectedViewer(image);
      }
    })
    .on("keydown", function(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        var image = $(this).find("img").get(0);
        if (image) {
          openProtectedViewer(image);
        }
      }
    })
    .on("contextmenu dragstart selectstart copy cut", function(event) {
      event.preventDefault();
      showScreenshotWatermark();
    });

  $(document).on("contextmenu dragstart selectstart copy cut", function(event) {
    if (isProtectedTarget(event.target)) {
      event.preventDefault();
      showScreenshotWatermark();
    }
  });

  $(document).on("keydown", function(event) {
    var key = (event.key || "").toLowerCase();
    var protectingImage = protectedViewer.active || protectedViewer.insideProtectedArea || isProtectedTarget(event.target);
    if (!protectingImage) {
      return;
    }

    if (key === "escape" && protectedViewer.active) {
      closeProtectedViewer();
      return;
    }

    if (
      key === "printscreen" ||
      (event.ctrlKey && ["s", "p", "c", "u"].indexOf(key) !== -1) ||
      (event.metaKey && ["s", "p", "c"].indexOf(key) !== -1)
    ) {
      event.preventDefault();
      showScreenshotWatermark();
    }
  });
});
