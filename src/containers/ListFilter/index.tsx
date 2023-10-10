import React from "react";
import "./styles.css";
import { setFilters } from "reducers/bookingOptions/bookingOptions.actions";
import { useAppDispatch } from "app/hooks";
const ListFilter = (): JSX.Element => {
  const [bedrooms, setBedrooms] = React.useState(1);
  const [bathrooms, setBathrooms] = React.useState(1);
  const [parkings, setParkings] = React.useState(1);
  const [priceRange, setPriceRange] = React.useState(1);
  const dispatch = useAppDispatch();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const filterOptions = {
      bedrooms,
      bathrooms,
      parkings,
      priceRange,
    };

    dispatch(setFilters(filterOptions));
  };
  return (
    <section className="filter">
      <form className="filter__form" onSubmit={handleSubmit}>
        <div className="filter__form__option">
          <label className="word--nowrap" id="bedrooms-input">
            Bedrooms:
          </label>
          <input
            type="number"
            aria-labelledby="bedrooms-input"
            className="filter__form__option--range-input"
            min={1}
            onChange={(e) => setBedrooms(parseInt(e.target.value))}
            required
            value={bedrooms}
          />
        </div>
        <div className="filter__form__option">
          <label className="word--nowrap" id="bathrooms-input">
            Bathrooms:
          </label>
          <input
            type="number"
            aria-labelledby="bathrooms-input"
            className="filter__form__option--range-input"
            min={1}
            onChange={(e) => setBathrooms(parseInt(e.target.value))}
            required
            value={bathrooms}
          />
        </div>
        <div className="filter__form__option">
          <label className="word--nowrap" id="parking-input">
            Parking:
          </label>
          <input
            type="number"
            aria-labelledby="parking-input"
            className="filter__form__option--range-input"
            min={1}
            onChange={(e) => setParkings(parseInt(e.target.value))}
            required
            value={parkings}
          />
        </div>
        <div className="filter__form__option">
          <label className="word--nowrap" id="price-range-input">
            Price Range:
          </label>
          <input
            type="range"
            aria-labelledby="price-range-input"
            className="filter__form__option--price-input"
            name="price-range"
            min={1}
            max={1000000}
            required
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
          />
        </div>
        <div className="v-align--center">
          <button aria-label="search">Search</button>
        </div>
      </form>
      <label>{`Price Range: ($1 - $${priceRange})`}</label>
    </section>
  );
};

export default ListFilter;
