import React, { useState, useContext, Fragment } from 'react';
import { GoogleSheetsContext } from '../../../../utils/contexts/googleSheetsContext';
import SheetsListItem from './SheetsListItem';
import SheetDetailsForm from './SheetDetailsForm';

const SheetsList = () => {
    const [displayState, setDisplayState] = useState(true);
    const [sheetNamesState, setSheetNamesState] = useState([]);
    const [docIdState, setDocIdState] = useState(null);
    const [sheetsState] = useContext(GoogleSheetsContext);

    const toggle = (sheet_names = null, doc_id = null) => { 
        if(sheet_names) setSheetNamesState(sheet_names);
        if(doc_id) setDocIdState(doc_id);
        setDisplayState(!displayState);
    };

    const get_body = (name = null, doc_id = null) => {
        if(displayState){
            return sheetsState.sheets.map(sheet => {
                return <SheetsListItem toggle={toggle} doc_id={doc_id} key={sheet.id} id={sheet.id} name={sheet.name} />
            })
        } else {
            return <SheetDetailsForm toggle={toggle} doc_id={docIdState} sheets={sheetNamesState} name={name} />
        }
    }

    return (
        <Fragment>
            {
                get_body()
            }
        </Fragment>
    )
}

export default SheetsList;