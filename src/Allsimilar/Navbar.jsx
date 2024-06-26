import React from "react";
import style from "../Css/Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa6";
import { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Navbar = () => {
  const [flyit, setFlyit] = useState(false);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [open1, setOpen1] = useState(false);

  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  return (
    <div className={style.navpri}>
      <div className={style.nav1}>
        <div className={style.navp1}>
          Brand Waali Quality, Bazaar Waali Deal!
        </div>
        <div className={style.nav2}>
          <div>Impact@Snapdeal</div>
          <div>Help Center</div>
          <div>Sell On Snapdeal</div>
          <div className={style.nav3}>
            <img
              className={style.navimg}
              src="https://i4.sdlcdn.com/img/platinum09/downloadappicon2ndsep.png"
              alt=""
            />
            <div>Download App</div>
          </div>
          <div>Donate for elderly</div>
        </div>
      </div>

      <div className={style.navpart2}>
        <div className={style.divlogo}>
          <img
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </div>
        <div className={style.inputone}>
          <input type="text" placeholder="Search products &amp; brands" />
          <button className={style.navbutton}>
            <IoSearch className={style.search1} />
            Search
          </button>
        </div>
        <div className={style.cart}>
          <div className={style.cartp}>Cart</div>
          <IoCartOutline className={style.carticon} />
        </div>

        <div
          className={flyit ? style.signin2 : style.signin}
          onMouseOver={() => {
            setFlyit(true);
          }}
          onMouseLeave={() => {
            setFlyit(false);
          }}
        >
          <div className={style.signinp}>SignIn</div>
          <div className={style.account}>
            <BiSolidUser className={style.accountsmall} />
          </div>
        </div>
      </div>

      {flyit && (
        <div
          className={style.blackfly}
          onMouseOver={() => {
            setFlyit(true);
          }}
          onMouseLeave={() => {
            setFlyit(false);
          }}
        >
          <div className={style.partfly}>
            <div>
              <RiAccountCircleLine className={style.iconfly} />
              <p className={style.flyp2}>Your Account</p>
            </div>
            <div>
              <FaFirstOrder className={style.iconfly} />
              <p className={style.flyp2}>Your Orders</p>
            </div>
            <div>
              <MdOutlineFavoriteBorder className={style.iconfly} />
              <p className={style.flyp2}>Shortlist</p>
            </div>
          </div>

          <div className={style.rullerhome}></div>
          <p className={style.usernew}>If you are a new user</p>
          <p className={style.register} onClick={onOpenModal}>
            Register
          </p>
          <button className={style.loginhome} onClick={onOpenModal1}>
            LOGIN
          </button>
        </div>
      )}

      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <p className={style.modalp1}>Sign Up On Snapdeal</p>
          <p className={style.modalp2}>
            Please provide Name, Email and Password to Sign Up
          </p>
          <p className={style.modalp3}> on Snapdeal</p>
          <div>
            <input type="text" className={style.modinput} placeholder="Name" />
          </div>
          <div>
            <input
              type="email"
              className={style.modinput}
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="password"
              className={style.modinput}
              placeholder="Password"
            />
          </div>
          <div>
            <button className={style.rigbutton}>CONTINUE</button>
          </div>
          <p className={style.modalp2} style={{ textAlign: "center" }}>
            or Login Using
          </p>
          <div>
            <button className={style.riggoogle}>Google</button>
          </div>
        </Modal>
      </div>

      <div>
        <Modal open={open1} onClose={onCloseModal1} center>
          <p className={style.modalp1}>Login On Snapdeal</p>
          <p className={style.modalp2}>
            Please provide Email and Password to Login
          </p>
          <p className={style.modalp3}> on Snapdeal</p>
          <div>
            <input
              type="email"
              className={style.modinput}
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="password"
              className={style.modinput}
              placeholder="Password"
            />
          </div>
          <div>
            <button className={style.rigbutton}>CONTINUE</button>
          </div>
          <p className={style.modalp2} style={{ textAlign: "center" }}>
            or Login Using
          </p>
          <div>
            <button className={style.riggoogle2}>Google</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
