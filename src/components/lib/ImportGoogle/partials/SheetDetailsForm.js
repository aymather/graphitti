import React, { useState } from 'react';
import useGoogleSheets from '../../../../utils/hooks/useGoogleSheets';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const SheetDetailsForm = ({ toggle, sheets, doc_id }) => {
    const [state, setState] = useState({
        sheet_name: '',
        select_1: '',
        select_2: '',
        id: doc_id,
        sheets
    })

    const { getSheet } = useGoogleSheets();

    const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

    const get_sheet = async () => {
        console.log('Getting...');
        const sheet_details = await getSheet({
            sheet_id: state.id,
            sheet_name: state.sheet_name,
            select_1: state.select_1,
            select_2: state.select_2
        })
        console.log(sheet_details);
    }

    const onClick = (e, name, id) => {
        // First remove the "active"ness from all items
        var sheets = document.getElementsByClassName('sheet-names-list');
        for(var sheet of sheets){
            sheet.active = false;
            sheet.classList.remove('active');
        }

        // Add "active"ness to the clicked item
        e.target.active = true;
        e.target.classList.add('active');

        // Set that sheet name to state
        setState({
            ...state,
            sheet_name: name
        })
    }

    const render_sheet_names = () => {
        return sheets.map(sheet => {
            return (
                <ListGroupItem action className='sheet-names-list pointer' key={sheet.id} onClick={(e) => { e.persist(); onClick(e, sheet.name, sheet.id) }}>
                    {sheet.name}
                </ListGroupItem>
            )
        })
    }

    return (
        <div>
            <p onClick={toggle} className='pointer'>Back</p>
            <Form>
                <ListGroup>
                    {
                        sheets.length > 0 && render_sheet_names()
                    }
                </ListGroup>
                <FormGroup>
                    <Label for="select_1">Start</Label>
                    <Input onChange={handleChange} type="text" name="select_1" id="select_1" placeholder="A1" />
                </FormGroup>
                <FormGroup>
                    <Label for="select_2">End</Label>
                    <Input onChange={handleChange} type="text" name="select_2" id="select_2" placeholder="Z99" />
                </FormGroup>
                <Button onClick={get_sheet}>Get</Button>
            </Form>
        </div>
    )
}

export default SheetDetailsForm;

