function costumRender(reactElement,container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    container.appendChild(domElement)


    for (const prop in reactElement.props ) {
        
        domElement.setAttribute(prop,reactElement.props[prop])
    }
}


const reactElement ={
    type: 'a',
    props: {
        href :"https://google.com",
        target :'_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer=document.getElementById("root")

costumRender(reactElement, mainContainer)