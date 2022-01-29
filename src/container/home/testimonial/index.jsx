import React from "react";
import PropTypes from "prop-types";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SectionTitle from "../../../components/title";
import SingleTestimonial from "../../../components/testimonial";
import { StaticImage } from "gatsby-plugin-image";
import TeamWins from "../../../components/testimonial/TeamWins";
import UserWins from "../../../components/testimonial/UserWins";
const TestimonialArea = ({ data }) => {
    return (
       
        <section className="testimonial-section bg-secondary-90  relative">
            <span className=" "></span>
            <div className="container">                
                <div className="py-9  lg:py-16   lg:grid grid-cols-2 grid-flow-col-dense gap-x-8 ">
                    <div className=" ">
                        <h3 className="pl-2 font-bold max-w-3xl mb-2">RECENT WITHDRAW FROM THE WEBSITE</h3>
                        <div className="px-4 py-2 grid grid-cols-6 grid-flow-col-dense bg-[#181b28] rounded-t-2xl ">
                            <div className="col-span-4 ">
                               <h3>USER</h3> 
                            </div>
                            <div className="col-span-2">
                                <h3>WINNINGS</h3>
                            </div>
                        </div>
                        <div className="bg-secondary-100 rounded-b-2xl">
                            <UserWins image="/img/game-accounts/apex.png" price="6.00" name="User1"/>
                            <UserWins image="/img/game-accounts/apex.png" price="32.00" name="User2"/>
                            <UserWins image="/img/game-accounts/apex.png" price="62.00" name="User3"/>
                            <UserWins image="/img/game-accounts/apex.png" price="32.00" name="User4"/>
                            <UserWins image="/img/game-accounts/apex.png" price="62.00" name="User5"/>
                        </div>
                    </div>
                    <div >
                        <h3 className="pl-2 font-bold max-w-3xl mb-2 mt-4 lg:mt-auto">RECENT CASHOUT MATCH WINNERS</h3>
                        <div className="bg-secondary-100 rounded-2xl">
                        <div className=" px-4 py-2 grid grid-cols-6 grid-flow-col-dense bg-[#181b28] rounded-t-2xl ">
                            <div className="col-span-4 rounded-t-2xl ">
                               <h3>LAST WINNER</h3> 
                            </div>
                            <div className="col-span-2 rounded-t-2xl">
                                <h3>WINNINGS</h3>
                            </div>
                        </div>
                        <div className="bg-secondary-100 rounded-b-2xl">
                            <TeamWins image="/img/game-accounts/apex.png" price="6.00" name="Team1"/>
                            <TeamWins image="/img/game-accounts/apex.png" price="29.00" name="Team2"/>
                            <TeamWins image="/img/game-accounts/apex.png" price="11.00" name="Team3"/>
                            <UserWins image="/img/game-accounts/apex.png" price="6.00" name="User1"/>
                            <UserWins image="/img/game-accounts/apex.png" price="32.00" name="User2"/>
                        </div>
                        </div>

                    </div>

                </div>

                {/* Previous code */}
                {/* <div className=" py-9 px-10 lg:py-16 lg:px-24 bg-secondary-100 rounded-4xl"> */}

                    {/* <Swiper
                        layout={{
                            nav: "testimonial-navigation",
                            dots: "testimonial-dots-style",
                        }}
                        navigation={{
                            nextEl: ".testimonial-slider-button-next",
                            prevEl: ".testimonial-slider-button-prev",
                        }}
                        slidesPerView={1}
                        spaceBetween={0}
                    >
                        {data?.items &&
                            data?.items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <SingleTestimonial
                                        image={item?.images[0].src}
                                        alt={item?.images[0].alt}
                                        description={item?.description}
                                        name={item?.name}
                                        designation={item?.designation}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper> */}
                {/* </div> */}
                {/* <div className="z-10 transform pt-12">
                    <div className="testimonial-slider-button-prev swipper-arrow text-white left-1/2 ml-8 absolute top-2/4 transform w-68 h-55 flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover">
                        <StaticImage
                            src="../../../data/images/icons/navigation-arrow1.webp"
                            alt=""
                        />
                    </div>
                    <div className="testimonial-slider-button-next swipper-arrow text-white right-1/2 absolute top-2/4 transform w-68 h-55 flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover">
                        <StaticImage
                            src="../../../data/images/icons/navigation-arrow2.webp"
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
        </section>
    );
};
TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default TestimonialArea;
