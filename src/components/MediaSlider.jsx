import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MediaSlider = ({ media, type }) => {
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
                {media.map(item => {
                    const posterUrl = `${process.env.REACT_APP_IMGURL}/${item.backdrop_path}`;
                    return (
                        <div key={item.id}>
                            <img
                                src={posterUrl}
                                alt={`Banner ${item.name || item.title}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default MediaSlider;
