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
      <div>{title}</div>
      <div>{location}</div>
      <div>{`${beds} beds | ${baths} baths`}</div>
      <div>{`$ ${price}`}</div>
      <div>
        <button aria-label="View details">View Details</button>
      </div>
    </section>
  );
};

export default ListItem;
