import { Link } from "gatsby"
import React from "react"
import Game from "../../../components/adminpanel/Game"
import MainLayout from "../../../components/adminpanel/MainLayout"
import ImageUploading from 'react-images-uploading';
import {BsCloudPlusFill} from "react-icons/bs"
import {MdCloudUpload} from "react-icons/md"
const Home=()=>{
    const add="/img/dashboard/banner.png"
    const [bannerImage, setBannerImage] = React.useState([]);
    const [navbarImage, setNavbarImage] = React.useState([]);
    const [accountImage, setAccountImage] = React.useState([]);
    const [emptyBanner,setEmptyBanner]=React.useState(true);
    const [emptyNavbar,setEmptyNavbar]=React.useState(true);
    const [emptyAccount,setEmptyAccount]=React.useState(true);
    const inputStyle=`lg:text-md text-sm block shadow appearance-none border border-white
    rounded lg:w-2/3 w-full py-2 lg:px-3  mb-3 leading-tight
     focus:outline-none focus:shadow-outline h-12 bg-[#707070] text-white`   
    
     const onChangeBanner = (imageL) => {
        setBannerImage(imageL);
        setEmptyBanner(!emptyBanner);
      };
      const onChangeAccount = (imageL) => {
        setAccountImage(imageL);
        setEmptyAccount(!emptyAccount);
      };
      const onChangeNavbar = (imageL) => {
        setNavbarImage(imageL);
        setEmptyNavbar(!emptyNavbar);
      };
    return(

        <MainLayout>
         <div className="flex items-center mb-8"><h2>Games &gt; Create</h2></div>
               
             
               <div className="w-full h-62  bg-[#707070] flex flex-col items-center justify-center px-4 py-2 ">
                   <div className="w-full flex ">
                       <div>

                       <input className ={inputStyle} type="text" placeholder="Game Name"/>
                       
                       
                          {/* Platform */}
                                <div>
                                <h3 className="font-bold">PlattForm</h3>
                                <input className="mr-2 h-5 w-5" type="checkbox" id="crossplay" name="crossplay" value="Crossplay"/>
                                <label className="mr-4" for="crossplay">Crossplay</label>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="ps4/5" name="ps4/5" value="PS4/5"/>
                                <label className="mr-4" for="ps4/5">ps4/5</label>
                                <input className="mr-2 h-5 w-5" type="checkbox" id="xbox/xbox-series" name="xbox/xbox-series" value="xbox/xbox-series"/>
                                <label className="mr-4" for="xbox/xbox-series">xbox/xbox-series</label><br/>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="mobile" name="mobile" value="Mobile"/>
                                <label className="mr-4" for="mobile">Mobile</label>
                                <input className="mr-2 h-5 w-5 " type="checkbox" id="pc" name="pc" value="Pc"/>
                                <label for="pc">Pc</label>
                                </div>
                       </div>
                       <div className="flex mx-6  items-center  ">
                           <ImageUploading value={bannerImage}  onChange={onChangeBanner} maxNumber={1} dataURLKey="data_url"  className="flex items-center justify-center   ">
                                    {({
                                    imageList,onImageUpload,onImageRemoveAll, onImageUpdate, onImageRemove,isDragging,dragProps,
                                    }) => (
                                        <div className="upload__image-wrapper rounded border-2  bg-[#707070]">
                                            <button 
                                            style={isDragging ? { opacity: 0.5 } : undefined, {background:'white'}}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            
                                            >
                                            <div className="w-52 h-36 flex flex-col items-center justify-center text-[#707070]" style={emptyBanner? {display: 'block',opacity:0.7,background:'white'}:{display:'none'}}>
                                                <h4>DashBoard Banner</h4>
                                                <MdCloudUpload className="text-2xl w-fit m-auto "/>
                                                <h6>max 500kb</h6>
                                            </div>
                                            </button>
                                            
                                            {imageList.map((bannerImage, index) => (
                                            
                                            <div key={index} className="image-item" style={{position: 'relative'}} >
                                                <img src={bannerImage['data_url']} alt="" className="w-52 h-36 " />
                                                <div className="image-item__btn-wrapper absolute top-0 right-0" >
                                                    <button onClick={() => onImageRemove(0)} style={{background:"red",color:'white'}}>X</button>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    )}
                                 </ImageUploading>
                           </div>
                        <div className="flex flex-col items-center h-full">
                       <div className="flex mx-6  mb-3 items-center">
                           
                       <ImageUploading value={accountImage}  onChange={onChangeAccount} maxNumber={1} dataURLKey="data_url" >
                                    {({
                                    imageList,onImageUpload,onImageRemoveAll, onImageUpdate, onImageRemove,isDragging,dragProps,
                                    }) => (
                                        <div  className="upload__image-wrapper flex items-center justify-center rounded border-2">
                                            <button 
                                            style={isDragging ? { opacity: 0.5 } : undefined, {background:'white'}}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                            
                                            >
                                            <div className="w-24 h-24 flex  items-center justify-center  text-[#707070]" style={emptyAccount? {display: 'block',opacity:0.7,background:'white'}:{display:'none'}}>
                                                <MdCloudUpload className="text-2xl w-fit m-auto"/>
                                                
                                                
                                            </div>
                                            </button>
                                            
                                            
                                            {imageList.map((accountImage, index) => (
                                            
                                            <div key={index} className="image-item" style={{position: 'relative'}} >
                                                <img src={accountImage['data_url']} alt="" className="h-24 w-24"/>
                                                <div className="image-item__btn-wrapper" style={{position:"absolute",top:0,right:0}} >
                                                    <button onClick={() => onImageRemove(0)} style={{background:"red",color:'white'}}>X</button>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    )}
                                 </ImageUploading>
                                 <h5 className="ml-2">Account Icon</h5>
                       </div>
                      
                           <div className="flex mx-6 items-center">
                           <ImageUploading value={navbarImage}  onChange={onChangeNavbar} maxNumber={1} dataURLKey="data_url" >
                                    {({
                                    imageList,onImageUpload,onImageRemoveAll, onImageUpdate, onImageRemove,isDragging,dragProps,
                                    }) => (
                                        <div className="upload__image-wrapper"  className="flex items-center justify-center rounded border-2">
                                            <button 
                                            style={isDragging ? { opacity: 0.5 } : undefined, {background:'white'}}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                         
                                            
                                            >
                                            <div className="w-24 h-24 flex flex-col items-center justify-center  text-[#707070]" style={emptyNavbar? {display: 'block',opacity:0.7,background:'white'}:{display:'none'}}>
                                                
                                                <MdCloudUpload className="text-2xl w-fit m-auto"/>
                                                
                                            </div>
                                            </button>
                                            
                                            
                                            {imageList.map((navbarImage, index) => (
                                            
                                            <div key={index} className="image-item" style={{position: 'relative'}} >
                                                <img src={navbarImage['data_url']} alt="" className="w-24 h-24" />
                                                <div className="image-item__btn-wrapper" style={{position:"absolute",top:0,right:0}} >
                                                    <button onClick={() => onImageRemove(0)} style={{background:"red",color:'white'}}>X</button>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    )}
                                 </ImageUploading>
                                 <h5 className="ml-2">NavBar Icon</h5>
                           </div>
                           
                      </div>
                   </div>
                   <div className="w-full flex items-center justify-end">
                         <button className="w-16 py-1 bg-[#3ed669] rounded mr-2 text-white">Add</button>
                         <button className="w-16 py-1 bg-[#e75779] rounded ml-2 text-white">delete</button>
                   </div>
               </div>

               <div className="w-full mt-8 ">
               <h3 className="font-bold">Game List</h3>
               <div className="w-full  bg-[#707070] pl-2 py-2">
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               <Game name="Fifa 22" ps="ps4/5" pc="pc" mobile="mobile" xbx="XBX" image="/img/dashboard/NoPath - Kopie (7).png"/>
               </div>
               </div>
        </MainLayout>

    )
}
export default Home
