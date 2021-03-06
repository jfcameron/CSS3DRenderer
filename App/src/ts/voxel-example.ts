// © 2017 Joseph Cameron - All Rights Reserved
// Project: HTML53DRenderer
// Created on 2017-12-20.
// Gamepad controls are setup for an XBOX360 controller

// Resources inc
import "Awesome.png"
import "Blocky.png"
import "brick.png"
import "favicon.ico"
import "index.html"
import "style.css"

// Engine inc
import IntervalTimer from "Engine/Time/IntervalTimer"
import AnimationTimer from "Engine/Time/AnimationTimer"
import IdleTimer from "Engine/Time/IdleTimer"
import Debug from "Engine/Debug"
import Exceptions from "Engine/Debug/Exceptions"
import Vector2 from "Engine/Math/Vector2"
import Vector3 from "Engine/Math/Vector3"
import Color from "Engine/Graphics/Color"
import Colors from "Engine/Graphics/Colors"
import GraphicsObject from "Engine/Graphics/GraphicsObject"
import Shapes from "Engine/Graphics/Shapes"
import Sprite from "Engine/Graphics/Sprite"
import Keyboard from "Engine/Input/Keyboard"
import Mouse from "Engine/Input/Mouse"
import Gamepads from "Engine/Input/Gamepads"
import Camera from "Engine/Graphics/Camera"
import Scenegraph from "Engine/Graphics/Scenegraph"

// Adhoc
import API from "./apiTests"

const TAG: string = "Main";

const gfxscenegraph = new Scenegraph();
const gfxCamera = new Camera(document.body, gfxscenegraph);

const pos = new Vector3();
const rot = new Vector3(-30,0,0);
const sca = new Vector3(500,500,500);

const voxdat = 
[
    [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [0,1,0,0,0,1,0],
        [0,1,0,0,0,1,0],
        [0,1,0,0,0,1,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,1,1,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,1,0,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,1,1,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0],
        [0,1,0,0,0,1,0],
        [0,1,0,0,0,1,0],
        [0,1,0,0,0,1,0],
        [0,1,1,1,1,1,0],
        [1,1,1,1,1,1,1],
    ],

    [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1],
    ],
];

const gfxobj = new GraphicsObject(Shapes.VoxelField(voxdat,Shapes.VoxelFieldOrientation.Vertical,(aThisVoxel: {x: number, y: number, z: number, value: number}, aNeighbourData: {north: number, south: number, east: number, west: number, up: number, down: number}): Array<HTMLDivElement> =>
{
    const north = aNeighbourData.north === undefined ? true : aNeighbourData.north === 0;
    const south = aNeighbourData.south === undefined ? true : aNeighbourData.south === 0;
    const east  = aNeighbourData.east  === undefined ? true : aNeighbourData.east  === 0;
    const west  = aNeighbourData.west  === undefined ? true : aNeighbourData.west  === 0;
    const up    = aNeighbourData.up    === undefined ? true : aNeighbourData.up    === 0;
    const down  = aNeighbourData.down  === undefined ? true : aNeighbourData.down  === 0;

    const voxel = Shapes.Voxel(new Vector3(0,0,0), new Vector3(0,0,0), new Vector3(1,1,1), north, south, east, west, up, down);

    for (const face of voxel)
        face.style.backgroundImage = aNeighbourData.down === undefined ? "url(img/grass.png)" : "url(img/brick.png)";

    return voxel;
}),
gfxscenegraph,pos,rot,sca);

const tspeed = 5;
const rspeed = 0.25;

pos.z = -6000;

const mainLoop = new IntervalTimer(16,(aDeltaTime: number) =>
{
    if (Keyboard.getKey("KeyA")) rot.y += rspeed * aDeltaTime;
    if (Keyboard.getKey("KeyD")) rot.y -= rspeed * aDeltaTime;
    if (Keyboard.getKey("KeyW")) rot.x -= rspeed * aDeltaTime;
    if (Keyboard.getKey("KeyS")) rot.x += rspeed * aDeltaTime;

    if (Keyboard.getKey("ArrowUp"))    pos.z += tspeed * aDeltaTime;
    if (Keyboard.getKey("ArrowDown"))  pos.z -= tspeed * aDeltaTime;
    if (Keyboard.getKey("ArrowLeft"))  pos.x += tspeed * aDeltaTime;
    if (Keyboard.getKey("ArrowRight")) pos.x -= tspeed * aDeltaTime;

    pos.x += Gamepads.get(0).getAxis(0) * aDeltaTime * 2;
    pos.y += Gamepads.get(0).getAxis(1) * aDeltaTime * 2;
    rot.y += Gamepads.get(0).getAxis(2) * aDeltaTime * 0.25;
    rot.x += Gamepads.get(0).getAxis(3) * aDeltaTime * 0.25;

    pos.z += Gamepads.get(0).getButton(6) * 8 * aDeltaTime;
    pos.z -= Gamepads.get(0).getButton(7) * 8 * aDeltaTime;

    rot.y += 1;
});

const renderLoop = new AnimationTimer((aDeltaTime: number) =>
{
    gfxobj.draw(pos,rot,sca);
});
