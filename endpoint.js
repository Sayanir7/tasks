// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://coding-week-2024-api.onrender.com/api/data')
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data);
//             // const div1=document.getElementsByClassName("div1");
//             // let img1=data[0].image;
//             // console.log(img1);

//             // div1.style.backgroundImage =`url(${img1})`;
         
//             // const data5=[data[4],data[5],data[6],data[7],data[8],data[9]];
//             // console.log(data5);
//             // const blogsContainer = document.getElementById('blogs');
            
//             // data5.forEach(blog => {
//             //     const blogPost = document.createElement('div');
//             //     blogPost.className = 'blog-post';

//             //     blogPost.innerHTML = `
//             //         <h2>${blog.headline}</h2>
//             //         <img src="${blog.image}" alt="${blog.headline}">
//             //         <p><strong>Author:</strong> ${blog.author}</p>
//             //         <p><strong>Date:</strong> ${blog.date}</p>
//             //         <p>${blog.content}</p>
//             //     `;

//             //     blogsContainer.appendChild(blogPost);
//             // });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });



// const url='https://coding-week-2024-api.onrender.com/api/data';
// //let promise= fetch(url);
// //console.log(promise);
// const div1=document.querySelector(".div1");
// const cont1j = document.createElement('div');
// const div1n=document.getElementsByClassName('div1');
// cont1j.id='cont1j';

// const getFacts = async () =>{
//     let response= await fetch(url);
//     console.log(response);
//     let data= await response.json();
//     console.log(data );
    
//     const data5=[data[4],data[5],data[6],data[7],data[8],data[9]];
//     console.log(data5);
//     const blogsContainer = document.getElementById('blogs');
    
//     data5.forEach(blog => {
        
//         const every = document.createElement('div');
//         every.className = 'every';

//         const blogPost = document.createElement('div');
//         blogPost.className = 'blog-post';

//         blogPost.innerHTML = `
            
//             <img src="${blog.image}" alt="${blog.headline}">
            
            
            
//         `;
//         const dat = document.createElement('div');
//         dat.className='dat';
//         dat.innerHTML=`
//             <h2>${blog.headline}</h2>
//             <p><strong>Date:</strong> ${blog.date}</p>
//         `;
//         every.appendChild(blogPost);
//         every.appendChild(dat);
//         blogsContainer.appendChild(every);

//     });



//     let img=data[0].image;
//     console.log(img);
//     div1.style.backgroundImage =`url(${img})`;

//     const contend1=document.querySelector(".contend1");
//     contend1.innerText=data[0].headline;
//     const datee1=document.querySelector(".datee1");
//     datee1.innerText=data[0].date;
//     const theme1=document.querySelector(".theme1");
//     theme1.innerText="Author: "+data[0].author;
//     const featured=document.querySelector(".featured1");
//     featured.innerText=data[0].type;
    
    



//     const div2=document.querySelector(".div2");
//     let img2=data[1].image;
//     div2.style.backgroundImage =`url(${img2})`;
//     const contend2=document.querySelector(".contend2");
//     contend2.innerText=data[1].headline;
//     const datee2=document.querySelector(".datee2");
//     datee2.innerText=data[1].date;
//     const theme2=document.querySelector(".theme2");
//     theme2.innerText="Author: "+data[1].author;
//     const featured2=document.querySelector(".featured2");
//     featured2.innerText=data[1].type;




    
//     const div31=document.querySelector(".div31");
//     let img31=data[2].image;
//     div31.style.backgroundImage =`url(${img31})`;
//     const contend31=document.querySelector(".contend31");
//     contend31.innerText=data[2].headline;
//     const datee31=document.querySelector(".datee31");
//     datee31.innerText=data[2].date;
//     const theme31=document.querySelector(".theme31");
//     theme31.innerText="Author: "+data[2].author;
//     const featured31=document.querySelector(".featured31");
//     featured31.innerText=data[2].type;




     
//     const div32=document.querySelector(".div32");
//     let img32=data[3].image;
//     div32.style.backgroundImage =`url(${img32})`;
//     const contend32=document.querySelector(".contend32");
//     contend32.innerText=data[3].headline;
//     const datee32=document.querySelector(".datee32");
//     datee32.innerText=data[3].date;
//     const theme32=document.querySelector(".theme32");
//     theme32.innerText="Author: "+data[3].author;
//     const featured32=document.querySelector(".featured32");
//     featured32.innerText=data[3].type;





