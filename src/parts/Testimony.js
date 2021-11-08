import React from 'react';
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg';
import Star from 'elements/Star';
import Button from "elements/Button";

export default function Testimony({ data }) {
    return (
        <section className="container">
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 70 }}>
                    <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                        <img src={data.imageUrl} alt="Testimonials" className="position-absolute" style={{ zIndex: 2 }} />
                        <img src={TestimonyAccent} alt="Testimonial frame" className="position-absolute" style={{ margin: `-30px 0 0 30px`, zIndex: 1 }} />
                    </div>
                </div>
                <div className="col-6">
                    <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
                    <Star value={3.4} width={35} height={35} spacing={4}></Star>
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.content}
                    </h5>
                    <span className="text-gray-500">{data.familyName}, {data.familyOccupation}</span>
                    <div>
                        <Button className="btn btn px-5" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/$`}>Read Their Story</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
