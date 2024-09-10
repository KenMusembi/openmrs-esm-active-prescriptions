import useSWR from "swr";
import { openmrsFetch, Visit } from "@openmrs/esm-framework";
 
interface VisitData {
  results: Array<Visit>;
}
 
/* Custom data fetching hook */
export function useVisits() {
  const url = `/ws/rest/v1/visit?includeInactive=false`;
 
  const { data, error, isLoading, mutate } = useSWR<{
      [x: string]: any; data: VisitData 
}, Error>(url, openmrsFetch);
 
  return {
    visits: data,
    isLoading,
    error,
    mutate,
  };
}