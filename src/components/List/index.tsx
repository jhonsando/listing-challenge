import ListItem from "components/ListItem";
import "./styles.css";

type ListPropsTypes = {
  data: [];
};
const List = (ListProps: ListPropsTypes): JSX.Element => {
  const { data } = ListProps;

  return (
    <section className="list-items__container">
      {data?.map((listItem) => (
        <ListItem
          title={listItem["Title"]}
          imageUrl={listItem["ThumbnailURL"]}
          location={listItem["Location"]}
          beds={listItem["Bedrooms"]}
          baths={listItem["Bathrooms"]}
          price={listItem["Sale Price"]}
          key={listItem["Id"]}
        />
      ))}
    </section>
  );
};
export default List;
