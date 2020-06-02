import React from "react";
import {shallow} from "enzyme";



import {
    NameBio,
    renderStatusIcon,
    renderFileUri,
    renderStatusColor,
    sketchAvatar,
    svgBuilder
} from "./component";



describe("Profile Top Page",()=>{

    describe("Name and Bio",()=>{
        let component ;

        beforeEach(()=>{
            component = shallow(NameBio());
        });

        it("Should match to snapshot",()=>{
            expect(component).toMatchSnapshot("Name Bio");
        });

        it("Should Render all Details",()=>{
            expect(component.find("[data-test='profileName']").length).toBe(1);
            expect(component.find("[data-test='profession']").length).toBe(1);
            expect(component.find("[data-test='website']").length).toBe(1);
        });
    })

    describe("Decagon Points ",()=>{
        it("Should return 10 points in string",()=>{
            const points = 10;
            const height =100;
            const component = sketchAvatar(height,points);
            expect(component).toMatchSnapshot("All Points");
            expect(component.split(",")).toHaveLength(points+1);
        });
    })

    describe("Should return correct Status Color",()=>{

        it("Should return white",()=>{
            const status = null;
            const component = renderStatusColor(status);
            expect(component).toMatchSnapshot("Status Null");
            expect(component).toBe("white");
        });
        it("Should return orange",()=>{
            const status = {
                statusSeen : false
            };
            const component = renderStatusColor(status);
            expect(component).toMatchSnapshot("Status Seen False");
            expect(component).toBe("orange");
        });
        it("Should return grey",()=>{
            const status = {
                statusSeen : true
            };
            const component = renderStatusColor(status);
            expect(component).toMatchSnapshot("Status Seen True");
            expect(component).toBe("grey");
        });
    })



    describe("Should Return Correct Floating Icon",()=>{
        it("Should Return Plus Sign",()=>{
            const status = {};
            const func = jest.fn();
            const component = shallow(renderStatusIcon(status,func));
            expect(component).toMatchSnapshot("Plus Sign");
            expect(component.find("[data-test='plus']").length).toBe(1);

            component.find("[data-test='plus']").first().props().onPress();
            expect(func).toHaveBeenCalled();

        });
        it("Should Return Three Dots",()=>{
            const status = {
                statusSeen: false
            };
            const func = jest.fn();
            const component = shallow(renderStatusIcon(status,func));
            expect(component).toMatchSnapshot("Three Dots");
            expect(component.find("[data-test='threeDot']").length).toBe(1);

            

        });
        it("Should Return Just View",()=>{
            const status = {
                statusSeen: true
            };
            const func = jest.fn();
            const component = shallow(renderStatusIcon(status,func));
            expect(component).toMatchSnapshot("View");
            
        });
    });

    describe("Image Render",()=>{
        it("Should Return Default",()=>{
            const uri = null;
            const component = shallow(renderFileUri(uri));
            expect(component).toMatchSnapshot("Default Image");
           

        });
        it("Should Return uriImage",()=>{
            const uri = "testUrl";
            const component = shallow(renderFileUri(uri));
            expect(component).toMatchSnapshot("User Image");

        });
    });

    describe("SVG Image Render",()=>{
        it("Should Match Snapshot",()=>{
            const component = shallow(svgBuilder(null,null));
            expect(component).toMatchSnapshot("Default Image");

        });
    });

});