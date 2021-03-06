// © 2017 Joseph Cameron - All Rights Reserved
// Project: HTML53DRenderer
// Created on 2017-12-21.

import Color from "Engine/Graphics/Color"

/**
* @description contains definitions for useful colors
*/
module Colors
{
    export const Black: Color     = Object.freeze(new Color(  0,   0,   0, 1));
    export const White: Color     = Object.freeze(new Color(255, 255, 255, 1));
    export const Red: Color       = Object.freeze(new Color(255,   0,   0, 1));
    export const Green: Color     = Object.freeze(new Color(  0, 255,   0, 1));
    export const DarkGreen: Color = Object.freeze(new Color(  0, 153,   0, 1));
    export const Blue: Color      = Object.freeze(new Color(  0,   0, 255, 1));

    /** 
    * @description Traditional error color; hard to miss if the intended asset failed to load.
    */
    export const DeathlyPink: Color    = Object.freeze(new Color(255,  51, 204, 1));
    
    /** 
    * @description Traditional clear color of XNA.
    */
    export const CornflowerBlue: Color = Object.freeze(new Color(100, 149, 237, 1));
}

export default Colors;
