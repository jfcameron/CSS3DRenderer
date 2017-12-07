// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-02.
"use strict";

define(
[
    "Engine/Debug",
    "Engine/Debug/Exceptions",
    "Engine/Graphics/GraphicsObject",
    "Engine/Math/Vector2",
    "Engine/Math/Vector3",
    "Engine/Graphics/Color",
    "Engine/Graphics/Colors"
], 
function(Debug, Exceptions, GraphicsObject, Vector2, Vector3, Color, Colors) 
{
    const TAG = "Quad";

    const Quad = function()
    {
        // Constructors
        if (arguments.length >= 2 && arguments.length <= 6)
        {
            const aPosition     = arguments[0];
            const aRotation     = arguments[1];
            const aScale        = typeof (arguments[2]) !== "undefined" ? arguments[2] : new Vector3(1,1,1);
            const aColor        = typeof (arguments[3]) !== "undefined" ? arguments[3] : Colors.DeathlyPink();
            const aBackfaceCull = typeof (arguments[4]) !== "boolean"   ? arguments[4] : false;
            const aChildNode    = typeof (arguments[5]) !== "undefined" ? arguments[5] : null;

                                    if (!(aPosition     instanceof Vector3))     throw Exceptions.Constructor;
                                    if (!(aRotation     instanceof Vector3))     throw Exceptions.Constructor;
                                    if (!(aScale        instanceof Vector3))     throw Exceptions.Constructor;
                                    if (!(aColor        instanceof Color))       throw Exceptions.Constructor;
                                    if (!(typeof(aBackfaceCull) === "boolean" )) throw Exceptions.Constructor;
            if (aChildNode != null) if (!(aChildNode    instanceof Node))        throw Exceptions.Constructor;

            GraphicsObject.call(this);
            
            const root  = this.GetRootDivHandle();
            const front = document.createElement("div");
    
            front.style.position        = "absolute";
            front.style.width           = 10 + "px";
            front.style.height          = 10 + "px";
            front.style.transform       = "translate3d(" + (-10/2) + "px," + (-10/2) + "px," + 0 + "px)";
            front.style.backgroundColor = "rgba(" + aColor.r + "," + aColor.g + "," + aColor.b +"," + aColor.a + ")";
            front.style.backgroundImage = "url('img/Awesome.png')";
            front.style.backgroundSize  = "contain";

            if (aBackfaceCull)
                front.style.backfaceVisibility = "hidden";
            
            root.appendChild(front);

            this.Update(aPosition, aRotation, aScale);

            if (aChildNode)
                front.appendChild(aChildNode);
        }
        else
        {
            throw Exceptions.Constructor;
        }

        // Extension rules
        Object.freeze(this);
    };

    Quad.prototype = Object.freeze(GraphicsObject.prototype);

    return Quad;
});
