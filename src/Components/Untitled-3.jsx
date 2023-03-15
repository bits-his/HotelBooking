
export function useQuery() {
  
    return new URLSearchParams(useLocation().search);
  }
  export default useQuery;
  const query = useQuery();

  const country_name = query.get("country_name");