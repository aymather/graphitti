import React, { Fragment, useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import useGoogleSheets from '../../../utils/hooks/useGoogleSheets';
import { GoogleSheetsContext } from '../../../utils/contexts/googleSheetsContext';
import { Spinner } from 'reactstrap';
import { SheetsList } from './partials';
import ConnectGoogleBtn from '../ConnectGoogle';

const Index = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [sheetsState, setSheetsState] = useContext(GoogleSheetsContext);

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    };

    const { getSheets } = useGoogleSheets();

    useEffect(() => {
        getSheets();
    }, [])

    const get_body = () => {
        if(sheetsState.isLoading){
            return <Spinner color='dark' />
        } else if (sheetsState.isConnected){
            return <SheetsList />
        } else {
            return <ConnectGoogleBtn />
        }
    }

    return (
        <Fragment>
            <FontAwesomeIcon id="Popover1" icon={faUpload} />

            <Popover id='google-sheets-popover' placement="right" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Google Sheets</PopoverHeader>
                <PopoverBody>
                    {
                        get_body()
                    }
                </PopoverBody>
            </Popover>
        </Fragment>
    )
}

export default Index;