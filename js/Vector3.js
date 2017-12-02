// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-01.

function Vector3()
{
    // Public interface
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    // Constructors
    if (arguments.length == 0)
    {
    }
    else if (arguments.length == 3 && !isNaN(arguments[0]) && !isNaN(arguments[1] && !isNaN(arguments[2])))
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.z = arguments[2];
    }
    else
    {
        throw "Invalid args";
    }
}
