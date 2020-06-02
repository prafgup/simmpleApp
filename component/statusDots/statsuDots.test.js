import React from "react";
import {shallow} from "enzyme";

import StatusDots from "./index";


describe("Status Dots",()=>{

    describe("Status Dots",()=>{
        let component ;

        beforeEach(()=>{
            component = shallow(<StatusDots/>);
        });

        it("Should match to snapshot",()=>{
            expect(component).toMatchSnapshot("Status Dots");
        });

        it("Should Render all 3 Dots",()=>{
            expect(component.find("[data-test='dots']").length).toBe(3);
        });
    })
});