import PIXI from 'pixi.js'

//Create the renderer
const renderer = PIXI.autoDetectRenderer(800, 600);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
const stage = new PIXI.Container();


let style = {
    font : 'bold italic 36px Arial',
    fill : '#F7EDCA',
    stroke : '#4a1850',
    strokeThickness : 5,
    dropShadow : true,
    dropShadowColor : '#000000',
    dropShadowAngle : Math.PI / 6,
    dropShadowDistance : 6,
    wordWrap : true,
    wordWrapWidth : 440
};

const basicText = new PIXI.Text('It is working !!', style);
basicText.x = 30;
basicText.y = 90;

stage.addChild(basicText);

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
