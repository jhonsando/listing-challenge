import "./styles.css";

export type ListItemPropsTypes = {
  key: number;
  title: string;
  imageUrl: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
};

const ListItem = (listItemProps: ListItemPropsTypes): JSX.Element => {
  const { title, imageUrl, location, beds, baths, price } = listItemProps;
  return (
    <section className="list_item__container">
      <div>
        <img alt={`Image for ${title}`} src={imageUrl} />
      </div>
      <div className="list_item__item-detail">
        <h1>{title}</h1>
      </div>
      <div className="list_item__item-detail">
        <h2>{location}</h2>
      </div>
      <div className="list_item__item-detail">
        <h3>{`${beds} beds | ${baths} baths`}</h3>
      </div>
      <div className="list_item__item-detail">
        <h4>{`$ ${price}`}</h4>
      </div>
      <div className="list_item__item-detail">
        <button aria-label="View details">View Details</button>
      </div>
    </section>
  );
};

export default ListItem;
