const parent = document.getElementById('main')
const unitsPerWidth = 160
const unitsPerHeight = 90
const wordRatio = 3
//const navBar = document.getElementById('navbar')
//const scale = 0.7
const types = {
    VISIBLE: 'VISIBLE',
    HIDDEN: 'HIDDEN',
    SENTENCE: 'SENTENCE'
}

const colors = [
    "red",
    "green",
    "blue",
    "pink"
]
const apiData = {
    node: {
        type: types.SENTENCE,
        sentence: [
            {
                text: 'electricity',
                type: types.HIDDEN,
                url: 'assets/elec1/electricity.png',
            },
            {
                text: '1',
                type: types.HIDDEN,
                url: 'assets/elec1/1.png',
            }
        ],
        children: [
            {
                type: types.SENTENCE,
                sentence: [
                    {
                        text: 'Electric',
                        type: types.VISIBLE
                    },
                    {
                        text: 'current',
                        type: types.HIDDEN,
                        url: 'assets/elec1/current.png',
                    },
                    {
                        text: '=',
                        type: types.VISIBLE
                    },
                    {
                        text: 'When',
                        type: types.VISIBLE
                    },
                    {
                        text: 'electrons',
                        type: types.HIDDEN,
                        url: 'assets/elec1/electron.png',
                    },
                    {
                        text: 'flow',
                        type: types.VISIBLE
                    },
                    {
                        text: 'along',
                        type: types.VISIBLE
                    },
                    {
                        text: 'a',
                        type: types.VISIBLE
                    },
                    {
                        text: 'wire',
                        type: types.HIDDEN,
                        url: 'assets/elec1/wire.png',
                    },
                ],
                children: [
                    {
                        type: types.SENTENCE,
                        sentence: [
                            {
                                text: 'Electric',
                                type: types.VISIBLE
                            },
                            {
                                text: 'current',
                                type: types.HIDDEN,
                                url: 'assets/elec1/current.png',
                            },
                            {
                                text: '=',
                                type: types.VISIBLE
                            },
                            {
                                text: 'When',
                                type: types.VISIBLE
                            },
                            {
                                text: 'electrons',
                                type: types.HIDDEN,
                                url: 'assets/elec1/electron.png',
                            },
                            {
                                text: 'flow',
                                type: types.VISIBLE
                            },
                            {
                                text: 'along',
                                type: types.VISIBLE
                            },
                            {
                                text: 'a',
                                type: types.VISIBLE
                            },
                            {
                                text: 'wire',
                                type: types.HIDDEN,
                                url: 'assets/elec1/wire.png',
                            },
                        ],
                        children: [
                            {
                                type: types.SENTENCE,
                                sentence: [
                                    {
                                        text: 'Electric',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'current',
                                        type: types.HIDDEN,
                                        url: 'assets/elec1/current.png',
                                    },
                                    {
                                        text: '=',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'When',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'electrons',
                                        type: types.HIDDEN,
                                        url: 'assets/elec1/electron.png',
                                    },
                                    {
                                        text: 'flow',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'along',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'a',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'wire',
                                        type: types.HIDDEN,
                                        url: 'assets/elec1/wire.png',
                                    },
                                ]
                            },
                            {
                                type: types.SENTENCE,
                                sentence: [
                                    {
                                        text: 'The',
                                        type: types.VISIBLE,
                                    },
                                    {
                                        text: 'wire',
                                        type: types.VISIBLE,
                                    },
                                    {
                                        text: 'thickness',
                                        type: types.HIDDEN
                                    },
                                    {
                                        text: 'can',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'resist',
                                        type: types.HIDDEN
                                    },
                                    {
                                        text: 'current',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'flow',
                                        type: types.VISIBLE
                                    }
                                ],
                            },
                            {
                                type: types.SENTENCE,
                                sentence: [
                                    {
                                        text: 'The',
                                        type: types.VISIBLE,
                                    },
                                    {
                                        text: 'number',
                                        type: types.VISIBLE,
                                    },
                                    {
                                        text: 'of',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'electrons',
                                        type: types.HIDDEN
                                    },
                                    {
                                        text: 'effects',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'resistance',
                                        type: types.HIDDEN
                                    },
                                ],
                            },
                            {
                                type: types.SENTENCE,
                                sentence: [
                                    {
                                        text: 'An',
                                        type: types.VISIBLE,
                                    },
                                    {
                                        text: 'open',
                                        type: types.HIDDEN,
                                    },
                                    {
                                        text: 'switch',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'breaks',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'the',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'electric',
                                        type: types.VISIBLE
                                    },
                                    {
                                        text: 'current',
                                        type: types.VISIBLE
                                    },
                                ],
                            },
                        ]
                    },
                    {
                        type: types.SENTENCE,
                        sentence: [
                            {
                                text: 'The',
                                type: types.VISIBLE,
                            },
                            {
                                text: 'wire',
                                type: types.VISIBLE,
                            },
                            {
                                text: 'thickness',
                                type: types.HIDDEN
                            },
                            {
                                text: 'can',
                                type: types.VISIBLE
                            },
                            {
                                text: 'resist',
                                type: types.HIDDEN
                            },
                            {
                                text: 'current',
                                type: types.VISIBLE
                            },
                            {
                                text: 'flow',
                                type: types.VISIBLE
                            }
                        ],
                    },
                    {
                        type: types.SENTENCE,
                        sentence: [
                            {
                                text: 'The',
                                type: types.VISIBLE,
                            },
                            {
                                text: 'number',
                                type: types.VISIBLE,
                            },
                            {
                                text: 'of',
                                type: types.VISIBLE
                            },
                            {
                                text: 'electrons',
                                type: types.HIDDEN
                            },
                            {
                                text: 'effects',
                                type: types.VISIBLE
                            },
                            {
                                text: 'resistance',
                                type: types.HIDDEN
                            },
                        ],
                    },
                    {
                        type: types.SENTENCE,
                        sentence: [
                            {
                                text: 'An',
                                type: types.VISIBLE,
                            },
                            {
                                text: 'open',
                                type: types.HIDDEN,
                            },
                            {
                                text: 'switch',
                                type: types.VISIBLE
                            },
                            {
                                text: 'breaks',
                                type: types.VISIBLE
                            },
                            {
                                text: 'the',
                                type: types.VISIBLE
                            },
                            {
                                text: 'electric',
                                type: types.VISIBLE
                            },
                            {
                                text: 'current',
                                type: types.VISIBLE
                            },
                        ],
                    },
                ]
            },
            {
                type: types.SENTENCE,
                sentence: [
                    {
                        text: 'The',
                        type: types.VISIBLE,
                    },
                    {
                        text: 'wire',
                        type: types.VISIBLE,
                    },
                    {
                        text: 'thickness',
                        type: types.HIDDEN
                    },
                    {
                        text: 'can',
                        type: types.VISIBLE
                    },
                    {
                        text: 'resist',
                        type: types.HIDDEN
                    },
                    {
                        text: 'current',
                        type: types.VISIBLE
                    },
                    {
                        text: 'flow',
                        type: types.VISIBLE
                    }
                ],
            },
            {
                type: types.SENTENCE,
                sentence: [
                    {
                        text: 'The',
                        type: types.VISIBLE,
                    },
                    {
                        text: 'number',
                        type: types.VISIBLE,
                    },
                    {
                        text: 'of',
                        type: types.VISIBLE
                    },
                    {
                        text: 'electrons',
                        type: types.HIDDEN
                    },
                    {
                        text: 'effects',
                        type: types.VISIBLE
                    },
                    {
                        text: 'resistance',
                        type: types.HIDDEN
                    },
                ],
            },
            {
                type: types.SENTENCE,
                sentence: [
                    {
                        text: 'An',
                        type: types.VISIBLE,
                    },
                    {
                        text: 'open',
                        type: types.HIDDEN,
                    },
                    {
                        text: 'switch',
                        type: types.VISIBLE
                    },
                    {
                        text: 'breaks',
                        type: types.VISIBLE
                    },
                    {
                        text: 'the',
                        type: types.VISIBLE
                    },
                    {
                        text: 'electric',
                        type: types.VISIBLE
                    },
                    {
                        text: 'current',
                        type: types.VISIBLE
                    },
                ],
            },
        ]
    }
}

