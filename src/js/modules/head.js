

define(['jquery'] , function($){
    $head_nav = $('.head_nav')
    $head_nav_li = $head_nav.find('li')
    // console.log($head_nav_li)
    function headInit(data){
        console.log(data)
        
        // console.log($head_nav_li[0])
    }
    return {
        headInit
    }
    $head_nav_li 
    // let tmp = `
    //     <div>
    //         <ul>
    //             <li>
    //                 <img src="" alt="">
    //                 <em></em>
    //                 <span></span>
    //             </li>
    //         </ul>
    //     </div>
    // `
})



// define(['jquery'],function($){

//     $banner_imgs = $('#banner').find('.banner_imgs');
//     $banner_dots = $('#banner').find('.banner_dots');

//     function bannerInit(data){
//         //console.log(data);
//         let banner_list = data.banner_list;
//         let tmp = `
//             ${
//                 banner_list.map((v,i)=>{
                    
//                    return `<li><a href="${v.imgLink}"><img src="${v.imgUrl}"></a></li>`;
                    
//                 }).join('')
//             }
//         `;
//         let tmp2 = `
//             ${
//                 banner_list.map((v,i)=>{
//                     if(i==0){
//                         return `<li></li>`;
//                     }
//                     else{
//                         return `<li class="active"></li>`;
//                     }
//                 }).join('')
//             }
//         `;
//         $banner_imgs.html(tmp);
//         $banner_dots.html(tmp2);
//         bannerBind();
//     }

//     function bannerBind(){
//         $banner_dots.on('mousedown','li',function(){
//             $(this).attr('class','').siblings().attr('class','active');
//             $banner_imgs.find('li').eq( $(this).index() ).fadeIn().siblings().fadeOut();
//         });
//     }

//     return {
//         bannerInit
//     }

// });