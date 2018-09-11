import React from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button, Icon } from '@material-ui/core';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DateTimePicker } from 'material-ui-pickers';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      showPicker: false
    }

    this.handlePublishClick = this.handlePublishClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handlePublishClick() {

  }

  handleDateChange(newDate) {
    this.setState({
      date: newDate
    });
  }

  render() {
    return (
      <div className='createPost-container'>
        <div className='createPost-form-container' style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>Create Post</h1>

          <form noValidate autoComplete='off' className='createPost-form'>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
              <TextField
                fullWidth
                required
                id='caption'
                label='Enter a caption'
                placeholder='caption'
                margin='normal'
              >
              </TextField>
            </div>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px', display: 'block'}}>
              <TextField
                fullWidth
                required
                multiline
                id='content'
                label='Enter content'
                margin='normal'
                rows={5}
              >
              </TextField>
              <TextField
                fullWidth
                required
                multiline
                id='picture-url'
                label='Enter a picture URL'
                placeholder='URL'
                margin='normal'
              >
              </TextField>
              <div style={{ width: '100%' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    value={this.state.date}
                    disablePast
                    required
                    onChange={this.handleDateChange}
                    label="Publish Date"
                    showTodayButton
                    style={{ width: '300px' }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <Button
                variant="contained"
                size="medium"
                className='save-btn'
                color='primary'
                style={{ margin: '20px' }}
              > Save </Button>
              <Button
                variant="contained"
                size="medium"
                className='publish-btn'
                color='primary'
                style={{ margin: '20px' }}
              > Publish </Button>
            </div>
            <div>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;