//     const running=document.querySelector(".running");
//     running.innerText="   "+data[0].content+"   "+data[1].content+"   "+data[2].content+"   "+data[3].content+"   "+data[4].content+"   "+data[5].content+"   "+data[6].content+"   "+data[7].content+"   "+data[8].content+"   "+data[9].content;
    




//     //click

//     // const cont1j = document.createElement('div');
//     // cont1j.className='cont1j';
//     cont1j.innerHTML=`
        
//         <p> ${data[0].content}</p>
//     `;
//     div1n.appendChild(cont1j);

//     // document.getElementById('clickableDiv').addEventListener('click', function() {
//     //     var contentBox = document.getElementById('contentBox');
//     //     if (contentBox.style.display === 'none' || contentBox.style.display === '') {
//     //         contentBox.style.display = 'block';
//     //     } else {
//     //         contentBox.style.display = 'none';
//     //     }
//     // });
    




// };
    








// getFacts();

// // document.getElementById('div1').addEventListener('click', function() {
// //     var contentBox = document.getElementById('cont1j');
// //     if (contentBox.style.display === 'none' || contentBox.style.display === '') {
// //         contentBox.style.display = 'block';
// //     } else {
// //         contentBox.style.display = 'none';
// //     }
// // });



// // // document.getElementById('clickableDiv').addEventListener('click', function() {
// // //     var contentBox = document.getElementById('cont1');
// // //     if (contentBox.style.display === 'none' || contentBox.style.display === '') {
// // //         contentBox.style.display = 'block';
// // //     } else {
// // //         contentBox.style.display = 'none';
// // //     }
// // // });




document.addEventListener('DOMContentLoaded', () => {
    fetch('https://coding-week-2024-api.onrender.com/api/data')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // const div1=document.getElementsByClassName("div1");
            // let img1=data[0].image;
            // console.log(img1);

            // div1.style.backgroundImage =`url(${img1})`;
         
            // const data5=[data[4],data[5],data[6],data[7],data[8],data[9]];
            // console.log(data5);
            // const blogsContainer = document.getElementById('blogs');
            
            // data5.forEach(blog => {
            //     const blogPost = document.createElement('div');
            //     blogPost.className = 'blog-post';

            //     blogPost.innerHTML = `
            //         <h2>${blog.headline}</h2>
            //         <img src="${blog.image}" alt="${blog.headline}">
            //         <p><strong>Author:</strong> ${blog.author}</p>
            //         <p><strong>Date:</strong> ${blog.date}</p>
            //         <p>${blog.content}</p>
            //     `;

            //     blogsContainer.appendChild(blogPost);
            // });
        })
        .catch(error => console.error('Error fetching data:', error));
});



const url='https://coding-week-2024-api.onrender.com/api/data';
//let promise= fetch(url);
//console.log(promise);
const div1=document.querySelector("#div1");

