import React, { useState } from 'react';
import { Button, InlineLoading, Tile } from '@carbon/react';
import { useVisits } from './prescriptions.resource';
import { DataTableSkeleton } from '@carbon/react';
import { formatTime, parseDate, Visit } from '@openmrs/esm-framework';

const Visits = () => {
    const { visits, isLoading } = useVisits();
   
    {if (isLoading) {
      return <DataTableSkeleton role="progressbar" />
    }  }  
    
    return (
        <Tile>
              {visits ? `${visits.data.results[0].uuid} ${visits.data.results[0].encounters}` 
              : 'No data found' }   
        </Tile>                 
      );
  }   
   
  export default Visits;