import React from "react";
import {shallow} from "enzyme";

import AddStatusIcon from "./index";


describe("AddStatusIcon",()=>{

    describe("AddStatusIcon",()=>{
        let component ;

        beforeEach(()=>{
            component = shallow(<AddStatusIcon/>);
        });

        it("Should match to snapshot",()=>{
            expect(component).toMatchSnapshot("Add Status Icon");
        });

        it("Should Render all Plus Icon",()=>{
            expect(component.find("[data-test='icon']").length).toBe(1);
        });
        it("Should Render all Whole Container",()=>{
            expect(component.find("[data-test='statusAdd']").length).toBe(1);
        });
    })
});