//let windowWidth = window.innerWidth
windowHeight= window.innerHeight
unitSize = windowWidth / unitsPerWidth

//Elements
let aspetRatioDiv;

//Classes
class Mindmap{
    constructor(parentDiv, data, scale){
        this.parentDiv = parentDiv
        this.sourceOfTruth = data
        this.workingData = data
        this.scale = scale
    }
    draw(){
        console.log("this.parentDiv", this.parentDiv)
        console.log("this.sourceOfTruth", this.sourceOfTruth)
        console.log("this.workingData", this.workingData)
        console.log("this.scale", this.scale)
    }
}

//Functions
function resizeCanvas() {
    

    //const isLandscape = window.innerWidth > window.innerHeight;

    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    unitSize = windowWidth / unitsPerWidth



    // Call your drawing function here or redraw content
    reRender(); // Replace with your drawing function
}
// function extractChildren(node, flattenedData, level){
//     node.level = level
//     flattenedData.push(node)
//     const children = (node && node.children) || null
//     if(!children) return

//     for(let i = 0; i < children.length; i++){
//         const grandChildren = (children && children[i] && children[i].children) || null
//         if(grandChildren){
//             extractChildren(children[i], flattenedData, level + 1)
//         }
//         children[i].level = level + 1
//         flattenedData.push(children[i])
//     }

