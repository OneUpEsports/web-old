import React from "react";
const Footer = () => {
  return (
    <div>
      <div>
        {/*footer_up */}
        <div className="footer_up">
          <div className="flex justify-center">
            <div className="w-4/5 py-7 px-2.5">
              {/* heading */}
              <div>
                <h4 className="text-white text-base font-bold">
                  PRIVACY & LEGAL
                </h4>
              </div>
              <ul className="main_ul text-sm font-normal pb-2">
                <li className="text-sm font-normal pb-1">Legal notice</li>
                <li className="text-sm font-normal pb-1">Terms of use</li>
                <li className="text-sm font-normal pb-1">Privacy policy</li>
                <li className="text-sm font-normal pb-1">Cookies policy</li>
              </ul>
            </div>
          </div>
        </div>
        {/* down_footer */}
        <div className="down_footer">
          {/* text_div */}
          <div className="flex justify-center py-5">
            <p className="text-white text-xs font-semibold">
              © 2019 Glory4Gamers - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
