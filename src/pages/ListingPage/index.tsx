import ListOfItems from "containers/ListOfItems";
import ListFilter from "containers/ListFilter";
import "./styles.css";
const ListingPage = (): JSX.Element => {
  return (
    <section className="listing-page">
      <ListFilter />
      <ListOfItems />
    </section>
  );
};

export default ListingPage;
