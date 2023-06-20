import PropTypes from 'prop-types';

export default function Rockets({
    rocketId,
    rocket_name,
    description,
    flickr_images,
    reserved,
}) {
    return (
        <div className="flex flex-col">
            <div id={rocketId} className="flex flex-row">
                <div>
                    <img src={flickr_images} className="img" alt="planet-img" />
                </div>
                <div>
                    <h2>{rocket_name}</h2>
                    <p>{description}</p>
                    {
                        reserved ? <button type="button">Cancel Reservation</button> : <button type="button">Reserve Rocket</button>
                    }
                </div>
            </div>
        </div>
    );
}

Rockets.propTypes = {
    rocketId: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.img.isRequired,
    reserved: PropTypes.bool.isRequired,
};
