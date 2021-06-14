import { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
import './admin_page.css';
import Button from '../../components/button';
import Message from '../../components/message';
import { currentUserIsAdmin, getCents } from '../../utils';
import useAsync from '../../hooks/use_async';
import { createGame } from '../../api/mutations';

function AdminPage() {
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState();
  const [form, setForm] = useState(initialFormState);
  const { status, error, run } = useAsync();
  const history = useHistory();

  useEffect(() => {
    currentUserIsAdmin().then((result) => {
      if (!result) history.push('/');
    });
  }, [history]);

  function onImageSelect(e) {
    const file = e.target.files[0];
    const imageURL = getFileURL(file);
    setImagePreview(imageURL);
    setImageFile(file);
  }

  function onIputChange(e) {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    run(saveGame());
  }

  function resetForm() {
    setForm(initialFormState);
    setImagePreview('');
  }

  async function saveGame() {
    const { title, price } = form;
    if (!title || !imageFile || !price) {
      throw new Error('Fill the form');
    }

    const imageKey = uuid() + imageFile.name.replace(/\s/g, '-').toLowerCase();

    try {
      await Storage.put(imageKey, imageFile);
    } catch (error) {
      throw new Error('Unable to upload the image');
    }

    const game = { title, imageKey, price: getCents(price + '') };
    try {
      await API.graphql(graphqlOperation(createGame, { input: game }));
    } catch (error) {
      throw new Error('Something went wrong');
    }

    resetForm();
  }

  return (
    <div className="Container">
      <h1>Add a game</h1>
      <form onSubmit={onSubmit} className="NewArticleForm">
        <div className="Preview">
          <div>
            <span>Image preview</span>
          </div>
          <img src={imagePreview} alt="" />
        </div>
        <div>
          <div className="Field">
            <label htmlFor="title">Title: </label>
            <input
              className="Input"
              name="title"
              onChange={onIputChange}
              id="title"
              value={form.title}
            />
          </div>
          <div className="Field">
            <label htmlFor="price">Price: </label>
            <input
              className="Input"
              name="price"
              onChange={onIputChange}
              id="price"
              type="number"
              step="0.01"
              value={form.price}
            />
          </div>
          <div className="Field">
            <input className="Input" onChange={onImageSelect} type="file" />
          </div>

          <Button type="primary">
            {status === 'pending' ? 'Submitting...' : 'Submit'}
          </Button>
          {error ? <Message type="failed">{error.message}</Message> : null}
          {status === 'resolved' ? (
            <Message type="succed">{`Game successfully added`}</Message>
          ) : null}
        </div>
      </form>
    </div>
  );
}

function getFileURL(file) {
  return URL.createObjectURL(file);
}

const initialFormState = {
  title: '',
  price: '',
};

const route = {
  routeProps: {
    path: '/admin',
    component: withAuthenticator(AdminPage),
  },
  name: 'AdminPage',
};

export default route;
