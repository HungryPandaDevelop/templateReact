import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';

import { connect } from 'react-redux';

import UsersSearchPanel from 'pages/users/catalog/UsersSearchPanel';
import UserItem from 'pages/users/catalog/UsersItem';

const UserCatalog = ({ uid, sympathys }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);



  const [searchListing, setSearchListing] = useState();

  useEffect(() => {


    getListing('users', 'noUserRef', uid).then((res) => {

      setSearchListing(res);
      setListings(res);
      setLoading(false);
    });

  }, []);

  if (loading) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <UsersSearchPanel
        listings={listings}
        searchListing={searchListing}
        setSearchListing={setSearchListing}
      />
      <div className="catalog-grid main-grid">
        {searchListing.map((user, index) => (
          <div key={index} className="col-4">
            <UserItem
              user={user}
              uid={uid}
              sympathys={sympathys}
            />
          </div>
        ))}
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid,
    sympathys: state.sympathys,
  }
}

export default connect(mapStateToProps)(UserCatalog);