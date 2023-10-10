import { useQuery } from "@tanstack/react-query";
import List from "components/List";
import Loading from "components/Loading";
import { getData } from "services/getData";

const ListOfItems = (): JSX.Element => {
  const { data } = useQuery({
    queryKey: ["listings"],
    queryFn: getData,
  });

  if (data) {
    return <List data={data} />;
  }

  return <Loading />;
};
export default ListOfItems;
