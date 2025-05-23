import React from 'react'
import { CustomButton } from '../Common/CustomButton'
import { ImageWrapper } from '../Common/ImageWrapper'
import { getFilteredBanners } from '@/Utils/Utils';

export const TeamsBannerAccount = ({ data }) => {
    const banners = getFilteredBanners(data);
    const content = banners[0];
    if (!content) return;

    return (
        <section className="section-banner-our-team banner-account mt-lg-40 mt-mobile-10 mb-lg-10 ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="container-banner">
                            <div className="container-text white-1">
                                <span
                                    className="d-block fs--40 fw-600 pb-20"
                                    data-aos="fadeIn .6s ease-in-out 0s, d:loop"
                                >
                                    {content.description}
                                </span>
                                <h3
                                    className="fs-lg-90 fs-mobile-60 lh-100 fw-600 split-words"
                                    data-aos="d:loop"
                                >
                                    {content.title}
                                </h3>
                                <CustomButton
                                    customClasses={"btn-contact btn-border-white no-mobile mt-60"}
                                    data={{
                                        label: content.buttonLabel,
                                        action: content.buttonAction
                                    }}
                                    attributes={{
                                        "data-cursor-style": "off",
                                        "data-aos": "fadeIn .6s ease-in-out 0s, d:loop"
                                    }}
                                    showArrow={false}
                                >
                                </CustomButton>
                                <CustomButton
                                    customClasses={"btn-contact btn-blue no-desktop mt-tablet-20 mt-phone-135"}
                                    data={{
                                        label: content.buttonLabel,
                                        action: content.buttonAction
                                    }}
                                    attributes={{
                                        "data-aos": "fadeIn .6s ease-in-out 0s, d:loop"
                                    }}
                                    showArrow={false}
                                >
                                </CustomButton>
                            </div>
                            <div className="container-img bg-img bg-black-1">
                                <ImageWrapper defaultDimensions={{ width: 1374, height: 547 }} url={content.bannerImage} attributes={{ "data-aos": "fadeIn 1.2s ease-out-cubic 0s, d:loop" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
