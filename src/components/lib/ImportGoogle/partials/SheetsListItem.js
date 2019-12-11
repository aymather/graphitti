import React from 'react';
import useGoogleSheets from '../../../../utils/hooks/useGoogleSheets';

const SheetsListItem = props => {
    const { getSheetDetails } = useGoogleSheets();

    const toggle = async () => {
        const sheets = await getSheetDetails(props.id);
        const sheet_names = sheets.map(sheet => {
            return {
                name: sheet.properties.title,
                id: sheet.properties.index
            };
        })
        props.toggle(sheet_names, props.id);
    };

    return (
        <div onClick={toggle} className='sheets-list-item' id={props.id}>
            <span>{props.name}</span>
        </div>
    )
}

export default SheetsListItem;