import { useQuery } from "@tanstack/react-query";
import List from "components/List";
import Loading from "components/Loading";
import { FilterOptions } from "models/interfaces/bookingOptions.interface";
import { useSelector } from "react-redux";
import { selectFilterOptions } from "reducers/bookingOptions/bookingOptions.selector";
import { getData } from "services/getData";

const getFilterResults = (data: [], filterOptions: FilterOptions) => {
  const filteredResults = data.filter(
    (dataOption) =>
      dataOption["Bathrooms"] === filterOptions.bathrooms &&
      dataOption["Bedrooms"] === filterOptions.bedrooms &&
      dataOption["Parking"] === filterOptions.parkings &&
      dataOption["Sale Price"] <= filterOptions.priceRange
  );

  return filteredResults;
};

const ListOfItems = (): JSX.Element => {
  const { data } = useQuery({
    queryKey: ["listings"],
    queryFn: getData,
  });

  const filterOptions = useSelector(selectFilterOptions);
  const listData = !!filterOptions
    ? getFilterResults(data, filterOptions)
    : data;
  if (data) {
    return <List data={listData} />;
  }

  return <Loading />;
};
export default ListOfItems;
