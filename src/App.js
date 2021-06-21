import React, { Component } from "react";

import ApiServices from "./components/services/images-api";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import LoadMore from "./components/LoadMoreBtn";
import styles from "../src/App.module.css";

class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    showModal: false,
    largeImage: "",
    loading: false,
    alt: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onChangeQuery = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImg = (e) => {
    this.setState({ largeImage: e.target.dataset.largeurl, alt: e.target.alt });
  };

  fetchImages = () => {
    this.setState({ loading: true });
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };
    ApiServices.fetchImg(options)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }))
      )
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { images, loading, showModal, largeImage, alt } = this.state;
    const LoadMoreBtn = images.length > 0;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          onImgClick={this.getLargeImg}
          onClick={this.toggleModal}
          images={images}
        />
        {loading && <Loader />}
        {LoadMoreBtn && !loading && <LoadMore onChange={this.fetchImages} />}
        {showModal && (
          <Modal
            largeImg={largeImage}
            alt={alt}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
