import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './Searchbar/Searchbar';
import { fetchPhotos } from '../Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button';
import {Loader} from './Loader/Loader'

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
  };

   async componentDidUpdate(prevProps, prevState) {
     if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
     ) {
       const { query, page } = this.state
       const userQuery = query.slice((query.indexOf("/") + 1), query.length);
      try {
      this.setState({ isLoading: true, error: false });
        const data = await fetchPhotos(userQuery, page);
        // console.log(data);
        this.setState({ images: data });
        const { images } = this.state;
        console.log(images);
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ isLoading: false });
    }
    }
  }

  handleSubmit = newQuery => {
    const userRequest = newQuery.query;
    console.log(userRequest);
    this.setState({
      query: `${Date.now()}/${userRequest}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery items={images} />
        {images.length > 0 && <Button onLoad={this.handleLoadMore} />}
        {isLoading && <Loader />}
        <GlobalStyle />
      </div>
    );
  }
};
