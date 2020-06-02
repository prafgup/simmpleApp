import React from "react";
import {shallow} from "enzyme";

import AppBar from "./index";


describe("App Bar Profile",()=>{

    describe("App Bar",()=>{
        let component ;

        beforeEach(()=>{
            component = shallow(<AppBar/>);
        });

        it("Should match to snapshot",()=>{
            expect(component.instance()).toMatchSnapshot("Name Bio");
        });

        it("Should Render all Icons",()=>{
            expect(component.find("[data-test='appBar']").length).toBe(2);
        });
    })
});