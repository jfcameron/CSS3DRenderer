// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-01.
"use strict";

import Exceptions from "Engine/Debug/Exceptions"

const TAG = "Debug";

const Debug = function()
{
    Object.freeze(this);
}

Debug.prototype.Log = Object.freeze(function(aTag)
{
    if (typeof(aTag) !== 'string') throw Exceptions.BadArgument;

    let stringBuffer = "D/" + aTag + ": ";

    [].shift.call(arguments);

    for (const arg of arguments)
        stringBuffer += arg;
    
    console.log(stringBuffer);
});

Debug.prototype.Error = Object.freeze(function(aTag)
{
    if (typeof(aTag) !== 'string') throw Exceptions.BadArgument;

    let stringBuffer = "E/" + aTag + ": ";

    [].shift.call(arguments);
    
    for (const arg of arguments)
        stringBuffer += arg;
        
    console.log(stringBuffer);
});

export default new Debug();