// }
function flattenData(data){
    const flattenedData = []
    function modelNode(text, type, sentence, level){
        return {
            text,
            type,
            sentence,
            level,
            
        }
    }
    function flattenChildren(unflattened, flattenedData, parentLevel){
        for(let i = 0; i < unflattened.length; i++){
            const childText = unflattened[i].text
            const childType = unflattened[i].type
            const childLevel = parentLevel + 1
            const childSentence = unflattened[i].sentence
            const currentChild = modelNode(childText, childType, childSentence, childLevel)
            flattenedData.push(currentChild)

            const grandChildren = (unflattened && unflattened[i] && unflattened[i].children) || null
            if(grandChildren){
                flattenChildren(grandChildren, flattenedData, childLevel)
            }
        }
    }
    const text = (data && data.node && data.node.text) || null
    const type = (data && data.node && data.node.type) || null
    const sentence = (data && data.node && data.node.sentence) || null
    const startLevel = 0

    flattenedData.push(modelNode(text, type, sentence, startLevel))

    const unflatenedChildren = (data && data.node && data.node.children) || null
    if(!unflatenedChildren) alert('error111')
    flattenChildren(unflatenedChildren, flattenedData, startLevel)
    return flattenedData
}

const sourceOfTruth = flattenData(apiData)


