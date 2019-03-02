import { create } from "react-test-renderer";
import React from "react";
import VTabList from "./index";

describe("/sections/component/_commons/VTabContentTestSuite", () => {

  describe("VTabContentSnapshotTestSuite", () => {
    it("empty-vtabcontent-component-test", () => {
      const domRenderer = create(<VTabList />);
      // assert root html element default:
      const actualDivEle = domRenderer.toJSON();
      expect(actualDivEle.type).toBe("div"); // expect root element to be div
      expect(actualDivEle.props.className).toBe("col s10 v-tab-content");
      // vertical tab contents should be extremely customizable
      expect(actualDivEle.children).toBeNull(); // hence, it should be null
    });
  });
  
});
