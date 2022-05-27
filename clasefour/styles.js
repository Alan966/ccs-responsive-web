/* Para obetener un valor especifico */
// const header = document.querySelector('.main-header');
// const caracterisitcas = getComputedStyle(header)
// console.log(caracterisitcas.getPropertyValue('height'));

// element.style // todo elemento del DOM tiene la propiedad style

// header.style.background = 'red';

// Formato 1 : Cambiar de clase 
// document.body.classList.add('clase-uno');

// Formato 2: Cuando usar javascript con un calculo 

// const color = 'white';
// const size = 15;
// const styles = `
//     background: red;
//     color: ${color};
//     font-size: ${size*2}px;
//     padding: 20px;
//     display: flex;
//     margin-top:4em; 
//     border-bottom: 5px solid black;
// `

// 1. Sobreescribiendo 
// header.setAttribute('style', styles)

// 2.- Agregando a los estilos inline existentes 
// header.style = styles;



// Como leer y modificar varaibles CSS

// leer 
// Modificar y sobreescribir variables 

// document.documentElement.style.setProperty('--name', 'Don Ramon');

// console.log(getComputedStyle(document.documentElement).getPropertyValue('--name'))


// const mediumBP = matchMedia('(min-width: 768px) and (orientation: landscape)')

// console.log(mediumBP.matches)

// addEventListener('resize', () => {
//     const mediumBp = matchMedia('(min-width:800px)')
//     if(mediumBP.matches){
//         document.body.style.background = 'red';
//     }else{
//         document.body.style.background = 'blue';
//     }
// } )

// addEventListener('DOMContentLoaded', () => {
//     const mediumBp = matchMedia('(min-width:800px)')
//     if(mediumBP.matches){
//         document.body.style.background = 'red';
//     }else{
//         document.body.style.background = 'blue';
//     }
// } )


const mediumBp = matchMedia('(min-width:800px)')

const changeColor = mql => {
    if(mql.matches){
        document.body.style.background = 'red';
    }else{
        document.body.style.background = 'blue';
    }
}
mediumBp.addListener(changeColor)