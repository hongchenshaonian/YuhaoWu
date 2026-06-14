$(document).ready(function() {
  var protectedViewer = {
    modal: null,
    image: null,
    active: false,
    insideProtectedArea: false,
    warningLayer: null,
    warningTimer: null
  };

  var watermarkText = "Yuhaowu.com Preview Only";

  var watermarkPositions = [
    [26, 18], [50, 18], [74, 18],
    [26, 34], [50, 34], [74, 34],
    [26, 50], [50, 50], [74, 50],
    [26, 66], [50, 66], [74, 66],
    [26, 82], [50, 82], [74, 82]
  ];
  var warningWatermarkPositions = [
    [38, 26], [62, 26],
    [38, 42], [62, 42],
    [38, 58], [62, 58],
    [38, 74], [62, 74]
  ];

  var createWatermarkLayer = function(extraClass, positions) {
    var layer = $('<div class="protected-watermark ' + extraClass + '" aria-hidden="true"></div>');
    for (var i = 0; i < positions.length; i += 1) {
      layer.append(
        $("<span></span>")
          .text(watermarkText)
          .attr("style", "--wm-x: " + positions[i][0] + "%; --wm-y: " + positions[i][1] + "%;")
      );
    }
    return layer;
  };

  var showScreenshotWatermark = function() {
    if (!protectedViewer.warningLayer) {
      return;
    }
    protectedViewer.warningLayer.addClass("is-visible");
    window.clearTimeout(protectedViewer.warningTimer);
    protectedViewer.warningTimer = window.setTimeout(function() {
      protectedViewer.warningLayer.removeClass("is-visible");
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
    if (protectedViewer.warningLayer) {
      protectedViewer.warningLayer.removeClass("is-visible");
    }
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
      protectedViewer.modal.find(".protected-image-stage")
        .append(createWatermarkLayer("protected-watermark-main", watermarkPositions))
        .append(createWatermarkLayer("protected-watermark-warning", warningWatermarkPositions));
      protectedViewer.warningLayer = protectedViewer.modal.find(".protected-watermark-warning");
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

    var fullSource = $(image).attr("data-full-src") || image.currentSrc || image.src;
    protectedViewer.image
      .attr("src", fullSource)
      .attr("alt", image.alt || "Protected research image");
    protectedViewer.modal.addClass("is-open").attr("aria-hidden", "false");
    protectedViewer.active = true;
    $("body").addClass("protected-image-open");
    protectedViewer.modal.find(".protected-image-close").focus();
  };

  var openFigureImage = function(figure) {
    var image = $(figure).find("img").get(0);
    if (image) {
      openProtectedViewer(image);
    }
  };

  document.addEventListener("contextmenu", function(event) {
    var figure = $(event.target).closest(".protected-figure").get(0);
    if (!figure || $(event.target).closest(".protected-image-modal").length) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
    openFigureImage(figure);
  }, true);

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
      openFigureImage(this);
    })
    .on("keydown", function(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openFigureImage(this);
      }
    })
    .on("contextmenu", function(event) {
      event.preventDefault();
      event.stopPropagation();
      openFigureImage(this);
    })
    .on("dragstart selectstart copy cut", function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

  $(document).on("contextmenu dragstart selectstart copy cut", function(event) {
    if (protectedViewer.active && isProtectedTarget(event.target)) {
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

    var protectedShortcut =
      key === "printscreen" ||
      (event.ctrlKey && ["s", "p", "c", "u"].indexOf(key) !== -1) ||
      (event.metaKey && ["s", "p", "c"].indexOf(key) !== -1);

    if (protectedShortcut) {
      event.preventDefault();
      if (protectedViewer.active) {
        showScreenshotWatermark();
      }
    }
  });
});
