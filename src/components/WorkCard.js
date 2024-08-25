import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import img7 from '../assets/images/img7.jpg';
import "./WorkCardStyles.css";
import { Modal, Button } from '@mui/material';

const WorkCard = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p className="content">{props.text}</p>
        <p>
          <button onClick={handleOpen} style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>see more...</button>
        </p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <NavLink to={props.gitlink} className="btn">Source</NavLink>
        </div>
      </div>

      <div className='modal'>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '75%',
            color: '#000',
            backgroundColor: '#191970',
            '@media (max-width: 600px)': {
              alignItems: 'flex-start', // Adjust alignment for small screens
            },
          }}
        >
          <div
            sx={{
              backgroundColor: '#191970',
              padding: 2,
              borderRadius: 4,
              boxShadow: 24,
              width: '50%',
              '@media (max-width: 600px)': {
                width: '80%', // Adjust width for small screens
              },
            }}
          >
            <h2 className='project-title'>{props.title}</h2>
            <p>{props.text}</p>
            <br></br>
            <br></br>
            <Button sx={{color: '#fff'}} onClick={handleClose}>Close</Button>
          </div>
        </Modal>
      </div>

    </div>
  );
}

export default WorkCard;