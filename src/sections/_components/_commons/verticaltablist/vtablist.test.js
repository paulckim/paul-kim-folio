import { create } from "react-test-renderer";
import React from "react";
import VTabList from "./index";

describe("/sections/component/_commons/VTabListTestSuite", () => {

  describe("VTabListSnapshotTestSuite", () => {
    it("empty-vtablist-component-test", () => {
      const domRenderer = create(<VTabList />);
      // assert root html element default:
      const actualSpanEle = domRenderer.toJSON();
      expect(actualSpanEle.type).toBe("span"); // expect root element to be list item
      expect(actualSpanEle.props.className).toBe("col v-tab-list-wrapper");
      // assert expected number of child elements:
      const { children } = actualSpanEle;
      expect(children.length).toBe(1);
      // assert child html element default:
      const actualUnorderedListEle = children[0];
      expect(actualUnorderedListEle.type).toBe("ul");
      expect(actualUnorderedListEle.props.className).toBe("v-tab-list");
      expect(actualUnorderedListEle.children).toBeNull();
    });
  });
  
});
