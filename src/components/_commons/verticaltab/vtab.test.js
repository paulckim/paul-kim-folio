import { create } from "react-test-renderer";
import React from "react";
import VTab from "./index";

describe("/sections/component/_commons/VTabTestSuite", () => {

  describe("VTabSnapshotTestSuite", () => {
    it("empty-vtab-component-test", () => {
      const domRenderer = create(<VTab />);
      // assert root html element default:
      const actualLiEle = domRenderer.toJSON();
      expect(actualLiEle.type).toBe("li"); // expect root element to be list item
      expect(actualLiEle.props.className).toBe("vtab-style valign-wrapper");
      // assert expected number of child elements:
      const { children } = actualLiEle;
      expect(children.length).toBe(1);
      // assert child html element default:
      const actualIconEle = children[0];
      expect(actualIconEle.type).toBe("i");
      expect(actualIconEle.props.className).toBe("small material-icons");
      expect(actualIconEle.children).toBeNull();
    });
  });
  
});
