import React, { Component } from 'react';
import { 
    Checkbox,
    FormGroup,
    Radio,
    ControlLabel,
    FormControl,
    Button,
    HelpBlock,
    Form,
    Col
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
        <Col xs={2} componentClass={ControlLabel}>
            {label}  
        </Col>
      <Col xs={10}>
        <FormControl {...props}/>
      </Col>
      <Col xs={12}>
      {help && <HelpBlock>{help}</HelpBlock>}
        </Col>
      
    </FormGroup>
  );
}



export default class AddBookmarkForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
        url: '',
        title: '',
        category: ''
    }
  }

  categorySelection = () => {
    switch (this.state.category) {
        case '': 
            return (
                <FormGroup controlId="formControlsSelectMultiple">
                  <ControlLabel>Multiple select</ControlLabel>
                  <FormControl componentClass="select" multiple>
                    <option value="select">select (multiple)</option>
                    {this.props.categories.map((cat, i) => <option key={i} value={cat.name}>{cat.name}</option>)}
                  </FormControl>
                </FormGroup>
            )
            break;
        case 'Add New': 
            return (
                    <FieldGroup id="category"
                            label="Category"
                            help="Enter category to add" />
                )
            break;
        default:
            break;

    }
  }

  render() {
    return (
        <div>
            <Form horizontal>
                <FieldGroup id="url"
                            label="URL"
                            help="Enter URL of bookmark to save" />
                <FieldGroup id="title"
                            label="Title"
                            help="Enter a title for the bookmark" />
                {this.categorySelection()}
            </Form>
      </div>
    );
  }
}

// function CategorySelection({ })

// class FormInstance extends Component {

//     categorySelection = () => {

//     }

//     render() {
//         return (
//  <form>
//     <FieldGroup id="url"
//                 label="URL"
//                 help="Enter URL of bookmark to save" />
//     <FieldGroup id="title"
//                 label="Title"
//                 help="Enter a title for the bookmark" />
//     <FieldGroup id="category"
//                 label="URL"
//                 help="Enter URL of bookmark to save" />

//     <Checkbox checked readOnly>
//       Checkbox
//     </Checkbox>
//     <Radio checked readOnly>
//       Radio
//     </Radio>

//     <FormGroup>
//       <Checkbox inline>
//         1
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         2
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         3
//       </Checkbox>
//     </FormGroup>
//     <FormGroup>
//       <Radio name="radioGroup" inline>
//         1
//       </Radio>
//       {' '}
//       <Radio name="radioGroup" inline>
//         2
//       </Radio>
//       {' '}
//       <Radio name="radioGroup" inline>
//         3
//       </Radio>
//     </FormGroup>

//     <FormGroup controlId="formControlsSelect">
//       <ControlLabel>Select</ControlLabel>
//       <FormControl componentClass="select" placeholder="select">
//         <option value="select">select</option>
//         <option value="other">...</option>
//       </FormControl>
//     </FormGroup>
//     <FormGroup controlId="formControlsSelectMultiple">
//       <ControlLabel>Multiple select</ControlLabel>
//       <FormControl componentClass="select" multiple>
//         <option value="select">select (multiple)</option>
//         <option value="other">...</option>
//       </FormControl>
//     </FormGroup>

//     <FormGroup controlId="formControlsTextarea">
//       <ControlLabel>Textarea</ControlLabel>
//       <FormControl componentClass="textarea" placeholder="textarea" />
//     </FormGroup>

//     <FormGroup>
//       <ControlLabel>Static text</ControlLabel>
//       <FormControl.Static>
//         email@example.com
//       </FormControl.Static>
//     </FormGroup>

//     <Button type="submit">
//       Submit
//     </Button>
//   </form>
//         )
//     }
// }
// const formInstance = (
//   <form>


//     <Checkbox checked readOnly>
//       Checkbox
//     </Checkbox>
//     <Radio checked readOnly>
//       Radio
//     </Radio>

//     <FormGroup>
//       <Checkbox inline>
//         1
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         2
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         3
//       </Checkbox>
//     </FormGroup>
//     <FormGroup>
//       <Radio name="radioGroup" inline>
//         1
//       </Radio>
//       {' '}
//       <Radio name="radioGroup" inline>
//         2
//       </Radio>
//       {' '}
//       <Radio name="radioGroup" inline>
//         3
//       </Radio>
//     </FormGroup>

//     <FormGroup controlId="formControlsSelect">
//       <ControlLabel>Select</ControlLabel>
//       <FormControl componentClass="select" placeholder="select">
//         <option value="select">select</option>
//         <option value="other">...</option>
//       </FormControl>
//     </FormGroup>
//     <FormGroup controlId="formControlsSelectMultiple">
//       <ControlLabel>Multiple select</ControlLabel>
//       <FormControl componentClass="select" multiple>
//         <option value="select">select (multiple)</option>
//         <option value="other">...</option>
//       </FormControl>
//     </FormGroup>

//     <FormGroup controlId="formControlsTextarea">
//       <ControlLabel>Textarea</ControlLabel>
//       <FormControl componentClass="textarea" placeholder="textarea" />
//     </FormGroup>

//     <FormGroup>
//       <ControlLabel>Static text</ControlLabel>
//       <FormControl.Static>
//         email@example.com
//       </FormControl.Static>
//     </FormGroup>

//     <Button type="submit">
//       Submit
//     </Button>
//   </form>
// );

// export default AddBookmarkForm;