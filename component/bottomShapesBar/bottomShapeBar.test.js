import React from "react";
import {shallow} from "enzyme";

import BottomFancyBar from "./index";


describe("BottomFancyBar",()=>{

    describe("BottomFancyBar",()=>{
        let component ;

        beforeEach(()=>{
            component = shallow(<BottomFancyBar/>);
        });

        it("Should match to snapshot",()=>{
            expect(component).toMatchSnapshot("Name Bio");
        });

        it("Should Render all 4 Items",()=>{
            expect(component.find("[data-test='bottomBar']").length).toBe(4);
        });
    })
});