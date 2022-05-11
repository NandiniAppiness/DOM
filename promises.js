//async function hello() {

//}

//const sing = async() =>{
  //  return 'LA LA LA LA LA'
//}

//sing()

 //.then(data => {
   //   console.log("promis resolved with",data)
 //})
 //.catch(err => {
   //  console.log("OH NO PROMISE REJECTED")
  //console.log(err)
//})

const delayedColorChange =(color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            document.body.style.backgroundColor= color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',1000)
.then(() => delayedColorChange('orange',1000))
.then(() => delayedColorChange('pink',1000))
.then(() => delayedColorChange('blue',1000))
.then(() => delayedColorChange('yellow',1000))
.then(() => delayedColorChange('green',1000))
.then(() => delayedColorChange('purple',1000))
.then(() => delayedColorChange('red',1000))
.then(() => delayedColorChange('olive',1000))

async function rainbow() {
    delayedColorChange('red',1000)
}