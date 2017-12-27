// © 2017 Joseph Cameron - All Rights Reserved
// Project: HTML53DRenderer
// Created on 2017-12-27.

import Debug from "Engine/Debug"
import Images from "Engine/Graphics/Images"
import Colors from "Engine/Graphics/Colors"

const PREFIX: string = "HTML53DRenderer_";

/**
* @description defines styles used throughout the project
*/
export module Style
{
    export module Class
    {
        export const Canvas: string   = PREFIX + "Canvas";
        export const Object3D: string = PREFIX + "Object3D";
        export const Quad: string     = PREFIX + "Quad";

        (() => 
        {
            let style: HTMLStyleElement = document.createElement("style");

            style.innerHTML = 
            `
            .${Object3D}, .${Canvas}, .${Quad}
            {
                position: absolute;
                transform-style: preserve-3d;
            }

            .${Canvas}
            {
                width: 100%;
                height: 100%;
                top: 0px;
            }

            .${Quad}
            {
                background-color: rgba(0, 0, 0, 0);
                background-image: url(${Images.CheckeredTextureOfDeath()});
                background-size: contain;
                overflow: auto;
            }
            `;
        
            document.body.appendChild(style);
        })();
    }
}

export default Style;
