/**
 * @author Paul Cheor Kim
 * @fileoverview A Higher Order Component for wrapping unique Components and representing them as Sections.
 */
import React from "react";

/**
 * 
 * @param {number} index 
 * @param {string} img 
 * @param {class} Component 
 */
export default function Section(index, img, Component) {
  return(
    <div key={index} style={img} className="swiper-slide autoscale-img">
      <div className="faded-layer-b">
        {!Component ? null : <Component />}
      </div>
    </div>
  );
}
