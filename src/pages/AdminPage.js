import { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import './AdminPage.css';
import Button from '../components/Button';
import { currentUserIsAdmin } from '../utility';

function getFileURL(file) {
  return URL.createObjectURL(file);
}

function Admin() {
  const [imagePreview, setImagePreview] = useState('');
  const history = useHistory();

  useEffect(() => {
    currentUserIsAdmin().then((result) => {
      if (!result) history.push('/');
    });
  }, [history]);

  function onImageSelect(e) {
    const imageURL = getFileURL(e.target.files[0]);
    setImagePreview(imageURL);
  }

  return (
    <div className="Container">
      <AmplifySignOut />
      <h1>Add a new article</h1>
      <form className="NewArticleForm">
        <div className="Preview">
          <div>
            <span>Image preview</span>
          </div>
          <img src={imagePreview} alt="" />
        </div>
        <div>
          <div className="Field">
            <label htmlFor="title">Title: </label>
            <input id="title" />
          </div>
          <div className="Field">
            <label htmlFor="price">Price: </label>
            <input id="price" type="number" />
          </div>
          <div className="Field">
            <input onChange={onImageSelect} type="file" />
          </div>

          <Button type="primary">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default withAuthenticator(Admin);
