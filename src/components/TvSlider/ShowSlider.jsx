import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowSlider = ({ tv }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="w-full h-auto">
            <Slider {...settings}>
                {tv.map((show, id) => {
                    const posterUrl = `${process.env.REACT_APP_IMGURL}/${show.backdrop_path}`;
                    return (
                        <div key={show.id}>
                            <img
                                src={posterUrl}
                                alt={`Banner ${show.name + 1}`}
                                className="w-full h-full object-cover object-center"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default ShowSlider;
