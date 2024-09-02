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
        <div className="w-full h-auto fixed top-0 z-10 ">
            <Slider {...settings}>
                {media.map(item => {
                    return (
                        <div key={item.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                alt={`Banner ${item.name || item.title}`}
                                className="w-full h-full object-cover object-center border-b-2"
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default MediaSlider;
