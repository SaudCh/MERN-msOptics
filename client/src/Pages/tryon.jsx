import React from "react";

export default function Tryon({ product }) {
  return (
    <div class="try__on__overlay">
      <div class="overlay_try_on"></div>
      <div class="content try_on_container">
        <div id="JeelizVTOWidget">
          <canvas id="JeelizVTOWidgetCanvas"></canvas>
          <div class="JeelizVTOWidgetControls JeelizVTOWidgetControlsTop">
            <button id="JeelizVTOWidgetAdjust">
              <div class="buttonIcon">
                <i class="fas fa-arrows-alt"></i>
              </div>
              Adjust
            </button>
            <button id="buttonResizeCanvas" onclick="test_resizeCanvas();">
              <div class="buttonIcon">
                <i class="fas fa-sync-alt"></i>
              </div>
              Resize
            </button>
          </div>
          <div
            class="JeelizVTOWidgetControls"
            id="JeelizVTOWidgetChangeModelContainer"
          >
            {product?.virualsTrys
              ? product.virualsTrys[0]?.virtualsObject
                ? product.virualsTrys[0].virtualsObject.map((v) => (
                    <button
                      data-ver="<%= v}"
                      class="ver__btn"
                      onclick="JEELIZVTOWIDGET.load_modelStandalone('/img/tryon/<%= v}')"
                    >
                      Model
                    </button>
                  ))
                : null
              : null}
          </div>
          <div id="JeelizVTOWidgetAdjustNotice">
            Move the glasses to adjust them. and scroll to resize them
            <button
              class="JeelizVTOWidgetBottomButton"
              id="JeelizVTOWidgetAdjustExit"
            >
              Quit
            </button>
          </div>
        </div>
        {/* <a class="close_try_on" href="#">
          <span class="material-icons">close</span>
        </a> */}
      </div>
    </div>
  );
}
