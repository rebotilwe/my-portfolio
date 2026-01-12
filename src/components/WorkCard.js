import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import { Modal } from '@mui/material';

const WorkCard = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <img src={props.imgsrc} alt={props.title} />
        </div>

        <div className="project-body">
          <h2 className="project-title">{props.title}</h2>

          <p className="project-text">
            {props.text.slice(0, 140)}...
          </p>

          <button className="see-more" onClick={() => setOpen(true)}>
            Read more →
          </button>

          <div className="pro-btns">
            {props.view && (
              <NavLink to={props.view} target="_blank" className="btn">
                Live
              </NavLink>
            )}
            {props.gitlink && (
              <NavLink to={props.gitlink} target="_blank" className="btn btn-light">
                Code
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="project-modal">
          <h2>{props.title}</h2>
          <p>{props.text}</p>

          <button className="btn" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default WorkCard;
