import Siderbar from "../../Component/Sidebar/sidebar";
import "./Settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsProfile">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <label htmlFor="FileInput">
              <i className=" settingProfileIcon far fa-user-circle"></i>
            </label>
            <input type="file" name="" id="FileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" name="" placeholder="Tuncay " id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="" placeholder="Tuncay@tncy.com " id="" />
          <label htmlFor="">Password</label>
          <input type="Password" name="" placeholder=" Password" id="" />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Siderbar />
    </div>
  );
}
