import React, { useEffect, useState } from 'react'
import blogimg from '../assets/kids-{7}.jpg'
import '../scss/EditPost.scss'
import InputField from './InputField'
import SelectInput from './SelectInput'
import TeaxtArea from './TeaxtArea'
import ShowalertBox from './ShowAlertBox'
 import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDatabase , set , ref as databaseref  } from 'firebase/database'
import { v5 } from 'uuid'
import { useAuth } from './Context/Authinicetion'

export default function EditPost({controllpost}) {
    const {currentUser} = useAuth(); 
    const [selectedImage, setSelectedImage] = useState(null);
    const [getImgValue, setImgValue] = useState(null);
    const [textareaValue, setTextareaValue] = useState("");
    const [titlevalue, setTitlevalue] = useState("");
    const [erroMsg , setErrorMsg] = useState("");
    const imgtypes = ['jpg','jpeg','png','webp'];
    const [selectAreaValue , setSelectAreaValue] = useState("");
    const [popuperroMsg , setpopupErrorMsg] = useState("");
    const currentDate = new Date().toLocaleString();
       const handleImageChange = (event) => {
      const file = event.target.files[0];
      
      if (file) { 
        const img =  new Image();
        const url = URL.createObjectURL(file) 
        img.src = url;
        img.onload = (e) => {
         if(!imgtypes.includes(file.type.split("/")[1])){
          setErrorMsg("We Accept img Formate .jpg .png .jpeg .webp")
         }
         else if( file.size > 51200 || img.width > 600 || img.width < 500 || img.height < 250|| img.height > 300){
           setErrorMsg("Img must max size 50kb width (600 to 500)px and height ( 250 to 300)px")
         }
         else{
          setSelectedImage(url); 
          setImgValue(file)
         }
        }; 
      } 
    };

     const getTextareaValue = (e)=>{
       if(e.target.value.length > 2500){
         setErrorMsg("Your post description must max charecter 2500")
         setTextareaValue(textareaValue);
       }
       else{
        setTextareaValue(e.target.value);
       }
         
     }  

     const getTitlevalue = (e) =>{
          if(e.target.value.length > 100){
            setErrorMsg("Your post title must max charecter 100");
            setTitlevalue(titlevalue);
          }
          else{
            setTitlevalue(e.target.value);
          }
        
     }
     
     const getSelectAreaValue = (e) =>{
        setSelectAreaValue(e.target.value.trim());
     }


    useEffect(()=>{
      setTimeout(() => {
        setErrorMsg("")
      }, 100); 
    }) 
     async function getPostData (e){
      e.preventDefault() 
       if(titlevalue === "" || selectAreaValue === "" || textareaValue === "" || getImgValue === null){
         setpopupErrorMsg("You post Description Title , Categorey and Post banner Img all are Requred. Make sure you fill the all field *")
       }
       else{

         try{
          setpopupErrorMsg("");
          const Imgpath = `post/images/${getImgValue.name + Math.abs(Math.random() * 10000)}`;
          const storage = getStorage();
          const Imgref =  ref(storage, `${Imgpath}`); 
          const snapshot = await uploadBytes(Imgref,getImgValue);
          const imgurl = await getDownloadURL(snapshot.ref);
          if(imgurl){
            const MY_NAMESPACE  = (Math.random() + 1).toString(36).substring(7)
            const userid = currentUser.uid;
            const db = getDatabase();
            const postref = databaseref(db, '/posts/' + MY_NAMESPACE);
            await set(postref , {
                  'postId' : 'post'+ Math.abs(Math.random() * 10000), 
                  'Contentent':{
                  'userid' : `${userid}`,
                  'title' : `${titlevalue.trim()}`,
                  'description': `${textareaValue.trim()}`,
                  'postdate':`${currentDate}`,
                  'categoreyId' : `${selectAreaValue}`,
                  'postbanner' : `${imgurl}`,
                  "path" : `${Imgpath}` 
                }
     
            })

             setpopupErrorMsg('Post Publish SuccessFully');
          }
             
         }
         catch(error){
           console.log(error);
           setpopupErrorMsg("Somthing Error Occured");
         }
       }
     }

     const closepopup = () =>{
      setpopupErrorMsg("");
     }

  return (  
    <>
    <div className='w-[100vw] Popup h-full flex justify-center items-center top-0 z-[1000] fixed bg-[#0000006f] overflow-auto'>
    <div className="container">
      <form onSubmit={getPostData} className="Editpostbody p-5 w-full mt-[500px] relative overflow-auto bg-[#041424] rounded-lg ">
        <div onClick={controllpost} className="close">
        <i  class="fa-solid fa-xmark"></i> 
        </div>
         <div className="">
         <div className="blog_banner flex-1">
         {<img className='w-full  h-[450px]'  src={selectedImage ? selectedImage :blogimg} alt="post" /> } 
        </div>
        <span className='mt-6 block'></span>
        <input type="file" accept=".png, .jpg, .jpeg , .webp" onChange={handleImageChange} className="bg-[#ffffff] file-input-bg  " /> 
         <span className='mt-6 block'></span>
          <SelectInput  onChange={getSelectAreaValue}/>
         <br/>
         <span className='mt-6 block'></span>
         <InputField disabled  type="text" placeholder="Set tags for your post" iconName="fa-solid fa-tag"/>
         <span className='mt-6 block'></span>
         <div className="tags pb-2"> 
             <div className=""> <div className='tag_item'><i class="fa-solid fa-xmark"></i>Adventure</div></div>
             <div className=""> <div className='tag_item'><i class="fa-solid fa-xmark"></i>Adventure</div></div>
         </div>

        </div>   
        <span  className='mt-6 block'></span> 
        <InputField required value={titlevalue} onChange={(e)=> getTitlevalue(e)}  type="text" placeholder="Set a title for your post" iconName="fa-solid fa-text"/>
        <TeaxtArea value={textareaValue} charecterMaxlenth="2500"  onChange={(e)=> getTextareaValue(e)} charecter={textareaValue} classes="h-[240px] overflow-auto" placeholder="Type your expreance here"/>
        <div className="flex justify-end">
        <button type='submit' className='btn border-none  transition-all duration-500 mt-5 text-[#002347] font-bold hover:bg-[#fdc632]    bg-[#fdc632]'>Publish the post</button>
        </div>
     </form>  
    </div>   
    </div>
    <ShowalertBox closepopup={closepopup} popupAlertMsg={popuperroMsg} alertMassage={erroMsg}/>
    </>
  )
}
