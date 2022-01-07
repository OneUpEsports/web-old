import React from "react";
import You from "../../../static/icons/you.png";
import Insta from "../../../static/icons/insta.png";
import Hang from "../../../static/icons/hang.png";
import Tweet from "../../../static/icons/tweet.png";
const ProfileSetting = () => {
    return (
      <div>
        {/* background_color_container */}
        <div className="background_color_container flex justify-center lg:h-min ">
          {/* main_container */}
          <div className="w-3/4" >
            {/* profile_setting_heading */}
            <div className="profile_setting_heading pt-12">
              <h2 className=" text-md lg:text-6xl text-white font-normal px-0 lg:px-6 w-full lg:w-4/5">
                Account Settings
              </h2>
            </div>
            {/* hr_line */}
            <div>
              <div className="hr_line w-full ">
                <hr className="hr_tag " />
              </div>
            </div>
            {/* profile_settings_form */}
            <form className="profile_settings_form  lg:px-6  lg:w-full">
              {/* heading */}
              <div className="heading  py-6">
                <h3 className=" font-normal ">Personal Information</h3>
              </div>
              {/* Email_input */}
              <div className="input_div w-full lg:w-4/5">
                <label className="common_color text-base font-medium">Email</label>
                <input
                  placeholder="example@mail.com "
                  className="common_input w-full  pt-2"
                />
              </div>
              {/* Information_input */}
              <div className="flex flex-col lg:flex-row w-full lg:w-4/5 pt-6 pb-2">
                {/* first_name */}
                <div className="input_div  w-full lg:w-2/4 lg:pr-8">
                  <label className="common_color text-base font-medium">
                    First Name
                  </label>
                  <input
                    placeholder="Name"
                    className="common_input w-full pt-2"
                  />
                  {/* chechk_box */}
                  <label class="checkbox_container mt-2.5 mb-6 lg:mb-6 ml-2.5">
                    <span className="absolute mt-1 font-medium">
                      Show in my public profile
                    </span>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                {/* Last_name */}
                <div className="input_div w-full lg:w-2/4 pt-6 lg:pt-0 lg:pl-8">
                  <label className="common_color text-base font-medium">
                    Last Name
                  </label>
                  <input
                    placeholder="Name"
                    className="common_input w-full pt-2"
                  />
                </div>
              </div>
              {/* country_input */}
              <div className="country_input flex flex-col lg:flex-row w-full lg:w-4/5 pt-6 lg:pt-6">
                {/* Country_name */}
                <div className="input_div w-full lg:w-2/4  lg:pr-8">
                  <label className="common_color text-base font-medium">
                    Country Name
                  </label>
                  <select className="select_input w-full pt-2 lg:pt-4">
                    <option>Country</option>
                  </select>
                </div>
                {/* City_name */}
                <div className="input_div w-full lg:w-2/4 pt-6 lg:pt-0 lg:pl-8">
                  <h3 className="common_color text-base font-medium">City Name</h3>
                  <input
                    placeholder="City"
                    className="common_input w-full pt-2 lg:pt-4"
                  />
                </div>
              </div>
              {/* Username_input */}
              <div className=" w-full lg:w-4/5 pt-6 lg:pt-6">
                {/* Username_name */}
                <div className="input_div w-full ">
                  <label className="common_color text-base font-medium">
                    Username
                  </label>
                  <input
                    placeholder="Username"
                    className="common_input w-full pt-2"
                  />
                </div>
              </div>
              {/* Social_Media_input */}
              <div className="Social_Media_input  w-full lg:w-4/5 pt-6  lg:pt-14 pb-6 lg:pb-6">
                {/* first_name */}
                <div className="input_div w-full ">
                  <h3 className="common_color text-base font-medium">
                    Social Media Accounts
                  </h3>
                  {/* top_images_div */}
                  <div className=" top_images_div w-full lg:w-2/5   flex flex-col lg:flex-row lg:py-4">
                    {/* youtube */}
                    <div className="image_input_div flex items-center py-2 lg:py-0">
                      {/* youtube_image */}
                      <div>
                        <img src={You} alt="" />
                      </div>
                      {/* youtube_input */}
                      <div className="input_div px-2 w-full lg:w-3/4	">
                        <input
                          placeholder="Youtube Url"
                          className="common_color text-center w-full "
                        />
                      </div>
                    </div>
                    {/* instagram */}
                    <div className="image_input_div flex items-center py-2 lg:py-0">
                      {/* instagram_image */}
                      <div>
                        <img src={Insta} alt="" />
                      </div>
                      {/* instagram_input */}
                      <div className="input_div px-2 w-full lg:w-3/4	">
                        <input
                          placeholder="@user"
                          className="common_color text-center w-full "
                        />
                      </div>
                    </div>
                  </div>
                  {/* down_images_div */}
                  <div className=" top_images_div w-full lg:w-2/5 flex flex-col lg:flex-row">
                    {/* hangout */}
                    <div className="image_input_div flex items-center py-2 lg:py-0">
                      {/* hangout_image */}
                      <div>
                        <img src={Hang} alt="" />
                      </div>
                      {/* hangout_input */}
                      <div className="input_div px-2 w-full lg:w-3/4	">
                        <input
                          placeholder="@user"
                          className="common_color text-center w-full"
                        />
                      </div>
                    </div>
                    {/* twitter */}
                    <div className="image_input_div flex items-center py-2 lg:py-0">
                      {/* twitter_image */}
                      <div>
                        <img src={Tweet} alt="" />
                      </div>
                      {/* Twitter_input */}
                      <div className="input_div px-2 w-full lg:w-3/4	">
                        <input
                          placeholder="@user"
                          className="common_color text-center w-full "
                        />
                      </div>
                    </div>
                  </div>
                  <input className="common_input w-full h-0" />
                </div>
              </div>
              {/* heading_button */}
              <div className=" heading_button  py-0 lg:py-6 ">
                <h3 className="text-md lg:text-xl font-normal pb-2">Favourite Games</h3>
                <button className="text-base font-medium px-4">Reselect</button>
              </div>
              {/* chechk_box_text */}
              <div className=" py-8 lg:py-0 lg:pt-2.5 lg:pb-7">
                <label class="chechk_box_text ">
                  <span className="relative mt-1  font-medium">
                    I want to recive Emails from OneUpGaming
                  </span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              {/* password_input */}
              <div>
                {/* current_password */}
                <div className="input_div w-full lg:w-4/5">
                  <label className="common_color text-base font-medium">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="common_input w-full  pt-2"
                  />
                </div>
                {/* New_password */}
                <div className="input_div w-full lg:w-4/5 pt-6 lg:pt-2 lg:pb-2">
                  <label className="common_color text-base font-medium">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="common_input w-full  pt-0 lg:pt-2"
                  />
                </div>
                {/* Confirm_new_password */}
                <div className="input_div w-full lg:w-4/5 pt-6 lg:pt-2 ">
                  <label className="common_color text-base font-medium">
                    Confirm new Password
                  </label>
                  <input
                    type="password"
                    placeholder="******"
                    className="common_input w-full  pt-0 lg:pt-2"
                  />
                </div>
              </div>
              {/* button_div */}
              <div className="button_div flex justify-center py-8">
                <div className="lg:w-1/3 ">
                  <button className="text-base font-medium px-16 py-1">
                    SAVE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  export default ProfileSetting;