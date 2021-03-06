import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './AdminFAQ.css';
import Nav from '../../Nav/Nav.js';
import { Button, Typography } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';



class AdminFAQ extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FAQ' });
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  }

  render() {
    console.log('FAQ PROPS', this.props.store.faq);
    
    return (
      <div>
        <Nav />
        <center>
          <div className='adminRulesAndFaqHeader'>
              <Typography style={{color: '#4d4d4f', fontFamily: 'Poppins'}} variant='h5'>FAQ</Typography>
            </div>
            {this.props.store.faq.map((item, i) => 
                <Document file={item.file_url} key={i}> 
                  <Page pageNumber={1} />
                </Document>
            )}
          <div className='adminRulesAndFaqBtn'>

            <Button variant='contained' 
                color='primary'
                size= 'large'
                style={{margin: '.5rem', color: 'white', background: '#054f95'}}
                onClick={()=>this.props.history.push('/editFAQ')}>
                Edit FAQ
            </Button>
          </div>

            {this.props.store.faq.map((item, i) => 
                <Document file={item.file_url} key={i}> 
                  <Page pageNumber={1} />
                </Document>
                  )}
          </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminFAQ);