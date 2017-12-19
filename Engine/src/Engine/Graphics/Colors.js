// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-03.
"use strict";

import Debug from "Engine/Debug"
import Exceptions from "Engine/Debug/Exceptions"
import Color from "Engine/Graphics/Color"

const TAG = "Colors";

const Colors = function()
{
    Object.freeze(this);
};
    
Colors.prototype.Black = Object.freeze(() =>
{
    return new Color(0, 0, 0, 1);
});

Colors.prototype.White = Object.freeze(() =>
{
    return new Color(255, 255, 255, 1);
});

Colors.prototype.Red = Object.freeze(() =>
{
    return new Color(255, 0, 0, 1);
});

Colors.prototype.Green = Object.freeze(() =>
{
    return new Color(0, 255, 0, 1);
});

Colors.prototype.DarkGreen = Object.freeze(() =>
{
    return new Color(0, 153, 0, 1);
});

Colors.prototype.Blue = Object.freeze(() =>
{
    return new Color(0, 0, 255, 1);
});

Colors.prototype.DeathlyPink = Object.freeze(() =>
{
    return new Color(255, 51, 204, 1);
});

Colors.prototype.CornflowerBlue = Object.freeze(() =>
{
    return new Color(100, 149, 237, 1);
});

Colors.prototype.Constants = Object.freeze(
{
    Black:          Object.freeze(Colors.prototype.Black()),
    White:          Object.freeze(Colors.prototype.White()),
    Red:            Object.freeze(Colors.prototype.Red()),
    Green:          Object.freeze(Colors.prototype.Green()),
    DarkGreen:      Object.freeze(Colors.prototype.DarkGreen()),
    Blue:           Object.freeze(Colors.prototype.Blue()),
    DeathlyPink:    Object.freeze(Colors.prototype.DeathlyPink()),
    CornflowerBlue: Object.freeze(Colors.prototype.CornflowerBlue())
});

Colors.prototype = Object.freeze(Colors.prototype);

export default new Colors();
