import React from "react"
import { navigate } from "gatsby"
import InputField from "../components/subscribe-comps/inputField"
const SignUp = () => {
    // Styles
    const containerStyle=" max-w-xl  text-white m-auto text-center justify-items-center  justify-center items-center"
    const mainTitleStyle="text-center  mb-2"
    const checkboxStyle=" inline-block h-4 w-4 pt-2 border border-gray-300 rounded-sm bg-transparent checked:bg-gray checked:border-gray focus:outline-none    mr-2 cursor-pointer"
    const labelStyle=" text-gray-400 text-sm font-bold"
    const checkboxContainerStyle="w-96 m-auto py-2 text-left"
    const checkboxLabelLinksStyle="cursor-pointer underline text-white"
    const submitBtnStyle="bg-indigo-900 rounded block text-white w-64 h-10 mt-2 mb-4 text-sm font-bold  m-auto "
    const passwordNoteStyle="block text-left w-96 m-auto text-gray-400 text-sm relative mt-0 pt-0 top-0"
    
    return (
        <>
        <div className=" bottom-0 right-0 bg-black m-0 h-full w-full items-center py-24">
            <div className={containerStyle}>
                <h3 className={mainTitleStyle}>Subscribe with email</h3>
                <form className="relative my-4 ">
                      {/* Text Fields */}
                      <InputField value={"Email"} type={"email"} />
                      <InputField value={"Username"} type={"text"} />
                      <InputField value={"Password"} type={"password"} />
                      <span className={passwordNoteStyle}>for security reasons, passwords must contain between 6 and 50 characters</span>
                      <InputField value={"Confirm Password"} type={"password"} />
                      <InputField value={"Voucher Code"} type={"text"} />

                      <br/>

                      {/* Check Boxes */}
                      <div className={checkboxContainerStyle}>
                          <input className={checkboxStyle} type="checkbox" value="" id="age"/>
                          <label className={labelStyle} for="age">
                            I am over 12 years old and if i am below 16 my parents authorize me to accesss this website</label>
                      </div>

                      <div className={checkboxContainerStyle}>
                          <input className={checkboxStyle} type="checkbox" value="" id="terms"/>
                          <label className={labelStyle} for="terms">
                            I accept the <a className={checkboxLabelLinksStyle}>Terms of Use</a> and i acknowledge having read the <a  className={checkboxLabelLinksStyle}>Privacy and cookies policy</a></label>
                      </div>

                      <div>
                          <button  className={submitBtnStyle}>JOIN NOW</button>
                          <h4 className={labelStyle}>Already have an account?  <a className="text-white cursor-pointer" onClick={() => navigate("/login")}>Log in</a></h4>
                      </div>
                </form> 
            </div>
        </div>
        
        </>
       
    );
}
export default    SignUp;
