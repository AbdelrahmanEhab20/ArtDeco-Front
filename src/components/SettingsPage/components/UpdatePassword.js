import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { axiosInstace } from './../../../network/axiosConfig';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);


export default function UpdatePassword(props) {
  // const [Password, setPassword] = React.useState("");
  const [formValues, setFormValues] = useState({});

  const handleFormChange = event => {
    switch (event.target.name) {
      case "passwordCurrent":
        setFormValues({
          ...formValues,
          passwordCurrent: event.target.value,
        });
        break;
      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        break;
      case "passwordConfirm":
        setFormValues({
          ...formValues,
          passwordConfirm: event.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmitForm = (formValues) => {
    console.log("formValues",formValues)
    // console.log(data)
    axiosInstace.patch("contractors/updateMyPassword" , formValues)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("company_token", res.data.token);
        MySwal.fire(`Data changed Successfully`).then((result) => {
          if (result.isConfirmed){
            window.location.reload()
          }
        })
      }) 
      .catch((err) => {
        MySwal.fire(`Error , Try again`).then((result) => {
          if (result.isConfirmed){
            // window.location.reload()
          }
        })
        console.log(err)
      });  
  };

  
  return (
    <>
      <Grid container className='section pb_50' spacing='10'>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item className='top_30'>
              <Grid container spacing={2}>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2> Change Password :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id='outlined-password-input'
                    className='mb-4'
                    fullWidth
                    name='passwordCurrent'
                    label='Current Password'
                    type='password'
                    onChange={(e) => handleFormChange(e)}
                  />
                  <TextField
                    id='outlined-password-input'
                    className='mb-4'
                    fullWidth
                    name='password'
                    label='New Password'
                    type='password'
                    onChange={(e) => handleFormChange(e)}
                  />
                  <TextField
                    id='outlined-password-input'
                    className='mb-4'
                    fullWidth
                    name='passwordConfirm'
                    label='Repeat New Password'
                    type='password'
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => handleSubmitForm(formValues)}
                    className='site_btn'
                  >
                    <span className='button_text'>Update Data</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