const getFacts = async () =>{
    let response= await fetch(url);
    console.log(response);
    let data= await response.json();
    console.log(data );
    
    const data5=[data[4],data[5],data[6],data[7],data[8],data[9]];
    console.log(data5);
    const blogsContainer = document.getElementById('blogs');
    
    data5.forEach(blog => {
        
        const every = document.createElement('div');
        every.className = 'every';

        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';

        blogPost.innerHTML = `
            
            <img src="${blog.image}" alt="${blog.headline}">
            
            
            
        `;
        const dat = document.createElement('div');
        dat.className='dat';
        dat.innerHTML=`
            <h2>${blog.headline}</h2>
            <p><strong>Date:</strong> ${blog.date}</p>
        `;
        every.appendChild(blogPost);
        every.appendChild(dat);
        blogsContainer.appendChild(every);

    });



    let img=data[0].image;
    console.log(img);
    div1.style.backgroundImage =`url(${img})`;

    const contend1=document.querySelector(".contend1");
    contend1.innerText=data[0].headline;
    const datee1=document.querySelector(".datee1");
    datee1.innerText=data[0].date;
    const theme1=document.querySelector(".theme1");
    theme1.innerText="Author: "+data[0].author;
    const featured=document.querySelector(".featured1");
    featured.innerText=data[0].type;
    
    



    const div2=document.querySelector(".div2");
    let img2=data[1].image;
    div2.style.backgroundImage =`url(${img2})`;
    const contend2=document.querySelector(".contend2");
    contend2.innerText=data[1].headline;
    const datee2=document.querySelector(".datee2");
    datee2.innerText=data[1].date;
    const theme2=document.querySelector(".theme2");
    theme2.innerText="Author: "+data[1].author;
    const featured2=document.querySelector(".featured2");
    featured2.innerText=data[1].type;




    
    const div31=document.querySelector(".div31");
    let img31=data[2].image;
    div31.style.backgroundImage =`url(${img31})`;
    const contend31=document.querySelector(".contend31");
    contend31.innerText=data[2].headline;
    const datee31=document.querySelector(".datee31");
    datee31.innerText=data[2].date;
    const theme31=document.querySelector(".theme31");
    theme31.innerText="Author: "+data[2].author;
    const featured31=document.querySelector(".featured31");
    featured31.innerText=data[2].type;




     
    const div32=document.querySelector(".div32");
    let img32=data[3].image;
    div32.style.backgroundImage =`url(${img32})`;
    const contend32=document.querySelector(".contend32");
    contend32.innerText=data[3].headline;
    const datee32=document.querySelector(".datee32");
    datee32.innerText=data[3].date;
    const theme32=document.querySelector(".theme32");
    theme32.innerText="Author: "+data[3].author;
    const featured32=document.querySelector(".featured32");
    featured32.innerText=data[3].type;





    const running=document.querySelector(".running");
    running.innerText="   "+data[0].content+"   "+data[1].content+"   "+data[2].content+"   "+data[3].content+"   "+data[4].content+"   "+data[5].content+"   "+data[6].content+"   "+data[7].content+"   "+data[8].content+"   "+data[9].content;
    var myDiv1 = document.getElementById("cont1");
    myDiv1.innerText=data[0].content;
    var myDiv = document.getElementById("cont2");
    myDiv.innerText=data[1].content;




};
getFacts();

//  document.getElementById('div1').addEventListener('click', function() {
//     var contentBox = document.getElementById('cont1j');
//      if (contentBox.style.display === 'none' || contentBox.style.display === '') {
//         contentBox.style.display = 'block';
//      } else {
//          contentBox.style.display = 'none';
//     }
// });




 document.getElementById('div1').addEventListener('click', function() {
     var contentBox = document.getElementById('cont1');
    if (contentBox.style.display === 'none' || contentBox.style.display === '') {
         contentBox.style.display = 'block';
    }
    
     else {
        contentBox.style.display = 'none';
     }
     function hideDiv() {
        contentBox.style.display = "none";
        }
        setTimeout(hideDiv, 3000); 
 });
 
 document.getElementById('div2').addEventListener('click', function() {
    var contentBox = document.getElementById('cont2');
   if (contentBox.style.display === 'none' || contentBox.style.display === '') {
        contentBox.style.display = 'block';
   }   else {
       contentBox.style.display = 'none';
   }
   function hideDiv() {
    contentBox.style.display = "none";
    }
    setTimeout(hideDiv, 3000); 
 
});


// Get the reference to the div element
var myDiv = document.getElementById("cont2");

// Function to hide the div after a time period
// function hideDiv() {
//     myDiv.style.display = "none";
// }
// setTimeout(hideDiv, 3000);