const parent = document.getElementById('mindmap_wrapper')

let windowWidth = window.innerWidth
let windowHeight= window.innerHeight

const unitsPerWidth = 160
const unitsPerHeight = 90
let unitSize = windowWidth / unitsPerWidth
let flattenedData = []

const wordRatio = 3
const scale = 0.7

const types = {
    VISIBLE: 'VISIBLE',
    HIDDEN: 'HIDDEN',
    SENTENCE: 'SENTENCE'
}

const data = {
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
            }
        ]
    }
}

//Elements
let aspetRatioDiv;

function resizeCanvas() {
    

    //const isLandscape = window.innerWidth > window.innerHeight;

    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    unitSize = windowWidth / unitsPerWidth



    // Call your drawing function here or redraw content
    reRender(); // Replace with your drawing function
}

function extractChildren(node, flattenedData, level){
    //debugger
    node.level = level
    flattenedData.push(node)
    const children = (node && node.children) || null
    if(!children) return

    for(let i = 0; i < children.length; i++){
        const grandChildren = (children && children[i] && children[i].children) || null
        if(grandChildren){
            extractChildren(children[i], flattenedData, level + 1)
        }
        children[i].level = level + 1
        flattenedData.push(children[i])
    }

}

function flattenData(){
    console.log(data)
    flattenedData = []
    const node = data.node
    extractChildren(node, flattenedData, 0)
}

function measureWord(word){
    let lenth = word.length * (unitSize * wordRatio)
    if(lenth < unitSize * wordRatio * 3){
        lenth = unitSize * wordRatio * 3
    }

    return lenth * scale
}
function measureSentence(sentence){
    let width = 0
    for(let i = 0; i < sentence.length; i++){
        width = width + measureWord(sentence[i].text)
    }
    return width
}
function calcInputHeight(){
    return unitSize * 3 * wordRatio  * scale
}

function calcDims(node){
    const type = node.type
    
    switch(type){
        case types.SENTENCE:
            const sentence = node.sentence
            const sentenceWidth = measureSentence(sentence)
            const paddings = (unitSize * 1) + ((sentence.length * unitSize) * 2)
            const gaps = sentence.length * unitSize
            const divWidth = sentenceWidth + paddings + gaps

            const inputHeight = calcInputHeight()
            const divHeight = inputHeight + (unitSize * 4)
            return{
                width: divWidth * scale,
                height: divHeight * scale
            }
        default:
            return 0
    }
}

function drawNode(parentNode, data){
    const sentence = data.sentence
    for(let i = 0; i < sentence.length; i++){
        const newNode = document.createElement('div')
        newNode.style.marginLeft = (unitSize * scale) + 'px'
        newNode.style.marginTop = (unitSize * scale) + 'px'
        newNode.style.padding = (unitSize * scale) + 'px'
        const type = sentence[i].type
        
        if(type === types.HIDDEN){

        }else{
            newNode.innerText = sentence[i].text
        }
        

        const url = (sentence[i] && sentence[i].url) || null
        if(url){
            const imageWrapper = document.createElement('div')
            imageWrapper.style.width =(calcInputHeight() * scale) + (unitSize * 4 * scale) + 'px'
            imageWrapper.style.height = (calcInputHeight() * scale) + (unitSize * 4 * scale) + 'px'
            imageWrapper.style.backgroundColor = 'blue'
            imageWrapper.style.position = 'absolute'
            imageWrapper.style.borderRadius = '50%'
            imageWrapper.style.top = ((calcInputHeight() * scale) + (unitSize * 2 * scale)) * -1 + 'px'
            const image = document.createElement('img')
            image.src = url
            image.style.width = '100%'
            imageWrapper.append(image)
            newNode.append(imageWrapper)
        }

        
        newNode.style.width = parseFloat(measureWord(sentence[i].text)) * scale + 'px'
        newNode.style.height = calcInputHeight() * scale + 'px'
        newNode.style.fontSize = ((unitSize* scale) * wordRatio * (scale * 2)) + 'px'
        newNode.style.textAlign = 'center'
        newNode.style.display = 'flex'
        newNode.style.alignItems = 'center'
        newNode.style.justifyContent = 'center'
        //debugger
        newNode.style.backgroundColor = 'white'
        newNode.style.borderRadius = ((unitSize * wordRatio * 2)* scale) + 'px'
        parentNode.append(newNode)
    }
}

function drawNodes(parent){
    //debugger
    let currentY = 0
    let currentX = 0
    let padding = unitSize * 2
    currentY += padding
    let nodeY = (calcInputHeight() + (unitSize * 4)) * 1 * scale
    for(let i = 0; i < flattenedData.length; i++){
        
        currentX = flattenedData[i].level * (unitSize * 10) * scale
        const newNode = document.createElement('div')
        newNode.style.backgroundColor = "blue"
        newNode.style.position = 'absolute'
        newNode.style.display = 'flex'
        //newNode.style.paddingRight = unitSize + 'px'
        const nodeDims = calcDims(flattenedData[i])
        flattenedData[i].dims = nodeDims
        drawNode(newNode, flattenedData[i])
        //nodeY = nodeY + nodeDims.width
        newNode.style.left = (currentX  * scale) + 'px'
        newNode.style.top = (nodeY) + 'px'
        nodeY = nodeY + (calcInputHeight() + (unitSize * 4)) * 2 * scale
        newNode.style.width = (nodeDims.width) + 'px'
        newNode.style.height = (nodeDims.height) + 'px'
        newNode.style.borderRadius = (unitSize * wordRatio * 2.5) * scale + 'px'
        //newNode.innerHTML = flattenedData[i].type
        //console.log(flattenedData[i])
        parent.append(newNode)
        //currentX += 100

    }
}

function redrawPage(){
    drawAspectRatioDiv()
    drawNodes(aspetRatioDiv)
}

function drawAspectRatioDiv(){
    aspetRatioDiv = document.createElement('div')
    aspetRatioDiv.style.width = (unitSize * unitsPerWidth) + 'px'
    aspetRatioDiv.style.height = (unitSize * unitsPerHeight) + 'px'
    aspetRatioDiv.style.backgroundColor= 'rgb(45,45,45)'
    parent.append(aspetRatioDiv)
}

// function drawNode(){
//     aspetRatioDiv = document.createElement('div')
// }

function reRender(){
    console.log("re-rendered")
    redrawPage()
}
// Initial call to resize canvas

flattenData()
resizeCanvas();

window.addEventListener('resize', resizeCanvas);
