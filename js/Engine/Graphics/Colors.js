// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-03.
"use strict";

define(
[
    "Engine/Debug",
    "Engine/Debug/Exceptions",
    "Engine/Graphics/Color"
], 
function(Debug, Exceptions, Color) 
{
    const TAG = "Colors";

    var Colors = function()
    {
    };

    Colors.prototype = Object.create(Object.prototype);

    Colors.prototype.toString = function() {return "{" + "Colors" + "}";}

    Colors.prototype.Black = function()
    {
        return new Color(0, 0, 0, 1);
    };

    Colors.prototype.White = function()
    {
        return new Color(255, 255, 255, 1);
    };

    Colors.prototype.Red = function()
    {
        return new Color(255, 0, 0, 1);
    };

    Colors.prototype.Green = function()
    {
        return new Color(0, 255, 0, 1);
    };

    Colors.prototype.DarkGreen = function()
    {
        return new Color(0, 153, 0, 1);
    };

    Colors.prototype.Blue = function()
    {
        return new Color(0, 0, 255, 1);
    };

    Colors.prototype.DeathlyPink = function()
    {
        return new Color(255, 51, 204, 1);
    };

    Colors.prototype.CornflowerBlue = function()
    {
        return new Color(100, 149, 237, 1);
    };

    Colors = new Colors();

    return Colors;
});
