import React from "react";
import { Slide } from "hero-slider";

export default function slideGenerate(input) {
    if (input === null) {
        input = []
    } else {
        let contents = [];
        for (const content of input) {
            let slide = <Slide className="background" background={{
                backgroundImage: content
            }}></Slide>
            contents.push(slide);
        }
        return contents
    }
}