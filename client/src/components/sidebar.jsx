import React, { useEffect, useState, use } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Image } from "semantic-ui-react";
import { Rating, Modal, Confirm } from "semantic-ui-react";

import IMAGES from "../assets/hero_blob.png";


const Profile = () => {

  const { user, isAuthenticated, logout } = useAuth0();
  const [confirm, setConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);
    const [confirmDeleteUser, setConfirmDeleteUser] = useState(false);


  const user_id = user.sub;
  console.log("user", user_id);

  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    username: user.nickname,
    picture: user.picture,
  });

  const getUser = async () => {
    try {
      const userId = user_id;
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

 
  useEffect(() => {
    getUser();
  }, [user]);


  // functionality to handle logout
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleDeleteUser = async () => {
    const user_id = user.sub;
    try {
      const response = await fetch(`/api/users/${user_id}`, {
        method: "DELETE",
      });
      handleLogout();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${userData.user_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log("user updated", data);
      if (response.ok) {
        setUserData(data);
        setShowModal(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    isAuthenticated && (
      <div data-testid='profile' className="profile">
        <div className="sidebar">

        <h2>Profile </h2>
        
          <Image
            avatar
            size="small"
            src={userData.picture ? userData.picture : IMAGES}
            // alt={userData.name}
          />
          <div className="sidebarItem">
            <h2>{userData.name}</h2>
          </div>
          <div className="sidebarItem">
            <div className="sidebarButton">
              {/* <Modal
                trigger={<Button>Update Profile</Button>}
                open={showModal}
                onClose={() => setShowModal(false)}
                onOpen={() => setShowModal(true)}
              >
                <Modal.Header>Update your profile</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <form className="grid grid-cols-1 gap-6">
                      <input
                        type="text"
                        value={userData.name}
                        name="name"
                        onChange={handleChange}
                        className="
                          mt-1
                          block
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0
                        "
                      />
                      <input
                        type="email"
                        value={userData.email}
                        name="email"
                        onChange={handleChange}
                        className="
                          mt-1
                          block
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0
        "
                      />
                      <input
                        type="text"
                        value={userData.username}
                        name="username"
                        onChange={handleChange}
                        className="
                          mt-1
                          block
                          w-full
                          rounded-md
                          bg-gray-100
                          border-transparent
                          focus:border-gray-500 focus:bg-white focus:ring-0
        "
                      />
                    </form>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="blue" onClick={onSubmitForm}>
                    Update
                  </Button>
                  <Button color="red" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                </Modal.Actions>
              </Modal> */}
            </div>

            <div className="sidebarButton">
              <Modal
                trigger={<Button>Delete Profile</Button>}
                open={confirmDeleteUser}
                onClose={() => setConfirmDeleteUser(false)}
                onOpen={() => setConfirmDeleteUser(true)}
                size="small"
              >
                <Modal.Header>
                  <p className="text-center text-red-500 text-3xl">
                    Are you sure you want to delete your account?
                  </p>
                </Modal.Header>
                <Modal.Content>
                  <Image
                    centered
                    size="medium"
                    // src={IMAGES.mooviewQuestion}
                    wrapped
                  />
                  <Modal.Description>
                    <p className="text-center font-bold text-xl">
                      This action
                      cannot be undone.You will loose all RDA values.
                    </p>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color="blue"
                    onClick={() => setConfirmDeleteUser(false)}
                  >
                    Cancel
                  </Button>
                  <Button color="red" onClick={handleDeleteUser}>
                    Delete
                  </Button>
                </Modal.Actions>
              </Modal>
            </div>
          </div>
        </div>
        
      </div>
    )
  );
};

export default Profile;