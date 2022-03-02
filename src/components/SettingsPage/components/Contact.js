import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import CustomButton from "./../../contractorProfile/components/Button/Button";
import { axiosInstace } from './../../../network/axiosConfig';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Contact = props => {
  const [Address, setAddress] = React.useState("");
  const [formValues, setFormValues] = useState({});

  const handleChange = event => {
    setAddress(event.target.value);
  };
  const handleFormChange = (event) => {
    switch (event.target.name) {
        case "name":
            setFormValues({
                ...formValues,
                name: event.target.value,
            });
            break;
        case "email":
            setFormValues({
                ...formValues,
                email: event.target.value,
            });
            break;
        default:
            break;
    }
};

const handleSubmitForm = (formValues) => {
  console.log("formValues",formValues)
  // console.log(data)
  axiosInstace.patch("contractors/updateMe" , formValues)
    .then((res) => {
      console.log(res.data.data.user)
      MySwal.fire(`Data changed Successfully`).then((result) => {
        if (result.isConfirmed){
          window.location.reload()
        }
      })
    }) 
    .catch((err) => {
      MySwal.fire(`Error , Try again`).then((result) => {
        if (result.isConfirmed){
          window.location.reload()
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
                  <h2>User Name :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name='name'
                    label={props.contractorDetails.name}
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>User Email :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name='email'
                    label={props.contractorDetails.email}
                    onChange={(e) => handleFormChange(e)}
                  />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>Phone :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth name='Phone' label='Phone' />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>Address :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>
                        Address
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={Address}
                        label='Address'
                        onChange={handleChange}
                      >
                        <MenuItem value={"Cairo"}>Cairo</MenuItem>
                        <MenuItem value={"Obour"}>Obour</MenuItem>
                        <MenuItem value={"Menia"}>Menia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>About Me :</h2>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label='About Me' multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={() => handleSubmitForm(formValues)} className='site_btn'>
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
};

export default Contact;