function measureWord(word, scale){
    let lenth = word.length * (unitSize * wordRatio)
    if(lenth < unitSize * wordRatio * 3){
        lenth = unitSize * wordRatio * 3
    }

    return lenth * scale
}
function measureSentence(sentence, scale){
    let width = 0
    for(let i = 0; i < sentence.length; i++){
        width = width + measureWord(sentence[i].text, scale)
    }
    return width
}
function calcInputHeight(scale){
    return unitSize * 3 * wordRatio * scale
}
function calcDims(node, scale){
    const type = node.type
    
    switch(type){
        case types.SENTENCE:
            const sentence = (node && node.sentence) || null
            if(!sentence) return 0
            
            const sentenceWidth = measureSentence(sentence, scale)
            const paddings = (unitSize * 1) + ((sentence.length * unitSize) * 2)
            const gaps = sentence.length * unitSize
            const divWidth = sentenceWidth + paddings + gaps

            

            const inputHeight = calcInputHeight(scale)
            const divHeight = inputHeight + (unitSize * 4)
            return{
                width: divWidth * scale,
                height: divHeight * scale
            }
        default:
            return 0
    }
}
function drawNode(parentNode, data, scale){
    const sentence = (data && data.sentence) || null
    if(!sentence) return

    for(let i = 0; i < sentence.length; i++){
        const newNode = document.createElement('div')
        newNode.style.marginLeft = (unitSize * scale) + 'px'
        newNode.style.marginTop = (unitSize * scale) + 'px'
        newNode.style.padding = (unitSize * scale) + 'px'
        const type = sentence[i].type
        
        if(type === types.HIDDEN){
            // newNode.innerText = sentence[i].text
        }else{
            newNode.innerText = sentence[i].text
        }
    
        const url = (sentence[i] && sentence[i].url) || null
        if(url){
            const imageWrapper = document.createElement('div')
            imageWrapper.style.width =(calcInputHeight(scale) * scale) + (unitSize * 4 * scale) + 'px'
            imageWrapper.style.height = (calcInputHeight(scale) * scale) + (unitSize * 4 * scale) + 'px'
            imageWrapper.style.backgroundColor = 'blue'
            imageWrapper.style.position = 'absolute'
            imageWrapper.style.borderRadius = '50%'
            imageWrapper.style.top = ((calcInputHeight(scale) * scale) + (unitSize * 2 * scale)) * -1 + 'px'
            const image = document.createElement('img')
            image.src = url
            image.style.width = '100%'
            imageWrapper.append(image)
            newNode.append(imageWrapper)
        }

        newNode.style.width = parseFloat(measureWord(sentence[i].text, scale)) * scale + 'px'
        newNode.style.height = calcInputHeight(scale) * scale + 'px'
        newNode.style.fontSize = ((unitSize* scale) * wordRatio * (scale * 2)) + 'px'
        newNode.style.textAlign = 'center'
        newNode.style.display = 'flex'
        newNode.style.alignItems = 'center'
        newNode.style.justifyContent = 'center'
        newNode.style.backgroundColor = 'white'
        newNode.style.borderRadius = ((unitSize * wordRatio * 2)* scale) + 'px'
        parentNode.append(newNode)
    }
}
function drawNodes(parentNode, mindmapData, scale){
    let currentY = 400
    let currentX = 0
    let padding = unitSize * 2
    currentY += padding
    let nodeY = ((calcInputHeight(scale) + (unitSize * 4)) * 1 * scale) + 100
    for(let i = 0; i < mindmapData.length; i++){
        
        currentX = (mindmapData[i].level * (unitSize * 10) * scale) + 50
        const newNode = document.createElement('div')
        newNode.style.backgroundColor = colors[mindmapData[i].level]
        newNode.style.position = 'absolute'
        newNode.style.display = 'flex'
        //newNode.style.paddingRight = unitSize + 'px'
        const nodeDims = calcDims(mindmapData[i], scale)
        mindmapData[i].dims = nodeDims
        drawNode(newNode, mindmapData[i], scale)
        //nodeY = nodeY + nodeDims.width
        newNode.style.left = (currentX  * scale) + 'px'
        newNode.style.top = (nodeY) + 'px'
        nodeY = nodeY + (calcInputHeight(scale) + (unitSize * 4)) * 2 * scale
        newNode.style.width = (nodeDims.width) + 'px'
        newNode.style.height = (nodeDims.height) + 'px'
        newNode.style.borderRadius = (unitSize * wordRatio * 2.5) * scale + 'px'
        parentNode.append(newNode)

    }
}

function drawAspectRatioDiv(){
    aspetRatioDiv = document.createElement('div')
    aspetRatioDiv.style.width = '100%'
    aspetRatioDiv.style.height = '100%'
    aspetRatioDiv.style.backgroundColor = 'green'
    //aspetRatioDiv.style.overflow = 'hidden'
    //aspetRatioDiv.style.backgroundColor= 'rgb(45,45,45)'
    parent.append(aspetRatioDiv)
}
function reRender(){
    drawAspectRatioDiv()
    
    drawNodes(aspetRatioDiv, sourceOfTruth, 0.7)
    // drawNodes(navBar, sourceOfTruth, 0.2)
}

//Flatten the data without settingf dims


//
resizeCanvas();
startTimer()


//Eventlistners
window.addEventListener('resize', resizeCanvas);
