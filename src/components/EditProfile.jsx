import React, { useState , useEffect} from 'react'
import blogimg from '../assets/blog.webp'
import '../scss/EditPost.scss'
import InputField from './InputField'
import SelectInput from './SelectInput'
import TeaxtArea from './TeaxtArea'
import ShowalertBox from './ShowAlertBox'
export default function EditProfile({controllProfile}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [titlevalue, setTitlevalue] = useState("");
  const [erroMsg , setErrorMsg] = useState("");
  const [popuperroMsg , setpopupErrorMsg] = useState("");
  const imgtypes = ['jpg','jpeg','png','webp'];
  const handleImageChange = (event) => {
    const profile = event.target.files[0];
    if (profile) {
      const img =  new Image();
      const url = URL.createObjectURL(profile) 
      img.src = url;
      img.onload = () => {
        console.log(profile.type.split("/")[1])
        console.log(URL.createObjectURL(profile))
       if(!imgtypes.includes(profile.type.split("/")[1])){
        setErrorMsg("We Accept img Formate .jpg .png .jpeg .webp")
       }
       else if( profile.size > 31200 || img.width > 400 || img.width < 300 || img.height < 300|| img.height > 400){
         setErrorMsg("Img must max size 50kb width (300 to 400)px and height ( 300 to 400)px")
       }
       else{
        setSelectedImage(url); 
        
       }
      }; 
    }

   
  };

   const getTextareaValue = (e)=>{
     if(e.target.value.length > 200){
       setErrorMsg("Your Bio description must max charecter 200 and min charecter 100")
       setTextareaValue(textareaValue.trim())
      } 
     else{
      setTextareaValue(e.target.value.trim());
     }
       
   }

   const getTitlevalue = (e) =>{
    console.log(e.target.value);
        if(e.target.value.length > 30){
          setErrorMsg("Your Profile must max charecter 30")
          setTitlevalue(titlevalue);
        }
        else{
          setTitlevalue(e.target.value.trim());
        }
   }

  useEffect(()=>{
    setTimeout(() => {
      setErrorMsg("")
    }, 100); 
  })

   const getProfiledata = (e) =>{
    e.preventDefault() 
     if(titlevalue === "" || textareaValue === "" || selectedImage === ""){
       setpopupErrorMsg("Profile Picture  , Profile Name and  Bio Data Requried")
     }
     else{
      setpopupErrorMsg("");
     }
   }

   const closepopup = () =>{
    setpopupErrorMsg("");
   }
  return (  <>
    <div className='w-[100vw]  Popup h-full flex justify-center items-center top-0 z-[1000] fixed bg-[#0000006f] overflow-auto'>
    <div className="container">
      <form onSubmit={getProfiledata} className="Editpostbody mt-[400px] p-5 w-full relative transition-all duration-500 bg-[#041424] rounded-lg min-h-[760px]">
        <div onClick={controllProfile} className="close">
        <i  class="fa-solid fa-xmark"></i>
        </div>
         <div className="flex  flex-col ">
         <div className="Prfile_img flex justify-center items-center   flex-1 ">
         { <img className='border-2 border-[#fdc632] rounded-full w-[410px] h-[410px]'  src={selectedImage ? selectedImage : blogimg} alt="post" /> } 
        </div>
        <span className='mt-4 block'></span>
        <input type="file" accept=".png, .jpg, .jpeg , .webp" onChange={handleImageChange} className="bg-[#ffffff] file-input-bg  " /> 
         <span className='mt-4 block'></span>
         <InputField type="text" placeholder="Paste your facebook profile link" iconName="fa-brands fa-facebook"/>
         <span className='mt-4 block'></span>
         <InputField type="text" placeholder="Paste your twitter profile link" iconName="fa-brands fa-twitter"/>
         <span className='mt-4 block'></span>
         <InputField type="text" placeholder="Paste your instagram profile link" iconName="fa-brands fa-instagram"/>
         <span className='mt-4 block'></span>
         <InputField  type="text" placeholder="Paste your Other social link" iconName="fa-solid fa-link"/>
        </div>      
        <span className='mt-7 block'></span> 
        <InputField value={titlevalue} required onChange={(e)=> getTitlevalue(e)}  type="text" placeholder="Set a profile name"  iconName="fa-solid fa-profile"/>
        <TeaxtArea charecterMaxlenth="200" value={textareaValue}  onChange={(e)=> getTextareaValue(e)} charecter={textareaValue} classes="h-[240px] overflow-auto" placeholder="Bio"/>
        <div className="flex justify-end">
        <button type='submit' className='btn border-none  transition-all duration-500 mt-5 text-[#002347] font-bold hover:bg-[#fdc632]  bg-[#fdc632]'>Save</button>
        </div>
     </form>  
    </div>   
    </div>
    <ShowalertBox alertMassage={erroMsg} closepopup={closepopup} popupAlertMsg={popuperroMsg}/>
   </>   
  )
}  
