// © 2017 Joseph Cameron - All Rights Reserved
// Project: CSS3DRenderer
// Created on 2017-12-01.
"use strict";

//Resources
import "index.html"
import "favicon.ico"
import "style.css"
import "Blocky.png"
import "Awesome.png"

//Eng inc
import Timer from "Engine/Time/Timer"
import Debug from "Engine/Debug"
import Input from "Engine/Input"
import Vector3 from "Engine/Math/Vector3"
import Vector2 from "Engine/Math/Vector2"
import Cube from "Engine/Graphics/Cube"
import Colors from "Engine/Graphics/Colors"
import Sprite from "Engine/Graphics/Sprite"
import Quad from "Engine/Graphics/Quad"

//App inc
import Player from "Player"
import NPC from "NPC"

const mySprite = Sprite.createSprite();

Debug.Log("SpriteTest: ", mySprite instanceof Node? true : false);

//const myPlayer = new Player();
const myNPC    = new NPC();

const mySceneGraph = document.getElementById("MyHardcodedSceneGraph");

const aPosition = new Vector3();
const aRotation = new Vector3();

const test = new Vector3(1,2,3);
Debug.Log("TEST", test, ", ", test.Length(), ", ", test.Normalize());

const mytest = new Vector3();
Debug.Log("CoolTest", mytest.test);

const myColor = Colors.DarkGreen();

const obj = new Object();
const vec = new Vector3(1,0,0);
console.log(vec);

const myTimer = new Timer(() =>
{
    //myPlayer.Update();

    myNPC.Update();

    /*mySceneGraph.style.transform = 
        "translate3d(" + aPosition.x + "vw," + aPosition.y + "vw," + aPosition.z + "vw) " + 
        "rotateX(" + aRotation.x + "deg) " + "rotateY(" + aRotation.y + "deg) " + "rotateZ(" + aRotation.z + "deg) ";*/
}, 16);
