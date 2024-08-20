import React, { useState, useEffect } from 'react';
import { Container, Card, Title, Input, Button, Dropdown } from './StyledComponents';

// Mock data for locations and users
const states = ['State1', 'State2'];
const districts = ['District1', 'District2'];
const blocks = ['Block1', 'Block2'];
const villages = ['Village1', 'Village2'];

const users = [
  { id: 1, username: 'JohnDoe', email: 'johndoe@example.com', state: 'State1', district: 'District1', block: 'Block1', village: 'Village1' },
  { id: 2, username: 'JaneSmith', email: 'janesmith@example.com', state: 'State2', district: 'District2', block: 'Block2', village: 'Village2' },
  // More mock data
];

function UpdateUserProfile() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileData, setProfileData] = useState({ username: '', email: '' });

  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [block, setBlock] = useState('');
  const [village, setVillage] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Filter users based on selected location criteria
    const filtered = users.filter(user =>
      (!state || user.state === state) &&
      (!district || user.district === district) &&
      (!block || user.block === block) &&
      (!village || user.village === village)
    );
    setFilteredUsers(filtered);
  }, [state, district, block, village]);

  useEffect(() => {
    if (selectedUser) {
      setProfileData({
        username: selectedUser.username,
        email: selectedUser.email
      });
    }
  }, [selectedUser]);

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') setState(value);
    if (name === 'district') setDistrict(value);
    if (name === 'block') setBlock(value);
    if (name === 'village') setVillage(value);
  };

  const handleUserSelect = (e) => {
    const userId = parseInt(e.target.value);
    const user = users.find(u => u.id === userId);
    setSelectedUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      // Mock implementation of updating profile
      console.log('Updated Profile:', { id: selectedUser.id, ...profileData });
      // In a real application, you would send this data to the backend
    }
  };

  return (
    <Container>
      <Card>
        <Title>Update User Profile</Title>
        <Dropdown name="state" onChange={handleLocationChange}>
          <option value="">Select State</option>
          {states.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Dropdown>
        <Dropdown name="district" onChange={handleLocationChange}>
          <option value="">Select District</option>
          {districts.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </Dropdown>
        <Dropdown name="block" onChange={handleLocationChange}>
          <option value="">Select Block</option>
          {blocks.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </Dropdown>
        <Dropdown name="village" onChange={handleLocationChange}>
          <option value="">Select Village</option>
          {villages.map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </Dropdown>

        {filteredUsers.length > 0 && (
          <>
            <Dropdown onChange={handleUserSelect}>
              <option value="">Select User</option>
              {filteredUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </Dropdown>

            {selectedUser && (
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={profileData.username}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={profileData.email}
                  onChange={handleChange}
                  required
                />
                <Button type="submit">Update Profile</Button>
              </form>
            )}
          </>
        )}
      </Card>
    </Container>
  );
}

export default UpdateUserProfile;
