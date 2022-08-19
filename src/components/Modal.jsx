import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css";
import userImg from "../assets/images/unnamed.png";
import mvola from "../assets/images/LOGO_MVOLA_prev_ui (2).png";
import paypal from "../assets/images/paypal (2).png";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  border: "none",
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="container"
      >
        <Box sx={style}>
          <div className="modal-header">
            <h2 className="logo">Company</h2>
            <div className="user">
              <img className="userImg" src={userImg} alt="" />
              <h2 className="name">Ricardo</h2>
            </div>
          </div>
          <div className="section">
            <h1>Start your premium subsciption</h1>
            <span className="check">Check other plans</span>
            <div className="card-choice">
              <div className="card-one">
                <div className="top">
                  <input name="select" type="radio" />
                  <h5 className="money">
                    Ar <span>10000</span>/Mois
                  </h5>
                </div>
                <p className="p1">Lorem, ipsum dolor.</p>
                <p className="p2">Lorem, ipsum dolor.</p>
              </div>
              <div className="card-one">
                <div className="top">
                  <input name="select" type="radio" />
                  <h5 className="money">
                    Ar <span>10000</span>/Mois
                  </h5>
                </div>
                <p className="p1">Lorem, ipsum dolor.</p>
                <p className="p2">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="tabs-box">
            <Box className="boxtab" sx={{ width: 500 }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChangeTabs}
                  textColor="inherit"
                  variant="fullWidth"
                  TabIndicatorProps={{ style: { background: "coral" } }}
                  aria-label="full width tabs example"
                  style={{ backgroundColor: "white" }}
                >
                  <Tab
                    label={<img className="imgMvola" src={mvola} />}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={<img className="imgMvola" src={paypal} />}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <form action="">
                    <div className="card-number">
                      <label>Card number</label>
                      <input type="number" placeholder="4432 - 5648 - 9875" />
                    </div>
                    <div className="bottom">
                      <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="date" />
                      </div>
                      <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="date" />
                      </div>
                    </div>
                    <div className="btnpay">
                      <button className="btn">Payer Maintenant</button>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <form action="">
                    <div className="card-number">
                      <label>Card number</label>
                      <input type="number" placeholder="4432 - 5648 - 9875" />
                    </div>
                    <div className="bottom">
                      <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="date" />
                      </div>
                      <div className="form-group">
                        <label>Expiration Date</label>
                        <input type="date" />
                      </div>
                    </div>
                    <div className="btnpay">
                      <button className="btn">Payer Maintenant</button>
                    </div>
                  </form>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
